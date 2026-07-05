import { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, CornerDownLeft } from 'lucide-react';

export default function TerminalConsole({ profile, projects, stack, setCurrentView }) {
  const [history, setHistory] = useState([
    { text: 'Type "help" to view all available commands.', type: 'info' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandSubmit = async (e) => {
    e.preventDefault();
    const query = inputVal.trim();
    if (!query) return;
    const commandClean = query.toLowerCase();

    setInputVal('');
    setHistory((prev) => [...prev, { text: `pmr-user@matrix:~$ ${query}`, type: 'input' }]);

    let response = [];

    switch (commandClean) {
      case 'help':
        response.push({ text: 'AVAILABLE COMMANDS:', type: 'system' });
        response.push({ text: '  about      - Display background summary', type: 'info' });
        response.push({ text: '  skills     - List technical stack highlights', type: 'info' });
        response.push({ text: '  projects   - Show all deployed enterprise solutions', type: 'info' });
        response.push({ text: '  contact    - Scroll to secure communication panel', type: 'info' });
        response.push({ text: '  clear      - Clear console terminal logs', type: 'info' });
        setHistory((prev) => [...prev, ...response]);
        break;
      case 'about':
        response.push({ text: `NAME: ${profile.name}`, type: 'success' });
        response.push({ text: `ROLE: ${profile.role}`, type: 'success' });
        response.push({ text: `LOCATION: ${profile.location}`, type: 'info' });
        response.push({ text: `SUMMARY: ${profile.summary}`, type: 'info' });
        setHistory((prev) => [...prev, ...response]);
        break;
      case 'skills':
        response.push({ text: 'TECH STACK DOMAINS:', type: 'system' });
        stack.forEach(([category, items]) => {
          response.push({ text: `  [${category}]: ${items.slice(0, 6).join(', ')}...`, type: 'success' });
        });
        setHistory((prev) => [...prev, ...response]);
        break;
      case 'projects':
        response.push({ text: 'DEPLOYED ENTERPRISE SOLUTIONS:', type: 'system' });
        projects.forEach((proj, idx) => {
          response.push({ text: `  0${idx + 1}. ${proj.title} - ${proj.category} (${proj.metrics[0]})`, type: 'success' });
        });
        setHistory((prev) => [...prev, ...response]);
        break;
      case 'contact':
        response.push({ text: 'Redirecting payload to contact terminal...', type: 'info' });
        setHistory((prev) => [...prev, ...response]);
        setTimeout(() => {
          if (setCurrentView) {
            setCurrentView('contact');
            window.scrollTo(0, 0);
          } else {
            const contactSec = document.getElementById('contact');
            contactSec?.scrollIntoView({ behavior: 'smooth' });
          }
        }, 600);
        break;
      case 'clear':
        setHistory([]);
        break;
      default:
        try {
          setHistory((prev) => [...prev, { text: 'Thinking...', type: 'info', id: 'loading-line' }]);
          
          const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
          const res = await fetch(`${API_URL}/api/chat`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: query }),
          });
          const data = await res.json();
          
          setHistory((prev) => {
            const filtered = prev.filter(item => item.id !== 'loading-line');
            return [...filtered, { text: data.reply || 'No response received from system AI.', type: 'success' }];
          });
        } catch (err) {
          console.error(err);
          setHistory((prev) => {
            const filtered = prev.filter(item => item.id !== 'loading-line');
            return [...filtered, { text: `System offline: unable to establish connection to AI core.`, type: 'error' }];
          });
        }
    }
  };

  return (
    <div className="terminal-console-wrapper cyber-card">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-title">
          <Terminal size={14} /> interactive_matrix_console.sh
        </div>
        <div className="terminal-status-badge">
          <Shield size={12} /> SECURE_TLS_256
        </div>
      </div>

      <div className="terminal-body">
        {history.map((line, index) => (
          <div key={index} className={`terminal-line ${line.type}`}>
            {line.text}
          </div>
        ))}
        <form onSubmit={handleCommandSubmit} className="terminal-input-row">
          <span className="terminal-prompt">
            <span className="prompt-host">pmr-user@matrix:~</span>$
          </span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command..."
            className="terminal-input-box"
            autoFocus
          />
          <button type="submit" className="terminal-submit-btn" aria-label="Submit command">
            <CornerDownLeft size={12} />
          </button>
        </form>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}
