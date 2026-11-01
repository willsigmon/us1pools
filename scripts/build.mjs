import { writeFileSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { content, image, escape, video } from './data.mjs';
import { productPages } from './pages.mjs';
import { homePage } from './home.mjs';
import { extraPages } from './extras.mjs';
import { layout, schema, initScript } from './layout.mjs';

const root = new URL('../', import.meta.url);
const pages = [homePage(), ...productPages({content,image,escape,video}), ...extraPages()];
for (const page of pages) writeFileSync(new URL(`${page.slug || 'index'}.html`,root),layout(page));
writeFileSync(new URL('sitemap.xml',root),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(({slug})=>slug!=='404').map(({slug})=>`  <url><loc>https://www.us1pools.com/${slug}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(new URL('robots.txt',root),'User-agent: *\nAllow: /\n\nSitemap: https://www.us1pools.com/sitemap.xml\n');
// Allow only the exact structured-data and pre-paint initializer payloads.
const hashes = [schema, initScript].map((script) => `'sha256-${createHash('sha256').update(script).digest('base64')}'`).join(' ');
const config = JSON.parse(readFileSync(new URL('vercel.json',root)));
config.cleanUrls = true;
config.headers = config.headers.filter(({source})=>source!=='/api/(.*)');
const csp = config.headers.find(({source})=>source==='/(.*)').headers.find(({key})=>key==='Content-Security-Policy');
csp.value = `default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'; script-src 'self' ${hashes}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://i.ytimg.com; font-src 'self'; media-src 'self'; connect-src 'self'; frame-src https://www.youtube-nocookie.com https://www.youtube.com https://www.google.com; manifest-src 'self'; upgrade-insecure-requests`;
// Static root output, with no server-side functions or deployment-time build required.
config.framework = null;
config.buildCommand = '';
config.outputDirectory = '.';
writeFileSync(new URL('vercel.json',root),JSON.stringify(config,null,2)+'\n');
console.log(`Generated ${pages.length} static pages, sitemap, robots and matching CSP hash.`);
