import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BRAND, TEAM_DEPARTMENTS, TEAM_PLACEHOLDER_SLOTS } from '../content/siteData';
import { HasamexEmblemVector, Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

function EditorialAvatarBadge({ code, departmentLabel }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.65rem',
        padding: '0.52rem 0.68rem',
        borderRadius: '8px',
        background: 'var(--bg-section-subtle)',
        border: '1px solid var(--border-strong)',
        marginBottom: '0.6rem'
      }}
      aria-label="Portrait Placeholder"
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: 'var(--hub-navy)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <svg width="20" height="20" viewBox="0 0 80 80" fill="none" aria-hidden="true">
          <circle
            cx="40"
            cy="28"
            r="12"
            stroke="#ffffff"
            strokeWidth="4"
            fill="rgba(255, 255, 255, 0.14)"
          />
          <path
            d="M18 66 C20 50, 29 44, 40 44 C51 44, 60 50, 62 66"
            stroke="#f8fafc"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--hub-navy)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {departmentLabel}
        </div>
        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)' }}>
          Headshot Slot · {code}
        </div>
      </div>
    </div>
  );
}

export function TeamPage() {
  const [selectedDept, setSelectedDept] = useState('all');
  const [viewMode, setViewMode] = useState('compact'); // 'compact' | 'detailed'
  const prefersReducedMotion = useReducedMotion();

  const filteredSlots =
    selectedDept === 'all'
      ? TEAM_PLACEHOLDER_SLOTS
      : TEAM_PLACEHOLDER_SLOTS.filter((s) => s.department === selectedDept);

  const gridClass =
    selectedDept === 'all' && viewMode === 'compact' ? 'grid-4' : 'grid-2';

  return (
    <Layout
      preFooterProps={{
        eyebrow: 'Build With Us',
        title: 'Interested in Joining the Hasamex Team in Singapore or India?',
        subtitle:
          'We are always looking for thoughtful, ambitious people who value integrity, speed, and ownership.',
        primaryLabel: 'Explore Careers',
        primaryTo: '/careers',
        secondaryLabel: 'About Hasamex',
        secondaryTo: '/about-us'
      }}
    >
      {/* 1. HERO — BALANCED 2-COLUMN INSTITUTIONAL SPLIT */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid" style={{ alignItems: 'center' }}>
            <Reveal blur y={14} className="hero-copy">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot" />
                  Leadership &amp; Team · New Page Draft
                </span>
                <AnimatedHeading
                  as="h1"
                  text="The People Behind Hasamex"
                  style={{ marginTop: '0.65rem', marginBottom: '0.65rem' }}
                />
                <p className="lead" style={{ maxWidth: '52ch', marginBottom: '1.25rem' }}>
                  Headquartered in Singapore, with a distributed team across India and beyond, our
                  team connects institutional decision-makers with vetted domain experts worldwide.
                </p>
                <div className="hero-ctas">
                  <a href="#team-roster" className="btn btn--primary">
                    View Team Structure
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <Link to="/careers" className="btn btn--glass">
                    Explore Careers
                  </Link>
                </div>
              </div>

              <div className="hero-trust-line">
                <img
                  src="/brand/hasamex-emblem-dark.png"
                  alt="Hasamex Emblem"
                  className="hero-footprint-ledger__emblem"
                />
                <div>
                  <strong>Cross-Border Execution Architecture</strong>
                  <span>Singapore HQ · Distributed Research &amp; Sourcing Hubs Across India</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} y={14}>
              <div className="page-hero-panel">
                <div className="page-hero-panel__header">
                  <span className="showcase-live-pill">
                    <span className="live-dot" />
                    Roster Architecture (Draft)
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.66rem',
                      color: '#86efac',
                      fontWeight: 600
                    }}
                  >
                    8 STRUCTURED SLOTS
                  </span>
                </div>

                <div>
                  <div className="page-hero-panel__title">
                    4 Core Functional Desks · Zero Invented Profiles
                  </div>
                  <p className="page-hero-panel__sub">
                    Structured placeholder slots ready for official leadership names, titles,
                    biographies, and portraits upon final confirmation.
                  </p>
                </div>

                <div className="page-hero-panel__matrix">
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">EXEC</span>
                    <span className="page-hero-panel__label">Leadership</span>
                    <span className="page-hero-panel__note">Strategy &amp; Governance</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">CLIENT</span>
                    <span className="page-hero-panel__label">Client Solutions</span>
                    <span className="page-hero-panel__note">Mandate execution</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">HIN</span>
                    <span className="page-hero-panel__label">Expert Relations</span>
                    <span className="page-hero-panel__note">Custom recruitment</span>
                  </div>
                  <div className="page-hero-panel__cell">
                    <span className="page-hero-panel__metric">OPS</span>
                    <span className="page-hero-panel__label">Compliance &amp; Ops</span>
                    <span className="page-hero-panel__note">MNPI &amp; payouts</span>
                  </div>
                </div>

                <div className="page-hero-panel__footer">
                  <span className="page-hero-panel__contact">
                    <Icon name="mail" size={14} />
                    <a href={`mailto:${BRAND.emails.careers}`} className="email-plain-link">
                      {BRAND.emails.careers}
                    </a>
                  </span>
                  <Link to="/careers" className="showcase-cta">
                    Join Hasamex
                    <Icon name="arrow-right" size={13} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. TRANSPARENT DRAFT NOTICE & TEAM ROSTER */}
      <section id="team-roster" className="section">
        <div className="container">
          <div className="draft-banner" style={{ marginBottom: '1.35rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Icon name="alert" size={17} />
              <span>
                <strong>Draft Architecture — Awaiting Official Team Roster:</strong> Per project
                guidelines, no employee names, titles, biographies, or headshots have been
                invented. Every card below is a clearly marked placeholder ready for official
                leadership and team profiles.
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
              <button
                type="button"
                className={`btn btn--sm ${
                  viewMode === 'detailed' ? 'btn--primary' : 'btn--glass'
                }`}
                onClick={() => setViewMode('detailed')}
              >
                Detailed Bio View
              </button>
              <button
                type="button"
                className={`btn btn--sm ${
                  viewMode === 'compact' ? 'btn--primary' : 'btn--glass'
                }`}
                onClick={() => setViewMode('compact')}
              >
                Compact Grid View
              </button>
            </div>
          </div>

          {/* DEPARTMENT FILTER TABS */}
          <div className="tab-bar" role="tablist" aria-label="Team Departments">
            {TEAM_DEPARTMENTS.map((dept) => (
              <button
                key={dept.id}
                type="button"
                role="tab"
                aria-selected={selectedDept === dept.id}
                className={`tab-btn ${selectedDept === dept.id ? 'tab-btn--active' : ''}`}
                onClick={() => setSelectedDept(dept.id)}
              >
                {dept.label}
              </button>
            ))}
          </div>

          {/* ANIMATED PLACEHOLDER PROFILE CARDS */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedDept}-${viewMode}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className={gridClass}
            >
              {filteredSlots.map((slot) => (
                <div
                  key={slot.id}
                  className="card"
                  style={{ borderStyle: 'dashed' }}
                >
                  <div>
                    <div className="card-top">
                      <span className="card-index">{slot.code}</span>
                      <span className="card-tag">{slot.locationPlaceholder}</span>
                    </div>

                    <EditorialAvatarBadge
                      code={slot.code}
                      departmentLabel={slot.departmentLabel}
                    />

                    <h3 style={{ fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                      {slot.namePlaceholder}
                    </h3>

                    <div
                      style={{
                        fontSize: '0.79rem',
                        fontWeight: 600,
                        color: 'var(--color-text-secondary)',
                        marginBottom: '0.45rem'
                      }}
                    >
                      {slot.titlePlaceholder}
                    </div>

                    {viewMode === 'detailed' && (
                      <div className="card-detail-drawer">{slot.bioPlaceholder}</div>
                    )}
                  </div>

                  <div className="card-footer-row">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                      {slot.focusTags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '0.65rem',
                            fontWeight: 600,
                            padding: '0.12rem 0.45rem',
                            borderRadius: 'var(--radius-pill)',
                            background: 'var(--bg-section-subtle)',
                            color: 'var(--color-text-secondary)',
                            border: '1px solid var(--hasamex-border-light)'
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        color: 'var(--color-text-muted)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem'
                      }}
                    >
                      <Icon name="linkedin" size={12} />
                      [LinkedIn]
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 3. CROSS-BORDER CULTURE HIGHLIGHT */}
      <section className="section section--ivory">
        <div className="container">
          <div className="advantage-split" style={{ alignItems: 'center' }}>
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Cross-Border Collaboration
              </span>
              <AnimatedHeading
                as="h2"
                text="One Standard of Precision Across Singapore & India"
                style={{ marginTop: '0.5rem', marginBottom: '0.55rem' }}
              />
              <p className="lead" style={{ marginBottom: '1rem' }}>
                We lead with integrity, operate with speed, treat people with respect, move with
                momentum, and communicate with clarity.
              </p>
              <Link to="/careers" className="btn btn--ink">
                Join Our Growing Team
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem' }}>
                <HasamexEmblemVector size={42} />
                <div>
                  <h3 style={{ marginBottom: '0.1rem' }}>Ready for Content Handover</h3>
                  <p style={{ fontSize: '0.79rem', margin: 0 }}>
                    Drop-in JSON configuration in <code>src/content/siteData.js</code>
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', margin: 0 }}>
                Once leadership confirms the final team list, each placeholder card above can be
                populated with official names, titles, regional locations, executive bios, LinkedIn
                URLs, and either studio photography or custom illustrated portraits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
