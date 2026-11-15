import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TEAM_DEPARTMENTS, TEAM_PLACEHOLDER_SLOTS } from '../content/siteData';
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
        padding: '0.55rem 0.7rem',
        borderRadius: '8px',
        background: 'var(--bg-section-subtle)',
        border: '1px solid var(--border-strong)',
        marginBottom: '0.65rem'
      }}
      aria-label="Portrait Placeholder"
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'var(--hub-navy)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <svg width="22" height="22" viewBox="0 0 80 80" fill="none" aria-hidden="true">
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
            fontSize: '0.64rem',
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
        <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
          Headshot Slot · {code}
        </div>
      </div>
    </div>
  );
}

export function TeamPage() {
  const [selectedDept, setSelectedDept] = useState('all');
  const [viewMode, setViewMode] = useState('compact'); // 'compact' | 'detailed'
  const [expandedSlotId, setExpandedSlotId] = useState(null);

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

          {/* PLACEHOLDER PROFILE CARDS (Balanced 4x2 or 2x4 Grid — Compact & Zero Orphan Cards!) */}
          <div className={gridClass}>
            {filteredSlots.map((slot, idx) => {
              const showBio = viewMode === 'detailed' || expandedSlotId === slot.id;
              return (
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

                    <EditorialAvatarBadge
                      code={slot.code}
                      departmentLabel={slot.departmentLabel}
                    />

                    <h3 style={{ fontSize: '0.96rem', marginBottom: '0.2rem' }}>
                      {slot.namePlaceholder}
                    </h3>

                    <div
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--color-text-secondary)',
                        marginBottom: '0.45rem'
                      }}
                    >
                      {slot.titlePlaceholder}
                    </div>

                    {showBio && (
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
                    {viewMode === 'compact' ? (
                      <button
                        type="button"
                        className={`card-expand-btn ${
                          expandedSlotId === slot.id ? 'card-expand-btn--active' : ''
                        }`}
                        onClick={() =>
                          setExpandedSlotId(expandedSlotId === slot.id ? null : slot.id)
                        }
                      >
                        {expandedSlotId === slot.id ? 'Hide −' : 'Scope +'}
                      </button>
                    ) : (
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
                    )}
                  </div>
                </Reveal>
              );
            })}
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
