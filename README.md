# US-1 Pools (Modern Reimagining)

A complete rebuild of the US-1 Pools website with modern web standards, improved SEO, and enhanced user experience.

## 🚀 Features

### Core Pages
- **Home** - Hero, services overview, testimonials, team intro
- **About** - Company history, founders, certifications
- **Pools & Spas** - Overview with dropdown navigation:
  - Above-ground pools
  - In-ground pools (vinyl & fiberglass)
  - Hot tubs & spas
- **Gallery** - Filterable project photos with lightbox viewer
- **Services** - Detailed service offerings
- **Contact** - Working contact form with map embed
- **FAQ** - Common questions with structured data

### New Features (2024)

#### 1. **Interactive Pool Cost Calculator** (`calculator.html`)
- Multi-step quiz for cost estimation
- Instant price ranges based on:
  - Pool type (above-ground, in-ground, spa)
  - Size selection
  - Feature packages (basic, mid-level, premium)
  - Timeline preferences
- CTA to request detailed quote

#### 2. **Service Area Pages** (`/areas/`)
- Local SEO landing pages for nearby cities
- Raleigh, NC coverage (additional areas can be added)
- Neighborhood-specific details and drive times
- Structured data for local search

#### 3. **Content Hub** (`/guides/`)
- Pool care & maintenance guide
- Weekly checklists
- Water chemistry basics
- Winterization & spring opening instructions
- Troubleshooting common problems

#### 4. **Customer Testimonials**
- Featured reviews on homepage
- Review schema markup for SEO
- 5-star ratings display

#### 5. **Working Contact Form**
- Serverless API endpoint (`/api/contact.js`)
- Email delivery via Resend API
- Honeypot spam protection
- Client-side validation
- Success/error messaging

#### 6. **Gallery Lightbox**
- Click-to-expand images
- Keyboard navigation (arrow keys, escape)
- Next/previous buttons
- Image captions overlay

#### 7. **Seasonal Messaging System**
- Auto-updates hours based on current date
- Winter mode (Nov-Feb): "Closed for winter — call for appointments"
- Active season (Mar-Oct): Normal business hours
- Uses `data-seasonal` attribute for easy updates

#### 8. **Analytics & SEO**
- Plausible Analytics (privacy-friendly, no cookies)
- Comprehensive structured data:
  - LocalBusiness schema
  - Review/Rating schema
  - FAQ schema
- Meta tags for social sharing (Open Graph, Twitter Cards)
- Canonical URLs
- XML sitemap with all pages

### Technical Improvements

#### Performance
- Lazy loading on gallery images
- Preconnect to Google Fonts
- Async/defer script loading
- Optimized image sizes
- Minimal CSS/JS footprint

#### Accessibility
- ARIA labels on interactive elements
- Keyboard-accessible dropdowns
- Focus management in lightbox
- Skip-to-content link
- Semantic HTML5

#### Design System
- Aquatic color palette (ocean, lagoon, seafoam, coral)
- Responsive grid layouts
- Smooth animations (floating orbs, button glow)
- Wave dividers between sections
- Mobile-first responsive design

## 📂 Project Structure

```
us1pools/
├── app/                    # Next.js App Router pages (static export)
│   ├── layout.tsx          # Shared shell: skip link, header, site scripts
│   ├── page.tsx            # Homepage (/)
│   ├── site.css            # Legacy stylesheet (formerly styles.css)
│   ├── globals.css         # Tailwind entrypoint
│   ├── about/ … videos/    # One folder per page → exports /<page>.html
│   ├── areas/              # ✨ Service area pages (7 towns)
│   └── guides/pool-care/   # ✨ Pool maintenance guide
├── components/             # Shared header, footer, orbs, JSON-LD helpers
├── public/                 # Static files served at site root
│   ├── assets/images/      # logo, hero, team, pool-01…12 project photos
│   ├── script.js           # Interactive features (nav, dropdowns, seasonal hours)
│   ├── calculator.js       # ✨ Pool cost calculator logic
│   ├── contact-form.js     # Contact form submit handler
│   ├── gallery.js          # Gallery filter + lightbox
│   ├── robots.txt          # Crawler directives
│   └── sitemap.xml         # SEO sitemap
├── api/
│   └── contact.js          # ✨ Serverless contact form handler
├── next.config.ts          # output: "export" → out/ keeps /<page>.html URLs
└── legacy/                 # Original Squarespace export (gitignored)
```

## 🛠️ Development

### Local Preview
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to out/
```

### Contact Form Setup
The contact form requires a Resend API key for email delivery:

1. Sign up at [resend.com](https://resend.com) (free tier: 100 emails/day)
2. Add your API key to Vercel environment variables:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```
3. The form will fall back to console logging if no API key is set (for local dev)

### Deployment
Deployed on Vercel with automatic GitHub integration:
- **Production URL**: https://us1pools.vercel.app
- **Custom Domain**: us1pools.com (DNS configuration required)
- **Auto-deploy on push to `main` branch**

```bash
# Manual deploy
vercel --prod

# Preview deploy
vercel
```

## 📊 Analytics

Plausible Analytics is configured for:
- Privacy-friendly tracking (no cookies, GDPR compliant)
- Page views, referrers, device types
- No personal data collection
- Dashboard: https://plausible.io/us1pools.com

## 🎨 Design Notes

### Color Palette
- **Deep Ocean** (#052026) - Dark backgrounds
- **Ocean** (#0a5c6b) - Primary brand color
- **Lagoon** (#0f7d8a) - Interactive elements
- **Aqua** (#1fb9c6) - Accents
- **Aqua Bright** (#40d3dd) - Highlights
- **Seafoam** (#d7f6f4) - Light backgrounds
- **Sand** (#f2efe7) - Neutral backgrounds
- **Sun** (#f6b35d) - Warm accents
- **Coral** (#ef6b5b) - CTAs

### Typography
- **Headings**: Fraunces (serif, 600/700 weight)
- **Body**: Space Grotesk (sans-serif, 400/500/600 weight)

## 📝 Content Sources

All business information sourced from official us1pools.com:
- Address: 3453 US Hwy 1 South, Franklinton, NC 27525
- Primary Phone: (919) 441-0033
- Secondary Phone: (919) 864-0277
- Email: us1pools@gmail.com
- Seasonal Hours: Closed for winter (call for appointments)

Brand partnerships and product lines verified from live site.

## 🔐 Environment Variables

For full functionality, set these in Vercel:

```bash
RESEND_API_KEY=your_resend_api_key_here
```

## 📄 License

© 2024 US-1 Pools. All rights reserved.

---

**Built with**: Next.js (App Router, static export), React, TypeScript, Tailwind CSS, shadcn/ui config, Vercel Serverless Functions, Plausible Analytics
**Last Updated**: July 2026
