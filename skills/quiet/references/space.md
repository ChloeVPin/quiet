# Space

## Scale

Use a **strict 4px** spacing scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64…).

No arbitrary values (`13px`, `22px`) unless you document an optical nudge.

## Concentric radii

Nested rounded surfaces must nest optically:

```
outerRadius = innerRadius + padding
```

Mismatch is a Quiet fail. Fix it even when “nobody will notice.”

Applies when a rounded surface sits inside another with padding of 16px or less (bezel 14 = 10 + 4, a 4px-padded segmented control 8 = 6 + 2). With more padding, the inner element uses its own token.

Token set: 6px controls in app and small buttons, 8px buttons, 10px inner frames, 12px panels and cards, 14px product bezel and pricing grid. Pick a small radius token set (e.g. control / surface / popup) and stick to it. Circles and intentionally square edges are fine when purposeful.

## Optical nudges

Allowed when the eye demands it (icon centering, cap-height alignment, stroke compensation). Rules:

1. Keep the token as the default.
2. Override locally.
3. Leave a one-line comment: `/* optical: … */`.

## Rhythm

- Section gaps clearly larger than internal gaps on document layouts.
- App rows: consistent height within a region; align columns to shared edges.
- Prefer fewer left edges over decorative dividers.
