import { business, image, escape } from './data.mjs';

// Run before the first paint so the enhanced mobile menu never flashes open.
export const initScript = "document.documentElement.classList.add('js');";
export const schema = JSON.stringify({
  '@context': 'https://schema.org', '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://www.us1pools.com/#business', name: business.name, url: 'https://www.us1pools.com/',
  logo: 'https://www.us1pools.com/assets/live/e2bf0920-us-1-pools-og-logo.webp',
  image: 'https://www.us1pools.com/assets/og/us1pools-og.jpg', telephone: '+1-919-441-0033',
  contactPoint: [business.secondary, business.additional].map((phone) => ({
    '@type': 'ContactPoint', telephone: `+1-${phone}`, contactType: 'customer service',
  })),
  email: business.email,
  address: { '@type': 'PostalAddress', streetAddress: business.street, addressLocality: 'Franklinton', addressRegion: 'NC', postalCode: '27525', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 36.1021, longitude: -78.467 },
  sameAs: [business.facebook], areaServed: ['Wake Forest', 'Franklinton', 'The Triangle'],
  founder: { '@type': 'Person', name: 'Shayne Parrish' }, foundingDate: '2015', description: business.hours,
});
const arrow = '<span aria-hidden="true">↗</span>';
const navigation = [['', 'Home'], ['about', 'About'], ['pools-spas', 'Pools & Spas'], ['gallery', 'Gallery'], ['how-to-videos', 'How-To Videos'], ['contact', 'Contact Us']];
function navLink(slug, label, current) {
  return `<a href="/${slug}"${current === slug ? ' aria-current="page"' : ''}>${escape(label)}</a>`;
}
function header(slug) {
  return `<a class="skip-link" href="#main">Skip to content</a><header class="site-header" data-header><div class="container header-inner"><a class="brand" href="/" aria-label="US-1 Pools home">${image('e2bf0920','US-1 Pools',{eager:true,sizes:'144px'})}</a><button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false" data-menu-toggle><span>Menu</span><svg width="22" height="18" viewBox="0 0 22 18" aria-hidden="true"><path d="M1 3H21M1 9H21M1 15H21" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></button><nav id="site-nav" aria-label="Main navigation">${navigation.map(([path,label])=>path==='pools-spas'?`<div class="nav-dropdown"><div class="dropdown-heading">${navLink(path,label,slug)}<button class="dropdown-toggle" type="button" aria-label="Pools and spas submenu" aria-expanded="false" aria-controls="pools-menu" data-dropdown-toggle><span aria-hidden="true">⌄</span></button></div><div class="dropdown-menu" id="pools-menu">${[['hotwater','Hot Water'],['cool-water','Cool Water'],['hotwater-1','Liners'],['chill','Chill Therapy']].map(([s,l])=>navLink(s,l,slug)).join('')}</div></div>`:navLink(path,label,slug)).join('')}<a class="header-call" href="tel:+19194410033">919.441.0033 ${arrow}</a></nav></div></header>`;
}
function footer() {
  return `<footer class="site-footer"><div class="container footer-top"><div class="footer-identity"><a href="/" aria-label="US-1 Pools home">${image('e2bf0920','US-1 Pools',{className:'footer-logo',sizes:'200px'})}</a><address>${business.street}<br>${business.city}</address><a class="text-link" href="${business.directions}">Directions ${arrow}</a></div><div class="footer-contact"><p class="eyebrow">Contact Us</p><a class="footer-phone" href="tel:+19194410033">Primary: ${business.primary}</a><a href="tel:+19198640277">Secondary: ${business.secondary}</a><a href="tel:+19198804323">Also: ${business.additional}</a><a href="mailto:${business.email}">${business.email}</a><a class="text-link" href="${business.facebook}">Facebook ${arrow}</a></div><div class="footer-hours"><p class="eyebrow">Hours</p><p>${escape(business.hours)}</p><a class="text-link" href="${business.payment}">Pay US-1 Pools ${arrow}</a></div><a class="storefront" href="/contact" aria-label="Contact the US-1 Pools storefront">${image('6ef8eace','US-1 Pools storefront at 3453 US Hwy 1 South, Franklinton, NC 27525',{sizes:'(max-width:640px) 100vw, 260px'})}</a></div><div class="container footer-bottom"><span>© ${new Date().getUTCFullYear()} US-1 Pools</span><nav aria-label="Footer navigation">${navigation.slice(1).map(([s,l])=>navLink(s,l)).join('')}</nav></div></footer>`;
}
export function layout({ slug, title, description, body, intro = '' }) {
  const canonical = `https://www.us1pools.com/${slug}`;
  const fullTitle = `${title} | US-1 Pools, Franklinton NC`;
  const ogImage = 'https://www.us1pools.com/assets/og/us1pools-og.jpg';
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><script>${initScript}</script><title>${escape(fullTitle)}</title>
<meta name="description" content="${escape(description)}">${slug==='404'?'<meta name="robots" content="noindex">':`<link rel="canonical" href="${canonical}">`}
<meta property="og:type" content="website"><meta property="og:locale" content="en_US"><meta property="og:site_name" content="US-1 Pools"><meta property="og:title" content="${escape(fullTitle)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${ogImage}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="US-1 Pools logo over aqua pool water">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(fullTitle)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="${ogImage}"><meta name="twitter:image:alt" content="US-1 Pools logo over aqua pool water"><meta name="theme-color" content="#0b2545">
<link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/png" href="/assets/favicon.png"><link rel="apple-touch-icon" href="/assets/favicon.png"><link rel="preload" as="font" type="font/woff2" href="/assets/fonts/fraunces-latin.woff2" crossorigin><link rel="preload" as="font" type="font/woff2" href="/assets/fonts/manrope-latin.woff2" crossorigin>${slug===''?'<link rel="preload" as="image" href="/assets/live/hero-yt.webp" fetchpriority="high">':''}
<link rel="stylesheet" href="/styles.css"><script src="/script.js" defer></script>${slug==='gallery'?'<script src="/gallery.js" defer></script>':''}<script type="application/ld+json">${schema}</script></head>
<body class="${slug ? `page-${slug}` : 'page-home'}">${header(slug)}<main id="main" tabindex="-1">${slug?`<div class="page-intro"><div class="container"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>${escape(title)}</span></nav><p class="eyebrow">US-1 Pools · Franklinton, NC</p><h1>${escape(title)}</h1>${intro ? `<p class="page-intro-copy">${escape(intro)}</p>` : ''}</div></div>`:''}${body}</main>${footer()}</body></html>
`;
}
