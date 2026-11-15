import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_VALUES, BRAND } from '../content/siteData';
import { HasamexEmblemVector, Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

const STAKEHOLDER_CARDS = [
  {
    badge: '01 · For Clients',
    title: 'Clients',
    tag: 'Institutional Research',
    description:
      'We deliver expert insight with speed, precision, and discretion—so you can make sharper decisions, faster.',
    ctaLabel: 'Request an Expert',
    path: '/clients'
  },
  {
    badge: '02 · For Experts',
    title: 'Experts',
    tag: 'HIN Community',
    description:
      'We respect your time, match you to relevant projects, and ensure you’re paid fairly and on time—every time.',
    ctaLabel: 'Sign Up Now',
    path: '/experts'
  },
  {
    badge: '03 · For Talent',
    title: 'Candidates / Employees',
    tag: 'Singapore & India',
    description:
      'We mentor you to become a trusted professional, giving you real responsibility, global exposure, and a clear path to grow.',
    ctaLabel: 'Apply Now',
    path: '/careers'
  }
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
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal blur y={16}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              About Hasamex
            </span>
            <AnimatedHeading
              as="h1"
              text="Built for Better Insight"
              style={{ marginTop: '0.85rem', marginBottom: '0.9rem' }}
            />
            <p className="lead" style={{ maxWidth: 640 }}>
              Hasamex is a global expert network built to simplify how professionals access and
              share insight.
            </p>
            <div className="hero-ctas">
              <a href="#story" className="btn btn--primary">
                Learn More
                <Icon name="arrow-right" size={15} />
              </a>
              <Link to="/team" className="btn btn--glass">
                Leadership &amp; Team
              </Link>
              <Link to="/contact-us" className="btn btn--charcoal">
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPANY STORY & POSITIONING */}
      <section id="story" className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '2.5rem' }}>
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Our Mandate
              </span>
              <AnimatedHeading
                as="h2"
                text="Connecting Global Decision-Makers With Trusted Primary Insight"
                style={{ marginTop: '0.65rem', marginBottom: '0.85rem' }}
              />
              <p
                className="lead"
                style={{
                  marginBottom: '0.85rem',
                  color: 'var(--color-text-primary)',
                  fontWeight: 500
                }}
              >
                Hasamex connects investors, consultants, and strategy leaders with trusted experts
                through short consultations, transcripts, and roundtables—across sectors,
                geographies, and themes.
              </p>
              <p className="lead" style={{ marginBottom: '0.85rem' }}>
                Headquartered in Singapore, with a distributed team across India and beyond, we
                serve decision-makers who value precision, pace, and professionalism in every
                engagement.
              </p>
              <p className="lead">
                We lead with integrity, operate with speed, treat people with respect, move with
                momentum, and communicate with clarity.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="card card--navy" style={{ padding: '1.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.95rem', marginBottom: '1.25rem' }}>
                <HasamexEmblemVector size={50} />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#cbd5e1',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
                    }}
                  >
                    Corporate Profile
                  </div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 600, color: '#ffffff' }}>
                    {BRAND.legalName}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                    Singapore UEN: {BRAND.uen}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.85rem'
                }}
              >
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.74rem', marginBottom: 2 }}>
                    Registered Headquarters
                  </div>
                  <div style={{ color: '#f8fafc', fontWeight: 500 }}>{BRAND.address}</div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.74rem', marginBottom: 2 }}>
                    Operating Footprint
                  </div>
                  <div style={{ color: '#f8fafc', fontWeight: 500 }}>
                    Singapore HQ · Distributed Research &amp; Sourcing Hubs Across India
                  </div>
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.74rem', marginBottom: 2 }}>
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

      {/* OPERATING PRINCIPLES / VALUES (Balanced 5-Card Bento Grid: 3 Top + 2 Bottom, Zero Lonely Card!) */}
      <section className="section section--ivory">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Operating Principles
            </span>
            <AnimatedHeading as="h2" text="How We Operate Every Engagement" />
            <p className="lead">
              We focus on what matters — quality, speed, trust, and compliance.
            </p>
          </Reveal>

          <div className="grid-5-bento">
            {ABOUT_VALUES.map((val, idx) => (
              <Reveal key={val.title} delay={idx * 0.04} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">PRINCIPLE {val.number}</span>
                    <span className="card-tag">Core Standard</span>
                  </div>
                  <h3>{val.title}</h3>
                  <p>{val.description}</p>
                </div>
                <div className="card-footer-row">
                  <span>Hasamex Operating Charter</span>
                  <Icon name="check" size={14} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HASAMEX — 3 STAKEHOLDER PILLARS (Balanced 3x1 Grid) */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Why Hasamex?
            </span>
            <AnimatedHeading as="h2" text="Built for Clients, Experts, and Ambitious Professionals" />
            <p className="lead">
              We focus on what matters — quality, speed, trust and compliance.
            </p>
          </Reveal>

          <div className="grid-3">
            {STAKEHOLDER_CARDS.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.045} className="card">
                <div>
                  <div className="card-top">
                    <div className="card-top__left">
                      <span className="card-icon-box">
                        <Icon name="users" size={15} />
                      </span>
                      <span className="card-index">{card.badge}</span>
                    </div>
                    <span className="card-tag">{card.tag}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <div className="card-footer-row">
                  <span>Dedicated Support</span>
                  <Link to={card.path} className="card-cta-link">
                    {card.ctaLabel} <Icon name="arrow-right" size={13} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPACE FOR FUTURE ADDITIONAL COMPANY CONTENT (Balanced 2x1 Grid) */}
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
