import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Services | US-1 Pools";
const DESCRIPTION = "US-1 Pools services include installations, openings/closings, liner changes, equipment upgrades, and ongoing maintenance.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Services+%7C+US-1+Pools&subtitle=US-1+Pools+services+include+installations%2C+openings%2Fclosings%2C+liner+changes%2C+equipment+upgrades%2C+and+ongoing+maintenance.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/services",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/services",
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

const SPRAYER_PATH_STYLE = {
  lineHeight: "normal",
  textIndent: 0,
  textAlign: "start",
  textDecorationLine: "none",
  textDecorationStyle: "solid",
  textDecorationColor: "currentColor",
  textTransform: "none",
  blockProgression: "tb",
  whiteSpace: "normal",
  isolation: "auto",
  mixBlendMode: "normal",
  solidColor: "currentColor",
  solidOpacity: 1,
} as CSSProperties;

export default function ServicesPage() {
  return (
    <>
      <BodyPage page="services" />
      <BgOrbs orbs={[1, 3]} />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h1>Sales, service, and installation under one roof.</h1>
            <p>US-1 Pools handles everything from new installs to ongoing care. We keep your pool running with reliable maintenance and equipment upgrades.</p>
            <div className="page-meta">
              <span className="meta-chip">Openings & closings</span>
              <span className="meta-chip">Equipment installs</span>
              <span className="meta-chip">Retail support</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Service menu</p>
                <h2>Keep your water clear and equipment dialed in.</h2>
              </div>
              <p className="section-sub">From sand changes to pump installs, our service team can keep everything running smoothly.</p>
            </div>
            <div className="card-grid">
              <article className="service-card">
                <div className="service-icon">
                  <svg aria-hidden="true" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path fill="currentColor" d="M6.11 5.56C7.3 5.7 8.14 6.14 9 7l1 1-3.25 3.25c.31.12.56.27.77.39.37.23.59.36 1.15.36s.78-.13 1.15-.36c.46-.27 1.08-.64 2.19-.64s1.73.37 2.18.64c.37.22.6.36 1.15.36.55 0 .78-.13 1.15-.36.12-.07.26-.15.41-.23L10.48 5C9.22 3.74 8.04 3.2 6.3 3.05 5.6 2.99 5 3.56 5 4.26v.09c0 .63.49 1.13 1.11 1.21zm15.24 13.35c-.17-.06-.32-.15-.5-.27-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.37.23-.59.36-1.15.36s-.78-.13-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.19.64c-.18.11-.33.2-.5.27-.38.13-.65.45-.65.85v.12c0 .67.66 1.13 1.3.91.37-.13.65-.3.89-.44.37-.22.6-.35 1.15-.35.55 0 .78.13 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.19-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.72-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.23.14.51.31.88.44.63.22 1.3-.24 1.3-.91v-.12c0-.41-.27-.73-.65-.86zM3.11 16.35c.47-.13.81-.33 1.09-.49.37-.23.6-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.23.14.5.3.85.43a.978.978 0 0 0 1.31-.91v-.12c0-.4-.27-.72-.64-.86-.17-.06-.32-.15-.51-.26-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.18.11-.33.2-.5.27-.38.13-.65.45-.65.85v.23c0 .58.55 1.02 1.11.86z" /><circle fill="currentColor" cx="16.5" cy="5.5" r="2.5" /></svg>
                </div>
                <h3>Openings &amp; closings</h3>
                <p>Seasonal prep, cover removal, and water balancing to start and end every season right.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><g><rect width="268.59" height="221.3" x="108.91" y="133.6" fill="currentColor" /><path fill="currentColor" d="M188.66 357.9H144.29V130.6h44.37zm-38.37-6h32.37V136.6H150.29zM265.4 357.9H221V130.6H265.4zm-38.37-6H259.4V136.6H227z" /><rect width="301.37" height="37.18" x="92.52" y="354.9" fill="currentColor" rx="13.26" /><path fill="currentColor" d="M128.1,392.09l13,31.34H345.29l13-31.34Z" /><path d="M128.1,392.09l13,31.34H345.29l13-31.34Z" fill="currentColor" /><rect width="268.59" height="34.3" x="108.91" y="423.43" fill="currentColor" rx="13.26" /><path fill="currentColor" d="M364.25,460.72H122.18a16.27,16.27,0,0,1-16.26-16.26v-7.77a16.27,16.27,0,0,1,16.26-16.26H364.25a16.28,16.28,0,0,1,16.26,16.26v7.77A16.28,16.28,0,0,1,364.25,460.72ZM122.18,426.43a10.27,10.27,0,0,0-10.26,10.26v7.77a10.27,10.27,0,0,0,10.26,10.26H364.25a10.27,10.27,0,0,0,10.26-10.26v-7.77a10.27,10.27,0,0,0-10.26-10.26Z" /><rect width="268.59" height="25.3" x="108.91" y="133.6" fill="currentColor" /><rect width="19.72" x="400.74" y="74.36" fill="currentColor" transform="rotate(-45 410.604 77.362)" /><rect height="19.72" x="384.37" y="54.28" fill="currentColor" /><rect width="19.72" x="414.5" y="96.4" fill="currentColor" /><path fill="currentColor" d="M55.62 379.94a13.32 13.32 0 1113.09-11.06A13.33 13.33 0 0155.62 379.94zm0-20.64a7.32 7.32 0 104.23 13.3A7.32 7.32 0 0055.58 359.3zM78.78 432a8.83 8.83 0 111.47-17.54h0A8.83 8.83 0 0178.78 432zm0-11.67a2.83 2.83 0 101.64 5.15A2.83 2.83 0 0078.75 420.34z" /><path fill="currentColor" d="M403.8 232.76a13.77 13.77 0 0113.78 13.77 13.75 13.75 0 0113.77-13.77A13.77 13.77 0 01417.58 219 13.78 13.78 0 01403.8 232.76zM36 176.47a24.74 24.74 0 0124.74 24.74 24.74 24.74 0 0124.73-24.74 24.73 24.73 0 01-24.73-24.74A24.74 24.74 0 0136 176.47z" /><path fill="currentColor" d="M70.1,117.31h-6v-6h6Zm.55-15.41-5.9-1.09a37.78,37.78,0,0,1,1.72-6.27l5.63,2.08A32.25,32.25,0,0,0,70.65,101.9Zm5.79-13.3L71.62,85a39,39,0,0,1,4.29-4.88l4.16,4.33A33,33,0,0,0,76.44,88.6Zm11-9.45-2.79-5.31a37.53,37.53,0,0,1,6-2.52L92.52,77A32.36,32.36,0,0,0,87.47,79.15Zm14-3.68-.18-6c.8,0,.8,0,6.09,0v6C102.19,75.46,102.22,75.45,101.51,75.47Zm117.91,0h-6v-6h6Zm-16,0h-6v-6h6Zm-16,0h-6v-6h6Zm-16,0h-6v-6h6Zm-16,0h-6v-6h6Zm-16,0h-6v-6h6Zm-16,0h-6v-6h6Z" /><path d="M394.46,368.72v10.66a13.26,13.26,0,0,1-13.26,13.26H358.88l-5.08,12.21a84.82,84.82,0,0,1,24.27-145.73v96.34h3.13A13.26,13.26,0,0,1,394.46,368.72Z" fill="currentColor" /><path fill="currentColor" d="M227 357.9H182.66V130.6H227zm-38.37-6H221V136.6H188.66zM303.77 357.9H259.4V130.6h44.37zm-38.37-6h32.37V136.6H265.4z" /><path fill="currentColor" d="M342.14 357.9H297.77V130.6h44.37zm-38.37-6h32.37V136.6H303.77zM150.29 357.9H105.92V130.6h44.37zm-38.37-6h32.37V136.6H111.92z" /><rect width="301.37" height="37.18" x="92.52" y="96.42" fill="currentColor" rx="13.26" /><path fill="currentColor" d="M380.64,136.6H105.78a16.28,16.28,0,0,1-16.26-16.26V109.68a16.28,16.28,0,0,1,16.26-16.26H380.64a16.28,16.28,0,0,1,16.26,16.26v10.66A16.28,16.28,0,0,1,380.64,136.6ZM105.78,99.42a10.27,10.27,0,0,0-10.26,10.26v10.66a10.27,10.27,0,0,0,10.26,10.26H380.64a10.27,10.27,0,0,0,10.26-10.26V109.68a10.27,10.27,0,0,0-10.26-10.26Z" /><path fill="currentColor" d="M380.51,357.9H336.14V130.6h44.37Zm-38.37-6h32.37V136.6H342.14Z" /><path fill="currentColor" d="M380.64,395.09H105.78a16.29,16.29,0,0,1-16.26-16.26V368.17a16.29,16.29,0,0,1,16.26-16.27H380.64a16.29,16.29,0,0,1,16.26,16.27v10.66A16.29,16.29,0,0,1,380.64,395.09ZM105.78,357.9a10.28,10.28,0,0,0-10.26,10.27v10.66a10.27,10.27,0,0,0,10.26,10.26H380.64a10.27,10.27,0,0,0,10.26-10.26V368.17a10.28,10.28,0,0,0-10.26-10.27Z" /><path fill="currentColor" d="M347.29,426.43H139.13L123.6,389.09H362.82Zm-204.16-6H343.29l10.54-25.34H132.6Z" /><circle cx="407.12" cy="338.88" r="68.88" fill="currentColor" /><path fill="currentColor" d="M407.12,410.76A71.88,71.88,0,1,1,479,338.88,72,72,0,0,1,407.12,410.76Zm0-137.76A65.88,65.88,0,1,0,473,338.88,66,66,0,0,0,407.12,273Z" /><polygon fill="currentColor" points="369.96 313 369.96 333.03 397.4 349.23 397.4 378.73 415.78 368.85 415.78 349.23 444.28 333.03 444.28 313 369.96 313" /></g></g></svg>
                </div>
                <h3>Sand changes</h3>
                <p>Filter media replacements for clear, clean water all season.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M46 69V27c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4zM31 45h3v6h-3zM40 63V33c-2.2 0-4 1.8-4 4v22c0 2.2 1.8 4 4 4zM57 69h18v4H57zM76 67h8V29H48v38h28zM55 33h22c1.7 0 3 1.3 3 3s-1.3 3-3 3H55c-1.7 0-3-1.3-3-3s1.3-3 3-3zm0 12h22c1.7 0 3 1.3 3 3s-1.3 3-3 3H55c-1.7 0-3-1.3-3-3s1.3-3 3-3zm-3 15c0-1.7 1.3-3 3-3h22c1.7 0 3 1.3 3 3s-1.3 3-3 3H55c-1.7 0-3-1.3-3-3zm-23 1V35H15.4L13 37.4v21.2l2.4 2.4H29zm-8.7-20.7c.4-.4 1-.4 1.4 0 .2.2 5.3 5.3 5.3 9.7 0 3.3-2.7 6-6 6s-6-2.7-6-6c0-4.4 5.1-9.5 5.3-9.7zM90 27h-4v42h4c2.2 0 4-1.8 4-4V31c0-2.2-1.8-4-4-4zM18 25h9.6l1.4-1.4V19H15v4.6l1.4 1.4zM19 27h6v6h-6zM6 45h5v6H6zM76 75H16.7l-2.3 6h71.2l-2.3-6z" /></svg>
                </div>
                <h3>Pump, filter &amp; heater installs</h3>
                <p>Equipment swaps and energy efficiency upgrades with Pentair systems.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">
                  <svg aria-hidden="true" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M-10.5 1020.362a.5.5 0 0 0-.5.5v31a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-31a.5.5 0 0 0-.5-.5zm.5 1h9v23h-1v1h1v1h-9v-1h1v-1h-1zm1.5 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm-5 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm-3 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm-1 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm0 9.983-1.768 1.767.707.71.561-.563v2.103h1v-2.103l.56.562.708-.709zm-2.5 6.017v1h1v-1zm2 0v1h1v-1zm2 0v1h1v-1zm-6 3h9v4h-9z" color="#000" fontFamily="sans-serif" fontWeight="400" overflow="visible" transform="translate(21 -1020.362)" style={SPRAYER_PATH_STYLE} /></svg>
                </div>
                <h3>Above &amp; in-ground liner changes</h3>
                <p>Vinyl liner replacement for above-ground and in-ground pools, plus leak fixes.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="163.839" height="163.839" fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 4335 4335"><path fill="currentColor" d="M807 627c72,35 207,28 281,16 334,-55 681,-300 931,-515l148 -128 149 128c250,215 597,460 931,515 73,12 209,19 281,-16l329 -202 13 392c16,442 26,882 -15,1322 -95,1048 -486,2042 -1659,2192l-29 4 -29 -4c-415,-53 -781,-222 -1063,-535 -669,-744 -643,-2037 -611,-2979l14 -392 329 202z" /><path fill="currentColor" d="M2167 4105c-1567,-200 -1514,-2124 -1475,-3280 0,0 505,311 1475,-524 971,835 1475,524 1475,524 40,1156 93,3080 -1475,3280z" /><path fill="currentColor" d="M2427 2701l-519 0c-124,0 -226,-102 -226,-226 0,-125 102,-226 226,-226l519 0c55,0 105,19 144,52 50,42 82,104 82,174 0,124 -102,226 -226,226zm0 -1511l-519 0c-124,0 -226,-102 -226,-226 0,-125 102,-226 226,-226l519 0c55,0 105,19 145,52 49,42 81,104 81,174 0,124 -102,226 -226,226zm16 1761c0,0 1,1 1,1 22,15 42,33 61,53 2,3 5,5 7,8 5,6 9,11 14,17 0,0 0,0 0,0 53,67 85,152 85,244 0,218 -177,394 -395,394 -218,0 -394,-176 -394,-394 0,-218 176,-395 394,-395 85,0 163,27 227,72zm0 -1511c0,0 1,1 1,1 22,15 42,33 61,53 2,3 5,5 7,8 5,6 9,11 14,17 0,0 0,0 0,0 53,67 85,152 85,244 0,218 -177,394 -395,394 -218,0 -394,-176 -394,-394 0,-218 176,-395 394,-395 85,0 163,27 227,72z" /><circle cx="2216" cy="1763" r="368" fill="currentColor" /><path fill="currentColor" d="M2429 1462c29,20 55,45 76,73l-501 529c-29,-21 -55,-45 -77,-73l502 -529z" /><circle cx="2216" cy="3274" r="368" fill="currentColor" /><path fill="currentColor" d="M2429 2973c29,20 55,45 76,73l-501 529c-29,-21 -55,-45 -77,-73l502 -529z" /><g><rect fill="currentColor" rx="450" ry="450" transform="matrix(0 -.44531 -.44531 0 2626.9 1164.11)" /><path fill="currentColor" d="M2627 964l0 0c0,-110 -90,-200 -200,-200l-285 0 0 400 285 0c110,0 200,-90 200,-200z" /></g><g><rect fill="currentColor" rx="450" ry="450" transform="matrix(0 -.44531 -.44531 0 2626.89 2675.11)" /><path fill="currentColor" d="M2627 2475l0 0c0,-110 -90,-200 -200,-200l-285 0 0 400 285 0c110,0 200,-90 200,-200z" /></g></svg>
                </div>
                <h3>General maintenance</h3>
                <p>Weekly checks, chemistry balance, and cleaning to keep your pool crystal clear.</p>
              </article>
              <article className="service-card">
                <div className="service-icon">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><path fill="currentColor" d="M1628,1765H372c-29.7,0-56.6-16.3-72.1-43.7c-17.3-30.7-16.7-68.3,1.5-98.3l495.3-816.7V412.1c0-11.6,9.4-21,21-21s21,9.4,21,21v400.1c0,3.8-1.1,7.6-3,10.9l-498.3,821.7c-12.3,20.3-8.5,42.2-0.8,55.9c8,14.2,20.9,22.3,35.5,22.3H1628c14.5,0,27.5-8.1,35.5-22.3c7.7-13.7,11.6-35.6-0.8-55.9l-498.3-821.7c-2-3.3-3-7-3-10.9V412.1c0-11.6,9.4-21,21-21s21,9.4,21,21v394.2l495.3,816.7c18.2,30,18.7,67.6,1.5,98.3C1684.6,1748.7,1657.7,1765,1628,1765z" /><path fill="currentColor" d="M1256.2 433.1H743.8c-11.6 0-21-9.4-21-21V256c0-11.6 9.4-21 21-21h512.4c11.6 0 21 9.4 21 21v156.1C1277.2 423.7 1267.8 433.1 1256.2 433.1zM764.8 391.1h470.4V277H764.8V391.1zM829.1 1229.4c-92.3 0-139.1-22-184.2-43.3-13.2-6.2-25.6-12.1-39.2-17.4-10.8-4.3-16.1-16.4-11.8-27.2 4.3-10.8 16.4-16.1 27.2-11.8 14.9 5.9 28.6 12.3 41.8 18.5 42.9 20.2 83.4 39.3 166.3 39.3 83 0 123.5-19.1 166.4-39.3 45.2-21.3 91.9-43.4 184.3-43.4 92.4 0 139.1 22 184.3 43.4 17.8 8.4 34.6 16.3 54.3 23 8.6 2.7 14.8 10.6 14.8 20.1 0 11.6-9.4 21-21 21-2.3 0-4.5-.4-6.7-1.1-22.2-7.4-41.1-16.3-59.3-25-42.9-20.2-83.4-39.3-166.3-39.3-83 0-123.5 19.1-166.4 39.3C968.2 1207.4 921.5 1229.4 829.1 1229.4zM734.2 1472.6c-39.6 0-71.8-32.2-71.8-71.8 0-39.6 32.2-71.8 71.8-71.8s71.8 32.2 71.8 71.8C806 1440.4 773.8 1472.6 734.2 1472.6zM734.2 1370.9c-16.5 0-29.8 13.4-29.8 29.8 0 16.5 13.4 29.8 29.8 29.8 16.5 0 29.8-13.4 29.8-29.8C764 1384.3 750.6 1370.9 734.2 1370.9zM1303.5 1659.5c-39.6 0-71.8-32.2-71.8-71.8 0-39.6 32.2-71.8 71.8-71.8s71.8 32.2 71.8 71.8C1375.3 1627.3 1343.1 1659.5 1303.5 1659.5zM1303.5 1557.9c-16.5 0-29.8 13.4-29.8 29.8 0 16.5 13.4 29.8 29.8 29.8s29.8-13.4 29.8-29.8C1333.3 1571.2 1319.9 1557.9 1303.5 1557.9zM1042.8 1368.2c-32.3 0-58.6-26.3-58.6-58.6s26.3-58.6 58.6-58.6c32.3 0 58.6 26.3 58.6 58.6S1075.1 1368.2 1042.8 1368.2zM1042.8 1292.9c-9.2 0-16.6 7.5-16.6 16.6s7.5 16.6 16.6 16.6 16.6-7.5 16.6-16.6S1052 1292.9 1042.8 1292.9zM967.6 1600.7c-32.3 0-58.6-26.3-58.6-58.6 0-32.3 26.3-58.6 58.6-58.6s58.6 26.3 58.6 58.6C1026.2 1574.4 999.9 1600.7 967.6 1600.7zM967.6 1525.5c-9.2 0-16.6 7.5-16.6 16.6s7.5 16.6 16.6 16.6 16.6-7.5 16.6-16.6S976.8 1525.5 967.6 1525.5zM1310.6 1418.6c-32.3 0-58.6-26.3-58.6-58.6 0-32.3 26.3-58.6 58.6-58.6 32.3 0 58.6 26.3 58.6 58.6C1369.2 1392.3 1342.9 1418.6 1310.6 1418.6zM1310.6 1343.3c-9.2 0-16.6 7.5-16.6 16.6s7.5 16.6 16.6 16.6 16.6-7.5 16.6-16.6S1319.7 1343.3 1310.6 1343.3zM606.1 1659.5c-32.3 0-58.6-26.3-58.6-58.6 0-32.3 26.3-58.6 58.6-58.6s58.6 26.3 58.6 58.6C664.7 1633.2 638.4 1659.5 606.1 1659.5zM606.1 1584.3c-9.2 0-16.6 7.5-16.6 16.6s7.5 16.6 16.6 16.6 16.6-7.5 16.6-16.6S615.3 1584.3 606.1 1584.3z" /><circle fill="currentColor" cx="777.7" cy="1610.4" r="20.7" /><circle fill="currentColor" cx="432.4" cy="1647.7" r="20.7" /><circle fill="currentColor" cx="1154.1" cy="1440.9" r="20.7" /><circle fill="currentColor" cx="1169.6" cy="1233" r="20.7" /><g><circle fill="currentColor" cx="881.1" cy="1389.7" r="20.7" /></g><g><circle fill="currentColor" cx="653.6" cy="1268.7" r="20.7" /></g><g><circle fill="currentColor" cx="1077.5" cy="1651.8" r="20.7" /></g><g><circle fill="currentColor" cx="1458" cy="1482.2" r="20.7" /></g><g><circle fill="currentColor" cx="1546.9" cy="1647.7" r="20.7" /></g><g><circle fill="currentColor" cx="576.6" cy="1445" r="20.7" /></g></svg>
                </div>
                <h3>Chemical concierge</h3>
                <p>Delivery and support for regular chemical needs — never run out mid-season.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">Equipment systems</p>
              <h2>Pentair &amp; Maytronics dealer installs.</h2>
              <p className="section-sub">Upgrade pumps, filters, and heaters with proven Pentair equipment. We are also an authorized Maytronics dealer and service center for Dolphin robotic pool cleaners.</p>
              <div className="list-grid">
                <div className="list-card">
                  <h3>Automation controls</h3>
                  <p>Manage pumps, lights, and heat with one system.</p>
                </div>
                <div className="list-card">
                  <h3>Heater installs</h3>
                  <p>Extend your season with efficient heat options.</p>
                </div>
                <div className="list-card">
                  <h3>Robotic cleaners</h3>
                  <p>Maytronics Dolphin automatic cleaners — sales, setup, and warranty service.</p>
                </div>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/pool-04.jpg" alt="Pool pump and filter system installed beside an above-ground pool" loading="lazy" width={836} height={627} decoding="async" />
              <span className="image-caption">Pump, filter &amp; equipment system</span>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Need service now?</p>
              <h2>Schedule a maintenance visit.</h2>
              <p className="section-sub">Tell us your pool type and the service you need. We will follow up with availability.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>Priority scheduling for service members</li>
                <li>Water testing with each visit</li>
                <li>Retail access for parts and chemicals</li>
              </ul>
              <a className="btn btn-secondary" href="/contact.html">Request Service</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Pool Maintenance and Repair",
          "name": "Pool Services by US-1 Pools",
          "description": "Professional pool maintenance, repair, equipment installation, and seasonal services in Franklinton, NC and across Franklin and surrounding counties.",
          "url": "https://www.us1pools.com/services.html",
          "dateModified": "2026-03-14",
          "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [".page-hero", ".section-sub"]
          },
          "provider": {
                "@type": "LocalBusiness",
                "@id": "https://www.us1pools.com/#business",
                "name": "US-1 Pools"
          },
          "areaServed": [
                {
                      "@type": "City",
                      "name": "Franklinton"
                },
                {
                      "@type": "City",
                      "name": "Wake Forest"
                },
                {
                      "@type": "City",
                      "name": "Raleigh"
                },
                {
                      "@type": "City",
                      "name": "Durham"
                },
                {
                      "@type": "State",
                      "name": "North Carolina"
                }
          ],
          "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Pool Services",
                "itemListElement": [
                      {
                            "@type": "Offer",
                            "itemOffered": {
                                  "@type": "Service",
                                  "name": "Weekly Pool Maintenance"
                            }
                      },
                      {
                            "@type": "Offer",
                            "itemOffered": {
                                  "@type": "Service",
                                  "name": "Pool Opening & Closing"
                            }
                      },
                      {
                            "@type": "Offer",
                            "itemOffered": {
                                  "@type": "Service",
                                  "name": "Equipment Repair & Replacement"
                            }
                      },
                      {
                            "@type": "Offer",
                            "itemOffered": {
                                  "@type": "Service",
                                  "name": "Liner Replacement"
                            }
                      },
                      {
                            "@type": "Offer",
                            "itemOffered": {
                                  "@type": "Service",
                                  "name": "Water Testing & Balancing"
                            }
                      },
                      {
                            "@type": "Offer",
                            "itemOffered": {
                                  "@type": "Service",
                                  "name": "Leak Detection & Repair"
                            }
                      },
                      {
                            "@type": "Offer",
                            "itemOffered": {
                                  "@type": "Service",
                                  "name": "Pool Renovation"
                            }
                      }
                ]
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
                      "name": "Services"
                }
          ]
    }`}
      />
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
