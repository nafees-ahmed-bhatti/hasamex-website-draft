import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  BRAND,
  EXPERT_FAQS,
  EXPERTS_CATEGORIES,
  EXPERTS_PROMISES,
  FORM_CONFIGS
} from '../content/siteData';
import { Icon } from '../components/Icons';
import { IntakeForm } from '../components/IntakeForm';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal, TypewriterText } from '../components/Reveal';

const EXPERT_JOURNEY_STAGES = [
  {
    id: '01',
    tabLabel: '01 · Invite',
    phase: 'Stage 01 · Precision Brief Matching',
    title: 'Relevant Invitations Only — Zero Spam Outreach',
    stream:
      '[HIN-MATCH] Experience verified against active institutional brief -> Invitation dispatched with scope & rate transparency.',
    sla: '100% Relevance Filtered',
    metrics: [
      { k: 'Outreach Rule', v: 'Brief-Matched Only' },
      { k: 'Scope Clarity', v: 'Shared Upfront' }
    ]
  },
  {
    id: '02',
    tabLabel: '02 · Onboard',
    phase: 'Stage 02 · Boundary & Compliance Protection',
    title: 'Clear Terms, Conflict Check & Employment Safeguards',
    stream:
      '[COMPLIANCE-GATE] Employer conflict check & cooling-off verified -> Affirmative HIN Terms & Code of Conduct consent logged.',
    sla: '5-Min Digital Onboarding',
    metrics: [
      { k: 'MNPI Shield', v: 'Strict Non-Public Guard' },
      { k: 'Anonymity', v: 'Need-to-Know Basis' }
    ]
  },
  {
    id: '03',
    tabLabel: '03 · Consult',
    phase: 'Stage 03 · Respectful Engagement',
    title: '1:1 Calls, Roundtables, Meetings or Transcripts',
    stream:
      '[LIVE-SESSION] Dedicated Singapore & India desk coordinates scheduling across time zones -> Zero chasing or admin friction.',
    sla: '30–60 Min Typical Session',
    metrics: [
      { k: 'Formats', v: 'Calls · Panels · Tours' },
      { k: 'Coordination', v: 'Proactive Desk Support' }
    ]
  },
  {
    id: '04',
    tabLabel: '04 · ≤14d Pay',
    phase: 'Stage 04 · Guaranteed Honorarium Settlement',
    title: 'Paid Within 14 Days — No Delays, No Chasing Updates',
    stream:
      '[SETTLEMENT-COMPLETE] Consultation verified -> Honorarium disbursed via secure global payment rails within 14 calendar days.',
    sla: '≤ 14-Day Guaranteed SLA',
    metrics: [
      { k: 'Settlement Window', v: '≤ 14 Calendar Days' },
      { k: 'Payment Rails', v: 'Global Multi-Currency' }
    ]
  }
];

const PROMISE_META = [
  { icon: 'sparkles', tag: 'Precision Matching', footer: 'Zero Irrelevant Outreach' },
  { icon: 'clock', tag: '≤ 14-Day Payout', footer: 'Guaranteed Settlement SLA' },
  { icon: 'mail', tag: 'Dedicated Desk', footer: 'End-to-End Coordination' },
  { icon: 'shield', tag: 'Boundary Respect', footer: 'Strict MNPI & Time Protection' }
];

const CATEGORY_META = [
  { icon: 'briefcase', tag: 'Executive Leadership', scope: 'C-Suite & BU Transformation' },
  { icon: 'layers', tag: 'Operations & Verticals', scope: 'Supply Chain, Plant & P&L' },
  { icon: 'compass', tag: 'Advisory & Veterans', scope: 'Multi-Cycle Sector Perspective' },
  { icon: 'book', tag: 'Research & Methodology', scope: 'Structured Technical Depth' },
  { icon: 'scale', tag: 'Policy & Regulation', scope: 'Licensing, Trade & Governance' },
  { icon: 'users', tag: 'Commercial & Channel', scope: 'Buyer, Pricing & Distribution' }
];

