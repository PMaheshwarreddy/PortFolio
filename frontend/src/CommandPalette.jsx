import { useEffect, useMemo, useRef, useState } from 'react';
import { Command, CornerDownLeft, Search } from 'lucide-react';

/**
 * Ctrl/Cmd + K command palette for quick navigation.
 * `actions`: [{ id, label, hint, run }]
 */
export default function CommandPalette({ actions }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener('keydown', onKey);
    window.addEventListener('open-command-palette', onOpen);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('open-command-palette', onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => `${a.label} ${a.hint || ''}`.toLowerCase().includes(q));
  }, [actions, query]);

  if (!open) return null;

  const runAction = (action) => {
    setOpen(false);
    action?.run();
  };

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      runAction(filtered[active]);
    }
  };

  return (
    <div className="backdrop palette-backdrop" onClick={() => setOpen(false)} role="presentation">
      <div className="palette" role="dialog" aria-modal="true" aria-label="Command palette" onClick={(e) => e.stopPropagation()}>
        <div className="palette-search">
          <Search size={16} />
          <input
            ref={inputRef}
            id="command-palette-input"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActive(0); }}
            onKeyDown={onInputKey}
            placeholder="Search sections, projects, links…"
            aria-label="Search commands"
          />
          <kbd>Esc</kbd>
        </div>
        <ul className="palette-list" role="listbox">
          {filtered.length === 0 && <li className="palette-empty">No matching commands</li>}
          {filtered.map((a, i) => (
            <li
              key={a.id}
              role="option"
              aria-selected={i === active}
              className={`palette-item ${i === active ? 'active' : ''}`}
              onMouseEnter={() => setActive(i)}
              onClick={() => runAction(a)}
            >
              <span>{a.label}</span>
              {i === active ? <CornerDownLeft size={14} /> : <small>{a.hint}</small>}
            </li>
          ))}
        </ul>
        <div className="palette-footer">
          <Command size={12} /> K to open · ↑↓ to move · Enter to select
        </div>
      </div>
    </div>
  );
}
