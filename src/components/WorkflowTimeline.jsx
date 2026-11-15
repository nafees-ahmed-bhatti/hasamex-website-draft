import React from 'react';
import { HOW_HASAMEX_CONNECTS } from '../content/siteData';
import { Icon } from './Icons';
import { Reveal } from './Reveal';

export function WorkflowTimeline({ variant = 'navy' }) {
  const isNavy = variant === 'navy';

  return (
    <div
      className={`pipeline-board ${
        isNavy ? 'pipeline-board--navy' : 'pipeline-board--light'
      }`}
      aria-label="Hasamex Four-Stage Execution Workflow"
    >
      <div className="pipeline-grid">
        {HOW_HASAMEX_CONNECTS.map((stage, idx) => (
          <Reveal
            key={stage.step}
            delay={idx * 0.04}
            className="pipeline-stage"
          >
            {/* Top Connected Rail & Step Node */}
            <div className="pipeline-stage__rail">
              <div className="pipeline-stage__node">
                <span className="pipeline-stage__icon">
                  <Icon name={stage.icon || 'shield'} size={15} />
                </span>
                <span className="pipeline-stage__step-num">STAGE {stage.step}</span>
              </div>
              <span className="pipeline-stage__sla">{stage.sla}</span>
            </div>

            {/* Clean, Easy-to-Scan Stage Content */}
            <div className="pipeline-stage__body">
              <div className="pipeline-stage__phase">{stage.phase}</div>
              <h3 className="pipeline-stage__title">{stage.title}</h3>
              <p className="pipeline-stage__desc">{stage.summary}</p>
            </div>

            {/* Stage Deliverable Specification */}
            <div className="pipeline-stage__footer">
              <span className="pipeline-stage__deliverable-label">Deliverable</span>
              <span className="pipeline-stage__deliverable-value">
                {stage.deliverable}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
