# Motion

## Product UI (default)

Ask: **what is the purpose?** Feedback, spatial continuity, rare delight, explanation. “It looks nice” is not enough for chrome.

| Kind | Duration | Notes |
| --- | --- | --- |
| Press / micro | 100-150ms | |
| Tooltip / menu | 150-250ms | |
| Modal / drawer | 200-300ms | Ceiling for product UI |
| High-frequency or keyboard | **0ms** | No animation |

- **Ease-out** for enter/exit (custom curve; CSS defaults are weak).
- Ease-in-out only for travel while visible.
- **Interruptible:** prefer CSS transitions (retarget) over fixed keyframe timelines.
- Honor `prefers-reduced-motion`: keep content, drop travel.
- Exits ~20% faster than entrances when both exist.
- Larger / farther → slightly longer, still under 300ms in product UI.

## Marketing / onboarding

Richer earned moments allowed (signature scroll, explanatory sequence). still purposeful, still reduced-motion safe. Do not paste marketing motion into app chrome.

## Never

- Animate from `scale(0)` (see `details.md`).
- Animate layout properties (`top`, `height`, `width`) when transform/opacity suffice.
- Uniform fade-and-rise on every section.
- Decorative loops, bounce/elastic easing, shadow animation, large blur animation.

## Measured defaults
- Color, background and border changes: 150ms `cubic-bezier(.4,0,.2,1)`. Transforms: 150–200ms on the same curve. Accordions and menus use enter/exit or scale-in at about 200ms.
- Infinite loops only for live signals: a pulse at 1.5–2s for skeletons and live dots, and a spinner. Decorative loops must be slow (4s or more), linear, and off under `prefers-reduced-motion`.
- Hover never moves or scales a control. The only motion on interaction is the 0.97 press and the 2px arrow nudge.
