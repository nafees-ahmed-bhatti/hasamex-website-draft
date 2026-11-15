import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  CLIENT_AUDIENCES,
  COMPLIANCE_SAFEGUARDS,
  HOME_COMPLIANCE_CARDS,
  HOME_EXPERT_ARCHETYPES,
  HOME_FORMATS,
  MARQUEE_ITEMS,
  TESTIMONIALS,
  VERIFIED_BENCHMARKS,
  WHY_CHOOSE_HASAMEX
} from '../content/siteData';
import { HeroShowcaseCard } from '../components/HeroShowcaseCard';
import { Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';
import { WorkflowTimeline } from '../components/WorkflowTimeline';

const CORRIDOR_MARQUEE = [
  'Singapore HQ · 160 Robinson Road, #14-04 SBF Center',
  'Distributed Execution Across India',
  'Developed Markets: U.S. · Europe · Japan · Australia · South Korea',
  'Emerging Markets: India · Southeast Asia · China · Brazil · South Africa',
  'Frontier Markets: MENA · Sub-Saharan Africa · Bangladesh · Sri Lanka',
  '100% Monitored & Recorded Consultations',
  'Strict Zero-Tolerance MNPI Firewall'
];

export function HomePage() {
  const [activeAudienceId, setActiveAudienceId] = useState(CLIENT_AUDIENCES[0].id);
  const [audiencePaused, setAudiencePaused] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialPaused, setTestimonialPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Subtle auto-switching for Client Segments when not hovered
  useEffect(() => {
    if (audiencePaused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setActiveAudienceId((prev) => {
        const idx = CLIENT_AUDIENCES.findIndex((a) => a.id === prev);
        return CLIENT_AUDIENCES[(idx + 1) % CLIENT_AUDIENCES.length].id;
      });
    }, 7500);
    return () => clearInterval(timer);
  }, [audiencePaused, prefersReducedMotion]);

  // Subtle auto-switching for Featured Testimonial when not hovered
  useEffect(() => {
    if (testimonialPaused || prefersReducedMotion) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6800);
    return () => clearInterval(timer);
  }, [testimonialPaused, prefersReducedMotion]);

  const currentAudience =
    CLIENT_AUDIENCES.find((a) => a.id === activeAudienceId) || CLIENT_AUDIENCES[0];

  const nextTestimonial = () =>
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () =>
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <Layout>
      {/* 1. HERO SECTION (Hub Executive Navy — Balanced Left & Right Columns) */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal blur y={14} className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Global Expert Intelligence Network
            </span>
            <AnimatedHeading
              as="h1"
              text="Expert Intelligence, Redefined"
              delay={0.04}
              stagger={0.055}
            />
            <p className="lead" style={{ maxWidth: 550 }}>
              Hasamex connects global decision makers to trusted primary insight through expert
              calls, curated meetings, and custom reports — enabling sharper, faster decisions.
            </p>

            <div className="hero-ctas">
              <Link to="/clients" className="btn btn--primary">
                Become a Client
                <Icon name="arrow-right" size={15} />
              </Link>
              <Link to="/experts" className="btn btn--glass">
                Join as an Expert
              </Link>
              <Link to="/compliance" className="btn btn--charcoal">
                Compliance Framework
              </Link>
            </div>

            {/* Architectural Institutional Footprint Ledger (Balances Hero Left vs Right Height) */}
            <div className="hero-footprint-ledger">
              <div className="hero-footprint-ledger__head">
                <img
                  src="/brand/hasamex-emblem-light.png"
                  alt="Hasamex Two-Figures H Emblem"
                  className="hero-footprint-ledger__emblem"
                />
                <div>
                  <div className="hero-footprint-ledger__title">
                    Hasamex Pte Ltd · Headquartered in Singapore (UEN 202526952W)
                  </div>
                  <div className="hero-footprint-ledger__sub">
                    160 Robinson Road, #14-04 SBF Center · Distributed Research &amp; Sourcing Hubs Across India
                  </div>
                </div>
              </div>
              <div className="hero-footprint-ledger__metrics">
                <div className="hero-footprint-ledger__cell">
                  <span className="hero-footprint-ledger__k">Turnaround</span>
                  <span className="hero-footprint-ledger__v">2–12 Hr Typical Delivery</span>
                </div>
                <div className="hero-footprint-ledger__cell">
                  <span className="hero-footprint-ledger__k">Governance</span>
                  <span className="hero-footprint-ledger__v">Zero-Tolerance MNPI Controls</span>
                </div>
                <div className="hero-footprint-ledger__cell">
                  <span className="hero-footprint-ledger__k">Settlement</span>
                  <span className="hero-footprint-ledger__v">≤ 14-Day Expert Payouts</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} y={16}>
            <HeroShowcaseCard />
          </Reveal>
        </div>
      </section>

      {/* 2. VERIFIED BENCHMARKS BAR (4x1 Desktop, 2x2 Architectural Grid on Tablet & Mobile) */}
      <section aria-label="Operational Commitments" className="benchmark-section">
        <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
          <div className="benchmark-strip">
            {VERIFIED_BENCHMARKS.map((item, idx) => (
              <div key={item.label} className="benchmark-cell">
                <div className="benchmark-cell__top">
                  <span className="benchmark-metric">{item.metric}</span>
                  <span className="benchmark-index">0{idx + 1}</span>
                </div>
                <div className="benchmark-label">{item.label}</div>
                <p className="benchmark-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2B. CONTINUOUS CAPABILITY MARQUEE TICKER (Left-to-Right) */}
      <div className="marquee-bar" aria-label="Hasamex Capabilities Ticker">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <div key={`${item}-${idx}`} className="marquee-item">
              <span className="marquee-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SIX ENGAGEMENT FORMATS (Architectural Hairline Matrix — Zero Floating Box Clutter) */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Engagement Formats
              </span>
              <AnimatedHeading
                as="h2"
                text="Designed Around How You Work"
                style={{ marginTop: '0.55rem', marginBottom: '0.4rem' }}
              />
              <p className="lead">
                Whether you need a rapid 1:1 diligence call or a multi-day field itinerary, Hasamex
                delivers six flexible primary research formats tailored to your workflow.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/clients#formats" className="btn btn--glass">
                Explore All Client Services
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="format-matrix">
            {HOME_FORMATS.map((fmt, idx) => (
              <Reveal key={fmt.id} delay={idx * 0.03} className="format-cell">
                <div className="format-cell__top">
                  <div className="format-cell__id">
                    <span className="format-cell__icon">
                      <Icon name={fmt.icon} size={15} />
                    </span>
                    <span className="format-cell__num">{fmt.number}</span>
                  </div>
                  <span className="format-cell__tag">{fmt.tag}</span>
                </div>

                <div className="format-cell__body">
                  <h3 className="format-cell__title">{fmt.title}</h3>
                  <p className="format-cell__desc">{fmt.shortDesc}</p>
                </div>

                <div className="format-cell__footer">
                  <span className="format-cell__scope">{fmt.scope}</span>
                  <Link to="/clients#formats" className="format-cell__link">
                    <span>Explore</span>
                    <Icon name="arrow-right" size={13} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW HASAMEX CONNECTS CLIENTS WITH EXPERTS (Unified 4-Stage Process Pipeline — All Details Visible) */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 660 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                End-to-End Execution
              </span>
              <AnimatedHeading
                as="h2"
                text="How Hasamex Connects Clients With Experts"
                style={{ marginTop: '0.55rem', marginBottom: '0.4rem', color: '#ffffff' }}
              />
              <p className="lead" style={{ color: '#cbd5e1' }}>
                Every research mandate runs through a structured four-stage workflow—combining custom
                human headhunting, proprietary AI profile enrichment, and mandatory pre-call
                compliance controls.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/clients#service-model" className="btn btn--primary">
                Start a Project
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <WorkflowTimeline variant="navy" />
        </div>
      </section>

      {/* 5. WHY THE WORLD'S SMARTEST TEAMS CHOOSE HASAMEX (Editorial Split Layout + 4 Architectural Rows) */}
      <section className="section section--ivory">
        <div className="container">
          <div className="advantage-split">
            {/* Left Anchor Column */}
            <Reveal className="advantage-split__lead">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  The Hasamex Advantage
                </span>
                <AnimatedHeading
                  as="h2"
                  text="Why the World’s Smartest Teams Choose Hasamex"
                  style={{ marginTop: '0.55rem', marginBottom: '0.45rem' }}
                />
                <p className="lead" style={{ marginBottom: '0.9rem' }}>
                  We blend custom sourcing, precision vetting, white-glove service, and built-in
                  compliance to elevate every project—without the noise of recycled databases.
                </p>
              </div>

              <div className="advantage-sla-card">
                <div className="advantage-sla-card__eyebrow">
                  Institutional Execution Standard
                </div>
                <div className="advantage-sla-card__title">
                  Built for High-Stakes Diligence Across Global Corridors
                </div>
                <ul className="advantage-sla-card__list">
                  <li>
                    <Icon name="check" size={14} />
                    <span>Singapore HQ &amp; India execution desks operating in tandem</span>
                  </li>
                  <li>
                    <Icon name="check" size={14} />
                    <span>Bespoke recruitment per brief across DM, EM &amp; FM</span>
                  </li>
                  <li>
                    <Icon name="check" size={14} />
                    <span>100% monitored, recorded &amp; auditable consultations</span>
                  </li>
                </ul>
                <Link to="/clients#service-model" className="btn btn--primary" style={{ width: '100%' }}>
                  Explore Our Service Framework
                  <Icon name="arrow-right" size={15} />
                </Link>
              </div>
            </Reveal>

            {/* Right 4-Row Architectural Ledger (Full Descriptions Visible, Zero Truncation) */}
            <div className="advantage-ledger">
              {WHY_CHOOSE_HASAMEX.map((pillar, idx) => (
                <Reveal key={pillar.title} delay={idx * 0.04} className="advantage-row">
                  <div className="advantage-row__left">
                    <span className="advantage-row__num">{pillar.number}</span>
                    <span className="advantage-row__icon">
                      <Icon name={pillar.icon || 'shield'} size={16} />
                    </span>
                  </div>

                  <div className="advantage-row__content">
                    <div className="advantage-row__header">
                      <h3 className="advantage-row__title">{pillar.title}</h3>
                      <div className="advantage-row__badges">
                        <span className="advantage-row__tag">{pillar.highlight}</span>
                        <span className="advantage-row__note">{pillar.footerNote}</span>
                      </div>
                    </div>
                    <p className="advantage-row__desc">{pillar.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5B. REVERSE-DIRECTION GLOBAL CORRIDOR MARQUEE */}
      <div className="marquee-bar marquee-bar--light" aria-label="Global Market Corridors Ticker">
        <div className="marquee-track marquee-track--reverse">
          {[...CORRIDOR_MARQUEE, ...CORRIDOR_MARQUEE].map((item, idx) => (
            <div key={`${item}-${idx}`} className="marquee-item">
              <span className="marquee-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. THE EXPERTS BEHIND THE INTELLIGENCE (Institutional 2-Column Operator Roster) */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Hasamex Intelligence Network (HIN)
              </span>
              <AnimatedHeading
                as="h2"
                text="The Experts Behind the Intelligence"
                style={{ marginTop: '0.55rem', marginBottom: '0.4rem' }}
              />
              <p className="lead">
                A global network of operators, advisors, and specialists with real-world
                experience—producing high-quality primary insight across Developed, Emerging, and
                Frontier markets.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/experts" className="btn btn--primary">
                Explore the Expert Network
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="hin-roster">
            <div className="hin-roster__banner">
              <div className="hin-roster__banner-left">
                <span className="hin-roster__dot" />
                <span>Active Global Practitioner Cohorts (HIN-01 — HIN-06)</span>
              </div>
              <div className="hin-roster__banner-pills">
                <span>Developed Markets (DM)</span>
                <span>Emerging Markets (EM)</span>
                <span>Frontier Markets (FM)</span>
                <span>≤ 14-Day Guaranteed Payouts</span>
              </div>
            </div>

            <div className="hin-roster__grid">
              {HOME_EXPERT_ARCHETYPES.map((arch, idx) => (
                <Reveal key={arch.code} delay={idx * 0.035} className="hin-cohort-row">
                  <div className="hin-cohort-row__badge-col">
                    <span className="hin-cohort-row__code">{arch.code}</span>
                    <span className="hin-cohort-row__icon">
                      <Icon name="users" size={15} />
                    </span>
                  </div>

                  <div className="hin-cohort-row__main">
                    <div className="hin-cohort-row__top">
                      <h3 className="hin-cohort-row__title">{arch.title}</h3>
                      <span className="hin-cohort-row__tag">{arch.roleTag}</span>
                    </div>
                    <p className="hin-cohort-row__desc">{arch.detail}</p>
                    <div className="hin-cohort-row__meta">
                      <span className="hin-cohort-row__coverage">
                        Focus: <strong>{arch.coverage}</strong>
                      </span>
                      <Link to="/experts#categories" className="hin-cohort-row__link">
                        <span>HIN Cohort</span>
                        <Icon name="arrow-right" size={12} />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENT AUDIENCES (Auto-Rotating + Interactive Tab Matrix) */}
      <section
        className="section section--elevated"
        onMouseEnter={() => setAudiencePaused(true)}
        onMouseLeave={() => setAudiencePaused(false)}
      >
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Client Segments
              </span>
              <AnimatedHeading
                as="h2"
                text="Trusted by Decision-Makers Worldwide"
                style={{ marginTop: '0.55rem', marginBottom: '0.4rem' }}
              />
              <p className="lead">
                Hasamex supports a global client base across institutional investment, strategy
                consulting, and corporate innovation.
              </p>
            </Reveal>

            <div className="tab-bar" role="tablist" aria-label="Client Segments" style={{ marginBottom: 0 }}>
              {CLIENT_AUDIENCES.map((aud) => (
                <button
                  key={aud.id}
                  type="button"
                  role="tab"
                  aria-selected={aud.id === activeAudienceId}
                  className={`tab-btn ${aud.id === activeAudienceId ? 'tab-btn--active' : ''}`}
                  onClick={() => setActiveAudienceId(aud.id)}
                >
                  {aud.label}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentAudience.id}
              className="tab-panel"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.55rem' }}>
                  <span className="card-index">{currentAudience.label}</span>
                  <span className="card-tag">{currentAudience.clientsPageTitle}</span>
                </div>
                <h3 style={{ fontSize: '1.26rem', marginBottom: '0.45rem' }}>
                  {currentAudience.headline}
                </h3>
                <p className="lead" style={{ fontSize: '0.91rem', marginBottom: '1rem' }}>
                  {currentAudience.homeDescription}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.48rem',
                    marginBottom: '1.25rem'
                  }}
                >
                  {currentAudience.workflows.map((wf) => (
                    <div
                      key={wf}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.55rem',
                        fontSize: '0.86rem',
                        color: 'var(--color-text-primary)',
                        fontWeight: 500
                      }}
                    >
                      <span
                        style={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          background: 'var(--bg-section-subtle)',
                          border: '1px solid var(--border-strong)',
                          color: 'var(--hub-navy)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon name="check" size={12} />
                      </span>
                      <span>{wf}</span>
                    </div>
                  ))}
                </div>

                <Link to="/clients#enquiry-form" className="btn btn--primary">
                  Start a Project for {currentAudience.label}
                  <Icon name="arrow-right" size={15} />
                </Link>
              </div>

              <div
                style={{
                  background: 'var(--hub-navy)',
                  border: '1px solid var(--hub-navy-border)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.45rem 1.55rem',
                  color: '#f8fafc',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <div
                  style={{
                    fontSize: '0.67rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#cbd5e1',
                    fontWeight: 600,
                    marginBottom: '0.55rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  Verified Practitioner Feedback
                </div>
                <blockquote
                  style={{
                    fontSize: '0.94rem',
                    lineHeight: 1.58,
                    color: '#ffffff',
                    marginBottom: '0.85rem',
                    fontStyle: 'normal',
                    fontWeight: 500
                  }}
                >
                  “{currentAudience.quote.text}”
                </blockquote>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  — {currentAudience.quote.author}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 8. COMPLIANCE YOU CAN TRUST (5-Checkpoint Strip + 3-Column Governance Ledger — Zero Orphan Cards!) */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Institutional Governance
              </span>
              <AnimatedHeading
                as="h2"
                text="Compliance You Can Trust"
                style={{ marginTop: '0.55rem', marginBottom: '0.4rem' }}
              />
              <p className="lead">
                From expert onboarding and NDAs to MNPI safeguards and full audit trails, Hasamex is
                built for regulated, institutional-grade research.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/compliance" className="btn btn--ink">
                Full Compliance Architecture
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="governance-architecture">
            {/* Top 5-Checkpoint Safeguard Strip */}
            <div className="governance-checkpoints">
              {COMPLIANCE_SAFEGUARDS.map((cp) => (
                <div key={cp.number} className="governance-checkpoint-cell">
                  <div className="governance-checkpoint-cell__top">
                    <span className="governance-checkpoint-cell__num">CHECKPOINT {cp.number}</span>
                    <Icon name="shield" size={13} />
                  </div>
                  <div className="governance-checkpoint-cell__title">{cp.title}</div>
                  <div className="governance-checkpoint-cell__stage">{cp.stage}</div>
                </div>
              ))}
            </div>

            {/* Bottom 3-Column Binding Policy Ledger (Stays 3 Columns on Desktop AND Tablet!) */}
            <div className="governance-pillars-row">
              {HOME_COMPLIANCE_CARDS.map((card, idx) => (
                <Reveal key={card.title} delay={idx * 0.04} className="governance-pillar-cell">
                  <div>
                    <div className="governance-pillar-cell__top">
                      <span className="card-index">{card.badge}</span>
                      <span className="card-tag">Mandatory Protocol</span>
                    </div>
                    <h3 className="governance-pillar-cell__title">{card.title}</h3>
                    <p className="governance-pillar-cell__desc">{card.description}</p>
                  </div>
                  <div className="governance-pillar-cell__footer">
                    <span>Global Standard</span>
                    <Link to={card.path} className="card-cta-link">
                      {card.ctaLabel} <Icon name="arrow-right" size={13} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. VERIFIED TESTIMONIALS (Spotlight + 3-Column Selector Bar — Zero Orphan Card on Tablet!) */}
      <section
        className="section section--elevated"
        onMouseEnter={() => setTestimonialPaused(true)}
        onMouseLeave={() => setTestimonialPaused(false)}
      >
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 620 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Verified Testimonials
              </span>
              <AnimatedHeading
                as="h2"
                text="Trusted by Clients. Respected by Experts."
                style={{ marginTop: '0.55rem', marginBottom: '0.4rem' }}
              />
              <p className="lead">Here’s what people are saying about working with Hasamex.</p>
            </Reveal>

            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                className="btn btn--glass btn--sm"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                ← Prev
              </button>
              <button
                type="button"
                className="btn btn--glass btn--sm"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                Next →
              </button>
            </div>
          </div>

          <div className="testimonial-showcase">
            {/* Featured Spotlight Slider (Hub Executive Navy) */}
            <div className="testimonial-spotlight">
              <div className="card-top">
                <span className="eyebrow">{TESTIMONIALS[activeTestimonial].category}</span>
                <span style={{ fontSize: '0.73rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  0{activeTestimonial + 1} / 0{TESTIMONIALS.length}
                </span>
              </div>
              <blockquote className="testimonial-spotlight__quote">
                “{TESTIMONIALS[activeTestimonial].quote}”
              </blockquote>
              <div style={{ fontSize: '0.84rem', color: '#cbd5e1' }}>
                <strong style={{ color: '#ffffff' }}>
                  {TESTIMONIALS[activeTestimonial].role}
                </strong>{' '}
                — {TESTIMONIALS[activeTestimonial].org}
              </div>
            </div>

            {/* 3-Column Verified Quote Ledger (Stays 3 Columns on Desktop AND Tablet!) */}
            <div className="testimonial-selector-row">
              {TESTIMONIALS.slice(0, 3).map((item, idx) => {
                const isSelected = activeTestimonial === idx;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`testimonial-selector-cell ${
                      isSelected ? 'testimonial-selector-cell--active' : ''
                    }`}
                    onClick={() => setActiveTestimonial(idx)}
                  >
                    <div className="testimonial-selector-cell__top">
                      <span className="card-index">{item.category}</span>
                      <span className="card-tag">Verified</span>
                    </div>
                    <p className="testimonial-selector-cell__quote">“{item.quote}”</p>
                    <div className="testimonial-selector-cell__author">
                      <strong>{item.role}</strong> · {item.org}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
