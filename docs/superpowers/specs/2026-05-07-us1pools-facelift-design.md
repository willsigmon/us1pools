# US-1 Pools — Glam Facelift + AIO/SEO Pass

**Date:** 2026-05-07
**Author:** Claude (autonomous, user stepped away mid-brainstorm)
**Status:** Spec — implementation in same session

## Why this exists

The US-1 Pools Vercel rebuild is feature-complete and live at `us1pools.vercel.app`, but the live business domain `us1pools.com` still points at Squarespace. The user wants this Vercel version to be the proof point that earns the Squarespace cancellation. That means:

1. **Visual polish** that reads as obviously more premium than the current Squarespace site.
2. **AIO/SEO depth** the partner can audit and feel — not just "we added meta tags."
3. **Local SEO surface** that gives them new pages to rank in their actual service counties.

This is a **tightening pass, not a rebuild.** The current site already nails the brand DNA from `willsigmonmediaco/DESIGN.md`: aquatic palette, restrained motion, web-haptics, caustic orbs, water-streak dividers, comprehensive JSON-LD.

## Autonomous decisions (user was unavailable to weigh in)

| Decision | Choice | Why |
|---|---|---|
| Stack | **Stay on vanilla HTML/CSS/JS** | Site is healthy. Migrating to Next.js would invalidate working calculator/forms/og endpoint and burn the time budget. |
| Typography | **Switch Playfair Display → Fraunces variable** | README always specified Fraunces; live site drifted to Playfair. Fraunces variable has optical sizing, lighter CLS, and matches modern editorial-but-warm tone. |
| Motion library | **No new JS deps. CSS + existing scroll-reveal.js only.** | DESIGN.md says "motion to reinforce hierarchy or proof — avoid random sparkle." Magic UI primitives ported as ~30-line CSS, not React imports. |
| Scope of new pages | **6 area pages** (Wake Forest, Youngsville, Louisburg, Durham, Franklinton, Henderson) | Biggest local-SEO unlock per hour spent. Templated from existing `areas/raleigh.html`. |
| AIO standard | **Implement `/llms.txt` + `/llms-full.txt`** | Emerging convention (llmstxt.org). Free differentiator the partner can verify in a browser. |
| Pitch artifact | **Save the canvas as `docs/PITCH.md`** | User asked for shareable benefits rundown. Living in repo means it travels with the site. |

## Out of scope

- Migration to Next.js / Astro / any framework
- Rebuild of pool calculator, contact form, or `/api/og` endpoint
- New brand identity / logo work
- Photoshoot or new gallery imagery
- Stripe/payment changes
- Plausible → GA4 swap

## Architecture (unchanged)

```
us1pools/
├── *.html              # Static pages (19 → 25 after this pass)
├── styles.css          # Single stylesheet
├── script.js           # Nav, hero, calculator, gallery, contact UI
├── api/
│   ├── contact.js      # Resend email
│   ├── og.ts           # Dynamic OG via @vercel/og
│   └── chat.js
├── areas/              # NEW: 6 more pages
├── guides/
├── llms.txt            # NEW: AI-crawler summary
├── llms-full.txt       # NEW: full content corpus
├── robots.txt
└── sitemap.xml         # UPDATED: new URLs
```

## Phase A — Visual polish

### A1. Typography swap (Playfair → Fraunces)
- Replace `<link>` for Google Fonts in every HTML head:
  - Old: `family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700`
  - New: `family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700`
- Update `--font-display` token in `styles.css`
- Add `font-display: swap` already implicit; tighten with `size-adjust` if CLS shows up

### A2. Hero refinement
- Add **shimmer overlay** on `.hero-media .image-card::after` — gradient sweep on a 12s loop, `animation-play-state: paused` under `prefers-reduced-motion`
- Add **count-up trust pill** "Family-owned since 2015 · 10+ years" using a CSS-only counter (no JS) since the number is static
- Tighten hero vertical rhythm — reduce padding-top from current `~120px` to `clamp(72px, 8vw, 112px)`

