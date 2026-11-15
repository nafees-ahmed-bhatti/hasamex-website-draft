import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  BRAND,
  COMPLIANCE_SAFEGUARDS,
  HOME_COMPLIANCE_CARDS,
  TESTIMONIALS
} from '../content/siteData';
import { Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal, TypewriterText } from '../components/Reveal';

const SAFEGUARD_META = [
  {
    code: 'CP-01',
    tabLabel: '01 · Vetting',
    icon: 'users',
    sla: '100% Pre-Call Cleared',
    stream:
      '[CP-01] Conflict-of-interest & employer restriction check -> Affirmative acceptance of HIN Terms, Code of Conduct & Insider Trading Policy logged.'
  },
  {
    code: 'CP-02',
    tabLabel: '02 · MNPI',
    icon: 'shield',
    sla: 'Zero-MNPI Firewall',
    stream:
      '[CP-02] Brief & scope calibrated against cooling-off rules -> Strict zero-tolerance prohibition on Material Non-Public Information enforced.'
  },
  {
    code: 'CP-03',
    tabLabel: '03 · Audit',
    icon: 'document',
    sla: '100% Recorded Lines',
    stream:
      '[CP-03] Consultation hosted on monitored Hasamex teleconference / MS Teams line -> Timestamped recording & institutional audit trail archived.'
  },
  {
    code: 'CP-04',
    tabLabel: '04 · Train',
    icon: 'book',
    sla: 'Sector-Specific Prep',
    stream:
      '[CP-04] Industry compliance briefing delivered pre-call -> Strict prohibition on real-time AI/LLM usage during live consultations verified.'
  },
  {
    code: 'CP-05',
    tabLabel: '05 · Privacy',
    icon: 'lock',
    sla: 'Need-to-Know Basis',
    stream:
      '[CP-05] Blind matching & need-to-know client anonymity enforced -> Social media / LinkedIn engagement disclosure strictly prohibited.'
  }
];

const COMPLIANCE_MARQUEE = [
  'Zero-Tolerance MNPI Prohibition',
  '100% Monitored & Recorded Consultations',
  'Conflict-of-Interest & Cooling-Off Verification',
  'Strict Ban on Real-Time AI/LLM Usage During Live Calls',
  'Need-to-Know Client Anonymity & Blind Matching',
  'Full Timestamped Institutional Audit Trails'
];

