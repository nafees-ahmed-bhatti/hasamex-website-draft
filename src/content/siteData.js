export const BRAND = {
  name: 'Hasamex',
  legalName: 'Hasamex Pte Ltd',
  uen: '202526952W',
  tagline: 'Expert Intelligence, Redefined',
  footerTagline: 'Expert Intelligence Redefined',
  copyright: 'Copyright © 2025 Hasamex Pte Ltd (UEN 202526952W). All rights reserved.',
  address: '160 Robinson Road, #14-04, Singapore Business Federation Center, Singapore 068914',
  footprint: 'Headquartered in Singapore, with a distributed team across India and beyond',
  emails: {
    general: 'info@hasamex.com',
    compliance: 'compliance@hasamex.com',
    careers: 'careers@hasamex.com',
    privacy: 'privacy@hasamex.com'
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/hasamex/'
  },
  liveSiteUrl: 'https://www.hasamex.com'
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Clients', path: '/clients' },
  { label: 'Experts', path: '/experts' },
  { label: 'Compliance', path: '/compliance' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Team', path: '/team', badge: 'New' },
  { label: 'Careers', path: '/careers' }
];

export const FOOTER_COLUMNS = [
  {
    title: 'Clients',
    links: [
      { label: 'Client Services', path: '/clients' },
      { label: 'Service Model', path: '/clients#service-model' },
      { label: 'Engagement Formats', path: '/clients#formats' },
      { label: 'Global Markets Coverage', path: '/clients#markets' },
      { label: 'Start a Project', path: '/clients#enquiry-form' }
    ]
  },
  {
    title: 'Experts',
    links: [
      { label: 'Intelligence Network', path: '/experts' },
      { label: 'Why Join Hasamex', path: '/experts#why-join' },
      { label: 'Expert Categories', path: '/experts#categories' },
      { label: 'Expert FAQs', path: '/experts#faqs' },
      { label: 'Register as an Expert', path: '/experts#register-form' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about-us' },
      { label: 'Leadership & Team', path: '/team' },
      { label: 'Careers', path: '/careers' },
      { label: 'Contact Us', path: '/contact-us' }
    ]
  },
  {
    title: 'Compliance & Legal',
    links: [
      { label: 'Compliance Framework', path: '/compliance' },
      { label: 'Expert Terms & Conditions', path: '/terms' },
      { label: 'Code of Conduct', path: '/code-of-conduct' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Cookies Policy', path: '/cookies' }
    ]
  }
];

export const HERO_SHOWCASE_BRIEFS = [
  {
    id: 'stage-sourcing',
    index: '01',
    tabLabel: '01 · Custom Sourcing',
    format: 'Phase 01 · Brief Intake & Custom Recruiting',
    status: '2–12 Hour Typical Turnaround',
    region: 'DM · EM · FM Coverage',
    title: 'Precision-Sourced Operators — Built Around Your Exact Research Brief',
    audience: 'Investment Firms · Strategy Consultancies · Corporate Teams',
    expertRole: 'Former CxOs, BU Heads, Sector Operators & Policy Advisors (HIN)',
    streamText:
      'Calibrating research scope → Custom-headhunting senior practitioners across Developed, Emerging & Frontier markets → Enriching profiles with proprietary AI verification tools.',
    checkpoints: [
      'Handpicked custom recruitment per brief (beyond static databases)',
      'Target-market alignment across U.S., Europe, APAC, India & MENA',
      'Curated screening responses matched to exact client questions'
    ],
    deliverable: 'Vetted expert profiles delivered in 2–12 hours'
  },
  {
    id: 'stage-compliance',
    index: '02',
    tabLabel: '02 · Compliance Gate',
    format: 'Phase 02 · 5-Point Compliance & MNPI Vetting',
    status: '100% Pre-Call Cleared',
    region: 'Global Governance Protocol',
    title: 'Zero-Tolerance MNPI Safeguards & Conflict-of-Interest Screening',
    audience: 'Institutional Compliance & Legal Risk Standards',
    expertRole: 'Mandatory HIN Terms, Code of Conduct & Insider Trading Policy Consent',
    streamText:
      'Verifying employment restrictions & cooling-off rules → Enforcing strict zero-MNPI firewall → Confirming blind need-to-know client anonymity & anti-corruption clearance.',
    checkpoints: [
      'Affirmative acceptance of Expert T&Cs and Code of Conduct',
      'Employer conflict, IPO/M&A & public-official cooling-off checks',
      'Strict ban on real-time AI/LLM usage during live consultations'
    ],
    deliverable: 'Pre-engagement compliance clearance + full audit log'
  },
  {
    id: 'stage-execution',
    index: '03',
    tabLabel: '03 · Live Execution',
    format: 'Phase 03 · Recorded Consultation & 14-Day Payout',
    status: 'Auditable End-to-End Delivery',
    region: '6 Flexible Engagement Formats',
    title: '1:1 Calls, Roundtables, In-Person Meetings & Custom Transcripts',
    audience: 'White-Glove Coordination · Singapore HQ & India Execution',
    expertRole: 'Monitored MS Teams Line · Verbatim Transcripts · ≤ 14-Day Expert Payout',
    streamText:
      'Hosting recorded consultation on monitored Hasamex line → Delivering high-signal primary insight → Processing guaranteed expert honorarium within 14 days.',
    checkpoints: [
      'All calls recorded, securely stored, and auditable for compliance',
      'Support for 1:1 Calls, Roundtables, Knowledge Tours & Transcripts',
      'Guaranteed expert compensation within 14 days — zero delays'
    ],
    deliverable: 'Recorded consultation + guaranteed ≤14-day settlement'
  }
];

export const MARQUEE_ITEMS = [
  'Hasamex Pte Ltd · Singapore HQ (UEN 202526952W)',
  '2–12 Hour Typical Delivery',
  '100% Recorded & Auditable Calls',
  'Zero-Tolerance MNPI Safeguards',
  'Developed · Emerging · Frontier Markets',
  '1:1 Expert Calls & Moderated Roundtables',
  'Knowledge Tours & Conference Augmentation',
  'Advisor-Led Custom Transcripts',
  'Guaranteed ≤ 14-Day Expert Payouts',
  'Hasamex Intelligence Network (HIN)'
];

export const HOW_HASAMEX_CONNECTS = [
  {
    step: '01',
    phase: 'Brief Intake & Scope Calibration',
    title: 'Define the Exact Knowledge Gap',
    description:
      'Clients share their research objectives, target geographies, value-chain questions, and preferred engagement format (1:1 call, roundtable, in-person meeting, knowledge tour, or transcript). Our Singapore and India research teams calibrate the brief immediately.'
  },
  {
    step: '02',
    phase: 'Custom Recruiting & AI Enrichment',
    title: 'Handpick Senior Operators Within 2–12 Hours',
    description:
      'Rather than recycling generic database profiles, Hasamex custom-sources former CxOs, BU heads, commercial operators, technologists, and policy specialists from the Hasamex Intelligence Network (HIN), enriched with proprietary AI matching tools.'
  },
  {
    step: '03',
    phase: '5-Point Compliance & Conflict Clearance',
    title: 'Enforce Investment-Grade MNPI Safeguards',
    description:
      'Before any introduction is scheduled, every expert completes mandatory vetting, employer conflict screening, cooling-off verification, and affirmative consent to Hasamex’s Terms & Conditions, Code of Conduct, and Insider Trading Policy.'
  },
  {
    step: '04',
    phase: 'Monitored Consultation & 14-Day Settlement',
    title: 'Deliver High-Signal Insight & Prompt Honoraria',
    description:
      'Consultations take place on recorded, auditable lines with need-to-know client anonymity. Clients receive actionable primary intelligence, and participating experts are guaranteed full payment within 14 days.'
  }
];

export const VERIFIED_BENCHMARKS = [
  {
    metric: '2–12 hrs',
    label: 'Speed With Precision',
    detail: 'Most projects are delivered in 2–12 hours without compromising on vetting or compliance.'
  },
  {
    metric: '≤ 14 Days',
    label: 'Guaranteed Expert Payouts',
    detail: 'Experts are paid within 14 days of completing any engagement—no delays, no chasing updates.'
  },
  {
    metric: 'DM · EM · FM',
    label: 'Global Market Coverage',
    detail: 'Local operator reach across Developed, Emerging, and Frontier markets worldwide.'
  },
  {
    metric: '100% Auditable',
    label: 'Zero-Tolerance MNPI Controls',
    detail: 'Every expert is vetted, every call is recorded, and every project follows strict global compliance protocols.'
  }
];

export const HOME_FORMATS = [
  {
    id: 'expert-calls',
    number: '01',
    title: '1:1 Expert Calls',
    shortDesc: 'Real-time conversations with vetted professionals.',
    clientsDesc: 'Speak 1-on-1 with vetted operators and domain experts.',
    tag: 'Real-Time Diligence',
    icon: 'phone'
  },
  {
    id: 'in-person',
    number: '02',
    title: 'In-Person Meetings',
    shortDesc: 'Deep-dive discussions tailored to your location and schedule.',
    clientsDesc: 'One-on-one, face-to-face sessions with subject-matter experts.',
    tag: 'On-Location Depth',
    icon: 'users'
  },
  {
    id: 'roundtables',
    number: '03',
    title: 'Roundtables',
    shortDesc: 'Moderated group insight on key themes or market trends.',
    clientsDesc: 'Moderated, multi-expert discussions designed to bring together like-minded peers around key themes and trends.',
    tag: 'Multi-Expert Synthesis',
    icon: 'grid'
  },
  {
    id: 'knowledge-tours',
    number: '04',
    title: 'Knowledge Tours',
    shortDesc: 'Curated expert visits for on-ground learning.',
    clientsDesc: 'Curated itineraries of expert and site visits designed to give clients firsthand perspective on industries, operations, and local market dynamics.',
    tag: 'Field Immersion',
    icon: 'compass'
  },
  {
    id: 'conference',
    number: '05',
    title: 'Conference Augmentation',
    shortDesc: 'Add targeted expert context to your event schedules.',
    clientsDesc: 'Supplement your event calendar with targeted expert 1:1s and small-group meetings—before, during, or after key industry conferences.',
    tag: 'Event Intelligence',
    icon: 'calendar'
  },
  {
    id: 'transcripts',
    number: '06',
    title: 'Custom Transcripts',
    shortDesc: 'Access advisor-led interviews for high-signal, high-context insight.',
    clientsDesc: 'A curated archive of advisor-led expert interviews, delivering authentic, first-hand primary research across sectors, geographies, and themes.',
    tag: 'Advisor-Led Archive',
    icon: 'document'
  }
];

export const WHY_CHOOSE_HASAMEX = [
  {
    number: '01',
    title: 'White-Glove Premium Service',
    description: 'From brief intake to post-call delivery, we manage every detail with precision.',
    highlight: 'Dedicated End-to-End Execution'
  },
  {
    number: '02',
    title: 'Quality with Speed',
    description: 'We move fast—but never at the cost of quality or depth.',
    highlight: '2–12 Hour Typical Delivery'
  },
  {
    number: '03',
    title: 'Built-In Compliance',
    description: 'Industry-leading safeguards for MNPI, confidentiality, and expert integrity.',
    highlight: 'Investment-Grade Safeguards'
  },
  {
    number: '04',
    title: 'Tailored Sourcing',
    description: 'We start with a strong base—and custom-source to match every brief precisely.',
    highlight: 'Custom Recruited Per Brief'
  }
];

export const HOME_EXPERT_ARCHETYPES = [
  {
    code: 'EX-01',
    title: 'Former CxOs & BU Heads',
    detail: 'Strategic decision-makers who have led teams, shaped markets, and driven P&L transformation.'
  },
  {
    code: 'EX-02',
    title: 'Sector Operators',
    detail: 'Hands-on commercial, supply chain, and operational leaders with on-the-ground execution experience.'
  },
  {
    code: 'EX-03',
    title: 'Technologists / Health Care Specialists',
    detail: 'Deep technical architects, clinical specialists, and R&D practitioners across regulated verticals.'
  },
  {
    code: 'EX-04',
    title: 'Policy Advisors & Channel Experts',
    detail: 'Specialists with firsthand perspective on regulatory frameworks, distribution dynamics, and market access.'
  },
  {
    code: 'EX-05',
    title: 'Researchers & Academics',
    detail: 'Analytical thinkers bringing structured methodology and peer-reviewed depth to complex questions.'
  }
];

export const CLIENT_AUDIENCES = [
  {
    id: 'investment',
    label: 'Investment Firms',
    clientsPageTitle: 'Investment Teams',
    headline: 'High-conviction primary diligence for institutional capital.',
    homeDescription: 'Hedge funds, long-onlys, and private equity teams conducting diligence and thematic research.',
    clientsDescription: 'Hedge funds, asset managers, private equity, venture capital, family offices.',
    workflows: [
      'Commercial due diligence & value-creation thesis validation',
      'Thematic sector mapping across Developed, Emerging & Frontier markets',
      'Strict MNPI firewall, cooling-off verification & full audit trail'
    ],
    quote: {
      text: 'Hasamex managed compliance without slowing down delivery. It felt built for high-stakes work.',
      author: 'Partner, PE Firm, Singapore'
    }
  },
  {
    id: 'consulting',
    label: 'Consulting Firms',
    clientsPageTitle: 'Consulting Firms',
    headline: 'Rapid, custom-vetted operator access for case teams on tight timelines.',
    homeDescription: 'Strategy consultants, boutique firms, and analysts driving faster project execution.',
    clientsDescription: 'Strategy, due diligence, and market mapping support.',
    workflows: [
      '2–12 hour turnaround on niche B2B and industrial profiles',
      'Moderated peer roundtables and advisor-led transcript synthesis',
      'Dedicated brief calibration to eliminate off-target calls'
    ],
    quote: {
      text: 'We’ve worked with several expert networks, but Hasamex stands out for how seriously they take compliance and professionalism. They move fast, but never cut corners.',
      author: 'Partner at a Global Consulting Firm'
    }
  },
  {
    id: 'corporate',
    label: 'Corporate & Strategy Teams',
    clientsPageTitle: 'Enterprises & Startups',
    headline: 'Operational benchmarks and local market clarity for strategic leaders.',
    homeDescription: 'Leaders seeking market clarity, operational benchmarks, and external viewpoints.',
    clientsDescription: 'Corporates & Strategy teams for market entry, product feedback, competitor intel.',
    workflows: [
      'Cross-border market entry & regulatory feasibility assessments',
      'Customer channel behavior, pricing architecture & product feedback',
      'Curated on-ground Knowledge Tours and conference augmentation'
    ],
    quote: {
      text: 'Impressed by the quality of experts and the team’s precision. Easily one of the best expert networks I’ve worked with.',
      author: 'Investment Analyst, Hedge Fund, London'
    }
  }
];

export const HOME_COMPLIANCE_CARDS = [
  {
    badge: 'Framework',
    title: 'Compliance Program',
    description: 'Our compliance program is guided by international best practices and enhanced by proprietary AI-driven protections.',
    ctaLabel: 'Explore our Compliance Program',
    path: '/compliance'
  },
  {
    badge: 'Governance',
    title: 'Terms & Conditions',
    description: 'All experts formally agree to our T&Cs before participating—covering confidentiality, data protection and compensation terms.',
    ctaLabel: 'Explore our T&Cs',
    path: '/terms'
  },
  {
    badge: 'Ethics',
    title: 'Code of Conduct',
    description: 'Our Code of Conduct outlines ethical boundaries, MNPI safeguards, and engagement do’s and don’ts.',
    ctaLabel: 'Read our Code of Conduct',
    path: '/code-of-conduct'
  }
];

export const TESTIMONIALS = [
  {
    id: 'pe-singapore',
    quote: 'Hasamex managed compliance without slowing down delivery. It felt built for high-stakes work.',
    role: 'Partner',
    org: 'PE Firm, Singapore',
    category: 'Private Equity'
  },
  {
    id: 'hf-london',
    quote: 'Impressed by the quality of experts and the team’s precision. Easily one of the best expert networks I’ve worked with.',
    role: 'Investment Analyst',
    org: 'Hedge Fund, London',
    category: 'Hedge Fund'
  },
  {
    id: 'vp-consumer',
    quote: 'Hasamex stood out from day one—clear briefs, respectful communication, and prompt payment without follow-ups. It’s the first network where I felt genuinely valued as a professional.',
    role: 'Former VP, Commercial',
    org: 'Consumer Goods, HQ',
    category: 'Expert Member'
  },
  {
    id: 'pm-pe-sg',
    quote: 'What impressed us most was how seamlessly Hasamex managed compliance while still delivering expert insight at speed. Their service felt premium, and their processes gave us complete confidence throughout the engagement.',
    role: 'Portfolio Manager',
    org: 'Private Equity / Hedge Fund, Singapore',
    category: 'Compliance'
  },
  {
    id: 'consulting-global',
    quote: 'We’ve worked with several expert networks, but Hasamex stands out for how seriously they take compliance and professionalism. They move fast, but never cut corners.',
    role: 'Principal / Partner',
    org: 'Global Consulting Firm',
    category: 'Strategy Consulting'
  }
];

export const CLIENTS_SERVICE_MODEL = [
  {
    number: '01',
    title: 'Gold-Standard Service',
    description: 'A structured, premium process from brief to delivery—ensuring speed, precision, and proactive support every step of the way.'
  },
  {
    number: '02',
    title: 'Quality Over Quantity',
    description: 'Every expert is handpicked to match your brief and enriched using proprietary AI tools.'
  },
  {
    number: '03',
    title: 'World-Class Compliance',
    description: 'Every expert is vetted, every call is recorded, and every project follows strict global compliance protocols.'
  },
  {
    number: '04',
    title: 'Speed With Precision',
    description: 'Most projects are delivered in 2–12 hours without compromising on vetting or compliance.'
  }
];

export const MARKETS_COVERAGE = [
  {
    id: 'dm',
    code: 'DM',
    title: 'Developed Markets (DM)',
    regions: ['U.S.', 'Europe', 'Japan', 'Australia', 'South Korea'],
    summary: 'Deep operator networks across mature regulatory regimes, enterprise technology, healthcare, industrials, and consumer verticals.',
    coordinates: [
      { label: 'U.S.', x: 20, y: 36, dx: 1.5, dy: 0.6 },
      { label: 'Europe', x: 48, y: 26, dx: 1.5, dy: 0.5 },
      { label: 'Japan', x: 87, y: 34, dx: 1.4, dy: 0.5 },
      { label: 'South Korea', x: 81, y: 29, dx: -12.5, dy: -1.2 },
      { label: 'Australia', x: 83, y: 76, dx: 1.5, dy: 0.6 }
    ]
  },
  {
    id: 'em',
    code: 'EM',
    title: 'Emerging Markets (EM)',
    regions: ['India', 'China', 'Southeast Asia', 'Brazil', 'South Africa'],
    summary: 'Cross-border operational reach anchored by our Singapore HQ and India execution teams—unlocking localized, hard-to-reach decision makers.',
    coordinates: [
      { label: 'Singapore & SE Asia', x: 76, y: 60, dx: 1.6, dy: 0.8 },
      { label: 'India', x: 66, y: 46, dx: -6.5, dy: 0.6 },
      { label: 'China', x: 75, y: 36, dx: -7.0, dy: -1.0 },
      { label: 'Brazil', x: 32, y: 68, dx: 1.5, dy: 0.6 },
      { label: 'South Africa', x: 53, y: 76, dx: 1.5, dy: 0.6 }
    ]
  },
  {
    id: 'fm',
    code: 'FM',
    title: 'Frontier Markets (FM)',
    regions: ['MENA', 'Sub-Saharan Africa', 'Bangladesh', 'Sri Lanka'],
    summary: 'Custom on-demand sourcing for high-growth frontier corridors where standard databases lack vetted senior practitioners.',
    coordinates: [
      { label: 'MENA', x: 56, y: 41, dx: -7.2, dy: 0.5 },
      { label: 'Sub-Saharan Africa', x: 50, y: 60, dx: -18.5, dy: 0.8 },
      { label: 'Bangladesh', x: 71, y: 44, dx: 1.5, dy: -0.7 },
      { label: 'Sri Lanka', x: 68, y: 56, dx: -9.5, dy: 1.2 }
    ]
  }
];

export const EXPERTS_PROMISES = [
  {
    number: '01',
    title: 'No Spam Projects',
    description: 'Only relevant briefs that genuinely match your expertise.'
  },
  {
    number: '02',
    title: 'On-Time Payments',
    description: 'Get paid within 14 days, no delays, no excuses.'
  },
  {
    number: '03',
    title: 'Proactive Communication',
    description: 'We keep you informed at every stage, no chasing for updates.'
  },
  {
    number: '04',
    title: 'Valued at Every Step',
    description: 'We respect your time, insight, and professional boundaries.'
  }
];

export const EXPERTS_CATEGORIES = [
  {
    code: 'HIN-01',
    title: 'Former CxOs, Functional Heads & BU Leaders',
    description: 'Strategic decision-makers who’ve led teams, shaped markets, and driven transformation.'
  },
  {
    code: 'HIN-02',
    title: 'Commercial & Operational Specialists',
    description: 'Hands-on professionals with deep vertical expertise and on-the-ground operating experience.'
  },
  {
    code: 'HIN-03',
    title: 'Independent Consultants & Retired Professionals',
    description: 'Experienced voices offering flexible, insight-driven perspectives from years in the field.'
  },
  {
    code: 'HIN-04',
    title: 'Academics, Researchers & Subject Matter Experts',
    description: 'Analytical thinkers who bring structured knowledge and critical depth to complex questions.'
  },
  {
    code: 'HIN-05',
    title: 'Policy Advisors, Regulatory Experts',
    description: 'Professionals with firsthand understanding of how policy, risk, and regulation impact industries.'
  },
  {
    code: 'HIN-06',
    title: 'Sales, Channel & Technical Specialists',
    description: 'Frontline experts with practical insights into customer behavior, product performance, and distribution dynamics.'
  }
];

export const EXPERT_FAQS = [
  {
    category: 'Outreach & Privacy',
    question: 'Why did Hasamex contact me?',
    answer: 'We reached out because your experience aligns with a current research need. Every project we run is built around finding the most relevant expertise—and we believe your background is a strong match.'
  },
  {
    category: 'Outreach & Privacy',
    question: 'Where did you get my details from?',
    answer: 'We use publicly available professional platforms, industry references, and digital tools to identify and connect with experts. We never purchase data or use contact details without a clear professional basis.'
  },
  {
    category: 'Outreach & Privacy',
    question: 'How is my personal information handled?',
    answer: 'Your privacy matters. We collect only the information necessary to evaluate and match you to relevant projects. All data is securely stored and handled under strict confidentiality, with compliance to global data protection standards.'
  },
  {
    category: 'Eligibility & Compliance',
    question: 'Can I participate if I’m currently employed?',
    answer: 'Yes—provided that your participation doesn’t breach your employment terms. You must never share confidential, proprietary, or material non-public information (MNPI), and we make that clear in our onboarding and compliance documentation.'
  },
  {
    category: 'Joining & Matching',
    question: 'How do I join the Hasamex Intelligence Network?',
    answer: 'Just complete our short expert onboarding form, or reply to our outreach email. Once we receive your information, our team may reach out with opportunities that genuinely match your expertise.'
  },
  {
    category: 'Joining & Matching',
    question: 'Will I receive frequent emails or project requests?',
    answer: 'No. We only reach out when a project is specifically relevant to your background. You’ll never receive generic, irrelevant requests—and you can opt out at any time.'
  },
  {
    category: 'Engagements & Payments',
    question: 'What happens if a project is cancelled or rescheduled?',
    answer: 'While rare, projects may occasionally shift due to client needs. If that happens, we’ll inform you immediately and coordinate the next steps in a transparent and respectful manner.'
  },
  {
    category: 'Engagements & Payments',
    question: 'What types of engagements can I expect?',
    answer: 'You may be invited to 1:1 calls, in-person meetings, transcript contributions, or moderated roundtables—based on your fit and preferences.'
  },
  {
    category: 'Engagements & Payments',
    question: 'How do I get paid, and when?',
    answer: 'You’ll be paid within 14 days of completing any engagement. All compensation terms are clearly shared in advance, and payments are processed through secure global platforms.'
  },
  {
    category: 'Eligibility & Compliance',
    question: 'Can I be removed from the network?',
    answer: 'Only in rare cases—such as repeated no-shows, non-compliant behavior, or confirmed misuse of confidential information. We value professionalism and trust in both directions.'
  }
];

export const COMPLIANCE_SAFEGUARDS = [
  {
    number: '01',
    stage: 'Pre-Engagement Onboarding',
    title: 'Expert Vetting & Consent',
    description: 'All experts must pass our structured vetting process and agree to our Code of Conduct, Insider Trading Policy, and T&Cs before participating in any project.',
    controls: ['Conflict-of-interest & employer restriction check', 'Mandatory affirmative acceptance of HIN Terms & Code of Conduct']
  },
  {
    number: '02',
    stage: 'Brief & Scope Calibration',
    title: 'Structured to Prevent MNPI',
    description: 'Every step of our process—from brief to conversation—is designed to keep engagements safe, compliant, and within legal bounds, enforcing a strict zero-tolerance policy on the sharing of MNPI.',
    controls: ['Zero-tolerance prohibition on Material Non-Public Information', 'Cooling-off rules for auditors, IPO/M&A participants & public officials']
  },
  {
    number: '03',
    stage: 'Live Consultation Control',
    title: 'Call Recording & Audit Trail',
    description: 'All expert calls are recorded, stored securely, and made auditable—ensuring full traceability and transparency across every project.',
    controls: ['Consultations hosted on monitored Hasamex teleconference / MS Teams lines', 'Complete timestamped audit trail for institutional compliance teams']
  },
  {
    number: '04',
    stage: 'Continuous Enablement',
    title: 'Expert Training & Support',
    description: 'Every expert completes specialized training and gets ongoing guidance for their industry.',
    controls: ['Sector-specific compliance reminders prior to every call', 'Strict ban on real-time AI/LLM usage during live consultations']
  },
  {
    number: '05',
    stage: 'Information Barriers',
    title: 'Confidentiality Controls',
    description: 'Client identities and project details are disclosed to experts on a need-to-know basis only, with every engagement governed by clear usage and communication policies.',
    controls: ['Need-to-know client anonymity & blind matching protocols', 'Strict prohibition on social media or LinkedIn disclosure of engagements']
  }
];

export const ABOUT_VALUES = [
  {
    number: '01',
    title: 'Lead with Integrity',
    description: 'Compliance, honesty, and ethical boundaries sit at the foundation of every brief, match, and conversation.'
  },
  {
    number: '02',
    title: 'Operate with Speed',
    description: 'Institutional decisions move on tight clocks—our workflows deliver vetted profiles within 2–12 hours.'
  },
  {
    number: '03',
    title: 'Treat People with Respect',
    description: 'We value experts and clients equally—ensuring fair, prompt 14-day honorarium payouts and zero spam.'
  },
  {
    number: '04',
    title: 'Move with Momentum',
    description: 'Proactive ownership across our Singapore headquarters and distributed team in India and beyond.'
  },
  {
    number: '05',
    title: 'Communicate with Clarity',
    description: 'Transparent scoping, clear expectations, and responsive updates from project intake to completion.'
  }
];

export const TEAM_DEPARTMENTS = [
  { id: 'all', label: 'All Departments' },
  { id: 'leadership', label: 'Founders & Executive Leadership' },
  { id: 'client-solutions', label: 'Client Solutions & Research' },
  { id: 'expert-relations', label: 'Expert Sourcing & Network' },
  { id: 'compliance', label: 'Compliance & Legal Governance' },
  { id: 'operations', label: 'Operations (Singapore & India)' }
];

export const TEAM_PLACEHOLDER_SLOTS = [
  {
    id: 'slot-1',
    department: 'leadership',
    departmentLabel: 'Founders & Executive Leadership',
    code: 'EXEC — 01',
    titlePlaceholder: '[Executive Title — e.g. Managing Director / Co-Founder]',
    namePlaceholder: '[Official Name Pending Confirmation]',
    locationPlaceholder: 'Singapore HQ',
    bioPlaceholder: 'Reserved for official executive biography, institutional background, and strategic leadership mandate at Hasamex Pte Ltd.',
    focusTags: ['Corporate Strategy', 'Institutional Relationships', 'Global Governance']
  },
  {
    id: 'slot-2',
    department: 'leadership',
    departmentLabel: 'Founders & Executive Leadership',
    code: 'EXEC — 02',
    titlePlaceholder: '[Executive Title — e.g. Co-Founder / Head of Operations]',
    namePlaceholder: '[Official Name Pending Confirmation]',
    locationPlaceholder: 'Singapore / India',
    bioPlaceholder: 'Reserved for official leadership biography covering cross-border delivery architecture and network growth.',
    focusTags: ['Cross-Border Execution', 'Service Excellence', 'Platform Scale']
  },
  {
    id: 'slot-3',
    department: 'client-solutions',
    departmentLabel: 'Client Solutions & Research',
    code: 'CS — 01',
    titlePlaceholder: '[Role Placeholder — e.g. Engagement Director, Investment Clients]',
    namePlaceholder: '[Team Profile Slot — Awaiting Roster]',
    locationPlaceholder: 'Singapore / India',
    bioPlaceholder: 'Dedicated account lead managing private equity, hedge fund, and long-only research briefs from intake to delivery.',
    focusTags: ['Private Equity Diligence', 'Hedge Fund Research', 'DM / EM Coverage']
  },
  {
    id: 'slot-4',
    department: 'client-solutions',
    departmentLabel: 'Client Solutions & Research',
    code: 'CS — 02',
    titlePlaceholder: '[Role Placeholder — e.g. Engagement Lead, Strategy & Corporates]',
    namePlaceholder: '[Team Profile Slot — Awaiting Roster]',
    locationPlaceholder: 'Singapore / India',
    bioPlaceholder: 'Specializes in rapid 2–12 hour expert matching, moderated roundtables, and custom transcripts for consulting teams.',
    focusTags: ['Strategy Consulting', 'Roundtables', 'Custom Transcripts']
  },
  {
    id: 'slot-5',
    department: 'expert-relations',
    departmentLabel: 'Expert Sourcing & Network',
    code: 'HIN — 01',
    titlePlaceholder: '[Role Placeholder — e.g. Lead, Bespoke Expert Sourcing]',
    namePlaceholder: '[Team Profile Slot — Awaiting Roster]',
    locationPlaceholder: 'India / Regional Hub',
    bioPlaceholder: 'Leads custom headhunting of former CxOs, sector operators, and policy specialists across Developed, Emerging, and Frontier markets.',
    focusTags: ['Custom Recruiting', 'Executive Outreach', 'HIN Onboarding']
  },
  {
    id: 'slot-6',
    department: 'compliance',
    departmentLabel: 'Compliance & Legal Governance',
    code: 'COMP — 01',
    titlePlaceholder: '[Role Placeholder — e.g. Compliance & Risk Officer]',
    namePlaceholder: '[Team Profile Slot — Awaiting Roster]',
    locationPlaceholder: 'Singapore HQ',
    bioPlaceholder: 'Oversees pre-call conflict clearance, cooling-off enforcement, MNPI safeguards, and audit trail integrity.',
    focusTags: ['MNPI Safeguards', 'Audit Trails', 'Regulatory Compliance']
  },
  {
    id: 'slot-7',
    department: 'operations',
    departmentLabel: 'Operations (Singapore & India)',
    code: 'OPS — 01',
    titlePlaceholder: '[Role Placeholder — e.g. Expert Partner Operations & Honoraria]',
    namePlaceholder: '[Team Profile Slot — Awaiting Roster]',
    locationPlaceholder: 'Singapore / India',
    bioPlaceholder: 'Coordinates scheduling, recorded teleconference logistics, and guaranteed 14-day expert honorarium disbursements.',
    focusTags: ['14-Day Payouts', 'Scheduling Precision', 'Partner Experience']
  },
  {
    id: 'slot-8',
    department: 'operations',
    departmentLabel: 'Operations (Singapore & India)',
    code: 'OPS — 02',
    titlePlaceholder: '[Role Placeholder — e.g. Research Technology & Quality]',
    namePlaceholder: '[Team Profile Slot — Awaiting Roster]',
    locationPlaceholder: 'India / Singapore',
    bioPlaceholder: 'Supports AI-assisted brief enrichment, profile verification workflows, and data protection standards.',
    focusTags: ['Profile Enrichment', 'Data Security', 'Workflow Quality']
  }
];

export const FORM_CONFIGS = {
  client: {
    id: 'client-enquiry',
    badge: 'Client Intake',
    title: 'Start a Project',
    subtitle: 'Once you submit the form, our team will be in touch shortly.',
    submitLabel: 'Submit Client Brief',
    recipientEmail: 'info@hasamex.com',
    liveFallbackUrl: 'https://www.hasamex.com/clients#form1',
    successPreviewNote: 'Thank you for filling up the form. Our team will be in touch shortly. If you have any other questions, feel free to reach out to info@hasamex.com.',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Your first name', required: true, half: true },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Your last name', required: true, half: true },
      { name: 'companyName', label: 'Company Name', type: 'text', placeholder: 'Your company name', required: true, half: true },
      { name: 'currentRole', label: 'Current Role', type: 'text', placeholder: 'Your current role/title', required: true, half: true },
      { name: 'businessEmail', label: 'Business Email', type: 'email', placeholder: 'name@company.com', required: true, half: false },
      { name: 'projectDetails', label: 'Tell us about your project', type: 'textarea', placeholder: 'Enter project/enquiry details (target sectors, geographies, format, and timeline)', required: true, half: false }
    ],
    consentLabel: 'I agree to receive other communications from Hasamex'
  },
  expert: {
    id: 'expert-registration',
    badge: 'Hasamex Intelligence Network',
    title: 'Become an Expert',
    subtitle: 'Once you register, our team will be in touch with next steps.',
    submitLabel: 'Complete Expert Registration',
    recipientEmail: 'info@hasamex.com',
    liveFallbackUrl: 'https://www.hasamex.com/experts#form1',
    successPreviewNote: 'Thank you for registering your interest to join the Hasamex Intelligence Network. Our team will be in touch with you shortly.',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Your first name', required: true, half: true },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Your last name', required: true, half: true },
      { name: 'residence', label: 'Where you currently reside', type: 'text', placeholder: 'City / Country of residence', required: true, half: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'name@example.com', required: true, half: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+65 / +91 / International phone number', required: true, half: true },
      { name: 'linkedin', label: 'LinkedIn URL', type: 'url', placeholder: 'https://www.linkedin.com/in/...', required: true, half: true },
      { name: 'background', label: 'Tell us a bit about your professional background', type: 'textarea', placeholder: 'Brief professional background, key roles held, and sectors of expertise', required: true, half: false }
    ],
    consentLabel: 'I agree to receive other communications from Hasamex'
  },
  careers: {
    id: 'careers-application',
    badge: 'Careers Intake',
    title: 'Join Our Team',
    subtitle: 'Fill in your details and upload your latest CV — or email us directly at careers@hasamex.com.',
    submitLabel: 'Submit Application',
    recipientEmail: 'careers@hasamex.com',
    liveFallbackUrl: 'https://www.hasamex.com/careers',
    successPreviewNote: 'Thank you for applying to Hasamex. We will review your application and be in touch!',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Your first name', required: true, half: true },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Your last name', required: true, half: true },
      { name: 'city', label: 'City', type: 'text', placeholder: 'Your city / location (e.g. Singapore, Mumbai, Bengaluru)', required: true, half: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'name@example.com', required: true, half: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Your phone number', required: true, half: true },
      { name: 'linkedin', label: 'LinkedIn URL', type: 'url', placeholder: 'https://www.linkedin.com/in/...', required: true, half: true },
      { name: 'cvFile', label: 'CV / Resume', type: 'file', placeholder: 'Select PDF or DOCX resume', required: true, half: false }
    ],
    consentLabel: 'I agree to receive other communications from Hasamex'
  },
  contact: {
    id: 'contact-enquiry',
    badge: 'Direct Enquiry',
    title: 'Submit Your Details',
    subtitle: 'Once you submit — our team will be in touch within 24 hours!',
    submitLabel: 'Submit Enquiry',
    recipientEmail: 'info@hasamex.com',
    liveFallbackUrl: 'https://www.hasamex.com/contact-us#form1',
    successPreviewNote: 'Thank you for submitting your enquiry. Our team will be in touch shortly!',
    fields: [
      { name: 'firstName', label: 'First Name', type: 'text', placeholder: 'Your first name', required: true, half: true },
      { name: 'lastName', label: 'Last Name', type: 'text', placeholder: 'Your last name', required: true, half: true },
      { name: 'location', label: 'City / Location', type: 'text', placeholder: 'Your Location', required: true, half: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Type your email here', required: true, half: true },
      { name: 'phone', label: 'Phone number', type: 'tel', placeholder: 'Your phone number', required: true, half: false },
      { name: 'enquiry', label: "Describe what you'd like to talk about", type: 'textarea', placeholder: 'Type your enquiry here...', required: true, half: false }
    ],
    consentLabel: 'I agree to receive communications from Hasamex',
    disclaimer: 'Your information will be processed in accordance with our Privacy Policy.'
  }
};