### A3. Motion primitives (CSS-only adaptations)
- **`.shiny-text`** — animated mask sweep on award badges ("Best of Best 2023/2025")
- **`.border-beam`** — conic-gradient beam tracing the primary CTA border on hover (respects `prefers-reduced-motion`)
- **`.partner-marquee`** — single-row infinite marquee for brand partners (Latham, GLI, Imagine, Genesis, Tranquility, Maytronics, Dolphin) added as a new strip **between the hero `.trust-bar` and the Pools section**. The trust-bar stays — it carries different signal (quality, permitting, financing, service area). CSS `animation` only.

### A4. Card hover refinement
- `.service-card` and `.area-card` get a gentle 3D tilt on hover via CSS (no Vanilla-Tilt JS). Tilt magnitude: 4deg max. `transform-style: preserve-3d`. Disabled under `prefers-reduced-motion`.

### A5. Color tightening
- Promote `--coral` from CTA-only to a "live water" accent on focus rings of input fields (currently ocean-blue everywhere creates a wall of teal)
- Introduce `--ink-glow: rgba(31, 185, 198, 0.45)` for `text-shadow` on hero h1 — subtle aquatic halo

## Phase B — AIO / SEO unlock

### B1. `/llms.txt` (root file, plain text)
Standard format from llmstxt.org: H1 site name, blockquote site purpose, then linked summary of every important section. ~40 lines. Lets ChatGPT/Claude/Perplexity index the site as structured context, not just HTML scrape.

### B2. `/llms-full.txt`
Concatenated plain-text body content from every page (no chrome, no nav). Built once with a small Node script in `scripts/build-llms-txt.mjs`, run during the facelift commit. Future content changes will require re-running it (documented in HANDOFF.md).

### B3. Schema.org expansion

Currently shipping: WebSite, LocalBusiness, FAQPage, Review/AggregateRating.
Add:
- **BreadcrumbList** on every non-home page (ItemList of "Home → Section → Page")
- **Service** on each service-detail page (above-ground, in-ground, hot-tubs, services, liners) with `provider` referencing `#business`
- **HowTo** on `guides/pool-care.html` for the weekly checklist
- **Article** with `author`/`datePublished` on `guides/*.html`
- **VideoObject** stub on `videos.html` (currently no schema)

### B4. `<link rel="alternate" type="text/markdown">` on every page
Points to `/llms-full.txt`. Helps AI crawlers find the canonical text version without rendering JS.

### B5. `<meta>` polish
- Tighten every page's `<title>` to under 60 chars: `[Page Topic] | US-1 Pools — Franklinton, NC`
- Tighten every `<meta name="description">` to 140-155 chars, action-front
- Add `<meta name="ai-content-declaration" content="human-authored, human-edited">` (emerging signal for AI provenance)
- Add `<link rel="preconnect" href="https://plausible.io" crossorigin>` (already preconnects fonts; missing analytics)

### B6. robots.txt additions
Already allows GoogleOther, Google-Extended, ChatGPT-User, CCBot, anthropic-ai, PerplexityBot, GPTBot. Add explicit allow for:
- `ClaudeBot`
- `Claude-Web`
- `Google-CloudVertexBot`
- `Applebot-Extended`
- `Diffbot`
- `Meta-ExternalAgent`

Keep `Bytespider Disallow: /`.

## Phase C — Local SEO surface

### C1. Six new area pages, templated from `areas/raleigh.html`
For each: Wake Forest, Youngsville, Louisburg, Durham, Franklinton (HQ), Henderson.

Per-page customization:
- H1 with city name + "Pool Sales, Service & Installation"
- "Driving from US-1 Pools to {city}" — drive time, route highlights
- 1-paragraph local context (e.g., "Wake Forest's clay-heavy soil means our crews lean on engineered base prep…")
- 3 testimonial pull quotes from existing index.html testimonials, filtered by `addressLocality` where possible
- Per-page **LocalBusiness `areaServed`** schema scoped to that city
- Per-page **BreadcrumbList**
- Internal links to nearest other 2 area pages + services

