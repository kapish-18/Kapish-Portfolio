import { MapPin, Calendar, Briefcase, CheckCircle } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { useScrollReveal, useStaggerReveal } from '../utils/animeEffects';

export default function ExperienceSection() {
  const headerRef = useScrollReveal({ delay: 100 });

  return (
    <section className="sec bp-paper" id="experience">
      <span className="coord">SEC:04 // CAREER</span>
      <div className="wrap">
        <div className="sec-head" ref={headerRef}>
          <div className="sec-tag sec-tag--ink">Experience</div>
          <h2 className="sec-title sec-title--dark">Professional Experience</h2>
          <p className="sec-sub sec-sub--dark">
            Building production software at scale — from data pipelines
            handling thousands of records to real-time mobile platforms.
          </p>
        </div>

        {experience.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  const cardRef = useScrollReveal({ delay: 150 });
  const metricsRef = useStaggerReveal({ stagger: 120, startDelay: 200 });
  const highlightsRef = useStaggerReveal({ stagger: 80, startDelay: 300 });

  return (
    <div className="exp-card" ref={cardRef}>
      <div className="exp__header">
        <div>
          <h3 className="exp__company">
            {exp.company}
            {exp.companyNote && <span style={{ fontSize: '0.78rem', color: 'var(--text-ink-body)', fontWeight: 400, marginLeft: 10 }}>{exp.companyNote}</span>}
          </h3>
          <div className="exp__role">{exp.role}</div>
          <div className="exp__meta">
            <span className="exp__meta-item"><MapPin size={14} /> {exp.location}</span>
            <span className="exp__meta-item"><Calendar size={14} /> {exp.period}</span>
            <span className="exp__meta-item"><Briefcase size={14} /> {exp.type}</span>
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--text-ink-body)', lineHeight: 1.6, marginBottom: 24 }}>
        {exp.description}
      </p>

      <div className="exp__metrics" ref={metricsRef}>
        {exp.metrics.map((m) => (
          <div key={m.label} className="exp__metric">
            <div className="exp__metric-val" style={{ color: m.color }}>{m.value}</div>
            <div className="exp__metric-lbl">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="exp__highlights" ref={highlightsRef}>
        {exp.highlights.map((h, i) => (
          <div key={i} className="exp__hl">
            <CheckCircle size={14} className="exp__hl-icon" />
            <span>{h}</span>
          </div>
        ))}
      </div>

      <div className="exp__chips">
        {exp.tech.map((t) => <span key={t} className="chip chip--dark">{t}</span>)}
      </div>
    </div>
  );
}
