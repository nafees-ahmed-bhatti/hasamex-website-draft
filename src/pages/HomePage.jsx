import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  CLIENT_AUDIENCES,
  HOME_COMPLIANCE_CARDS,
  HOME_EXPERT_ARCHETYPES,
  HOME_FORMATS,
  HOW_HASAMEX_CONNECTS,
  MARQUEE_ITEMS,
  TESTIMONIALS,
  VERIFIED_BENCHMARKS,
  WHY_CHOOSE_HASAMEX
} from '../content/siteData';
import { HeroShowcaseCard } from '../components/HeroShowcaseCard';
import { Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

export function HomePage() {
  const [activeAudienceId, setActiveAudienceId] = useState(CLIENT_AUDIENCES[0].id);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const currentAudience =
    CLIENT_AUDIENCES.find((a) => a.id === activeAudienceId) || CLIENT_AUDIENCES[0];

  const nextTestimonial = () =>
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  const prevTestimonial = () =>
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <Layout>
      {/* 1. HERO SECTION (Hub Executive Navy) */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal blur y={18} className="hero-copy">
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
            <p className="lead" style={{ maxWidth: 560 }}>
              Hasamex connects global decision makers to trusted primary insight through expert
              calls, curated meetings, and custom reports — enabling sharper, faster decisions.
            </p>

            <div className="hero-ctas">
              <Link to="/clients" className="btn btn--primary">
                Become a Client
                <Icon name="arrow-right" size={16} />
              </Link>
              <Link to="/experts" className="btn btn--glass">
                Join as an Expert
              </Link>
              <Link to="/compliance" className="btn btn--charcoal">
                Compliance Framework
              </Link>
            </div>

            <div className="hero-trust-note">
              <img
                src="/brand/hasamex-emblem-light.png"
                alt="Hasamex Two-Figures H Emblem"
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  border: '1px solid rgba(34, 211, 238, 0.35)'
                }}
              />
              <div>
                <div style={{ color: '#f8fafc', fontWeight: 600 }}>
                  Headquartered in Singapore · Distributed Execution Across India &amp; Global Corridors
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                  Custom-vetted primary insight for Investment Firms, Strategy Consultants &amp; Corporate Leaders
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={20}>
            <HeroShowcaseCard />
          </Reveal>
        </div>
      </section>

      {/* 2. VERIFIED BENCHMARKS BAR */}
      <section aria-label="Operational Commitments">
        <div className="container" style={{ padding: 0, maxWidth: '100%' }}>
          <div className="benchmark-strip">
            {VERIFIED_BENCHMARKS.map((item) => (
              <div key={item.label} className="benchmark-cell">
                <div className="benchmark-metric">{item.metric}</div>
                <div className="benchmark-label">{item.label}</div>
                <p className="benchmark-detail">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2B. CONTINUOUS CAPABILITY MARQUEE TICKER (Junior.ai Inspired) */}
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

      {/* 3. SIX ENGAGEMENT FORMATS (Light Crisp Surface) */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 620 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Engagement Formats
              </span>
              <AnimatedHeading
                as="h2"
                text="Designed Around How You Work"
                style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}
              />
              <p className="lead">
                Whether you need a one-off call or a thematic knowledge sprint, Hasamex offers
                flexible formats to match your insight goals.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link to="/clients#formats" className="btn btn--glass">
                Explore our services
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="grid-3">
            {HOME_FORMATS.map((fmt, idx) => (
              <Reveal key={fmt.id} delay={idx * 0.045} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{fmt.number}</span>
                    <span className="card-tag">{fmt.tag}</span>
                  </div>
                  <div className="card-icon-box">
                    <Icon name={fmt.icon} size={18} />
                  </div>
                  <h3>{fmt.title}</h3>
                  <p>{fmt.shortDesc}</p>
                </div>
                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.9rem',
                    borderTop: '1px solid var(--hasamex-border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  <span>Full MNPI &amp; NDA coverage</span>
                  <Link
                    to="/clients#formats"
                    style={{
                      color: 'var(--color-accent)',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    Details <Icon name="arrow-right" size={13} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW HASAMEX CONNECTS CLIENTS WITH EXPERTS (Executive Navy Architectural Section) */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                End-to-End Execution
              </span>
              <AnimatedHeading
                as="h2"
                text="How Hasamex Connects Clients With Experts"
                style={{ marginTop: '0.75rem', marginBottom: '0.5rem', color: '#ffffff' }}
              />
              <p className="lead" style={{ color: '#cbd5e1' }}>
                Every research mandate runs through a structured four-stage workflow—combining custom
                human headhunting, proprietary AI profile enrichment, and mandatory pre-call
                compliance controls.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link to="/clients#service-model" className="btn btn--primary">
                Start a Project
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="grid-4">
            {HOW_HASAMEX_CONNECTS.map((stage, idx) => (
              <Reveal key={stage.step} delay={idx * 0.05} className="card card--navy">
                <div>
                  <div className="card-top">
                    <span className="card-index">STEP {stage.step}</span>
                    <span className="card-tag">{stage.phase.split(' ')[0]}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 600,
                      color: '#22d3ee',
                      marginBottom: '0.35rem'
                    }}
                  >
                    {stage.phase}
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY THE WORLD'S SMARTEST TEAMS CHOOSE HASAMEX (Light Slate Contrast) */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                The Hasamex Advantage
              </span>
              <AnimatedHeading
                as="h2"
                text="Why the World’s Smartest Teams Choose Hasamex"
                style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}
              />
              <p className="lead">
                We blend custom sourcing, precision vetting, premium service, and built-in
                compliance to elevate every project.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link to="/clients#service-model" className="btn btn--ink">
                Learn More About Our Service Framework
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="grid-4">
            {WHY_CHOOSE_HASAMEX.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.05} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{pillar.number}</span>
                    <span className="card-tag">{pillar.highlight}</span>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE EXPERTS BEHIND THE INTELLIGENCE */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 620 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Hasamex Intelligence Network (HIN)
              </span>
              <AnimatedHeading
                as="h2"
                text="The Experts Behind the Intelligence"
                style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}
              />
              <p className="lead">
                A global network of operators, advisors, and specialists with real-world
                experience—producing high-quality primary insight across Developed, Emerging, and
                Frontier markets.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link to="/experts" className="btn btn--primary">
                Learn About our Experts
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.1rem'
            }}
          >
            {HOME_EXPERT_ARCHETYPES.map((arch, idx) => (
              <Reveal key={arch.code} delay={idx * 0.045} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{arch.code}</span>
                    <span style={{ color: 'var(--color-accent)' }}>
                      <Icon name="users" size={16} />
                    </span>
                  </div>
                  <h3>{arch.title}</h3>
                  <p>{arch.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLIENT AUDIENCES (Interactive Tab Matrix) */}
      <section className="section section--elevated">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Client Segments
            </span>
            <AnimatedHeading as="h2" text="Trusted by Decision-Makers Worldwide" />
            <p className="lead">
              Hasamex supports a global client base across institutional investment, strategy
              consulting, and corporate innovation.
            </p>
          </Reveal>

          <div className="tab-bar" role="tablist" aria-label="Client Segments">
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

          <AnimatePresence mode="wait">
            <motion.div
              key={currentAudience.id}
              className="tab-panel"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            >
              <div>
                <span className="card-index">{currentAudience.label}</span>
                <h3 style={{ fontSize: '1.38rem', marginTop: '0.45rem', marginBottom: '0.65rem' }}>
                  {currentAudience.headline}
                </h3>
                <p className="lead" style={{ fontSize: '0.95rem', marginBottom: '1.35rem' }}>
                  {currentAudience.homeDescription}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.6rem',
                    marginBottom: '1.65rem'
                  }}
                >
                  {currentAudience.workflows.map((wf) => (
                    <div
                      key={wf}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        fontSize: '0.88rem',
                        color: 'var(--color-text-primary)',
                        fontWeight: 500
                      }}
                    >
                      <span style={{ color: 'var(--color-accent)', display: 'inline-flex' }}>
                        <Icon name="check" size={15} />
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
                  background: '#0b1329',
                  border: '1px solid #1e293b',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.65rem',
                  color: '#f8fafc'
                }}
              >
                <div
                  style={{
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#22d3ee',
                    fontWeight: 600,
                    marginBottom: '0.65rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  Verified Practitioner Feedback
                </div>
                <blockquote
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#f8fafc',
                    marginBottom: '1rem',
                    fontStyle: 'normal'
                  }}
                >
                  “{currentAudience.quote.text}”
                </blockquote>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                  — {currentAudience.quote.author}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 8. COMPLIANCE YOU CAN TRUST */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Institutional Governance
            </span>
            <AnimatedHeading as="h2" text="Compliance You Can Trust" />
            <p className="lead">
              From expert onboarding and NDAs to MNPI safeguards and full audit trails, Hasamex is
              built for regulated, institutional-grade research.
            </p>
          </Reveal>

          <div className="grid-3">
            {HOME_COMPLIANCE_CARDS.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.05} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{card.badge}</span>
                    <span style={{ color: 'var(--color-accent)' }}>
                      <Icon name="shield" size={17} />
                    </span>
                  </div>
                  <h3>{card.title}</h3>
                  <p style={{ marginBottom: '1.35rem' }}>{card.description}</p>
                </div>
                <Link
                  to={card.path}
                  className="btn btn--glass btn--sm"
                  style={{ alignSelf: 'flex-start' }}
                >
                  {card.ctaLabel}
                  <Icon name="arrow-right" size={14} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. VERIFIED TESTIMONIALS */}
      <section className="section section--elevated">
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
                style={{ marginTop: '0.75rem', marginBottom: '0.45rem' }}
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

          {/* Featured Spotlight Slider (Hub Executive Navy Card) */}
          <div
            className="card card--navy"
            style={{
              padding: '2rem',
              marginBottom: '1.25rem',
              borderColor: 'rgba(34, 211, 238, 0.35)'
            }}
          >
            <div className="card-top">
              <span className="eyebrow">{TESTIMONIALS[activeTestimonial].category}</span>
              <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                {activeTestimonial + 1} / {TESTIMONIALS.length}
              </span>
            </div>
            <blockquote
              style={{
                fontSize: 'clamp(1.08rem, 1.65vw, 1.32rem)',
                fontWeight: 500,
                lineHeight: 1.5,
                color: '#f8fafc',
                marginBottom: '1.1rem'
              }}
            >
              “{TESTIMONIALS[activeTestimonial].quote}”
            </blockquote>
            <div style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
              <strong style={{ color: '#ffffff' }}>
                {TESTIMONIALS[activeTestimonial].role}
              </strong>{' '}
              — {TESTIMONIALS[activeTestimonial].org}
            </div>
          </div>

          {/* 3-Card Verified Quote Grid */}
          <div className="grid-3">
            {TESTIMONIALS.slice(0, 3).map((item, idx) => (
              <div
                key={item.id}
                className="card"
                onClick={() => setActiveTestimonial(idx)}
                style={{
                  cursor: 'pointer',
                  borderColor:
                    activeTestimonial === idx ? 'var(--color-accent)' : 'var(--border-subtle)'
                }}
              >
                <div>
                  <div className="card-top">
                    <span className="card-index">{item.category}</span>
                  </div>
                  <p
                    style={{
                      color: 'var(--color-text-primary)',
                      fontSize: '0.92rem',
                      marginBottom: '1.1rem'
                    }}
                  >
                    “{item.quote}”
                  </p>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
                  <strong style={{ color: 'var(--color-text-primary)' }}>{item.role}</strong> ·{' '}
                  {item.org}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
