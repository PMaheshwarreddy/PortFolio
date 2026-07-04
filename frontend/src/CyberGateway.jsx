import { useState, useEffect, useRef } from 'react';
import { Sparkles, Cpu, ShieldCheck, Zap, ArrowRight, Activity, Terminal } from 'lucide-react';
import gsap from 'gsap';

export default function CyberGateway({ profile, onExplore }) {
  const [loadingPercent, setLoadingPercent] = useState(0);
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleTilt = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 12}deg) rotateY(${x / 12}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleTiltReset = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const handleLaunch = () => {
    if (!containerRef.current) {
      onExplore();
      return;
    }

    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 1.15,
      filter: 'blur(20px)',
      duration: 0.75,
      ease: 'power3.inOut',
      onComplete: () => {
        onExplore();
      },
    });
  };

  return (
    <div ref={containerRef} className="cyber-gateway-overlay">
      <div className="gateway-bg-glow" />


      <div 
        ref={cardRef} 
        className="gateway-card holographic-card"
        onMouseMove={handleTilt}
        onMouseLeave={handleTiltReset}
      >
        <div className="scan-line" />
        <div className="gateway-portrait-shell">
          <div className="portrait-orbit orbit-spin" />
          <div className="portrait-orbit orbit-spin-reverse" />
          <img src={profile.image} alt={profile.name} className="gateway-portrait-img" />
        </div>

        <div className="gateway-info">
          <div className="gateway-eyebrow">
            <Sparkles size={15} /> BIOMETRIC_ID // VERIFIED
          </div>
          <h1 className="gateway-title">
            Panduga Maheswar <span className="cyber-gradient-text">Reddy</span>
          </h1>
          <p className="gateway-subtitle">
            <Terminal size={16} className="cyan-glow-icon" /> {profile.role}
          </p>

          <div className="gateway-status-bar">
            <div className="status-progress-track">
              <div className="status-progress-fill" style={{ width: `${Math.min(loadingPercent, 100)}%` }} />
            </div>
            <div className="status-labels">
              <span>INITIALIZING MATRIX...</span>
              <span>{Math.min(loadingPercent, 100)}%</span>
            </div>
          </div>

          <button 
            className={`btn primary cyber-btn gateway-cta ${loadingPercent < 100 ? 'disabled-btn' : ''}`}
            onClick={handleLaunch}
            disabled={loadingPercent < 100}
          >
            <span>LET'S EXPLORE PORTFOLIO</span> <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="gateway-footer-text">
        CLICK "LET'S EXPLORE PORTFOLIO" TO ENTER FULL SYSTEM INTERFACE
      </div>
    </div>
  );
}