export function CompliancePage() {
  const [activeCheckpoint, setActiveCheckpoint] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const elapsedRef = useRef(0);
  const lastTickRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    lastTickRef.current = performance.now();
    const timer = window.setInterval(() => {
      const now = performance.now();
      if (paused) {
        lastTickRef.current = now;
        return;
      }
      const dt = now - (lastTickRef.current || now);
      lastTickRef.current = now;
      elapsedRef.current += dt;
      if (elapsedRef.current >= 5000) {
        elapsedRef.current = 0;
        setProgress(0);
        setActiveCheckpoint((prev) => (prev + 1) % COMPLIANCE_SAFEGUARDS.length);
      } else {
        setProgress(Math.min(100, (elapsedRef.current / 5000) * 100));
      }
    }, 60);
    return () => window.clearInterval(timer);
  }, [paused, prefersReducedMotion]);

  const currentSafeguard = COMPLIANCE_SAFEGUARDS[activeCheckpoint] || COMPLIANCE_SAFEGUARDS[0];
  const currentMeta = SAFEGUARD_META[activeCheckpoint] || SAFEGUARD_META[0];

  const complianceQuotes = TESTIMONIALS.filter(
    (t) => t.id === 'pm-pe-sg' || t.id === 'consulting-global' || t.id === 'pe-singapore'
  );

  return (
    <Layout
      preFooterProps={{
        eyebrow: 'Compliance & Governance Desk',
        title: 'Have a Compliance-Related Question or Concern?',
        subtitle:
          'Reach out directly to our compliance governance team. We review every inquiry with discretion and respond promptly.',
        primaryLabel: 'Contact Compliance Desk',
        primaryTo: '/contact-us',
        secondaryLabel: 'Read Code of Conduct',
        secondaryTo: '/code-of-conduct',
        tertiaryLabel: 'Expert T&Cs',
        tertiaryTo: '/terms'
      }}
    >
      {/* 1. HERO — BALANCED 2-COLUMN INSTITUTIONAL SPLIT WITH LIVE 5-CHECKPOINT PROTOCOL CONSOLE */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <Reveal blur y={14} className="hero-copy">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Regulated Research Architecture
                </span>
                <AnimatedHeading
                  as="h1"
                  text="Investment Grade Compliance"
                  style={{ marginTop: '0.65rem', marginBottom: '0.65rem' }}
                />
                <p className="lead" style={{ maxWidth: '52ch', marginBottom: '1.25rem' }}>
                  Industry-leading compliance framework that safeguards every interaction between
                  clients and expert members.
                </p>
                <div className="hero-ctas">
                  <a href="#safeguards" className="btn btn--primary">
                    Explore 5-Checkpoint Safeguards
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <Link to="/terms" className="btn btn--glass">
                    Learn About T&amp;Cs
                  </Link>
                  <Link to="/code-of-conduct" className="btn btn--charcoal">
                    Code of Conduct
                  </Link>
                </div>
              </div>

              <div className="hero-trust-line">
                <img
                  src="/brand/hasamex-emblem-dark.png"
                  alt="Hasamex Emblem"
                  className="hero-footprint-ledger__emblem"
                />
                <div>
                  <strong>Zero-Tolerance MNPI &amp; Full Institutional Audit Trail</strong>
                  <span>
                    {BRAND.legalName} (UEN {BRAND.uen}) · Guided by Global Legal &amp; Ethical Standards
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right Column — Animated 5-Checkpoint Compliance Protocol Console */}
            <Reveal delay={0.08} y={14}>
              <div
                className="showcase-card"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => {
                  lastTickRef.current = performance.now();
                  setPaused(false);
                }}
                aria-label="5-Checkpoint Compliance Protocol Console"
              >
                <div className="showcase-header">
                  <div className="showcase-header__top">
                    <span className="showcase-live-pill">
                      <span className="live-dot" />
                      <span>5-Checkpoint Compliance Protocol</span>
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        color: '#94a3b8',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {paused
                        ? `${currentMeta.code} · Paused`
                        : `CHECKPOINT ${currentSafeguard.number} / 05`}
                    </span>
                  </div>

                  <div
                    className="showcase-tabs showcase-tabs--5"
                    role="tablist"
                    aria-label="Compliance Checkpoints"
                  >
                    {SAFEGUARD_META.map((meta, idx) => {
                      const isActive = idx === activeCheckpoint;
                      return (
                        <button
                          key={meta.code}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          className={`showcase-tab ${isActive ? 'showcase-tab--active' : ''}`}
                          onClick={() => {
                            elapsedRef.current = 0;
                            lastTickRef.current = performance.now();
                            setProgress(0);
                            setActiveCheckpoint(idx);
                          }}
                        >
                          <span>{meta.tabLabel}</span>
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
                    key={currentSafeguard.number}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6, filter: 'blur(2px)' }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="showcase-meta-row">
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>
                        {currentSafeguard.stage}
                      </span>
                      <span style={{ color: '#86efac' }}>{currentMeta.sla}</span>
                    </div>

                    <div className="showcase-title" style={{ marginBottom: '0.55rem' }}>
                      {currentSafeguard.title}
                    </div>

                    <div className="showcase-profile-box">
                      <div className="showcase-profile-box__top">
                        <span className="showcase-profile-box__label">Governance Enforcement</span>
                        <span className="showcase-profile-box__status">
                          <Icon name="shield" size={12} />
                          {currentMeta.sla}
                        </span>
                      </div>
                      <div className="showcase-profile-box__stream">
                        <TypewriterText text={currentMeta.stream} speed={18} />
                      </div>
                    </div>

                    <div className="showcase-checkpoints">
                      {currentSafeguard.controls.map((ctrl) => (
                        <div key={ctrl} className="showcase-checkpoint">
                          <span
                            style={{
                              color: '#86efac',
                              display: 'inline-flex',
                              flexShrink: 0,
                              marginTop: '1px'
                            }}
                          >
                            <Icon name="check" size={13} />
                          </span>
                          <span>{ctrl}</span>
                        </div>
                      ))}
                    </div>

                    <div className="showcase-footer">
                      <span className="showcase-footer__tag">
                        Mandatory Protocol · Audited End-to-End
                      </span>
                      <a href="#safeguards" className="showcase-cta">
                        Inspect Controls
                        <Icon name="arrow-right" size={13} />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 1B. CONTINUOUS COMPLIANCE GOVERNANCE MARQUEE TICKER */}
      <div className="marquee-bar" aria-label="Hasamex Compliance Guarantees">
        <div className="marquee-track">
          {[...COMPLIANCE_MARQUEE, ...COMPLIANCE_MARQUEE].map((item, idx) => (
            <div key={`${item}-${idx}`} className="marquee-item">
              <span className="marquee-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. FIVE SAFEGUARDS CHECKPOINT LEDGER */}
      <section id="safeguards" className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 660 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                One Engagement · Five Safeguards
              </span>
              <AnimatedHeading
                as="h2"
                text="How We Protect Clients & Experts"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                Our workflows are designed to protect every interaction—ensuring safety, integrity,
                and compliance from start to finish.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/code-of-conduct" className="btn btn--glass">
                Read Code of Conduct
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="compliance-ledger">
            {COMPLIANCE_SAFEGUARDS.map((item, idx) => {
              const meta = SAFEGUARD_META[idx] || SAFEGUARD_META[0];
              return (
                <Reveal key={item.number} delay={idx * 0.035} className="compliance-ledger-row">
                  <div className="compliance-ledger-row__main">
                    <div className="compliance-ledger-row__top">
                      <div className="compliance-ledger-row__id">
                        <span className="card-icon-box">
                          <Icon name={meta.icon} size={15} />
                        </span>
                        <span className="card-index">CHECKPOINT {item.number}</span>
                      </div>
                      <span className="card-tag">{item.stage}</span>
                    </div>
                    <h3 className="compliance-ledger-row__title">{item.title}</h3>
                    <p className="compliance-ledger-row__desc">{item.description}</p>
                  </div>

                  <div className="compliance-ledger-row__controls">
                    <div className="compliance-ledger-row__controls-label">
                      <span>MANDATORY CONTROLS</span>
                      <span className="compliance-ledger-row__sla">{meta.sla}</span>
                    </div>
                    <ul className="compliance-ledger-row__list">
                      {item.controls.map((ctrl) => (
                        <li key={ctrl}>
                          <span className="compliance-ledger-row__check">
                            <Icon name="shield" size={13} />
                          </span>
                          <span>{ctrl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INSTITUTIONAL VALIDATION (3-Column Hairline Matrix — Zero Orphan Cards on Tablet) */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Institutional Validation
              </span>
              <AnimatedHeading
                as="h2"
                text="Trusted by Decision-Makers Worldwide"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">See what firms are saying about Hasamex.</p>
            </Reveal>
          </div>

          <div className="governance-pillars-row">
            {complianceQuotes.map((q, idx) => (
              <Reveal key={q.id} delay={idx * 0.04} className="governance-pillar-cell">
                <div>
                  <div className="governance-pillar-cell__top">
                    <span className="card-index">{q.category}</span>
                    <span className="card-tag">Verified Feedback</span>
                  </div>
                  <p
                    className="governance-pillar-cell__desc"
                    style={{
                      color: 'var(--color-text-primary)',
                      fontWeight: 500,
                      fontSize: '0.88rem',
                      lineHeight: 1.56
                    }}
                  >
                    “{q.quote}”
                  </p>
                </div>
                <div className="governance-pillar-cell__footer">
                  <span>
                    <strong style={{ color: 'var(--color-text-primary)' }}>{q.role}</strong> ·{' '}
                    {q.org}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BINDING GOVERNANCE DOCUMENTS & DIRECT COMPLIANCE OVERSIGHT */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Governance Documentation
              </span>
              <AnimatedHeading
                as="h2"
                text="Binding Frameworks & Direct Oversight"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                Every engagement is governed by formal legal terms, MNPI policies, and direct
                compliance desk supervision.
              </p>
            </Reveal>
          </div>

          <div className="governance-pillars-row" style={{ marginBottom: '1.35rem' }}>
            {HOME_COMPLIANCE_CARDS.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.04} className="governance-pillar-cell">
                <div>
                  <div className="governance-pillar-cell__top">
                    <div className="card-top__left">
                      <span className="card-icon-box">
                        <Icon name="document" size={15} />
                      </span>
                      <span className="card-index">{card.badge}</span>
                    </div>
                    <span className="card-tag">Official Policy</span>
                  </div>
                  <h3 className="governance-pillar-cell__title">{card.title}</h3>
                  <p className="governance-pillar-cell__desc">{card.description}</p>
                </div>
                <div className="governance-pillar-cell__footer">
                  <span>Binding Governance</span>
                  <Link to={card.path} className="card-cta-link">
                    {card.ctaLabel} <Icon name="arrow-right" size={13} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="compliance-oversight-banner">
            <div className="compliance-oversight-banner__copy">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Direct Compliance Oversight
              </span>
              <h3>Have a compliance-related question or concern?</h3>
              <p>
                At Hasamex, compliance is built into everything we do. From expert onboarding and
                client confidentiality to MNPI safeguards and secure call handling, our program is
                designed to uphold the highest legal and ethical standards—globally.
              </p>
            </div>

            <div className="compliance-oversight-banner__desk">
              <span className="intake-desk-card__label">COMPLIANCE GOVERNANCE DESK</span>
              <a href={`mailto:${BRAND.emails.compliance}`} className="email-plain-link">
                <Icon name="mail" size={15} />
                {BRAND.emails.compliance}
              </a>
              <span className="compliance-oversight-banner__note">
                We review every inquiry with discretion and respond promptly.
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
