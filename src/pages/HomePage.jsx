import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  CLIENT_AUDIENCES,
  HOME_COMPLIANCE_CARDS,
  HOME_EXPERT_ARCHETYPES,
  HOME_FORMATS,
  TESTIMONIALS,
  VERIFIED_BENCHMARKS,
  WHY_CHOOSE_HASAMEX
} from '../content/siteData';
import { HeroShowcaseCard } from '../components/HeroShowcaseCard';
import { Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';

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
      {/* 1. HERO SECTION */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal blur y={20} className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Global Expert Intelligence Network
            </span>
            <h1>Expert Intelligence, Redefined</h1>
            <p className="lead" style={{ maxWidth: 580 }}>
              Hasamex connects global decision makers to trusted primary insight through expert
              calls, curated meetings, and custom reports — enabling sharper, faster decisions.
            </p>

            <div className="hero-ctas">
              <Link to="/clients" className="btn btn--gold">
                Become a Client
                <Icon name="arrow-right" size={17} />
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
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.22)'
                }}
              />
              <div>
                <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  Headquartered in Singapore · Distributed Execution Across India &amp; Global Corridors
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Custom-vetted primary insight for Investment Firms, Strategy Consultants &amp; Corporate Leaders
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={24}>
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

      {/* 3. SIX ENGAGEMENT FORMATS */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Engagement Formats
              </span>
              <h2 style={{ marginTop: '0.85rem', marginBottom: '0.6rem' }}>
                Designed Around How You Work
              </h2>
              <p className="lead">
                Whether you need a one-off call or a thematic knowledge sprint, Hasamex offers
                flexible formats to match your insight goals.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link to="/clients#formats" className="btn btn--glass">
                Explore our services
                <Icon name="arrow-right" size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid-3">
            {HOME_FORMATS.map((fmt, idx) => (
              <Reveal key={fmt.id} delay={idx * 0.05} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{fmt.number}</span>
                    <span className="card-tag">{fmt.tag}</span>
                  </div>
                  <div className="card-icon-box">
                    <Icon name={fmt.icon} size={20} />
                  </div>
                  <h3>{fmt.title}</h3>
                  <p>{fmt.shortDesc}</p>
                </div>
                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)'
                  }}
                >
                  <span>Full MNPI &amp; NDA coverage</span>
                  <Link
                    to="/clients#formats"
                    style={{
                      color: 'var(--gold)',
                      fontWeight: 500,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    Details <Icon name="arrow-right" size={14} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY THE WORLD'S SMARTEST TEAMS CHOOSE HASAMEX (Light Ivory Architectural Contrast) */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 660 }}>
              <span className="eyebrow eyebrow--light">
                <span className="eyebrow-dot" />
                The Hasamex Advantage
              </span>
              <h2 style={{ marginTop: '0.85rem', marginBottom: '0.6rem' }}>
                Why the World’s Smartest Teams Choose Hasamex
              </h2>
              <p className="lead lead--ink">
                We blend custom sourcing, precision vetting, premium service, and built-in
                compliance to elevate every project.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link to="/clients#service-model" className="btn btn--ink">
                Learn More About Our Service Framework
                <Icon name="arrow-right" size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid-4">
            {WHY_CHOOSE_HASAMEX.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.06} className="card card--ivory">
                <div>
                  <div className="card-top">
                    <span
                      className="card-index"
                      style={{ color: '#9a7000', fontWeight: 700 }}
                    >
                      {pillar.number}
                    </span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        padding: '0.22rem 0.6rem',
                        borderRadius: 'var(--radius-pill)',
                        background: 'rgba(13,14,16,0.06)',
                        color: 'var(--text-ink)'
                      }}
                    >
                      {pillar.highlight}
                    </span>
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE EXPERTS BEHIND THE INTELLIGENCE */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Hasamex Intelligence Network
              </span>
              <h2 style={{ marginTop: '0.85rem', marginBottom: '0.6rem' }}>
                The Experts Behind the Intelligence
              </h2>
              <p className="lead">
                A global network of operators, advisors, and specialists with real-world
                experience—producing high-quality primary insight.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <Link to="/experts" className="btn btn--gold">
                Learn About our Experts
                <Icon name="arrow-right" size={16} />
              </Link>
            </Reveal>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.15rem'
            }}
          >
            {HOME_EXPERT_ARCHETYPES.map((arch, idx) => (
              <Reveal key={arch.code} delay={idx * 0.05} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{arch.code}</span>
                    <Icon name="users" size={17} />
                  </div>
                  <h3 style={{ fontSize: '1.14rem' }}>{arch.title}</h3>
                  <p style={{ fontSize: '0.88rem' }}>{arch.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT AUDIENCES (Junior.ai-inspired Interactive Tab Matrix) */}
      <section className="section section--elevated">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Client Segments
            </span>
            <h2>Trusted by Decision-Makers Worldwide</h2>
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
              transition={{ duration: 0.25 }}
            >
              <div>
                <span className="card-index">{currentAudience.label}</span>
                <h3 style={{ fontSize: '1.65rem', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
                  {currentAudience.headline}
                </h3>
                <p className="lead" style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                  {currentAudience.homeDescription}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.65rem',
                    marginBottom: '1.85rem'
                  }}
                >
                  {currentAudience.workflows.map((wf) => (
                    <div
                      key={wf}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        fontSize: '0.92rem',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <span style={{ color: 'var(--gold)', display: 'inline-flex' }}>
                        <Icon name="check" size={16} />
                      </span>
                      <span>{wf}</span>
                    </div>
                  ))}
                </div>

                <Link to="/clients#enquiry-form" className="btn btn--gold">
                  Start a Project for {currentAudience.label}
                  <Icon name="arrow-right" size={16} />
                </Link>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem'
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--gold)',
                    marginBottom: '0.75rem'
                  }}
                >
                  Verified Practitioner Feedback
                </div>
                <blockquote
                  style={{
                    fontSize: '1.08rem',
                    lineHeight: 1.6,
                    color: 'var(--text-primary)',
                    marginBottom: '1.1rem',
                    fontStyle: 'normal'
                  }}
                >
                  “{currentAudience.quote.text}”
                </blockquote>
                <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                  — {currentAudience.quote.author}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 7. COMPLIANCE YOU CAN TRUST */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Institutional Governance
            </span>
            <h2>Compliance You Can Trust</h2>
            <p className="lead">
              From expert onboarding and NDAs to MNPI safeguards and full audit trails, Hasamex is
              built for regulated, institutional-grade research.
            </p>
          </Reveal>

          <div className="grid-3">
            {HOME_COMPLIANCE_CARDS.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.06} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{card.badge}</span>
                    <Icon name="shield" size={18} />
                  </div>
                  <h3>{card.title}</h3>
                  <p style={{ marginBottom: '1.5rem' }}>{card.description}</p>
                </div>
                <Link
                  to={card.path}
                  className="btn btn--glass btn--sm"
                  style={{ alignSelf: 'flex-start' }}
                >
                  {card.ctaLabel}
                  <Icon name="arrow-right" size={15} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VERIFIED TESTIMONIALS */}
      <section className="section section--elevated">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Verified Testimonials
              </span>
              <h2 style={{ marginTop: '0.85rem', marginBottom: '0.5rem' }}>
                Trusted by Clients. Respected by Experts.
              </h2>
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

          {/* Featured Spotlight Slider */}
          <div
            className="card"
            style={{
              padding: '2.25rem',
              marginBottom: '1.35rem',
              borderColor: 'var(--gold-border)',
              background:
                'linear-gradient(145deg, rgba(234, 177, 11, 0.07) 0%, rgba(20, 21, 24, 0.95) 100%)'
            }}
          >
            <div className="card-top">
              <span className="eyebrow">{TESTIMONIALS[activeTestimonial].category}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {activeTestimonial + 1} / {TESTIMONIALS.length}
              </span>
            </div>
            <blockquote
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
                fontWeight: 500,
                lineHeight: 1.45,
                color: 'var(--text-primary)',
                marginBottom: '1.25rem'
              }}
            >
              “{TESTIMONIALS[activeTestimonial].quote}”
            </blockquote>
            <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>
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
                    activeTestimonial === idx ? 'var(--gold)' : 'var(--border-subtle)'
                }}
              >
                <div>
                  <div className="card-top">
                    <span className="card-index">{item.category}</span>
                  </div>
                  <p
                    style={{
                      color: 'var(--text-primary)',
                      fontSize: '0.98rem',
                      marginBottom: '1.2rem'
                    }}
                  >
                    “{item.quote}”
                  </p>
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>{item.role}</strong> ·{' '}
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
