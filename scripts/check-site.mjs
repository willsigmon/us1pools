#!/usr/bin/env node
// Dependency-free checks for the committed static output; never scans source snapshots.
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://www.us1pools.com';
const required = ['index', 'about', 'pools-spas', 'hotwater', 'cool-water', 'hotwater-1', 'chill', 'fiberglass', 'hybrid', 'aboveground-examples', 'steel-pools', 'resin-examples', 'gallery', 'how-to-videos', 'contact', '404'];
const errors = [];
const assert = (condition, message) => { if (!condition) errors.push(message); };
const read = (name) => readFile(resolve(root, name), 'utf8');
const decode = (value = '') => value.replace(/&(?:amp|quot|apos|lt|gt|#39|#(\d+)|#x([\da-f]+));/gi, (entity, dec, hex) => dec ? String.fromCodePoint(Number(dec)) : hex ? String.fromCodePoint(parseInt(hex, 16)) : ({'&amp;': '&', '&quot;': '"', '&apos;': "'", '&#39;': "'", '&lt;': '<', '&gt;': '>'}[entity.toLowerCase()] ?? entity));
const plainText = (value = '') => decode(value.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').trim();
const phones = [
  ['Primary', '919-441-0033', '+19194410033'],
  ['Secondary', '919-864-0277', '+19198640277'],
  ['Also', '919-880-4323', '+19198804323'],
];
function checkPhones(body, context) {
  for (const [label, number, tel] of phones) {
    assert(plainText(body).includes(number), `${context}: missing ${number}`);
    assert(new RegExp(`\\b${label}\\b`, 'i').test(plainText(body)), `${context}: missing ${label} phone label`);
    assert([...body.matchAll(/<a\b[^>]*>/gi)].some(([tag]) => attributes(tag).href === `tel:${tel}`), `${context}: missing tel link for ${number}`);
  }
}
function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/\s([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map((m) => [m[1].toLowerCase(), decode(m[2] ?? m[3] ?? m[4])]));
}
const exists = async (path) => { try { return (await stat(path)).isFile(); } catch { return false; } };
const files = (await readdir(root)).filter((name) => name.endsWith('.html'));
const html = new Map(await Promise.all(files.map(async (name) => [name, await read(name)])));
const ids = new Map([...html].map(([name, body]) => [name, new Set([...body.matchAll(/\bid\s*=\s*["']([^"']+)["']/g)].map((m) => decode(m[1])))]));
for (const name of required) assert(html.has(`${name}.html`), `Missing required page: ${name}.html`);
const config = JSON.parse(await read('vercel.json'));
assert(config.cleanUrls === true, 'vercel.json needs cleanUrls: true');
for (const [source, destination] of [['/home', '/'], ['/customer-faqs', '/contact'], ['/store', '/']]) {
  const redirect = config.redirects?.find((item) => item.source === source);
  assert(redirect?.destination === destination && redirect.statusCode === 301 && !Object.hasOwn(redirect, 'permanent'), `vercel.json needs an explicit 301 redirect from ${source} to ${destination}`);
}
const headers = config.headers?.flatMap((rule) => rule.headers) ?? [];
const csp = headers.find((header) => header.key.toLowerCase() === 'content-security-policy')?.value ?? '';
const directive = (name) => csp.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${name} `)) ?? '';
for (const host of ['https://www.youtube-nocookie.com', 'https://www.youtube.com', 'https://www.google.com']) {
  assert(directive('frame-src').split(/\s+/).includes(host), `CSP frame-src missing ${host}`);
}
assert(/(?:https:|https:\/\/i\.ytimg\.com)(?:\s|$)/.test(directive('img-src')), 'CSP img-src must allow i.ytimg.com');
assert(directive('media-src').split(/\s+/).includes("'self'"), "CSP media-src must allow 'self'");
let checkedLinks = 0;
async function checkReference(value, from) {
  if (!value || /^(?:data:|mailto:|tel:|blob:)/i.test(value)) return;
  if (/^javascript:/i.test(value)) { errors.push(`${from}: javascript: URL is forbidden`); return; }
  let url;
  try { url = new URL(value, `${origin}/${from}`); } catch { errors.push(`${from}: invalid URL ${value}`); return; }
  if (url.origin !== origin) return;
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { errors.push(`${from}: malformed URL ${value}`); return; }
  const path = resolve(root, `.${pathname}`);
  if (relative(root, path).startsWith('..')) { errors.push(`${from}: path escapes site ${value}`); return; }
  const candidates = [path, `${path}.html`, resolve(path, 'index.html')];
  let target;
  for (const candidate of candidates) if (await exists(candidate)) { target = candidate; break; }
  checkedLinks++;
  assert(target, `${from}: missing internal target ${value}`);
  if (target && url.hash && extname(target) === '.html') {
    const id = decodeURIComponent(url.hash.slice(1));
    assert(ids.get(relative(root, target))?.has(id), `${from}: missing fragment ${value}`);
  }
}
const titles = new Set();
const descriptions = new Set();
for (const [name, body] of html) {
  const title = decode(body.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim();
  const tags = [...body.matchAll(/<(?:meta|link)\b[^>]*>/gi)].map((m) => attributes(m[0]));
  const meta = (key) => tags.find((tag) => tag.name === key || tag.property === key)?.content;
  const description = meta('description') ?? '';
  assert((body.match(/<h1\b/gi) ?? []).length === 1, `${name}: expected one h1`);
  assert((body.match(/<main\b/gi) ?? []).length === 1, `${name}: expected one main`);
  assert(title && title.length <= 60 && !titles.has(title), `${name}: title missing, duplicated, or longer than 60 characters (${title.length})`);
  titles.add(title);
  if (name !== '404.html') {
    assert(description.length >= 140 && description.length <= 160 && !descriptions.has(description), `${name}: description must be unique and 140–160 characters (${description.length})`);
    descriptions.add(description);
    const expected = `${origin}/${name === 'index.html' ? '' : name.replace(/\.html$/, '')}`;
    assert(tags.find((tag) => tag.rel === 'canonical')?.href === expected, `${name}: incorrect canonical (expected ${expected})`);
    for (const key of ['og:title', 'og:description', 'twitter:card', 'twitter:title', 'twitter:description']) assert(meta(key), `${name}: missing ${key}`);
    for (const key of ['og:image', 'twitter:image']) {
      assert(/^https:\/\//.test(meta(key) ?? ''), `${name}: ${key} must be absolute HTTPS`);
      await checkReference(meta(key), name);
    }
    assert(meta('og:url') === expected, `${name}: incorrect og:url`);
    if (['index.html', 'contact.html'].includes(name)) assert(decode(body).includes("Closed for the winter starting November 1. We'll post spring hours when we reopen."), `${name}: missing mandatory winter hours`);
    for (const value of ['3453 US Hwy 1 South', 'Franklinton', '27525', 'us1pools@gmail.com']) assert(body.includes(value), `${name}: missing NAP ${value}`);
  }
  checkPhones(body.match(/<footer\b[^>]*>([\s\S]*?)<\/footer>/i)?.[1] ?? '', `${name} footer`);
  if (name === 'contact.html') checkPhones(body.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '', 'contact.html main content');
  assert(!/lightstream|indexnow/i.test(body), `${name}: forbidden financing provider or IndexNow`);
  assert(!/openingHours/.test(body), `${name}: remove openingHours while closed for winter`);
  for (const [, tag, contents] of body.matchAll(/(<button\b[^>]*\bdata-video=[^>]*>)([\s\S]*?)<\/button>/gi)) {
    const id = attributes(tag)['data-video'];
    const thumbnail = attributes(contents.match(/<img\b[^>]*>/i)?.[0] ?? '').src;
    assert((thumbnail === `https://i.ytimg.com/vi/${id}/mqdefault.jpg`), `${name}: ${id} facade must use mqdefault.jpg`);
  }
  for (const match of body.matchAll(/<[^!][^>]*>/g)) {
    const attr = attributes(match[0]);
    for (const key of ['href', 'src', 'poster']) if (attr[key]) await checkReference(attr[key], name);
    if (attr.srcset && !attr.srcset.startsWith('data:')) for (const item of attr.srcset.split(',')) await checkReference(item.trim().split(/\s+/)[0], name);
    if (/^<img\b/i.test(match[0])) {
      assert(Object.hasOwn(attr, 'alt'), `${name}: image missing alt (${attr.src})`);
      assert(Number(attr.width) > 0 && Number(attr.height) > 0, `${name}: image missing dimensions (${attr.src})`);
    }
  }
  for (const match of body.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const attr = attributes(`<script ${match[1]}>`);
    if (!attr.src && match[2].trim()) {
      const hash = `'sha256-${createHash('sha256').update(match[2]).digest('base64')}'`;
      assert(directive('script-src').includes(hash) || directive('script-src').includes("'unsafe-inline'"), `${name}: inline script hash missing from CSP`);
    }
    if (attr.type === 'application/ld+json') {
      try {
        const data = JSON.parse(match[2]);
        const nodes = data['@graph'] ?? (Array.isArray(data) ? data : [data]);
        for (const node of nodes.filter((item) => [].concat(item['@type']).includes('LocalBusiness'))) {
          assert(node.name === 'US-1 Pools' && [].concat(node.telephone ?? []).includes('+1-919-441-0033'), `${name}: incorrect business name/phone in schema`);
          assert(node.address?.streetAddress === '3453 US Hwy 1 South' && node.address?.addressLocality === 'Franklinton' && node.address?.addressRegion === 'NC' && node.address?.postalCode === '27525', `${name}: incorrect schema address`);
          assert(node.geo?.latitude === 36.1021 && node.geo?.longitude === -78.467, `${name}: incorrect schema coordinates`);
          const schemaPhones = [].concat(node.telephone ?? [], ...[].concat(node.contactPoint ?? []).map((point) => point.telephone ?? []));
          for (const number of ['+1-919-864-0277', '+1-919-880-4323']) assert(schemaPhones.includes(number), `${name}: schema missing phone ${number}`);
          assert(node.email === 'us1pools@gmail.com' && String(node.foundingDate) === '2015', `${name}: incorrect schema email/founding date`);
          for (const key of ['url', 'logo', 'image']) assert(/^https:\/\//.test(node[key] ?? ''), `${name}: schema ${key} must be absolute HTTPS`);
        }
      } catch (error) { errors.push(`${name}: invalid JSON-LD (${error.message})`); }
    }
  }
}
for (const name of ['index.html', 'contact.html']) assert(html.get(name)?.includes('LocalBusiness'), `${name}: LocalBusiness schema missing`);
// CSS resources are checked separately so backgrounds and self-hosted fonts are included.
async function checkStyles(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith('.') || ['node_modules', '_source', 'scripts'].includes(entry.name)) continue;
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await checkStyles(path);
    else if (entry.name.endsWith('.css')) {
      const source = relative(root, path);
      for (const match of (await readFile(path, 'utf8')).matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/g)) await checkReference(match[1], source);
    }
  }
}
await checkStyles(root);
const sitemap = await read('sitemap.xml');
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1]));
for (const page of required.filter((page) => page !== '404')) assert(locations.includes(`${origin}/${page === 'index' ? '' : page}`), `sitemap.xml missing ${page}`);
for (const location of locations) await checkReference(location, 'sitemap.xml');
assert((await read('robots.txt')).includes(`${origin}/sitemap.xml`), 'robots.txt missing sitemap');
const home = html.get('index.html') ?? '';
for (const url of ['https://www.hfsfinancial.net/promo/62e3e8d04c132a3c6be3dbe8/', 'https://allegrologin.com/app/035ef18f', 'https://buy.stripe.com/5kA4iY3xm30agFObII']) assert(home.includes(url), `index.html missing mandatory financing/payment link ${url}`);
const hero = home.match(/<section\b[^>]*\bclass="hero"[^>]*>([\s\S]*?)<\/section>/i)?.[1] ?? '';
const heroVideo = hero.match(/(<video\b[^>]*>)([\s\S]*?)<\/video>/i);
const heroVideoAttributes = attributes(heroVideo?.[1] ?? '');
assert(heroVideo, 'index.html missing hero video');
for (const attribute of ['autoplay', 'muted', 'loop', 'playsinline']) assert(new RegExp(`\\s${attribute}(?:\\s|=|>)`, 'i').test(heroVideo?.[1] ?? ''), `index.html hero video missing ${attribute}`);
assert(heroVideoAttributes.preload === 'metadata' && heroVideoAttributes.poster === '/assets/live/hero-yt.webp', 'index.html hero video needs metadata preload and fallback poster');
const heroSources = [...(heroVideo?.[2] ?? '').matchAll(/<source\b[^>]*>/gi)].map(([tag]) => attributes(tag));
for (const extension of ['webm', 'mp4']) assert(heroSources.some((source) => source.src === `/assets/video/hero-water.${extension}` && source.type === `video/${extension}`), `index.html hero video missing ${extension} source`);
assert([...hero.matchAll(/<img\b[^>]*>/gi)].some(([tag]) => attributes(tag).src === '/assets/live/hero-yt.webp'), 'index.html hero missing image fallback');
assert(/<iframe[^>]+src=[\"']https:\/\/www\.google\.com\//.test(html.get('contact.html') ?? ''), 'contact.html missing Google Maps iframe');
const content = JSON.parse(await read('_source/content.json'));
const manifest = JSON.parse(await read('assets/live/manifest.json'));
const gallery = html.get('gallery.html') ?? '';
assert(/<p\b[^>]*>\s*View recent photos of our work\.\s*<\/p>/i.test(gallery), 'gallery.html missing approved intro paragraph');
const hub = html.get('pools-spas.html') ?? '';
for (const entry of content['pools-spas'].text.slice(2).filter((line) => !line.startsWith('[li]'))) {
  const text = entry.replace(/^\[[^\]]+\] /, '');
  assert(plainText(hub).includes(text), `pools-spas.html missing verbatim source copy: ${text}`);
}
for (const prefix of ['71d991cf-garden-spas1', '47929c8d-swim-spa5']) assert(hub.includes(prefix), `pools-spas.html missing ${prefix} image`);
const hubCards = [...hub.matchAll(/<article\b[^>]*class="[^"]*\bimage-card\b[^"]*"[^>]*>([\s\S]*?)<\/article>/gi)].map((match) => match[1]);
for (const route of ['/hotwater', '/cool-water', '/hotwater-1', '/chill']) assert(hubCards.some((card) => card.includes(`href="${route}"`)), `pools-spas.html missing hub card ${route}`);
const chill = html.get('chill.html') ?? '';
const specificationRows = [...chill.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map(([, row]) => [...row.matchAll(/<(?:th|td)\b[^>]*>([\s\S]*?)<\/(?:th|td)>/gi)].map(([, cell]) => plainText(cell)));
const specifications = [
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
assert(/<table\b/i.test(chill), 'chill.html missing real-text Specifications table');
for (const [label, value] of specifications) assert(specificationRows.some((row) => row[0] === label && row[1] === value), `chill.html missing specification row: ${label}: ${value}`);
for (const text of ['40 °F / 4 °C — 104 °F / 40 °C', 'Unrivaled chill-to-heat flexibility for recovery or relaxation.']) assert(plainText(chill).includes(text), `chill.html missing callout: ${text}`);
assert(/<a\b[^>]*href="https:\/\/www\.lathampools\.com"[^>]*>\s*Click here for more information on Latham liners\./.test(html.get('hotwater-1.html') ?? ''), 'hotwater-1.html missing corrected Latham liner link');
assert(!html.get('hybrid.html')?.includes('7tSUAi7gdmM'), 'hybrid.html must not reference removed video');
// Shared logo and footer photo belong to the site chrome; the remaining 40 are gallery photographs.
for (const url of content.gallery.imgs) {
  const uuid = url.match(/\/([\da-f]{8})-[\da-f-]+\//)?.[1];
  if (['e2bf0920', '6ef8eace'].includes(uuid)) continue;
  const file = Object.keys(manifest).find((key) => key.startsWith(`${uuid}-`));
  assert(file && gallery.includes(file), `gallery.html missing source photograph ${uuid}`);
}
for (const id of content['how-to-videos'].videos) assert(html.get('how-to-videos.html')?.includes(id), `how-to-videos.html missing ${id}`);
if (errors.length) {
  console.error(`Static checks failed (${errors.length}):\n${errors.map((error) => `  - ${error}`).join('\n')}`);
  process.exitCode = 1;
} else console.log(`Static checks passed: ${html.size} pages, ${checkedLinks} local references, SEO/schema/CSP, all source gallery photos and how-to videos.`);
