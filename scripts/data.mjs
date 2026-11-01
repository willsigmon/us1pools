import { readFileSync, existsSync } from 'node:fs';

export const content = JSON.parse(readFileSync(new URL('../_source/content.json', import.meta.url)));
const manifest = JSON.parse(readFileSync(new URL('../assets/live/manifest.json', import.meta.url)));
export const business = Object.freeze({
  name: 'US-1 Pools',
  street: '3453 US Hwy 1 South',
  city: 'Franklinton, NC 27525',
  primary: '919-441-0033',
  secondary: '919-880-4323',
  email: 'us1pools@gmail.com',
  hours: "Closed for the winter starting November 1. We'll post spring hours when we reopen.",
  payment: 'https://buy.stripe.com/5kA4iY3xm30agFObII',
  facebook: 'https://www.facebook.com/us1pools',
  directions: 'https://www.google.com/maps/search/?api=1&query=3453+US+Hwy+1+South%2C+Franklinton%2C+NC+27525',
});
export const escape = (text) => String(text).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
export const asset = (prefixOrUrl) => {
  const prefix = prefixOrUrl.includes('/') ? prefixOrUrl.split('/').at(-2).slice(0, 8) : prefixOrUrl;
  const file = Object.keys(manifest).find((name) => name.startsWith(prefix));
  if (!file) throw new Error(`No image for ${prefixOrUrl}`);
  return { file, ...manifest[file], src: `/assets/live/${file}`, original: manifest[file].src };
};
export function image(prefix, alt, { className = '', eager = false, sizes = '(max-width: 640px) 100vw, (max-width: 960px) 50vw, 600px' } = {}) {
  const entry = asset(prefix);
  const src = `/assets/live/${entry.file}`;
  const variants = [160, 320, 480, 768, 960].map((width) => ({ width, path: `/assets/thumbs/${entry.file.replace('.webp', `-${width}.webp`)}` }))
    .filter(({ path }) => existsSync(new URL(`..${path}`, import.meta.url)));
  const srcset = variants.length ? ` srcset="${variants.map(({ path, width }) => `${path} ${width}w`).join(', ')}, ${src} ${entry.w}w" sizes="${escape(sizes)}"` : '';
  return `<img src="${src}"${srcset} alt="${escape(alt)}" width="${entry.w}" height="${entry.h}"${className ? ` class="${escape(className)}"` : ''} loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
}
export function video(id, title) {
  return `<div class="video-facade"><button type="button" data-video="${escape(id)}" data-title="${escape(title)}" aria-label="Play ${escape(title)}"><img src="https://i.ytimg.com/vi/${escape(id)}/hqdefault.jpg" width="480" height="360" alt="" loading="lazy" decoding="async"><span class="play-icon" aria-hidden="true">▶</span><span class="video-label">${escape(title)}</span></button></div><a class="video-fallback text-link" href="https://www.youtube.com/watch?v=${escape(id)}">Watch on YouTube <span aria-hidden="true">↗</span></a>`;
}
export const textEntries = (slug) => content[slug].text.map((line) => ({ tag: line.slice(1, line.indexOf(']')), text: line.slice(line.indexOf(']') + 2) }));
