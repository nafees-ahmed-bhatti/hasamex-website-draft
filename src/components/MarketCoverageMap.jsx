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
    <div className="corridor-console">
      {/* Top Control Header */}
      <div className="corridor-console__header">
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

        <div className="corridor-console__meta">
          <Icon name="globe" size={15} />
          <span>Singapore HQ · Distributed Execution in India &amp; Global Corridors</span>
        </div>
      </div>

      {/* Architectural SVG World Coordinate Matrix */}
      <div className="corridor-console__map">
        <div className="corridor-console__map-topbar">
          <span className="corridor-console__map-status">
            <span className="hin-roster__dot" />
            ACTIVE SOURCING TELEMETRY · SINGAPORE HUB (1.2789° N, 103.8476° E)
          </span>
          <span className="corridor-console__map-count">
            Showing: {selectedTier === 'all' ? 'All 3 Global Market Tiers (14 Regional Hubs)' : visibleTiers[0]?.title}
          </span>
        </div>

        <svg
          viewBox="0 0 100 46"
          style={{ width: '100%', height: 'auto', maxHeight: 240, display: 'block' }}
          role="img"
          aria-label="Global Market Coverage Map across Developed, Emerging, and Frontier Markets"
        >
          {/* Subtle latitude / longitude grid */}
          {[9, 18, 27, 36].map((y) => (
            <line
              key={`lat-${y}`}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="0.2"
            />
          ))}
          {[15, 30, 45, 60, 75, 90].map((x) => (
            <line
              key={`lon-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="46"
              stroke="rgba(255, 255, 255, 0.06)"
              strokeWidth="0.2"
            />
          ))}

          {/* Stylized continent silhouettes */}
          <g fill="rgba(255, 255, 255, 0.06)" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="0.25">
            <polygon points="8,9 28,8 31,20 21,24 14,21" />
            <polygon points="26,26 36,28 34,41 28,42 25,32" />
            <polygon points="43,9 57,8 58,17 44,18" />
            <polygon points="44,20 61,19 63,28 56,39 48,37 44,27" />
            <polygon points="59,9 88,10 89,26 74,30 65,24 59,18" />
            <polygon points="77,32 89,32 88,40 78,39" />
          </g>

          {/* Connection arcs from Singapore HQ (x=76, y=27.6) */}
          {visibleTiers.flatMap((tier) =>
            tier.coordinates.map((pt) => {
              const targetY = pt.y * 0.46;
              return (
                <g key={`${tier.id}-${pt.label}`}>
                  <path
                    d={`M 76 27.6 Q ${(76 + pt.x) / 2} ${Math.min(27.6, targetY) - 5.5} ${pt.x} ${targetY}`}
                    fill="none"
                    stroke="rgba(134, 239, 172, 0.45)"
                    strokeWidth="0.32"
                    strokeDasharray="1 1"
                  />
                  <circle
                    cx={pt.x}
                    cy={targetY}
                    r="1.55"
                    fill="rgba(134, 239, 172, 0.22)"
                  />
                  <circle cx={pt.x} cy={targetY} r="0.75" fill="#ffffff" />
                  <text
                    x={pt.x + (pt.dx ?? 1.4)}
                    y={targetY + (pt.dy ?? 0.6)}
                    fill="#f8fafc"
                    fontSize="2.1"
                    fontWeight="600"
                  >
                    {pt.label}
                  </text>
                </g>
              );
            })
          )}
        </svg>
      </div>

      {/* Bottom 3-Column Connected Corridor Ledger (Stays 3 Columns on Desktop AND Tablet) */}
      <div className="corridor-ledger-row">
        {MARKETS_COVERAGE.map((tier) => {
          const isSelected = selectedTier === tier.id;
          return (
            <div
              key={tier.id}
              className={`corridor-ledger-cell ${
                isSelected ? 'corridor-ledger-cell--selected' : ''
              }`}
              onClick={() => setSelectedTier(selectedTier === tier.id ? 'all' : tier.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedTier(selectedTier === tier.id ? 'all' : tier.id);
                }
              }}
            >
              <div>
                <div className="corridor-ledger-cell__top">
                  <span className="card-index">{tier.code}</span>
                  <span className="card-tag">
                    {isSelected ? 'Active Filter · ' : ''}
                    {tier.regions.length} Key Corridors
                  </span>
                </div>
                <h3 className="corridor-ledger-cell__title">{tier.title}</h3>
                <p className="corridor-ledger-cell__summary">{tier.summary}</p>
              </div>
              <div className="corridor-ledger-cell__pills">
                {tier.regions.map((reg) => (
                  <span key={reg} className="corridor-region-pill">
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
