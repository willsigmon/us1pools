#!/usr/bin/env node
// Build public/llms-full.txt from every exported HTML page's body content.
// Strips chrome (header, footer, nav, scripts, styles, JSON-LD).
// Pages now live in app/ (Next.js), so this reads the static export:
// run `npm run build` first, then `node scripts/build-llms-txt.mjs`.

import { readFile, writeFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "out");
const SITE = "https://www.us1pools.com";

const PAGES = [
  { file: "index.html", url: "/", title: "Home" },
  { file: "about.html", url: "/about.html", title: "About" },
  { file: "pools.html", url: "/pools.html", title: "Pools and Spas Overview" },
  { file: "above-ground.html", url: "/above-ground.html", title: "Above-Ground Pools" },
  { file: "in-ground.html", url: "/in-ground.html", title: "In-Ground Pools" },
  { file: "hot-tubs.html", url: "/hot-tubs.html", title: "Hot Tubs and Swim Spas" },
  { file: "liners.html", url: "/liners.html", title: "Vinyl Liners" },
  { file: "services.html", url: "/services.html", title: "Services" },
  { file: "gallery.html", url: "/gallery.html", title: "Gallery" },
  { file: "videos.html", url: "/videos.html", title: "How-To Videos" },
  { file: "calculator.html", url: "/calculator.html", title: "Pool Cost Calculator" },
  { file: "contact.html", url: "/contact.html", title: "Contact" },
  { file: "faq.html", url: "/faq.html", title: "Frequently Asked Questions" },
  { file: "guides/pool-care.html", url: "/guides/pool-care.html", title: "Pool Care Guide" },
];

async function findAreaPages() {
  const dir = join(SRC, "areas");
  const files = await readdir(dir).catch(() => []);
  return files
    .filter((f) => f.endsWith(".html"))
    .map((f) => ({
      file: `areas/${f}`,
      url: `/areas/${f}`,
      title: `Service Area: ${f.replace(".html", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`,
    }));
}

function htmlToText(html) {
  let text = html
    .replace(/<\/(p|h[1-6]|li|ul|ol|section|article|blockquote|figcaption)>/gi, "$&\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, "")
    .replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, "")
    .replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, "")
    .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'")
    .replace(/&#x2F;/gi, "/")
    .replace(/&middot;/g, "·")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/^[ \t]+|[ \t]+$/gm, "")
    .trim();
  return text;
}

async function main() {
  const areaPages = await findAreaPages();
  const allPages = [...PAGES, ...areaPages];

  const sections = [
    "# US-1 Pools — Full Site Content",
    "",
    "> Plain-text corpus of every public page on us1pools.com. Generated for AI crawlers and language models. Last build: " + new Date().toISOString().slice(0, 10),
    "",
  ];

  for (const page of allPages) {
    try {
      const html = await readFile(join(SRC, page.file), "utf8");
      const bodyMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
      const source = bodyMatch ? bodyMatch[1] : html;
      const text = htmlToText(source);
      if (!text) continue;
      sections.push(`## ${page.title}`);
      sections.push(`Source: ${SITE}${page.url}`);
      sections.push("");
      sections.push(text);
      sections.push("");
      sections.push("---");
      sections.push("");
    } catch (err) {
      console.warn(`Skipped ${page.file}: ${err.message}`);
    }
  }

  await writeFile(join(ROOT, "public", "llms-full.txt"), sections.join("\n"));
  console.log(`Wrote llms-full.txt (${allPages.length} pages)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
