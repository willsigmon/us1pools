#!/usr/bin/env node
// Local preview of Vercel's committed static output, including clean URLs and security headers.
import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { readFile, stat, realpath } from 'node:fs/promises';
import { resolve, dirname, extname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const portIndex = args.indexOf('--port');
const port = Number(args.find((arg) => arg.startsWith('--port='))?.split('=')[1] ?? (portIndex >= 0 ? args[portIndex + 1] : undefined) ?? process.env.PORT ?? 3000);
const host = process.env.HOST ?? '127.0.0.1';
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json', '.xml': 'application/xml; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.ico': 'image/x-icon', '.woff': 'font/woff', '.woff2': 'font/woff2', '.avif': 'image/avif', '.mp4': 'video/mp4' };
let headers = [];
try { headers = JSON.parse(await readFile(resolve(root, 'vercel.json'), 'utf8')).headers ?? []; } catch { /* Preview also works without deployment config. */ }
const publicPath = (pathname) => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.some((part) => part.startsWith('.') || part.startsWith('_'))) return false;
  if (parts.length > 1) return ['assets', 'fonts', 'images', 'styles', 'js', 'css'].includes(parts[0]) && Boolean(types[extname(pathname)]);
  return !parts.length || /\.(?:html|css|js|ico|svg|png|webp|jpg|jpeg)$/.test(pathname) || ['robots.txt', 'sitemap.xml', 'site.webmanifest', 'manifest.webmanifest'].includes(parts[0]) || !extname(pathname);
};
async function findFile(pathname) {
  const path = resolve(root, `.${pathname}`);
  if (relative(root, path).startsWith('..')) return null;
  for (const candidate of [path, `${path}.html`, resolve(path, 'index.html')]) {
    try {
      const resolved = await realpath(candidate);
      if (!relative(root, resolved).startsWith('..') && (await stat(resolved)).isFile()) return resolved;
    } catch { /* Try the next clean URL candidate. */ }
  }
  return null;
}
const server = createServer(async (request, response) => {
  try {
    if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return; }
    let pathname;
    try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname); } catch { response.writeHead(400); response.end('Bad request'); return; }
    for (const rule of headers) {
      const matches = ['/(.*)', '/:path*'].includes(rule.source) || rule.source === pathname || (rule.source.endsWith('/(.*)') && pathname.startsWith(rule.source.slice(0, -4)));
      if (matches) for (const header of rule.headers) response.setHeader(header.key, header.value);
    }
    let file = publicPath(pathname) ? await findFile(pathname) : null;
    const status = file ? 200 : 404;
    if (!file) file = await findFile('/404.html');
    if (!file) { response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }); response.end(request.method === 'HEAD' ? undefined : 'Not found'); return; }
    const info = await stat(file);
    response.writeHead(status, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream', 'Content-Length': info.size, 'Cache-Control': 'no-cache' });
    if (request.method === 'HEAD') response.end();
    else createReadStream(file).on('error', () => response.destroy()).pipe(response);
  } catch (error) {
    if (!response.headersSent) response.writeHead(500);
    response.end('Preview server error');
    console.error(error.message);
  }
});
server.listen(port, host, () => console.log(`Static preview: http://${host}:${server.address().port}`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
