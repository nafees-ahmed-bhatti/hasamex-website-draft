import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { HOW_HASAMEX_CONNECTS } from '../content/siteData';
import { Icon } from './Icons';

export function WorkflowTimeline({ variant = 'navy' }) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [detailsOpen, setDetailsOpen] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  const activeStage = HOW_HASAMEX_CONNECTS[activeStepIndex] || HOW_HASAMEX_CONNECTS[0];
  const isNavy = variant === 'navy';

  const handleSelectStep = (idx) => {
    if (idx === activeStepIndex) {
      setDetailsOpen((prev) => !prev);
    } else {
      setActiveStepIndex(idx);
      setDetailsOpen(true);
    }
  };

  return (
    <div className={`workflow-timeline ${isNavy ? 'workflow-timeline--navy' : 'workflow-timeline--light'}`}>
      {/* Horizontal 4-Step Connected Process Rail */}
      <div className="workflow-rail" role="tablist" aria-label="Hasamex Four-Stage Execution Workflow">
        {HOW_HASAMEX_CONNECTS.map((stage, idx) => {
          const isActive = idx === activeStepIndex && detailsOpen;
          return (
            <div
              key={stage.step}
              role="tab"
              tabIndex={0}
              aria-selected={isActive}
              className={`workflow-step-card ${isActive ? 'workflow-step-card--active' : ''}`}
              onClick={() => handleSelectStep(idx)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelectStep(idx);
                }
              }}
            >
              <div className="workflow-step-card__header">
                <div className="workflow-step-card__badge-group">
                  <span className="workflow-step-card__icon">
                    <Icon name={stage.icon || 'shield'} size={15} />
                  </span>
                  <span className="workflow-step-card__num">STEP {stage.step}</span>
                </div>
                <span className="workflow-step-card__phase">{stage.shortPhase}</span>
              </div>

              <h3 className="workflow-step-card__title">{stage.title}</h3>
              <p className="workflow-step-card__summary">{stage.summary}</p>

              <div className="workflow-step-card__footer">
                <span className="workflow-step-card__sla">{stage.sla}</span>
                <span className="workflow-step-card__toggle">
                  {isActive ? 'Hide Details −' : 'Learn More +'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Expandable Full Stage Specification Bar */}
      <AnimatePresence initial={false}>
        {detailsOpen && (
          <motion.div
            key={activeStage.step}
            className="workflow-detail-drawer"
            initial={prefersReducedMotion ? false : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="tabpanel"
          >
            <div className="workflow-detail-drawer__main">
              <div className="workflow-detail-drawer__eyebrow">
                <span className="workflow-detail-drawer__pill">STAGE {activeStage.step} OF 04</span>
                <span className="workflow-detail-drawer__phase-name">{activeStage.phase}</span>
              </div>
              <p className="workflow-detail-drawer__desc">{activeStage.description}</p>
            </div>

            <div className="workflow-detail-drawer__meta">
              <div className="workflow-detail-drawer__meta-box">
                <span className="workflow-detail-drawer__meta-label">Stage Deliverable</span>
                <span className="workflow-detail-drawer__meta-value">{activeStage.deliverable}</span>
              </div>
              <div className="workflow-detail-drawer__nav">
                {HOW_HASAMEX_CONNECTS.map((s, i) => (
                  <button
                    key={s.step}
                    type="button"
                    className={`workflow-step-dot ${i === activeStepIndex ? 'workflow-step-dot--active' : ''}`}
                    onClick={() => setActiveStepIndex(i)}
                    aria-label={`Inspect Step ${s.step}: ${s.title}`}
                  >
                    {s.step}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
