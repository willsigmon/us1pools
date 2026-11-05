import { business, image, escape } from './data.mjs';
import { wave } from './wave.mjs';

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

const navigation = [['', 'Home'], ['about', 'About'], ['pools-spas', 'Pools & Spas'], ['gallery', 'Gallery'], ['how-to-videos', 'How-To Videos'], ['contact', 'Contact Us']];
const poolsMenu = [['hotwater', 'Hot Water'], ['cool-water', 'Cool Water'], ['hotwater-1', 'Liners'], ['chill', 'Chill Therapy']];
const chevron = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false"><path d="M2.5 4.5L6 8l3.5-3.5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
const navLink = (slug, label, current) => `<a href="/${slug}"${current === slug ? ' aria-current="page"' : ''}>${escape(label)}</a>`;
const phones = [['Primary', business.primary], ['Secondary', business.secondary], ['Also', business.additional]];
export const tel = (number) => `tel:+1${number.replace(/\D/g, '')}`;

function header(slug) {
  const items = navigation.map(([path, label]) => path !== 'pools-spas' ? navLink(path, label, slug)
    : `<div class="nav-dropdown"><div class="dropdown-heading">${navLink(path, label, slug)}<button class="dropdown-toggle" type="button" aria-label="Pools and spas submenu" aria-expanded="false" aria-controls="pools-menu" data-dropdown-toggle>${chevron}</button></div><div class="dropdown-menu" id="pools-menu">${poolsMenu.map(([s, l]) => navLink(s, l, slug)).join('')}</div></div>`).join('');
  return `<a class="skip-link" href="#main">Skip to content</a><p class="season-notice"><span class="container">${escape(business.hours)}</span></p><header class="site-header" data-header><div class="container header-inner"><a class="brand" href="/" aria-label="US-1 Pools home">${image('e2bf0920', 'US-1 Pools', { eager: true, sizes: '160px' })}</a><button class="menu-toggle" type="button" aria-controls="site-nav" aria-expanded="false" data-menu-toggle><span>Menu</span><svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true"><path d="M0 1h20M0 7h20M0 13h20" fill="none" stroke="currentColor" stroke-width="1.5"/></svg></button><nav id="site-nav" aria-label="Main navigation">${items}<a class="header-call" href="${tel(business.primary)}">${business.primary}</a></nav></div></header>`;
}

function footer(slug) {
  const light = slug === 'contact'; // Contact page already lists every detail; keep its footer light.
  return `<footer class="site-footer${light ? ' footer-light' : ''}">${wave('footer-wave')}<div class="footer-body"><div class="container footer-grid">
    <div class="footer-brand"><a href="/" aria-label="US-1 Pools home">${image('e2bf0920', 'US-1 Pools', { className: 'footer-logo', sizes: '200px' })}</a></div>
    ${light ? '' : `<div class="footer-col"><h2 class="footer-head">Visit</h2><address>${business.street}<br>${business.city}</address><p><a class="text-link" href="${business.directions}">Directions</a></p><h2 class="footer-head">Hours</h2><p class="footer-hours">${escape(business.hours)}</p></div>
    <div class="footer-col"><h2 class="footer-head">Call</h2><ul class="footer-phones" role="list">${phones.map(([label, number]) => `<li><span class="phone-label">${label}</span><a href="${tel(number)}">${number}</a></li>`).join('')}</ul><h2 class="footer-head">Email</h2><p><a href="mailto:${business.email}">${business.email}</a></p></div>`}
    <div class="footer-col"><h2 class="footer-head">More</h2><ul class="footer-links" role="list"><li><a class="text-link" href="${business.payment}">Pay US-1 Pools</a></li><li><a class="text-link" href="${business.facebook}">Facebook</a></li><li><a class="text-link" href="/contact">Get in touch</a></li></ul></div>
  </div><div class="container footer-bottom"><span>&copy; ${new Date().getUTCFullYear()} US-1 Pools</span><nav aria-label="Footer navigation">${navigation.slice(1).map(([s, l]) => navLink(s, l)).join('')}</nav></div></div></footer>`;
}

export function layout({ slug, title, description, body, intro = '' }) {
  const canonical = `https://www.us1pools.com/${slug}`;
  const fullTitle = `${title} | US-1 Pools, Franklinton NC`;
  const ogImage = 'https://www.us1pools.com/assets/og/us1pools-og.jpg';
  const pageIntro = slug ? `<div class="page-intro"><div class="container"><nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>${escape(title)}</span></nav><h1>${escape(title)}</h1>${intro ? `<p class="page-intro-copy">${escape(intro)}</p>` : ''}</div></div>` : '';
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><script>${initScript}</script><title>${escape(fullTitle)}</title>
<meta name="description" content="${escape(description)}">${slug === '404' ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${canonical}">`}
<meta property="og:type" content="website"><meta property="og:locale" content="en_US"><meta property="og:site_name" content="US-1 Pools"><meta property="og:title" content="${escape(fullTitle)}"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${ogImage}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="US-1 Pools logo over aqua pool water">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(fullTitle)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="${ogImage}"><meta name="twitter:image:alt" content="US-1 Pools logo over aqua pool water"><meta name="theme-color" content="#0d2240">
<link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/png" href="/assets/favicon.png"><link rel="apple-touch-icon" href="/assets/favicon.png"><link rel="preload" as="font" type="font/woff2" href="/assets/fonts/newsreader-latin.woff2" crossorigin><link rel="preload" as="font" type="font/woff2" href="/assets/fonts/manrope-latin.woff2" crossorigin>${slug === '' ? '<link rel="preload" as="image" href="/assets/live/hero-yt.webp" fetchpriority="high">' : ''}
<link rel="stylesheet" href="/styles.css"><script src="/script.js" defer></script>${slug === 'gallery' ? '<script src="/gallery.js" defer></script>' : ''}<script type="application/ld+json">${schema}</script></head>
<body class="${slug ? `page-${slug}` : 'page-home'}">${header(slug)}<main id="main" tabindex="-1">${pageIntro}${body}</main>${footer(slug)}<nav class="mobile-bar" aria-label="Call or get directions"><a href="${tel(business.primary)}">Call</a><a href="${business.directions}">Directions</a></nav></body></html>
`;
}
