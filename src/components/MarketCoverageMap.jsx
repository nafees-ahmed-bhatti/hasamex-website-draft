import React, { useEffect, useRef, useState } from 'react';
import createGlobe from 'cobe';
import { MARKETS_COVERAGE } from '../content/siteData';
import { Icon } from './Icons';

const SINGAPORE_HQ = [1.2897, 103.8501];

export const GLOBE_HUBS = [
  // Emerging Markets (EM) — Anchored by Singapore HQ & India Execution Hubs
  {
    id: 'sg-hq',
    label: 'Singapore HQ',
    sublabel: 'Global Command · SE Asia',
    tier: 'em',
    tierCode: 'EM · HQ',
    lat: 1.2897,
    lon: 103.8501,
    isHQ: true,
    offset: [10, 12]
  },
  {
    id: 'india',
    label: 'India',
    sublabel: 'Distributed Execution Hubs',
    tier: 'em',
    tierCode: 'EM',
    lat: 20.5937,
    lon: 78.9629,
    offset: [-26, -8]
  },
  {
    id: 'china',
    label: 'China',
    sublabel: 'East Asia Corridor',
    tier: 'em',
    tierCode: 'EM',
    lat: 31.2304,
    lon: 121.4737,
    offset: [-22, -14]
  },
  {
    id: 'brazil',
    label: 'Brazil',
    sublabel: 'Latin America Corridor',
    tier: 'em',
    tierCode: 'EM',
    lat: -23.5505,
    lon: -46.6333,
    offset: [8, 0]
  },
  {
    id: 'south-africa',
    label: 'South Africa',
    sublabel: 'Southern Africa Hub',
    tier: 'em',
    tierCode: 'EM',
    lat: -26.2041,
    lon: 28.0473,
    offset: [8, 10]
  },
  // Developed Markets (DM)
  {
    id: 'us',
    label: 'U.S.',
    sublabel: 'North America Corridor',
    tier: 'dm',
    tierCode: 'DM',
    lat: 38.9072,
    lon: -77.0369,
    offset: [8, -8]
  },
  {
    id: 'europe',
    label: 'Europe',
    sublabel: 'UK & Continental Europe',
    tier: 'dm',
    tierCode: 'DM',
    lat: 50.1109,
    lon: 8.6821,
    offset: [8, -10]
  },
  {
    id: 'japan',
    label: 'Japan',
    sublabel: 'Tokyo · APAC Developed',
    tier: 'dm',
    tierCode: 'DM',
    lat: 35.6762,
    lon: 139.6503,
    offset: [22, 8]
  },
  {
    id: 'south-korea',
    label: 'South Korea',
    sublabel: 'Seoul · East Asia DM',
    tier: 'dm',
    tierCode: 'DM',
    lat: 37.5665,
    lon: 126.978,
    offset: [18, -16]
  },
  {
    id: 'australia',
    label: 'Australia',
    sublabel: 'Sydney · Oceania Hub',
    tier: 'dm',
    tierCode: 'DM',
    lat: -33.8688,
    lon: 151.2093,
    offset: [8, 8]
  },
  // Frontier Markets (FM)
  {
    id: 'mena',
    label: 'MENA',
    sublabel: 'Dubai & GCC Corridor',
    tier: 'fm',
    tierCode: 'FM',
    lat: 25.2048,
    lon: 55.2708,
    offset: [-12, -12]
  },
  {
    id: 'ssa',
    label: 'Sub-Saharan Africa',
    sublabel: 'West & East Africa',
    tier: 'fm',
    tierCode: 'FM',
    lat: 6.5244,
    lon: 3.3792,
    offset: [-8, 12]
  },
  {
    id: 'bangladesh',
    label: 'Bangladesh',
    sublabel: 'South Asia Frontier',
    tier: 'fm',
    tierCode: 'FM',
    lat: 23.8103,
    lon: 90.4125,
    offset: [34, -10]
  },
  {
    id: 'sri-lanka',
    label: 'Sri Lanka',
    sublabel: 'Indian Ocean Corridor',
    tier: 'fm',
    tierCode: 'FM',
    lat: 6.9271,
    lon: 79.8612,
    offset: [-24, 14]
  }
];

