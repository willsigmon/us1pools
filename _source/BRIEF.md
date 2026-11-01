# US-1 Pools rebuild brief (for coding agent)

Rebuild the live Squarespace site www.us1pools.com as a fast, modern STATIC site in this repo (branch rebuild/squarespace-parity). Plain HTML/CSS/JS, no framework, deployed on Vercel (framework "Other", output = repo root). Add `"cleanUrls": true` to vercel.json and update its CSP to allow https://www.youtube-nocookie.com and https://www.youtube.com frames, https://i.ytimg.com images, and Google Maps iframe (https://www.google.com). Do NOT modify .github/ (IndexNow workflow must stay as-is/disabled) and do NOT add any IndexNow calls.

Remove the old legacy pages/scripts in the repo root that are not part of the new site (calculator, payment, services, faq, terms, privacy, areas/, guides/, docs/, llms*.txt, webmcp*, api/chat.js, contact-form.js etc.) — git history keeps them. Keep api/og.ts only if unused you may delete it too. Keep package.json working (update scripts so `npm run check` is something trivial that passes, or remove @vercel/og dep if api deleted). Keep a 404.html.

## Source of truth
- `_source/content.json`: text (by element) + image URLs + YouTube IDs extracted from each live page. USE THIS COPY VERBATIM. Do not invent marketing copy. You may add short neutral UI labels (e.g. "Call", "Directions", "View gallery") and page titles/meta descriptions.
- `assets/live/*.webp`: all live images, optimized. Filename = first 8 chars of the Squarespace asset UUID + original name lowercased. `assets/live/manifest.json` maps file → original URL + dimensions. Match content.json image URLs to files by the UUID prefix (the path segment before the file name).
- `assets/live/hero-yt.webp` = poster frame of the live home hero water video (YouTube Id8oZS95KxQ).
- Ignore customer-faqs (Squarespace placeholder lorem ipsum) and store (empty). Do not build those.

## Pages (clean URLs, keep live slugs so old links work)
- `/` Home (index.html)
- `/about`
- `/pools-spas` — Pools & Spas hub (live nav folder "Pools & Spas" containing Hot Water, Cool Water, Liners, Chill Therapy). Hub lists those 4 with images and links.
- Product pages: `/hotwater` (Hot Tubs & Spas: Garden Leisure Hot Tub, Garden Leisure Swim Spa), `/cool-water` (Fiberglass, Hybrid, Above Ground cards linking to /fiberglass, /hybrid, /aboveground-examples), `/hotwater-1` (Liners: GLI, Latham with their outbound links + Doctor Liners YouTube 7B76eOgC9Fc), `/chill` (Chill Therapy Series), `/fiberglass` (Imagine Pools), `/hybrid` (Oasis, AquaSport 52, The Ultimate + install video 7tSUAi7gdmM), `/aboveground-examples` (Steel, Resin with links), `/steel-pools` (Coral Seas, Distinction, Eclipse, Serena, Southport), `/resin-examples` (Discovery, Genesis, Nakoma).
- `/gallery` — all gallery images from content.json "gallery" as a responsive masonry grid with an accessible lightbox (keyboard, Esc, arrows), lazy loading.
- `/how-to-videos` — the 7 YouTube videos (IDs in content.json) as lite click-to-load facades (thumbnail from i.ytimg.com, iframe youtube-nocookie on click).
- `/contact` — NAP, hours, map embed (Google Maps iframe for "3453 US Hwy 1 South, Franklinton, NC 27525"), tel/mailto links, Facebook https://www.facebook.com/us1pools. No form needing a backend (or a mailto-only form). 
Nav: Home, About, Pools & Spas (dropdown: Hot Water, Cool Water, Liners, Chill Therapy), Gallery, How-To Videos, Contact Us + a "919.441.0033" call button. Mobile menu accessible.

