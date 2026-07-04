import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const OG_TITLE = "Pool Services in Wake Forest, NC | US-1 Pools";
const OG_DESCRIPTION = "Trusted pool installation and service in Wake Forest and surrounding Wake County.";
const OG_IMAGE = "https://www.us1pools.com/assets/images/gallery-04.webp";

export const metadata: Metadata = {
  title: "Wake Forest Pool Installation & Service | US-1 Pools",
  description: "Pool installs, weekly service, and repair in Wake Forest, NC. Heritage, Wakefield, Traditions, Hasentree. Call (919) 441-0033 for a free quote.",
  alternates: {
    canonical: "https://www.us1pools.com/areas/wake-forest.html",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.us1pools.com/areas/wake-forest.html",
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

export default function WakeForestPage() {
  return (
    <>
      <BodyPage page="areas" />
      <BgOrbs />
      <main id="main">
        <nav className="breadcrumbs container" aria-label="Breadcrumb">
          <ol>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/index.html#service-areas">Service Areas</a></li>
            <li aria-current="page">Wake Forest, NC</li>
          </ol>
        </nav>

        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Service Area</p>
            <h1>Pool Sales, Service & Installation in Wake Forest, NC</h1>
            <p>Wake Forest backyards lean clay-heavy, which means our crews lean on engineered base prep and proper drainage on every install — no shortcuts on the dirt work.</p>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <h2>Wake Forest&apos;s pool partner</h2>
              <p>We&apos;ve worked from Heritage and Wakefield to the historic downtown loop, and we know which HOAs need fence-detail submittals two weeks in advance versus same-week. Our weekly maintenance routes through Wake Forest run Tuesdays and Fridays, with Saturday emergency calls available in season.</p>
              <p><strong>What we bring to Wake Forest:</strong></p>
              <ul>
                <li>Above-ground and in-ground installs with engineered base prep for clay soil</li>
                <li>Hot tub and swim spa delivery, setup, and electrical coordination</li>
                <li>Weekly and seasonal maintenance routes already running through your neighborhood</li>
                <li>Pump, filter, and heater repairs — same-day service in active season</li>
                <li>Liner replacements with on-shelf GLI and Latham patterns</li>
                <li>HOA paperwork and Wake County permit coordination</li>
              </ul>
            </div>
            <div>
              <div className="highlight">
                <h3>Service coverage in Wake Forest</h3>
                <p>We regularly work these Wake Forest neighborhoods and zip codes:</p>
                <ul className="service-area-list">
                  <li><strong>Wake Forest core:</strong> 27587, 27588</li>
                  <li><strong>Heritage</strong> and <strong>Wakefield</strong></li>
                  <li><strong>Traditions</strong> and <strong>Hasentree</strong></li>
                  <li><strong>Olde Mill</strong> and historic downtown loop</li>
                  <li><strong>Falls Lake</strong> south shore</li>
                </ul>
                <p className="drive-time-note"><strong>Drive time:</strong> ~25 minutes from our Franklinton shop.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Ready to start?</p>
              <h2>Get a free quote for your Wake Forest pool</h2>
              <p className="section-sub">We&apos;ll visit your property, walk the site for soil and drainage, and provide a detailed estimate — no obligation.</p>
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
            <h2>Why Wake Forest homeowners choose US-1 Pools</h2>
            <div className="feature-grid">
              <div><h3>Clay-soil expertise</h3><p>We do the engineered base work others skip — pools that hold their grade through Carolina seasons.</p></div>
              <div><h3>HOA fluency</h3><p>We know which Wake Forest HOAs want fence-spec submittals up front and which need plot drawings.</p></div>
              <div><h3>Local routes</h3><p>Our weekly service trucks already run through Wake Forest twice a week.</p></div>
              <div><h3>Full-service shop</h3><p>Sales, install, repair, and water care — one phone number for the whole pool lifecycle.</p></div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <h2>Other service areas nearby</h2>
            <div className="areas-grid">
              <a className="area-card" href="/areas/raleigh.html"><strong>Raleigh</strong><span>~30 min · Wake County</span></a>
              <a className="area-card" href="/areas/youngsville.html"><strong>Youngsville</strong><span>~15 min · Franklin County</span></a>
              <a className="area-card" href="/areas/franklinton.html"><strong>Franklinton</strong><span>HQ · Franklin County</span></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter serviceAreas />

      <JsonLd
        data={`{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.us1pools.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://www.us1pools.com/#service-areas"},{"@type":"ListItem","position":3,"name":"Wake Forest, NC","item":"https://www.us1pools.com/areas/wake-forest.html"}]}`}
      />
      <JsonLd
        data={`{"@context":"https://schema.org","@type":"LocalBusiness","name":"US-1 Pools — Wake Forest, NC","description":"Pool sales, service, and installation serving Wake Forest, NC and surrounding Wake County.","url":"https://www.us1pools.com/areas/wake-forest.html","telephone":"+1-919-441-0033","email":"us1pools@gmail.com","image":"https://www.us1pools.com/assets/images/gallery-04.webp","priceRange":"$$","address":{"@type":"PostalAddress","streetAddress":"3453 US Hwy 1 South","addressLocality":"Franklinton","addressRegion":"NC","postalCode":"27525","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":36.1026,"longitude":-78.4578},"areaServed":{"@type":"City","name":"Wake Forest","address":{"@type":"PostalAddress","addressLocality":"Wake Forest","addressRegion":"NC","addressCountry":"US"}}}`}
      />
    </>
  );
}
