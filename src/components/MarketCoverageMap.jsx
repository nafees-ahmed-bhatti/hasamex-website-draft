import React, { useState } from 'react';
import { MARKETS_COVERAGE } from '../content/siteData';
import { Icon } from './Icons';

export function MarketCoverageMap() {
  const [selectedTier, setSelectedTier] = useState('all');

  const visibleTiers =
    selectedTier === 'all'
      ? MARKETS_COVERAGE
      : MARKETS_COVERAGE.filter((m) => m.id === selectedTier);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '1.75rem'
        }}
      >
        <div className="tab-bar" style={{ marginBottom: 0 }}>
          <button
            type="button"
            className={`tab-btn ${selectedTier === 'all' ? 'tab-btn--active' : ''}`}
            onClick={() => setSelectedTier('all')}
          >
            All Global Markets
          </button>
          {MARKETS_COVERAGE.map((tier) => (
            <button
              key={tier.id}
              type="button"
              className={`tab-btn ${selectedTier === tier.id ? 'tab-btn--active' : ''}`}
              onClick={() => setSelectedTier(tier.id)}
            >
              {tier.code} · {tier.title.split(' (')[0]}
            </button>
          ))}
        </div>

        <div
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Icon name="globe" size={16} />
          <span>Singapore HQ · Distributed Execution in India &amp; Global Corridors</span>
        </div>
      </div>

      {/* Architectural SVG World Coordinate Matrix */}
      <div
        style={{
          background: 'linear-gradient(180deg, #131418 0%, #0d0e11 100%)',
          border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-xl)',
          padding: '1.5rem',
          marginBottom: '1.5rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <svg
          viewBox="0 0 100 52"
          style={{ width: '100%', height: 'auto', maxHeight: 320, display: 'block' }}
          role="img"
          aria-label="Global Market Coverage Map across Developed, Emerging, and Frontier Markets"
        >
          {/* Subtle latitude / longitude grid */}
          {[10, 20, 30, 40].map((y) => (
            <line
              key={`lat-${y}`}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.2"
            />
          ))}
          {[15, 30, 45, 60, 75, 90].map((x) => (
            <line
              key={`lon-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="52"
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.2"
            />
          ))}

          {/* Stylized continent silhouettes (minimal architectural geometry) */}
          <g fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.25">
            {/* North America */}
            <polygon points="8,10 28,9 31,22 21,27 14,23" />
            {/* South America */}
            <polygon points="26,29 36,31 34,46 28,47 25,36" />
            {/* Europe */}
            <polygon points="43,10 57,9 58,19 44,20" />
            {/* Africa & MENA */}
            <polygon points="44,22 61,21 63,31 56,43 48,41 44,30" />
            {/* Asia */}
            <polygon points="59,10 88,11 89,29 74,33 65,27 59,20" />
            {/* Australia */}
            <polygon points="77,36 89,36 88,45 78,44" />
          </g>

          {/* Connection arcs from Singapore HQ (x=75, y=30) */}
          {visibleTiers.flatMap((tier) =>
            tier.coordinates.map((pt) => {
              const targetY = pt.y * 0.52;
              return (
                <g key={`${tier.id}-${pt.label}`}>
                  <path
                    d={`M 75 30 Q ${(75 + pt.x) / 2} ${Math.min(30, targetY) - 6} ${pt.x} ${targetY}`}
                    fill="none"
                    stroke="rgba(234, 177, 11, 0.32)"
                    strokeWidth="0.32"
                    strokeDasharray="1 1"
                  />
                  <circle
                    cx={pt.x}
                    cy={targetY}
                    r="1.6"
                    fill="rgba(234, 177, 11, 0.22)"
                  />
                  <circle cx={pt.x} cy={targetY} r="0.75" fill="#eab10b" />
                  <text
                    x={pt.x + (pt.dx ?? 1.4)}
                    y={targetY + (pt.dy ?? 0.6)}
                    fill="#f6f6f4"
                    fontSize="2.05"
                    fontWeight="500"
                  >
                    {pt.label}
                  </text>
                </g>
              );
            })
          )}
        </svg>
      </div>

      <div className="grid-3">
        {MARKETS_COVERAGE.map((tier) => {
          const isHighlighted = selectedTier === 'all' || selectedTier === tier.id;
          return (
            <div
              key={tier.id}
              className="card"
              style={{
                opacity: isHighlighted ? 1 : 0.45,
                borderColor:
                  selectedTier === tier.id ? 'var(--gold)' : 'var(--border-subtle)'
              }}
            >
              <div>
                <div className="card-top">
                  <span className="card-index">{tier.code}</span>
                  <span className="card-tag">{tier.regions.length} Key Corridors</span>
                </div>
                <h3>{tier.title}</h3>
                <p style={{ marginBottom: '1.25rem' }}>{tier.summary}</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {tier.regions.map((reg) => (
                  <span
                    key={reg}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 500,
                      padding: '0.3rem 0.7rem',
                      borderRadius: 'var(--radius-pill)',
                      background: 'rgba(234, 177, 11, 0.1)',
                      border: '1px solid rgba(234, 177, 11, 0.28)',
                      color: 'var(--text-primary)'
                    }}
                  >
                    {reg}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