## Mandatory content (overrides live where different)
- NAP everywhere (header/footer/contact/JSON-LD): US-1 Pools, 3453 US Hwy 1 South, Franklinton, NC 27525. Phones: 919-441-0033 (primary) and 919-880-4323 (secondary). Email us1pools@gmail.com. NEVER use 919-864-0277 (old, stale on live footer).
- Hours text everywhere hours appear: "Closed for the winter starting November 1. We'll post spring hours when we reopen."
- Financing row on home: "Financing available through:" HFS (https://www.hfsfinancial.net/promo/62e3e8d04c132a3c6be3dbe8/) and Allegro (https://allegrologin.com/app/035ef18f). NO LightStream anywhere.
- "Pay US-1 Pools" button → https://buy.stripe.com/5kA4iY3xm30agFObII
- Home sections from live, in order: hero (aqua water, logo e2bf0920, "NC-Licensed" seal 6b1cf7df-board-seal-transparent, 2023 Best of the Best badge 78992bbd-wakeweeklybadge, H1 "The premier aquatic experts in The Triangle.", "Sales, Service & Installation―US-1 Pools Does it All!"), financing, NAP+hours, Pay button, Available Pool Models (with links from content: /resin-examples, /hybrid, /steel-pools, imaginepools.com/pool-range/, poolsbygenesis.com, cardinalpools.com, lathampools.com, tranquilitybrandspas.com, hottubs.com/brands/garden-leisure/), Services list + "Call Us - 919.441.0033", service cards (Pumps, Liners, Filters & Heaters, Openings & Closings), Retail (Oxygen Pools link https://www.youtube.com/watch?v=-JBIObt7Cuo, Salt-Based Systems, ...), Why Choose Us (5 items verbatim), Our Team (Shayne & Cathy Parrish – Owners & CPO Certified, photo c2cddecf-cathyshayne; Tonni & Alan Deitch – Business Operations), a recent-photos strip (IMG_10xx/11xx images from home) linking to /gallery.
- Map image assignments by UUID prefix from content.json per page.

## SEO
- Unique <title> (≤60 chars, "… | US-1 Pools, Franklinton NC") and meta description (140–160 chars, factual, from live content) per page; canonical https://www.us1pools.com/<slug>; OG/Twitter tags with ABSOLUTE https og:image. Create a 1200x630 og image file assets/og/us1pools-og.jpg (compose from hero-yt + logo with Python PIL or sharp) and reference it as https://www.us1pools.com/assets/og/us1pools-og.jpg.
- LocalBusiness JSON-LD (@type ["LocalBusiness","HomeAndConstructionBusiness"] or "SwimmingPoolSupplyStore"? use LocalBusiness + additionalType) on every page (or at least home+contact) with name, url, logo, image (absolute), telephone +1-919-441-0033, secondary in contactPoint, email, address (streetAddress "3453 US Hwy 1 South", addressLocality Franklinton, addressRegion NC, postalCode 27525, US), geo 36.1021,-78.467, sameAs facebook, areaServed Wake Forest / Franklinton / The Triangle, founder Shayne Parrish, foundingDate 2015. Do not include openingHours (closed for winter); put hours text in description is fine.
- sitemap.xml with all pages, robots.txt allowing all + sitemap.
- Favicon from logo.

## Design
Keep the brand: aqua water hero (use hero-yt.webp with a subtle animated caustics/shimmer overlay via CSS, respect prefers-reduced-motion), navy (#0b2545-ish) / aqua (#19b5d1-ish) palette, white space, logo, seal & badge in hero. Modernize: smooth custom feel—distinctive display font (e.g. "Fraunces" or "DM Serif Display" headlines + "Manrope"/"Figtree" body via Google Fonts), sticky translucent header that condenses on scroll, scroll-reveal animations (IntersectionObserver, reduced-motion safe), wave SVG section dividers, image cards with hover zoom, generous typography. Look at /workspace/ref/savage and /workspace/ref/flooringhub (Will's other modernized client sites) for patterns and quality bar. Follow AGENTS.md design bible (avoid generic AI look). Fully responsive, accessible (alt text, focus states, skip link, contrast), Lighthouse-friendly (width/height on imgs, lazy loading, no layout shift).

Share header/footer: since no build step, either duplicate markup in each HTML file consistently, or write a tiny Node build script `scripts/build.mjs` that generates the HTML pages from templates into the repo root and commit the generated output (Vercel serves static files; do not require a build on Vercel). Generated output must be committed.

When done: run a local static server and a link checker (every internal href/src resolves to a file; every image referenced exists), fix issues, then `git add -A && git commit`. Do not push. Do not deploy.
