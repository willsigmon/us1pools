import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Above Ground Pools | US-1 Pools";
const DESCRIPTION = "Above-ground pool installs from US-1 Pools including vinyl liner, resin, steel, and Aquasport and Oasis hybrid options with optional deck packages.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Above+Ground+Pools+%7C+US-1+Pools&subtitle=Above-ground+pool+installs+from+US-1+Pools+including+vinyl+liner%2C+resin%2C+steel%2C+and+Aquasport+and+Oasis+hybrid+options+with+optional+deck+packages.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/above-ground",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/above-ground",
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

export default function AboveGroundPage() {
  return (
    <>
      <BodyPage page="pools" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Above Ground</p>
            <h1>Fast installs with clean, modern profiles.</h1>
            <p>US-1 Pools installs above-ground pools with vinyl liner, resin, steel, and Aquasport or Oasis hybrid options plus decks, stairs, and start-up service.</p>
            <div className="page-meta">
              <span className="meta-chip">Vinyl liner</span>
              <span className="meta-chip">Resin systems</span>
              <span className="meta-chip">Hybrid + steel</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Resin pools</p>
              <h2>Genesis, Nakoma, Discovery, and current options.</h2>
              <p className="section-sub">Resin options hold up in humid summers and deliver clean lines with minimal upkeep. Some model lines change over time, so we confirm current availability before quoting.</p>
              <div className="model-list">
                <span className="model-chip">Genesis</span>
                <span className="model-chip">Nakoma</span>
                <span className="model-chip">Discovery</span>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/pool-07.jpg" alt="Above-ground pool with retaining wall" loading="lazy" width={2500} height={1875} decoding="async" />
              <span className="image-caption">Above-ground pool with retaining wall</span>
            </div>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Hybrid pools</p>
              <h2>Aquasport and Oasis hybrid above-ground pools.</h2>
              <p className="section-sub">Aquasport and Oasis are hybrid options to ask about when you want a stronger above-ground package with a clean finished profile. Oasis can only be recessed 27–30 inches in the ground.</p>
              <div className="model-list">
                <span className="model-chip">Aquasport</span>
                <span className="model-chip">Oasis</span>
                <span className="model-chip">27–30 in. max recess</span>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/gallery-05.webp" alt="Hybrid Oasis above-ground pool with wraparound deck" loading="lazy" width={2500} height={1215} decoding="async" />
              <span className="image-caption">Hybrid Oasis with deck package</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Steel wall options</p>
              <h2>Coral Seas, Distinction, Eclipse, Serena, and Southport.</h2>
              <p className="section-sub">Steel-wall availability can vary by supplier, so we confirm current model details and equipment needs before quoting.</p>
              <div className="model-list">
                <span className="model-chip">Coral Seas</span>
                <span className="model-chip">Distinction</span>
                <span className="model-chip">Eclipse</span>
                <span className="model-chip">Serena</span>
                <span className="model-chip">Southport</span>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/pool-04.jpg" alt="Above-ground pool with pump and filter equipment system" loading="lazy" width={836} height={627} decoding="async" />
              <span className="image-caption">Above-ground equipment setup</span>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Need pricing?</p>
              <h2>Get a fast above-ground quote.</h2>
              <p className="section-sub">Tell us your yard size and timeline and we will outline the right package.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>Starter kits and equipment packages</li>
                <li>Deck add-ons and stair options</li>
                <li>Financing available for qualified buyers</li>
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
          "name": "Above-Ground Pool Installation",
          "description": "Professional above-ground pool sales and installation in Franklinton, NC and across Franklin and surrounding counties. Multiple sizes, shapes, and packages available.",
          "url": "https://www.us1pools.com/above-ground.html",
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
                      "name": "Above Ground"
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
                      "name": "How much does an above-ground pool cost in NC?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Above-ground pool packages from US-1 Pools start around $3,000-$8,000 installed, depending on size, shape, and features. Visit our Franklinton showroom or call (919) 441-0033 for a custom quote."
                      }
                },
                {
                      "@type": "Question",
                      "name": "How long does it take to install an above-ground pool?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most above-ground pools are installed in 1-2 days once the site is prepared. Site prep (leveling, base material) may add 1-2 additional days depending on your yard."
                      }
                },
                {
                      "@type": "Question",
                      "name": "Do above-ground pools need a permit in North Carolina?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Permit requirements vary by county. In Franklin County and Wake County, pools over 24 inches deep typically require a permit. US-1 Pools handles the permitting process for you."
                      }
                }
          ]
    }`}
      />
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
