import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Pool Care & Maintenance Guide | US-1 Pools";
const DESCRIPTION = "Essential pool care tips for NC pool owners. Learn how to maintain water chemistry, winterize your pool, and keep equipment running smoothly.";
// The original head uses a distinct og/twitter description and a plain image
// (no og:site_name, og:image dimensions, or image alt) — reproduced verbatim.
const OG_DESCRIPTION = "Everything you need to keep your pool crystal clear — weekly checklists, water chemistry, winterizing, and troubleshooting.";
const OG_IMAGE = "https://www.us1pools.com/assets/images/gallery-04.webp";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/guides/pool-care.html",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    type: "article",
    title: TITLE,
    description: OG_DESCRIPTION,
    url: "https://www.us1pools.com/guides/pool-care.html",
    images: [{ url: OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: [{ url: OG_IMAGE }],
  },
  other: { "ai-content-declaration": "human-authored, human-edited" },
};

export default function PoolCareGuidePage() {
  return (
    <>
      <BodyPage page="guides" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Resource Center</p>
            <h1>Pool Care & Maintenance Guide</h1>
            <p>Everything you need to know to keep your pool crystal clear and equipment running smoothly.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container container-article">
            <article className="guide-article">
              <h2>Weekly Maintenance Checklist</h2>
              <ul>
                <li><strong>Test water chemistry</strong> — pH, chlorine, alkalinity (use test strips or bring a sample to our retail counter)</li>
                <li><strong>Skim debris</strong> — leaves, bugs, and surface contaminants</li>
                <li><strong>Brush walls and floor</strong> — prevent algae buildup</li>
                <li><strong>Vacuum</strong> — manual or automatic cleaner</li>
                <li><strong>Check filter pressure</strong> — backwash if needed</li>
                <li><strong>Inspect equipment</strong> — listen for unusual pump noise, check for leaks</li>
              </ul>

              <h2>Water Chemistry Basics</h2>
              <div className="highlight guide-highlight">
                <h3>Ideal Ranges for NC Pools:</h3>
                <ul>
                  <li><strong>pH:</strong> 7.2 - 7.6</li>
                  <li><strong>Free Chlorine:</strong> 1.0 - 3.0 ppm</li>
                  <li><strong>Total Alkalinity:</strong> 80 - 120 ppm</li>
                  <li><strong>Calcium Hardness:</strong> 200 - 400 ppm</li>
                  <li><strong>Cyanuric Acid (stabilizer):</strong> 30 - 50 ppm</li>
                </ul>
                <p className="guide-note"><em>Bring water samples to our Franklinton location for free testing and personalized chemical recommendations.</em></p>
              </div>

              <h2>Winterizing Your Pool (North Carolina)</h2>
              <p>Most local pools close mid-November through early March. Here's how to winterize properly:</p>
              <ol>
                <li><strong>Balance water chemistry</strong> one final time before closing.</li>
                <li><strong>Lower water level</strong> below skimmer and returns (in-ground pools).</li>
                <li><strong>Drain and blow out plumbing lines</strong> to prevent freeze damage.</li>
                <li><strong>Add winterizing chemicals</strong> (algaecide and shock).</li>
                <li><strong>Cover the pool</strong> with a secure winter cover to block debris and sunlight.</li>
                <li><strong>Store accessories</strong> — ladders, cleaners, and hoses indoors.</li>
              </ol>
              <p><em>Not comfortable doing it yourself? We offer full winterization services — call (919) 441-0033 to schedule.</em></p>

              <h2>Opening Your Pool in Spring</h2>
              <ol>
                <li>Remove and clean your winter cover.</li>
                <li>Refill to normal operating level.</li>
                <li>Reconnect and inspect all equipment (pumps, filters, heaters).</li>
                <li>Shock the pool and run the filter for 24-48 hours.</li>
                <li>Test and balance chemistry.</li>
                <li>Vacuum debris and brush surfaces.</li>
              </ol>
              <p><em>Want a hassle-free opening? Book our spring startup service and we'll handle everything.</em></p>

              <h2>Common Pool Problems & Fixes</h2>
              <div className="guide-problem">
                <h3>Cloudy Water</h3>
                <p><strong>Causes:</strong> High pH, low chlorine, poor filtration, or algae bloom.</p>
                <p><strong>Fix:</strong> Test and balance chemistry, shock if needed, run filter continuously for 24 hours, and vacuum.</p>
              </div>
              <div className="guide-problem">
                <h3>Green Water (Algae)</h3>
                <p><strong>Causes:</strong> Low chlorine or sanitizer failure.</p>
                <p><strong>Fix:</strong> Brush walls thoroughly, shock heavily (triple dose), run filter 24/7, vacuum to waste (if possible), add algaecide.</p>
              </div>
              <div className="guide-problem">
                <h3>Low Pressure at Returns</h3>
                <p><strong>Causes:</strong> Clogged filter, blocked skimmer basket, or air leak in pump.</p>
                <p><strong>Fix:</strong> Clean or backwash filter, empty skimmer and pump baskets, check for leaks.</p>
              </div>

              <h2>When to Call a Pro</h2>
              <ul>
                <li>Persistent chemical imbalances you can't fix</li>
                <li>Pump, filter, or heater malfunctions</li>
                <li>Leaks in plumbing or pool structure</li>
                <li>Major algae outbreaks</li>
                <li>Equipment upgrades or replacements</li>
              </ul>
              <p className="guide-closing-note">US-1 Pools offers on-site service, repairs, and equipment installs. Call us at <a href="tel:9194410033">(919) 441-0033</a> or <a href="/contact.html">request service online</a>.</p>
            </article>

            <div className="clinic reveal guide-cta">
              <div className="container clinic-card">
                <div>
                  <h2>Need Supplies or Expert Advice?</h2>
                  <p>Visit our retail counter in Franklinton for chemicals, test kits, parts, and free water testing.</p>
                </div>
                <div className="clinic-details">
                  <a className="btn btn-primary" href="/contact.html">Get Directions</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Pool Care & Maintenance Guide",
          "description": "Essential pool care tips for North Carolina pool owners. Learn how to maintain water chemistry, winterize your pool, and troubleshoot common problems.",
          "url": "https://www.us1pools.com/guides/pool-care.html",
          "dateModified": "2026-03-14",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".page-hero", ".guide-article"]
          },
          "step": [
                {
                      "@type": "HowToStep",
                      "name": "Test Water Chemistry",
                      "text": "Test pH, chlorine, and alkalinity weekly using test strips or bring a sample to US-1 Pools for free testing."
                },
                {
                      "@type": "HowToStep",
                      "name": "Skim and Brush",
                      "text": "Remove surface debris with a skimmer net and brush pool walls and floor to prevent algae buildup."
                },
                {
                      "@type": "HowToStep",
                      "name": "Vacuum",
                      "text": "Vacuum the pool floor using a manual or automatic pool cleaner."
                },
                {
                      "@type": "HowToStep",
                      "name": "Check Filter Pressure",
                      "text": "Monitor filter pressure gauge and backwash when pressure rises 8-10 PSI above clean baseline."
                },
                {
                      "@type": "HowToStep",
                      "name": "Inspect Equipment",
                      "text": "Listen for unusual pump noise, check for leaks around fittings, and verify proper water flow."
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
                      "name": "Guides"
                },
                {
                      "@type": "ListItem",
                      "position": 3,
                      "name": "Pool Care"
                }
          ]
    }`}
      />
      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
                {
                      "@type": "Question",
                      "name": "What should pool pH be?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ideal pool pH is between 7.2 and 7.6. Below 7.2 causes eye irritation and equipment corrosion. Above 7.6 reduces chlorine effectiveness and causes cloudy water."
                      }
                },
                {
                      "@type": "Question",
                      "name": "When should I winterize my pool in North Carolina?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most local pools close mid-November through early March. Balance chemistry, lower the water level, blow out plumbing lines, add winterizing chemicals, and install a winter cover."
                      }
                },
                {
                      "@type": "Question",
                      "name": "Why is my pool water green?",
                      "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Green pool water is caused by algae growth, usually due to low chlorine or sanitizer failure. Brush walls, shock heavily (triple dose), run the filter 24/7, vacuum to waste, and add algaecide."
                      }
                }
          ]
    }`}
      />
    </>
  );
}
