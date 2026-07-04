import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const OG_TITLE = "Pool Services in Louisburg, NC | US-1 Pools";
const OG_DESCRIPTION = "Franklin County seat — fast permit turnaround and trusted installs since 2015.";
const OG_IMAGE = "https://www.us1pools.com/assets/images/gallery-04.webp";

export const metadata: Metadata = {
  title: "Louisburg Pool Installation & Service | US-1 Pools",
  description: "Pool installs and service in Louisburg, NC and Franklin County seat. College Park, Tar River, downtown Louisburg. Call (919) 441-0033.",
  alternates: {
    canonical: "https://www.us1pools.com/areas/louisburg.html",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.us1pools.com/areas/louisburg.html",
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

export default function LouisburgPage() {
  return (
    <>
      <BodyPage page="areas" />
      <BgOrbs />
      <main id="main">
        <nav className="breadcrumbs container" aria-label="Breadcrumb">
          <ol>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/index.html#service-areas">Service Areas</a></li>
            <li aria-current="page">Louisburg, NC</li>
          </ol>
        </nav>

        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Service Area</p>
            <h1>Pool Sales, Service & Installation in Louisburg, NC</h1>
            <p>Louisburg is the Franklin County seat and one of our oldest service areas. We work pools across Tar River bottomland, the College Park district, and the rural farms north of town.</p>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <h2>Louisburg&apos;s pool company since 2015</h2>
              <p>Permit coordination with Franklin County happens in Louisburg — the same building we file in — so paperwork moves fast on Louisburg projects. We&apos;ve installed pools on Tar River lots that need engineered fill, in the College Park grid, and on acreage outside town with their own septic and well considerations.</p>
              <p><strong>What we bring to Louisburg:</strong></p>
              <ul>
                <li>Above-ground and in-ground installations on Tar River bottomland and acreage</li>
                <li>Hot tub and swim spa delivery and setup</li>
                <li>Weekly maintenance routes through Louisburg in active season</li>
                <li>Pump, filter, and heater repairs</li>
                <li>Liner replacements with on-shelf inventory</li>
                <li>Same-day Franklin County permit coordination</li>
              </ul>
            </div>
            <div>
              <div className="highlight">
                <h3>Service coverage in Louisburg</h3>
                <p>We work the full Louisburg area and surrounding rural Franklin County:</p>
                <ul className="service-area-list">
                  <li><strong>Louisburg:</strong> 27549</li>
                  <li><strong>College Park</strong> district</li>
                  <li><strong>Downtown Louisburg</strong> historic lots</li>
                  <li><strong>Tar River corridor</strong></li>
                  <li><strong>Bunn outskirts</strong> and rural Franklin County</li>
                </ul>
                <p className="drive-time-note"><strong>Drive time:</strong> ~22 minutes from our Franklinton shop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Ready to start?</p>
              <h2>Get a free quote for your Louisburg pool</h2>
              <p className="section-sub">Same-county permits, same-day site visits, no surprises.</p>
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
            <h2>Why Louisburg homeowners choose US-1 Pools</h2>
            <div className="feature-grid">
              <div><h3>County seat advantage</h3><p>We file permits in Louisburg — paperwork is fast because we&apos;re in the building.</p></div>
              <div><h3>Tar River expertise</h3><p>Bottomland fill and drainage done right, every time.</p></div>
              <div><h3>Established locally</h3><p>One of our oldest service areas. We know your neighbors&apos; pools.</p></div>
              <div><h3>Full-service shop</h3><p>Sales, install, repair, water care — all in-house.</p></div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <h2>Other service areas nearby</h2>
            <div className="areas-grid">
              <a className="area-card" href="/areas/franklinton.html"><strong>Franklinton</strong><span>HQ · Franklin County</span></a>
              <a className="area-card" href="/areas/youngsville.html"><strong>Youngsville</strong><span>~18 min · Franklin County</span></a>
              <a className="area-card" href="/areas/henderson.html"><strong>Henderson</strong><span>~30 min · Vance County</span></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter serviceAreas />

      <JsonLd
        data={`{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.us1pools.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://www.us1pools.com/#service-areas"},{"@type":"ListItem","position":3,"name":"Louisburg, NC","item":"https://www.us1pools.com/areas/louisburg.html"}]}`}
      />
      <JsonLd
        data={`{"@context":"https://schema.org","@type":"LocalBusiness","name":"US-1 Pools — Louisburg, NC","description":"Pool sales, service, and installation serving Louisburg, NC and the Franklin County seat.","url":"https://www.us1pools.com/areas/louisburg.html","telephone":"+1-919-441-0033","email":"us1pools@gmail.com","image":"https://www.us1pools.com/assets/images/gallery-04.webp","priceRange":"$$","address":{"@type":"PostalAddress","streetAddress":"3453 US Hwy 1 South","addressLocality":"Franklinton","addressRegion":"NC","postalCode":"27525","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":36.1026,"longitude":-78.4578},"areaServed":{"@type":"City","name":"Louisburg","address":{"@type":"PostalAddress","addressLocality":"Louisburg","addressRegion":"NC","addressCountry":"US"}}}`}
      />
    </>
  );
}