function latLonToAngles(lat, lon) {
  return {
    phi: (3 * Math.PI) / 2 - (lon * Math.PI) / 180,
    theta: (lat * Math.PI) / 180
  };
}

function latLonToCartesian(lat, lon) {
  const r = (lat * Math.PI) / 180;
  const a = (lon * Math.PI) / 180 - Math.PI;
  const o = Math.cos(r);
  return [-o * Math.cos(a), Math.sin(r), o * Math.sin(a)];
}

function projectToGlobeScreen(lat, lon, phi, theta, elevation = 0.03) {
  const t = latLonToCartesian(lat, lon);
  const radius = 0.8 + elevation;
  const tx = t[0] * radius;
  const ty = t[1] * radius;
  const tz = t[2] * radius;

  const cosT = Math.cos(theta);
  const sinT = Math.sin(theta);
  const cosP = Math.cos(phi);
  const sinP = Math.sin(phi);

  const cx = cosP * tx + sinP * tz;
  const sy = sinP * sinT * tx + cosT * ty - cosP * sinT * tz;
  const cz = -sinP * cosT * tx + sinT * ty + cosP * cosT * tz;

  return {
    xPct: (cx + 1) * 50,
    yPct: (-sy + 1) * 50,
    z: cz,
    visible: cz > 0.12
  };
}

