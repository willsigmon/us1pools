import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Pay Online | US-1 Pools";
const DESCRIPTION = "Pay your US-1 Pools invoice securely online through Stripe.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Pay+Online+%7C+US-1+Pools&subtitle=Pay+your+US-1+Pools+invoice+securely+online+through+Stripe.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/payment",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/payment",
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

export default function PaymentPage() {
  return (
    <>
      <BodyPage page="payment" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Secure Payment</p>
            <h1>Pay your invoice online.</h1>
            <p>Existing US-1 Pools customers can pay invoiced balances securely through Stripe.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>How it works</h2>
              </div>
              <p className="section-sub">A few things to know before you pay.</p>
            </div>
            <div className="card-grid">
              <article className="service-card service-card--text">
                <h3>For existing customers</h3>
                <p>This payment page is for customers who have received an invoice from US-1 Pools for completed or scheduled work. If you have not received an invoice, please <a href="/contact.html">contact us</a> first.</p>
              </article>
              <article className="service-card service-card--text">
                <h3>Have your invoice ready</h3>
                <p>When you proceed to Stripe, you will be able to enter your payment amount. Please reference your invoice number or project details so we can match your payment to your account.</p>
              </article>
              <article className="service-card service-card--text">
                <h3>Secure processing</h3>
                <p>All payments are processed through <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">Stripe</a>, a PCI-compliant payment platform trusted by millions of businesses. US-1 Pools never sees or stores your credit card information.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="payment-panel">
              <img className="payment-logo" src="/assets/images/logo.png" alt="US-1 Pools" width={2500} height={1029} />
              <h2>Ready to pay?</h2>
              <p className="section-sub">Click below to proceed to our secure Stripe payment page. You will be able to enter your payment amount and complete the transaction.</p>
              <div className="hero-actions payment-actions">
                <a className="btn btn-primary" href="https://buy.stripe.com/5kA4iY3xm30agFObII" target="_blank" rel="noopener noreferrer">Proceed to Secure Payment</a>
              </div>
              <p className="payment-note">You will be redirected to Stripe&apos;s secure payment page.</p>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Need help?</p>
              <h2>Questions about your invoice?</h2>
              <p className="section-sub">If you have questions about an invoice amount, need to arrange a payment plan, or did not receive your invoice, give us a call.</p>
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
    "@type": "WebPage",
    "name": "Pay Online",
    "description": "Pay your US-1 Pools invoice securely online through Stripe.",
    "url": "https://www.us1pools.com/payment.html",
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
