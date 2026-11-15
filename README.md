# Hasamex Public Company Website Redesign (`hasamex-website`)

Static ReactJS + Vite frontend draft for **Hasamex Pte Ltd** (`https://www.hasamex.com/`), taking architectural UX and motion inspiration from `https://junior.ai/` while preserving Hasamex's official brand identity, DM Sans typography, black/white/charcoal/gold (`#EAB10B`) palette, and verified company content.

## Local Development & Production Build

```bash
# Install dependencies
npm install

# Start local development server (http://localhost:5173)
npm run dev

# Build static production bundle into ./dist
npm run build

# Preview production build locally
npm run preview
```

## All 12 Included Routes

1. `/` — **Home** (Hero with interactive Engagement Brief Desk showcase card, verified operational benchmarks strip, 6 engagement formats, Why Choose Hasamex ivory contrast section, 5 expert archetypes, interactive Client Segments tabs, Compliance spotlight, and verified testimonials slider)
2. `/clients` — **Clients** (Service Model, 6 Engagement Methods, interactive Global Market Coverage SVG Map across DM / EM / FM corridors, Client Segments, and Client Enquiry Form)
3. `/experts` — **Experts** (Hasamex Intelligence Network value proposition, 4 expert promises, 6 expert categories, filterable 10-question Expert FAQ accordion, and Expert Registration Form)
4. `/compliance` — **Compliance** (5-checkpoint safeguard matrix, mandatory controls, verified institutional quotes, and direct `compliance@hasamex.com` oversight channel)
5. `/careers` — **Careers** (Grow with Us, Rolling Talent Intake across Singapore & India, culture pillars, and CV Application Form)
6. `/about-us` — **About Us** (Verified company mandate, Corporate Profile card with Singapore UEN `202526952W` & registered address, 5 operating principles, 3 stakeholder cards, and clearly marked Draft Expansion modules)
7. `/team` — **Team (New Page)** (Department filter tabs, Detailed Bio vs. Compact Grid view toggle, and clearly labeled placeholder profile cards with zero invented employee names, titles, or bios)
8. `/contact-us` — **Contact Us** (4 direct institutional email channels, Singapore headquarters card, and Submit Your Details Form)
9. `/terms` — **Expert Terms & Conditions** (Full preserved policy with sticky 51-section Table of Contents & search filter)
10. `/code-of-conduct` — **Code of Conduct** (Full preserved policy with sticky Table of Contents)
11. `/privacy` — **Privacy Policy** (Full preserved policy + leadership review flag highlighting the `[Address]` template placeholder)
12. `/cookies` — **Cookies Policy** (Full preserved policy + leadership review flag highlighting the truncated `Singapore 06891` postal code)

## Static Deployment (Render / Vercel / Netlify)

SPA fallback routing is pre-configured via:
- `render.yaml` (Render Static Site)
- `public/_redirects` (Netlify / Cloudflare Pages / Render)
- `vercel.json` (Vercel)

### Deploy on Render (Static Site)
1. Push this repository (`C:\Users\Hp\.gemini\antigravity\scratch\hasamex-website`) to a new GitHub/GitLab repository (e.g. `hasamex-website-preview`).
2. In the Render Dashboard, click **New + → Static Site** (or **Blueprint** to auto-detect `render.yaml`).
3. Set:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Redirects/Rewrites:** Source `/*` → Destination `/index.html` (Action: `Rewrite`).
