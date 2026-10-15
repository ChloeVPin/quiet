# Type

## Pairing

Default refined pairing:

- **Grotesk / sans:** Inter, or a Söhne-class grotesk (Geist, similar optical size). UI and body.
- **Serif (optional warmth):** Newsreader or equivalent for display moments, pull quotes, marketing heroes — not for dense app chrome.

One family is fine for product UI. Two is the ceiling. Never three.

Keep the project’s fonts when they already exist unless asked to replace them. Still enforce the rules below.

## Scale

- Headline ≈ **3–4×** body on marketing and calm document layouts.
- Product chrome stays quieter: clear hierarchy, not gallery display.
- Cap a page at about five visible sizes.
- Body **16–20px**. Measure **~65ch** for running text.
- Display tracking roughly **-0.02 to -0.05em**; leading **0.85–1.05** on large headlines.
- Body leading **1.45–1.6**.

## Details (always)

- `text-wrap: balance` on titles; `text-wrap: pretty` on paragraphs (no orphans).
- `-webkit-font-smoothing: antialiased` (Tailwind: `antialiased`) on the root layout.
- `font-variant-numeric: tabular-nums` on counts, timers, prices, diffs, usage.
- Right-align numeric columns; keep precision consistent for comparison.
- Use the real ellipsis character `…`, not three periods.
- Reserve underline for links. Bold for UI emphasis; italic for citations / linguistic stress.
- Do not fake weight with `text-shadow`. If a weight change would shift layout, reserve space (e.g. pseudo-element with the bold face).
- Fallbacks must match x-height and weight enough to avoid layout shift.

## Alignment

Left-aligned by default. Center at most one deliberate moment on a marketing page. Never center dense product UI.
