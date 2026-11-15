import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { HERO_SHOWCASE_BRIEFS } from '../content/siteData';
import { HasamexEmblemVector, Icon } from './Icons';
import { TypewriterText } from './Reveal';

const CYCLE_DURATION_MS = 8000;

export function HeroShowcaseCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const stepMs = 50;
    const increment = (stepMs / CYCLE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          setActiveIndex((idx) => (idx + 1) % HERO_SHOWCASE_BRIEFS.length);
          return 0;
        }
        return prev + increment;
      });
    }, stepMs);

    return () => clearInterval(timer);
  }, [paused, prefersReducedMotion]);

  const handleSelectTab = (idx) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  const current = HERO_SHOWCASE_BRIEFS[activeIndex];

  return (
    <div
      className="showcase-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Hasamex Intelligence Network Workflow Walkthrough"
    >
      <div className="showcase-header">
        <div className="showcase-live-pill">
          <span className="live-dot" />
          <span>HIN Execution Lifecycle</span>
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
                {item.tabLabel}
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
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -8, filter: 'blur(3px)' }}
          transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="showcase-meta-row">
            <span style={{ color: '#22d3ee', fontWeight: 600 }}>
              {current.format}
            </span>
            <span>{current.region}</span>
          </div>

          <div className="showcase-title">{current.title}</div>

          <div
            style={{
              fontSize: '0.78rem',
              color: '#94a3b8',
              marginBottom: '0.85rem'
            }}
          >
            Scope Coverage: <strong style={{ color: '#f8fafc' }}>{current.audience}</strong>
          </div>

          <div className="showcase-profile-box">
            <div className="showcase-profile-box__label">Live Workflow Stream</div>
            <div
              style={{
                fontSize: '0.84rem',
                fontWeight: 500,
                color: '#f8fafc',
                lineHeight: 1.5,
                minHeight: '2.6rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <TypewriterText text={current.streamText} speed={22} />
            </div>
            <div
              style={{
                fontSize: '0.75rem',
                color: '#4ade80',
                marginTop: '0.45rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontWeight: 600
              }}
            >
              <Icon name="clock" size={13} />
              {current.status}
            </div>
          </div>

          <div className="showcase-checkpoints">
            {current.checkpoints.map((cp) => (
              <div key={cp} className="showcase-checkpoint">
                <span
                  style={{
                    color: '#22d3ee',
                    display: 'inline-flex',
                    flexShrink: 0
                  }}
                >
                  <Icon name="shield" size={15} />
                </span>
                <span>{cp}</span>
              </div>
            ))}
          </div>

          <div className="showcase-footer">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <HasamexEmblemVector size={28} />
              <span style={{ color: '#cbd5e1' }}>{current.deliverable}</span>
            </div>
            <span
              style={{
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: '#94a3b8',
                fontFamily: 'var(--font-mono)'
              }}
            >
              Standard Protocol
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
