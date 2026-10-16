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

## Hairline and elevation values
- Light: hairlines are the foreground at 10% (or 7.5% / 5% for quieter splits). Dark: white at 7.5% (one value everywhere: hairlines, rails, bezel ring, card ring). Prefer alpha over a fixed grey so lines sit right on any surface.
- A card may use a 1px ring (`0 0 0 1px` at 5–10%) instead of a border, plus at most `0 1px 3px rgb(0 0 0/.1)`. No larger resting shadow.
- Hover tint is the foreground at 5%. The focus ring is the ring color at 50%.

## Dark mode values
- Surfaces: the ground is about L3 (#09090b). Raise each level with a white overlay, not a new grey: 2% for the feature field, 5% for the card on it, 7.5% for hover or the selected row. Each layer is lighter than the one beneath it. Keep it to three steps at most.
- Text (canonical): primary #fafafa (white at 98%); secondary #a1a1aa (white at about 65%); faint #71717a (white at about 45%). Use faint only for non-essential text such as timestamps, ids and captions. Anything a reader needs (body, labels, prices, links) is primary or secondary so it keeps 4.5:1 contrast.
- Lines: hairlines, rails, card rings and bezel rings are all white at 7.5%. Input and control borders are white at 20%.
- Shadows mostly drop out in dark. Elevation comes from the overlay step, and only a 1px ring remains.
- Photos are not dimmed or tinted. Team and testimonial squares may go grayscale(1) at radius 0. Product shots sit in a bezel that is a 5% overlay with a 7.5% ring.
- The primary button inverts to a white fill with dark text. The secondary button is a 5% overlay with a 7.5% ring.
