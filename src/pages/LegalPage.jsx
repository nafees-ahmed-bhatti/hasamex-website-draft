import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_PAGES } from '../content/legalData';
import { Icon } from '../components/Icons';
import { Layout } from '../components/Layout';

const POLICY_TABS = [
  { slug: 'terms', label: 'Expert Terms & Conditions', path: '/terms' },
  { slug: 'code-of-conduct', label: 'Code of Conduct', path: '/code-of-conduct' },
  { slug: 'privacy', label: 'Privacy Policy', path: '/privacy' },
  { slug: 'cookies', label: 'Cookies Policy', path: '/cookies' }
];

export function LegalPage({ slug }) {
  const doc = LEGAL_PAGES[slug];
  const [tocQuery, setTocQuery] = useState('');

  if (!doc) return null;

  const filteredToc = doc.toc.filter((item) =>
    item.label.toLowerCase().includes(tocQuery.toLowerCase())
  );

  return (
    <Layout>
      <section className="hero" style={{ paddingBottom: '3.25rem' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.45rem',
              marginBottom: '1.75rem'
            }}
          >
            {POLICY_TABS.map((tab) => (
              <Link
                key={tab.slug}
                to={tab.path}
                className={`btn btn--sm ${
                  tab.slug === slug ? 'btn--gold' : 'btn--glass'
                }`}
              >
                {tab.label}
              </Link>
            ))}
          </div>

          <span className="eyebrow">
            <span className="eyebrow-dot" />
            Last updated: {doc.updated}
          </span>
          <h1 style={{ marginTop: '0.95rem', marginBottom: '0.75rem' }}>{doc.title}</h1>
          <p className="lead" style={{ maxWidth: 720 }}>
            {doc.subtitle}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {doc.flags && doc.flags.length > 0 && (
            <div className="draft-banner" style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <span style={{ marginTop: 2 }}>
                  <Icon name="alert" size={18} />
                </span>
                <div>
                  <strong>Content Verification Flag for Leadership Review:</strong>
                  <ul style={{ marginTop: '0.35rem', paddingLeft: '1.2rem' }}>
                    {doc.flags.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <div className="legal-layout">
            <aside className="legal-toc" aria-label="Document Sections">
              <div
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--gold)',
                  marginBottom: '0.6rem'
                }}
              >
                Contents ({doc.toc.length} Sections)
              </div>
              {doc.toc.length > 10 && (
                <input
                  type="search"
                  className="form-input"
                  style={{ padding: '0.45rem 0.7rem', fontSize: '0.8rem' }}
                  placeholder="Filter sections..."
                  value={tocQuery}
                  onChange={(e) => setTocQuery(e.target.value)}
                />
              )}
              <nav className="legal-toc__list">
                {filteredToc.map((sec) => (
                  <a key={sec.id} href={`#${sec.id}`} className="legal-toc__link">
                    {sec.label}
                  </a>
                ))}
              </nav>
            </aside>

            <article
              className="legal-prose"
              dangerouslySetInnerHTML={{ __html: doc.html }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
