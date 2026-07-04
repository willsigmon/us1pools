import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "In-Ground Pools | US-1 Pools";
const DESCRIPTION = "Steel wall, vinyl liner, and fiberglass in-ground pool options from US-1 Pools, clearly separated by material type so customers can compare the right build or replacement path.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=In-Ground%20Pools%20%7C%20US-1%20Pools&subtitle=Steel%20wall%2C%20vinyl%20liner%2C%20and%20fiberglass%20in-ground%20pool%20options%20from%20US-1%20Pools%2C%20clearly%20separated%20by%20material%20type%20so%20customers%20can%20compare%20the%20right%20build%20or%20replacement%20path.&eyebrow=Sales%20%E2%80%A2%20service%20%E2%80%A2%20installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/in-ground",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/in-ground",
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

export default function InGroundPage() {
  return (
    <>
      <BodyPage page="pools" />
      <BgOrbs orbs={[1, 3]} />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">In-Ground Pools</p>
            <h1>Steel wall, vinyl liner, and fiberglass options — clearly separated.</h1>
            <p>US-1 Pools helps customers compare steel wall in-ground builds, vinyl liner replacements, fiberglass shell options, and the equipment that supports each pool type.</p>
            <div className="page-meta">
              <span className="meta-chip">Steel wall</span>
              <span className="meta-chip">Vinyl liners</span>
              <span className="meta-chip">Imagine Fiberglass</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">In-ground planning</p>
              <h2>Steel wall, vinyl liner, and fiberglass options.</h2>
              <p className="section-sub">We separate steel wall in-ground builds, vinyl liner replacements, and Imagine Fiberglass shell options during the quote. Features like splash pads are planned around the site.</p>
              <div className="model-list">
                <span className="model-chip">Steel wall</span>
                <span className="model-chip">Vinyl liner</span>
                <span className="model-chip">Imagine Fiberglass</span>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/gallery-04.webp" alt="Fiberglass in-ground pool with splash pad and finished concrete deck" loading="lazy" width={2500} height={1875} decoding="async" />
              <span className="image-caption">Fiberglass in-ground pool with splash pad</span>
            </div>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Vinyl liner pools</p>
              <h2>Cardinal + Latham liner replacements.</h2>
              <p className="section-sub">Vinyl liner pools use a replaceable vinyl membrane over a wall structure, so a new liner can refresh the entire interior without calling it fiberglass.</p>
              <div className="model-list">
                <span className="model-chip">Cardinal</span>
                <span className="model-chip">Latham</span>
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
              <p className="eyebrow">Equipment + upgrades</p>
              <h2>Smart systems that stay efficient.</h2>
              <p className="section-sub">Pentair pumps, filters, and heaters keep water moving efficiently with automation options for hands-off care.</p>
              <div className="list-grid">
                <div className="list-card">
                  <h3>Automation</h3>
                  <p>Control pumps, lights, and heat from one panel.</p>
                </div>
                <div className="list-card">
                  <h3>Salt or oxygen</h3>
                  <p>Alternative sanitation options for softer water.</p>
                </div>
                <div className="list-card">
                  <h3>Upgrade planning</h3>
                  <p>Equipment options are planned around how you actually use the pool.</p>
                </div>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/pool-09.jpg" alt="In-ground pool and patio at night with landscape lighting" loading="lazy" width={836} height={627} decoding="async" />
              <span className="image-caption">Evening poolside setting</span>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Plan the right path</p>
              <h2>Get the right in-ground recommendation.</h2>
              <p className="section-sub">We will walk your site, map the layout, and recommend fiberglass shell, liner replacement, or equipment options based on what you actually need.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>Site layout and measurement</li>
                <li>Finish and feature selections</li>
                <li>Equipment sizing and upgrades</li>
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
          "name": "In-Ground Pool Options",
          "description": "Steel wall in-ground planning, fiberglass shell guidance, vinyl liner replacement, equipment upgrades, and site planning in Franklinton, NC and surrounding counties.",
          "url": "https://www.us1pools.com/in-ground.html",
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
                      "name": "In-Ground Pools"
                }
          ]
    }`}
      />
      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
                {
                      "@type": "Question",
                      "name": "How much does an in-ground pool cost in North Carolina?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In-ground pool costs in NC typically range from $25,000 to $65,000+ depending on size, material (vinyl, fiberglass, or concrete), and features. US-1 Pools offers free on-site estimates \\u2014 call (919) 441-0033."
                      }
                },
                {
                      "@type": "Question",
                      "name": "What is a fiberglass pool and is it better than vinyl?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Fiberglass pools are pre-formed shells that install faster than concrete and require less maintenance than vinyl liners. They resist algae, never need liner replacements, and last 25+ years. US-1 Pools installs both options."
                      }
                },
                {
                      "@type": "Question",
                      "name": "How long does in-ground pool installation take?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Fiberglass pools typically install in 2-4 weeks. Vinyl liner in-ground pools take 4-6 weeks. Concrete pools can take 8-12 weeks. Timelines vary based on permitting, weather, and site conditions."
                      }
                }
          ]
    }`}
      />
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
