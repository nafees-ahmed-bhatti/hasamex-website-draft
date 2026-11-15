import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  EXPERT_FAQS,
  EXPERTS_CATEGORIES,
  EXPERTS_PROMISES,
  FORM_CONFIGS
} from '../content/siteData';
import { Icon } from '../components/Icons';
import { IntakeForm } from '../components/IntakeForm';
import { Layout } from '../components/Layout';
import { AnimatedHeading, Reveal } from '../components/Reveal';

export function ExpertsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [faqCategory, setFaqCategory] = useState('All');
  const prefersReducedMotion = useReducedMotion();

  const categories = ['All', ...Array.from(new Set(EXPERT_FAQS.map((f) => f.category)))];
  const filteredFaqs =
    faqCategory === 'All'
      ? EXPERT_FAQS
      : EXPERT_FAQS.filter((f) => f.category === faqCategory);

  return (
    <Layout
      preFooterProps={{
        eyebrow: 'Hasamex Intelligence Network',
        title: 'Share Your Insight With Global Decision-Makers',
        subtitle:
          'Complete our short onboarding form above or review our Expert Terms & Conditions and Code of Conduct.',
        primaryLabel: 'Register as an Expert',
        primaryTo: '/experts#register-form',
        secondaryLabel: 'Read Expert T&Cs',
        secondaryTo: '/terms'
      }}
    >
      {/* HERO */}
      <section className="hero">
        <div className="container" style={{ maxWidth: 880 }}>
          <Reveal blur y={16}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              For Subject Matter Experts
            </span>
            <AnimatedHeading
              as="h1"
              text="The Hasamex Intelligence Network"
              style={{ marginTop: '0.9rem', marginBottom: '1rem' }}
            />
            <p className="lead" style={{ maxWidth: 640 }}>
              Join a global community of trusted experts across industries — built on relevance,
              respect, and guaranteed 14-day honorarium payouts.
            </p>
            <div className="hero-ctas">
              <a href="#register-form" className="btn btn--primary">
                Register as an Expert
                <Icon name="arrow-right" size={15} />
              </a>
              <a href="#why-join" className="btn btn--glass">
                Learn More
              </a>
              <a href="#faqs" className="btn btn--charcoal">
                Expert FAQs
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESIGNED WITH EXPERTS IN MIND */}
      <section id="why-join" className="section">
        <div className="container">
          <div className="section-header--split">
            <Reveal style={{ maxWidth: 650 }}>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Expert Value Proposition
              </span>
              <AnimatedHeading
                as="h2"
                text="Designed with Experts in Mind"
                style={{ marginTop: '0.75rem', marginBottom: '0.65rem' }}
              />
              <p className="lead" style={{ marginBottom: '0.8rem' }}>
                The Hasamex Intelligence Network is a curated community of professionals who share
                insight with global investors, consultants, and corporate leaders. Whether through
                expert calls, meetings, transcripts, or roundtables—our experts shape smarter
                decisions across sectors and regions.
              </p>
              <p className="lead">
                We’re not just solving for clients—we’re solving for experts too, with a model
                built on relevance, respect, and reliability.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <a href="#register-form" className="btn btn--primary">
                Register Now
                <Icon name="arrow-right" size={15} />
              </a>
            </Reveal>
          </div>

          <div className="grid-4">
            {EXPERTS_PROMISES.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.045} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{item.number}</span>
                    <span style={{ color: 'var(--color-accent)' }}>
                      <Icon name="check" size={16} />
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO POWERS THE NETWORK */}
      <section id="categories" className="section section--ivory">
        <div className="container">
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Network Composition
            </span>
            <AnimatedHeading as="h2" text="Who Powers the Hasamex Intelligence Network" />
            <p className="lead">
              A global community of experts with real-world experience—driving primary insight.
            </p>
          </Reveal>

          <div className="grid-3">
            {EXPERTS_CATEGORIES.map((cat, idx) => (
              <Reveal key={cat.code} delay={idx * 0.045} className="card">
                <div>
                  <div className="card-top">
                    <span className="card-index">{cat.code}</span>
                    <span style={{ color: 'var(--color-accent)' }}>
                      <Icon name="users" size={16} />
                    </span>
                  </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT FAQS ACCORDION */}
      <section id="faqs" className="section section--elevated">
        <div className="container" style={{ maxWidth: 920 }}>
          <Reveal className="section-header">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Questions We Hear Most
            </span>
            <AnimatedHeading as="h2" text="Expert FAQs" />
            <p className="lead">
              Clear answers to common questions about joining, engaging, and getting paid with
              Hasamex.
            </p>
          </Reveal>

          {/* Category Filter Pills */}
          <div className="tab-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`tab-btn ${faqCategory === cat ? 'tab-btn--active' : ''}`}
                onClick={() => {
                  setFaqCategory(cat);
                  setOpenFaqIndex(0);
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="faq-list" role="region" aria-label="Frequently Asked Questions">
            {filteredFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                >
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                  >
                    <span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.74rem',
                          color: 'var(--color-accent)',
                          fontWeight: 700,
                          marginRight: '0.7rem'
                        }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {faq.question}
                    </span>
                    <span className="faq-icon">
                      <Icon name="plus" size={15} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="faq-body">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERT REGISTRATION FORM */}
      <section id="register-form" className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <Reveal>
            <IntakeForm config={FORM_CONFIGS.expert} />
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
