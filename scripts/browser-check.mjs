#!/usr/bin/env node
// Run `npx playwright install chromium` once, then `node scripts/browser-check.mjs`.
// CHROME_PATH may select an existing Chrome binary instead of Playwright's Chromium.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const root = fileURLToPath(new URL('..', import.meta.url));
const server = spawn(process.execPath, ['scripts/serve.mjs'], {
  cwd: root, env: { ...process.env, HOST: '127.0.0.1', PORT: '0' }, stdio: ['ignore', 'pipe', 'pipe'],
});
const slugs = ['', 'about', 'pools-spas', 'hotwater', 'cool-water', 'hotwater-1', 'chill', 'fiberglass', 'hybrid', 'aboveground-examples', 'steel-pools', 'resin-examples', 'gallery', 'how-to-videos', 'contact'];
let browser;
try {
  const origin = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Preview server startup timed out')), 10000);
    let output = '';
    server.once('error', (error) => { clearTimeout(timer); reject(error); });
    server.once('exit', (code) => { clearTimeout(timer); reject(new Error(`Preview server exited (${code}): ${output}`)); });
    server.stderr.on('data', (chunk) => { output += chunk; });
    server.stdout.on('data', (chunk) => {
      output += chunk;
      const address = output.match(/Static preview: (http:\/\/127\.0\.0\.1:\d+)/)?.[1];
      if (address) { clearTimeout(timer); resolve(address); }
    });
  });
  browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) });
  const context = await browser.newContext({ reducedMotion: 'reduce' });
  // Test local behavior deterministically; third-party services need not be online.
  await context.route('**/*', (route) => route.request().url().startsWith(`${origin}/`) ? route.continue() : route.abort());
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error' && /Content Security Policy|violates|Refused to/.test(message.text())) errors.push(message.text());
  });
  const visit = async (slug) => {
    const response = await page.goto(`${origin}/${slug}`, { waitUntil: 'domcontentloaded' });
    assert.equal(response.status(), 200, `/${slug} must load`);
  };
  for (const width of [320, 768, 1440, 390]) {
    await page.setViewportSize({ width, height: 1000 });
    for (const slug of slugs) {
      await visit(slug);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator('h1').count(), 1, `/${slug}: one h1`);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `/${slug}: overflow at ${width}px`);
    }
  }
  await visit('');
  const menu = page.locator('[data-menu-toggle]');
  await menu.click();
  assert.equal(await menu.getAttribute('aria-expanded'), 'true');
  await page.keyboard.press('Escape');
  assert.equal(await menu.getAttribute('aria-expanded'), 'false');
  assert.equal(await menu.evaluate((element) => element === document.activeElement), true);
  await page.setViewportSize({ width: 1440, height: 1000 });
  // Let the responsive menu's matchMedia change handler settle before opening it.
  await page.evaluate(() => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const dropdown = page.locator('[data-dropdown-toggle]');
  await dropdown.focus();
  await page.keyboard.press('ArrowDown');
  assert.equal(await dropdown.getAttribute('aria-expanded'), 'true');
  assert.equal(await page.evaluate(() => document.activeElement.tagName), 'A');
  await page.keyboard.press('Escape');
  assert.equal(await dropdown.getAttribute('aria-expanded'), 'false');
  assert.equal(await dropdown.evaluate((element) => element === document.activeElement), true);
  const motion = await page.evaluate(() => ({
    reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
    hidden: document.querySelectorAll('.reveal-ready:not(.is-visible)').length,
    active: document.getAnimations().filter((animation) => animation.playState === 'running' && Number(animation.effect.getTiming().duration) > 1).length,
  }));
  assert.deepEqual(motion, { reduced: true, hidden: 0, active: 0 });
  await visit('how-to-videos');
  assert.equal(await page.locator('iframe').count(), 0);
  assert.equal(await page.locator('button[data-video]').count(), 7);
  await page.locator('button[data-video]').first().click();
  assert.match(await page.locator('iframe').getAttribute('src'), /^https:\/\/www\.youtube-nocookie\.com\/embed\/[\w-]{11}\?/);
  await visit('gallery');
  const links = page.locator('a[data-gallery-item]');
  assert.equal(await links.count(), 40);
  await links.first().click();
  const dialog = page.locator('#gallery-dialog');
  const image = page.locator('[data-lightbox-image]');
  assert.equal(await dialog.evaluate((element) => element.open), true);
  const firstImage = await image.getAttribute('src');
  await page.keyboard.press('ArrowLeft');
  assert.equal(await page.locator('[data-lightbox-count]').textContent(), '40 / 40');
  await page.keyboard.press('ArrowRight');
  assert.equal(await image.getAttribute('src'), firstImage);
  await page.keyboard.press('ArrowRight');
  assert.notEqual(await image.getAttribute('src'), firstImage);
  await page.keyboard.press('ArrowLeft');
  assert.equal(await image.getAttribute('src'), firstImage);
  for (let index = 0; index < 5; index++) {
    await page.keyboard.press('Tab');
    // Native dialogs may cycle through browser chrome (body), but never background links.
    assert.equal(await dialog.evaluate((element) => element.contains(document.activeElement) || document.activeElement === document.body), true, 'Lightbox must prevent focus on background controls');
  }
  await page.keyboard.press('Escape');
  assert.equal(await dialog.evaluate((element) => element.open), false);
  assert.equal(await links.first().evaluate((element) => element === document.activeElement), true);
  for (const slug of ['', 'gallery', 'contact', 'hotwater']) {
    await visit(slug);
    const scan = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    assert.deepEqual(scan.violations.map(({ id, nodes }) => ({ id, targets: nodes.map(({ target }) => target) })), [], `/${slug}: accessibility violations`);
  }
  const noJS = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  await noJS.route('**/*', (route) => route.request().url().startsWith(`${origin}/`) ? route.continue() : route.abort());
  const fallback = await noJS.newPage();
  await fallback.goto(`${origin}/`, { waitUntil: 'domcontentloaded' });
  await fallback.locator('#site-nav a[href="/about"]').click();
  assert.equal(new URL(fallback.url()).pathname, '/about', 'Navigation works without JavaScript');
  await fallback.goto(`${origin}/gallery`, { waitUntil: 'domcontentloaded' });
  await fallback.locator('a[data-gallery-item]').first().click();
  assert.match(new URL(fallback.url()).pathname, /^\/assets\/live\/.*\.webp$/, 'Gallery links work without JavaScript');
  await noJS.close();
  assert.deepEqual(errors, [], 'No JavaScript or CSP errors');
  console.log('Browser checks passed: 15 pages at four widths; keyboard menus/lightbox; deferred videos; no-JS links; reduced motion; four axe audits.');
} finally {
  try { await browser?.close(); } finally {
    if (server.exitCode === null) {
      const exited = new Promise((resolve) => server.once('exit', resolve));
      server.kill('SIGTERM');
      const timer = setTimeout(() => server.kill('SIGKILL'), 3000);
      await exited;
      clearTimeout(timer);
    }
  }
}
