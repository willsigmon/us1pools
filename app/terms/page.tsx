import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Terms of Service | US-1 Pools";
const DESCRIPTION = "Terms of service for US-1 Pools. Review our service agreements, payment terms, and policies.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Terms+of+Service+%7C+US-1+Pools&subtitle=Terms+of+service+for+US-1+Pools.+Review+our+service+agreements%2C+payment+terms%2C+and+policies.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/terms",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/terms",
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

export default function TermsPage() {
  return (
    <>
      <BodyPage page="legal" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Legal</p>
            <h1>Terms of Service</h1>
            <p>Please review these terms before using our website or engaging our services.</p>
            <div className="page-meta">
              <span className="meta-chip">Effective March 7, 2026</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Agreement to Terms</h2>
              </div>
            </div>
            <p>By accessing our website at <a href="https://www.us1pools.com">us1pools.com</a> or engaging US-1 Pools for services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.</p>
            <p>US-1 Pools is a North Carolina-licensed pool company located at 3453 US Hwy 1 South, Franklinton, NC 27525.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Services</h2>
              </div>
            </div>
            <p className="section-sub">US-1 Pools provides the following services:</p>
            <ul>
              <li><strong>Pool installation</strong> &mdash; above-ground systems, fiberglass in-ground shells, vinyl liner pool work, and setup</li>
              <li><strong>Hot tub and swim spa sales</strong> &mdash; supply and installation of hot tubs and swim spas</li>
              <li><strong>Pool maintenance and service</strong> &mdash; seasonal openings and closings, equipment repair, water testing, and ongoing maintenance</li>
              <li><strong>Liner replacement</strong> &mdash; vinyl liner measurement, supply, and installation</li>
              <li><strong>Equipment upgrades</strong> &mdash; pumps, filters, heaters, and automation systems</li>
              <li><strong>Retail</strong> &mdash; pool chemicals, parts, accessories, and water testing at our showroom</li>
            </ul>
            <p>All services are subject to availability, site conditions, and applicable permits. Specific terms for your project will be outlined in your service agreement or proposal.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Service Agreements</h2>
              </div>
            </div>
            <p>Installation and major service projects require a signed service agreement before work begins. Your agreement will include:</p>
            <ul>
              <li>Detailed scope of work</li>
              <li>Project timeline and milestones</li>
              <li>Total cost and payment schedule</li>
              <li>Applicable warranty information</li>
              <li>Site preparation requirements and homeowner responsibilities</li>
            </ul>
            <p>Any changes to the agreed scope of work must be documented in writing and may affect the project cost and timeline.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Payment Terms</h2>
              </div>
            </div>
            <p className="section-sub">Payment policies vary by service type:</p>
            <ul>
              <li><strong>Deposits</strong> &mdash; installation projects typically require a deposit to reserve scheduling and order materials. Deposit amounts are specified in your service agreement.</li>
              <li><strong>Progress payments</strong> &mdash; larger projects may include milestone-based payments as outlined in your agreement.</li>
              <li><strong>Final payment</strong> &mdash; balance is due upon completion of work unless otherwise specified.</li>
              <li><strong>Retail purchases</strong> &mdash; payment is due at time of purchase.</li>
              <li><strong>Online payments</strong> &mdash; invoiced amounts can be paid online through Stripe, our secure payment processor. You will receive a payment link or can access it through our website.</li>
            </ul>
            <p>Overdue balances may be subject to late fees as specified in your service agreement. We reserve the right to suspend work on projects with outstanding balances.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Warranties</h2>
              </div>
            </div>
            <p>Warranty coverage depends on the type of product or service:</p>
            <ul>
              <li><strong>Manufacturer warranties</strong> &mdash; pools, hot tubs, equipment, and parts are covered by their respective manufacturer warranties. Coverage terms and duration vary by product.</li>
              <li><strong>Installation workmanship</strong> &mdash; US-1 Pools warrants our installation workmanship as specified in your service agreement.</li>
              <li><strong>Exclusions</strong> &mdash; warranties do not cover damage caused by improper maintenance, unauthorized modifications, acts of nature, or normal wear and tear.</li>
            </ul>
            <p>Warranty claims should be reported to us promptly. We will work with you and the manufacturer to resolve valid claims.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Limitation of Liability</h2>
              </div>
            </div>
            <p>To the fullest extent permitted by North Carolina law:</p>
            <ul>
              <li>US-1 Pools' total liability for any claim arising from our services shall not exceed the amount you paid for the specific service giving rise to the claim.</li>
              <li>We are not liable for indirect, incidental, special, or consequential damages, including but not limited to property damage beyond the scope of our work, loss of use, or loss of income.</li>
              <li>We are not responsible for pre-existing conditions of your property, underground utilities not disclosed or properly marked, or issues arising from soil conditions discovered during installation.</li>
              <li>Homeowners are responsible for maintaining proper water chemistry, winterization (when not contracted to us), and compliance with local fencing and safety ordinances.</li>
            </ul>
            <p>Nothing in these terms limits liability for gross negligence or willful misconduct.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Website Use</h2>
              </div>
            </div>
            <p>Our website is provided for informational purposes. While we strive to keep content accurate and current:</p>
            <ul>
              <li>Product images and descriptions are representative and may differ from actual products.</li>
              <li>Pricing shown on the website is subject to change and does not constitute a binding offer.</li>
              <li>We reserve the right to modify or discontinue any aspect of our website without notice.</li>
            </ul>
            <p>For the most current pricing and availability, please <a href="/contact.html">contact us</a> directly.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Governing Law</h2>
              </div>
            </div>
            <p>These Terms of Service are governed by and construed in accordance with the laws of the State of North Carolina, without regard to conflict of law principles. Any disputes arising from these terms or our services shall be resolved in the courts of Franklin County, North Carolina.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <h2>Changes to These Terms</h2>
              </div>
            </div>
            <p>We may update these Terms of Service from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website or services after changes constitutes acceptance of the updated terms.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Questions?</p>
              <h2>Need clarification on our terms?</h2>
              <p className="section-sub">If you have questions about these terms or need more detail about a service agreement, we are happy to help.</p>
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
    "name": "Terms of Service",
    "description": "Terms of service for US-1 Pools. Review our service agreements, payment terms, and policies.",
    "url": "https://www.us1pools.com/terms.html",
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
