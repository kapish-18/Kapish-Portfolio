import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FooterSection() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const h = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <>
      <footer className="footer bp-dark">
        <div className="wrap">
          <div className="footer__inner">
            <div>
              <div className="footer__name">{personalInfo.name}</div>
              <div className="footer__sub">{personalInfo.title}</div>
            </div>
            <div className="footer__links">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="footer__link" aria-label="GitHub"><Github size={16} /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="footer__link" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href={`mailto:${personalInfo.email}`} className="footer__link" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
          <div className="footer__bottom">
            © {new Date().getFullYear()} {personalInfo.name}. Built with{' '}
            <Heart size={11} style={{ display: 'inline', verticalAlign: 'middle', color: 'var(--ember)' }} />{' '}
            using React, Anime.js & Express.
          </div>
        </div>
      </footer>

      <button className={`back-to-top ${showTop ? 'back-to-top--visible' : ''}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
        <ArrowUp size={18} />
      </button>
    </>
  );
}
