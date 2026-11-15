import React from 'react';
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
import { AnimatedHeading, Reveal } from '../components/Reveal';
import { WorkflowTimeline } from '../components/WorkflowTimeline';

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
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal blur y={16}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Client Services
            </span>
            <AnimatedHeading
              as="h1"
              text="The New Standard in Expert Intelligence"
              style={{ marginTop: '0.85rem', marginBottom: '0.9rem' }}
            />
            <p className="lead" style={{ maxWidth: 640 }}>
              Fast, compliant, and high-quality expert insight — delivered with white glove
              service across Developed, Emerging, and Frontier markets.
            </p>
            <div className="hero-ctas">
              <a href="#enquiry-form" className="btn btn--primary">
                Start a Project
                <Icon name="arrow-right" size={15} />
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

      {/* SERVICE MODEL (Balanced 4x1 Grid) */}
      <section id="service-model" className="section">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Service Architecture
            </span>
            <AnimatedHeading as="h2" text="A Service Model Designed for Excellence" />
            <p className="lead">
              From intake to delivery, every step is structured, premium, and built around your
              workflow.
            </p>
          </Reveal>

          <div className="grid-4" style={{ marginBottom: '2rem' }}>
            {CLIENTS_SERVICE_MODEL.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.04} className="card">
                <div>
                  <div className="card-top">
                    <div className="card-top__left">
                      <span className="card-icon-box">
                        <Icon name="shield" size={15} />
                      </span>
                      <span className="card-index">{item.number}</span>
                    </div>
                    <span className="card-tag">Core Pillar</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="card-footer-row">
                  <span>Institutional SLA</span>
                  <Icon name="check" size={14} />
                </div>
              </Reveal>
            ))}
          </div>

          {/* 4-Step Client-to-Expert Execution Flow (Compact Horizontal Timeline) */}
          <div className="card card--navy" style={{ padding: '1.5rem 1.65rem' }}>
            <div style={{ marginBottom: '1.1rem' }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                How We Connect You With Vetted Experts
              </span>
              <h3 style={{ fontSize: '1.18rem', marginTop: '0.5rem', color: '#ffffff' }}>
                Four-Stage Brief-to-Consultation Execution
              </h3>
            </div>
            <WorkflowTimeline variant="navy" />
          </div>
        </div>
      </section>

      {/* ENGAGEMENT METHODS (Balanced 3x2 Grid — 6 Cards) */}
      <section id="formats" className="section section--ivory">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Engagement Methods
            </span>
            <AnimatedHeading as="h2" text="Multiple Formats. One Goal: Better Insight." />
            <p className="lead">
              Tailored primary research formats designed for institutional diligence, thematic
              sprints, and strategic decision-making.
            </p>
          </Reveal>

          <div className="grid-3">
            {HOME_FORMATS.map((fmt, idx) => (
              <Reveal key={fmt.id} delay={idx * 0.04} className="card">
                <div>
                  <div className="card-top">
                    <div className="card-top__left">
                      <span className="card-icon-box">
                        <Icon name={fmt.icon} size={15} />
                      </span>
                      <span className="card-index">{fmt.number}</span>
                    </div>
                    <span className="card-tag">{fmt.tag}</span>
                  </div>
                  <h3>{fmt.title}</h3>
                  <p>{fmt.clientsDesc}</p>
                </div>
                <div className="card-footer-row">
                  <span>{fmt.scope}</span>
                  <a href="#enquiry-form" className="card-cta-link">
                    Request <Icon name="arrow-right" size={13} />
                  </a>
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
            <AnimatedHeading as="h2" text="Local Expertise Across Global Markets" />
            <p className="lead">
              We source senior practitioners across Developed, Emerging, and Frontier corridors—so
              your diligence reflects local operational reality.
            </p>
          </Reveal>

          <MarketCoverageMap />
        </div>
      </section>

      {/* CLIENT SEGMENTS (Balanced 3x1 Grid) */}
      <section className="section section--elevated">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Client Segments
            </span>
            <AnimatedHeading
              as="h2"
              text="We Support Global Decision-Makers Who Need Primary Insight They Can Trust"
            />
          </Reveal>

          <div className="grid-3">
            {CLIENT_AUDIENCES.map((seg, idx) => (
              <Reveal key={seg.id} delay={idx * 0.045} className="card">
                <div>
                  <div className="card-top">
                    <div className="card-top__left">
                      <span className="card-icon-box">
                        <Icon name="users" size={15} />
                      </span>
                      <span className="card-index">0{idx + 1}</span>
                    </div>
                    <span className="card-tag">{seg.label}</span>
                  </div>
                  <h3>{seg.clientsPageTitle}</h3>
                  <p style={{ marginBottom: '0.7rem' }}>{seg.clientsDescription}</p>
                  <ul
                    style={{
                      listStyle: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      marginBottom: '0.35rem',
                      fontSize: '0.81rem',
                      color: 'var(--color-text-secondary)'
                    }}
                  >
                    {seg.workflows.map((w) => (
                      <li
                        key={w}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}
                      >
                        <span style={{ color: 'var(--hub-navy)', marginTop: 2 }}>
                          <Icon name="check" size={13} />
                        </span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer-row">
                  <span>Custom Brief Sourcing</span>
                  <a href="#enquiry-form" className="card-cta-link">
                    Get in touch <Icon name="arrow-right" size={13} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT ENQUIRY FORM */}
      <section id="enquiry-form" className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <IntakeForm config={FORM_CONFIGS.client} />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
