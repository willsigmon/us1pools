import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Pools & Spas | US-1 Pools";
const DESCRIPTION = "Explore above-ground pools, fiberglass in-ground shells, vinyl liner replacements, and hot tubs with US-1 Pools in Franklinton.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Pools+%26+Spas+%7C+US-1+Pools&subtitle=Explore+above-ground+pools%2C+fiberglass+in-ground+shells%2C+vinyl+liner+replacements%2C+and+hot+tubs+with+US-1+Pools+in+Franklinton.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/pools",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/pools",
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

export default function PoolsPage() {
  return (
    <>
      <BodyPage page="pools" />
      <BgOrbs orbs={[1, 3]} />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Pools & Spas</p>
            <h1>Find the right pool for how you live outside.</h1>
            <p>US-1 Pools separates the choice clearly: above-ground systems, in-ground steel wall, vinyl liner and fiberglass options, and hot tubs or swim spas.</p>
            <div className="page-meta">
              <span className="meta-chip">Above Ground</span>
              <span className="meta-chip">In-Ground</span>
              <span className="meta-chip">Vinyl Liners</span>
              <span className="meta-chip">Hot Tubs</span>
            </div>
          </div>
        </section>

        <section className="section reveal" id="above-ground">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Above Ground</p>
              <h2>Fast installs with steel, resin, and hybrid options.</h2>
              <p className="section-sub">Above-ground pools use visible wall and frame systems with a replaceable vinyl liner inside. Model availability changes, so we match the structure, liner style, Aquasport or Oasis hybrid option, and deck package to your yard during the quote.</p>
              <div className="model-list">
                <span className="model-chip">Genesis</span>
                <span className="model-chip">Nakoma</span>
                <span className="model-chip">Discovery</span>
              </div>
              <a className="btn btn-ghost" href="/above-ground.html">Explore above-ground</a>
            </div>
            <div className="image-card">
              <img src="/assets/images/gallery-05.webp" alt="Hybrid Oasis above-ground pool with wraparound deck package" loading="lazy" width={2500} height={1215} decoding="async" />
              <span className="image-caption">Hybrid Oasis with deck package</span>
            </div>
          </div>
        </section>

        <section className="section split reveal" id="in-ground">
          <div className="container content-grid content-grid--reverse">
            <div>
              <p className="eyebrow">In-Ground Pools</p>
              <h2>Steel wall, vinyl liner, and fiberglass options.</h2>
              <p className="section-sub">We separate steel wall in-ground builds, vinyl liner replacements, and fiberglass shell options during the quote so the material choice stays clear.</p>
              <div className="model-list">
                <span className="model-chip">Steel wall</span>
                <span className="model-chip">Vinyl liner</span>
                <span className="model-chip">Imagine Fiberglass</span>
              </div>
              <a className="btn btn-ghost" href="/in-ground.html">Explore in-ground</a>
            </div>
            <div className="image-card">
              <img src="/assets/images/gallery-04.webp" alt="Fiberglass in-ground pool with splash pad and finished concrete deck" loading="lazy" width={2500} height={1875} decoding="async" />
              <span className="image-caption">Fiberglass in-ground pool with splash pad</span>
            </div>
          </div>
        </section>

        <section className="section reveal" id="hot-tubs">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Hot Tubs & Spas</p>
              <h2>Hot tubs with showroom care support.</h2>
              <p className="section-sub">Tranquility and Garden Leisure spas are available with delivery and setup, and our showroom carries the water-care supplies that keep them running clean.</p>
              <div className="model-list">
                <span className="model-chip">Tranquility</span>
                <span className="model-chip">Garden Leisure</span>
              </div>
              <a className="btn btn-ghost" href="/hot-tubs.html">Explore Spas</a>
            </div>
            <div className="image-card">
              <img src="/assets/images/hero-secondary.webp" alt="Pool chemicals, nets, and cleaning accessories in the US-1 Pools showroom" loading="lazy" width={2500} height={1875} decoding="async" />
              <span className="image-caption">Showroom water-care supplies</span>
            </div>
          </div>
        </section>

        <section className="section split reveal" id="liners">
          <div className="container content-grid content-grid--reverse">
            <div>
              <p className="eyebrow">Liners</p>
              <h2>Fresh patterns, perfect fit.</h2>
              <p className="section-sub">Vinyl liner pools are a different construction type from fiberglass shells. We carry GLI Pool Products, Latham, and Cardinal liners for in-ground and above-ground replacements.</p>
              <div className="model-list">
                <span className="model-chip">GLI Pool Products</span>
                <span className="model-chip">Latham</span>
                <span className="model-chip">Cardinal</span>
              </div>
              <a className="btn btn-ghost" href="/liners.html">Explore liners</a>
            </div>
            <div className="image-card">
              <img src="/assets/images/customer-pool-sunset.webp" alt="Steel wall in-ground pool at sunset" loading="lazy" width={1800} height={1350} decoding="async" />
              <span className="image-caption">Steel wall in-ground pool</span>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Need guidance?</p>
              <h2>We can help you compare options.</h2>
              <p className="section-sub">Tell us about your yard and we will recommend the right pool type, budget range, and timeline.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>Free consults and site walk-throughs</li>
                <li>Clear pricing ranges by pool type</li>
                <li>Timeline planning and permitting help</li>
              </ul>
              <a className="btn btn-secondary" href="/contact.html">Schedule a Consult</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Pools & Spas",
          "description": "Browse above-ground pools, fiberglass in-ground shells, vinyl liner replacement, hot tubs, and swim spas from US-1 Pools in Franklinton, NC.",
          "url": "https://www.us1pools.com/pools.html",
          "mainEntity": {
                "@type": "ItemList",
                "itemListElement": [
                      {
                            "@type": "ListItem",
                            "position": 1,
                            "name": "Above-Ground Pools",
                            "url": "https://www.us1pools.com/above-ground.html"
                      },
                      {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "In-Ground Pool Options",
                            "url": "https://www.us1pools.com/in-ground.html"
                      },
                      {
                            "@type": "ListItem",
                            "position": 3,
                            "name": "Hot Tubs & Swim Spas",
                            "url": "https://www.us1pools.com/hot-tubs.html"
                      },
                      {
                            "@type": "ListItem",
                            "position": 4,
                            "name": "Pool Liners",
                            "url": "https://www.us1pools.com/liners.html"
                      }
                ]
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
                      "name": "Pools & Spas"
                }
          ]
    }`}
      />

      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
