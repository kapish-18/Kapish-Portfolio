import { useState } from 'react';
import { Github, Download, ExternalLink, CheckCircle } from 'lucide-react';
import { projects, filterCategories } from '../data/portfolioData';
import { useScrollReveal } from '../utils/animeEffects';

export default function ProjectsSection({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const headerRef = useScrollReveal({ delay: 100 });

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section className="sec bp-dark" id="projects">
      <span className="coord">SEC:03 // PORTFOLIO</span>
      <div className="wrap">
        <div className="sec-head" ref={headerRef}>
          <div className="sec-tag sec-tag--cyan">Portfolio</div>
          <h2 className="sec-title sec-title--light">Major Projects</h2>
          <p className="sec-sub sec-sub--light">
            Production-grade systems built with care — from mobile apps
            to full-stack platforms. Each solves a real problem.
          </p>
        </div>

        <div className="projects__filters">
          {filterCategories.map((cat) => (
            <button key={cat} className={`fbtn ${activeFilter === cat ? 'fbtn--active' : ''}`} onClick={() => setActiveFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenModal={onOpenModal} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpenModal }) {
  const cardRef = useScrollReveal({ delay: 80 });

  return (
    <div className={`proj ${project.featured ? 'proj--featured' : ''}`} ref={cardRef}>
      <div className="proj__inner">
        <div className="proj__content">
          <div className="proj__tag">{project.categories.join(' · ')}</div>
          <h3 className="proj__title">{project.title}</h3>
          <p className="proj__sub">{project.description}</p>

          <div className="proj__metrics">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="proj__metric-val">{m.value}</div>
                <div className="proj__metric-lbl">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="proj__chips">
            {project.tech.map((t) => <span key={t} className="chip chip--cyan">{t}</span>)}
          </div>

          <div className="proj__actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm"><Github size={13} /> GitHub</a>
            )}
            {project.apk && (
              <a href={project.apk} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm"><Download size={13} /> APK</a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm"><ExternalLink size={13} /> Live</a>
            )}
            <button className="btn btn--cyan btn--sm" onClick={() => onOpenModal(project)}>
              Deep Dive →
            </button>
          </div>
        </div>

        {project.featured && (
          <div className="proj__side">
            <ul className="proj__highlights">
              {project.highlights.slice(0, 5).map((h, i) => (
                <li key={i} className="proj__hl">
                  <CheckCircle size={14} className="proj__hl-icon" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
