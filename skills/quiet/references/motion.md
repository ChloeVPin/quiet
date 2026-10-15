# Motion

## Product UI (default)

Ask: **what is the purpose?** Feedback, spatial continuity, rare delight, explanation. “It looks nice” is not enough for chrome.

| Kind | Duration | Notes |
| --- | --- | --- |
| Press / micro | 100–150ms | |
| Tooltip / menu | 150–250ms | |
| Modal / drawer | 200–300ms | Ceiling for product UI |
| High-frequency or keyboard | **0ms** | No animation |

- **Ease-out** for enter/exit (custom curve; CSS defaults are weak).
- Ease-in-out only for travel while visible.
- **Interruptible:** prefer CSS transitions (retarget) over fixed keyframe timelines.
- Honor `prefers-reduced-motion`: keep content, drop travel.
- Exits ~20% faster than entrances when both exist.
- Larger / farther → slightly longer, still under 300ms in product UI.

## Marketing / onboarding

Richer earned moments allowed (signature scroll, explanatory sequence) — still purposeful, still reduced-motion safe. Do not paste marketing motion into app chrome.

## Never

- Animate from `scale(0)` (see `details.md`).
- Animate layout properties (`top`, `height`, `width`) when transform/opacity suffice.
- Uniform fade-and-rise on every section.
- Decorative loops, bounce/elastic easing, shadow animation, large blur animation.
