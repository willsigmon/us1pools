import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Privacy Policy | US-1 Pools";
const DESCRIPTION = "Privacy policy for US-1 Pools. Learn how we collect, use, and protect your personal information.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Privacy+Policy+%7C+US-1+Pools&subtitle=Privacy+policy+for+US-1+Pools.+Learn+how+we+collect%2C+use%2C+and+protect+your+personal+information.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/privacy-policy",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <BodyPage page="legal" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Legal</p>
            <h1>Privacy Policy</h1>
            <p>How US-1 Pools collects, uses, and protects your personal information.</p>
            <div className="page-meta">
              <span className="meta-chip">Effective March 7, 2026</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Information We Collect</h2>
              </div>
            </div>
            <p className="section-sub">When you use our contact form or interact with our website, we may collect the following information:</p>
            <ul>
              <li><strong>Name</strong> &mdash; to identify you and personalize our communication</li>
              <li><strong>Email address</strong> &mdash; to respond to your inquiry</li>
              <li><strong>Phone number</strong> &mdash; to reach you about your project</li>
              <li><strong>City or ZIP code</strong> &mdash; to determine if your location is within our service area</li>
              <li><strong>Project details</strong> &mdash; including project type, budget range, timeline, and description of your space</li>
              <li><strong>Installation address</strong> &mdash; if provided, to plan site visits</li>
            </ul>
            <p>We only collect information that you voluntarily provide through our contact form or direct communication.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>How We Use Your Information</h2>
              </div>
            </div>
            <p className="section-sub">We use the information we collect to:</p>
            <ul>
              <li>Respond to your quote requests and service inquiries</li>
              <li>Schedule consultations, site visits, and service appointments</li>
              <li>Provide estimates for pool installation, maintenance, and retail services</li>
              <li>Communicate project updates and follow-up information</li>
              <li>Improve our website and customer experience</li>
            </ul>
            <p>We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Third-Party Services</h2>
              </div>
            </div>
            <p className="section-sub">We use the following third-party services to operate our website and business:</p>

            <h3>Plausible Analytics</h3>
            <p>We use <a href="https://plausible.io" target="_blank" rel="noopener noreferrer">Plausible Analytics</a> for website analytics. Plausible is a privacy-friendly analytics tool that does not use cookies, does not collect personal data, and does not track you across websites. All data is aggregated and no individual visitors can be identified.</p>

            <h3>Stripe</h3>
            <p>We use <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Stripe</a> to process online payments for invoiced services. When you make a payment through Stripe, your payment information (such as credit card details) is collected and processed directly by Stripe. Stripe may set cookies necessary for payment processing and fraud prevention. US-1 Pools does not store your credit card information. Stripe's use of your data is governed by <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe's Privacy Policy</a>.</p>

            <h3>AI Chatbot</h3>
            <p>Our website may include an AI-powered chatbot to assist with common questions. Conversations with the chatbot may be processed by a third-party AI service. Do not share sensitive personal information (such as payment details or Social Security numbers) through the chatbot.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Cookies</h2>
              </div>
            </div>
            <p>Our analytics provider, Plausible, is completely cookieless and does not set any cookies on your device.</p>
            <p>Stripe may set cookies when you visit our payment page. These cookies are necessary for secure payment processing and fraud prevention. We do not use cookies for advertising or tracking purposes.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Data Security</h2>
              </div>
            </div>
            <p>We take reasonable measures to protect your personal information from unauthorized access, alteration, or destruction. Our website is served over HTTPS, and payment processing is handled through Stripe's PCI-compliant infrastructure.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Your Rights</h2>
              </div>
            </div>
            <p className="section-sub">You have the right to:</p>
            <ul>
              <li><strong>Access</strong> the personal information we hold about you</li>
              <li><strong>Request correction</strong> of inaccurate information</li>
              <li><strong>Request deletion</strong> of your personal information</li>
              <li><strong>Opt out</strong> of any future communications from us</li>
            </ul>
            <p>To exercise any of these rights, contact us using the information below.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Changes to This Policy</h2>
              </div>
            </div>
            <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Questions?</p>
              <h2>Contact us about your privacy.</h2>
              <p className="section-sub">If you have questions about this privacy policy or how we handle your information, reach out anytime.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>US-1 Pools</li>
                <li>3453 US Hwy 1 South, Franklinton, NC 27525</li>
                <li><a href="mailto:us1pools@gmail.com">us1pools@gmail.com</a></li>
                <li><a href="tel:9194410033">919.441.0033</a></li>
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
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy policy for US-1 Pools. Learn how we collect, use, and protect your personal information.",
    "url": "https://www.us1pools.com/privacy-policy.html",
    "dateModified": "2026-03-07",
    "isPartOf": {
      "@type": "WebSite",
      "name": "US-1 Pools",
      "url": "https://www.us1pools.com"
    }
  }`}
      />
    </>
  );
}
