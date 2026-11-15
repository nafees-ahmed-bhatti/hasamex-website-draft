import React from 'react';
import { BRAND, FORM_CONFIGS } from '../content/siteData';
import { Icon } from '../components/Icons';
import { IntakeForm } from '../components/IntakeForm';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';

const CULTURE_PILLARS = [
  {
    number: '01',
    title: 'Real Responsibility From Day One',
    description:
      'We mentor you to become a trusted professional, giving you real ownership over high-stakes institutional research projects.'
  },
  {
    number: '02',
    title: 'Global Market Exposure',
    description:
      'Work directly with hedge funds, private equity firms, strategy consultancies, and senior C-suite operators across global markets.'
  },
  {
    number: '03',
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
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal blur y={18}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Careers at Hasamex
            </span>
            <h1 style={{ marginTop: '1.1rem', marginBottom: '1.15rem' }}>
              Careers with Hasamex
            </h1>
            <p className="lead" style={{ maxWidth: 660 }}>
              If you’re curious, driven, and ready to do meaningful work—let’s talk.
            </p>
            <div className="hero-ctas">
              <a href="#apply-form" className="btn btn--gold">
                Apply Now
                <Icon name="arrow-right" size={16} />
              </a>
              <a href={`mailto:${BRAND.emails.careers}`} className="btn btn--glass">
                <Icon name="mail" size={16} />
                {BRAND.emails.careers}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GROW WITH US */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem', marginBottom: '3.5rem' }}>
            <Reveal>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Why Join Us
              </span>
              <h2 style={{ marginTop: '0.85rem', marginBottom: '1rem' }}>Grow with Us</h2>
              <p className="lead" style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>
                We’re always looking for thoughtful, ambitious people to build Hasamex with us.
                Smart, kind people move fast here. Reach out and tell us your story.
              </p>
              <p className="lead" style={{ marginBottom: '1rem' }}>
                To apply, send us your CV through the form below or email us at:{' '}
                <a
                  href={`mailto:${BRAND.emails.careers}`}
                  style={{ color: 'var(--gold)', textDecoration: 'underline' }}
                >
                  {BRAND.emails.careers}
                </a>
              </p>
              <p className="lead">
                We review every application personally. If there’s a fit, we’ll be in touch.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="card">
              <div className="card-top">
                <span className="card-index">OPEN ROLES STATUS</span>
                <span className="card-tag">Singapore &amp; India</span>
              </div>
              <h3>Rolling Talent Intake</h3>
              <p style={{ marginBottom: '1.25rem' }}>
                Hasamex accepts rolling applications across Client Solutions, Expert Sourcing,
                Research Associates, and Operations in Singapore and India. No individual role
                requisitions are published on the current public site—submit your CV below to be
                considered by our leadership team.
              </p>
              <a href="#apply-form" className="btn btn--glass btn--sm" style={{ alignSelf: 'flex-start' }}>
                Proceed to Application Form ↓
              </a>
            </Reveal>
          </div>

          <div className="grid-3">
            {CULTURE_PILLARS.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.05} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{item.number}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply-form" className="section section--elevated">
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal>
            <IntakeForm config={FORM_CONFIGS.careers} />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