### C2. Update `sitemap.xml`
Add 6 new URLs with `<lastmod>2026-05-07</lastmod>`, `<changefreq>monthly</changefreq>`, `<priority>0.7</priority>`.

### C3. Internal linking
Add a "Service area" footer link block listing all 7 cities, replacing the current generic Quick Links column on area pages only (homepage stays as-is).

## Phase D — Performance

### D1. Image audit
- Confirm all `<img>` have explicit `width`/`height` (already mostly true)
- Ensure `loading="eager"` + `fetchpriority="high"` only on hero LCP image (currently correct)
- Add `decoding="async"` to all non-LCP images (audit; some missing)
- Verify `gallery-04.webp` and `gallery-05.webp` are < 200KB each; if larger, recompress to AVIF + webp `<picture>`

### D2. Critical CSS inline
Inline ~3KB of above-the-fold styles (`:root` tokens, `body`, `.site-header`, `.hero`, `.btn-primary`, fonts) at the top of every page's `<head>` inside `<style>`. Keep `styles.css` as the rest. This eliminates the render-blocking single-file fetch.

### D3. Defer non-critical scripts
- `script.js` already loads at end of body. Add `defer`.
- `scroll-reveal.js` — confirm `defer`.
- Plausible script already has `defer`.

### D4. `prefers-reduced-motion` audit
All new CSS animations from Phase A must respect `@media (prefers-reduced-motion: reduce) { animation: none; transition: none; }` block. Add a single global rule at the bottom of styles.css.

## Phase E — Pitch artifact

`docs/PITCH.md` — copy of the user's canvas-style benefits rundown, edited for tone consistency, saved as a shareable Markdown the partner can read in GitHub directly. No code changes.

## Validation

Before shipping:
1. `npm run check` (existing JSON + syntax checks pass)
2. Manually open `index.html` via `python3 -m http.server 5173`
3. Smoke-check 3 random pages render without console errors
4. Verify `/llms.txt` and `/llms-full.txt` return plain text
5. Run `curl -sI https://www.us1pools.com/llms.txt` post-deploy → expect `Content-Type: text/plain`
6. Lighthouse pass on home: target 95+ Performance, 100 SEO, 100 Accessibility, 100 Best Practices

## Success criteria

- [ ] Fraunces live, Playfair removed
- [ ] Hero shimmer + partner marquee render correctly
- [ ] All new schema validates against schema.org validator
- [ ] `/llms.txt` and `/llms-full.txt` exist and are reachable
- [ ] 6 new area pages live, sitemap updated
- [ ] `npm run check` green
- [ ] Build clean, committed to main, pushed
- [ ] `docs/PITCH.md` exists with the partner-facing canvas

## Known debt accepted, not addressed

- `styles.css` is 3362 lines (exceeds project's 800-line guideline). Splitting it into per-section files is a separate refactor. Noted in HANDOFF for a future session.
- Inline SVG icons in `index.html` are large; could move to a sprite. Out of scope.

## Risks + mitigations

| Risk | Mitigation |
|---|---|
| Fraunces not loading on first paint causes FOIT | Use `font-display: swap` (default) + matching Inter fallback metrics |
| Schema bloat slows page parse | All JSON-LD is tag-deferred and ignored by browsers; impact is zero |
| 6 templated area pages feel duplicate to Google | Each gets unique opening paragraph + locally-relevant copy block |
| Marquee janky on low-power devices | CSS `will-change: transform` + `prefers-reduced-motion` halt |
| User disagrees with Fraunces decision after the fact | Single token swap in styles.css; trivial to revert |

## Implementation order (single session)

1. Spec self-review (this doc)
2. Pitch artifact written first (lowest risk, immediate user value)
3. Phase B (AIO/SEO) — touches every HTML file, do once with a sweep script
4. Phase A (visual polish) — all in styles.css + small index.html edits
5. Phase C (area pages) — new files only, no risk to existing
6. Phase D (perf) — final pass
7. Validate, commit, push, brrr ping
