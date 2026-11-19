import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LEGAL_PAGES } from '../content/legalData';
import { Icon } from '../components/Icons';
import { Layout } from '../components/Layout';
import { AnimatedHeading } from '../components/Reveal';

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
      <section className="hero" style={{ paddingBottom: '1.65rem' }}>
        <div className="container">
          <div className="legal-policy-switcher" role="navigation" aria-label="Governance Policies">
            {POLICY_TABS.map((tab) => (
              <Link
                key={tab.slug}
                to={tab.path}
                className={`btn btn--sm ${
                  tab.slug === slug ? 'btn--primary' : 'btn--glass'
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
          <AnimatedHeading
            as="h1"
            text={doc.title}
            style={{ marginTop: '0.65rem', marginBottom: '0.5rem' }}
          />
          <p className="lead" style={{ maxWidth: 680 }}>
            {doc.subtitle}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {doc.flags && doc.flags.length > 0 && (
            <div className="draft-banner" style={{ marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <span style={{ marginTop: 2 }}>
                  <Icon name="alert" size={17} />
                </span>
                <div>
                  <strong>Content Verification Flag for Leadership Review:</strong>
                  <ul style={{ marginTop: '0.3rem', paddingLeft: '1.15rem' }}>
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
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--hub-navy)',
                  marginBottom: '0.55rem'
                }}
              >
                Contents ({doc.toc.length} Sections)
              </div>
              {doc.toc.length > 10 && (
                <input
                  type="search"
                  className="form-input"
                  style={{ padding: '0.4rem 0.65rem', fontSize: '0.78rem' }}
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
