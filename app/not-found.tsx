import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Page Not Found | US-1 Pools";
const DESCRIPTION =
  "We couldn't find that page. Explore US-1 Pools services, pools, and contact options.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: "noindex,follow",
  alternates: {
    canonical: "https://www.us1pools.com/404.html",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "https://www.us1pools.com/assets/images/hero.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "https://www.us1pools.com/assets/images/hero.webp" }],
  },
  other: { "ai-content-declaration": "human-authored, human-edited" },
};

export default function NotFound() {
  return (
    <>
      <BodyPage page="404" />
      <BgOrbs />
      <main id="main">
        <section className="section reveal">
          <div className="container content-grid">
            <div>
              <p className="eyebrow">404</p>
              <h1>We can&apos;t find that page.</h1>
              <p className="section-sub">No worries — use the links below to get back to pools, services, or contact options.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="/index.html">Back to home</a>
                <a className="btn btn-ghost" href="/contact.html">Contact us</a>
              </div>
            </div>
            <div className="image-card">
              <img src="/assets/images/hero.webp" alt="Pool and spa supplies in the US-1 Pools showroom" loading="lazy" width={2500} height={1875} decoding="async" />
              <span className="image-caption">Showroom support to get you back to the water</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
