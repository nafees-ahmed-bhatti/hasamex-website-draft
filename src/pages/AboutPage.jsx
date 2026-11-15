import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT_VALUES, BRAND } from '../content/siteData';
import { HasamexEmblemVector, Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';

const STAKEHOLDER_CARDS = [
  {
    badge: '01 · For Clients',
    title: 'Clients',
    description:
      'We deliver expert insight with speed, precision, and discretion—so you can make sharper decisions, faster.',
    ctaLabel: 'Request an Expert',
    path: '/clients'
  },
  {
    badge: '02 · For Experts',
    title: 'Experts',
    description:
      'We respect your time, match you to relevant projects, and ensure you’re paid fairly and on time—every time.',
    ctaLabel: 'Sign Up Now',
    path: '/experts'
  },
  {
    badge: '03 · For Talent',
    title: 'Candidates / Employees',
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
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal blur y={18}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              About Hasamex
            </span>
            <h1 style={{ marginTop: '1.1rem', marginBottom: '1.15rem' }}>
              Built for Better Insight
            </h1>
            <p className="lead" style={{ maxWidth: 680 }}>
              Hasamex is a global expert network built to simplify how professionals access and
              share insight.
            </p>
            <div className="hero-ctas">
              <a href="#story" className="btn btn--gold">
                Learn More
                <Icon name="arrow-right" size={16} />
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
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Our Mandate
              </span>
              <h2 style={{ marginTop: '0.85rem', marginBottom: '1.1rem' }}>
                Connecting Global Decision-Makers With Trusted Primary Insight
              </h2>
              <p className="lead" style={{ marginBottom: '1.1rem', color: 'var(--text-primary)' }}>
                Hasamex connects investors, consultants, and strategy leaders with trusted experts
                through short consultations, transcripts, and roundtables—across sectors,
                geographies, and themes.
              </p>
              <p className="lead" style={{ marginBottom: '1.1rem' }}>
                Headquartered in Singapore, with a distributed team across India and beyond, we
                serve decision-makers who value precision, pace, and professionalism in every
                engagement.
              </p>
              <p className="lead">
                We lead with integrity, operate with speed, treat people with respect, move with
                momentum, and communicate with clarity.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="card" style={{ padding: '2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <HasamexEmblemVector size={58} />
                <div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Corporate Profile
                  </div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                    {BRAND.legalName}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    Singapore UEN: {BRAND.uen}
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  paddingTop: '1.15rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontSize: '0.9rem'
                }}
              >
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    Registered Headquarters
                  </div>
                  <div style={{ color: 'var(--text-primary)' }}>{BRAND.address}</div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    Operating Footprint
                  </div>
                  <div style={{ color: 'var(--text-primary)' }}>
                    Singapore HQ · Distributed Research &amp; Sourcing Hubs Across India
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                    Proprietary Network
                  </div>
                  <div style={{ color: 'var(--text-primary)' }}>
                    Hasamex Intelligence Network (HIN) — DM, EM &amp; FM Coverage
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OPERATING PRINCIPLES / VALUES */}
      <section className="section section--ivory">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow-dot" />
              Operating Principles
            </span>
            <h2>How We Operate Every Engagement</h2>
            <p className="lead lead--ink">
              We focus on what matters — quality, speed, trust, and compliance.
            </p>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.15rem'
            }}
          >
            {ABOUT_VALUES.map((val, idx) => (
              <Reveal key={val.title} delay={idx * 0.05} className="card card--ivory">
                <div>
                  <div className="card-top">
                    <span
                      className="card-index"
                      style={{ color: '#9a7000', fontWeight: 700 }}
                    >
                      {val.number}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>{val.title}</h3>
                  <p style={{ fontSize: '0.9rem' }}>{val.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HASAMEX — 3 STAKEHOLDER PILLARS */}
      <section className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Why Hasamex?
            </span>
            <h2>Built for Clients, Experts, and Ambitious Professionals</h2>
            <p className="lead">
              We focus on what matters — quality, speed, trust and compliance.
            </p>
          </Reveal>

          <div className="grid-3">
            {STAKEHOLDER_CARDS.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.06} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{card.badge}</span>
                  </div>
                  <h3>{card.title}</h3>
                  <p style={{ marginBottom: '1.5rem' }}>{card.description}</p>
                </div>
                <Link
                  to={card.path}
                  className="btn btn--gold btn--sm"
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

      {/* SPACE FOR FUTURE ADDITIONAL COMPANY CONTENT (Draft Expansion Module) */}
      <section className="section section--elevated">
        <div className="container">
          <div className="draft-banner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Icon name="alert" size={18} />
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
