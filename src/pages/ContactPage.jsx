import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND, FORM_CONFIGS } from '../content/siteData';
import { Icon } from '../components/Icons';
import { IntakeForm } from '../components/IntakeForm';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

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
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal blur y={16}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Contact Hasamex
            </span>
            <AnimatedHeading
              as="h1"
              text="Contact Us"
              style={{ marginTop: '0.9rem', marginBottom: '1rem' }}
            />
            <p className="lead" style={{ maxWidth: 620 }}>
              Share your details below and our team will be in touch within 24 hours.
            </p>
            <div className="hero-ctas">
              <a href="#contact-form" className="btn btn--primary">
                Submit Your Details
                <Icon name="arrow-right" size={15} />
              </a>
              <a href={`mailto:${BRAND.emails.general}`} className="btn btn--glass">
                <Icon name="mail" size={15} />
                {BRAND.emails.general}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DIRECT CHANNELS + FORM */}
      <section id="contact-form" className="section">
        <div className="container">
          <div className="grid-4" style={{ marginBottom: '2.75rem' }}>
            {DIRECT_CHANNELS.map((ch, idx) => (
              <Reveal key={ch.email} delay={idx * 0.045} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{ch.badge}</span>
                    <span style={{ color: 'var(--color-accent)' }}>
                      <Icon name="mail" size={16} />
                    </span>
                  </div>
                  <h3>{ch.title}</h3>
                  <p style={{ marginBottom: '1.1rem' }}>{ch.description}</p>
                </div>
                <a
                  href={`mailto:${ch.email}`}
                  style={{
                    color: 'var(--color-accent)',
                    fontWeight: 600,
                    fontSize: '0.84rem',
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
              gap: '1.75rem',
              alignItems: 'start'
            }}
          >
            <Reveal className="card card--navy" style={{ padding: '2rem' }}>
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Global Headquarters
                </span>
                <h3 style={{ fontSize: '1.32rem', marginTop: '0.8rem', marginBottom: '0.45rem', color: '#ffffff' }}>
                  {BRAND.legalName}
                </h3>
                <p style={{ marginBottom: '1.35rem', color: '#cbd5e1' }}>
                  Registered in Singapore (UEN {BRAND.uen}) with distributed execution teams across
                  India and global corridors.
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.95rem',
                    paddingTop: '1.15rem',
                    borderTop: '1px solid #1e293b',
                    fontSize: '0.86rem'
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#22d3ee', marginTop: 2 }}>
                      <Icon name="map-pin" size={17} />
                    </span>
                    <div>
                      <strong style={{ color: '#ffffff', display: 'block' }}>
                        Singapore Registered Office
                      </strong>
                      <span style={{ color: '#94a3b8' }}>{BRAND.address}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#22d3ee', marginTop: 2 }}>
                      <Icon name="clock" size={17} />
                    </span>
                    <div>
                      <strong style={{ color: '#ffffff', display: 'block' }}>
                        Response Commitment
                      </strong>
                      <span style={{ color: '#94a3b8' }}>
                        Within 24 hours for general enquiries · 2–12 hours for active client briefs
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.7rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#22d3ee', marginTop: 2 }}>
                      <Icon name="linkedin" size={17} />
                    </span>
                    <div>
                      <strong style={{ color: '#ffffff', display: 'block' }}>
                        Official LinkedIn
                      </strong>
                      <a
                        href={BRAND.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#22d3ee', textDecoration: 'underline' }}
                      >
                        linkedin.com/company/hasamex
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: '1.5rem',
                    paddingTop: '1.15rem',
                    borderTop: '1px solid #1e293b',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem'
                  }}
                >
                  <Link to="/clients#enquiry-form" className="btn btn--primary btn--sm">
                    Client Brief Form →
                  </Link>
                  <Link to="/experts#register-form" className="btn btn--glass btn--sm" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', borderColor: 'rgba(255,255,255,0.18)' }}>
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
