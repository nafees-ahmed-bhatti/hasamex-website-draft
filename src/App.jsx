import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { ClientsPage } from './pages/ClientsPage';
import { CompliancePage } from './pages/CompliancePage';
import { ContactPage } from './pages/ContactPage';
import { ExpertsPage } from './pages/ExpertsPage';
import { HomePage } from './pages/HomePage';
import { LegalPage } from './pages/LegalPage';
import { TeamPage } from './pages/TeamPage';

function NotFoundPage() {
  return (
    <Layout>
      <section className="hero" style={{ minHeight: '62vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: 640 }}>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            404 · Page Not Found
          </span>
          <h1 style={{ marginTop: '1rem', marginBottom: '0.85rem' }}>
            We couldn’t find that page
          </h1>
          <p className="lead" style={{ marginBottom: '2rem' }}>
            Explore Hasamex’s client services, expert network, compliance framework, or contact our
            team directly.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--gold">
              Return Home
            </Link>
            <Link to="/clients" className="btn btn--glass">
              Client Services
            </Link>
            <Link to="/contact-us" className="btn btn--charcoal">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/experts" element={<ExpertsPage />} />
      <Route path="/compliance" element={<CompliancePage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/about-us" element={<AboutPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact-us" element={<ContactPage />} />
      <Route path="/terms" element={<LegalPage slug="terms" />} />
      <Route path="/code-of-conduct" element={<LegalPage slug="code-of-conduct" />} />
      <Route path="/privacy" element={<LegalPage slug="privacy" />} />
      <Route path="/cookies" element={<LegalPage slug="cookies" />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
