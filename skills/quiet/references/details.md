# Interaction details

Skip any item that does not apply to the surface. When it applies, do it.

## Emil checklist

- **Press:** scale interactive controls to ~**0.97** on `:active`.
- **Origin-aware popovers:** set `transform-origin` to the trigger (Radix / Base UI expose CSS vars). Center origin is usually wrong.
- **Never `scale(0)`:** enter from ~**0.9–0.95** with opacity.
- **Subsequent tooltips:** once one is open, skip delay/animation on the next (`data-instant` or equivalent).
- Hit targets: prefer **≥44px** via padding or pseudo-element without growing visuals.

## Continuity

- **Interruptible transitions** — users change mid-gesture.
- **Freeze exiting content** so DOM updates do not rewrite an element mid-exit.
- **Morph icons** (shared geometry / path interpolation) instead of crossfades when swapping related glyphs.
- Spatial consistency: enter from / return to where the thing conceptually lives.

## Feel

- Hover the child, not a jittery parent; `will-change: transform` only when needed.
- Filterable menus when lists are long.
- Native affordances over reinvented ones when the platform already solves it.
