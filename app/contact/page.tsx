import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Contact | US-1 Pools";
const DESCRIPTION = "Contact US-1 Pools for pool quotes, installs, and service across Franklin and surrounding counties.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Contact+%7C+US-1+Pools&subtitle=Contact+US-1+Pools+for+pool+quotes%2C+installs%2C+and+service+across+Franklin+and+surrounding+counties.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/contact",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/contact",
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

export default function ContactPage() {
  return (
    <>
      <BodyPage page="contact" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Contact</p>
            <h1>Tell us about your issue or project idea.</h1>
            <p>Share a few details and we will guide the next steps. We reply within two business days.</p>
            <div className="page-meta">
              <span className="meta-chip">Quotes</span>
              <span className="meta-chip">Service visits</span>
              <span className="meta-chip">Retail support</span>
            </div>
          </div>
        </section>

        <section className="section contact reveal">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2>Call, email, or visit the showroom.</h2>
              <p className="section-sub">We are based in Franklinton and serve Franklin and surrounding counties. <span data-seasonal>M-Th 11am-3pm · Fri 11am-5pm · Sat 10am-5pm · Sun 12pm-3pm</span></p>
              <div className="contact-cards">
                <div>
                  <h4>Address</h4>
                  <p>3453 US Hwy 1 South<br />Franklinton, NC 27525</p>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p><a href="tel:9194410033">919.441.0033</a><br /><a href="tel:9198640277">919.864.0277</a></p>
                </div>
                <div>
                  <h4>Email</h4>
                  <p><a href="mailto:us1pools@gmail.com">us1pools@gmail.com</a></p>
                </div>
                <div>
                  <h4>Seasonal hours</h4>
                  <p data-seasonal>M-Th 11am-3pm · Fri 11am-5pm · Sat 10am-5pm · Sun 12pm-3pm</p>
                </div>
              </div>
              <div className="hero-actions">
                <a className="btn btn-secondary" href="tel:9194410033">Call or Text</a>
                <a className="btn btn-ghost" href="mailto:us1pools@gmail.com">Email us</a>
              </div>
              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.5!2d-78.2836!3d36.0927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac5a3f1c2b4d67%3A0x1234567890abcdef!2s3453+US-1%2C+Franklinton%2C+NC+27525!5e0!3m2!1sen!2sus!4v1710000000000"
                  className="map-embed-frame"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="US-1 Pools location map">
                </iframe>
              </div>
            </div>
            <form className="contact-form" id="contactForm">
              <div className="form-grid">
                <label>
                  Full name <span className="required" aria-hidden="true">*</span>
                  <input type="text" name="name" placeholder="Your name" autoComplete="name" required />
                </label>
                <label>
                  Email address <span className="required" aria-hidden="true">*</span>
                  <input type="email" name="email" placeholder="you@email.com" autoComplete="email" required />
                </label>
                <label>
                  Phone number <span className="required" aria-hidden="true">*</span>
                  <input type="tel" name="phone" placeholder="(919) 555-1234" autoComplete="tel" inputMode="tel" required />
                </label>
                <label>
                  City or ZIP
                  <input type="text" name="location" placeholder="Wake Forest, 27587" autoComplete="postal-code" />
                </label>
                <label>
                  Installation address (if different)
                  <input type="text" name="install_address" placeholder="Street address for the pool site" autoComplete="street-address" />
                </label>
              </div>
              <label>
                Project type <span className="required" aria-hidden="true">*</span>
                <select name="project" required defaultValue="">
                  <option value="">Select one</option>
                  <option>Above ground pool</option>
                  <option>In-ground pool</option>
                  <option>Hot tub / spa</option>
                  <option>Service / maintenance</option>
                  <option>Equipment upgrade</option>
                  <option>Retail / water testing</option>
                </select>
              </label>
              <div className="form-grid">
                <label>
                  Budget range
                  <select name="budget" defaultValue="">
                    <option value="">Select one</option>
                    <option>Under $10k</option>
                    <option>$10k - $25k</option>
                    <option>$25k - $50k</option>
                    <option>$50k+</option>
                  </select>
                </label>
                <label>
                  Timeline
                  <select name="timeline" defaultValue="">
                    <option value="">Select one</option>
                    <option>ASAP</option>
                    <option>Next 1-3 months</option>
                    <option>Next 3-6 months</option>
                    <option>Just researching</option>
                  </select>
                </label>
              </div>
              <label>
                Tell us about your issue or project idea
                <textarea name="details" rows={4} placeholder="Pool issue, service need, or project goals"></textarea>
              </label>
              {/* Honeypot field (hidden from users, catches bots) */}
              <input type="text" name="website" className="honeypot-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div id="formStatus" className="form-status" hidden aria-live="polite" role="status"></div>
              <button className="btn btn-primary" data-haptic="nudge" type="submit" id="submitBtn">Get a Free Quote</button>
            </form>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "US-1 Pools",
      "url": "https://www.us1pools.com",
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
      "areaServed": ["Franklin County and surrounding counties"]
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
          "name": "Contact"
        }
      ]
    }`}
      />
      <script defer src="/contact-form.js"></script>
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
