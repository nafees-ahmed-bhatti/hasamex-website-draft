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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          <Icon name="alert" size={16} />
          <span>
            <strong>Static Frontend Preview:</strong> All {config.title} fields are preserved.
            Submitting prepares a direct email dispatch or opens the live form.
          </span>
        </div>
        <a href={`mailto:${config.recipientEmail}`} className="email-plain-link">
          {config.recipientEmail}
        </a>
      </div>

      <div style={{ marginBottom: '1.15rem' }}>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {config.badge}
        </span>
        <h3
          style={{
            fontSize: '1.32rem',
            marginTop: '0.55rem',
            marginBottom: '0.25rem',
            color: 'var(--color-text-primary)'
          }}
        >
          {config.title}
        </h3>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.86rem' }}>
          {config.subtitle}
        </p>
      </div>

      {previewState ? (
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.35rem'
          }}
          role="status"
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              color: 'var(--color-success)',
              fontWeight: 600,
              fontSize: '0.82rem',
              marginBottom: '0.45rem'
            }}
          >
            <Icon name="check" size={16} />
            Form Entry Validated (Static Frontend Draft)
          </div>
          <p
            style={{
              color: 'var(--color-text-primary)',
              fontWeight: 600,
              marginBottom: '0.4rem'
            }}
          >
            {config.successPreviewNote}
          </p>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '0.84rem',
              marginBottom: '0.9rem'
            }}
          >
            Because this preview build is a static frontend without a connected database, your
            entry has not been stored on a server yet. You can dispatch these exact details right
            now via email or open the existing live Softr form:
          </p>
          <div
            style={{
              background: '#ffffff',
              border: '1px solid var(--hasamex-border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '0.8rem 0.95rem',
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              marginBottom: '1rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {previewState.summaryLines.map((line) => (
              <div key={line} style={{ marginBottom: '0.18rem' }}>
                {line}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            <a href={previewState.mailtoUrl} className="btn btn--primary">
              <Icon name="mail" size={15} />
              Send via {config.recipientEmail}
            </a>
            <a
              href={config.liveFallbackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--glass"
            >
              Open Live Form on hasamex.com
              <Icon name="arrow-up-right" size={15} />
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
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
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
              marginTop: '0.95rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.55rem',
              fontSize: '0.83rem',
              color: 'var(--color-text-secondary)'
            }}
          >
            <input
              id={`${config.id}-consent`}
              type="checkbox"
              required
              checked={values.consent}
              onChange={(e) => handleChange('consent', e.target.checked)}
              style={{ marginTop: '0.24rem', accentColor: 'var(--hub-navy)' }}
            />
            <label htmlFor={`${config.id}-consent`}>
              {config.consentLabel} <span style={{ color: '#dc2626' }}>*</span>
            </label>
          </div>

          {config.disclaimer && (
            <p
              style={{
                marginTop: '0.5rem',
                fontSize: '0.76rem',
                color: 'var(--color-text-muted)'
              }}
            >
              {config.disclaimer}{' '}
              <Link
                to="/privacy"
                style={{ color: 'var(--hub-navy)', fontWeight: 600, textDecoration: 'underline' }}
              >
                Privacy Policy
              </Link>
              .
            </p>
          )}

          <div
            style={{
              marginTop: '1.15rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem'
            }}
          >
            <button type="submit" className="btn btn--primary">
              {config.submitLabel}
              <Icon name="arrow-right" size={15} />
            </button>
            <span style={{ fontSize: '0.76rem', color: 'var(--color-text-muted)' }}>
              Direct email alternative:{' '}
              <a href={`mailto:${config.recipientEmail}`} className="email-plain-link">
                {config.recipientEmail}
              </a>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
