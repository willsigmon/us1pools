# US-1 Pools

A static HTML/CSS/JavaScript rebuild of the Squarespace site. The committed root HTML files are the served site; there is no framework, backend, or required deployment build.

## Work locally

Node.js 20 or newer:

```sh
npm run build     # Regenerate the committed HTML, sitemap, robots and CSP hash
npm run check     # Verify local links/assets, content requirements, SEO and schema
npm start        # Preview at http://127.0.0.1:3000 with clean URLs and CSP headers
```

`npm run build` and `npm run check` have no package dependencies. The source snapshot is `_source/content.json`; the task specification is `_source/BRIEF.md`. Shared contact details and the winter-hours override are in `scripts/data.mjs`. Product copy is read directly from the snapshot. `scripts/home.mjs`, `scripts/pages.mjs` and `scripts/extras.mjs` define page content; `scripts/layout.mjs` defines shared navigation, footer and metadata. Always regenerate and commit root HTML after a template change.

For browser regression tests:

```sh
npm ci
npx playwright install chromium
npm test
```

An existing Chrome installation can be used instead: `CHROME_PATH=/usr/bin/google-chrome npm test`. The tests start and stop their own local server, exercise responsive layouts, navigation, the lightbox, video facades, no-JavaScript fallbacks and reduced motion, and run axe accessibility checks. Third-party requests are blocked in these tests; they verify the correct embed URLs and interactions, not the availability of YouTube or Google Maps.

## Pages

`/`, `/about`, `/pools-spas`, `/hotwater`, `/cool-water`, `/hotwater-1`, `/chill`, `/fiberglass`, `/hybrid`, `/aboveground-examples`, `/steel-pools`, `/resin-examples`, `/gallery`, `/how-to-videos`, `/contact`, plus `404.html`. The live Squarespace slugs are preserved. The empty store and placeholder FAQ are intentionally excluded.

## Assets and behavior

- `assets/live/manifest.json` maps original Squarespace UUIDs to the supplied optimized WebP files and dimensions.
- `assets/thumbs/` contains responsive derivatives. To regenerate thumbnails, the social image and favicons, install Pillow in a Python environment and run `python3 scripts/prepare-assets.py`, then `npm run build`.
- Fraunces and Manrope Latin WOFF2 fonts are self-hosted in `assets/fonts/`, with their OFL licenses. No Google Fonts network request occurs at runtime.
- The hero uses the supplied water-video poster with a short CSS shimmer. Reduced-motion preferences disable movement. Reveals progressively enhance otherwise visible content.
- Videos use thumbnails and load a `youtube-nocookie.com` player only on request. A normal YouTube link remains available without JavaScript.
- Gallery photos use native image links, enhanced into a modal dialog with keyboard arrows, Escape, focus restoration and scroll locking.
- Contact includes telephone/email links, directions and a lazy Google Maps iframe. Payment and financing link to the destinations specified in the brief; there is no contact/payment API.

## Static hosting

`vercel.json` specifies `cleanUrls: true`, framework `null` (Other), no build command, and root output. CSP permits only the required video/map frame origins and video thumbnail host. The build script calculates exact hashes for the shared LocalBusiness JSON-LD and the tiny pre-paint navigation initializer. It does not contact Vercel or any indexing service. Existing `.github/` files are left untouched.

`.vercelignore` excludes source snapshots, local tooling and documentation from a future upload; committed root HTML and public assets remain the serving output.

Design direction, reference review, token JSON and verification notes are in `_source/IMPLEMENTATION.md` and `_source/design-tokens.json`. No push or deployment is part of this rebuild.
