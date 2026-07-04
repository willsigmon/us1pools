/** Renders a JSON-LD structured-data block exactly as the legacy site did. */
export function JsonLd({ data }: { data: string }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: data }} />
  );
}
