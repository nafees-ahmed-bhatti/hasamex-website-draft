import React from 'react';
import { BRAND, FORM_CONFIGS } from '../content/siteData';
import { Icon } from '../components/Icons';
import { IntakeForm } from '../components/IntakeForm';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

const CULTURE_PILLARS = [
  {
    number: '01',
    icon: 'briefcase',
    tag: 'Ownership',
    title: 'Real Responsibility From Day One',
    description:
      'We mentor you to become a trusted professional, giving you real ownership over high-stakes institutional research projects.'
  },
  {
    number: '02',
    icon: 'globe',
    tag: 'Global Exposure',
    title: 'Global Market Exposure',
    description:
      'Work directly with hedge funds, private equity firms, strategy consultancies, and senior C-suite operators across global markets.'
  },
  {
    number: '03',
    icon: 'sparkles',
    tag: 'Momentum',
    title: 'High-Momentum Culture',
    description:
      'Smart, kind people move fast here. We lead with integrity, operate with speed, and communicate with clarity.'
  }
];

export function CareersPage() {
  return (
    <Layout
      preFooterProps={{
        eyebrow: 'Careers at Hasamex',
        title: 'Prefer to Reach Out Directly by Email?',
        subtitle:
          'Send your CV and a short note telling us your story at careers@hasamex.com. We review every application personally.',
        primaryLabel: 'Contact Talent Desk',
        primaryTo: '/contact-us',
        secondaryLabel: 'About Hasamex',
        secondaryTo: '/about-us'
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
                  Careers at Hasamex
                </span>
                <AnimatedHeading
                  as="h1"
                  text="Careers with Hasamex"
                  style={{ marginTop: '0.65rem', marginBottom: '0.65rem' }}
                />
                <p className="lead" style={{ maxWidth: '52ch', marginBottom: '1.25rem' }}>
                  If you’re curious, driven, and ready to do meaningful work across global research
                  and expert intelligence—let’s talk.
                </p>
                <div className="hero-ctas">
                  <a href="#apply-form" className="btn btn--primary">
                    Apply Now
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="#culture" className="btn btn--glass">
                    Why Join Us
                  </a>
                  <a
                    href={`mailto:${BRAND.emails.careers}`}
                    className="email-plain-link"
                    style={{ marginLeft: '0.35rem' }}
                  >
                    <Icon name="mail" size={15} />
                    {BRAND.emails.careers}
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
                  <strong>Rolling Talent Intake · Singapore &amp; India</strong>
                  <span>Every CV reviewed personally by leadership</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} y={14}>
              <div className="page-hero-panel">
                <div className="page-hero-panel__header">
                  <span className="showcase-live-pill">
                    <span className="live-dot" />
                    Talent Intake Status
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      color: '#86efac',
                      fontWeight: 600
                    }}
                  >
                    SINGAPORE · INDIA
                  </span>
                </div>

                <div>
                  <div className="page-hero-panel__title">
                    Rolling Applications Across Core Functional Desks
                  </div>
                  <p className="page-hero-panel__sub">
                    No individual role requisitions are published on the public site—submit your CV
                    below to be considered across our active teams.
                  </p>
                </div>

                <div className="page-hero-panel__matrix">
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">TRACK 01</span>
                    <span className="page-hero-panel__label">Client Solutions</span>
                    <span className="page-hero-panel__note">Investor &amp; consulting briefs</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">TRACK 02</span>
                    <span className="page-hero-panel__label">Expert Sourcing</span>
                    <span className="page-hero-panel__note">Custom HIN recruitment</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">TRACK 03</span>
                    <span className="page-hero-panel__label">Research Associates</span>
                    <span className="page-hero-panel__note">Sector &amp; value-chain mapping</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">TRACK 04</span>
                    <span className="page-hero-panel__label">Compliance &amp; Ops</span>
                    <span className="page-hero-panel__note">MNPI &amp; settlement ops</span>
                  </div>
                </div>

                <div className="page-hero-panel__footer">
                  <span className="page-hero-panel__contact">
                    <Icon name="mail" size={14} />
                    <a href={`mailto:${BRAND.emails.careers}`} className="email-plain-link">
                      {BRAND.emails.careers}
                    </a>
                  </span>
                  <a href="#apply-form" className="showcase-cta">
                    Submit Application
                    <Icon name="arrow-right" size={13} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. GROW WITH US & CULTURE PILLARS (3-Column Hairline Matrix on Desktop & Tablet) */}
      <section id="culture" className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 660 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Why Join Us
              </span>
              <AnimatedHeading
                as="h2"
                text="Grow with Us"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                We’re always looking for thoughtful, ambitious people to build Hasamex with us.
                Smart, kind people move fast here—and we review every application personally.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <a href="#apply-form" className="btn btn--primary">
                Proceed to Form
                <Icon name="arrow-right" size={15} />
              </a>
            </Reveal>
          </div>

          <div className="governance-pillars-row">
            {CULTURE_PILLARS.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.04} className="governance-pillar-cell">
                <div>
                  <div className="governance-pillar-cell__top">
                    <div className="card-top__left">
                      <span className="card-icon-box">
                        <Icon name={item.icon} size={15} />
                      </span>
                      <span className="card-index">{item.number}</span>
                    </div>
                    <span className="card-tag">{item.tag}</span>
                  </div>
                  <h3 className="governance-pillar-cell__title">{item.title}</h3>
                  <p className="governance-pillar-cell__desc">{item.description}</p>
                </div>
                <div className="governance-pillar-cell__footer">
                  <span>Singapore &amp; India Teams</span>
                  <Icon name="check" size={14} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. APPLICATION FORM (Institutional Split Intake Layout) */}
      <section id="apply-form" className="section section--elevated">
        <div className="container">
          <div className="intake-split-layout">
            <Reveal className="intake-desk-card">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Talent &amp; Recruiting Desk
                </span>
                <h2 className="intake-desk-card__title">
                  Tell Us Your Story &amp; Build With Hasamex
                </h2>
                <p className="intake-desk-card__lead">
                  Whether you are an early-career research associate or an experienced expert
                  network operator, we value ownership, intellectual curiosity, and speed.
                </p>

                <div className="intake-desk-card__steps">
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">01</span>
                    <div>
                      <strong>Submit Your Profile &amp; CV</strong>
                      <span>Share your LinkedIn, preferred location, and core interests.</span>
                    </div>
                  </div>
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">02</span>
                    <div>
                      <strong>Direct Leadership Review</strong>
                      <span>Every application is read personally by our Singapore &amp; India leads.</span>
                    </div>
                  </div>
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">03</span>
                    <div>
                      <strong>Structured Conversations</strong>
                      <span>Clear, transparent interview rounds focused on real-world judgment.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intake-desk-card__footer">
                <div className="intake-desk-card__office">
                  <span className="intake-desk-card__label">DIRECT CAREERS EMAIL</span>
                  <a href={`mailto:${BRAND.emails.careers}`} className="email-plain-link">
                    <Icon name="mail" size={14} />
                    {BRAND.emails.careers}
                  </a>
                  <span>{BRAND.legalName} · {BRAND.address}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <IntakeForm config={FORM_CONFIGS.careers} />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
