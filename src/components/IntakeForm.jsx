import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icons';

export function IntakeForm({ config }) {
  const [values, setValues] = useState(() =>
    config.fields.reduce((acc, f) => ({ ...acc, [f.name]: '' }), { consent: false })
  );
  const [fileName, setFileName] = useState('');
  const [previewState, setPreviewState] = useState(null);

  const handleChange = (name, val) => {
    setValues((prev) => ({ ...prev, [name]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = config.fields.map((f) => {
      const val = f.type === 'file' ? fileName || '(CV to be attached in email)' : values[f.name];
      return `${f.label}: ${val || '-'}`;
    });
    const subject = encodeURIComponent(`[Hasamex Website] ${config.title}`);
    const body = encodeURIComponent(
      `Hello Hasamex Team,\n\nPlease find my submission details below:\n\n${lines.join(
        '\n'
      )}\n\nConsent to communications: ${values.consent ? 'Yes' : 'No'}\n`
    );
    setPreviewState({
      mailtoUrl: `mailto:${config.recipientEmail}?subject=${subject}&body=${body}`,
      summaryLines: lines
    });
  };

  return (
    <div className="form-shell">
      <div className="draft-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <Icon name="alert" size={18} />
          <span>
            <strong>Static Frontend Preview:</strong> All existing {config.title} fields are
            preserved. Backend/CRM form webhook integration is pending confirmation—submitting
            prepares a direct email dispatch or opens the live form.
          </span>
        </div>
        <a
          href={`mailto:${config.recipientEmail}`}
          style={{
            color: 'var(--gold)',
            fontWeight: 600,
            textDecoration: 'underline',
            whiteSpace: 'nowrap'
          }}
        >
          {config.recipientEmail}
        </a>
      </div>

      <div style={{ marginBottom: '1.75rem' }}>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {config.badge}
        </span>
        <h3 style={{ fontSize: '1.65rem', marginTop: '0.75rem', marginBottom: '0.4rem' }}>
          {config.title}
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{config.subtitle}</p>
      </div>

      {previewState ? (
        <div
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--gold-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.6rem'
          }}
          role="status"
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--gold)',
              fontWeight: 600,
              fontSize: '0.85rem',
              marginBottom: '0.6rem'
            }}
          >
            <Icon name="check" size={17} />
            Form Entry Validated (Static Frontend Draft)
          </div>
          <p style={{ color: 'var(--text-primary)', fontWeight: 500, marginBottom: '0.5rem' }}>
            {config.successPreviewNote}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '1.1rem' }}>
            Because this preview build is a static frontend without a connected database, your
            entry has not been stored on a server yet. You can dispatch these exact details right
            now via email or open the existing live Softr form:
          </p>
          <div
            style={{
              background: 'rgba(0,0,0,0.35)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '0.9rem 1rem',
              fontSize: '0.83rem',
              color: 'var(--text-secondary)',
              marginBottom: '1.25rem'
            }}
          >
            {previewState.summaryLines.map((line) => (
              <div key={line} style={{ marginBottom: '0.25rem' }}>
                {line}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href={previewState.mailtoUrl} className="btn btn--gold">
              <Icon name="mail" size={16} />
              Send via {config.recipientEmail}
            </a>
            <a
              href={config.liveFallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--glass"
            >
              Open Live Form on hasamex.com
              <Icon name="arrow-up-right" size={16} />
            </a>
            <button
              type="button"
              className="btn btn--charcoal"
              onClick={() => setPreviewState(null)}
            >
              Edit Fields
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            {config.fields.map((field) => (
              <div
                key={field.name}
                className={`form-field ${field.half ? '' : 'form-field--full'}`}
              >
                <label className="form-label" htmlFor={`${config.id}-${field.name}`}>
                  {field.label} {field.required && <span>*</span>}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={`${config.id}-${field.name}`}
                    className="form-textarea"
                    placeholder={field.placeholder}
                    required={field.required}
                    value={values[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                ) : field.type === 'file' ? (
                  <input
                    id={`${config.id}-${field.name}`}
                    type="file"
                    className="form-input"
                    accept=".pdf,.doc,.docx"
                    required={field.required}
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name || '')
                    }
                  />
                ) : (
                  <input
                    id={`${config.id}-${field.name}`}
                    type={field.type}
                    className="form-input"
                    placeholder={field.placeholder}
                    required={field.required}
                    value={values[field.name]}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: '1.25rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.65rem',
              fontSize: '0.88rem',
              color: 'var(--text-secondary)'
            }}
          >
            <input
              id={`${config.id}-consent`}
              type="checkbox"
              required
              checked={values.consent}
              onChange={(e) => handleChange('consent', e.target.checked)}
              style={{ marginTop: '0.28rem', accentColor: 'var(--gold)' }}
            />
            <label htmlFor={`${config.id}-consent`}>
              {config.consentLabel} <span style={{ color: 'var(--gold)' }}>*</span>
            </label>
          </div>

          {config.disclaimer && (
            <p
              style={{
                marginTop: '0.65rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)'
              }}
            >
              {config.disclaimer}{' '}
              <Link to="/privacy" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
                Privacy Policy
              </Link>
              .
            </p>
          )}

          <div
            style={{
              marginTop: '1.6rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <button type="submit" className="btn btn--gold">
              {config.submitLabel}
              <Icon name="arrow-right" size={16} />
            </button>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Direct email alternative:{' '}
              <a
                href={`mailto:${config.recipientEmail}`}
                style={{ color: 'var(--text-primary)', textDecoration: 'underline' }}
              >
                {config.recipientEmail}
              </a>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
