import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight, Cpu, Github, Linkedin, Mail, MapPin, Phone, Send, Sparkles, Terminal, Trophy, Zap, RefreshCw, Instagram, Twitter } from 'lucide-react';
import { experience, profile, projects, stack, stats } from './data.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CyberBackground3D from './CyberBackground3D.jsx';
import CyberGateway from './CyberGateway.jsx';
import TerminalConsole from './TerminalConsole.jsx';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function useClock() {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const tick = () => {
      setTime(new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date()));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

import {
  profile as defaultProfile,
  stats as defaultStats,
  projects as defaultProjects,
  stack as defaultStack,
  experience as defaultExperience
} from './data.js';

function App() {
  const time = useClock();
  const [profile, setProfile] = useState(defaultProfile);
  const [stats, setStats] = useState(defaultStats);
  const [projects, setProjects] = useState(defaultProjects);
  const [stack, setStack] = useState(defaultStack);
  const [experience, setExperience] = useState(defaultExperience);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [formStatus, setFormStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [currentView, setCurrentView] = useState('home');
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await fetch(`${API_URL}/api/profile`);
        if (!res.ok) throw new Error('Failed to fetch profile');
        const data = await res.json();
        if (data.profile) setProfile(data.profile);
        if (data.stats) setStats(data.stats);
        if (data.projects) setProjects(data.projects);
        if (data.stack) setStack(data.stack);
        if (data.experience) setExperience(data.experience);
      } catch (err) {
        console.warn('Could not fetch dynamic profile from backend, using local static data fallback:', err);
      }
    }
    fetchProfile();
  }, []);

  const marquee = useMemo(() => [
    '⚡ AI/GENAI ENGINEER',
    '🧬 LLAMA 3.1 FINE-TUNING',
    '🚀 PRODUCTION-READY',
    '☁️ GCP / AWS / AZURE',
    '🔍 RAG PIPELINES',
    '🤖 AGENTIC AI',
    '🕸️ NEO4J KNOWLEDGE GRAPHS',
    '📦 DOCKER / CLOUD RUN',
    '💻 MERN STACK',
  ], []);

  useEffect(() => {
    if (!isInitialized) return;
    if (currentView !== 'home') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-copy',
        { opacity: 0, x: -160 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power4.out',
        }
      );
      gsap.fromTo(
        '.portrait-shell',
        { opacity: 0, x: 160 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          ease: 'power4.out',
        }
      );
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 42 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 86%', once: true },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [isInitialized, currentView]);

  useEffect(() => {
    const onMove = (event) => {
      document.documentElement.style.setProperty('--mx', `${event.clientX}px`);
      document.documentElement.style.setProperty('--my', `${event.clientY}px`);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 18}deg) rotateY(${x / 18}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--cx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--cy', `${e.clientY - rect.top}px`);
  };

  const handleTiltReset = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setIsSending(true);
    setFormStatus('');
    const body = Object.fromEntries(new FormData(formElement));

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Could not send message');
      setFormStatus(result.message);
      formElement.reset();
    } catch (error) {
      setFormStatus(`${error.message}. You can email me directly at ${profile.email}.`);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main>
      <CyberBackground3D />
      <div className="grain" />
      <div className="cursor-glow" />
      <div className="cyber-grid-overlay" />

      {!isInitialized && (
        <CyberGateway profile={profile} onExplore={() => setIsInitialized(true)} />
      )}

      <nav className="nav">
        <a className="brand" href="#top" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>
          <span className="brand-dot" />
          PortFolio
        </a>
        <div className="nav-links">
          <button className="gateway-reset-btn" onClick={() => setIsInitialized(false)} title="Re-initialize Gateway Screen">
            <RefreshCw size={13} /> Gateway
          </button>
          <a href="#top" onClick={() => setCurrentView('home')}>Home</a>
          <a href="#work" onClick={() => setCurrentView('home')}>Work</a>
          <a href="#stack" onClick={() => setCurrentView('home')}>Stack</a>
          <a href="#experience" onClick={() => setCurrentView('home')}>Experience</a>
          <a href="#synapse" onClick={() => setCurrentView('home')}>Synapse</a>
          <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); setCurrentView('contact'); }}>
            <Zap size={14} /> Contact
          </a>
        </div>
      </nav>

      {currentView === 'home' ? (
        <>
          <section className="hero" id="top">
            <div className="hero-copy">
              <div className="eyebrow glow-pill">
                <Sparkles size={15} /> {profile.availability}
              </div>
              <h1>
                {profile.name.split(' ').slice(0, 2).join(' ')}
                <span className="cyber-gradient-text">{profile.name.split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="role-line">
                <Terminal size={16} className="cyan-glow-icon" /> {profile.role} - <span className="highlight-text">{profile.location}</span>
              </p>
              <p className="hero-summary">{profile.summary}</p>
              <div className="hero-actions">
                <a className="btn primary cyber-btn" href="#work">
                  View projects <ArrowUpRight size={18} />
                </a>
                <a className="btn ghost cyber-btn-ghost" href="#contact" onClick={(e) => { e.preventDefault(); setCurrentView('contact'); }}>Let's talk</a>
              </div>
            </div>

            <div
              className="portrait-shell holographic-card"
              aria-label={`${profile.name} portrait`}
              onMouseMove={handleTilt}
              onMouseLeave={handleTiltReset}
            >
              <div className="portrait-hud top">PROFILE_READY // 3D_MATRIX</div>
              <div className="scan-line" />
              <div className="portrait-orbit orbit-spin" />
              <div className="portrait-orbit orbit-spin-reverse" />
              <img src={profile.image} alt={profile.name} />
              <div className="portrait-base glass-hud">
                <div>
                  <strong>{profile.shortName}</strong>
                  <span className="hud-status">● LIVE SYSTEM</span>
                </div>
                <span>Production AI Systems</span>
              </div>
            </div>

            <div className="hero-strip">
              {stats.map((item) => (
                <div className="stat cyber-stat" key={item.label} onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
              <div className="stat live cyber-stat" onMouseMove={handleTilt} onMouseLeave={handleTiltReset}>
                <strong>{time}</strong>
                <span>IST live // Kolkata</span>
              </div>
            </div>
          </section>

          <section className="section terminal-section" id="synapse">
            <div className="section-head reveal">
              <p className="eyebrow glow-pill">Interactive Command Deck</p>
              <h2> Synapse <span className="cyber-gradient-text"></span></h2>
            </div>
            <TerminalConsole profile={profile} projects={projects} stack={stack} setCurrentView={setCurrentView} />
          </section>

          <section className="marquee" aria-hidden="true">
            <div>
              {[...marquee, ...marquee].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </section>

          <section className="section projects" id="work">
            <div className="section-head reveal">
              <p className="eyebrow glow-pill">Selected Work</p>
              <h2>Projects built around <span className="cyber-gradient-text">measurable outcomes.</span></h2>
            </div>
            <div className="project-list">
              {visibleProjects.map((project, index) => (
                <article
                  className="project-card reveal cyber-card"
                  key={project.title}
                  onMouseMove={handleTilt}
                  onMouseLeave={handleTiltReset}
                >
                  <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="metrics">
                      {project.metrics.map((metric) => (
                        <span key={metric} className="metric-badge">{metric}</span>
                      ))}
                    </div>
                    <div className="tags">
                      {project.tech.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="project-arrow" />
                </article>
              ))}
            </div>
            <button className="more-btn reveal cyber-btn" onClick={() => setShowAll((value) => !value)}>
              {showAll ? 'Show less' : '⚡ Show more projects'}
            </button>
          </section>

          <section className="section principles">
            <div className="section-head reveal">
              <p className="eyebrow glow-pill">Operating Principles</p>
              <h2>I care about systems that work <span className="cyber-gradient-text">after the demo.</span></h2>
            </div>
            <div className="principle-grid">
              {[
                ['Accuracy over hype', 'I benchmark, validate, and communicate real numbers instead of hiding behind best-case screenshots.'],
                ['Architecture first', 'Modular APIs, clean data contracts, and observability make AI workflows easier to maintain and scale.'],
                ['Ship, measure, iterate', 'I like notebooks, but I trust deployed systems with logs, health checks, and feedback loops.'],
              ].map(([title, text], index) => (
                <article
                  className="principle reveal cyber-card"
                  key={title}
                  onMouseMove={handleTilt}
                  onMouseLeave={handleTiltReset}
                >
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section stack" id="stack">
            <div className="section-head reveal">
              <p className="eyebrow glow-pill">Technical Stack</p>
              <h2>Tools I reach for in production.</h2>
            </div>
            <div className="stack-table reveal">
              {stack.map(([category, items]) => (
                <div className="stack-row cyber-row" key={category}>
                  <strong>{category}</strong>
                  <div>
                    {items.map((item) => (
                      <span key={item} className="stack-chip">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section experience" id="experience">
            <div className="section-head reveal">
              <p className="eyebrow glow-pill">Career Path</p>
              <h2>Experience and education.</h2>
            </div>
            <div className="timeline">
              {experience.map((item, index) => (
                <article
                  className="timeline-item reveal cyber-card"
                  key={item.title}
                  onMouseMove={handleTilt}
                  onMouseLeave={handleTiltReset}
                >
                  <div className="timeline-num">0{index + 1}</div>
                  <div>
                    <p className="period-badge">{item.period}</p>
                    <h3>{item.title}</h3>
                    <strong className="org-text">{item.org}</strong>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Meeting Waves Inspired by Klys.ai */}
          <section className="section wave-divider-section">
            <div className="wave-divider-inner">
              <div className="wave-line wave-left">
                <svg viewBox="0 0 200 40" preserveAspectRatio="none" className="wave-svg">
                  <path d="M0,20 Q50,0 100,20 T200,20" fill="none" stroke="url(#wave-glow-gradient)" strokeWidth="3" />
                  <defs>
                    <linearGradient id="wave-glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(0, 240, 204, 0)" />
                      <stop offset="100%" stopColor="rgba(0, 240, 204, 1)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="wave-content">
                <span className="wave-sub">READY TO COLLABORATE?</span>
                <button className="btn primary cyber-btn wave-cta-btn" onClick={() => { setCurrentView('contact'); window.scrollTo(0, 0); }}>
                  Contact Me <ArrowUpRight size={18} />
                </button>
              </div>
              <div className="wave-line wave-right">
                <svg viewBox="0 0 200 40" preserveAspectRatio="none" className="wave-svg">
                  <path d="M0,20 Q50,40 100,20 T200,20" fill="none" stroke="url(#wave-glow-gradient-rev)" strokeWidth="3" />
                  <defs>
                    <linearGradient id="wave-glow-gradient-rev" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(0, 240, 204, 1)" />
                      <stop offset="100%" stopColor="rgba(0, 240, 204, 0)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="section contact-page-section" id="contact">
          <div className="section-head reveal">
            <p className="eyebrow glow-pill">Secure Channel</p>

          </div>
          <div className="contact-panel reveal cyber-panel">
            <div>
              <h2>Let's build something that <span className="cyber-gradient-text">actually ships.</span></h2>
              <p className="contact-copy">Open to full-time AI/GenAI roles, freelance engineering, and practical product collaborations.</p>
              <div className="contact-links">
                <a href={`mailto:${profile.email}`} className="cyber-link">
                  <Mail size={18} />{profile.email}
                </a>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="cyber-link">
                  <Phone size={18} />{profile.phone}
                </a>
                <span className="cyber-link-static">
                  <MapPin size={18} />Kurnool, Andhra Pradesh / Trivandrum, Kerala
                </span>
              </div>
              <div className="socials">
                <a href="https://github.com/PMaheshwarreddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon"><Github /></a>
                <a href="https://www.linkedin.com/in/panduga-maheswar-reddy-20bb39286" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><Linkedin /></a>
                <a href="https://www.instagram.com/maheswar_reddy_12?igsh=MTlyMXlxZW1sbnNmOA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><Instagram /></a>
                <a href="https://x.com/PMaheswar43013" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon"><Twitter /></a>
              </div>
              <button className="btn ghost cyber-btn-ghost back-home-btn" onClick={() => setCurrentView('home')} style={{ marginTop: '2rem' }}>
                ← Back to Home
              </button>
            </div>

            <form onSubmit={handleSubmit} className="cyber-form">
              <label>Name<input name="name" required placeholder="Jane Cooper" className="cyber-input" /></label>
              <label>Email<input name="email" type="email" required placeholder="jane@company.com" className="cyber-input" /></label>
              <label>Subject<input name="subject" required placeholder="AI project opportunity" className="cyber-input" /></label>
              <label>Message<textarea name="message" required placeholder="Tell me what you are building..." className="cyber-input" /></label>
              <button disabled={isSending} className="btn primary cyber-btn full-btn">
                {isSending ? 'Sending...' : <><Send size={17} /> Send message</>}
              </button>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </form>
          </div>
        </section>
      )}

      <footer className="footer cyber-footer">
        <div className="footer-grid">
          <div className="footer-branding">
            <span className="brand-dot" />
            <span className="footer-brand-title">PortFolio</span>
            <p>Production-grade AI systems, fine-tuned LLMs, and intelligent document workflows.</p>
          </div>
          <div className="footer-links-section">
            <h4>System Nav</h4>
            <div className="footer-links-grid">
              <a href="#top" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Hero Deck</a>
              <a href="#work" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Projects</a>
              <a href="#stack" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Tech Stack</a>
              <a href="#experience" onClick={(e) => { e.preventDefault(); setCurrentView('home'); }}>Timeline</a>
            </div>
          </div>
          <div className="footer-socials-section">
            <h4>Social Profiles</h4>
            <div className="socials footer-socials">
              <a href="https://github.com/PMaheshwarreddy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon"><Github /></a>
              <a href="https://www.linkedin.com/in/panduga-maheswar-reddy-20bb39286" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon"><Linkedin /></a>
              <a href="https://www.instagram.com/maheswar_reddy_12?igsh=MTlyMXlxZW1sbnNmOA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><Instagram /></a>
              <a href="https://x.com/PMaheswar43013" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {profile.name}. All systems operational.</span>
          <a href="#top" className="back-top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Warp to Top ↑</a>
        </div>
      </footer>
    </main>
  );
}

export default App;
