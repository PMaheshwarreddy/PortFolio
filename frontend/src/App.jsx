import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Award, Briefcase, Code2, Command, ExternalLink, Github,
  Menu, Moon, Rocket, Sun, Trophy, X,
} from 'lucide-react';
import { inject } from '@vercel/analytics';
import Assistant from './Assistant.jsx';
import ProjectModal from './ProjectModal.jsx';
import CommandPalette from './CommandPalette.jsx';
import ContactPage from './ContactPage.jsx';
import Socials from './Socials.jsx';
import { API_URL, SOCIALS } from './config.js';
import { portfolio } from './data.js';

if (import.meta.env.PROD) inject();

const { profile, stats, projects, stack, experience, achievements } = portfolio;

const NAV = [
  ['about', 'About'],
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['ask', 'Ask AI'],
  ['skills', 'Skills'],
];

const PRINCIPLES = [
  ['Test what I build', 'Unit and integration tests, logging and clear documentation are part of the job, not something added at the end.'],
  ['Let the numbers decide', 'I judge a model by measurable results such as accuracy, BLEU score and latency, so every improvement is real.'],
  ['Build it with the team', 'I work closely with cross-functional teams to ship features, fix production issues and keep systems reliable and secure.'],
];

const ext = { target: '_blank', rel: 'noopener noreferrer' };
const CONTACT_PATH = '/contact';
const HOME_TITLE = typeof document !== 'undefined' ? document.title : '';
const isContactUrl = () => location.pathname.replace(/\/+$/, '') === CONTACT_PATH || location.hash === '#contact';

function SectionHead({ label, title, children }) {
  return (
    <div className="section-head reveal">
      <p className="label">{label}</p>
      <div>
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
    </div>
  );
}

function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#131416' : '#faf9f6');
  }, [theme]);
  const toggle = () => setTheme((t) => {
    const next = t === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch { /* ignore */ }
    return next;
  });
  return [theme, toggle];
}

