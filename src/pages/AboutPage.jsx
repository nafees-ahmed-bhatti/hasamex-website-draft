import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_VALUES, BRAND } from '../content/siteData';
import { HasamexEmblemVector, Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

const STAKEHOLDER_CARDS = [
  {
    num: '01',
    badge: 'For Clients',
    title: 'Clients',
    tag: 'Institutional Research',
    icon: 'briefcase',
    description:
      'We deliver expert insight with speed, precision, and discretion—so you can make sharper decisions, faster.',
    ctaLabel: 'Request an Expert',
    path: '/clients'
  },
  {
    num: '02',
    badge: 'For Experts',
    title: 'Experts',
    tag: 'HIN Community',
    icon: 'users',
    description:
      'We respect your time, match you to relevant projects, and ensure you’re paid fairly and on time—every time.',
    ctaLabel: 'Sign Up Now',
    path: '/experts'
  },
  {
    num: '03',
    badge: 'For Talent',
    title: 'Candidates / Employees',
    tag: 'Singapore & India',
    icon: 'compass',
    description:
      'We mentor you to become a trusted professional, giving you real responsibility, global exposure, and a clear path to grow.',
    ctaLabel: 'Apply Now',
    path: '/careers'
  }
];

const ABOUT_MARQUEE = [
  'Headquartered in Singapore (UEN 202526952W)',
  'Distributed Research & Sourcing Hubs Across India',
  '2–12 Hour Typical Expert Profile Delivery',
  'Zero-Tolerance MNPI & Institutional Audit Trails',
  '≤ 14-Day Guaranteed Expert Honorarium Settlement',
  'Developed · Emerging · Frontier Market Coverage'
];

export function AboutPage() {
  return (
    <Layout
      preFooterProps={{
        eyebrow: 'Get in Touch',
        title: 'Leave Your Contact Details and Our Team Will Be in Touch Within 24 Hours!',
        subtitle:
          'Connect with our Singapore headquarters or distributed research teams across India and beyond.',
        primaryLabel: "Let's Connect",
        primaryTo: '/contact-us',
        secondaryLabel: 'Meet Our Team',
        secondaryTo: '/team'
      }}
    >
      {/* 1. HERO — BALANCED 2-COLUMN INSTITUTIONAL SPLIT */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <Reveal blur y={14} className="hero-copy">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  About Hasamex
                </span>
                <AnimatedHeading
                  as="h1"
                  text="Built for Better Insight"
                  style={{ marginTop: '0.65rem', marginBottom: '0.65rem' }}
                />
                <p className="lead" style={{ maxWidth: '52ch', marginBottom: '1.25rem' }}>
                  Hasamex is a global expert network built to simplify how professionals access and
                  share insight across Developed, Emerging, and Frontier markets.
                </p>
                <div className="hero-ctas">
                  <a href="#story" className="btn btn--primary">
                    Our Mandate
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <Link to="/team" className="btn btn--glass">
                    Leadership &amp; Team
                  </Link>
                  <Link to="/contact-us" className="btn btn--charcoal">
                    Get in Touch
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
                  <strong>{BRAND.legalName} · Singapore HQ</strong>
                  <span>UEN {BRAND.uen} · {BRAND.address}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} y={14}>
              <div className="page-hero-panel">
                <div className="page-hero-panel__header">
                  <span className="showcase-live-pill">
                    <span className="live-dot" />
                    Corporate Footprint
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      color: '#86efac',
                      fontWeight: 600
                    }}
                  >
                    SINGAPORE · INDIA · GLOBAL
                  </span>
                </div>

                <div>
                  <div className="page-hero-panel__title">
                    Institutional Speed Meets Cross-Border Precision
                  </div>
                  <p className="page-hero-panel__sub">
                    Anchored in Singapore with distributed research and sourcing hubs across India,
                    Hasamex operates on institutional clocks without compromising compliance.
                  </p>
                </div>

                <div className="page-hero-panel__matrix">
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">2–12 Hr</span>
                    <span className="page-hero-panel__label">Typical Turnaround</span>
                    <span className="page-hero-panel__note">Handpicked per brief</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">5-Point</span>
                    <span className="page-hero-panel__label">MNPI Safeguards</span>
                    <span className="page-hero-panel__note">100% recorded calls</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">DM · EM · FM</span>
                    <span className="page-hero-panel__label">Global Coverage</span>
                    <span className="page-hero-panel__note">14+ active corridors</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">≤ 14 Days</span>
                    <span className="page-hero-panel__label">Expert Payouts</span>
                    <span className="page-hero-panel__note">Guaranteed settlement</span>
                  </div>
                </div>

                <div className="page-hero-panel__footer">
                  <span className="page-hero-panel__contact">
                    <Icon name="mail" size={14} />
                    <a href={`mailto:${BRAND.emails.general}`} className="email-plain-link">
                      {BRAND.emails.general}
                    </a>
                  </span>
                  <Link to="/contact-us" className="showcase-cta">
                    Connect With Us
                    <Icon name="arrow-right" size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 1B. CONTINUOUS CORPORATE CHARTER MARQUEE */}
      <div className="marquee-bar" aria-label="Hasamex Corporate Footprint">
        <div className="marquee-track">
          {[...ABOUT_MARQUEE, ...ABOUT_MARQUEE].map((item, idx) => (
            <div key={`${item}-${idx}`} className="marquee-item">
              <span className="marquee-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 2. COMPANY STORY & POSITIONING */}
      <section id="story" className="section">
        <div className="container">
          <div className="advantage-split" style={{ alignItems: 'center' }}>
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Our Mandate
              </span>
              <AnimatedHeading
                as="h2"
                text="Connecting Global Decision-Makers With Trusted Primary Insight"
                style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}
              />
              <p
                className="lead"
                style={{
                  marginBottom: '0.75rem',
                  color: 'var(--color-text-primary)',
                  fontWeight: 500
                }}
              >
                Hasamex connects investors, consultants, and strategy leaders with trusted experts
                through short consultations, transcripts, and roundtables—across sectors,
                geographies, and themes.
              </p>
              <p className="lead" style={{ marginBottom: '0.75rem' }}>
                Headquartered in Singapore, with a distributed team across India and beyond, we
                serve decision-makers who value precision, pace, and professionalism in every
                engagement.
              </p>
              <p className="lead">
                We lead with integrity, operate with speed, treat people with respect, move with
                momentum, and communicate with clarity.
              </p>
            </Reveal>

            <Reveal delay={0.06} className="card card--navy" style={{ padding: '1.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', marginBottom: '1rem' }}>
                <HasamexEmblemVector size={46} />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      color: '#86efac',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    Corporate Profile
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ffffff' }}>
                    {BRAND.legalName}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#94a3b8' }}>
                    Singapore UEN: {BRAND.uen}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.7rem',
                  paddingTop: '0.9rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.84rem'
                }}
              >
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.72rem', marginBottom: 2 }}>
                    Registered Headquarters
                  </div>
                  <div style={{ color: '#f8fafc', fontWeight: 500 }}>{BRAND.address}</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.72rem', marginBottom: 2 }}>
                    Operating Footprint
                  </div>
                  <div style={{ color: '#f8fafc', fontWeight: 500 }}>
                    Singapore HQ · Distributed Research &amp; Sourcing Hubs Across India
                  </div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.72rem', marginBottom: 2 }}>
                    Proprietary Network
                  </div>
                  <div style={{ color: '#f8fafc', fontWeight: 500 }}>
                    Hasamex Intelligence Network (HIN) — DM, EM &amp; FM Coverage
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. OPERATING PRINCIPLES (5-Card Bento Grid) */}
      <section className="section section--ivory">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Operating Principles
              </span>
              <AnimatedHeading
                as="h2"
                text="How We Operate Every Engagement"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                We focus on what matters — quality, speed, trust, and compliance.
              </p>
            </Reveal>
          </div>

          <div className="grid-5-bento">
            {ABOUT_VALUES.map((val, idx) => (
              <Reveal key={val.title} delay={idx * 0.04} className="card">
                <div>
                  <div className="card-top">
                    <div className="card-top__left">
                      <span className="card-icon-box">
                        <Icon name="check" size={14} />
                      </span>
                      <span className="card-index">PRINCIPLE {val.number}</span>
                    </div>
                    <span className="card-tag">Core Standard</span>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </div>
                <div className="card-footer-row">
                  <span>Hasamex Operating Charter</span>
                  <Icon name="shield" size={14} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY HASAMEX — 3 STAKEHOLDER PILLARS (Stays 3 Columns on Desktop & Tablet, Zero Orphan) */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 660 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Why Hasamex?
              </span>
              <AnimatedHeading
                as="h2"
                text="Built for Clients, Experts, and Ambitious Professionals"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                We focus on what matters — quality, speed, trust and compliance.
              </p>
            </Reveal>
          </div>

          <div className="governance-pillars-row">
            {STAKEHOLDER_CARDS.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.04} className="governance-pillar-cell">
                <div>
                  <div className="governance-pillar-cell__top">
                    <div className="card-top__left">
                      <span className="card-icon-box">
                        <Icon name={card.icon} size={15} />
                      </span>
                      <span className="card-index">{card.num}</span>
                    </div>
                    <span className="card-tag">{card.tag}</span>
                  </div>
                  <h3 className="governance-pillar-cell__title">{card.title}</h3>
                  <p className="governance-pillar-cell__desc">{card.description}</p>
                </div>
                <div className="governance-pillar-cell__footer">
                  <span>{card.badge}</span>
                  <Link to={card.path} className="card-cta-link">
                    {card.ctaLabel} <Icon name="arrow-right" size={13} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESERVED MODULES FOR LEADERSHIP EXPANSION */}
      <section className="section section--elevated">
        <div className="container">
          <div className="draft-banner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Icon name="alert" size={17} />
              <span>
                <strong>Reserved Section for Leadership Expansion:</strong> The modules below are
                structured placeholders ready for founding story milestones, office photography, or
                regional hub spotlights once confirmed by leadership.
              </span>
            </div>
            <Link to="/team" className="btn btn--glass btn--sm">
              View Team Page Draft →
            </Link>
          </div>

          <div className="grid-2">
            <div className="card" style={{ borderStyle: 'dashed' }}>
              <div>
                <div className="card-top">
                  <span className="card-index">DRAFT MODULE · 01</span>
                  <span className="card-tag">Awaiting Confirmation</span>
                </div>
                <h3>Founding Story &amp; Milestones Timeline</h3>
                <p>
                  [Placeholder reserved for official founding narrative, key institutional milestones
                  since incorporation of Hasamex Pte Ltd in Singapore, and expansion of the India
                  research hub.]
                </p>
              </div>
            </div>

            <div className="card" style={{ borderStyle: 'dashed' }}>
              <div>
                <div className="card-top">
                  <span className="card-index">DRAFT MODULE · 02</span>
                  <span className="card-tag">Awaiting Confirmation</span>
                </div>
                <h3>Global Offices &amp; Regional Presence</h3>
                <p>
                  [Placeholder reserved for official office imagery and regional desk details for
                  Singapore (160 Robinson Road, #14-04, SBF Center) and India operations.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
