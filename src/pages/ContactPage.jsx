import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, FORM_CONFIGS } from '../content/siteData';
import { Icon } from '../components/Icons';
import { IntakeForm } from '../components/IntakeForm';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

const DIRECT_CHANNELS = [
  {
    num: '01',
    tag: 'Client Desk',
    title: 'Client & General Enquiries',
    email: BRAND.emails.general,
    description: 'Project briefs, institutional onboarding, custom transcripts, and general requests.'
  },
  {
    num: '02',
    tag: 'Oversight',
    title: 'Compliance Desk',
    email: BRAND.emails.compliance,
    description: 'Pre-call screening questions, MNPI policy requests, and Code of Conduct inquiries.'
  },
  {
    num: '03',
    tag: 'Talent',
    title: 'Careers at Hasamex',
    email: BRAND.emails.careers,
    description: 'Applications and talent enquiries across our Singapore and India teams.'
  },
  {
    num: '04',
    tag: 'Privacy',
    title: 'Privacy Officer',
    email: BRAND.emails.privacy,
    description: 'GDPR, UK GDPR, CPRA, PIPL, and personal data rights requests.'
  }
];

export function ContactPage() {
  return (
    <Layout showPreFooter={false}>
      {/* 1. HERO — BALANCED 2-COLUMN INSTITUTIONAL SPLIT */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <Reveal blur y={14} className="hero-copy">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Contact Hasamex
                </span>
                <AnimatedHeading
                  as="h1"
                  text="Contact Us"
                  style={{ marginTop: '0.65rem', marginBottom: '0.65rem' }}
                />
                <p className="lead" style={{ maxWidth: '52ch', marginBottom: '1.25rem' }}>
                  Share your details below and our Singapore and India desks will respond within 24
                  hours—or within 2–12 hours for active client research briefs.
                </p>
                <div className="hero-ctas">
                  <a href="#contact-form" className="btn btn--primary">
                    Submit Your Details
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <Link to="/clients#enquiry-form" className="btn btn--glass">
                    Client Brief Form
                  </Link>
                  <a
                    href={`mailto:${BRAND.emails.general}`}
                    className="email-plain-link"
                    style={{ marginLeft: '0.35rem' }}
                  >
                    <Icon name="mail" size={15} />
                    {BRAND.emails.general}
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
                  <strong>{BRAND.legalName} (UEN {BRAND.uen})</strong>
                  <span>{BRAND.address}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} y={14}>
              <div className="page-hero-panel">
                <div className="page-hero-panel__header">
                  <span className="showcase-live-pill">
                    <span className="live-dot" />
                    Direct Response SLAs
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
                    Dedicated Desks for Clients, Experts &amp; Governance
                  </div>
                  <p className="page-hero-panel__sub">
                    Route your inquiry directly to the right Hasamex desk for immediate ownership.
                  </p>
                </div>

                <div className="page-hero-panel__matrix">
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">2–12 Hr</span>
                    <span className="page-hero-panel__label">Client Briefs</span>
                    <span className="page-hero-panel__note">Vetted profile turnaround</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">&lt; 24 Hr</span>
                    <span className="page-hero-panel__label">General Desk</span>
                    <span className="page-hero-panel__note">Enquiries &amp; partnerships</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">HQ · SG</span>
                    <span className="page-hero-panel__label">Robinson Road</span>
                    <span className="page-hero-panel__note">#14-04 SBF Center</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">GLOBAL</span>
                    <span className="page-hero-panel__label">DM · EM · FM</span>
                    <span className="page-hero-panel__note">Cross-timezone support</span>
                  </div>
                </div>

                <div className="page-hero-panel__footer">
                  <span className="page-hero-panel__contact">
                    <Icon name="mail" size={14} />
                    <a href={`mailto:${BRAND.emails.compliance}`} className="email-plain-link">
                      {BRAND.emails.compliance}
                    </a>
                  </span>
                  <a href="#contact-form" className="showcase-cta">
                    Open Form
                    <Icon name="arrow-right" size={13} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. DIRECT CHANNELS (4-Column Architectural Strip) + FORM */}
      <section className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Direct Desk Directory
              </span>
              <AnimatedHeading
                as="h2"
                text="Reach the Right Desk Directly"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                Four dedicated institutional email channels for mandates, compliance, careers, and
                privacy governance.
              </p>
            </Reveal>
          </div>

          <div className="service-standard-strip" style={{ marginBottom: '1.75rem' }}>
            {DIRECT_CHANNELS.map((ch, idx) => (
              <Reveal key={ch.email} delay={idx * 0.04} className="service-standard-cell">
                <div>
                  <div className="service-standard-cell__top">
                    <div className="service-standard-cell__badge-group">
                      <span className="card-icon-box">
                        <Icon name="mail" size={15} />
                      </span>
                      <span className="card-index">{ch.num}</span>
                    </div>
                    <span className="card-tag">{ch.tag}</span>
                  </div>
                  <h3 className="service-standard-cell__title">{ch.title}</h3>
                  <p className="service-standard-cell__desc">{ch.description}</p>
                </div>
                <div className="service-standard-cell__footer">
                  <a href={`mailto:${ch.email}`} className="email-plain-link">
                    {ch.email}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <div id="contact-form" className="intake-split-layout">
            <Reveal className="intake-desk-card">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Global Headquarters
                </span>
                <h2 className="intake-desk-card__title">{BRAND.legalName}</h2>
                <p className="intake-desk-card__lead">
                  Registered in Singapore (UEN {BRAND.uen}) with distributed execution teams across
                  India and global corridors.
                </p>

                <div className="intake-desk-card__steps">
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">HQ</span>
                    <div>
                      <strong>Singapore Registered Office</strong>
                      <span>{BRAND.address}</span>
                    </div>
                  </div>
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">SLA</span>
                    <div>
                      <strong>Response Commitment</strong>
                      <span>
                        Within 24 hours for general enquiries · 2–12 hours for active client briefs
                      </span>
                    </div>
                  </div>
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">IN</span>
                    <div>
                      <strong>Official LinkedIn</strong>
                      <a
                        href={BRAND.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#86efac', textDecoration: 'underline', fontWeight: 600 }}
                      >
                        linkedin.com/company/hasamex
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intake-desk-card__footer">
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
                  <Link to="/clients#enquiry-form" className="btn btn--primary btn--sm">
                    Client Brief Form →
                  </Link>
                  <Link to="/experts#register-form" className="btn btn--glass btn--sm">
                    Expert Registration →
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <IntakeForm config={FORM_CONFIGS.contact} />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
