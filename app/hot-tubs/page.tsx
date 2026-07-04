import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Hot Tubs & Spas | US-1 Pools";
const DESCRIPTION = "Hot tubs and spa installations from US-1 Pools with Tranquility and Garden Leisure options plus delivery and setup.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Hot+Tubs+%26+Spas+%7C+US-1+Pools&subtitle=Hot+tubs+and+spa+installations+from+US-1+Pools+with+Tranquility+and+Garden+Leisure+options+plus+delivery+and+setup.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/hot-tubs",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/hot-tubs",
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

export default function HotTubsPage() {
  return (
    <>
      <BodyPage page="pools" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Hot Tubs & Spas</p>
            <h1>Relaxation-ready spa installs.</h1>
            <p>US-1 Pools carries Tranquility and Garden Leisure hot tubs with delivery, setup, and ongoing service support.</p>
            <div className="page-meta">
              <span className="meta-chip">Tranquility</span>
              <span className="meta-chip">Garden Leisure</span>
              <span className="meta-chip">Service support</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Water-care support</p>
              <h2>Showroom guidance for clean, balanced water.</h2>
              <p className="section-sub">Choose a dedicated spa or integrated setup, then rely on the team for start-up water balancing guidance, maintenance support, and the right care routine.</p>
              <div className="model-list">
                <span className="model-chip">Tranquility</span>
                <span className="model-chip">Garden Leisure</span>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/hero-secondary.webp" alt="Pool chemicals, nets, and cleaning accessories in the US-1 Pools showroom" loading="lazy" width={2500} height={1875} decoding="async" />
              <span className="image-caption">Showroom water-care supplies</span>
            </div>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Service plans</p>
              <h2>Keep your spa running clean.</h2>
              <p className="section-sub">Ongoing support, water balancing, replacement filters, and seasonal maintenance keep your spa ready year-round.</p>
              <div className="list-grid">
                <div className="list-card">
                  <h3>Water testing</h3>
                  <p>Lab-style testing and balance recommendations.</p>
                </div>
                <div className="list-card">
                  <h3>Filter care</h3>
                  <p>Scheduled filter cleaning and replacements.</p>
                </div>
                <div className="list-card">
                  <h3>Repair support</h3>
                  <p>Priority scheduling for equipment issues.</p>
                </div>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/hero.webp" alt="Pool and spa supplies in the US-1 Pools showroom" loading="lazy" width={2500} height={1875} decoding="async" />
              <span className="image-caption">Service supplies and water-care support</span>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Ready to relax?</p>
              <h2>Get a spa quote.</h2>
              <p className="section-sub">Share your preferred size and seating needs, and we will recommend the right model.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>Delivery and placement planning</li>
                <li>Electrical coordination support</li>
                <li>Service membership options</li>
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
          "name": "Hot Tubs & Swim Spas",
          "description": "Hot tubs and swim spas for sale in Franklinton, NC. Delivery, installation, and ongoing service available across Franklin and surrounding counties.",
          "url": "https://www.us1pools.com/hot-tubs.html",
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
                      "name": "Hot Tubs & Spas"
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
                      "name": "How much does a hot tub cost?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Hot tub prices range from $3,000 for entry-level models to $15,000+ for premium swim spas. US-1 Pools carries multiple brands and offers financing. Visit our Franklinton showroom to see models in person."
                      }
                },
                {
                      "@type": "Question",
                      "name": "Do you deliver and install hot tubs?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. US-1 Pools handles delivery, electrical coordination, and setup for all hot tubs and swim spas we sell. We service Franklin and surrounding counties."
                      }
                }
          ]
    }`}
      />
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
