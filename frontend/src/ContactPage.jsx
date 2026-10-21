import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Check, CheckCircle2, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import Socials from './Socials.jsx';
import { API_URL } from './config.js';

const TOPICS = ['Job opportunity', 'Freelance project', 'Collaboration', 'Just saying hi'];
const MAX_MESSAGE = 2000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY = { name: '', email: '', message: '', company: '' };

function validate(v) {
  const errors = {};
  if (v.name.trim().length < 2) errors.name = 'Please tell me your name.';
  if (!EMAIL_RE.test(v.email.trim())) errors.email = 'Please enter a valid email so I can reply.';
  if (v.message.trim().length < 10) errors.message = 'A few more words, please (at least 10 characters).';
  return errors;
}

export default function ContactPage({ profile, onHome }) {
  const [values, setValues] = useState(EMPTY);
  const [topic, setTopic] = useState(TOPICS[0]);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');
  const [copied, setCopied] = useState(false);
  const nameRef = useRef(null);
  const doneRef = useRef(null);

  useEffect(() => { nameRef.current?.focus({ preventScroll: true }); }, []);
  useEffect(() => { if (status === 'sent') doneRef.current?.focus(); }, [status]);

  const update = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (touched[field]) setErrors(validate(next));
  };
  // Only complain on blur once something was typed; empty fields are flagged on submit.
  // (Showing an error on blur shifts the layout and can make the Send click miss.)
  const blur = (field) => () => {
    if (!values[field].trim()) return;
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(values));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard blocked: the mailto link still works */ }
  };

  async function submit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(found).length) {
      document.getElementById(`cf-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    setStatus('sending');
    setErrorMsg('');
    try {
      if (!API_URL) throw new Error('The contact service is not available right now');
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, subject: topic }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(result.message || 'Your message could not be sent');
      setStatus('sent');
    } catch (err) {
      setErrorMsg(err.message === 'Failed to fetch' ? 'Network error, please check your connection' : err.message);
      setStatus('error');
    }
  }

  const reset = () => {
    setValues(EMPTY);
    setTopic(TOPICS[0]);
    setErrors({});
    setTouched({});
    setStatus('idle');
  };

  const fieldProps = (field) => ({
    id: `cf-${field}`,
    name: field,
    value: values[field],
    onChange: update(field),
    onBlur: blur(field),
    'aria-invalid': touched[field] && errors[field] ? true : undefined,
    'aria-describedby': touched[field] && errors[field] ? `cf-${field}-err` : undefined,
  });
  const err = (field) => touched[field] && errors[field] && (
    <span className="field-error" id={`cf-${field}-err`}>{errors[field]}</span>
  );
  const firstName = values.name.trim().split(/\s+/)[0];

  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="wrap">
        <button type="button" className="back-link" onClick={onHome}>
          <ArrowLeft size={16} aria-hidden="true" /> Back to home
        </button>

        <div className="contact-layout">
          <aside className="contact-aside">
            <p className="label">Contact</p>
            <h1 id="contact-title">Get in touch</h1>
            <p className="contact-lead">
              Whether it&apos;s a role, a project or just a question about my work, I&apos;d be glad to hear from you.
              Your message goes straight to my inbox.
            </p>

            <ul className="contact-details">
              <li>
                <span className="cd-icon"><Mail size={17} aria-hidden="true" /></span>
                <span className="cd-text"><small>Email</small><a href={`mailto:${profile.email}`} className="cd-email">{profile.email.split(/(?<=^[^@]*\.)|(?=@)/).map((part, i) => <span key={i}>{i > 0 && <wbr />}{part}</span>)}</a></span>
                <button type="button" className="cd-copy" onClick={copyEmail} aria-label="Copy email address" title="Copy email">
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </li>
              <li>
                <span className="cd-icon"><Phone size={17} aria-hidden="true" /></span>
                <span className="cd-text"><small>Phone</small><a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></span>
              </li>
              <li>
                <span className="cd-icon"><MapPin size={17} aria-hidden="true" /></span>
                <span className="cd-text"><small>Based in</small>{profile.location}</span>
              </li>
            </ul>
            <span className="sr-only" aria-live="polite">{copied ? 'Email address copied' : ''}</span>

            <Socials className="socials contact-socials" />
          </aside>

          <div className="contact-card">
            {status === 'sent' ? (
              <div className="sent" ref={doneRef} tabIndex={-1}>
                <span className="sent-icon"><CheckCircle2 size={40} aria-hidden="true" /></span>
                <h2>Thanks{firstName ? `, ${firstName}` : ''}!</h2>
                <p>Your message is on its way. I&apos;ll reply to <strong>{values.email.trim()}</strong> as soon as I can.</p>
                <div className="sent-actions">
                  <button type="button" className="btn btn-primary" onClick={onHome}>Back to home</button>
                  <button type="button" className="btn btn-secondary" onClick={reset}>Send another message</button>
                </div>
              </div>
            ) : (
              <form className="cform" onSubmit={submit} noValidate>
                <fieldset className="topics">
                  <legend>What&apos;s this about?</legend>
                  <div className="topic-list">
                    {TOPICS.map((t) => (
                      <label key={t} className={`topic${topic === t ? ' on' : ''}`}>
                        <input type="radio" name="topic" value={t} checked={topic === t} onChange={() => setTopic(t)} />
                        {t}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="cform-row">
                  <div className="field">
                    <label htmlFor="cf-name">Your name</label>
                    <input ref={nameRef} {...fieldProps('name')} autoComplete="name" maxLength={120} placeholder="Jane Cooper" />
                    {err('name')}
                  </div>
                  <div className="field">
                    <label htmlFor="cf-email">Email address</label>
                    <input {...fieldProps('email')} type="email" autoComplete="email" maxLength={200} placeholder="jane@company.com" />
                    {err('email')}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="cf-message">Message</label>
                  <textarea {...fieldProps('message')} rows={6} maxLength={MAX_MESSAGE} placeholder="Tell me a little about the role or project…" />
                  <div className="field-foot">
                    {err('message') || <span />}
                    <span className="counter">{values.message.length} / {MAX_MESSAGE}</span>
                  </div>
                </div>

                {/* Honeypot: hidden from people, bots fill it in */}
                <input type="text" name="company" value={values.company} onChange={update('company')} tabIndex={-1} autoComplete="off" className="hp-field" aria-hidden="true" />

                {status === 'error' && (
                  <p className="cform-error" role="alert">
                    {errorMsg}. You can also email me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
                  </p>
                )}

                <button type="submit" className="btn btn-primary btn-send" disabled={status === 'sending'}>
                  {status === 'sending' ? <><span className="spinner" aria-hidden="true" /> Sending…</> : <><Send size={17} /> Send message</>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
