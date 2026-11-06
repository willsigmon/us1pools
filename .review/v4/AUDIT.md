# V4 audit and design contract

Baseline: redesign/nov4 at f875cc1. Builder: GPT-6.1 Sol (high).

## North star
A capable, family-run Triangle pool business, presented with the clarity of an architectural project journal and the blue of its actual water.

## Discover / unslop audit before edits
- Hero: the animated water cut-out competes with the real pool and obscures its foreground. Quiet it, retaining the water signature.
- Hero: license has excessive separation from the action; tighten the grouping.
- Mobile: image interrupts the proposition and action. Group text/actions before a taller pool photograph.
- Team: quote and portrait make an outsized dark block. Reduce quote scale and rebalance the photograph without deleting people or text.
- Models: preserve the useful catalog, but improve heading/column spacing.
- Services and photos: swipe affordance needs real, keyboard-operable arrows, not decorative glyphs.
- Reasons: repeated short blocks can use a stronger ruled editorial rhythm while retaining every joke.

## References / Define
- Supahero free library (https://supahero.io): photograph-led hero hierarchy; translate scale, not a template.
- LPAS (https://lpas.com), from SigDesign inspo shelf: real projects carry the richness, restrained chrome carries navigation.
- Savage/Wilkins baseline and existing nov4 water direction remain authoritative. No new theme scaffold.

## Scope
Homepage via scripts/home.mjs, styles.css and script.js; generated index.html; local QA artifacts. No pricing, copy, section-order, people, forms, reviews, years, image generation, main, production, DNS or domain edits.

## Tokens
```json
{"typography":{"display":"Newsreader","body":"Manrope","scale":"existing fluid h1/h2/h3 and 16px body"},"color":{"model":"OKLCH","tokens":{"bg":"oklch(99.4% .003 230)","surface":"oklch(96.6% .014 218)","ink":"oklch(23% .055 258)","accent":"oklch(46% .145 254)","signal":"oklch(85% .115 196)"}},"spacing":"existing 8pt tokens","radius":"flat","motion":"existing opt-in 680ms reveal; reduced-motion static","texture":"real water photography"}
```

## Validation plan
Build/check; content and section-order comparison against baseline; responsive overflow, arrows, menu, reduced motion, axe; Hallmark and ai-design-check; desktop 1280/mobile 390 captures; fresh screenshot-only Terra critic. No paid tools.