const EXPERT_MARQUEE = [
  '≤ 14-Day Guaranteed Honorarium Payouts',
  'Zero Spam — Only Briefs Matching Your Exact Background',
  'Transparent Pre-Agreed Compensation Before Every Call',
  'Strict Protection of Employer & Confidentiality Boundaries',
  '1:1 Expert Calls · Moderated Roundtables · In-Person Meetings · Custom Transcripts',
  'Dedicated Coordination from Singapore HQ & India Execution Desks'
];

export function ExpertsPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqCategory, setFaqCategory] = useState('All');
  const prefersReducedMotion = useReducedMotion();

  const elapsedRef = useRef(0);
  const lastTickRef = useRef(null);

  // Smooth auto-cycling 4-stage expert journey showcase in Hero
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
      if (elapsedRef.current >= 5200) {
        elapsedRef.current = 0;
        setProgress(0);
        setActiveStage((prev) => (prev + 1) % EXPERT_JOURNEY_STAGES.length);
      } else {
        setProgress(Math.min(100, (elapsedRef.current / 5200) * 100));
      }
    }, 60);
    return () => window.clearInterval(timer);
  }, [paused, prefersReducedMotion]);

  const currentStage = EXPERT_JOURNEY_STAGES[activeStage];

  const categories = ['All', ...Array.from(new Set(EXPERT_FAQS.map((f) => f.category)))];
  const filteredFaqs =
    faqCategory === 'All'
      ? EXPERT_FAQS
      : EXPERT_FAQS.filter((f) => f.category === faqCategory);

  return (
    <Layout
      preFooterProps={{
        eyebrow: 'Hasamex Intelligence Network',
        title: 'Share Your Insight With Global Decision-Makers',
        subtitle:
          'Complete our short onboarding form above or review our Expert Terms & Conditions and Code of Conduct.',
        primaryLabel: 'Register as an Expert',
        primaryTo: '/experts#register-form',
        secondaryLabel: 'Read Expert T&Cs',
        secondaryTo: '/terms'
      }}
    >
      {/* 1. HERO — BALANCED 2-COLUMN INSTITUTIONAL SPLIT WITH LIVE EXPERT JOURNEY CONSOLE */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <Reveal blur y={14} className="hero-copy">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  For Subject Matter Experts
                </span>
                <AnimatedHeading
                  as="h1"
                  text="The Hasamex Intelligence Network"
                  style={{ marginTop: '0.65rem', marginBottom: '0.65rem' }}
                />
                <p className="lead" style={{ maxWidth: '52ch', marginBottom: '1.25rem' }}>
                  Join a global community of trusted experts across industries — built on
                  relevance, respect, and guaranteed 14-day honorarium payouts.
                </p>
                <div className="hero-ctas">
                  <a href="#register-form" className="btn btn--primary">
                    Register as an Expert
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#why-join" className="btn btn--glass">
                    Why Join Hasamex
                  </a>
                  <a href="#faqs" className="btn btn--charcoal">
                    Expert FAQs
                  </a>
                </div>
              </div>

              <div className="hero-trust-line">
                <img
                  src="/brand/hasamex-emblem-dark.png"
                  alt="Hasamex Emblem"
                  className="hero-footprint-ledger__emblem"
                />
                <div>
                  <strong>Guaranteed ≤ 14-Day Honorarium Settlement</strong>
                  <span>
                    {BRAND.legalName} (UEN {BRAND.uen}) · Transparent Pre-Agreed Terms
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Right Column — Animated 4-Stage HIN Expert Experience Console */}
            <Reveal delay={0.08} y={14}>
              <div
                className="showcase-card"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => {
                  lastTickRef.current = performance.now();
                  setPaused(false);
                }}
                aria-label="HIN Expert Experience Lifecycle"
              >
                <div className="showcase-header">
                  <div className="showcase-header__top">
                    <span className="showcase-live-pill">
                      <span className="live-dot" />
                      <span>HIN Expert Experience Lifecycle</span>
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
                      {paused ? `Stage ${currentStage.id} · Paused` : `Stage ${currentStage.id} / 04`}
                    </span>
                  </div>

                  <div
                    className="showcase-tabs showcase-tabs--4"
                    role="tablist"
                    aria-label="Expert Journey Stages"
                  >
                    {EXPERT_JOURNEY_STAGES.map((st, idx) => {
                      const isActive = idx === activeStage;
                      return (
                        <button
                          key={st.id}
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          className={`showcase-tab ${isActive ? 'showcase-tab--active' : ''}`}
                          onClick={() => {
                            elapsedRef.current = 0;
                            lastTickRef.current = performance.now();
                            setProgress(0);
                            setActiveStage(idx);
                          }}
                        >
                          <span>{st.tabLabel}</span>
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
                    key={currentStage.id}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 8, filter: 'blur(3px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6, filter: 'blur(2px)' }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="showcase-meta-row">
                      <span style={{ color: '#ffffff', fontWeight: 600 }}>
                        {currentStage.phase}
                      </span>
                      <span style={{ color: '#86efac' }}>{currentStage.sla}</span>
                    </div>

                    <div className="showcase-title" style={{ marginBottom: '0.55rem' }}>
                      {currentStage.title}
                    </div>

                    <div className="showcase-profile-box">
                      <div className="showcase-profile-box__top">
                        <span className="showcase-profile-box__label">Live Expert Workflow</span>
                        <span className="showcase-profile-box__status">
                          <Icon name="check" size={12} />
                          {currentStage.sla}
                        </span>
                      </div>
                      <div className="showcase-profile-box__stream">
                        <TypewriterText text={currentStage.stream} speed={18} />
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '0.55rem',
                        marginBottom: '0.65rem'
                      }}
                    >
                      {currentStage.metrics.map((m) => (
                        <div
                          key={m.k}
                          style={{
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: '8px',
                            padding: '0.52rem 0.7rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.12rem'
                          }}
                        >
                          <span
                            style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.62rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.06em',
                              color: '#94a3b8'
                            }}
                          >
                            {m.k}
                          </span>
                          <span
                            style={{
                              fontSize: '0.78rem',
                              fontWeight: 600,
                              color: '#ffffff'
                            }}
                          >
                            {m.v}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="showcase-footer">
                      <span className="showcase-footer__tag">
                        HIN Charter · Relevance · Respect · ≤ 14-Day Settlement
                      </span>
                      <a href="#register-form" className="showcase-cta">
                        Join Network
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

      {/* 1B. CONTINUOUS EXPERT CHARTER MARQUEE TICKER */}
      <div className="marquee-bar" aria-label="Hasamex Expert Network Commitments">
        <div className="marquee-track">
          {[...EXPERT_MARQUEE, ...EXPERT_MARQUEE].map((item, idx) => (
            <div key={`${item}-${idx}`} className="marquee-item">
              <span className="marquee-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. DESIGNED WITH EXPERTS IN MIND (Clean 4-Column Architectural Strip) */}
      <section id="why-join" className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 660 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Expert Value Proposition
              </span>
              <AnimatedHeading
                as="h2"
                text="Designed with Experts in Mind"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                The Hasamex Intelligence Network is a curated community of professionals who share
                insight with global investors, consultants, and corporate leaders—built on
                relevance, respect, and reliability.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <a href="#register-form" className="btn btn--primary">
                Register Now
                <Icon name="arrow-right" size={15} />
              </a>
            </Reveal>
          </div>

          <div className="service-standard-strip">
            {EXPERTS_PROMISES.map((item, idx) => {
              const meta = PROMISE_META[idx] || PROMISE_META[0];
              return (
                <Reveal key={item.title} delay={idx * 0.04} className="service-standard-cell">
                  <div>
                    <div className="service-standard-cell__top">
                      <div className="service-standard-cell__badge-group">
                        <span className="card-icon-box">
                          <Icon name={meta.icon} size={15} />
                        </span>
                        <span className="card-index">{item.number}</span>
                      </div>
                      <span className="card-tag">{meta.tag}</span>
                    </div>
                    <h3 className="service-standard-cell__title">{item.title}</h3>
                    <p className="service-standard-cell__desc">{item.description}</p>
                  </div>
                  <div className="service-standard-cell__footer">
                    <span>{meta.footer}</span>
                    <Icon name="check" size={14} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHO POWERS THE NETWORK (Clean 3x2 Architectural Matrix — Properly Spaced Icon & Code) */}
      <section id="categories" className="section section--ivory">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Network Composition
              </span>
              <AnimatedHeading
                as="h2"
                text="Who Powers the Hasamex Intelligence Network"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                A global community of operators, advisors, and specialists with real-world
                experience—driving primary insight across Developed, Emerging, and Frontier markets.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <a href="#register-form" className="btn btn--glass">
                Apply to Join HIN
                <Icon name="arrow-right" size={15} />
              </a>
            </Reveal>
          </div>

          <div className="format-matrix">
            {EXPERTS_CATEGORIES.map((cat, idx) => {
              const meta = CATEGORY_META[idx] || CATEGORY_META[0];
              return (
                <Reveal key={cat.code} delay={idx * 0.035} className="format-cell">
                  <div className="format-cell__top">
                    <div className="format-cell__id">
                      <span className="format-cell__icon">
                        <Icon name={meta.icon} size={15} />
                      </span>
                      <span className="format-cell__num">{cat.code}</span>
                    </div>
                    <span className="format-cell__tag">{meta.tag}</span>
                  </div>

                  <div className="format-cell__body">
                    <h3 className="format-cell__title">{cat.title}</h3>
                    <p className="format-cell__desc">{cat.description}</p>
                  </div>

                  <div className="format-cell__footer">
                    <span className="format-cell__scope">{meta.scope}</span>
                    <a href="#register-form" className="format-cell__link">
                      <span>Join Cohort</span>
                      <Icon name="arrow-right" size={13} />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. EXPERT FAQS — EDITORIAL SPLIT LAYOUT WITH ANIMATED ACCORDION */}
      <section id="faqs" className="section section--elevated">
        <div className="container">
          <div className="faq-split-layout">
            {/* Left Anchor Column: Title + Category Switcher + Governance Support Card */}
            <Reveal className="faq-split-layout__sidebar">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Questions We Hear Most
                </span>
                <AnimatedHeading
                  as="h2"
                  text="Expert FAQs"
                  style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
                />
                <p className="lead" style={{ marginBottom: '1.1rem' }}>
                  Clear answers to common questions about joining, engaging, and getting paid with
                  Hasamex.
                </p>

                {/* Vertical Category Filter List */}
                <div className="faq-category-list" role="tablist" aria-label="FAQ Categories">
                  {categories.map((cat) => {
                    const count =
                      cat === 'All'
                        ? EXPERT_FAQS.length
                        : EXPERT_FAQS.filter((f) => f.category === cat).length;
                    const isActive = faqCategory === cat;
                    return (
                      <button
                        key={cat}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        className={`faq-category-btn ${
                          isActive ? 'faq-category-btn--active' : ''
                        }`}
                        onClick={() => {
                          setFaqCategory(cat);
                          setOpenFaqIndex(0);
                        }}
                      >
                        <span>{cat === 'All' ? 'All Expert Questions' : cat}</span>
                        <span className="faq-category-btn__count">{count}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="advantage-sla-card">
                <div className="advantage-sla-card__eyebrow">EXPERT GOVERNANCE &amp; SUPPORT</div>
                <div className="advantage-sla-card__title">
                  Transparent Rules &amp; Direct Desk Assistance
                </div>
                <ul className="advantage-sla-card__list">
                  <li>
                    <Icon name="check" size={14} />
                    <span>Pre-agreed honorarium rates before every consultation</span>
                  </li>
                  <li>
                    <Icon name="check" size={14} />
                    <span>Strict protection of employment &amp; MNPI boundaries</span>
                  </li>
                  <li>
                    <Icon name="check" size={14} />
                    <span>
                      Direct desk:{' '}
                      <a href={`mailto:${BRAND.emails.general}`} className="email-plain-link">
                        {BRAND.emails.general}
                      </a>
                    </span>
                  </li>
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <Link to="/terms" className="btn btn--primary btn--sm">
                    Expert T&amp;Cs
                    <Icon name="arrow-right" size={13} />
                  </Link>
                  <Link to="/code-of-conduct" className="btn btn--charcoal btn--sm">
                    Code of Conduct
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Right Column: Smooth Animated FAQ Accordion */}
            <div className="faq-list" role="region" aria-label="Frequently Asked Questions">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <Reveal key={faq.question} delay={idx * 0.025}>
                    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
                      <button
                        type="button"
                        className="faq-trigger"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      >
                        <span className="faq-trigger__left">
                          <span className="faq-trigger__num">
                            {String(idx + 1).padStart(2, '0')}
                          </span>
                          <span className="faq-trigger__question">{faq.question}</span>
                        </span>
                        <span className="faq-trigger__right">
                          <span className="faq-trigger__cat">{faq.category}</span>
                          <span className="faq-icon">
                            <Icon name="plus" size={15} />
                          </span>
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="faq-body">{faq.answer}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERT REGISTRATION FORM (Institutional Split Intake Layout) */}
      <section id="register-form" className="section">
        <div className="container">
          <div className="intake-split-layout">
            {/* Left Institutional Expert Onboarding Charter */}
            <Reveal className="intake-desk-card">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  HIN Expert Onboarding
                </span>
                <h2 className="intake-desk-card__title">
                  Join the Hasamex Intelligence Network
                </h2>
                <p className="intake-desk-card__lead">
                  Register your domain profile once. Our Singapore and India research teams reach
                  out only when a client mandate genuinely matches your operational experience.
                </p>

                <div className="intake-desk-card__steps">
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">01</span>
                    <div>
                      <strong>Curated Brief Invitations</strong>
                      <span>Zero spam—only mandates aligned with your sector and seniority.</span>
                    </div>
                  </div>
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">02</span>
                    <div>
                      <strong>Clear Compliance &amp; Boundaries</strong>
                      <span>Full protection of employer obligations and non-public information.</span>
                    </div>
                  </div>
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">03</span>
                    <div>
                      <strong>Guaranteed ≤ 14-Day Payouts</strong>
                      <span>Honorarium terms agreed upfront and settled within 14 days.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intake-desk-card__footer">
                <div className="intake-desk-card__office">
                  <span className="intake-desk-card__label">VERIFIED EXPERT FEEDBACK</span>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      fontStyle: 'italic',
                      color: '#f8fafc',
                      lineHeight: 1.48,
                      margin: '0.15rem 0 0.25rem'
                    }}
                  >
                    “Hasamex stood out from day one—clear briefs, respectful communication, and
                    prompt payment without follow-ups.”
                  </p>
                  <span>— Former VP, Commercial · Consumer Goods</span>
                </div>
                <div className="intake-desk-card__emails">
                  <div>
                    <span>Expert Desk: </span>
                    <a href={`mailto:${BRAND.emails.general}`} className="email-plain-link">
                      {BRAND.emails.general}
                    </a>
                  </div>
                  <div>
                    <span>Compliance: </span>
                    <a href={`mailto:${BRAND.emails.compliance}`} className="email-plain-link">
                      {BRAND.emails.compliance}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Expert Registration Form */}
            <Reveal delay={0.05}>
              <IntakeForm config={FORM_CONFIGS.expert} />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
