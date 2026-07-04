import type { Metadata } from "next";
import "./globals.css";
import "./site.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.us1pools.com"),
  icons: {
    icon: [{ url: "/assets/images/logo.png", type: "image/png" }],
  },
};

/**
 * Root layout — reproduces the shared shell of the legacy static pages:
 * skip link, header, and the deferred site scripts. Background orbs are
 * page-owned (<BgOrbs />) because the legacy pages varied the combination.
 * Each page supplies its own <main>, footer variant, JSON-LD, and
 * page-specific scripts, and sets <body data-page="…"> via <BodyPage>.
 *
 * All internal navigation uses plain <a> tags (full page loads), so the
 * legacy scripts re-run per page exactly as they did on the static site.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {/* React 19 hoists these into <head> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://plausible.io" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
          precedence="fonts"
        />

        <a className="skip-link" href="#main">Skip to content</a>

        <SiteHeader />

        {children}

        <script defer data-domain="us1pools.com" src="https://plausible.io/js/script.js"></script>
        <script defer src="/script.js"></script>
      </body>
    </html>
  );
}
