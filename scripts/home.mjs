import { textEntries, image, escape, business, homePhotos } from './data.mjs';
import { logo } from './logos.mjs';
import { tel } from './layout.mjs';

const entries = textEntries('home');
const about = textEntries('about');
const copy = (start) => escape(entries.find(({ text }) => text.startsWith(start)).text.replace(' – ', ', '));
const paragraphAfter = (heading) => escape(entries[entries.findIndex(({ tag, text }) => tag === 'h2' && text === heading) + 1].text);
const names = (list) => list.map((name) => `<span>${name}</span>`).join('');
const model = (title, list, href, brand = '') => `<li><a class="model-link" href="${href}">${brand}<strong>${title}</strong><span class="model-names">${names(list)}</span></a></li>`;
const various = ['Various sizes &amp; colors'];

export function homePage() {
  const reasons = ['Quality Guaranteed', 'Shark-Smart Pricing', 'Pro Installation Crew', 'Chemical Concierge', 'Free Water Testing'];
  const retail = [
    `<a class="retail-brand" href="https://www.youtube.com/watch?v=-JBIObt7Cuo">${logo('oxygen-pools', 'Oxygen Pools')}</a><span class="retail-note">(Chlorine alternative)</span>`,
    'Salt-Based Systems', 'General Maintenance Equipment', 'Various Pool &amp; Spa Parts', 'Automatic Cleaners',
  ];
  const services = ['Sand Changes', 'Pump / Filter / Heater Installation', 'Liner Changes (Above & In-Ground)', 'Season Openings / Closings', 'General Maintenance & more.'];
  return {
    slug: '', title: 'Pools, Spas & Service',
    description: 'US-1 Pools in Franklinton, NC offers pool and spa sales, service and installation, liners, equipment and free water testing for Wake Forest and The Triangle.',
    body: `<section class="hero" aria-labelledby="hero-title">
      <div class="hero-grid">
        <div class="hero-copy">
          <h1 id="hero-title">Pools, spas &amp; service in Franklinton, NC</h1>
          <p class="hero-lead">The premier aquatic experts in The Triangle. ${copy('Sales, Service').replace('—', ' — ')}</p>
          <div class="hero-actions"><a class="button" href="${tel(business.primary)}">Call ${business.primary}</a><a class="text-link" href="/pools-spas">Explore pools &amp; spas</a></div>
          <div class="hero-badges"><figure>${image('6b1cf7df', 'North Carolina licensing board seal', { eager: true, sizes: '72px' })}<figcaption>NC-Licensed</figcaption></figure></div>
        </div>
        <div class="hero-visual">
          <figure class="hero-photo">${image('1092da1f', 'Inground pool with a stone paver deck beside a home', { eager: true, priority: true, sizes: '(max-width: 959px) 100vw, 60vw' })}</figure>
          <div class="hero-pool">
            <img class="hero-water" src="/assets/live/hero-yt.webp" width="1280" height="720" alt="" fetchpriority="high" decoding="async">
            <video class="hero-video" autoplay muted loop playsinline preload="metadata" poster="/assets/live/hero-yt.webp" aria-hidden="true"><source src="/assets/video/hero-water.webm" type="video/webm"><source src="/assets/video/hero-water.mp4" type="video/mp4"></video>
          </div>
        </div>
      </div>
    </section>
    <section class="info-strip" aria-label="Visit, financing and payment"><div class="container info-grid">
      <div class="info-cell"><p class="sublabel">Financing available through:</p><ul class="financing-list" role="list"><li><a href="https://www.hfsfinancial.net/promo/62e3e8d04c132a3c6be3dbe8/">${logo('hfs', 'HFS')}</a></li><li><a href="https://allegrologin.com/app/035ef18f">Allegro</a></li></ul></div>
      <div class="info-cell"><p class="sublabel">Payments</p><a class="text-link" href="${business.payment}">Pay US-1 Pools</a></div>
    </div></section>
    <section class="team" aria-labelledby="team-title">
      <figure class="team-photo">${image('c2cddecf', 'Shayne and Cathy Parrish, owners of US-1 Pools', { sizes: '(max-width: 959px) 100vw, 58vw' })}</figure>
      <div class="team-copy" data-reveal><h2 id="team-title">Our Team</h2><p class="team-quote">${escape(about.at(-1).text)}</p><dl class="team-names"><div><dt>Shayne &amp; Cathy Parrish</dt><dd>Owners &amp; CPO Certified</dd></div><div><dt>Tonni &amp; Alan Deitch</dt><dd>Business Operations</dd></div></dl><a class="text-link" href="/about">About US-1 Pools</a></div>
    </section>
    <section class="section models" aria-labelledby="models-title"><div class="container">
      <h2 class="section-heading" id="models-title" data-reveal>Available Pool Models</h2>
      <div class="model-columns">
        <div class="model-col" data-reveal><figure>${image('0a979cbc', 'Above ground pool installed in a backyard', { sizes: '(max-width: 959px) 100vw, 30vw' })}</figure><h3>Above-Ground</h3><ul role="list">${model('Resin Above-Ground', ['Genesis', 'Nakoma', 'Discovery'], '/resin-examples')}${model('Hybrid Above-Ground', ['AquaSport', 'Oasis', 'Ultimate'], '/hybrid')}${model('Steel Above-Ground', ['Coral Seas', 'Distinction', 'Eclipse', 'Serena', 'Southport'], '/steel-pools')}</ul></div>
        <div class="model-col" data-reveal><figure>${image('741f794f', 'Imagine fiberglass pool in reef blue', { sizes: '(max-width: 959px) 100vw, 30vw' })}</figure><h3>In-Ground Liner / Fiberglass</h3><ul role="list">${model('Imagine® Fiberglass', various, 'https://imaginepools.com/pool-range/', logo('imagine', 'Imagine Pools'))}${model('Pools by Genesis®', various, 'https://poolsbygenesis.com', logo('genesis', 'Pools by Genesis'))}<li><div class="model-link"><strong>Vinyl Liners</strong><span class="model-logos"><a href="https://cardinalpools.com">${logo('cardinal', 'Cardinal')}</a><a href="https://www.lathampool.com">${logo('latham', 'Latham')}</a></span></div></li></ul></div>
        <div class="model-col" data-reveal><figure>${image('71d991cf', 'Garden Leisure hot tub', { sizes: '(max-width: 959px) 100vw, 30vw' })}</figure><h3>Hot Tubs &amp; Spas</h3><ul role="list">${model('Tranquility®', various, 'https://tranquilitybrandspas.com', logo('tranquility', 'Tranquility'))}${model('Garden Leisure® Spas', various, 'https://hottubs.com/brands/garden-leisure/', logo('garden-leisure', 'Garden Leisure'))}</ul></div>
      </div>
      <div class="section-actions"><a class="button" href="/contact">Get in Touch</a><a class="text-link" href="/pools-spas">All pools &amp; spas</a></div>
    </div></section>
    <section class="services" aria-labelledby="services-title">
      <div class="container services-head" data-reveal><h2 id="services-title">Services</h2><div class="services-summary"><div><p class="sublabel">Including:</p><ul class="service-list" role="list">${services.map((item) => `<li>${escape(item).replace('In-Ground', '<span class="nowrap">In-Ground</span>')}</li>`).join('')}</ul></div><a class="button button-light" href="${tel(business.primary)}">Call ${business.primary}</a></div></div>
      <div class="service-strip">${[['Pumps', '33580aba'], ['Liners', '579b2c5f'], ['Filters & Heaters', '440327bc'], ['Openings & Closings', 'e2690e86']].map(([title, prefix]) => `<article class="service" data-reveal><figure>${image(prefix, title, { sizes: '(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw' })}</figure><div class="service-copy"><h3>${escape(title)}</h3><p>${paragraphAfter(title)}</p></div></article>`).join('')}</div>
    </section>
    <section class="section retail" aria-labelledby="retail-title"><div class="container retail-grid">
      <figure class="retail-photo" data-reveal>${image('a5502ee3', 'Inside the US-1 Pools retail store', { sizes: '(max-width: 960px) 100vw, 50vw' })}</figure>
      <div class="retail-copy" data-reveal><h2 id="retail-title">Retail</h2><p class="sublabel">Including:</p><ul class="retail-list" role="list">${retail.map((item) => `<li>${item}</li>`).join('')}</ul></div>
    </div></section>
    <section class="section reasons" aria-labelledby="reasons-title"><div class="container reasons-grid">
      <h2 class="section-heading" id="reasons-title" data-reveal>Why Choose Us? <span>We’re the wave that makes a difference:</span></h2>
      <ol class="reason-list" role="list">${reasons.map((title) => `<li data-reveal><h3>${title}</h3><p>${copy(title).slice(title.length + 1)}</p></li>`).join('')}</ol>
    </div></section>
    <section class="section recent" aria-labelledby="recent-title"><div class="container">
      <h2 class="section-heading" id="recent-title">Recent Photos</h2>
      <div class="recent-row" role="region" aria-label="Recent photos" tabindex="0"><a class="recent-cta" href="/gallery">${image('43a6a347', 'View recent photos', { sizes: '240px' })}</a><a href="/gallery" aria-label="View gallery: The US-1 Pools store at 3453 US Hwy 1 South in Franklinton">${image('6ef8eace', 'The US-1 Pools store at 3453 US Hwy 1 South in Franklinton', { sizes: '240px' })}</a>${homePhotos.map(({ url, alt }) => `<a href="/gallery" aria-label="View gallery: ${escape(alt)}">${image(url, alt, { sizes: '240px' })}</a>`).join('')}</div>
      <div class="section-actions"><a class="text-link" href="/gallery">View gallery</a></div>
    </div></section>`,
  };
}
