import type { Metadata } from "next";
import { BgOrbs } from "@/components/bg-orbs";
import { BodyPage } from "@/components/body-page";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "How-To Videos | US-1 Pools";
const DESCRIPTION = "Watch pool care how-to videos from US-1 Pools owner Shayne Parrish — chemical tips, pump operation, cleaning guides, and more.";
const OG_IMAGE =
  "https://www.us1pools.com/api/og?title=How-To+Videos+%7C+US-1+Pools&subtitle=Watch+pool+care+how-to+videos+from+US-1+Pools+owner+Shayne+Parrish+%E2%80%94+chemical+tips%2C+pump+operation%2C+cleaning+guides%2C+and+more.&eyebrow=Sales+%E2%80%A2+service+%E2%80%A2+installation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://www.us1pools.com/videos",
    types: { "text/markdown": "https://www.us1pools.com/llms-full.txt" },
  },
  openGraph: {
    siteName: "US-1 Pools",
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.us1pools.com/videos",
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

export default function VideosPage() {
  return (
    <>
      <BodyPage page="videos" />
      <BgOrbs />
      <main id="main">
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">How-To Videos</p>
            <h1>Pool care tips from the pros.</h1>
            <p>Watch Shayne Parrish walk you through common pool maintenance tasks — from chemical balancing to pump operation. These guides help you keep your pool running clean between service visits.</p>
            <div className="page-meta">
              <span className="meta-chip">Chemical care</span>
              <span className="meta-chip">Equipment</span>
              <span className="meta-chip">Maintenance</span>
            </div>
          </div>
        </section>

        <section className="section reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Featured</p>
                <h2>General Operation of Pump/Filter System</h2>
              </div>
              <p className="section-sub">Our most-watched video — a complete walkthrough of your pool's pump and filter system.</p>
            </div>
            <div className="video-featured">
              <div className="video-embed">
                <iframe
                  src="https://www.youtube.com/embed/ZLT4M4FF_SM"
                  title="General Operation of Pump/Filter System — US-1 Pools"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="eager"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="section split reveal">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">All videos</p>
                <h2>Watch and learn at your own pace.</h2>
              </div>
              <p className="section-sub">Each video covers a specific pool care topic so you can find exactly what you need.</p>
            </div>
            <div className="video-grid">
              <article className="video-card">
                <div className="video-embed">
                  <iframe
                    src="https://www.youtube.com/embed/0kTE0fHRP8I"
                    title="General Chemical Information — US-1 Pools"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>General Chemical Information</h3>
                  <p>Learn the basics of pool water chemistry — what to test, when to add chemicals, and how to keep your water balanced.</p>
                  <span className="meta-chip">11 min</span>
                </div>
              </article>

              <article className="video-card">
                <div className="video-embed">
                  <iframe
                    src="https://www.youtube.com/embed/O24MyIIXWdw"
                    title="Cleaning Your Pool — US-1 Pools"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>Cleaning Your Pool</h3>
                  <p>Step-by-step guide to brushing, vacuuming, and skimming your pool for crystal-clear water.</p>
                  <span className="meta-chip">12 min</span>
                </div>
              </article>

              <article className="video-card">
                <div className="video-embed">
                  <iframe
                    src="https://www.youtube.com/embed/6Siplgq3QiI"
                    title="Sanitation System Operation — US-1 Pools"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>Sanitation System Operation</h3>
                  <p>How your pool's sanitation system works — chlorine, salt, and oxygen-based options explained.</p>
                  <span className="meta-chip">10 min</span>
                </div>
              </article>

              <article className="video-card">
                <div className="video-embed">
                  <iframe
                    src="https://www.youtube.com/embed/A8D0SDzOQck"
                    title="Auto Cleaner Information — US-1 Pools"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>Auto Cleaner Information</h3>
                  <p>Automatic pool cleaners — types, setup, and tips for getting the most out of your unit.</p>
                  <span className="meta-chip">3 min</span>
                </div>
              </article>

              <article className="video-card">
                <div className="video-embed">
                  <iframe
                    src="https://www.youtube.com/embed/QABcVrlgi9I"
                    title="Protecting Your Pool's Investments — US-1 Pools"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>Protecting Your Pool's Investments</h3>
                  <p>How to protect your pool equipment and extend the life of pumps, filters, and liners.</p>
                  <span className="meta-chip">3 min</span>
                </div>
              </article>

              <article className="video-card">
                <div className="video-embed">
                  <iframe
                    src="https://www.youtube.com/embed/oMt_5DOkRGU"
                    title="General Information on Pool Ladders — US-1 Pools"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="video-info">
                  <h3>General Information on Pool Ladders</h3>
                  <p>Choosing the right ladder for your pool — safety, sizing, and installation tips.</p>
                  <span className="meta-chip">3 min</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section clinic reveal">
          <div className="container clinic-card">
            <div>
              <p className="eyebrow">Need hands-on help?</p>
              <h2>Schedule a service visit.</h2>
              <p className="section-sub">These videos cover the basics — but if you need professional help, we are just a call away.</p>
            </div>
            <div className="clinic-details">
              <ul>
                <li>Free in-store water testing</li>
                <li>Equipment diagnostics and repairs</li>
                <li>Chemical delivery and concierge service</li>
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
      "@type": "CollectionPage",
      "name": "How-To Pool Videos",
      "description": "Watch helpful pool care and maintenance videos from US-1 Pools owner Shayne Parrish.",
      "url": "https://www.us1pools.com/videos.html",
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "VideoObject",
              "name": "General Operation of Pump/Filter System",
              "description": "Complete walkthrough of your pool's pump and filter system by US-1 Pools owner Shayne Parrish.",
              "thumbnailUrl": "https://img.youtube.com/vi/ZLT4M4FF_SM/maxresdefault.jpg",
              "uploadDate": "2023-01-01",
              "contentUrl": "https://www.youtube.com/watch?v=ZLT4M4FF_SM",
              "embedUrl": "https://www.youtube.com/embed/ZLT4M4FF_SM"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "VideoObject",
              "name": "General Chemical Information",
              "description": "Pool water chemistry basics — what to test, when to add chemicals, and how to keep water balanced.",
              "thumbnailUrl": "https://img.youtube.com/vi/0kTE0fHRP8I/maxresdefault.jpg",
              "uploadDate": "2023-01-01",
              "duration": "PT11M",
              "contentUrl": "https://www.youtube.com/watch?v=0kTE0fHRP8I",
              "embedUrl": "https://www.youtube.com/embed/0kTE0fHRP8I"
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "VideoObject",
              "name": "Cleaning Your Pool",
              "description": "Step-by-step guide to brushing, vacuuming, and skimming your pool for crystal-clear water.",
              "thumbnailUrl": "https://img.youtube.com/vi/O24MyIIXWdw/maxresdefault.jpg",
              "uploadDate": "2023-01-01",
              "duration": "PT12M",
              "contentUrl": "https://www.youtube.com/watch?v=O24MyIIXWdw",
              "embedUrl": "https://www.youtube.com/embed/O24MyIIXWdw"
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "VideoObject",
              "name": "Sanitation System Operation",
              "description": "How your pool's sanitation system works — chlorine, salt, and oxygen-based options explained.",
              "thumbnailUrl": "https://img.youtube.com/vi/6Siplgq3QiI/maxresdefault.jpg",
              "uploadDate": "2023-01-01",
              "duration": "PT10M",
              "contentUrl": "https://www.youtube.com/watch?v=6Siplgq3QiI",
              "embedUrl": "https://www.youtube.com/embed/6Siplgq3QiI"
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "VideoObject",
              "name": "Auto Cleaner Information",
              "description": "Automatic pool cleaners — types, setup, and tips for getting the most out of your unit.",
              "thumbnailUrl": "https://img.youtube.com/vi/A8D0SDzOQck/maxresdefault.jpg",
              "uploadDate": "2023-01-01",
              "duration": "PT3M",
              "contentUrl": "https://www.youtube.com/watch?v=A8D0SDzOQck",
              "embedUrl": "https://www.youtube.com/embed/A8D0SDzOQck"
            }
          },
          {
            "@type": "ListItem",
            "position": 6,
            "item": {
              "@type": "VideoObject",
              "name": "Protecting Your Pool's Investments",
              "description": "How to protect your pool equipment and extend the life of pumps, filters, and liners.",
              "thumbnailUrl": "https://img.youtube.com/vi/QABcVrlgi9I/maxresdefault.jpg",
              "uploadDate": "2023-01-01",
              "duration": "PT3M",
              "contentUrl": "https://www.youtube.com/watch?v=QABcVrlgi9I",
              "embedUrl": "https://www.youtube.com/embed/QABcVrlgi9I"
            }
          },
          {
            "@type": "ListItem",
            "position": 7,
            "item": {
              "@type": "VideoObject",
              "name": "General Information on Pool Ladders",
              "description": "Choosing the right ladder for your pool — safety, sizing, and installation tips.",
              "thumbnailUrl": "https://img.youtube.com/vi/oMt_5DOkRGU/maxresdefault.jpg",
              "uploadDate": "2023-01-01",
              "duration": "PT3M",
              "contentUrl": "https://www.youtube.com/watch?v=oMt_5DOkRGU",
              "embedUrl": "https://www.youtube.com/embed/oMt_5DOkRGU"
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
                      "name": "How-To Videos"
                }
          ]
    }`}
      />
      <script defer src="/scripts/scroll-reveal.js"></script>
    </>
  );
}
