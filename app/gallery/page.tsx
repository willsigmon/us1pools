import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Gallery | US-1 Pools";
const DESCRIPTION = "Explore US-1 Pools projects by material type: fiberglass in-ground builds, steel wall in-ground builds, vinyl liner replacements, above-ground installs, hybrid pools, and construction progress.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=Gallery%20%7C%20US-1%20Pools&subtitle=Explore%20US-1%20Pools%20projects%20by%20material%20type%3A%20fiberglass%20in-ground%20builds%2C%20steel%20wall%20in-ground%20builds%2C%20vinyl%20liner%20replacements%2C%20above-ground%20installs%2C%20hybrid%20pools%2C%20and%20construction%20progress.&eyebrow=Sales%20%E2%80%A2%20service%20%E2%80%A2%20installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/gallery",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/gallery",
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

export default function GalleryPage() {
  return (
    <>
      <BodyPage page="gallery" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Gallery</p>
            <h1>Projects built for light, water, and long weekends.</h1>
            <p>Explore recent builds, fiberglass splash-pad projects, liner replacements, steel wall in-ground pools, above-ground installs, hybrid pools, and construction progress across Franklin and surrounding counties. Filter by material type so the photos stay accurate.</p>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="filter-bar" aria-label="Gallery filters">
              <button className="filter-button active" data-filter="all" aria-pressed="true">All</button>
              <button className="filter-button" data-filter="in-ground" aria-pressed="false">In-ground</button>
              <button className="filter-button" data-filter="fiberglass" aria-pressed="false">Fiberglass</button>
              <button className="filter-button" data-filter="vinyl-liner" aria-pressed="false">Vinyl liner</button>
              <button className="filter-button" data-filter="above-ground" aria-pressed="false">Above-ground</button>
              <button className="filter-button" data-filter="hybrid" aria-pressed="false">Hybrid</button>
              <button className="filter-button" data-filter="construction" aria-pressed="false">Construction</button>
            </div>

            <div className="gallery-grid">
              <article className="image-card" data-category="fiberglass in-ground new-build splash-pad">
                <img src="/assets/images/gallery-04.webp" alt="Fiberglass in-ground pool with splash pad and finished concrete deck" loading="lazy" width={2500} height={1875} decoding="async" />
                <div className="image-caption">Fiberglass in-ground pool with splash pad</div>
              </article>
              <article className="image-card" data-category="in-ground steel-wall new-build">
                <img src="/assets/images/customer-pool-sunset.webp" alt="Steel wall in-ground pool at sunset" loading="lazy" width={1800} height={1350} decoding="async" />
                <div className="image-caption">Steel wall in-ground pool at sunset</div>
              </article>
              <article className="image-card" data-category="fiberglass in-ground construction splash-pad">
                <img src="/assets/images/pool-01.jpg" alt="Fiberglass in-ground pool with splash pad under construction" loading="lazy" width={2500} height={1875} decoding="async" />
                <div className="image-caption">Fiberglass in-ground pool with splash pad under construction</div>
              </article>
              <article className="image-card" data-category="in-ground construction">
                <img src="/assets/images/pool-02.jpg" alt="Steel wall in-ground pool with deck" loading="lazy" width={1440} height={700} decoding="async" />
                <div className="image-caption">Steel wall in-ground pool with deck</div>
              </article>
              <article className="image-card" data-category="vinyl-liner liner-replacement construction">
                <img src="/assets/images/pool-03.jpg" alt="Vinyl liner replacement in progress" loading="lazy" width={2500} height={1875} decoding="async" />
                <div className="image-caption">Vinyl liner replacement in progress</div>
              </article>
              <article className="image-card" data-category="above-ground construction">
                <img src="/assets/images/pool-04.jpg" alt="Above-ground pool installation with equipment system" loading="lazy" width={836} height={627} decoding="async" />
                <div className="image-caption">Above-ground equipment setup</div>
              </article>
              <article className="image-card" data-category="above-ground hybrid">
                <img src="/assets/images/pool-05.jpg" alt="Hybrid Oasis above-ground pool, partially recessed" loading="lazy" width={2500} height={3333} decoding="async" />
                <div className="image-caption">Hybrid Oasis — 27–30 in. max recess</div>
              </article>
              <article className="image-card" data-category="above-ground hybrid new-build">
                <img src="/assets/images/pool-06.jpg" alt="Aquasport hybrid above-ground pool with blue liner" loading="lazy" width={2500} height={1875} decoding="async" />
                <div className="image-caption">Aquasport hybrid above-ground pool</div>
              </article>
              <article className="image-card" data-category="above-ground new-build">
                <img src="/assets/images/pool-07.jpg" alt="Round above-ground pool with a retaining wall" loading="lazy" width={2500} height={1875} decoding="async" />
                <div className="image-caption">Above-ground pool with retaining wall</div>
              </article>
              <article className="image-card" data-category="vinyl-liner in-ground">
                <img src="/assets/images/pool-08.jpg" alt="Finished vinyl liner pool with patterned interior" loading="lazy" width={2500} height={1875} decoding="async" />
                <div className="image-caption">Finished vinyl liner pool</div>
              </article>
              <article className="image-card" data-category="in-ground">
                <img src="/assets/images/pool-09.jpg" alt="In-ground pool and patio at night with landscape lighting" loading="lazy" width={836} height={627} decoding="async" />
                <div className="image-caption">Evening poolside setting</div>
              </article>
              <article className="image-card" data-category="vinyl-liner liner-replacement construction">
                <img src="/assets/images/pool-10.jpg" alt="Vinyl liner pool interior during replacement" loading="lazy" width={2500} height={1875} decoding="async" />
                <div className="image-caption">Vinyl liner installation</div>
              </article>
              <article className="image-card" data-category="in-ground new-build">
                <img src="/assets/images/pool-11.jpg" alt="Residential pool installation project" loading="lazy" width={2500} height={1875} decoding="async" />
                <div className="image-caption">Residential pool installation</div>
              </article>
              <article className="image-card" data-category="above-ground hybrid new-build">
                <img src="/assets/images/pool-12.jpg" alt="Aquasport hybrid above-ground pool with stone surround" loading="lazy" width={836} height={627} decoding="async" />
                <div className="image-caption">Aquasport hybrid above-ground pool</div>
              </article>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Want a closer look?</p>
              <h2>Let us share full project albums.</h2>
              <p className="section-sub">Request a gallery walkthrough or schedule a site visit to see materials in person.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>Photo galleries and finish boards</li>
                <li>Before and after renovation sets</li>
                <li>On-site tours for active builds</li>
              </ul>
              <a className="btn btn-secondary" href="/contact.html">Request Gallery Access</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />

      <JsonLd
        data={`{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "US-1 Pools Project Gallery",
          "description": "Photos of pool installations, renovations, and backyard water-care projects completed by US-1 Pools across Franklin and surrounding counties.",
          "url": "https://www.us1pools.com/gallery.html"
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
                      "name": "Gallery"
                }
          ]
    }`}
      />
      <script defer src="/gallery.js"></script>
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
