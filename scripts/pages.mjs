/** Product and company pages, using the captured live copy without rewrites. */
export function productPages({ content, image, escape, video }) {
  const entries = (slug) => content[slug].text
    .map((line) => {
      const [, tag, text] = line.match(/^\[([^\]]+)\] (.*)$/u);
      return { tag, text };
    })
    .filter(({ tag }) => tag !== 'li');
  const photos = (slug) => content[slug].imgs.filter((url) => !/e2bf0920|6ef8eace/u.test(url));
  const section = (body, className = '') => `<section class="section ${className}"><div class="container">${body}</div></section>`;
  const link = (href, label) => `<a class="text-link" href="${escape(href)}">${escape(label)} <span aria-hidden="true">↗</span></a>`;
  const paragraph = (text) => `<p>${escape(text)}</p>`;
  const groups = (slug) => entries(slug).reduce((result, entry) => {
    if (entry.tag === 'h2') return [...result, { title: entry.text, copy: [] }];
    if (!result.length) return result;
    return [...result.slice(0, -1), { ...result.at(-1), copy: [...result.at(-1).copy, entry] }];
  }, []);
  const renderCopy = ({ tag, text }) => {
    if (tag === 'a' && text === 'More Steel Pool Examples') return link('/steel-pools', text);
    if (tag === 'a' && text === 'More Resin Pool Examples') return link('/resin-examples', text);
    if (text === 'Click here for more information about GLI liners.') return `<p>${link('https://www.glipoolproducts.com', text)}</p>`;
    if (text === 'Click here for more information on Latham liners.') return `<p>${link('https://www.lathampools.com', text)}</p>`;
    if (text.startsWith('https://')) return `<p>${link(text, text)}</p>`;
    if (text.startsWith('Installation video: ')) return `<p>Installation video: ${link('https://youtu.be/7tSUAi7gdmM', 'https://youtu.be/7tSUAi7gdmM')}</p>`;
    return paragraph(text);
  };
  const rows = (slug) => section(`<div class="product-list">${groups(slug).map((group, index) => {
    const listStart = group.copy.findIndex(({ text }) => text === 'Available in:');
    const copy = listStart < 0 ? group.copy.map(renderCopy).join('') : `${group.copy.slice(0, listStart + 1).map(renderCopy).join('')}<ul class="feature-list">${group.copy.slice(listStart + 1).map(({ text }) => `<li>${escape(text)}</li>`).join('')}</ul>`;
    const embeddedVideo = slug === 'hotwater-1' && index === 0 ? video('7B76eOgC9Fc', 'Doctor Liners for Above Ground pools from GLI') : slug === 'hybrid' && index === 2 ? video('7tSUAi7gdmM', 'The Ultimate installation video') : '';
    return `<article class="product-row" data-reveal><figure>${image(photos(slug)[index], group.title)}</figure><div class="product-copy"><h2>${escape(group.title)}</h2>${copy}${embeddedVideo}</div></article>`;
  }).join('')}</div>`);
  const cards = (items) => section(`<div class="cards">${items.map(({ title, photo, href }) => `<article class="image-card"><a href="${escape(href)}" aria-label="${escape(title)}">${image(photo, title)}</a><div class="card-copy"><h2><a href="${escape(href)}">${escape(title)}</a></h2>${link(href, 'View details')}</div></article>`).join('')}</div>`);
  const examples = (slug) => section(`<div class="cards">${groups(slug).map(({ title }, index) => `<article class="image-card model-card">${image(photos(slug)[index], `${title} pool specifications`, { className: 'model-sheet' })}<div class="card-copy"><h2>${escape(title)}</h2></div></article>`).join('')}</div>`);
  const page = (slug, title, description, body) => ({ slug, title, description, body });
  const about = entries('about');
  const chill = entries('chill');
  const chillSpecifications = [
    ['Dimensions', '70” × 33” × 37.5” (178 × 84 × 95 cm)'],
    ['Water Capacity', '79 gal (300 L)'],
    ['Dry / Filled Weight', '295 lbs • 955 lbs (134 kg • 433 kg)'],
    ['Control System', 'Digital Topside • 120 V | 60 Hz | 7.5 A'],
    ['Chiller', 'Mini-Inverter • 20 gal / min flow'],
    ['Temperature Range', '40–104 °F (4–40 °C)'],
    ['Filtration', 'HydroPur™ filter + Ozone'],
    ['Includes', 'Matching cover & step'],
    ['Warranty', 'One-year parts & labor'],
  ];
  return [
    page('about', 'About', 'Meet US-1 Pools, founded in 2015 to serve Wake Forest and surrounding areas, with pool installation, service and retail knowledge in Franklinton, NC.',
      section(`<div class="split"><figure>${image(photos('about')[0], 'Shayne Parrish, founder of US-1 Pools')}</figure><div class="prose"><h2>${escape(about[0].text)}</h2>${about.slice(1).map(({ text }) => paragraph(text)).join('')}</div></div>`)),
    page('pools-spas', 'Pools & Spas', 'Explore hot tubs and swim spas, fiberglass, hybrid and above ground pools, pool liners and the Chill Therapy Series at US-1 Pools in Franklinton, NC.', cards([
      { title: 'Hot Water', photo: photos('hotwater')[0], href: '/hotwater' },
      { title: 'Cool Water', photo: photos('cool-water')[0], href: '/cool-water' },
      { title: 'Liners', photo: photos('hotwater-1')[0], href: '/hotwater-1' },
      { title: 'Chill Therapy', photo: photos('chill')[0], href: '/chill' },
    ]) + rows('pools-spas')),
    page('hotwater', 'Hot Tubs & Spas', 'Explore Garden Leisure hot tubs and swim spas at US-1 Pools in Franklinton, NC, with padded headrests, LED lighting and a range of swim spa sizes.', rows('hotwater')),
    page('cool-water', 'Cool Water', 'Explore fiberglass, hybrid and above ground pool options from US-1 Pools in Franklinton, NC. View pool categories and find details on available models.', cards([
      { title: 'Fiberglass', photo: photos('cool-water')[0], href: '/fiberglass' },
      { title: 'Hybrid', photo: photos('cool-water')[1], href: '/hybrid' },
      { title: 'Above Ground', photo: photos('cool-water')[2], href: '/aboveground-examples' },
    ])),
    page('hotwater-1', 'Liners', 'Find information about GLI and Latham pool liners at US-1 Pools in Franklinton, NC, and learn about Doctor Liners for above ground pools in the video.', rows('hotwater-1')),
    page('chill', chill[0].text, 'Explore the Chill Therapy Series at US-1 Pools in Franklinton, NC, featuring a HydroPur filter, digital topside controls and an integrated matching step.',
      section(`<div class="product-list"><article class="product-row" data-reveal><figure>${image(photos('chill')[0], 'Chill Therapy tub with matching step')}</figure><div class="product-copy">${paragraph(chill[1].text)}<h2>${escape(chill[3].text)}</h2><div class="feature-list">${chill.slice(4, -1).map(({ tag, text }) => tag === 'h3' ? `<h3>${escape(text)}</h3>` : paragraph(text)).join('')}</div><div class="temperature-callout"><p class="temperature-range">40 °F / 4 °C — 104 °F / 40 °C</p>${paragraph(chill.at(-1).text)}</div></div></article><article class="product-row" data-reveal><figure>${image(photos('chill')[1], 'Chill Therapy tub viewed from above, showing a temperature range from 40°F / 4°C to 104°F / 40°C', { className: 'specification-image' })}</figure><div class="product-copy"><h2 id="chill-specifications">${escape(chill[2].text)}</h2><table class="specifications" aria-labelledby="chill-specifications"><tbody>${chillSpecifications.map(([label, value]) => `<tr><th scope="row">${escape(label)}</th><td>${escape(value)}</td></tr>`).join('')}</tbody></table></div></article></div>`)),
    page('fiberglass', 'Fiberglass Pools', 'Discover Imagine Pools fiberglass swimming pools at US-1 Pools in Franklinton, NC, with varied shapes, sizes and colors and structural and gelcoat warranties.', rows('fiberglass')),
    page('hybrid', 'Hybrid Pools', 'Explore Oasis, AquaSport 52 and The Ultimate hybrid pools at US-1 Pools in Franklinton, NC, with installation details and a video for The Ultimate.', rows('hybrid')),
    page('aboveground-examples', 'Above Ground Pools', 'Compare steel and resin above ground pools at US-1 Pools in Franklinton, NC, with 52 and 54 inch heights, material details and links to pool examples.', rows('aboveground-examples')),
    page('steel-pools', 'Steel Pool Examples', 'View Coral Seas, Distinction, Eclipse, Serena and Southport steel pool examples from US-1 Pools in Franklinton, NC, and explore above ground pool models.', examples('steel-pools')),
    page('resin-examples', 'Resin Pool Examples', 'View Discovery, Genesis and Nakoma resin pool examples from US-1 Pools in Franklinton, NC, and explore the available selection of above ground pools.', examples('resin-examples')),
  ];
}