export function MarketCoverageMap() {
  const [selectedTier, setSelectedTier] = useState('all');
  const [focusedHubId, setFocusedHubId] = useState('sg-hq');
  const [autoRotate, setAutoRotate] = useState(true);

  const canvasRef = useRef(null);
  const pinRefs = useRef({});
  const pointerDownRef = useRef(false);
  const pointerXRef = useRef(0);
  const pointerYRef = useRef(0);

  // Start centered on the Indo-Pacific / Singapore-India-Europe corridor
  const initialAngles = latLonToAngles(18, 82);
  const phiRef = useRef(initialAngles.phi);
  const thetaRef = useRef(initialAngles.theta);
  const targetPhiRef = useRef(null);
  const targetThetaRef = useRef(initialAngles.theta);
  const autoRotateRef = useRef(true);
  const selectedTierRef = useRef('all');
  const focusedHubRef = useRef('sg-hq');

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    selectedTierRef.current = selectedTier;
  }, [selectedTier]);

  useEffect(() => {
    focusedHubRef.current = focusedHubId;
  }, [focusedHubId]);

  const focusCoordinates = (lat, lon, pauseRotation = false) => {
    const { phi, theta } = latLonToAngles(lat, lon);
    // Normalize shortest angular path for phi
    const currentPhi = phiRef.current;
    const diff = ((phi - currentPhi + Math.PI) % (2 * Math.PI)) - Math.PI;
    targetPhiRef.current = currentPhi + (diff < -Math.PI ? diff + 2 * Math.PI : diff);
    targetThetaRef.current = Math.max(-0.65, Math.min(0.65, theta));
    if (pauseRotation) {
      setAutoRotate(false);
    }
  };

  const handleTierSelect = (tierId) => {
    setSelectedTier(tierId);
    if (tierId === 'all') {
      setAutoRotate(true);
      targetPhiRef.current = null;
      targetThetaRef.current = (16 * Math.PI) / 180;
    } else if (tierId === 'dm') {
      setFocusedHubId('europe');
      focusCoordinates(38, 18, false);
    } else if (tierId === 'em') {
      setFocusedHubId('sg-hq');
      focusCoordinates(14, 90, false);
    } else if (tierId === 'fm') {
      setFocusedHubId('mena');
      focusCoordinates(18, 52, false);
    }
  };

  const handleHubClick = (hub) => {
    setFocusedHubId(hub.id);
    focusCoordinates(hub.lat, hub.lon, true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    let width = canvas.parentElement?.clientWidth || 400;
    let animationFrameId = null;

    const buildMarkers = (activeTier, activeHub) =>
      GLOBE_HUBS.map((hub) => {
        const isTierMatch = activeTier === 'all' || hub.tier === activeTier || hub.isHQ;
        const isFocused = hub.id === activeHub;
        return {
          location: [hub.lat, hub.lon],
          size: hub.isHQ ? 0.095 : isFocused ? 0.085 : isTierMatch ? 0.062 : 0.035,
          color: hub.isHQ
            ? [0.13, 0.77, 0.37]
            : isFocused
              ? [0.53, 0.94, 0.67]
              : isTierMatch
                ? [1, 1, 1]
                : [0.38, 0.45, 0.55]
        };
      });

    const buildArcs = (activeTier) =>
      GLOBE_HUBS.filter((h) => !h.isHQ && (activeTier === 'all' || h.tier === activeTier)).map(
        (hub) => ({
          from: SINGAPORE_HQ,
          to: [hub.lat, hub.lon],
          color:
            hub.tier === 'em'
              ? [0.34, 0.92, 0.58]
              : hub.tier === 'dm'
                ? [0.78, 0.86, 0.98]
                : [0.58, 0.82, 0.95]
        })
      );

    const globe = createGlobe(canvas, {
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width,
      height: width,
      phi: phiRef.current,
      theta: thetaRef.current,
      dark: 1,
      diffuse: 1.35,
      mapSamples: 18000,
      mapBrightness: 6.8,
      mapBaseBrightness: 0.08,
      baseColor: [0.15, 0.22, 0.38],
      markerColor: [0.52, 0.94, 0.67],
      glowColor: [0.08, 0.14, 0.27],
      arcColor: [0.52, 0.94, 0.67],
      arcWidth: 1.25,
      arcHeight: 0.22,
      markerElevation: 0.03,
      markers: buildMarkers(selectedTierRef.current, focusedHubRef.current),
      arcs: buildArcs(selectedTierRef.current)
    });

    let lastTier = selectedTierRef.current;
    let lastHub = focusedHubRef.current;

    const tick = () => {
      if (!pointerDownRef.current) {
        if (targetPhiRef.current !== null) {
          const delta = targetPhiRef.current - phiRef.current;
          phiRef.current += delta * 0.08;
          if (Math.abs(delta) < 0.002) {
            targetPhiRef.current = null;
          }
        } else if (autoRotateRef.current) {
          phiRef.current += 0.0036;
        }
        thetaRef.current += (targetThetaRef.current - thetaRef.current) * 0.08;
      }

      const tierChanged = lastTier !== selectedTierRef.current;
      const hubChanged = lastHub !== focusedHubRef.current;
      if (tierChanged || hubChanged) {
        lastTier = selectedTierRef.current;
        lastHub = focusedHubRef.current;
      }

      globe.update({
        phi: phiRef.current,
        theta: thetaRef.current,
        width,
        height: width,
        ...(tierChanged || hubChanged
          ? {
              markers: buildMarkers(lastTier, lastHub),
              arcs: buildArcs(lastTier)
            }
          : {})
      });

      // Project 3D Floating Hub Labels in exact lockstep with cobe's WebGL sphere
      for (let i = 0; i < GLOBE_HUBS.length; i += 1) {
        const hub = GLOBE_HUBS[i];
        const el = pinRefs.current[hub.id];
        if (!el) continue;

        const proj = projectToGlobeScreen(hub.lat, hub.lon, phiRef.current, thetaRef.current, 0.03);
        const isTierMatch =
          selectedTierRef.current === 'all' ||
          hub.tier === selectedTierRef.current ||
          hub.isHQ;

        if (proj.visible && isTierMatch) {
          const alpha = Math.min(1, Math.max(0, (proj.z - 0.12) / 0.28));
          el.style.opacity = String(alpha.toFixed(2));
          el.style.left = `${proj.xPct}%`;
          el.style.top = `${proj.yPct}%`;
          el.style.pointerEvents = alpha > 0.45 ? 'auto' : 'none';
          el.style.zIndex = hub.isHQ || hub.id === focusedHubRef.current ? '6' : '3';
        } else {
          el.style.opacity = '0';
          el.style.pointerEvents = 'none';
        }
      }

      animationFrameId = window.requestAnimationFrame(tick);
    };

    animationFrameId = window.requestAnimationFrame(tick);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth || 400;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      globe.destroy();
    };
  }, []);

  const focusedHub = GLOBE_HUBS.find((h) => h.id === focusedHubId) || GLOBE_HUBS[0];

  return (
    <div className="corridor-console">
      {/* 1. Top Control Header */}
      <div className="corridor-console__header">
        <div className="tab-bar" style={{ marginBottom: 0 }}>
          <button
            type="button"
            className={`tab-btn ${selectedTier === 'all' ? 'tab-btn--active' : ''}`}
            onClick={() => handleTierSelect('all')}
          >
            All Global Markets (3D Globe)
          </button>
          {MARKETS_COVERAGE.map((tier) => (
            <button
              key={tier.id}
              type="button"
              className={`tab-btn ${selectedTier === tier.id ? 'tab-btn--active' : ''}`}
              onClick={() => handleTierSelect(tier.id)}
            >
              {tier.code} · {tier.title.split(' (')[0]}
            </button>
          ))}
        </div>

        <div className="corridor-console__controls">
          <button
            type="button"
            className="globe-control-btn"
            onClick={() => {
              targetPhiRef.current = null;
              setAutoRotate((prev) => !prev);
            }}
          >
            <span
              className="hin-roster__dot"
              style={{
                background: autoRotate ? '#22c55e' : '#94a3b8',
                boxShadow: autoRotate ? '0 0 8px #22c55e' : 'none'
              }}
            />
            {autoRotate ? '360° Auto-Rotation: Active' : 'Rotation Paused · Click to Resume'}
          </button>
        </div>
      </div>

      {/* 2. Interactive 3D Rotating Globe + Corridor Telemetry Stage */}
      <div className="corridor-globe-stage">
        {/* Left: Real 3D Rotating Globe Viewport + Floating 3D Surface Pin Labels */}
        <div className="corridor-globe-viewport">
          <div className="corridor-console__map-topbar">
            <span className="corridor-console__map-status">
              <span className="hin-roster__dot" />
              INTERACTIVE 3D GLOBAL NETWORK · DRAG GLOBE OR CLICK ANY HUB
            </span>
            <span className="corridor-console__map-count">
              Origin Hub: Singapore HQ (1.29°N, 103.85°E)
            </span>
          </div>

          <div
            className="globe-sphere-shell"
            onPointerDown={(e) => {
              pointerDownRef.current = true;
              targetPhiRef.current = null;
              pointerXRef.current = e.clientX;
              pointerYRef.current = e.clientY;
            }}
            onPointerUp={() => {
              pointerDownRef.current = false;
            }}
            onPointerOut={() => {
              pointerDownRef.current = false;
            }}
            onPointerMove={(e) => {
              if (!pointerDownRef.current) return;
              const dx = e.clientX - pointerXRef.current;
              const dy = e.clientY - pointerYRef.current;
              pointerXRef.current = e.clientX;
              pointerYRef.current = e.clientY;
              phiRef.current += dx * 0.0065;
              thetaRef.current = Math.max(
                -0.65,
                Math.min(0.65, thetaRef.current + dy * 0.005)
              );
              targetThetaRef.current = thetaRef.current;
            }}
          >
            {/* Subtle Architectural Orbital Ring Behind 3D Sphere */}
            <div className="globe-orbital-ring" aria-hidden="true" />

            {/* WebGL 3D Dotted Globe Canvas */}
            <canvas
              ref={canvasRef}
              className="globe-webgl-canvas"
              aria-label="Interactive 3D Rotating Global Market Coverage Globe"
            />

            {/* Synchronized 3D Floating Hub Labels on the Globe Surface */}
            <div className="globe-pins-layer">
              {GLOBE_HUBS.map((hub) => {
                const isFocused = hub.id === focusedHubId;
                return (
                  <button
                    key={hub.id}
                    type="button"
                    ref={(el) => {
                      pinRefs.current[hub.id] = el;
                    }}
                    className={`globe-pin ${hub.isHQ ? 'globe-pin--hq' : ''} ${
                      isFocused ? 'globe-pin--focused' : ''
                    }`}
                    style={{
                      '--pin-dx': `${hub.offset[0]}px`,
                      '--pin-dy': `${hub.offset[1]}px`
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleHubClick(hub);
                    }}
                  >
                    <span className="globe-pin__dot" />
                    <span className="globe-pin__text">{hub.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="globe-viewport-Subbar">
            <span>
              <span className="globe-legend-dot globe-legend-dot--hq" /> Singapore HQ &amp; India
              Execution
            </span>
            <span>
              <span className="globe-legend-dot globe-legend-dot--hub" /> 14 Active Regional
              Corridors
            </span>
            <span>
              <span className="globe-legend-dot globe-legend-dot--arc" /> Direct Sourcing Arcs
            </span>
          </div>
        </div>

        {/* Right: Active Hub Telemetry & Quick-Focus Hub Directory */}
        <div className="corridor-globe-sidebar">
          <div className="corridor-telemetry-box">
            <div className="corridor-telemetry-box__eyebrow">
              <span>ACTIVE CORRIDOR TELEMETRY</span>
              <span className="corridor-telemetry-box__code">{focusedHub.tierCode}</span>
            </div>
            <div className="corridor-telemetry-box__title">{focusedHub.label}</div>
            <div className="corridor-telemetry-box__sub">{focusedHub.sublabel}</div>
            <div className="corridor-telemetry-box__coords">
              <span>
                LAT: {Math.abs(focusedHub.lat).toFixed(2)}° {focusedHub.lat >= 0 ? 'N' : 'S'}
              </span>
              <span>
                LON: {Math.abs(focusedHub.lon).toFixed(2)}° {focusedHub.lon >= 0 ? 'E' : 'W'}
              </span>
              <span>SLA: 2–12 Hrs</span>
            </div>
          </div>

          <div className="corridor-hub-selector">
            <div className="corridor-hub-selector__label">
              CLICK ANY MARKET TO ROTATE 3D GLOBE ({GLOBE_HUBS.length} CORRIDORS)
            </div>
            <div className="corridor-hub-selector__grid">
              {GLOBE_HUBS.map((hub) => {
                const isActive = hub.id === focusedHubId;
                const isTierActive =
                  selectedTier === 'all' || hub.tier === selectedTier || hub.isHQ;
                return (
                  <button
                    key={hub.id}
                    type="button"
                    className={`corridor-hub-btn ${
                      isActive ? 'corridor-hub-btn--active' : ''
                    } ${!isTierActive ? 'corridor-hub-btn--dim' : ''}`}
                    onClick={() => handleHubClick(hub)}
                  >
                    <span className="corridor-hub-btn__tier">{hub.tier.toUpperCase()}</span>
                    <span className="corridor-hub-btn__name">{hub.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom 3-Column Connected Corridor Ledger (Stays 3 Columns on Desktop AND Tablet) */}
      <div className="corridor-ledger-row">
        {MARKETS_COVERAGE.map((tier) => {
          const isSelected = selectedTier === tier.id;
          return (
            <div
              key={tier.id}
              className={`corridor-ledger-cell ${
                isSelected ? 'corridor-ledger-cell--selected' : ''
              }`}
              onClick={() => handleTierSelect(selectedTier === tier.id ? 'all' : tier.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleTierSelect(selectedTier === tier.id ? 'all' : tier.id);
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
