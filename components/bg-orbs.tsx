/**
 * Decorative caustic-light background orbs. The original static pages
 * varied which orbs they rendered (most: 1+2; pools/in-ground/liners/
 * services: 1+3; home: 1+2+3), so each page renders its own set instead
 * of the layout hardcoding one combination. The divs are absolutely
 * positioned, so their DOM position relative to the header is irrelevant.
 */
export function BgOrbs({ orbs = [1, 2] }: { orbs?: number[] }) {
  return (
    <>
      {orbs.map((n) => (
        <div key={n} className={`bg-orb orb-${n}`} aria-hidden="true"></div>
      ))}
    </>
  );
}
