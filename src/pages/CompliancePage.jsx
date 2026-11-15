import React from 'react';
import { Link } from 'react-router-dom';
import {
  BRAND,
  COMPLIANCE_SAFEGUARDS,
  HOME_COMPLIANCE_CARDS,
  TESTIMONIALS
} from '../content/siteData';
import { Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

export function CompliancePage() {
  const complianceQuotes = TESTIMONIALS.filter(
    (t) => t.id === 'pm-pe-sg' || t.id === 'consulting-global' || t.id === 'pe-singapore'
  );

  return (
    <Layout
      preFooterProps={{
        eyebrow: 'Compliance & Governance Desk',
        title: 'Have a Compliance-Related Question or Concern?',
        subtitle:
          'Reach out directly to compliance@hasamex.com. We review every inquiry with discretion and respond promptly.',
        primaryLabel: 'Email compliance@hasamex.com',
        primaryTo: '/contact-us',
        secondaryLabel: 'Read Code of Conduct',
        secondaryTo: '/code-of-conduct',
        tertiaryLabel: 'Expert T&Cs',
        tertiaryTo: '/terms'
      }}
    >
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal blur y={16}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Regulated Research Architecture
            </span>
            <AnimatedHeading
              as="h1"
              text="Investment Grade Compliance"
              style={{ marginTop: '0.85rem', marginBottom: '0.9rem' }}
            />
            <p className="lead" style={{ maxWidth: 640 }}>
              Industry-leading compliance framework that safeguards every interaction between
              clients and expert members.
            </p>
            <div className="hero-ctas">
              <a href="#safeguards" className="btn btn--primary">
                Explore 5-Checkpoint Safeguards
                <Icon name="arrow-right" size={15} />
              </a>
              <Link to="/terms" className="btn btn--glass">
                Learn About T&amp;Cs
              </Link>
              <Link to="/code-of-conduct" className="btn btn--charcoal">
                Code of Conduct
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FIVE SAFEGUARDS CHECKPOINT MATRIX */}
      <section id="safeguards" className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              One Engagement · Five Safeguards
            </span>
            <AnimatedHeading as="h2" text="How We Protect Clients & Experts" />
            <p className="lead">
              Our workflows are designed to protect every interaction—ensuring safety, integrity,
              and compliance from start to finish.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {COMPLIANCE_SAFEGUARDS.map((item, idx) => (
              <Reveal key={item.number} delay={idx * 0.04} className="card">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1.35rem',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        marginBottom: '0.6rem'
                      }}
                    >
                      <span className="card-index">CHECKPOINT {item.number}</span>
                      <span className="card-tag">{item.stage}</span>
                    </div>
                    <h3 style={{ fontSize: '1.16rem', marginBottom: '0.4rem' }}>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div
                    style={{
                      background: 'var(--bg-body)',
                      border: '1px solid var(--hasamex-border-light)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1rem 1.15rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--hub-navy)',
                        fontWeight: 700
                      }}
                    >
                      Mandatory Controls
                    </div>
                    {item.controls.map((ctrl) => (
                      <div
                        key={ctrl}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.84rem',
                          color: 'var(--color-text-primary)',
                          fontWeight: 500
                        }}
                      >
                        <span style={{ color: 'var(--hub-navy)', marginTop: 2 }}>
                          <Icon name="shield" size={14} />
                        </span>
                        <span>{ctrl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VERIFIED COMPLIANCE TESTIMONIALS (Balanced 3x1 Grid) */}
      <section className="section section--ivory">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Institutional Validation
            </span>
            <AnimatedHeading as="h2" text="Trusted by Decision-Makers Worldwide" />
            <p className="lead">See what firms are saying about Hasamex.</p>
          </Reveal>

          <div className="grid-3">
            {complianceQuotes.map((q, idx) => (
              <Reveal key={q.id} delay={idx * 0.045} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{q.category}</span>
                    <span className="card-tag">Verified Feedback</span>
                  </div>
                  <p
                    style={{
                      color: 'var(--color-text-primary)',
                      fontSize: '0.91rem',
                      marginBottom: '1rem',
                      fontWeight: 500
                    }}
                  >
                    “{q.quote}”
                  </p>
                </div>
                <div className="card-footer-row">
                  <span>
                    <strong style={{ color: 'var(--color-text-primary)' }}>{q.role}</strong> ·{' '}
                    {q.org}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE DOCUMENTS & DIRECT COMPLIANCE CHANNEL */}
      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            {HOME_COMPLIANCE_CARDS.map((card) => (
              <div key={card.title} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{card.badge}</span>
                    <span className="card-tag">Official Policy</span>
                  </div>
                  <div className="card-icon-box">
                    <Icon name="document" size={18} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
                <div className="card-footer-row">
                  <span>Binding Governance</span>
                  <Link to={card.path} className="card-cta-link">
                    {card.ctaLabel} <Icon name="arrow-right" size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <Reveal className="card card--navy" style={{ padding: '1.9rem 2rem' }}>
            <div style={{ maxWidth: 760 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Direct Compliance Oversight
              </span>
              <h3 style={{ fontSize: '1.3rem', marginTop: '0.7rem', marginBottom: '0.5rem', color: '#ffffff' }}>
                Have a compliance-related question or concern?
              </h3>
              <p style={{ marginBottom: '1.15rem', color: '#cbd5e1' }}>
                At Hasamex, compliance is built into everything we do. From expert onboarding and
                client confidentiality to MNPI safeguards and secure call handling, our program is
                designed to uphold the highest legal and ethical standards—globally. Powered by
                smart technology and guided by human oversight, we ensure every engagement is safe,
                transparent, and trustworthy.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.85rem'
                }}
              >
                <a href={`mailto:${BRAND.emails.compliance}`} className="btn btn--primary">
                  <Icon name="mail" size={15} />
                  Reach out: {BRAND.emails.compliance}
                </a>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                  We’ll review your inquiry with discretion and respond promptly.
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
