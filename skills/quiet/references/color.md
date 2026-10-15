# Color

## Default

**Near-monochrome on semantic tokens.**

- One ground
- One ink (full strength for running text — soft grey body text reads unfinished)
- **One accent maximum** (primary action, maybe one signal)
- Surfaces separated by a **small tone step**, not a line or a resting shadow

Map to semantic roles, not raw hex in components:

`bg` · `bg-subtle` · `fg` · `fg-muted` · `border` · `focus` · `accent` · `danger` · `success`

## Forbidden

- Gradients (backgrounds, buttons, text fills). Neutral scrim under text on a photo is the rare exception on marketing imagery.
- Violet / indigo “assistant” palettes and purple glow CTAs.
- Rainbow status decoration.
- Raw hex scattered across TSX/CSS — move palette data into theme tokens.

## Modes

Design light and dark intentionally. Do not invert blindly. Recheck contrast in both.

OKLCH ramps are welcome for even steps when building a system. Wide-gamut P3 is optional enrichment on capable displays — never a substitute for restraint.
