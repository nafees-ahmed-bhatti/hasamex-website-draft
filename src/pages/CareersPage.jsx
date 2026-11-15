import React from 'react';
import { BRAND, FORM_CONFIGS } from '../content/siteData';
import { Icon } from '../components/Icons';
import { IntakeForm } from '../components/IntakeForm';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

const CULTURE_PILLARS = [
  {
    number: '01',
    tag: 'Ownership',
    title: 'Real Responsibility From Day One',
    description:
      'We mentor you to become a trusted professional, giving you real ownership over high-stakes institutional research projects.'
  },
  {
    number: '02',
    tag: 'Global Exposure',
    title: 'Global Market Exposure',
    description:
      'Work directly with hedge funds, private equity firms, strategy consultancies, and senior C-suite operators across global markets.'
  },
  {
    number: '03',
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
        primaryLabel: 'Email careers@hasamex.com',
        primaryTo: '/contact-us',
        secondaryLabel: 'About Hasamex',
        secondaryTo: '/about-us'
      }}
    >
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal blur y={16}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Careers at Hasamex
            </span>
            <AnimatedHeading
              as="h1"
              text="Careers with Hasamex"
              style={{ marginTop: '0.85rem', marginBottom: '0.9rem' }}
            />
            <p className="lead" style={{ maxWidth: 640 }}>
              If you’re curious, driven, and ready to do meaningful work—let’s talk.
            </p>
            <div className="hero-ctas">
              <a href="#apply-form" className="btn btn--primary">
                Apply Now
                <Icon name="arrow-right" size={15} />
              </a>
              <a href={`mailto:${BRAND.emails.careers}`} className="btn btn--glass">
                <Icon name="mail" size={15} />
                {BRAND.emails.careers}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GROW WITH US */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '2.5rem', marginBottom: '2.75rem' }}>
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Why Join Us
              </span>
              <AnimatedHeading
                as="h2"
                text="Grow with Us"
                style={{ marginTop: '0.65rem', marginBottom: '0.8rem' }}
              />
              <p className="lead" style={{ color: 'var(--color-text-primary)', fontWeight: 500, marginBottom: '0.85rem' }}>
                We’re always looking for thoughtful, ambitious people to build Hasamex with us.
                Smart, kind people move fast here. Reach out and tell us your story.
              </p>
              <p className="lead" style={{ marginBottom: '0.85rem' }}>
                To apply, send us your CV through the form below or email us at:{' '}
                <a
                  href={`mailto:${BRAND.emails.careers}`}
                  style={{ color: 'var(--hub-navy)', fontWeight: 700, textDecoration: 'underline' }}
                >
                  {BRAND.emails.careers}
                </a>
              </p>
              <p className="lead">
                We review every application personally. If there’s a fit, we’ll be in touch.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="card card--navy" style={{ padding: '1.9rem' }}>
              <div className="card-top">
                <span className="card-index">OPEN ROLES STATUS</span>
                <span className="card-tag">Singapore &amp; India</span>
              </div>
              <h3 style={{ color: '#ffffff' }}>Rolling Talent Intake</h3>
              <p style={{ marginBottom: '1.15rem', color: '#cbd5e1' }}>
                Hasamex accepts rolling applications across Client Solutions, Expert Sourcing,
                Research Associates, and Operations in Singapore and India. No individual role
                requisitions are published on the current public site—submit your CV below to be
                considered by our leadership team.
              </p>
              <a href="#apply-form" className="btn btn--primary btn--sm" style={{ alignSelf: 'flex-start' }}>
                Proceed to Application Form ↓
              </a>
            </Reveal>
          </div>

          <div className="grid-3">
            {CULTURE_PILLARS.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.045} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{item.number}</span>
                    <span className="card-tag">{item.tag}</span>
                  </div>
                  <div className="card-icon-box">
                    <Icon name="users" size={18} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="card-footer-row">
                  <span>Singapore &amp; India Teams</span>
                  <Icon name="check" size={14} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply-form" className="section section--elevated">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <IntakeForm config={FORM_CONFIGS.careers} />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
