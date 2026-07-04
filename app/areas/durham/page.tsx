import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const OG_TITLE = "Pool Services in Durham, NC | US-1 Pools";
const OG_DESCRIPTION = "Long-term Durham customers and new installs across Hope Valley, Forest Hills, and Treyburn.";
const OG_IMAGE = "https://www.us1pools.com/assets/images/gallery-04.webp";

export const metadata: Metadata = {
  title: "Durham Pool Installation & Service | US-1 Pools",
  description: "Pool installs and service in Durham, NC. Hope Valley, Forest Hills, Treyburn corridor. Established presence with 4-6 week consult window.",
  alternates: {
    canonical: "https://www.us1pools.com/areas/durham.html",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    type: "website",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.us1pools.com/areas/durham.html",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [OG_IMAGE],
  },
  other: { "ai-content-declaration": "human-authored, human-edited" },
};

export default function DurhamPage() {
  return (
    <>
      <BodyPage page="areas" />
      <BgOrbs />
      <main id="main">
        <nav className="breadcrumbs container" aria-label="Breadcrumb">
          <ol>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/index.html#service-areas">Service Areas</a></li>
            <li aria-current="page">Durham, NC</li>
          </ol>
        </nav>

        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Service Area</p>
            <h1>Pool Sales, Service & Installation in Durham, NC</h1>
            <p>Durham is the western edge of our service window — but worth the drive. We&apos;ve installed pools across Hope Valley, Forest Hills, and the Treyburn corridor.</p>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <h2>Durham&apos;s farther-but-faithful pool company</h2>
              <p>We maintain weekly routes for a small set of long-term customers in 27707 and 27712, and we take new Durham installs on a 4-6 week consult window — enough time to walk the site, pull permits, and stage the build properly. The drive is longer; the work is the same: in-house crew, no subcontractors, quotes that match invoices.</p>
              <p><strong>What we bring to Durham:</strong></p>
              <ul>
                <li>In-ground and fiberglass installs across Durham County lots</li>
                <li>Hot tub and swim spa delivery and electrical coordination</li>
                <li>Weekly maintenance for a small, established Durham customer base</li>
                <li>Pump and filter repairs scheduled in tight blocks to make the drive worthwhile</li>
                <li>Liner replacements with same-week scheduling</li>
                <li>Durham County permit coordination</li>
              </ul>
            </div>
            <div>
              <div className="highlight">
                <h3>Service coverage in Durham</h3>
                <p>We regularly work these Durham neighborhoods and zip codes:</p>
                <ul className="service-area-list">
                  <li><strong>Durham core:</strong> 27701, 27704, 27705</li>
                  <li><strong>Hope Valley</strong> and <strong>Forest Hills:</strong> 27707</li>
                  <li><strong>Treyburn corridor:</strong> 27712</li>
                  <li><strong>Trinity Park</strong> and <strong>Northgate</strong></li>
                  <li><strong>South Durham:</strong> 27713</li>
                </ul>
                <p className="drive-time-note"><strong>Drive time:</strong> ~40 minutes from our Franklinton shop. New installs typically book a 4-6 week consult window.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Ready to start?</p>
              <h2>Get a free quote for your Durham pool</h2>
              <p className="section-sub">We schedule Durham consults in tight blocks. Book early in spring for in-season installation.</p>
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
            <h2>Why Durham homeowners choose US-1 Pools</h2>
            <div className="feature-grid">
              <div><h3>Established presence</h3><p>Long-term Durham customers since the early years. We know the neighborhoods.</p></div>
              <div><h3>Owner-led builds</h3><p>Shayne or Cathy on every Durham consult. No franchise routing.</p></div>
              <div><h3>Same crew, same standards</h3><p>In-house team. Same install quality you&apos;d get if you were next door to the shop.</p></div>
              <div><h3>Honest scheduling</h3><p>4-6 week consult window kept transparent. No hidden delays.</p></div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <h2>Other service areas nearby</h2>
            <div className="areas-grid">
              <a className="area-card" href="/areas/raleigh.html"><strong>Raleigh</strong><span>~25 min · Wake County</span></a>
              <a className="area-card" href="/areas/wake-forest.html"><strong>Wake Forest</strong><span>~30 min · Wake County</span></a>
              <a className="area-card" href="/areas/franklinton.html"><strong>Franklinton</strong><span>HQ · Franklin County</span></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter serviceAreas />

      <JsonLd
        data={`{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.us1pools.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://www.us1pools.com/#service-areas"},{"@type":"ListItem","position":3,"name":"Durham, NC","item":"https://www.us1pools.com/areas/durham.html"}]}`}
      />
      <JsonLd
        data={`{"@context":"https://schema.org","@type":"LocalBusiness","name":"US-1 Pools — Durham, NC","description":"Pool sales, service, and installation serving Durham, NC and the western edge of our service area.","url":"https://www.us1pools.com/areas/durham.html","telephone":"+1-919-441-0033","email":"us1pools@gmail.com","image":"https://www.us1pools.com/assets/images/gallery-04.webp","priceRange":"$$","address":{"@type":"PostalAddress","streetAddress":"3453 US Hwy 1 South","addressLocality":"Franklinton","addressRegion":"NC","postalCode":"27525","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":36.1026,"longitude":-78.4578},"areaServed":{"@type":"City","name":"Durham","address":{"@type":"PostalAddress","addressLocality":"Durham","addressRegion":"NC","addressCountry":"US"}}}`}
      />
    </>
  );
}
