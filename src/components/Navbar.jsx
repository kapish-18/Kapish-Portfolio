import { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#" className="navbar__logo">KT_</a>

      <div className="navbar__links">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="navbar__link">{link.label}</a>
        ))}
      </div>

      <div className="navbar__actions">
        <a href={personalInfo.resumePath} target="_blank" rel="noreferrer" className="navbar__resume-btn">
          <FileText size={13} /> Resume
        </a>
        <button className="navbar__mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      </nav>

      <div className={`navbar__mobile-menu ${mobileOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="navbar__link" onClick={() => setMobileOpen(false)}>{link.label}</a>
        ))}
      </div>
    </>
  );
}
