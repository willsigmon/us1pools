/**
 * Shared site header — markup preserved verbatim from the legacy static
 * pages (interactive behavior lives in /script.js, exactly as before).
 * Links are root-absolute so one component serves every route depth.
 */
export function SiteHeader() {
  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="/index.html">
          <img src="/assets/images/logo.png" alt="US-1 Pools logo" width={2500} height={1029} />
          <span className="brand-name">US-1 Pools</span>
        </a>
        <button className="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>
        <nav className="nav-links" id="nav-links">
          <div className="nav-primary">
            <div className="nav-dropdown">
              <button className="nav-link dropdown-toggle" type="button" aria-expanded="false" aria-controls="dropdown-pools" data-page-link="pools">
                Pools &amp; Spas
                <svg className="dropdown-chevron" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="dropdown-menu" id="dropdown-pools">
                <a href="/pools.html">View All Pools &amp; Spas</a>
                <a href="/above-ground.html">Above Ground</a>
                <a href="/in-ground.html">In-Ground Options</a>
                <a href="/hot-tubs.html">Hot Tubs &amp; Swim Spas</a>
                <a href="/liners.html">Liners</a>
                <a href="/gallery.html">Gallery</a>
                <a href="https://www.glipoolproducts.com/" target="_blank" rel="noopener noreferrer">GLI Liners ↗</a>
                <a href="https://www.lathampool.com/" target="_blank" rel="noopener noreferrer">Latham Pools ↗</a>
              </div>
            </div>
            <a className="nav-link" href="/services.html" data-page-link="services">Services</a>
            <a className="nav-link nav-highlight" href="/videos.html" data-page-link="videos">How-To Videos</a>
            <a className="nav-link" href="/about.html" data-page-link="about">About</a>
          </div>
          <div className="nav-actions">
            <span className="nav-hours" data-seasonal="">Hours: M-Th 11-3 · Fri 11-5 · Sat 10-5 · Sun 12-3</span>
            <a className="nav-phone" href="tel:9194410033">919.441.0033</a>
            <a className="btn btn-pay" href="/payment.html">Pay Online</a>
            <a className="btn btn-primary" data-haptic="nudge" href="/contact.html">Get a Free Quote</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
