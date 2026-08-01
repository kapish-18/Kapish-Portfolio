import { GraduationCap, Trophy, Target } from 'lucide-react';
import { education, achievements, currentFocus } from '../data/portfolioData';
import { useScrollReveal } from '../utils/animeEffects';

export default function EducationSection() {
  const headerRef = useScrollReveal({ delay: 100 });
  const mainRef = useScrollReveal({ delay: 200 });
  const sideRef = useScrollReveal({ delay: 300 });

  return (
    <section className="sec bp-paper" id="education">
      <span className="coord">SEC:06 // ACADEMIC</span>
      <div className="wrap">
        <div className="sec-head" ref={headerRef}>
          <div className="sec-tag sec-tag--ink">Education & Achievements</div>
          <h2 className="sec-title sec-title--dark">Academic Foundation</h2>
          <p className="sec-sub sec-sub--dark">
            Strong fundamentals in CS with hands-on competition experience.
          </p>
        </div>

        <div className="edu__grid">
          <div className="edu-main" ref={mainRef}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div className="scat__icon" style={{ background: 'rgba(0,212,255,0.08)', color: 'var(--cyan)' }}>
                <GraduationCap size={18} />
              </div>
              <div>
                <h3 className="edu__school">{education.school}</h3>
                <div className="edu__degree">{education.degree} ({education.specialization})</div>
              </div>
            </div>
            <div className="edu__period">{education.period}</div>
            <div className="edu__courses-label">Relevant Coursework</div>
            <div className="edu__courses">
              {education.courses.map((c) => <span key={c} className="chip chip--dark">{c}</span>)}
            </div>

            {/* Current Focus */}
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: '1px solid rgba(26,26,46,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Target size={15} style={{ color: 'var(--ember)' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-ink-body)', textTransform: 'uppercase', letterSpacing: '1px' }}>Current Focus</span>
              </div>
              {currentFocus.map((f, i) => (
                <p key={i} style={{ fontSize: '0.85rem', color: 'var(--text-ink-body)', lineHeight: 1.6, marginBottom: 4, paddingLeft: 4 }}>→ {f}</p>
              ))}
            </div>
          </div>

          <div className="edu__sidebar" ref={sideRef}>
            {achievements.map((a) => (
              <div key={a.id} className="ach-card">
                <div className="ach-card__icon"><Trophy size={18} /></div>
                <h4 className="ach-card__title">{a.title}</h4>
                <p className="ach-card__desc">{a.description}</p>
              </div>
            ))}

            <div className="ach-card" style={{ borderColor: 'rgba(233,69,96,0.15)', background: 'linear-gradient(135deg, rgba(233,69,96,0.04), rgba(245,166,35,0.04))' }}>
              <div className="ach-card__icon" style={{ background: 'rgba(233,69,96,0.1)' }}>💡</div>
              <h4 className="ach-card__title">Problem-Solver Mindset</h4>
              <p className="ach-card__desc">
                Every project starts with understanding the problem deeply.
                I write code that is correct, resilient, and maintainable —
                then ship it to real users.
              </p>
            </div>

            <div className="ach-card" style={{ borderColor: 'rgba(45,212,191,0.15)', background: 'linear-gradient(135deg, rgba(45,212,191,0.04), rgba(0,212,255,0.04))' }}>
              <div className="ach-card__icon" style={{ background: 'rgba(45,212,191,0.1)' }}>🧠</div>
              <h4 className="ach-card__title">Learn by Building</h4>
              <p className="ach-card__desc">
                I learn by building systems used by real people — not
                tutorials. OneCart runs on campus. TrueFit runs in gyms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
