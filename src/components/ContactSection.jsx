import { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../utils/animeEffects';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState(null);
  const [statusMsg, setStatusMsg] = useState('');
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const headerRef = useScrollReveal({ delay: 100 });
  const formRef = useScrollReveal({ delay: 250 });
  const linksRef = useScrollReveal({ delay: 200 });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setStatus('error'); setStatusMsg('Please fill required fields.'); return; }
    setSending(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (res.ok) { setStatus('success'); setStatusMsg(data.message || 'Message sent!'); setForm({ name: '', email: '', company: '', message: '' }); }
      else { setStatus('error'); setStatusMsg(data.error || 'Something went wrong.'); }
    } catch { setStatus('error'); setStatusMsg('Server unavailable — email me directly.'); }
    finally { setSending(false); setTimeout(() => setStatus(null), 5000); }
  };

  const copyEmail = () => { navigator.clipboard.writeText(personalInfo.email); setCopied(true); setTimeout(() => setCopied(false), 2000); };

  return (
    <section className="sec bp-dark" id="contact">
      <span className="coord">SEC:07 // CONNECT</span>
      <div className="wrap">
        <div className="sec-head" ref={headerRef}>
          <div className="sec-tag sec-tag--cyan">Get In Touch</div>
          <h2 className="sec-title sec-title--light">Let's Connect</h2>
          <p className="sec-sub sec-sub--light">
            Open to internships, freelance, and collaborations. My inbox is always open.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info" ref={linksRef}>
            <p className="contact__text">
              Whether you're a recruiter, a fellow engineer, or just want to say hi —
              I'd love to hear from you. Currently based at VIT Vellore and open to
              remote opportunities worldwide.
            </p>

            <div className="contact__links">
              <div className="clink" onClick={copyEmail}>
                <Mail size={18} className="clink__icon" />
                <div>
                  <div className="clink__label">Email</div>
                  <div className="clink__value">
                    {personalInfo.email}
                    <span style={{ marginLeft: 8, opacity: 0.5 }}>
                      {copied ? <CheckCircle size={12} style={{ color: 'var(--mint)' }} /> : <Copy size={12} />}
                    </span>
                  </div>
                </div>
              </div>

              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="clink">
                <Github size={18} className="clink__icon" />
                <div>
                  <div className="clink__label">GitHub</div>
                  <div className="clink__value">github.com/kapish-18</div>
                </div>
              </a>

              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="clink">
                <Linkedin size={18} className="clink__icon" />
                <div>
                  <div className="clink__label">LinkedIn</div>
                  <div className="clink__value">linkedin.com/in/kapish-tickoo</div>
                </div>
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} ref={formRef}>
            <h3 className="contact__form-title">Send a Message</h3>
            <p className="contact__form-sub">Recruiter? Engineer? Curious? All welcome.</p>

            <div className="form-group form-group--row">
              <div className="form-group">
                <label className="form-label" htmlFor="c-name">Name *</label>
                <input id="c-name" className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="c-co">Company</label>
                <input id="c-co" className="form-input" name="company" value={form.company} onChange={handleChange} placeholder="Optional" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-email">Email *</label>
              <input id="c-email" className="form-input" name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="c-msg">Message *</label>
              <textarea id="c-msg" className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="What's on your mind?" rows={4} required />
            </div>

            {status && <div className={`form-status form-status--${status}`}>{statusMsg}</div>}

            <button type="submit" className="btn btn--cyan" disabled={sending}>
              <Send size={15} /> {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
