import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const OG_TITLE = "Pool Services in Henderson, NC | US-1 Pools";
const OG_DESCRIPTION = "Kerr Lake corridor and Vance County lakefront pool installs and seasonal service.";
const OG_IMAGE = "https://www.us1pools.com/assets/images/gallery-04.webp";

export const metadata: Metadata = {
  title: "Henderson Pool Installation & Service | US-1 Pools",
  description: "Pool installs and service in Henderson, NC and the Kerr Lake corridor. Vance County lakefront, downtown Henderson, country club. Call (919) 441-0033.",
  alternates: {
    canonical: "https://www.us1pools.com/areas/henderson.html",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.us1pools.com/areas/henderson.html",
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

export default function HendersonPage() {
  return (
    <>
      <BodyPage page="areas" />
      <BgOrbs />
      <main id="main">
        <nav className="breadcrumbs container" aria-label="Breadcrumb">
          <ol>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/index.html#service-areas">Service Areas</a></li>
            <li aria-current="page">Henderson, NC</li>
          </ol>
        </nav>

        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Service Area</p>
            <h1>Pool Sales, Service & Installation in Henderson, NC</h1>
            <p>Henderson and the Kerr Lake corridor sit at the northern edge of our service area — and lake-side homes get our priority Monday spring-opening slots.</p>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <h2>Henderson and the Kerr Lake corridor</h2>
              <p>We&apos;ve done above-ground installs across the Vance County lakeshore, in-ground builds on the older Henderson estate lots, and we coordinate water testing with the Henderson YMCA&apos;s seasonal pool prep. Our crews handle the long drive by stacking Henderson and Louisburg work into the same day — efficiency means honest pricing.</p>
              <p><strong>What we bring to Henderson:</strong></p>
              <ul>
                <li>Above-ground installs along the Kerr Lake corridor</li>
                <li>In-ground builds on Henderson estate lots</li>
                <li>Lake-house spring openings and fall closings — priority Monday slots</li>
                <li>Hot tub and swim spa delivery and setup</li>
                <li>Pump, filter, and heater repairs scheduled with Louisburg routes for efficiency</li>
                <li>Liner replacements with on-shelf inventory</li>
              </ul>
            </div>
            <div>
              <div className="highlight">
                <h3>Service coverage in Henderson</h3>
                <p>We work the Henderson area and Kerr Lake corridor:</p>
                <ul className="service-area-list">
                  <li><strong>Henderson:</strong> 27536, 27537</li>
                  <li><strong>Kerr Lake</strong> south shore (Vance County)</li>
                  <li><strong>Henderson Country Club</strong> area</li>
                  <li><strong>Downtown Henderson</strong> and historic estate lots</li>
                  <li><strong>Vance County</strong> rural lake addresses</li>
                </ul>
                <p className="drive-time-note"><strong>Drive time:</strong> ~30 minutes north from our Franklinton shop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Ready to start?</p>
              <h2>Get a free quote for your Henderson pool</h2>
              <p className="section-sub">Lake-corridor expertise and priority spring-opening slots for Vance County customers.</p>
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
            <h2>Why Henderson homeowners choose US-1 Pools</h2>
            <div className="feature-grid">
              <div><h3>Lake corridor pros</h3><p>We know lakefront access, dock proximity, and the seasonal rhythms of Kerr Lake homes.</p></div>
              <div><h3>Priority openings</h3><p>Lake-house spring openings get our priority Monday slots.</p></div>
              <div><h3>Stacked routing</h3><p>Henderson stacks with Louisburg routes — we don&apos;t pad the drive into your invoice.</p></div>
              <div><h3>Established locally</h3><p>Years of work along Kerr Lake. Customers we still have on speed-dial.</p></div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <h2>Other service areas nearby</h2>
            <div className="areas-grid">
              <a className="area-card" href="/areas/louisburg.html"><strong>Louisburg</strong><span>~30 min · Franklin County</span></a>
              <a className="area-card" href="/areas/franklinton.html"><strong>Franklinton</strong><span>HQ · Franklin County</span></a>
              <a className="area-card" href="/areas/youngsville.html"><strong>Youngsville</strong><span>~35 min · Franklin County</span></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter serviceAreas />

      <JsonLd
        data={`{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.us1pools.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://www.us1pools.com/#service-areas"},{"@type":"ListItem","position":3,"name":"Henderson, NC","item":"https://www.us1pools.com/areas/henderson.html"}]}`}
      />
      <JsonLd
        data={`{"@context":"https://schema.org","@type":"LocalBusiness","name":"US-1 Pools — Henderson, NC","description":"Pool sales, service, and installation serving Henderson, NC and the Kerr Lake corridor.","url":"https://www.us1pools.com/areas/henderson.html","telephone":"+1-919-441-0033","email":"us1pools@gmail.com","image":"https://www.us1pools.com/assets/images/gallery-04.webp","priceRange":"$$","address":{"@type":"PostalAddress","streetAddress":"3453 US Hwy 1 South","addressLocality":"Franklinton","addressRegion":"NC","postalCode":"27525","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":36.1026,"longitude":-78.4578},"areaServed":{"@type":"City","name":"Henderson","address":{"@type":"PostalAddress","addressLocality":"Henderson","addressRegion":"NC","addressCountry":"US"}}}`}
      />
    </>
  );
}
