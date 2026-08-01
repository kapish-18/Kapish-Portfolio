import { problemsSolved } from '../data/portfolioData';
import { useScrollReveal, useStaggerReveal } from '../utils/animeEffects';

export default function ProblemSolverSection() {
  const headerRef = useScrollReveal({ delay: 100 });
  const gridRef = useStaggerReveal({ stagger: 150 });

  return (
    <section className="sec bp-paper" id="problem-solving">
      <span className="coord">SEC:02 // ENGINEERING</span>
      <div className="wrap">
        <div className="sec-head" ref={headerRef}>
          <div className="sec-tag sec-tag--ink">Problem Solving DNA</div>
          <h2 className="sec-title sec-title--dark">Real Problems. Real Solutions.</h2>
          <p className="sec-sub sec-sub--dark">
            Engineering isn't about writing code — it's about solving the right
            problem with the right architecture.
          </p>
          <span className="annotation annotation--dark">← this is what I actually do ↓</span>
        </div>

        <div className="problems__grid" ref={gridRef}>
          {problemsSolved.map((p) => (
            <div key={p.id} className="pcard">
              {p.annotation && <span className="pcard__annotation">{p.annotation}</span>}
              <div className="pcard__project">{p.project}</div>
              <h3 className="pcard__title">{p.title}</h3>
              <p className="pcard__desc">{p.description}</p>
              <pre className="pcard__code"><code>{p.code}</code></pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
