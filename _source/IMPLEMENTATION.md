# Rebuild work log

Brand North Star: an established local pool specialist, expressed through clear water, generous editorial typography, and real people and projects.

## Reference pull

- **Savage**, `/workspace/ref/savage/src/styles/global.css`: flat editorial surfaces, named design tokens, expressive display type, substantial real photographs and thin rules.
- **Flooring Hub**, `/workspace/ref/flooringhub/styles.css`: restrained serif hierarchy, generous whitespace, visible keyboard focus and an accessible mobile navigation pattern.
- Available design-tool search: Mobbin returned [Samara](https://mobbin.com/sites/sections/07171413-c1f7-4a6b-bf59-4601386187b8) and [SwimClub](https://mobbin.com/sites/sections/65eb128f-9f62-42c3-887e-e1becbabe298). Inspected both images. Samara's clear type and decisive CTA spacing are useful; SwimClub's product/visual language is unrelated, so it is not used as an aquatic reference. No Magic / 21st.dev tool is available in this session.

Design tokens: [`design-tokens.json`](design-tokens.json). The brief's aqua/navy brand direction takes precedence over the global default palette.

What makes this not look AI-generated:

- The supplied logo, licensing seal, dated award, owner portrait and local photographs carry the identity.
- A broad water hero, asymmetric model directory, alternating product spreads and numbered reasons give each section its own purpose.
- Original business copy and material-specific imagery replace invented slogans and interchangeable feature icons.

## Plan and status

- [x] Read brief, source, assets and both reference repositories; confirm branch and clean initial status.
- [x] Establish design direction and tokens; parallelize product templates, interactions and validation tooling.
- [x] Generate complete static pages and shared navigation/footer.
- [x] Remove superseded pages, scripts and APIs without touching `.github/`.
- [x] Verify content, SEO, links, accessibility, responsive layout and interactions on a local server.
- [x] Commit generated output and source; no push or deployment.

## Source decisions

The content capture repeats card text in aggregate `[li]` elements and individual headings/paragraphs. Render the individual elements once. The logo belongs in the header; the shared storefront image belongs in the footer/contact. The gallery contains 40 unique gallery photos in addition to those two shared images. The gallery's lone “Test” placeholder is not meaningful copy and is omitted. `customer-faqs` and `store` are excluded as instructed. Winter hours and contact/financing overrides come directly from the brief.

## Verification results

- `npm run build`: 16 committed HTML pages; sitemap includes all 15 public routes; matching CSP hashes generated for structured data and the pre-paint navigation initializer.
- Repeated generation produces identical HTML, sitemap, robots and Vercel configuration.
- `npm run check`: passes 1,258 local references, image existence/dimensions, required routes, metadata lengths/uniqueness, schema/contact overrides, gallery and video coverage.
- `CHROME_PATH=/usr/bin/google-chrome npm test`: passes 15 public pages at 320, 390, 768 and 1440px; keyboard menu/dropdown controls; lightbox wrapping, Escape, focus restoration and containment; click-only video loading; reduced motion; no-JavaScript navigation/image links; four axe audits. The test starts and stops its own server.
- Additional Chrome inspection: zero axe WCAG A/AA violations across all 15 public pages at desktop width and home/gallery/contact at mobile width. All local images loaded after scrolling on all 15 pages at desktop and mobile widths.
- Mobile Lighthouse, local preview: **Performance 99 / Accessibility 100 / Best Practices 100 / SEO 100**; LCP 2.2s; CLS 0. The delayed navigation initializer originally caused a layout shift under slower loading; the hashed pre-paint initializer fixes it.
- Source-copy audit confirms complete nonduplicated home/about/product copy, the required overrides, image UUID assignments, all product/financing/payment links and all nine embedded video facades (seven how-to, liners and hybrid).
- Inspected desktop and mobile home, gallery, contact and hub screenshots. Corrected six gallery alt descriptions against the actual photographs.
- Local server responds with 200 for public pages/assets, 404 for missing routes/source/config paths, empty HEAD responses and 405 for unsupported methods.
- `git diff --check` passes. `.github/` has no changes. No push, deployment or indexing request was made.

Performance figures describe the local mobile Lighthouse run, not a production deployment. Browser regression tests block third-party network requests and verify embed destinations and interaction behavior; YouTube/Maps availability is outside those checks.
