import { existsSync, readFileSync } from 'node:fs';
import { escape } from './data.mjs';

const dir = new URL('../assets/logos/', import.meta.url);
const size = (path) => {
  if (path.pathname.endsWith('.svg')) {
    const box = readFileSync(path, 'utf8').match(/viewBox="[\d.\s-]*?([\d.]+)[\s,]+([\d.]+)"/);
    return box ? [Number(box[1]), Number(box[2])] : [160, 48];
  }
  const buf = readFileSync(path);
  if (buf.toString('ascii', 1, 4) === 'PNG') return [buf.readUInt32BE(16), buf.readUInt32BE(20)];
  return [160, 48];
};
// Official brand logo if downloaded (see assets/logos/SOURCES.md), otherwise nothing: text always stays.
export function logo(slug, name) {
  const ext = ['svg', 'png', 'webp'].find((e) => existsSync(new URL(`${slug}.${e}`, dir)));
  if (!ext) return '';
  const [w, h] = size(new URL(`${slug}.${ext}`, dir));
  return `<img class="brand-logo" src="/assets/logos/${slug}.${ext}" alt="${escape(name)}" width="${Math.round(w)}" height="${Math.round(h)}" loading="lazy" decoding="async">`;
}
