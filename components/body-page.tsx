/**
 * Sets <body data-page="…"> before the deferred site scripts run.
 * The legacy stylesheet and script.js both key off this attribute
 * (active-nav highlighting, per-page CSS overrides). An inline script
 * executes during HTML parse, so the attribute is present before first
 * paint — identical behavior to the original static markup.
 */
export function BodyPage({ page }: { page: string }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `document.body.dataset.page=${JSON.stringify(page)};`,
      }}
    />
  );
}
