# Color

## Default

**Near-monochrome on semantic tokens.**

- One ground: near-white or near-black (not cream, not paper beige)
- One ink (full strength for running text; soft grey body text reads unfinished)
- **Accent for meaning only** (status, tags, a small brand mark). Primary CTAs use neutral fill (dark on light, light on dark), not a colorful button
- Surfaces separated by a **small tone step**, not a line or a resting shadow

Map to semantic roles, not raw hex in components:

`bg` · `bg-subtle` · `fg` · `fg-muted` · `border` · `focus` · `accent` · `danger` · `success`

## Forbidden

- Gradients (backgrounds, buttons, text fills). Neutral scrim under text on a photo is the rare exception on marketing imagery.
- Violet / indigo “assistant” palettes and purple glow CTAs.
- Terracotta, earthy, or multi-hue accent stacks used to sell “warmth” on product or SaaS pages.
- Colored avatar dots or rainbow chips as decoration (status color on data is fine).
- Rainbow status decoration for its own sake.
- Raw hex scattered across TSX/CSS; move palette data into theme tokens.

## Modes

Design light and dark intentionally. Do not invert blindly. Recheck contrast in both. Light mode stays neutral near-white, not warm paper. Dark mode stays near-black, not tinted navy costume.

OKLCH ramps are welcome for even steps when building a system. Wide-gamut P3 is optional enrichment on capable displays, never a substitute for restraint.
