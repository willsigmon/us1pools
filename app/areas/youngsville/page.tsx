import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const OG_TITLE = "Pool Services in Youngsville, NC | US-1 Pools";
const OG_DESCRIPTION = "Right next door — fast service for Youngsville pool owners.";
const OG_IMAGE = "https://www.us1pools.com/assets/images/gallery-04.webp";

export const metadata: Metadata = {
  title: "Youngsville Pool Installation & Service | US-1 Pools",
  description: "Pool installs and weekly service in Youngsville, NC. Lake Royale, Holden Road, NC-96 corridor. 12 minutes from our Franklinton shop.",
  alternates: {
    canonical: "https://www.us1pools.com/areas/youngsville.html",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.us1pools.com/areas/youngsville.html",
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

export default function YoungsvillePage() {
  return (
    <>
      <BodyPage page="areas" />
      <BgOrbs />
      <main id="main">
        <nav className="breadcrumbs container" aria-label="Breadcrumb">
          <ol>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/index.html#service-areas">Service Areas</a></li>
            <li aria-current="page">Youngsville, NC</li>
          </ol>
        </nav>

        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Service Area</p>
            <h1>Pool Sales, Service & Installation in Youngsville, NC</h1>
            <p>Youngsville is right next door — 12 minutes that puts our trucks on your gravel before the coffee gets cold.</p>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <h2>Youngsville&apos;s neighbors next door</h2>
              <p>We&apos;ve installed pools across Lake Royale, the new Holden Road builds, and acreage off NC-96. Our weekly maintenance routes through Youngsville run Mondays and Thursdays, and emergency service from Franklinton typically lands within an hour during active season.</p>
              <p><strong>What we bring to Youngsville:</strong></p>
              <ul>
                <li>Above-ground and in-ground installations across acreage and subdivision lots</li>
                <li>Hot tub and swim spa delivery and setup</li>
                <li>Weekly maintenance routes Mondays and Thursdays</li>
                <li>Pump, filter, and heater repairs with same-day turnaround in season</li>
                <li>Liner replacements with same-week scheduling for Franklin County</li>
                <li>Permit coordination handled in-house</li>
              </ul>
            </div>
            <div>
              <div className="highlight">
                <h3>Service coverage in Youngsville</h3>
                <p>We work the Youngsville footprint and adjacent rural Franklin County:</p>
                <ul className="service-area-list">
                  <li><strong>Youngsville:</strong> 27596</li>
                  <li><strong>Lake Royale</strong> (Franklin County side)</li>
                  <li><strong>Holden Road</strong> new builds</li>
                  <li><strong>NC-96 corridor</strong></li>
                  <li>Adjacent rural Franklin County addresses</li>
                </ul>
                <p className="drive-time-note"><strong>Drive time:</strong> ~12 minutes from our Franklinton shop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Ready to start?</p>
              <h2>Get a free quote for your Youngsville pool</h2>
              <p className="section-sub">Local crew, fast site visits, and a quote that matches the final invoice.</p>
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
            <h2>Why Youngsville homeowners choose US-1 Pools</h2>
            <div className="feature-grid">
              <div><h3>Closest neighbor</h3><p>12 minutes from your driveway. Same-day visits in active season.</p></div>
              <div><h3>Routes through your block</h3><p>Maintenance trucks run Youngsville Mondays and Thursdays.</p></div>
              <div><h3>Lake Royale experience</h3><p>We know waterfront and lake-corridor pool requirements cold.</p></div>
              <div><h3>Same-county permits</h3><p>Franklin County permitting handled in-house — paperwork moves fast.</p></div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <h2>Other service areas nearby</h2>
            <div className="areas-grid">
              <a className="area-card" href="/areas/franklinton.html"><strong>Franklinton</strong><span>HQ · Franklin County</span></a>
              <a className="area-card" href="/areas/louisburg.html"><strong>Louisburg</strong><span>~18 min · Franklin County</span></a>
              <a className="area-card" href="/areas/wake-forest.html"><strong>Wake Forest</strong><span>~15 min · Wake County</span></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter serviceAreas />

      <JsonLd
        data={`{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.us1pools.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://www.us1pools.com/#service-areas"},{"@type":"ListItem","position":3,"name":"Youngsville, NC","item":"https://www.us1pools.com/areas/youngsville.html"}]}`}
      />
      <JsonLd
        data={`{"@context":"https://schema.org","@type":"LocalBusiness","name":"US-1 Pools — Youngsville, NC","description":"Pool sales, service, and installation serving Youngsville, NC.","url":"https://www.us1pools.com/areas/youngsville.html","telephone":"+1-919-441-0033","email":"us1pools@gmail.com","image":"https://www.us1pools.com/assets/images/gallery-04.webp","priceRange":"$$","address":{"@type":"PostalAddress","streetAddress":"3453 US Hwy 1 South","addressLocality":"Franklinton","addressRegion":"NC","postalCode":"27525","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":36.1026,"longitude":-78.4578},"areaServed":{"@type":"City","name":"Youngsville","address":{"@type":"PostalAddress","addressLocality":"Youngsville","addressRegion":"NC","addressCountry":"US"}}}`}
      />
    </>
  );
}
