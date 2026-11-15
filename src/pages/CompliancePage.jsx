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
import { Reveal } from '../components/Reveal';

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
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal blur y={18}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Regulated Research Architecture
            </span>
            <h1 style={{ marginTop: '1.1rem', marginBottom: '1.15rem' }}>
              Investment Grade Compliance
            </h1>
            <p className="lead" style={{ maxWidth: 680 }}>
              Industry-leading compliance framework that safeguards every interaction between
              clients and expert members.
            </p>
            <div className="hero-ctas">
              <a href="#safeguards" className="btn btn--gold">
                Explore 5-Checkpoint Safeguards
                <Icon name="arrow-right" size={16} />
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

      {/* FIVE SAFEGUARDS CHECKPOINT MATRIX (Junior.ai Compliance Checkpoint Inspiration) */}
      <section id="safeguards" className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              One Engagement · Five Safeguards
            </span>
            <h2>How We Protect Clients &amp; Experts</h2>
            <p className="lead">
              Our workflows are designed to protect every interaction—ensuring safety, integrity,
              and compliance from start to finish.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {COMPLIANCE_SAFEGUARDS.map((item, idx) => (
              <Reveal key={item.number} delay={idx * 0.05} className="card">
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1.5rem',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.65rem'
                      }}
                    >
                      <span
                        style={{
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          color: 'var(--gold)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '8px',
                          background: 'var(--gold-dim)',
                          border: '1px solid var(--gold-border)'
                        }}
                      >
                        {item.number}
                      </span>
                      <span className="card-tag">{item.stage}</span>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.15rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.6rem'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.74rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--gold)'
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
                          gap: '0.55rem',
                          fontSize: '0.88rem',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <span style={{ color: 'var(--gold)', marginTop: 2 }}>
                          <Icon name="shield" size={15} />
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

      {/* VERIFIED COMPLIANCE TESTIMONIALS */}
      <section className="section section--ivory">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow-dot" />
              Institutional Validation
            </span>
            <h2>Trusted by Decision-Makers Worldwide</h2>
            <p className="lead lead--ink">See what firms are saying about Hasamex.</p>
          </Reveal>

          <div className="grid-3">
            {complianceQuotes.map((q, idx) => (
              <Reveal key={q.id} delay={idx * 0.06} className="card card--ivory">
                <div>
                  <div className="card-top">
                    <span
                      className="card-index"
                      style={{ color: '#9a7000', fontWeight: 700 }}
                    >
                      {q.category}
                    </span>
                    <Icon name="shield" size={17} />
                  </div>
                  <p
                    style={{
                      color: 'var(--text-ink)',
                      fontSize: '0.98rem',
                      marginBottom: '1.25rem'
                    }}
                  >
                    “{q.quote}”
                  </p>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-ink-secondary)' }}>
                  <strong style={{ color: 'var(--text-ink)' }}>{q.role}</strong> · {q.org}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE DOCUMENTS & DIRECT COMPLIANCE CHANNEL */}
      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
            {HOME_COMPLIANCE_CARDS.map((card) => (
              <div key={card.title} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{card.badge}</span>
                    <Icon name="document" size={18} />
                  </div>
                  <h3>{card.title}</h3>
                  <p style={{ marginBottom: '1.25rem' }}>{card.description}</p>
                </div>
                <Link
                  to={card.path}
                  className="btn btn--glass btn--sm"
                  style={{ alignSelf: 'flex-start' }}
                >
                  {card.ctaLabel}
                  <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            ))}
          </div>

          <Reveal className="card" style={{ borderColor: 'var(--gold-border)', padding: '2.25rem' }}>
            <div style={{ maxWidth: 780 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Direct Compliance Oversight
              </span>
              <h3 style={{ fontSize: '1.55rem', marginTop: '0.85rem', marginBottom: '0.65rem' }}>
                Have a compliance-related question or concern?
              </h3>
              <p style={{ marginBottom: '1.15rem' }}>
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
                  gap: '1rem'
                }}
              >
                <a href={`mailto:${BRAND.emails.compliance}`} className="btn btn--gold">
                  <Icon name="mail" size={16} />
                  Reach out: {BRAND.emails.compliance}
                </a>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
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
