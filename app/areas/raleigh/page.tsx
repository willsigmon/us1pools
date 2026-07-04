import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const OG_TITLE = "Pool Services in Raleigh, NC | US-1 Pools";
const OG_DESCRIPTION = "Trusted pool installation and service in Raleigh and surrounding areas.";
const OG_IMAGE = "https://www.us1pools.com/assets/images/pool-02.jpg";

export const metadata: Metadata = {
  title: "Pool Installation & Service in Raleigh, NC | US-1 Pools",
  description: "Professional pool installation, maintenance, and repair services in Raleigh, NC. Above-ground, in-ground pools, and hot tubs. Call (919) 441-0033.",
  alternates: {
    canonical: "https://www.us1pools.com/areas/raleigh.html",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.us1pools.com/areas/raleigh.html",
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

export default function RaleighPage() {
  return (
    <>
      <BodyPage page="areas" />
      <BgOrbs />
      <main id="main">
        <nav className="breadcrumbs container" aria-label="Breadcrumb">
          <ol>
            <li><a href="/index.html">Home</a></li>
            <li><a href="/index.html#service-areas">Service Areas</a></li>
            <li aria-current="page">Raleigh, NC</li>
          </ol>
        </nav>

        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Service Area</p>
            <h1>Pool Sales, Service & Installation in Raleigh, NC</h1>
            <p>From North Raleigh to Brier Creek and the Falls Lake corridor, we bring owner-led pool installs, service, and water care from our Franklinton shop.</p>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <h2>Raleigh&apos;s nearby pool company</h2>
              <p>We serve Raleigh in focused routes from our US-1 shop, with the same in-house crew, clear scheduling, and practical site planning we use closer to home. Whether the project is a backyard install, seasonal maintenance, or equipment repair, the goal is simple: calm communication and work that matches the quote.</p>
              <p><strong>What we bring to Raleigh:</strong></p>
              <ul>
                <li>Complete above-ground and in-ground pool installations</li>
                <li>Hot tub and spa sales, delivery, and setup</li>
                <li>Weekly and seasonal pool maintenance</li>
                <li>Equipment repair and upgrades (pumps, filters, heaters)</li>
                <li>Liner replacements and renovation services</li>
                <li>Chemical testing and water care support</li>
              </ul>
            </div>
            <div>
              <div className="highlight">
                <h3>Service coverage in Raleigh</h3>
                <p>We regularly work in these Raleigh neighborhoods and zip codes:</p>
                <ul className="service-area-list">
                  <li><strong>North Raleigh:</strong> 27609, 27615, 27614</li>
                  <li><strong>Downtown/Midtown:</strong> 27601, 27603, 27605</li>
                  <li><strong>West Raleigh:</strong> 27606, 27607, 27608</li>
                  <li><strong>Southeast Raleigh:</strong> 27610, 27612</li>
                  <li><strong>Brier Creek, Falls Lake areas</strong></li>
                </ul>
                <p className="drive-time-note"><strong>Drive time:</strong> ~30 minutes from our Franklinton shop. New installs are scheduled around route density, site access, and permit timing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Ready to start?</p>
              <h2>Get a free quote for your Raleigh pool project</h2>
              <p className="section-sub">We&apos;ll visit your property, discuss your vision, and provide a detailed estimate — no obligation.</p>
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
            <h2>Why Raleigh homeowners choose US-1 Pools</h2>
            <div className="feature-grid">
              <div>
                <h3>Nearby and reliable</h3>
                <p>Based in Franklinton, we can support Raleigh projects without sending you through a franchise call center.</p>
              </div>
              <div>
                <h3>Experienced leadership</h3>
                <p>Owners Shayne and Cathy Parrish bring decades of pool experience, CPO certification, and practical local build knowledge.</p>
              </div>
              <div>
                <h3>Transparent pricing</h3>
                <p>No hidden fees. Clear quotes that match our final invoices.</p>
              </div>
              <div>
                <h3>Full-service support</h3>
                <p>From design and permitting to installation and ongoing maintenance — we handle it all.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <h2>Other service areas nearby</h2>
            <div className="areas-grid">
              <a className="area-card" href="/areas/wake-forest.html"><strong>Wake Forest</strong><span>~15 min · Wake County</span></a>
              <a className="area-card" href="/areas/durham.html"><strong>Durham</strong><span>~25 min · Durham County</span></a>
              <a className="area-card" href="/areas/franklinton.html"><strong>Franklinton</strong><span>HQ · Franklin County</span></a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.us1pools.com/"},{"@type":"ListItem","position":2,"name":"Service Areas","item":"https://www.us1pools.com/#service-areas"},{"@type":"ListItem","position":3,"name":"Raleigh, NC","item":"https://www.us1pools.com/areas/raleigh.html"}]}`}
      />
      <JsonLd
        data={`{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "US-1 Pools - Raleigh Service Area",
      "description": "Pool installation and service in Raleigh, NC",
      "url": "https://www.us1pools.com/areas/raleigh.html",
      "telephone": "+1-919-441-0033",
      "email": "us1pools@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3453 US Hwy 1 South",
        "addressLocality": "Franklinton",
        "addressRegion": "NC",
        "postalCode": "27525",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "City",
        "name": "Raleigh",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Raleigh",
          "addressRegion": "NC",
          "addressCountry": "US"
        }
      }
    }`}
      />
    </>
  );
}
