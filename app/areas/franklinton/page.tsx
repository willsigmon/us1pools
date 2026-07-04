import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const OG_TITLE = "Pool Services in Franklinton, NC | US-1 Pools";
const OG_DESCRIPTION = "Headquartered in Franklinton — sales, service, and installs across Franklin County.";
const OG_IMAGE = "https://www.us1pools.com/assets/images/gallery-04.webp";

export const metadata: Metadata = {
  title: "Franklinton Pool Installation & Service | US-1 Pools (HQ)",
  description: "US-1 Pools is headquartered in Franklinton, NC. Pool sales, installs, weekly service, and retail at 3453 US Hwy 1 South. Call (919) 441-0033.",
  alternates: {
    canonical: "https://www.us1pools.com/areas/franklinton.html",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.us1pools.com/areas/franklinton.html",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${OG_TITLE} social preview` }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: `${OG_TITLE} social preview` }],
  },
  other: { "ai-content-declaration": "human-authored, human-edited" },
};

export default function FranklintonPage() {
  return (
    <>
      <BodyPage page="areas" />
      <BgOrbs />
      <main id="main">
        <nav className="breadcrumbs container" aria-label="Breadcrumb">
          <ol>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/index.html#service-areas">Service Areas</a></li>
            <li aria-current="page">Franklinton, NC</li>
          </ol>
        </nav>

        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Service Area · HQ</p>
            <h1>Pool Sales, Service & Installation in Franklinton, NC</h1>
            <p>This is home. Our showroom at 3453 US Hwy 1 South is the closest thing US-1 Pools has to a town square — and if you live in Franklinton, we&apos;re already on your road.</p>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <h2>Franklinton&apos;s hometown pool company</h2>
              <p>Franklinton is home base. Our showroom and warehouse sit on US Hwy 1 South — neighbors stop in for chemicals, owners drop off water samples on the way home, and our crews stage from here every morning before fanning out across Franklin County. Same-day water testing, in-stock chemicals and parts, and a service window measured in minutes, not hours.</p>
              <p><strong>What we bring to Franklinton:</strong></p>
              <ul>
                <li>Above-ground and in-ground installations with same-day site walkthroughs</li>
                <li>Walk-in chemical sales and free water testing</li>
                <li>Weekly maintenance routes that already run through your neighborhood</li>
                <li>Equipment repair, pump and heater swaps, and seasonal openings/closings</li>
                <li>Liner replacements with on-shelf GLI and Latham patterns</li>
                <li>Permit and HOA coordination with Franklin County (we file across the street)</li>
              </ul>
            </div>
            <div>
              <div className="highlight">
                <h3>Service coverage in Franklinton</h3>
                <p>We work the full Franklinton footprint and surrounding rural Franklin County:</p>
                <ul className="service-area-list">
                  <li><strong>Town:</strong> 27525 — full coverage</li>
                  <li><strong>Lake Royale border</strong> and Cedar Creek</li>
                  <li><strong>Tar River corridor</strong></li>
                  <li><strong>NC-56 and US-1 corridors</strong></li>
                  <li>Adjacent rural Franklin County addresses</li>
                </ul>
                <p className="drive-time-note"><strong>Drive time:</strong> we&apos;re already here — 0 minutes from the shop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Visit the showroom</p>
              <h2>Walk in and see what we stock</h2>
              <p className="section-sub">Bring a water sample, browse the floor, or sit down to talk through a build. No appointment needed during open hours.</p>
            </div>
            <div className="clinic-details">
              <div className="hero-actions">
                <a className="btn btn-primary" data-haptic="nudge" href="/contact.html">Get a Free Quote</a>
                <a className="btn btn-secondary" href="tel:9194410033">Call (919) 441-0033</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <h2>Why Franklinton homeowners choose US-1 Pools</h2>
            <div className="feature-grid">
              <div>
                <h3>Local & immediate</h3>
                <p>Headquartered on US-1. If you can drive past us, we can be at your house faster than the parts truck.</p>
              </div>
              <div>
                <h3>Family-owned since 2015</h3>
                <p>Owners Shayne and Cathy Parrish have been in pools since 1986. CPO certified, NC licensed.</p>
              </div>
              <div>
                <h3>Transparent pricing</h3>
                <p>No hidden fees. Quotes that match the final invoice.</p>
              </div>
              <div>
                <h3>Full-service support</h3>
                <p>Sales, design, permitting, install, and ongoing maintenance — all in one shop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <h2>Other service areas nearby</h2>
            <div className="areas-grid">
              <a className="area-card" href="/areas/youngsville.html"><strong>Youngsville</strong><span>~12 min · Franklin County</span></a>
              <a className="area-card" href="/areas/louisburg.html"><strong>Louisburg</strong><span>~22 min · Franklin County</span></a>
              <a className="area-card" href="/areas/wake-forest.html"><strong>Wake Forest</strong><span>~25 min · Wake County</span></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter serviceAreas />

      <JsonLd
        data={`{
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.us1pools.com/" },
      { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.us1pools.com/#service-areas" },
      { "@type": "ListItem", "position": 3, "name": "Franklinton, NC", "item": "https://www.us1pools.com/areas/franklinton.html" }
    ]
  }`}
      />
      <JsonLd
        data={`{
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "US-1 Pools — Franklinton, NC",
    "description": "Pool sales, service, and installation in Franklinton, NC. Headquarters showroom at 3453 US Hwy 1 South.",
    "url": "https://www.us1pools.com/areas/franklinton.html",
    "telephone": "+1-919-441-0033",
    "email": "us1pools@gmail.com",
    "image": "https://www.us1pools.com/assets/images/gallery-04.webp",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3453 US Hwy 1 South",
      "addressLocality": "Franklinton",
      "addressRegion": "NC",
      "postalCode": "27525",
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 36.1026, "longitude": -78.4578 },
    "areaServed": {
      "@type": "City",
      "name": "Franklinton",
      "address": { "@type": "PostalAddress", "addressLocality": "Franklinton", "addressRegion": "NC", "addressCountry": "US" }
    }
  }`}
      />
    </>
  );
}
