import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "FAQ | US-1 Pools";
const DESCRIPTION = "Frequently asked questions about pool installs, service, and retail support from US-1 Pools.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=FAQ+%7C+US-1+Pools&subtitle=Frequently+asked+questions+about+pool+installs%2C+service%2C+and+retail+support+from+US-1+Pools.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/faq",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/faq",
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

export default function FaqPage() {
  return (
    <>
      <BodyPage page="faq" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">FAQ</p>
            <h1>Answers to common pool questions.</h1>
            <p>Need help choosing a pool or scheduling service? Here are the most common questions we get from homeowners across Franklin and surrounding counties.</p>
            <div className="page-meta">
              <span className="meta-chip">Installs</span>
              <span className="meta-chip">Service</span>
              <span className="meta-chip">Financing</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container faq-list">
            <details name="faq">
              <summary>Do you offer financing?</summary>
              <p>Yes. Financing is available through LightStream and HFS for qualified buyers. Ask us for current options and requirements.</p>
            </details>
            <details name="faq">
              <summary>Where do you service?</summary>
              <p>We are based in Franklinton and regularly serve Franklin and surrounding counties.</p>
            </details>
            <details name="faq">
              <summary>Do you handle openings and closings?</summary>
              <p>Yes. We provide seasonal openings and closings, including water balancing and equipment checks.</p>
            </details>
            <details name="faq">
              <summary>What pool brands do you carry?</summary>
              <p>We offer Imagine Fiberglass for fiberglass in-ground builds, Cardinal and Latham for vinyl liner work, and above-ground systems such as Genesis, Nakoma, and Discovery when available.</p>
            </details>
            <details name="faq">
              <summary>Can I bring in water for testing?</summary>
              <p>Absolutely. Stop by the showroom and we will test your water and recommend the right balance plan.</p>
            </details>
            <details name="faq">
              <summary>What are your seasonal hours?</summary>
              <p data-seasonal="">Current hours: M-Th 11am-3pm · Fri 11am-5pm · Sat 10am-5pm · Sun 12pm-3pm. Hours change seasonally — call to confirm.</p>
            </details>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Still have questions?</p>
              <h2>We are happy to help.</h2>
              <p className="section-sub">Call, text, or stop by the showroom. Our team can walk you through options, pricing, and scheduling.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>Call us at <a href="tel:9194410033">919.441.0033</a></li>
                <li>Email <a href="mailto:us1pools@gmail.com">us1pools@gmail.com</a></li>
                <li>3453 US Hwy 1 South, Franklinton, NC 27525</li>
              </ul>
              <a className="btn btn-secondary" href="/contact.html">Contact Us</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".page-hero", ".faq-list"]
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you offer financing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Financing is available through LightStream and HFS for qualified buyers. Ask us for current options and requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Where do you service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are based in Franklinton and regularly serve Franklin and surrounding counties."
          }
        },
        {
          "@type": "Question",
          "name": "Do you handle openings and closings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide seasonal openings and closings, including water balancing and equipment checks."
          }
        },
        {
          "@type": "Question",
          "name": "What pool brands do you carry?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Imagine Fiberglass for fiberglass in-ground builds, Cardinal and Latham for vinyl liner work, and above-ground systems such as Genesis, Nakoma, and Discovery when available."
          }
        },
        {
          "@type": "Question",
          "name": "Can I bring in water for testing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Stop by the showroom and we will test your water and recommend the right balance plan."
          }
        },
        {
          "@type": "Question",
          "name": "What are your seasonal hours?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Current hours: M-Th 11am-3pm, Fri 11am-5pm, Sat 10am-5pm, Sun 12pm-3pm. Hours change seasonally — call to confirm."
          }
        }
      ]
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
          "name": "FAQ"
        }
      ]
    }`}
      />
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
