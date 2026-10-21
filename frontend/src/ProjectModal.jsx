import { useEffect, useRef } from 'react';
import { ArrowUpRight, Github, X } from 'lucide-react';
import { SOCIALS } from './config.js';

export default function ProjectModal({ project, index, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="backdrop" onClick={onClose} role="presentation">
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(e) => e.stopPropagation()}>
        <button ref={closeRef} className="icon-btn modal-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>
        <p className="label">{String(index + 1).padStart(2, '0')} · {project.category}</p>
        <h3 id="project-modal-title">{project.title}</h3>
        <p className="modal-desc">{project.description}</p>

        <h4>Results</h4>
        <div className="metrics">
          {project.metrics.map((m) => <span key={m} className="metric">{m}</span>)}
        </div>

        <h4>Built with</h4>
        <p className="modal-desc">{project.tech.join(' · ')}</p>

        <div className="modal-actions">
          <a className="btn btn-primary" href={project.github || SOCIALS.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} /> {project.github ? 'View source' : 'More on GitHub'}
          </a>
          {project.live && (
            <a className="btn btn-secondary" href={project.live} target="_blank" rel="noopener noreferrer">
              Live demo <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
