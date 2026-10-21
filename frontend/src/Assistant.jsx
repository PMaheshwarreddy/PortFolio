import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUp, RotateCcw, Square } from 'lucide-react';
import { API_URL } from './config.js';

const STORE_KEY = 'synapse-chat-v2';
const QUESTIONS = [
  'What do you do at Klystron Global?',
  'What tech stack do you use at work?',
  'Tell me about Next-Gen Governance',
  'Why should we hire you?',
  'Which of your projects use LLMs?',
  'What are you best at?',
  'Can I see something live?',
  'How can I reach you?',
];

/* ---------- tiny, safe Markdown subset → React (no innerHTML) ---------- */
const INLINE = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|(https?:\/\/[^\s)]+[^\s).,;:!?])/g;
const safeHref = (url) => (/^(https?:|mailto:|\/|#)/i.test(url) ? url : null);

function inline(text, keyBase) {
  const out = [];
  let last = 0;
  let m;
  INLINE.lastIndex = 0;
  while ((m = INLINE.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const key = `${keyBase}-${m.index}`;
    if (m[1]) {
      const href = safeHref(m[2]);
      const internal = href && (href.startsWith('#') || href.startsWith('/'));
      const onClick = href === '/contact' ? (e) => { e.preventDefault(); window.dispatchEvent(new Event('open-contact')); } : undefined;
      out.push(href ? <a key={key} href={href} onClick={onClick} target={internal ? undefined : '_blank'} rel={internal ? undefined : 'noopener noreferrer'}>{m[1]}</a> : m[1]);
    } else if (m[3]) out.push(<strong key={key}>{m[3]}</strong>);
    else if (m[4]) out.push(<code key={key}>{m[4]}</code>);
    else if (m[5]) out.push(<a key={key} href={m[5]} target="_blank" rel="noopener noreferrer">{m[5].replace(/^https?:\/\/(www\.)?/, '')}</a>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Markdown({ text }) {
  const blocks = [];
  let list = null;
  let para = [];
  const flushPara = () => {
    if (para.length) blocks.push({ type: 'p', lines: para });
    para = [];
  };
  let code = null;
  for (const raw of text.split('\n')) {
    const line = raw.trimEnd();
    if (/^\s*```/.test(line)) {
      if (code) { blocks.push(code); code = null; } else { flushPara(); list = null; code = { type: 'pre', lines: [] }; }
      continue;
    }
    if (code) { code.lines.push(raw); continue; }
    const bullet = line.match(/^\s*[-*•]\s+(.*)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
    if (bullet || numbered) {
      flushPara();
      const type = bullet ? 'ul' : 'ol';
      if (!list || list.type !== type) { list = { type, items: [] }; blocks.push(list); }
      list.items.push((bullet || numbered)[1]);
    } else if (!line.trim()) {
      flushPara();
      list = null;
    } else {
      list = null;
      para.push(line.replace(/^#+\s*/, ''));
    }
  }
  if (code) blocks.push(code); // unfinished block while streaming
  flushPara();

  return blocks.map((b, i) => {
    if (b.type === 'pre') return <pre key={i}><code>{b.lines.join('\n')}</code></pre>;
    if (b.type === 'p') {
      return <p key={i}>{b.lines.flatMap((l, j) => (j ? [<br key={`br${j}`} />, ...inline(l, `${i}-${j}`)] : inline(l, `${i}-${j}`)))}</p>;
    }
    const List = b.type;
    return <List key={i}>{b.items.map((it, j) => <li key={j}>{inline(it, `${i}-${j}`)}</li>)}</List>;
  });
}

/* ---------- streaming client ---------- */
async function streamChat({ message, history, signal, onToken }) {
  if (!API_URL) throw new Error('offline');
  const res = await fetch(`${API_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'text/event-stream' },
    body: JSON.stringify({ message, history }),
    signal,
  });
  if (!res.ok) {
    const j = await res.json().catch(() => ({}));
    throw new Error(j.reply || j.message || 'offline');
  }
  if (!(res.headers.get('content-type') || '').includes('text/event-stream') || !res.body) {
    const j = await res.json();
    onToken(j.reply || '');
    return;
  }
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  for (;;) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let idx;
    while ((idx = buffer.indexOf('\n\n')) >= 0) {
      const event = buffer.slice(0, idx);
      buffer = buffer.slice(idx + 2);
      const line = event.split('\n').find((l) => l.startsWith('data:'));
      if (!line) continue;
      const data = JSON.parse(line.slice(5));
      if (data.error) throw new Error(data.error);
      if (data.t) onToken(data.t);
    }
  }
}

function loadSaved() {
  try { return JSON.parse(sessionStorage.getItem(STORE_KEY) || '[]'); } catch { return []; }
}

export default function Assistant({ profile }) {
  const [messages, setMessages] = useState(loadSaved);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [slow, setSlow] = useState(false);
  const logRef = useRef(null);
  const abortRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    try { sessionStorage.setItem(STORE_KEY, JSON.stringify(messages.filter((m) => !m.pending).slice(-30))); } catch { /* ignore */ }
    const log = logRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [messages]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const ask = useCallback(async (raw) => {
    const question = raw.trim();
    if (!question || busy) return;
    setInput('');
    setBusy(true);
    setSlow(false);

    const history = messages.filter((m) => !m.error && m.text).map((m) => ({ role: m.role, text: m.text })).slice(-10);
    setMessages((prev) => [...prev, { role: 'user', text: question }, { role: 'model', text: '', pending: true }]);

    const ctrl = new AbortController();
    abortRef.current = ctrl;
    const slowTimer = setTimeout(() => setSlow(true), 5000);

    // Buffer tokens and paint once per frame: smooth even for fast streams
    let acc = '';
    let frame = 0;
    const paint = () => {
      frame = 0;
      setMessages((prev) => {
        const next = prev.slice();
        next[next.length - 1] = { role: 'model', text: acc, pending: true };
        return next;
      });
    };

    try {
      await streamChat({
        message: question,
        history,
        signal: ctrl.signal,
        onToken: (t) => {
          if (!acc) { clearTimeout(slowTimer); setSlow(false); }
          acc += t;
          if (!frame) frame = requestAnimationFrame(paint);
        },
      });
      cancelAnimationFrame(frame);
      setMessages((prev) => [...prev.slice(0, -1), { role: 'model', text: acc.trim() || 'Sorry, I did not get a reply. Please try again.' }]);
    } catch (err) {
      cancelAnimationFrame(frame);
      const stopped = err.name === 'AbortError';
      setMessages((prev) => [
        ...prev.slice(0, -1),
        stopped
          ? { role: 'model', text: acc.trim() || 'Stopped.' }
          : {
              role: 'model',
              error: true,
              text: err.message && err.message !== 'offline' && err.message !== 'Failed to fetch'
                ? err.message
                : `I can't reach the server right now. You can email [${profile.email}](mailto:${profile.email}) instead.`,
            },
      ]);
    } finally {
      clearTimeout(slowTimer);
      setSlow(false);
      setBusy(false);
      abortRef.current = null;
    }
  }, [busy, messages, profile.email]);

  const reset = () => {
    abortRef.current?.abort();
    setMessages([]);
    inputRef.current?.focus();
  };

  const asked = new Set(messages.filter((m) => m.role === 'user').map((m) => m.text));
  const suggestions = QUESTIONS.filter((q) => !asked.has(q)).slice(0, messages.length ? 3 : 4);
  const last = messages.at(-1);

  return (
    <div className="chat">
      <div className="chat-head">
        <div className="chat-title">
          <span className="chat-avatar" aria-hidden="true">S</span>
          <div>
            <strong>Synapse</strong>
            <span>Answers the way {profile.firstName} would · replies in seconds</span>
          </div>
        </div>
        {messages.length > 0 && (
          <button type="button" className="icon-btn" onClick={reset} aria-label="Start a new conversation" title="New conversation">
            <RotateCcw size={16} />
          </button>
        )}
      </div>

      <div className="chat-log" ref={logRef} aria-live="polite" aria-busy={busy}>
        {messages.length === 0 && (
          <div className="msg msg-bot">
            <p>Hey there! I&apos;m Synapse, and I answer the way {profile.firstName} would. Ask me about my work, my projects or my skills, or anything else you&apos;re curious about.</p>
          </div>
        )}
        {messages.map((m, i) => (
          m.role === 'user'
            ? <div key={i} className="msg msg-user">{m.text}</div>
            : (
              <div key={i} className={`msg msg-bot${m.error ? ' error' : ''}`}>
                {m.text ? <Markdown text={m.text} /> : <span className="typing" aria-label="Thinking"><i /><i /><i /></span>}
              </div>
            )
        ))}
        {slow && last?.pending && !last.text && (
          <p className="chat-note">Waking up the server. The first reply can take up to 30 seconds.</p>
        )}
        {!busy && suggestions.length > 0 && (
          <div className="chips">
            {suggestions.map((q) => (
              <button key={q} type="button" className="chip" onClick={() => ask(q)}>{q}</button>
            ))}
          </div>
        )}
      </div>

      <form className="chat-form" onSubmit={(e) => { e.preventDefault(); ask(input); }}>
        <label htmlFor="chat-input" className="sr-only">Ask a question</label>
        <input
          id="chat-input"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question…"
          autoComplete="off"
          maxLength={500}
        />
        {busy ? (
          <button type="button" className="btn btn-secondary" onClick={() => abortRef.current?.abort()} aria-label="Stop answer">
            <Square size={14} />
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" aria-label="Send question" disabled={!input.trim()}>
            <ArrowUp size={18} />
          </button>
        )}
      </form>
    </div>
  );
}
