import React from 'react';
import { Link } from 'react-router-dom';
import {
  BRAND,
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

const SERVICE_MODEL_META = [
  { icon: 'users', badge: 'White-Glove Desk', metric: 'Dedicated Lead' },
  { icon: 'sparkles', badge: 'AI-Enriched Vetting', metric: 'Custom Sourced' },
  { icon: 'shield', badge: 'Zero-MNPI Firewall', metric: '100% Auditable' },
  { icon: 'clock', badge: 'Rapid Turnaround', metric: '2–12 Hr SLA' }
];

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
      {/* 1. HERO — CLEAN, UN-RUSHED 2-COLUMN INSTITUTIONAL SPLIT */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <Reveal blur y={14} className="hero-copy">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Client Services
                </span>
                <AnimatedHeading
                  as="h1"
                  text="The New Standard in Expert Intelligence"
                  style={{ marginTop: '0.65rem', marginBottom: '0.65rem' }}
                />
                <p className="lead" style={{ maxWidth: '52ch', marginBottom: '1.25rem' }}>
                  Fast, compliant, and high-quality expert insight — delivered with white-glove
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
              </div>

              <div className="hero-trust-line">
                <img
                  src="/brand/hasamex-emblem-dark.png"
                  alt="Hasamex Emblem"
                  className="hero-footprint-ledger__emblem"
                />
                <div>
                  <strong>{BRAND.legalName} (UEN {BRAND.uen})</strong>
                  <span>Singapore HQ · Distributed Research &amp; Execution Desks in India</span>
                </div>
              </div>
            </Reveal>

            {/* Right Column — Clean Client Mandate Summary Panel */}
            <Reveal delay={0.08} y={14}>
              <div className="page-hero-panel">
                <div className="page-hero-panel__header">
                  <span className="showcase-live-pill">
                    <span className="showcase-live-dot" />
                    Client Mandate Standards
                  </span>
                  <span className="showcase-step-counter">DM · EM · FM</span>
                </div>

                <div className="page-hero-panel__matrix">
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">2–12 Hrs</span>
                    <span className="page-hero-panel__label">Typical Turnaround</span>
                    <span className="page-hero-panel__note">
                      Custom-recruited operators per brief
                    </span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">6 Formats</span>
                    <span className="page-hero-panel__label">Flexible Research Modes</span>
                    <span className="page-hero-panel__note">
                      Calls, Meetings, Roundtables &amp; Tours
                    </span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">Zero-MNPI</span>
                    <span className="page-hero-panel__label">100% Auditable</span>
                    <span className="page-hero-panel__note">
                      5-point pre-call compliance clearance
                    </span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">14 Hubs</span>
                    <span className="page-hero-panel__label">Global Market Reach</span>
                    <span className="page-hero-panel__note">
                      Developed, Emerging &amp; Frontier coverage
                    </span>
                  </div>
                </div>

                <div className="page-hero-panel__footer">
                  <div className="page-hero-panel__contact">
                    <span>Client Desk:</span>
                    <a href={`mailto:${BRAND.emails.general}`} className="email-plain-link">
                      {BRAND.emails.general}
                    </a>
                  </div>
                  <a href="#enquiry-form" className="showcase-cta">
                    Submit Brief
                    <Icon name="arrow-right" size={13} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. SERVICE MODEL & 4-STAGE EXECUTION PIPELINE */}
      <section id="service-model" className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Service Architecture
              </span>
              <AnimatedHeading
                as="h2"
                text="A Service Model Designed for Excellence"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                From intake to delivery, every step is structured, premium, and built around your
                institutional workflow.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <a href="#enquiry-form" className="btn btn--primary">
                Start a Project
                <Icon name="arrow-right" size={15} />
              </a>
            </Reveal>
          </div>

          {/* 4-Column Architectural Service Standard Strip */}
          <div className="service-standard-strip" style={{ marginBottom: '1.25rem' }}>
            {CLIENTS_SERVICE_MODEL.map((item, idx) => {
              const meta = SERVICE_MODEL_META[idx] || SERVICE_MODEL_META[0];
              return (
                <Reveal key={item.title} delay={idx * 0.035} className="service-standard-cell">
                  <div>
                    <div className="service-standard-cell__top">
                      <div className="service-standard-cell__badge-group">
                        <span className="card-icon-box">
                          <Icon name={meta.icon} size={15} />
                        </span>
                        <span className="card-index">{item.number}</span>
                      </div>
                      <span className="card-tag">{meta.badge}</span>
                    </div>
                    <h3 className="service-standard-cell__title">{item.title}</h3>
                    <p className="service-standard-cell__desc">{item.description}</p>
                  </div>
                  <div className="service-standard-cell__footer">
                    <span>{meta.metric}</span>
                    <Icon name="check" size={14} />
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* 4-Stage Client-to-Expert Execution Pipeline */}
          <div className="client-pipeline-wrapper">
            <div className="client-pipeline-wrapper__bar">
              <div className="hin-roster__banner-left">
                <span className="hin-roster__dot" />
                <span>HOW WE CONNECT YOU WITH VETTED EXPERTS · FOUR-STAGE EXECUTION PIPELINE</span>
              </div>
              <div className="hin-roster__banner-pills">
                <span>2–12 Hr Typical Delivery</span>
                <span>100% Pre-Call Cleared</span>
              </div>
            </div>
            <WorkflowTimeline variant="navy" />
          </div>
        </div>
      </section>

      {/* 3. ENGAGEMENT METHODS — CLEAN 3x2 MATRIX WITH PROPERLY SPACED ICON & NUMBER */}
      <section id="formats" className="section section--ivory">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 640 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Engagement Methods
              </span>
              <AnimatedHeading
                as="h2"
                text="Multiple Formats. One Goal: Better Insight."
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
              <p className="lead">
                Tailored primary research formats designed for institutional diligence, thematic
                sprints, and strategic decision-making.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <a href="#enquiry-form" className="btn btn--glass">
                Request Custom Format
                <Icon name="arrow-right" size={15} />
              </a>
            </Reveal>
          </div>

          <div className="format-matrix">
            {HOME_FORMATS.map((fmt, idx) => (
              <Reveal key={fmt.id} delay={idx * 0.03} className="format-cell">
                <div className="format-cell__top">
                  <div className="format-cell__id">
                    <span className="format-cell__icon">
                      <Icon name={fmt.icon} size={15} />
                    </span>
                    <span className="format-cell__num">{fmt.number}</span>
                  </div>
                  <span className="format-cell__tag">{fmt.tag}</span>
                </div>

                <div className="format-cell__body">
                  <h3 className="format-cell__title">{fmt.title}</h3>
                  <p className="format-cell__desc">{fmt.clientsDesc}</p>
                </div>

                <div className="format-cell__footer">
                  <span className="format-cell__scope">{fmt.scope}</span>
                  <a href="#enquiry-form" className="format-cell__link">
                    <span>Request</span>
                    <Icon name="arrow-right" size={13} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GLOBAL MARKETS COVERAGE (Interactive 3D Rotating Globe) */}
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

      {/* 5. CLIENT SEGMENTS — CLEAN, EASY-TO-SCAN 3-COLUMN MATRIX */}
      <section className="section section--elevated">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 660 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Client Segments
              </span>
              <AnimatedHeading
                as="h2"
                text="We Support Global Decision-Makers Who Need Primary Insight They Can Trust"
                style={{ marginTop: '0.45rem', marginBottom: '0.35rem' }}
              />
            </Reveal>
            <Reveal delay={0.05}>
              <Link to="/compliance" className="btn btn--glass">
                View Compliance Safeguards
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          </div>

          <div className="client-segment-matrix">
            {CLIENT_AUDIENCES.map((seg, idx) => (
              <Reveal key={seg.id} delay={idx * 0.04} className="client-segment-cell">
                <div>
                  <div className="client-segment-cell__top">
                    <div className="service-standard-cell__badge-group">
                      <span className="card-icon-box">
                        <Icon name="users" size={15} />
                      </span>
                      <span className="card-index">0{idx + 1}</span>
                    </div>
                    <span className="card-tag">{seg.label}</span>
                  </div>

                  <h3 className="client-segment-cell__title">{seg.clientsPageTitle}</h3>
                  <p className="client-segment-cell__desc">{seg.clientsDescription}</p>

                  <ul className="client-segment-cell__list">
                    {seg.workflows.map((w) => (
                      <li key={w}>
                        <span className="client-segment-cell__check">
                          <Icon name="check" size={13} />
                        </span>
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="client-segment-cell__footer">
                  <span>Custom Brief Sourcing</span>
                  <a href="#enquiry-form" className="card-cta-link">
                    Start Mandate <Icon name="arrow-right" size={13} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT ENQUIRY FORM */}
      <section id="enquiry-form" className="section">
        <div className="container">
          <div className="intake-split-layout">
            {/* Left Institutional Client Desk Brief */}
            <Reveal className="intake-desk-card">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Direct Mandate Desk
                </span>
                <h2 className="intake-desk-card__title">
                  Submit a Research Mandate to Our Client Solutions Team
                </h2>
                <p className="intake-desk-card__lead">
                  Share your target company, sector, geography, or diligence questions. Our
                  Singapore and India desks calibrate immediately and begin custom operator
                  recruiting.
                </p>

                <div className="intake-desk-card__steps">
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">01</span>
                    <div>
                      <strong>Immediate Brief Calibration</strong>
                      <span>Dedicated account lead confirms scope, seniority &amp; off-limits list.</span>
                    </div>
                  </div>
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">02</span>
                    <div>
                      <strong>First Profiles in 2–12 Hours</strong>
                      <span>Custom-recruited operators with screening responses delivered.</span>
                    </div>
                  </div>
                  <div className="intake-desk-step">
                    <span className="intake-desk-step__num">03</span>
                    <div>
                      <strong>5-Point Compliance Gate</strong>
                      <span>Mandatory MNPI, conflict, and cooling-off verification before call.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="intake-desk-card__footer">
                <div className="intake-desk-card__office">
                  <span className="intake-desk-card__label">SINGAPORE HEADQUARTERS</span>
                  <strong>
                    {BRAND.legalName} (UEN {BRAND.uen})
                  </strong>
                  <span>{BRAND.address}</span>
                </div>
                <div className="intake-desk-card__emails">
                  <div>
                    <span>Client Desk: </span>
                    <a href={`mailto:${BRAND.emails.general}`} className="email-plain-link">
                      {BRAND.emails.general}
                    </a>
                  </div>
                  <div>
                    <span>Compliance Desk: </span>
                    <a href={`mailto:${BRAND.emails.compliance}`} className="email-plain-link">
                      {BRAND.emails.compliance}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Client Intake Form */}
            <Reveal delay={0.05}>
              <IntakeForm config={FORM_CONFIGS.client} />
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
