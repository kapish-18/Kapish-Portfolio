import { useState, useRef, useEffect, useCallback } from 'react';
import { ArrowDown, Rocket, FileText, Mail } from 'lucide-react';
import anime from 'animejs/lib/anime.es.js';
import { personalInfo, heroStats, terminalCommands } from '../data/portfolioData';

export default function HeroSection() {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome. Type "help" for commands.', style: 'highlight' },
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const badgeRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const philRef = useRef(null);
  const statsRef = useRef(null);
  const ctasRef = useRef(null);
  const termRef = useRef(null);

  useEffect(() => {
    const tl = anime.timeline({ easing: 'easeOutExpo' });
    tl.add({ targets: badgeRef.current, translateY: [15, 0], opacity: [0, 1], duration: 700 })
      .add({ targets: nameRef.current, translateY: [30, 0], opacity: [0, 1], duration: 900 }, '-=400')
      .add({ targets: roleRef.current, translateY: [20, 0], opacity: [0, 1], duration: 700 }, '-=500')
      .add({ targets: philRef.current, translateX: [-15, 0], opacity: [0, 1], duration: 600 }, '-=400')
      .add({ targets: statsRef.current?.children ? Array.from(statsRef.current.children) : [], translateY: [15, 0], opacity: [0, 1], duration: 500, delay: anime.stagger(80) }, '-=300')
      .add({ targets: ctasRef.current?.children ? Array.from(ctasRef.current.children) : [], translateY: [10, 0], opacity: [0, 1], duration: 400, delay: anime.stagger(60) }, '-=200')
      .add({ targets: termRef.current, translateY: [20, 0], opacity: [0, 1], scale: [0.98, 1], duration: 800 }, '-=500');
  }, []);

  useEffect(() => {
    if (terminalBodyRef.current) terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
  }, [history]);

  const processCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;
    const newHistory = [...history, { type: 'input', text: trimmed }];
    if (trimmed === 'clear') { setHistory([]); return; }
    if (trimmed === 'resume') {
      window.open(personalInfo.resumePath, '_blank');
      newHistory.push({ type: 'output', text: 'Opening resume...', style: 'success' });
      setHistory(newHistory); return;
    }
    const command = terminalCommands[trimmed];
    if (command) {
      command.output.forEach((line) => newHistory.push({ type: 'output', text: line.text, style: line.type }));
    } else {
      newHistory.push({ type: 'output', text: `Command not found: ${trimmed}. Type "help".`, style: 'warning' });
    }
    setHistory(newHistory);
    setCmdHistory((prev) => [trimmed, ...prev]);
    setCmdIndex(-1);
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { processCommand(input); setInput(''); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (cmdHistory.length) { const i = Math.min(cmdIndex + 1, cmdHistory.length - 1); setCmdIndex(i); setInput(cmdHistory[i]); } }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (cmdIndex > 0) { setCmdIndex(cmdIndex - 1); setInput(cmdHistory[cmdIndex - 1]); } else { setCmdIndex(-1); setInput(''); } }
  };

  const renderLine = (entry, i) => {
    if (entry.type === 'input') return (
      <div key={i} className="terminal__line">
        <span className="terminal__prompt">visitor@kapish</span>
        <span className="terminal__prompt-symbol">$</span>
        <span style={{ color: 'var(--text-loud)' }}>{entry.text}</span>
      </div>
    );
    const cls = entry.style === 'highlight' ? 'terminal__output--highlight' : entry.style === 'success' ? 'terminal__output--success' : entry.style === 'warning' ? 'terminal__output--warning' : entry.style === 'code' ? 'terminal__output--code' : '';
    return <div key={i} className={`terminal__output ${cls}`}>{entry.text}</div>;
  };

  return (
    <section className="hero sec bp-dark" id="about">
      <span className="coord">SEC:01 // IDENTITY</span>

      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 60, alignItems: 'center', width: '100%' }}>
        <div className="hero__text">
          <div ref={badgeRef} className="hero__badge" style={{ opacity: 0 }}>
            <span className="hero__badge-dot" />
            {personalInfo.statusBadge}
          </div>

          <div ref={nameRef} style={{ opacity: 0 }}>
            <span className="hero__greeting">Hey, I'm</span>
            <h1 className="hero__name">{personalInfo.name}</h1>
          </div>

          <p ref={roleRef} className="hero__role" style={{ opacity: 0 }}>
            <strong>{personalInfo.title}</strong> — building production systems that real people depend on.
          </p>

          <p ref={philRef} className="hero__philosophy" style={{ opacity: 0 }}>
            {personalInfo.tagline}
          </p>

          <div ref={statsRef} className="hero__stats">
            {heroStats.map((s) => (
              <div key={s.label} style={{ opacity: 0 }}>
                <div className="hero__stat-val">{s.value}</div>
                <div className="hero__stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>

          <div ref={ctasRef} className="hero__ctas">
            <a href="#projects" className="btn btn--cyan" style={{ opacity: 0 }}><Rocket size={15} /> Explore Projects</a>
            <a href={personalInfo.resumePath} target="_blank" rel="noreferrer" className="btn btn--ghost" style={{ opacity: 0 }}><FileText size={15} /> Resume</a>
            <a href="#contact" className="btn btn--ghost" style={{ opacity: 0 }}><Mail size={15} /> Contact</a>
          </div>
        </div>

        <div ref={termRef} className="terminal" style={{ opacity: 0 }} onClick={() => inputRef.current?.focus()}>
          <div className="terminal__header">
            <div className="terminal__dots">
              <span className="terminal__dot terminal__dot--red" />
              <span className="terminal__dot terminal__dot--yellow" />
              <span className="terminal__dot terminal__dot--green" />
            </div>
            <span className="terminal__title">visitor@kapish — portfolio</span>
          </div>
          <div className="terminal__body" ref={terminalBodyRef}>
            {history.map(renderLine)}
            <div className="terminal__input-line">
              <span className="terminal__prompt">visitor@kapish</span>
              <span className="terminal__prompt-symbol">$</span>
              <input ref={inputRef} className="terminal__input" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="type a command..." spellCheck={false} autoComplete="off" />
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>scroll</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
