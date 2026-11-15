import React from 'react';
import { Link } from 'react-router-dom';
import {
  CLIENT_AUDIENCES,
  CLIENTS_SERVICE_MODEL,
  FORM_CONFIGS,
  HOME_FORMATS
} from '../content/siteData';
import { Icon } from '../components/Icons';
import { IntakeForm } from '../components/IntakeForm';
import { Layout } from '../components/Layout';
import { MarketCoverageMap } from '../components/MarketCoverageMap';
import { Reveal } from '../components/Reveal';

export function ClientsPage() {
  return (
    <Layout
      preFooterProps={{
        eyebrow: 'For Institutional Clients',
        title: 'Ready to Accelerate Your Next Research Mandate?',
        subtitle:
          'Submit a project brief above or reach out directly to our Singapore and India client solutions desk.',
        primaryLabel: 'Start a Project',
        primaryTo: '/clients#enquiry-form',
        secondaryLabel: 'Explore Compliance',
        secondaryTo: '/compliance'
      }}
    >
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal blur y={18}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Client Services
            </span>
            <h1 style={{ marginTop: '1.1rem', marginBottom: '1.15rem' }}>
              The New Standard in Expert Intelligence
            </h1>
            <p className="lead" style={{ maxWidth: 680 }}>
              Fast, compliant, and high-quality expert insight — delivered with white glove
              service.
            </p>
            <div className="hero-ctas">
              <a href="#enquiry-form" className="btn btn--gold">
                Start a Project
                <Icon name="arrow-right" size={16} />
              </a>
              <a href="#formats" className="btn btn--glass">
                Explore our Services
              </a>
              <a href="#markets" className="btn btn--charcoal">
                Global Market Coverage
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE MODEL */}
      <section id="service-model" className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Service Architecture
            </span>
            <h2>A Service Model Designed for Excellence</h2>
            <p className="lead">
              From intake to delivery, every step is structured, premium, and built around your
              workflow.
            </p>
          </Reveal>

          <div className="grid-4">
            {CLIENTS_SERVICE_MODEL.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.05} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{item.number}</span>
                    <Icon name="shield" size={17} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT METHODS */}
      <section id="formats" className="section section--ivory">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow eyebrow--light">
              <span className="eyebrow-dot" />
              Engagement Methods
            </span>
            <h2>Multiple Formats. One Goal: Better Insight.</h2>
            <p className="lead lead--ink">
              Tailored primary research formats designed for institutional diligence, thematic
              sprints, and strategic decision-making.
            </p>
          </Reveal>

          <div className="grid-3">
            {HOME_FORMATS.map((fmt, idx) => (
              <Reveal key={fmt.id} delay={idx * 0.05} className="card card--ivory">
                <div>
                  <div className="card-top">
                    <span
                      className="card-index"
                      style={{ color: '#9a7000', fontWeight: 700 }}
                    >
                      {fmt.number}
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        padding: '0.22rem 0.65rem',
                        borderRadius: 'var(--radius-pill)',
                        background: 'rgba(13,14,16,0.06)',
                        color: 'var(--text-ink)'
                      }}
                    >
                      {fmt.tag}
                    </span>
                  </div>
                  <h3>{fmt.title}</h3>
                  <p>{fmt.clientsDesc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL MARKETS COVERAGE */}
      <section id="markets" className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Markets Coverage
            </span>
            <h2>Local Expertise Across Global Markets</h2>
            <p className="lead">
              We source senior practitioners across Developed, Emerging, and Frontier corridors—so
              your diligence reflects local operational reality.
            </p>
          </Reveal>

          <MarketCoverageMap />
        </div>
      </section>

      {/* CLIENT SEGMENTS */}
      <section className="section section--elevated">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Client Segments
            </span>
            <h2>We Support Global Decision-Makers Who Need Primary Insight They Can Trust</h2>
          </Reveal>

          <div className="grid-3">
            {CLIENT_AUDIENCES.map((seg, idx) => (
              <Reveal key={seg.id} delay={idx * 0.06} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">0{idx + 1}</span>
                    <span className="card-tag">{seg.label}</span>
                  </div>
                  <h3>{seg.clientsPageTitle}</h3>
                  <p style={{ marginBottom: '1.25rem' }}>{seg.clientsDescription}</p>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      marginBottom: '1.5rem',
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {seg.workflows.map((w) => (
                      <li
                        key={w}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}
                      >
                        <span style={{ color: 'var(--gold)', marginTop: 2 }}>
                          <Icon name="check" size={14} />
                        </span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#enquiry-form"
                  className="btn btn--glass btn--sm"
                  style={{ alignSelf: 'flex-start' }}
                >
                  Get in touch
                  <Icon name="arrow-right" size={14} />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT ENQUIRY FORM */}
      <section id="enquiry-form" className="section">
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal>
            <IntakeForm config={FORM_CONFIGS.client} />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
