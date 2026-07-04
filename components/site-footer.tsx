/**
 * Shared site footer — markup preserved verbatim from the legacy static
 * pages. Area pages swap the "Quick links" column for "Service areas".
 */
const QUICK_LINKS = (
  <div className="footer-links">
    <span className="footer-links-heading">Quick links</span>
    <a href="/about.html">About</a>
    <a href="/pools.html">Pools &amp; Spas</a>
    <a href="/services.html">Services</a>
    <a href="/gallery.html">Gallery</a>
    <a href="/videos.html">How-To Videos</a>
    <a href="/contact.html">Contact</a>
  </div>
);

const SERVICE_AREA_LINKS = (
  <div className="footer-links">
    <span className="footer-links-heading">Service areas</span>
    <a href="/areas/franklinton.html">Franklinton</a>
    <a href="/areas/wake-forest.html">Wake Forest</a>
    <a href="/areas/youngsville.html">Youngsville</a>
    <a href="/areas/louisburg.html">Louisburg</a>
    <a href="/areas/raleigh.html">Raleigh</a>
    <a href="/areas/durham.html">Durham</a>
    <a href="/areas/henderson.html">Henderson</a>
  </div>
);

export function SiteFooter({ serviceAreas = false }: { serviceAreas?: boolean }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <div className="brand">
              <img src="/assets/images/logo.png" alt="US-1 Pools logo" width={2500} height={1029} />
              <span className="brand-name">US-1 Pools</span>
            </div>
            <p className="footer-tagline">Sales, service, and installation for above-ground pools, fiberglass in-ground shells, vinyl liner replacements, and hot tubs across Franklin and surrounding counties.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/us1pools" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="https://www.youtube.com/@US-1Pools" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>
          {serviceAreas ? SERVICE_AREA_LINKS : QUICK_LINKS}
          <div className="footer-meta">
            <span className="footer-meta-heading">Get in touch</span>
            <div className="footer-contact">
              <div>3453 US Hwy 1 South</div>
              <div>Franklinton, NC 27525</div>
              <div><a href="tel:9194410033">919.441.0033</a></div>
              <div><a href="mailto:us1pools@gmail.com">us1pools@gmail.com</a></div>
              <div data-seasonal="">M-Th 11-3 &middot; Fri 11-5 &middot; Sat 10-5 &middot; Sun 12-3</div>
            </div>
            <a className="btn btn-primary footer-quote-btn" href="/contact.html">Get a Free Quote</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 US-1 Pools. All rights reserved.</span>
          <a href="/privacy-policy.html">Privacy</a>
          <a href="/terms.html">Terms</a>
          <a href="/payment.html" className="footer-pay-link">Pay Online</a>
        </div>
      </div>
    </footer>
  );
}
