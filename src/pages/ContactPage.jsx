import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, FORM_CONFIGS } from '../content/siteData';
import { Icon } from '../components/Icons';
import { IntakeForm } from '../components/IntakeForm';
import { Layout } from '../components/Layout';
import { Reveal } from '../components/Reveal';

const DIRECT_CHANNELS = [
  {
    badge: 'General & Client Desk',
    title: 'Client & General Enquiries',
    email: BRAND.emails.general,
    description: 'Project briefs, institutional onboarding, custom transcripts, and general requests.'
  },
  {
    badge: 'Regulatory & Oversight',
    title: 'Compliance Desk',
    email: BRAND.emails.compliance,
    description: 'Pre-call screening questions, MNPI policy requests, and Code of Conduct inquiries.'
  },
  {
    badge: 'Talent & Recruiting',
    title: 'Careers at Hasamex',
    email: BRAND.emails.careers,
    description: 'Applications and talent enquiries across our Singapore and India teams.'
  },
  {
    badge: 'Data Protection',
    title: 'Privacy Officer',
    email: BRAND.emails.privacy,
    description: 'GDPR, UK GDPR, CPRA, PIPL, and personal data rights requests.'
  }
];

export function ContactPage() {
  return (
    <Layout showPreFooter={false}>
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal blur y={18}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Contact Hasamex
            </span>
            <h1 style={{ marginTop: '1.1rem', marginBottom: '1.15rem' }}>Contact Us</h1>
            <p className="lead" style={{ maxWidth: 650 }}>
              Share your details below and our team will be in touch within 24 hours.
            </p>
            <div className="hero-ctas">
              <a href="#contact-form" className="btn btn--gold">
                Submit Your Details
                <Icon name="arrow-right" size={16} />
              </a>
              <a href={`mailto:${BRAND.emails.general}`} className="btn btn--glass">
                <Icon name="mail" size={16} />
                {BRAND.emails.general}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT CHANNELS + FORM */}
      <section id="contact-form" className="section">
        <div className="container">
          <div className="grid-4" style={{ marginBottom: '3.25rem' }}>
            {DIRECT_CHANNELS.map((ch, idx) => (
              <Reveal key={ch.email} delay={idx * 0.05} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{ch.badge}</span>
                    <Icon name="mail" size={16} />
                  </div>
                  <h3 style={{ fontSize: '1.12rem' }}>{ch.title}</h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: '1.15rem' }}>{ch.description}</p>
                </div>
                <a
                  href={`mailto:${ch.email}`}
                  style={{
                    color: 'var(--gold)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    textDecoration: 'underline'
                  }}
                >
                  {ch.email}
                </a>
              </Reveal>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '2rem',
              alignItems: 'start'
            }}
          >
            <Reveal className="card" style={{ padding: '2.25rem' }}>
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Global Headquarters
                </span>
                <h3 style={{ fontSize: '1.45rem', marginTop: '0.9rem', marginBottom: '0.5rem' }}>
                  {BRAND.legalName}
                </h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  Registered in Singapore (UEN {BRAND.uen}) with distributed execution teams across
                  India and global corridors.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.9rem'
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold)', marginTop: 3 }}>
                      <Icon name="map-pin" size={18} />
                    </span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)', display: 'block' }}>
                        Singapore Registered Office
                      </strong>
                      <span style={{ color: 'var(--text-secondary)' }}>{BRAND.address}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold)', marginTop: 3 }}>
                      <Icon name="clock" size={18} />
                    </span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)', display: 'block' }}>
                        Response Commitment
                      </strong>
                      <span style={{ color: 'var(--text-secondary)' }}>
                        Within 24 hours for general enquiries · 2–12 hours for active client briefs
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold)', marginTop: 3 }}>
                      <Icon name="linkedin" size={18} />
                    </span>
                    <div>
                      <strong style={{ color: 'var(--text-primary)', display: 'block' }}>
                        Official LinkedIn
                      </strong>
                      <a
                        href={BRAND.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--gold)', textDecoration: 'underline' }}
                      >
                        linkedin.com/company/hasamex
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '1.75rem',
                    paddingTop: '1.25rem',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.65rem'
                  }}
                >
                  <Link to="/clients#enquiry-form" className="btn btn--glass btn--sm">
                    Client Brief Form →
                  </Link>
                  <Link to="/experts#register-form" className="btn btn--glass btn--sm">
                    Expert Registration →
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <IntakeForm config={FORM_CONFIGS.contact} />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
