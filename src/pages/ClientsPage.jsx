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
      {/* 1. HERO — BALANCED 2-COLUMN INSTITUTIONAL SPLIT */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
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
                <p className="lead" style={{ maxWidth: '54ch', marginBottom: '1.1rem' }}>
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

              <div className="hero-footprint-ledger">
                <div className="hero-footprint-ledger__head">
                  <img
                    src="/assets/logo-emblem.png"
                    alt="Hasamex Institutional Seal"
                    className="hero-footprint-ledger__emblem"
                  />
                  <div>
                    <div className="hero-footprint-ledger__title">
                      Client Solutions Desk · Singapore HQ &amp; India Execution Hubs
                    </div>
                    <div className="hero-footprint-ledger__sub">
                      {BRAND.legalName} (UEN {BRAND.uen}) · {BRAND.address}
                    </div>
                  </div>
                </div>
                <div className="hero-footprint-ledger__metrics">
                  <div className="hero-footprint-ledger__cell">
                    <span className="hero-footprint-ledger__k">Turnaround SLA</span>
                    <span className="hero-footprint-ledger__v">2–12 Hr Typical Delivery</span>
                  </div>
                  <div className="hero-footprint-ledger__cell">
                    <span className="hero-footprint-ledger__k">Sourcing Model</span>
                    <span className="hero-footprint-ledger__v">100% Custom Per Brief</span>
                  </div>
                  <div className="hero-footprint-ledger__cell">
                    <span className="hero-footprint-ledger__k">Compliance Gate</span>
                    <span className="hero-footprint-ledger__v">5-Point Pre-Call Vetting</span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Right Column — Institutional Client Mandate Command Panel */}
            <Reveal delay={0.08} y={14}>
              <div className="page-hero-panel">
                <div className="page-hero-panel__header">
                  <span className="showcase-live-pill">
                    <span className="showcase-live-dot" />
                    Client Mandate Architecture
                  </span>
                  <span className="showcase-step-counter">SLA · DM / EM / FM</span>
                </div>

                <div className="page-hero-panel__title">
                  Engineered for High-Conviction Institutional Diligence
                </div>
                <p className="page-hero-panel__sub">
                  Every client mandate is led by a dedicated Singapore and India desk pair—combining
                  fresh operator recruitment with mandatory 5-point compliance clearance.
                </p>

                <div className="page-hero-panel__matrix">
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">2–12 Hrs</span>
                    <span className="page-hero-panel__label">Brief-to-Shortlist Speed</span>
                    <span className="page-hero-panel__note">
                      Handpicked profiles without database recycling
                    </span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">6 Formats</span>
                    <span className="page-hero-panel__label">Flexible Research Modes</span>
                    <span className="page-hero-panel__note">
                      1:1 Calls, Roundtables, Tours &amp; Transcripts
                    </span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">Zero-MNPI</span>
                    <span className="page-hero-panel__label">Recorded &amp; Auditable</span>
                    <span className="page-hero-panel__note">
                      Conflict checks, cooling-off &amp; blind anonymity
                    </span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">14 Hubs</span>
                    <span className="page-hero-panel__label">Global Market Corridors</span>
                    <span className="page-hero-panel__note">
                      Developed, Emerging &amp; Frontier reach
                    </span>
                  </div>
                </div>

                <div className="page-hero-panel__footer">
                  <div className="page-hero-panel__contact">
                    <span>Direct Client Desk:</span>
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

      {/* 2. SERVICE MODEL & 4-STAGE EXECUTION PIPELINE (Unified Architectural Frame) */}
      <section id="service-model" className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 660 }}>
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
                    <span>Commitment: {meta.metric}</span>
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
                <span>≤ 14-Day Expert Settlement</span>
              </div>
            </div>
            <WorkflowTimeline variant="navy" />
          </div>
        </div>
      </section>

      {/* 3. ENGAGEMENT METHODS (Architectural Hairline Format Matrix — Full Context) */}
      <section id="formats" className="section section--ivory">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 660 }}>
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
                  <div className="format-cell__identity">
                    <span className="format-cell__num">{fmt.number}</span>
                    <span className="format-cell__icon">
                      <Icon name={fmt.icon} size={15} />
                    </span>
                    <span className="format-cell__tag">{fmt.tag}</span>
                  </div>
                  <span className="format-cell__scope">{fmt.scope}</span>
                </div>

                <div className="format-cell__body">
                  <h3 className="format-cell__title">{fmt.title}</h3>
                  <p className="format-cell__desc">{fmt.clientsDesc}</p>
                </div>

                <div className="format-cell__footer">
                  <span className="format-cell__detail-note">{fmt.shortDesc}</span>
                  <a href="#enquiry-form" className="format-cell__link">
                    Request <Icon name="arrow-right" size={13} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GLOBAL MARKETS COVERAGE (Unified Corridor Console — Zero Orphan Cards) */}
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

      {/* 5. CLIENT SEGMENTS (3-Column Architectural Segment Matrix — Stays 3 Columns on Tablet) */}
      <section className="section section--elevated">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 680 }}>
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
                  <div className="client-segment-cell__headline">{seg.headline}</div>
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

                <div>
                  <div className="client-segment-cell__quote">
                    <p>“{seg.quote.text}”</p>
                    <span>— {seg.quote.author}</span>
                  </div>
                  <div className="client-segment-cell__footer">
                    <span>Custom Brief Sourcing</span>
                    <a href="#enquiry-form" className="card-cta-link">
                      Start Mandate <Icon name="arrow-right" size={13} />
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLIENT ENQUIRY FORM (Institutional Split Intake Layout) */}
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