function App() {
  const [theme, toggleTheme] = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [page, setPage] = useState(() => (isContactUrl() ? 'contact' : 'home'));
  const [pendingScroll, setPendingScroll] = useState(null);
  const pageRef = useRef(page);
  pageRef.current = page;
  const visibleProjects = showAll ? projects : projects.slice(0, 5);

  // Old links like /#contact now land on the contact page
  useEffect(() => {
    if (page === 'contact' && location.pathname !== CONTACT_PATH) history.replaceState(null, '', CONTACT_PATH);
  }, [page]);

  // Browser back/forward between the home page and the contact page
  useEffect(() => {
    const onPop = () => setPage(isContactUrl() ? 'contact' : 'home');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    document.title = page === 'contact' ? `Contact · ${profile.name}` : HOME_TITLE;
  }, [page]);

  const openContact = useCallback(() => {
    setMenuOpen(false);
    if (pageRef.current !== 'contact') history.pushState(null, '', CONTACT_PATH);
    setPage('contact');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const goTo = useCallback((id) => {
    setMenuOpen(false);
    if (pageRef.current === 'contact') {
      history.pushState(null, '', id === 'top' ? '/' : `/#${id}`);
      setPage('home');
      setPendingScroll(id);
      return;
    }
    if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    history.replaceState(null, '', id === 'top' ? '/' : `#${id}`);
  }, []);
  const navClick = (id) => (e) => { e.preventDefault(); goTo(id); };
  const contactClick = (e) => { e.preventDefault(); openContact(); };

  // Links inside assistant answers can open the contact page
  useEffect(() => {
    window.addEventListener('open-contact', openContact);
    return () => window.removeEventListener('open-contact', openContact);
  }, [openContact]);

  // After coming back from the contact page, jump to the requested section
  useEffect(() => {
    if (page !== 'home' || !pendingScroll) return undefined;
    const raf = requestAnimationFrame(() => {
      if (pendingScroll === 'top') window.scrollTo(0, 0);
      else document.getElementById(pendingScroll)?.scrollIntoView();
      setPendingScroll(null);
    });
    return () => cancelAnimationFrame(raf);
  }, [page, pendingScroll]);

  // Free Render instances sleep: wake the API now so the chat and form respond quickly
  useEffect(() => {
    if (API_URL) fetch(`${API_URL}/api/health`, { cache: 'no-store' }).catch(() => {});
  }, []);

  // Deep links (/#contact): the page renders after the browser's own jump, so jump again
  useEffect(() => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, []);

  // Header border once the page scrolls (state only changes when crossing the threshold)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for the section in view
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    NAV.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [page]);

  // Fade sections in once as they enter the viewport (cheap: opacity/transform only)
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('in')); return undefined; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [showAll, page]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const paletteActions = useMemo(() => [
    { id: 'home', label: 'Home', hint: 'Section', run: () => goTo('top') },
    ...NAV.map(([id, label]) => ({ id, label, hint: 'Section', run: () => goTo(id) })),
    { id: 'achievements', label: 'Achievements', hint: 'Section', run: () => goTo('achievements') },
    { id: 'contact', label: 'Contact form', hint: 'Page', run: openContact },
    { id: 'email', label: 'Copy email address', hint: 'Action', run: () => navigator.clipboard?.writeText(profile.email) },
    { id: 'theme', label: 'Toggle dark mode', hint: 'Action', run: toggleTheme },
    { id: 'gh', label: 'Open GitHub', hint: 'Link', run: () => window.open(SOCIALS.github, '_blank', 'noopener') },
    { id: 'li', label: 'Open LinkedIn', hint: 'Link', run: () => window.open(SOCIALS.linkedin, '_blank', 'noopener') },
    ...projects.map((p, i) => ({ id: `p-${i}`, label: p.title, hint: 'Project', run: () => setActiveProject(i) })),
  ], [goTo, openContact, toggleTheme]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <CommandPalette actions={paletteActions} />
      <ProjectModal
        project={activeProject !== null ? projects[activeProject] : null}
        index={activeProject ?? 0}
        onClose={() => setActiveProject(null)}
      />

      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap">
          <a className="brand" href="/" onClick={navClick('top')}>{profile.name.split(' ').slice(1).join(' ')}</a>
          <nav className="nav" aria-label="Main">
            {NAV.map(([id, label]) => (
              <a key={id} href={`/#${id}`} onClick={navClick(id)} className={page === 'home' && active === id ? 'active' : undefined}>{label}</a>
            ))}
            <a className={`btn btn-primary${page === 'contact' ? ' is-current' : ''}`} href={CONTACT_PATH} onClick={contactClick}>Contact</a>
          </nav>
          <div className="header-tools">
            <button type="button" className="icon-btn kbd-btn" onClick={() => window.dispatchEvent(new Event('open-command-palette'))} aria-label="Open command palette" title="Search (Ctrl+K)">
              <Command size={13} /> K
            </button>
            <button type="button" className="icon-btn" onClick={toggleTheme} aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} title="Toggle theme">
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button type="button" className="icon-btn menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-nav">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
      <nav id="mobile-nav" className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile">
        {NAV.map(([id, label]) => (
          <a key={id} href={`/#${id}`} onClick={navClick(id)}>{label}</a>
        ))}
        <a className="btn btn-primary" href={CONTACT_PATH} onClick={contactClick}>Get in touch</a>
      </nav>

      {page === 'contact' ? (
        <main id="main">
          <ContactPage profile={profile} onHome={() => goTo('top')} />
        </main>
      ) : (
      <main id="main">
        <section className="hero" id="top">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <p className="label">{profile.role} · {profile.location}</p>
                <h1>{profile.name.split(' ').slice(0, -1).join(' ')} <span>{profile.name.split(' ').at(-1)}</span></h1>
                <p className="hero-lede">{profile.headline}</p>
                <p className="hero-now">
                  <span className="status-dot" aria-hidden="true" />
                  <span><strong>{profile.currentPosition}</strong> at <strong>{profile.currentCompany}</strong>. {profile.availability}.</span>
                </p>
                <div className="hero-actions">
                  <a className="btn btn-primary" href="#work" onClick={navClick('work')}>See my work <ArrowRight size={17} /></a>
                  <a className="btn btn-secondary" href="#ask" onClick={navClick('ask')}>Ask my assistant</a>
                </div>
                <Socials className="hero-social" only={['GitHub', 'LinkedIn', 'X']} />
              </div>
              <div className="portrait-wrap">
                <figure className="portrait">
                  <img src={profile.image} alt={`Portrait of ${profile.name}`} width="640" height="800" fetchpriority="high" decoding="async" />
                </figure>
                <div className="portrait-card">
                  <span className="portrait-card-icon"><Briefcase size={16} aria-hidden="true" /></span>
                  <span><small>Currently at</small>{profile.currentCompany}</span>
                </div>
              </div>
            </div>

            <ul className="facts" aria-label="Highlights">
              {stats.map((s) => (
                <li key={s.label}><strong>{s.value}</strong><span>{s.label}</span></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="wrap">
            <div className="section-head reveal">
              <p className="label">About</p>
              <h2 id="about-title">A bit about me</h2>
            </div>
            <div className="section-body about-grid reveal">
              <div className="prose">
                {profile.about.map((para) => <p key={para}>{para}</p>)}
              </div>
              <dl className="meta-list">
                <div><dt>Now</dt><dd>{profile.currentPosition}, {profile.currentCompany}</dd></div>
                <div><dt>Education</dt><dd>B.Tech, Computer Science, IIIT Kottayam (2026)</dd></div>
                <div><dt>Based in</dt><dd>{profile.location}</dd></div>
                <div><dt>Focus</dt><dd>AI-driven workflows, LLM fine-tuning, RAG and agentic AI, scalable backends</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="work" aria-labelledby="work-title">
          <div className="wrap">
            <SectionHead label="Selected work" title={<span id="work-title">Projects</span>}>
              A mix of applied LLM work, data science and full-stack products. Click any project for details.
            </SectionHead>
            <div className="projects">
              {visibleProjects.map((project, index) => (
                <article key={project.title} className="project reveal" onClick={() => setActiveProject(index)}>
                  <span className="project-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <div className="project-top">
                      <h3>{project.title}</h3>
                      <span className="project-cat">{project.category}</span>
                    </div>
                    <p className="project-desc">{project.description}</p>
                    <div className="metrics">
                      {project.metrics.map((m) => <span key={m} className="metric">{m}</span>)}
                    </div>
                    <ul className="tech" aria-label="Tech used">{project.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                    <div className="project-links" onClick={(e) => e.stopPropagation()}>
                      <button type="button" onClick={() => setActiveProject(index)}>Details <ArrowUpRight size={14} /></button>
                      {project.github && <a href={project.github} {...ext}><Github size={14} /> Code</a>}
                      {project.live && <a href={project.live} {...ext}><ExternalLink size={14} /> Live demo</a>}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {projects.length > 5 && (
              <div className="more-row">
                <button type="button" className="btn btn-secondary" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
                  {showAll ? 'Show fewer' : `Show all ${projects.length} projects`}
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <SectionHead label="Experience" title={<span id="experience-title">Work and education</span>} />
            <ol className="timeline">
              {experience.map((item) => {
                const [when, where] = item.period.split(' · ');
                return (
                  <li key={item.title} className="job reveal">
                    <p className="job-when">{when}{where && <><br />{where}</>}</p>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="job-org">{item.org}</p>
                      <ul>{item.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="section section-alt" id="ask" aria-labelledby="ask-title">
          <div className="wrap">
            <SectionHead label="Ask AI" title={<span id="ask-title">Questions about my work?</span>}>
              Chat with Synapse, my assistant. It answers in my words about my work, projects and skills, and it's happy to help with general questions too.
            </SectionHead>
            <div className="section-body reveal">
              <Assistant profile={profile} />
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <SectionHead label="Skills" title={<span id="skills-title">Tools I use</span>} />
            <div className="skills">
              {stack.map(([category, items]) => (
                <div key={category} className="skill-group reveal">
                  <h3>{category}</h3>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="principles-title">
          <div className="wrap">
            <SectionHead label="How I work" title={<span id="principles-title">A few habits</span>} />
            <div className="cols-3">
              {PRINCIPLES.map(([title, text], i) => (
                <div key={title} className="col reveal">
                  <span className="col-num">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt" id="achievements" aria-labelledby="achievements-title">
          <div className="wrap">
            <SectionHead label="Achievements" title={<span id="achievements-title">Highlights</span>} />
            <div className="achievements">
              {achievements.map((a, i) => {
                const Icon = [Trophy, Award, Rocket, Code2][i % 4];
                return (
                  <div key={a.title} className="achievement reveal">
                    <span className="achievement-icon"><Icon size={20} aria-hidden="true" /></span>
                    <h3>{a.title}</h3>
                    <p>{a.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-section" aria-labelledby="cta-title">
          <div className="wrap">
            <div className="cta-card reveal">
              <div className="cta-copy">
                <p className="cta-kicker">{profile.availability}</p>
                <h2 id="cta-title">Have a role or a project in mind?</h2>
                <p>Tell me a little about it. It takes a minute, and I&apos;ll get back to you personally.</p>
              </div>
              <div className="cta-actions">
                <a className="cta-button" href={CONTACT_PATH} onClick={contactClick}>
                  Get in touch
                  <span className="cta-button-icon" aria-hidden="true"><ArrowRight size={18} /></span>
                </a>
                <a className="cta-mail" href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      )}

      <footer className="footer">
        <div className="wrap">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <nav aria-label="Footer">
            <a href={SOCIALS.github} {...ext}>GitHub</a>
            <a href={SOCIALS.linkedin} {...ext}>LinkedIn</a>
            <a href={CONTACT_PATH} onClick={contactClick}>Contact</a>
            <a href="/#top" onClick={navClick('top')}>Back to top ↑</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default App;
