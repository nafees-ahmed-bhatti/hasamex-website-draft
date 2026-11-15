import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TEAM_DEPARTMENTS, TEAM_PLACEHOLDER_SLOTS } from '../content/siteData';
import { HasamexEmblemVector, Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

function EditorialAvatarPlaceholder({ code }) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '16 / 9',
        borderRadius: '10px',
        background:
          'radial-gradient(circle at 50% 35%, rgba(255, 255, 255, 0.08), #0b1329 78%)',
        border: '1px dashed #334155',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.45rem',
        marginBottom: '1rem',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Portrait Placeholder"
    >
      {/* Minimalist Illustrated Line-Art Silhouette */}
      <svg width="56" height="56" viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <circle
          cx="40"
          cy="40"
          r="35"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="1.2"
          strokeDasharray="3 3"
        />
        <circle
          cx="40"
          cy="29"
          r="11"
          stroke="#ffffff"
          strokeWidth="1.6"
          fill="rgba(255, 255, 255, 0.1)"
        />
        <path
          d="M20 65 C22 50, 30 45, 40 45 C50 45, 58 50, 60 65"
          stroke="#f8fafc"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.66rem',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#cbd5e1'
        }}
      >
        Portrait / Headshot Slot · {code}
      </span>
    </div>
  );
}

export function TeamPage() {
  const [selectedDept, setSelectedDept] = useState('all');
  const [viewMode, setViewMode] = useState('detailed'); // 'detailed' | 'compact'

  const filteredSlots =
    selectedDept === 'all'
      ? TEAM_PLACEHOLDER_SLOTS
      : TEAM_PLACEHOLDER_SLOTS.filter((s) => s.department === selectedDept);

  // Balanced grid: 8 items -> 4x2 in compact or 2x4 in detailed; 2 items -> 2x1 in both
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
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal blur y={16}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Leadership &amp; Team · New Page Draft
            </span>
            <AnimatedHeading
              as="h1"
              text="The People Behind Hasamex"
              style={{ marginTop: '0.85rem', marginBottom: '0.9rem' }}
            />
            <p className="lead" style={{ maxWidth: 660 }}>
              Headquartered in Singapore, with a distributed team across India and beyond, our
              team connects institutional decision-makers with vetted domain experts worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRANSPARENT DRAFT NOTICE & CONTROLS */}
      <section className="section">
        <div className="container">
          <div className="draft-banner" style={{ marginBottom: '1.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Icon name="alert" size={17} />
              <span>
                <strong>Draft Architecture — Awaiting Official Team Roster:</strong> Per project
                guidelines, no employee names, titles, biographies, or headshots have been
                invented. Every card below is a clearly marked placeholder ready for official
                leadership and team profiles.
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem' }}>
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

          {/* PLACEHOLDER PROFILE CARDS (Balanced 2x4 or 4x2 Grid — Zero Orphan Cards!) */}
          <div className={gridClass}>
            {filteredSlots.map((slot, idx) => (
              <Reveal
                key={slot.id}
                delay={idx * 0.035}
                className="card"
                style={{ borderStyle: 'dashed' }}
              >
                <div>
                  <div className="card-top">
                    <span className="card-index">{slot.code}</span>
                    <span className="card-tag">{slot.locationPlaceholder}</span>
                  </div>

                  <EditorialAvatarPlaceholder code={slot.code} />

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.07em',
                      color: 'var(--color-text-muted)',
                      fontWeight: 600,
                      marginBottom: '0.25rem'
                    }}
                  >
                    {slot.departmentLabel}
                  </div>

                  <h3 style={{ fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                    {slot.namePlaceholder}
                  </h3>

                  <div
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)',
                      marginBottom: '0.6rem'
                    }}
                  >
                    {slot.titlePlaceholder}
                  </div>

                  {viewMode === 'detailed' && (
                    <p style={{ fontSize: '0.84rem', marginBottom: '0.5rem' }}>
                      {slot.bioPlaceholder}
                    </p>
                  )}
                </div>

                <div className="card-footer-row">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {slot.focusTags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 600,
                          padding: '0.16rem 0.5rem',
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
                      fontSize: '0.72rem',
                      color: 'var(--color-text-muted)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.28rem'
                    }}
                  >
                    <Icon name="linkedin" size={13} />
                    [LinkedIn Slot]
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-BORDER CULTURE HIGHLIGHT */}
      <section className="section section--ivory">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '2.25rem' }}>
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Cross-Border Collaboration
              </span>
              <AnimatedHeading
                as="h2"
                text="One Standard of Precision Across Singapore & India"
                style={{ marginTop: '0.65rem', marginBottom: '0.65rem' }}
              />
              <p className="lead" style={{ marginBottom: '1.15rem' }}>
                We lead with integrity, operate with speed, treat people with respect, move with
                momentum, and communicate with clarity.
              </p>
              <Link to="/careers" className="btn btn--ink">
                Join Our Growing Team
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
                <HasamexEmblemVector size={44} />
                <div>
                  <h3 style={{ marginBottom: '0.1rem' }}>Ready for Content Handover</h3>
                  <p style={{ fontSize: '0.8rem' }}>
                    Drop-in JSON configuration in <code>src/content/siteData.js</code>
                  </p>
                </div>
              </div>
              <p style={{ fontSize: '0.86rem' }}>
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
