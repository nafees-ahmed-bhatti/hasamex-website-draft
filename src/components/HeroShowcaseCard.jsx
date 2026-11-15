import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { HERO_SHOWCASE_BRIEFS } from '../content/siteData';
import { HasamexEmblemVector, Icon } from './Icons';

export function HeroShowcaseCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SHOWCASE_BRIEFS.length);
    }, 4600);
    return () => clearInterval(id);
  }, [paused, prefersReducedMotion]);

  const current = HERO_SHOWCASE_BRIEFS[activeIndex];

  return (
    <div
      className="showcase-card"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Illustrative Hasamex Engagement Workflow Preview"
    >
      <div className="showcase-header">
        <div className="showcase-live-pill">
          <span className="live-dot" />
          <span>Engagement Brief Desk</span>
        </div>
        <div className="showcase-tabs" role="tablist" aria-label="Engagement Format Examples">
          {HERO_SHOWCASE_BRIEFS.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={idx === activeIndex}
              className={`showcase-tab ${idx === activeIndex ? 'showcase-tab--active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              {item.index} · {item.format.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
        >
          <div className="showcase-meta-row">
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>
              {current.format}
            </span>
            <span>{current.region}</span>
          </div>

          <div className="showcase-title">{current.title}</div>

          <div
            style={{
              fontSize: '0.8rem',
              color: 'var(--text-secondary)',
              marginBottom: '0.95rem'
            }}
          >
            Client Mandate: <strong style={{ color: 'var(--text-primary)' }}>{current.audience}</strong>
          </div>

          <div className="showcase-profile-box">
            <div className="showcase-profile-box__label">Matched Expert Profile</div>
            <div
              style={{
                fontSize: '0.92rem',
                fontWeight: 500,
                color: 'var(--text-primary)'
              }}
            >
              {current.expertRole}
            </div>
            <div
              style={{
                fontSize: '0.78rem',
                color: '#86efac',
                marginTop: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
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
                    color: 'var(--gold)',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <HasamexEmblemVector size={32} />
              <span>{current.deliverable}</span>
            </div>
            <span
              style={{
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.07em',
                color: 'var(--text-muted)'
              }}
            >
              Illustrative Workflow
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
