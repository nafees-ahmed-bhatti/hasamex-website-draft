import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { BRAND, FOOTER_COLUMNS, NAV_LINKS } from '../content/siteData';
import { Icon } from './Icons';

export function ScrollRestoration() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
}

export function PreFooterCTA({
  eyebrow = 'Global Expert Network',
  title = 'Looking for Trusted Insight? Or Ready to Share Yours?',
  subtitle = 'Whether you need fast, compliant access to experts—or want to join our network—Hasamex makes it easy to get started.',
  primaryLabel = 'Become a Client',
  primaryTo = '/clients#enquiry-form',
  secondaryLabel = 'Join as an Expert',
  secondaryTo = '/experts#register-form',
  tertiaryLabel = 'Contact Us',
  tertiaryTo = '/contact-us'
}) {
  return (
    <section className="pre-footer">
      <div className="container" style={{ textAlign: 'center', maxWidth: 820 }}>
        <span className="eyebrow">
          <span className="eyebrow-dot" />
          {eyebrow}
        </span>
        <h2 style={{ marginTop: '1.1rem', marginBottom: '1rem' }}>{title}</h2>
        <p className="lead" style={{ maxWidth: 640, margin: '0 auto 2.1rem' }}>
          {subtitle}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.85rem'
          }}
        >
          <Link to={primaryTo} className="btn btn--gold">
            {primaryLabel}
            <Icon name="arrow-right" size={16} />
          </Link>
          <Link to={secondaryTo} className="btn btn--glass">
            {secondaryLabel}
          </Link>
          {tertiaryLabel && (
            <Link to={tertiaryTo} className="btn btn--charcoal">
              {tertiaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export function Layout({ children, showPreFooter = true, preFooterProps = {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <ScrollRestoration />
      <header className="site-header">
        <div className="container site-header__inner">
          <Link to="/" className="brand-lockup" aria-label="Hasamex Home">
            <img
              src="/brand/hasamex-emblem-dark.png"
              alt="Hasamex Emblem"
              className="brand-lockup__emblem"
            />
            <img
              src="/brand/hasamex-wordmark-white.png"
              alt="Hasamex"
              className="brand-lockup__wordmark"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `nav-pill ${isActive ? 'nav-pill--active' : ''}`
                }
              >
                {item.label}
                {item.badge && <span className="nav-pill__badge">{item.badge}</span>}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <Link
              to="/clients#enquiry-form"
              className="btn btn--glass btn--sm"
              style={{ display: 'none' }}
              id="header-client-btn"
            >
              Request Expert
            </Link>
            <Link to="/contact-us" className="btn btn--charcoal btn--sm">
              Contact Us
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="mobile-overlay__top">
              <Link
                to="/"
                className="brand-lockup"
                onClick={() => setMobileMenuOpen(false)}
              >
                <img
                  src="/brand/hasamex-emblem-dark.png"
                  alt="Hasamex Emblem"
                  className="brand-lockup__emblem"
                />
                <img
                  src="/brand/hasamex-wordmark-white.png"
                  alt="Hasamex"
                  className="brand-lockup__wordmark"
                />
              </Link>
              <button
                type="button"
                className="menu-toggle"
                aria-label="Close navigation menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <nav className="mobile-overlay__links" aria-label="Mobile Links">
              {[...NAV_LINKS, { label: 'Contact Us', path: '/contact-us' }].map(
                (item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `mobile-overlay__link ${
                        isActive ? 'mobile-overlay__link--active' : ''
                      }`
                    }
                  >
                    <span>
                      {item.label}{' '}
                      {item.badge && (
                        <span
                          className="nav-pill__badge"
                          style={{ verticalAlign: 'middle', marginLeft: 8 }}
                        >
                          {item.badge}
                        </span>
                      )}
                    </span>
                    <Icon name="arrow-right" size={20} />
                  </NavLink>
                )
              )}
            </nav>

            <div className="mobile-overlay__footer">
              <Link
                to="/experts#register-form"
                className="btn btn--glass"
                style={{ width: '100%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Join as an Expert
              </Link>
              <Link
                to="/clients#enquiry-form"
                className="btn btn--gold"
                style={{ width: '100%' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Become a Client
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>{children}</main>

      {showPreFooter && <PreFooterCTA {...preFooterProps} />}

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link to="/" className="brand-lockup" style={{ marginBottom: '0.85rem' }}>
                <img
                  src="/brand/hasamex-emblem-dark.png"
                  alt="Hasamex Emblem"
                  className="brand-lockup__emblem"
                />
                <img
                  src="/brand/hasamex-wordmark-white.png"
                  alt="Hasamex"
                  className="brand-lockup__wordmark"
                />
              </Link>
              <p
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: 500,
                  marginBottom: '0.5rem'
                }}
              >
                {BRAND.footerTagline}
              </p>
              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--text-muted)',
                  maxWidth: 300,
                  marginBottom: '1.15rem'
                }}
              >
                {BRAND.address}
              </p>
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                <a
                  href={BRAND.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--glass btn--sm"
                  aria-label="Hasamex on LinkedIn"
                >
                  <Icon name="linkedin" size={15} />
                  LinkedIn
                </a>
                <a
                  href={`mailto:${BRAND.emails.general}`}
                  className="btn btn--glass btn--sm"
                >
                  <Icon name="mail" size={15} />
                  {BRAND.emails.general}
                </a>
              </div>
            </div>

            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="footer-col-title">{col.title}</div>
                <ul className="footer-links">
                  {col.links.map((lnk) => (
                    <li key={lnk.path + lnk.label}>
                      <Link to={lnk.path}>{lnk.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-bottom">
            <div>{BRAND.copyright}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
              <Link to="/about-us">About us</Link>
              <Link to="/terms">Terms of Use</Link>
              <Link to="/code-of-conduct">Code of Conduct</Link>
              <Link to="/privacy">Privacy</Link>
              <Link to="/cookies">Cookies Policy</Link>
              <Link to="/contact-us">Contact us</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
