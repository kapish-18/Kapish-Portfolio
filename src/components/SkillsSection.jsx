import { Code2, Smartphone, Server, Database, Package, Wrench } from 'lucide-react';
import { skills } from '../data/portfolioData';
import { useScrollReveal, useStaggerReveal } from '../utils/animeEffects';

const iconMap = { Code2, Smartphone, Server, Database, Package, Wrench };

export default function SkillsSection() {
  const headerRef = useScrollReveal({ delay: 100 });
  const gridRef = useStaggerReveal({ stagger: 100 });

  return (
    <section className="sec bp-dark" id="skills">
      <span className="coord">SEC:05 // STACK</span>
      <div className="wrap">
        <div className="sec-head" ref={headerRef}>
          <div className="sec-tag sec-tag--cyan">Tech Stack</div>
          <h2 className="sec-title sec-title--light">Skills & Technologies</h2>
          <p className="sec-sub sec-sub--light">
            Tools I use to build production-grade software across the
            full stack, mobile platforms, and data pipelines.
          </p>
        </div>

        <div className="skills__grid" ref={gridRef}>
          {skills.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <div key={category.category} className="scat">
                <div className="scat__head">
                  <div className="scat__icon"><Icon size={18} /></div>
                  <div className="scat__name">{category.category}</div>
                </div>
                <div className="scat__items">
                  {category.items.map((item) => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
