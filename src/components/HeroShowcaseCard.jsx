import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { HERO_SHOWCASE_BRIEFS } from '../content/siteData';
import { HasamexEmblemVector, Icon } from './Icons';
import { TypewriterText } from './Reveal';

const CYCLE_DURATION_MS = 6500;

export function HeroShowcaseCard() {
  // Strictly start at index 0 (Stage 01 · Custom Sourcing)
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Track elapsed time in a ref so state updaters never side-effect inside StrictMode
  const elapsedRef = useRef(0);
  const lastTickRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    lastTickRef.current = performance.now();

    const timer = setInterval(() => {
      const now = performance.now();
      if (paused) {
        lastTickRef.current = now;
        return;
      }

      const delta = now - (lastTickRef.current ?? now);
      lastTickRef.current = now;
      elapsedRef.current += delta;

      if (elapsedRef.current >= CYCLE_DURATION_MS) {
        elapsedRef.current = 0;
        setProgress(0);
        // Deterministic +1 step: 0 -> 1 -> 2 -> 0 -> 1 -> 2
        setActiveIndex((prev) => (prev + 1) % HERO_SHOWCASE_BRIEFS.length);
      } else {
        setProgress(Math.min(100, (elapsedRef.current / CYCLE_DURATION_MS) * 100));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [paused, prefersReducedMotion]);

  const handleSelectTab = (idx) => {
    elapsedRef.current = 0;
    lastTickRef.current = performance.now();
    setActiveIndex(idx);
    setProgress(0);
  };

  const current = HERO_SHOWCASE_BRIEFS[activeIndex] || HERO_SHOWCASE_BRIEFS[0];

  return (
    <div
      className="showcase-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => {
        lastTickRef.current = performance.now();
        setPaused(false);
      }}
      aria-label="Hasamex Intelligence Network Workflow Walkthrough"
    >
      <div className="showcase-header">
        <div className="showcase-header__top">
          <div className="showcase-live-pill">
            <span className="live-dot" />
            <span>HIN Execution Lifecycle</span>
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: '#94a3b8',
              letterSpacing: '0.06em',
              textTransform: 'uppercase'
            }}
          >
            {paused ? `Stage 0${activeIndex + 1} · Paused` : `Stage 0${activeIndex + 1} / 03`}
          </span>
        </div>

        <div className="showcase-tabs" role="tablist" aria-label="Hasamex Workflow Phases">
          {HERO_SHOWCASE_BRIEFS.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`showcase-tab ${isActive ? 'showcase-tab--active' : ''}`}
                onClick={() => handleSelectTab(idx)}
              >
                <span className="showcase-tab__label-full">{item.tabLabel}</span>
                {isActive && (
                  <span
                    className="showcase-tab__progress"
                    style={{ width: prefersReducedMotion ? '100%' : `${progress}%` }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 6, filter: 'blur(2px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -5, filter: 'blur(2px)' }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="showcase-meta-row">
            <span style={{ color: '#ffffff', fontWeight: 600 }}>
              {current.format}
            </span>
            <span>{current.region}</span>
          </div>

          <div className="showcase-title">{current.title}</div>

          <div
            style={{
              fontSize: '0.75rem',
              color: '#94a3b8',
              marginBottom: '0.6rem'
            }}
          >
            Scope Coverage: <strong style={{ color: '#f8fafc' }}>{current.audience}</strong>
          </div>

          <div className="showcase-profile-box">
            <div className="showcase-profile-box__top">
              <span className="showcase-profile-box__label">Live Workflow Stream</span>
              <span className="showcase-profile-box__status">
                <Icon name="clock" size={12} />
                {current.status}
              </span>
            </div>
            <div className="showcase-profile-box__stream">
              <TypewriterText text={current.streamText} speed={20} />
            </div>
          </div>

          <div className="showcase-checkpoints">
            {current.checkpoints.map((cp) => (
              <div key={cp} className="showcase-checkpoint">
                <span
                  style={{
                    color: '#ffffff',
                    display: 'inline-flex',
                    flexShrink: 0,
                    opacity: 0.9,
                    marginTop: '1px'
                  }}
                >
                  <Icon name="shield" size={13} />
                </span>
                <span>{cp}</span>
              </div>
            ))}
          </div>

          <div className="showcase-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0 }}>
              <HasamexEmblemVector size={22} />
              <span style={{ color: '#e2e8f0', fontWeight: 500, fontSize: '0.75rem' }}>
                {current.deliverable}
              </span>
            </div>
            <span className="showcase-footer__tag">Standard Protocol</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
