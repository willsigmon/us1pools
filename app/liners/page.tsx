import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Pool Liners | US-1 Pools";
const DESCRIPTION = "Vinyl pool liner replacement from GLI Pool Products, Latham, and Cardinal. US-1 Pools handles measurement, pattern selection, and professional installation.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Pool+Liners+%7C+US-1+Pools&subtitle=Vinyl+pool+liner+replacement+from+GLI+Pool+Products%2C+Latham%2C+and+Cardinal.+US-1+Pools+handles+measurement%2C+pattern+selection%2C+and+professional+installation.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/liners",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/liners",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${TITLE} social preview` }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: `${TITLE} social preview` }],
  },
  other: { "ai-content-declaration": "human-authored, human-edited" },
};

export default function LinersPage() {
  return (
    <>
      <BodyPage page="pools" />
      <BgOrbs orbs={[1, 3]} />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Liners</p>
            <h1>Fresh patterns, perfect fit.</h1>
            <p>A new vinyl liner transforms the look and feel of a liner pool. US-1 Pools carries GLI Pool Products, Latham, and Cardinal liners with patterns for in-ground and above-ground replacements.</p>
            <div className="page-meta">
              <span className="meta-chip">GLI Pool Products</span>
              <span className="meta-chip">Latham Pools</span>
              <span className="meta-chip">Cardinal</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">GLI Pool Products</p>
              <h2>Precision-fit vinyl liners.</h2>
              <p className="section-sub">GLI manufactures custom-measured vinyl liners for both above-ground and in-ground pools. Their liners are made in the USA with virgin vinyl and UV-protected inks for long-lasting color.</p>
              <div className="list-grid">
                <div className="list-card">
                  <h3>Above-ground liners</h3>
                  <p>Overlap, beaded, and unibead styles in 20-mil and 25-mil thickness. Dozens of patterns available.</p>
                </div>
                <div className="list-card">
                  <h3>In-ground liners</h3>
                  <p>Custom-measured to your pool dimensions. 20-mil standard or 28-mil heavy-duty options. Wall foam can be requested as an add-on.</p>
                </div>
                <div className="list-card">
                  <h3>In-ground mesh safety covers</h3>
                  <p>GLI in-ground mesh safety covers are custom-fit for winter protection. Solid cover options are available when appropriate.</p>
                </div>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/pool-03.jpg" alt="Vinyl pool liner during installation" loading="lazy" width={2500} height={1875} decoding="async" />
              <span className="image-caption">Vinyl liner replacement in progress</span>
            </div>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Latham Pool Products</p>
              <h2>Latham vinyl liner pattern options.</h2>
              <p className="section-sub">Latham offers vinyl liner patterns across classic tile-border looks and modern full-print designs. We keep this page focused on liner replacement, not fiberglass shell builds.</p>
              <div className="list-grid">
                <div className="list-card">
                  <h3>Pattern collections</h3>
                  <p>Hundreds of designs from natural stone and mosaic tile to solid colors and geometric prints.</p>
                </div>
                <div className="list-card">
                  <h3>StruXure vinyl</h3>
                  <p>Latham&apos;s premium liner material with enhanced durability and stain resistance for lasting performance.</p>
                </div>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/customer-pool-sunset.webp" alt="Steel wall in-ground pool at sunset" loading="lazy" width={1800} height={1350} decoding="async" />
              <span className="image-caption">Steel wall in-ground pool at sunset</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Cardinal Systems</p>
              <h2>Vinyl liners, steps, and wall systems.</h2>
              <p className="section-sub">Cardinal manufactures liner-focused pool systems, including vinyl liners, steps, and wall components. We use Cardinal language only for liner and wall-system work, not fiberglass shells.</p>
              <div className="model-list">
                <span className="model-chip">Cardinal</span>
                <span className="model-chip">Latham</span>
                <span className="model-chip">GLI</span>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/pool-08.jpg" alt="Finished vinyl liner pool with patterned interior" loading="lazy" width={2500} height={1875} decoding="async" />
              <span className="image-caption">Patterned vinyl liner finish</span>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Need a new liner?</p>
              <h2>Get a liner replacement quote.</h2>
              <p className="section-sub">We will measure your pool, help you pick a pattern, and handle the full installation. Most liner replacements are completed in one day.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>On-site measurement and pattern selection</li>
                <li>Same-day installation for most pools</li>
                <li>Financing available through LightStream and HFS</li>
              </ul>
              <a className="btn btn-secondary" href="/contact.html">Get a Free Quote</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Pool Liner Replacement",
          "description": "Professional pool liner replacement and installation in Franklinton, NC. Custom-measured vinyl liners for above-ground and in-ground pools.",
          "url": "https://www.us1pools.com/liners.html",
          "dateModified": "2026-03-14",
          "image": "https://www.us1pools.com/assets/images/logo.png",
          "brand": {
                "@type": "Organization",
                "name": "US-1 Pools"
          },
          "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "seller": {
                      "@type": "Organization",
                      "name": "US-1 Pools"
                }
          }
    }`}
      />
      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
                {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.us1pools.com"
                },
                {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Pools & Spas",
                      "item": "https://www.us1pools.com/pools.html"
                },
                {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Liners"
                }
          ]
    }`}
      />
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
