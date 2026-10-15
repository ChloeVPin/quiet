# Product UI

Quiet is a **UI generalist**. Product surfaces are first-class. this is the gap versus marketing-only skills.

## Surfaces in scope

Chat / composers, sidebars and project trees, settings, dashboards, tables, diff/review, command palettes, dialogs, onboarding inside the app.

## Priorities

1. **Clarity and speed** over spectacle.
2. **Density with rhythm**. consistent rows, aligned columns, calm empty states. Do not leave the bottom half or trailing column oddly empty; add another real table, activity, or size the fold to the content.
3. **Shared primitives** in a `ui/` (or equivalent) layer.
4. **Motion discipline** from `motion.md` (almost always the product table, not the marketing table).
5. **State coverage**. empty, loading, error, overflow, long strings, reduced motion.

## Patterns

- Sidebars: text wordmark only (no logo tile). Readable hierarchy, restrained active states, no glass stack.
- Chat: message rhythm, composer clarity, no decorative gradients, no extra divider above a bordered composer. Send uses a real icon set ([Boxicons](https://github.com/box-icons/boxicons)), not a text “Send” where an icon is the convention. Prefer Boxicons over Lucide.
- Settings: left category rail + **one constrained reading column** (~640–720px) for fields. Do not stretch a lonely form across the full content pane. Align actions (e.g. Manage billing) to that same column grid, not floating mid-row.
- Dashboards: real data typography first; charts get contrast strokes / no dead legend hits. avoid fake dashboards. Fill the fold with another breakdown or events table when KPIs + one chart leave a void.
- Pricing (marketing): prefer calm **plan cards in columns** over a single list that reads like a to-do. One recommended plan, full-width CTAs inside each card, paid-sounding labels.

## Cite restraint

When tempted to add a control or animation, ask: does this earn its place, or does it only survive because building is cheap?
