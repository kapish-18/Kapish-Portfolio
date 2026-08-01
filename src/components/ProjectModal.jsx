import { useEffect, useCallback } from 'react';
import { X, Github, Download, ExternalLink, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const handleEsc = useCallback((e) => { if (e.key === 'Escape') onClose(); }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handleEsc); document.body.style.overflow = ''; };
  }, [handleEsc]);

  if (!project) return null;

  return (
    <div className={`modal-overlay ${project ? 'modal-overlay--open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal">
        <div className="modal__header">
          <h2 className="modal__title">{project.title}</h2>
          <button className="modal__close" onClick={onClose} aria-label="Close"><X size={18} /></button>
        </div>

        <div className="modal__body">
          <p className="modal__desc">{project.longDescription}</p>

          <div className="modal__section">
            <h3 className="modal__section-title">Key Metrics</h3>
            <div className="exp__metrics">
              {project.metrics.map((m) => (
                <div key={m.label} className="exp__metric">
                  <div className="exp__metric-val" style={{ color: 'var(--cyan)' }}>{m.value}</div>
                  <div className="exp__metric-lbl">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="modal__section">
            <h3 className="modal__section-title">Architecture Highlights</h3>
            <div className="modal__highlights">
              {project.highlights.map((h, i) => (
                <div key={i} className="modal__hl">
                  <CheckCircle size={14} style={{ color: 'var(--mint)', flexShrink: 0, marginTop: 3 }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {project.codeSnippet && (
            <div className="modal__section">
              <h3 className="modal__section-title">Code Spotlight</h3>
              <pre className="modal__code"><code>{project.codeSnippet}</code></pre>
            </div>
          )}

          <div className="modal__section">
            <h3 className="modal__section-title">Tech Stack</h3>
            <div className="modal__chips">
              {project.tech.map((t) => <span key={t} className="chip chip--cyan">{t}</span>)}
            </div>
          </div>

          <div className="modal__actions">
            {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--ghost"><Github size={15} /> View on GitHub</a>}
            {project.apk && <a href={project.apk} target="_blank" rel="noreferrer" className="btn btn--cyan"><Download size={15} /> Download APK</a>}
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--cyan"><ExternalLink size={15} /> Live Demo</a>}
          </div>
        </div>
      </div>
    </div>
  );
}
