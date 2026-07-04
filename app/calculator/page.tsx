import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Pool Cost Calculator | US-1 Pools";
const DESCRIPTION = "Get an estimated cost range for your pool project with our interactive calculator.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Pool+Cost+Calculator+%7C+US-1+Pools&subtitle=Get+an+estimated+cost+range+for+your+pool+project+with+our+interactive+calculator.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/calculator",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/calculator",
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

export default function CalculatorPage() {
  return (
    <>
      <BodyPage page="calculator" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Estimate Your Project</p>
            <h1>Pool Cost Calculator</h1>
            <p>Answer a few questions to get a ballpark estimate for your pool project.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container container-narrow">
            <div className="calculator" id="poolCalculator">
              {/* Step 1: Pool Type */}
              <div className="calculator-step active" data-step="1">
                <h2>What type of pool are you interested in?</h2>
                <div className="calculator-options">
                  <div className="calculator-option" role="button" tabIndex={0} data-value="above-ground" data-cost="3000-10000">
                    <h3>Above-Ground Pool</h3>
                    <p>Classic round or oval pools with deck options.</p>
                    <p><strong>Typical range: $3,000 - $10,000</strong></p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="in-ground-vinyl" data-cost="25000-65000">
                    <h3>In-Ground Vinyl Liner</h3>
                    <p>Custom shapes with vinyl liner finish.</p>
                    <p><strong>Typical range: $25,000 - $65,000</strong></p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="in-ground-fiberglass" data-cost="55000-100000">
                    <h3>In-Ground Fiberglass</h3>
                    <p>Pre-molded fiberglass shell, low maintenance.</p>
                    <p><strong>Typical range: $55,000 - $100,000</strong></p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="spa" data-cost="8000-15000">
                    <h3>Hot Tub / Spa</h3>
                    <p>Above-ground spa with jets and heating.</p>
                    <p><strong>Typical range: $8,000 - $15,000</strong></p>
                  </div>
                </div>
              </div>

              {/* Step 2: Size */}
              <div className="calculator-step" data-step="2">
                <h2>What size are you considering?</h2>
                <div className="calculator-options">
                  <div className="calculator-option" role="button" tabIndex={0} data-value="small" data-multiplier="0.8">
                    <h3>Small</h3>
                    <p>12-18 ft diameter (above-ground) or 12x24 ft (in-ground)</p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="medium" data-multiplier="1">
                    <h3>Medium</h3>
                    <p>18-24 ft diameter (above-ground) or 16x32 ft (in-ground)</p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="large" data-multiplier="1.3">
                    <h3>Large</h3>
                    <p>24+ ft diameter (above-ground) or 18x36+ ft (in-ground)</p>
                  </div>
                </div>
                <button className="btn btn-ghost" type="button" data-calculator-back>← Back</button>
              </div>

              {/* Step 3: Features */}
              <div className="calculator-step" data-step="3">
                <h2>Any additional features?</h2>
                <div className="calculator-options">
                  <div className="calculator-option" role="button" tabIndex={0} data-value="basic" data-addition-low="0" data-addition-high="0">
                    <h3>Basic Package</h3>
                    <p>Standard pump, filter, and ladder/stairs.</p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="mid" data-addition-low="3000" data-addition-high="5000">
                    <h3>Mid-Level</h3>
                    <p>+ upgraded filter, heater, automation-ready controls.</p>
                    <p><strong>+$3,000 - $5,000</strong></p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="premium" data-addition-low="8000" data-addition-high="12000">
                    <h3>Premium</h3>
                    <p>+ Automation, salt system, LED package, cover.</p>
                    <p><strong>+$8,000 - $12,000</strong></p>
                  </div>
                </div>
                <button className="btn btn-ghost" type="button" data-calculator-back>← Back</button>
              </div>

              {/* Step 4: Timeline */}
              <div className="calculator-step" data-step="4">
                <h2>When are you looking to install?</h2>
                <div className="calculator-options">
                  <div className="calculator-option" role="button" tabIndex={0} data-value="spring">
                    <h3>Spring (March-May)</h3>
                    <p>Peak season, ready for summer.</p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="summer">
                    <h3>Summer (June-August)</h3>
                    <p>High demand period.</p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="fall">
                    <h3>Fall (September-November)</h3>
                    <p>Good availability, ready for next season.</p>
                  </div>
                  <div className="calculator-option" role="button" tabIndex={0} data-value="planning">
                    <h3>Just Planning</h3>
                    <p>Researching options for future install.</p>
                  </div>
                </div>
                <button className="btn btn-ghost" type="button" data-calculator-back>← Back</button>
              </div>

              {/* Result */}
              <div className="calculator-step calculator-result-step" data-step="result">
                <div className="calculator-result" role="status" aria-live="polite">
                  <p className="eyebrow">Estimated Cost Range</p>
                  <h3 id="calculatorResult" aria-atomic="true">$0 - $0</h3>
                  <p id="calculatorDetails">Based on your selections</p>
                </div>
                <div className="calculator-result-note">
                  <p><strong>Ready to get an exact quote?</strong></p>
                  <p>Every project is unique. Contact us for a detailed estimate based on your specific site and needs.</p>
                  <div className="hero-actions calculator-result-actions">
                    <a className="btn btn-primary" data-haptic="nudge" href="/contact.html">Get a Free Quote</a>
                    <button className="btn btn-ghost" type="button" data-calculator-reset>Start Over</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="calculator-notes">
              <h3>Important Notes:</h3>
              <ul className="calculator-note-list">
                <li>These are rough estimates based on typical projects.</li>
                <li>Actual costs depend on site conditions, access, permits, and local requirements.</li>
                <li>Pricing does not include site prep, electrical, fencing, or landscaping.</li>
                <li>Financing options available — ask about payment plans.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "Pool Cost Calculator",
          "description": "Estimate the cost of a new pool installation in North Carolina. Get ballpark pricing for above-ground pools, vinyl liner in-ground pools, and fiberglass shells.",
          "url": "https://www.us1pools.com/calculator.html",
          "applicationCategory": "UtilityApplication",
          "operatingSystem": "Any",
          "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
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
                      "name": "Pool Cost Calculator"
                }
          ]
    }`}
      />
      <script defer src="/calculator.js"></script>
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
