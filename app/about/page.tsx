import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "About US-1 Pools | Franklin County Pool Experts";
const DESCRIPTION = "US-1 Pools is a family-owned, NC-licensed pool company serving Franklin and surrounding counties.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=About+US-1+Pools+%7C+Franklin+County+Pool+Experts&subtitle=US-1+Pools+is+a+family-owned%2C+NC-licensed+pool+company+serving+Franklin+and+surrounding+counties.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/about",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/about",
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

export default function AboutPage() {
  return (
    <>
      <BodyPage page="about" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">About Us</p>
            <h1>Family-owned, locally focused.</h1>
            <p>US-1 Pools was started in 2015 by Shayne and Cathy Parrish. Shayne has been in the pool business since 1986, bringing decades of experience to pool design, service, and equipment decisions.</p>
            <div className="page-meta">
              <span className="meta-chip">Founded 2015</span>
              <span className="meta-chip">Since 1986</span>
              <span className="meta-chip">CPO Certified</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container content-grid">
            <div>
              <h2>Local roots, long-term relationships.</h2>
              <p className="section-sub">We serve Franklin and surrounding counties with the same focus we give every install: clear communication, clean craftsmanship, and honest follow-through.</p>
              <div className="badge-row">
                <span className="badge"><img src="/assets/images/nc-licensed.png" alt="" width={318} height={315} /> NC Licensed</span>
                <span className="badge">Residential + Commercial</span>
                <span className="badge">Water Care Experts</span>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/team.webp" alt="US-1 Pools leadership team" loading="lazy" width={2500} height={2058} decoding="async" />
              <span className="image-caption">Family owned and locally run</span>
            </div>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Leadership</p>
                <h2>Meet the US-1 Pools team.</h2>
              </div>
              <p className="section-sub">A hands-on leadership team keeps every project aligned — from design to service scheduling.</p>
            </div>
            <div className="card-grid card-grid--2col">
              <article className="service-card service-card--text">
                <h3>Shayne Parrish</h3>
                <p>Owner · CPO certified · Pool industry experience since 1986. Hands-on with every major build and equipment decision.</p>
              </article>
              <article className="service-card service-card--text">
                <h3>Cathy Parrish</h3>
                <p>Owner · CPO certified · Operations support. Helps guide customers through pool care, product decisions, and project planning.</p>
              </article>
              <article className="service-card service-card--text">
                <h3>Tonni Deitch</h3>
                <p>Customer care · Service scheduling · Retail support. The voice behind most service calls and showroom visits.</p>
              </article>
              <article className="service-card service-card--text">
                <h3>Alan Deitch</h3>
                <p>Operations · Retail support · Logistics. Helps coordinate schedules, products, and customer support from the shop side.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Why US-1 Pools</p>
              <h2>We build it. We care for it.</h2>
              <p className="section-sub">Our clients stay with us because we handle the full lifecycle — build, upgrades, and ongoing maintenance.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>Sales, service, and installation in one place</li>
                <li>Equipment upgrades and water chemistry support</li>
                <li>Retail access for chemicals and parts</li>
              </ul>
              <a className="btn btn-secondary" href="/contact.html">Start Your Project</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About US-1 Pools",
          "description": "Learn about US-1 Pools \\u2014 a trusted pool company for sales, service, and installation across Franklin and surrounding counties.",
          "url": "https://www.us1pools.com/about.html",
          "dateModified": "2026-03-14",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".page-hero", ".section-sub"]
          },
          "mainEntity": {
                "@type": "LocalBusiness",
                "@id": "https://www.us1pools.com/#business",
                "name": "US-1 Pools",
                "foundingDate": "2015",
                "founder": {
                      "@type": "Person",
                      "name": "Shayne Parrish"
                },
                "telephone": "+1-919-441-0033",
                "email": "us1pools@gmail.com",
                "address": {
                      "@type": "PostalAddress",
                      "streetAddress": "3453 US Hwy 1 South",
                      "addressLocality": "Franklinton",
                      "addressRegion": "NC",
                      "postalCode": "27525",
                      "addressCountry": "US"
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
                      "name": "About"
                }
          ]
    }`}
      />
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
