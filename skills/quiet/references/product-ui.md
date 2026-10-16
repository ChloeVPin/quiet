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

## Settings anatomy
- Page ground uses the raised tone; each section is a white (or card-tone) panel with 12px radius and a 1px line, with its title INSIDE the panel as a header row separated by a soft line.
- Profile-type forms: two-column field grid, label above input (13px/500), inputs 32px. Section-local actions (Save changes, Cancel) sit at the bottom-left of their panel, aligned to the field edge.
- Toggle sections: label + one-line description left, switch right; billing: plan + meta left, Manage billing right on the same row edge.
- Rail: workspace text wordmark, then 6 to 10 items at 32px rows; group labels sentence-case tertiary. Danger zone last, its title in the danger color.
- Placement: the reading column is left-aligned in the content pane with 48px padding from the rail, max 680px. Never centered in the pane; the trailing space is intended.
- Mobile settings: the rail becomes a page. Show the category list as full-width 44px rows with chevrons; tapping opens the section as its own screen with a back button in a 48px header. No horizontal tab scrollers.

## Controls
- Input and select: 32px in app (36 or 40 on marketing forms, matching the adjacent button), 6px radius, 1px ring at 12% alpha, 10px horizontal padding, placeholder in tertiary. Select uses a 16px chevron at the right.
- Switch: 32x20 track, 16px thumb, 2px inset; off at 12% ink, on in solid ink; 150ms ease-out.
- Focus: 2px focus ring offset 2px (`outline: 2px solid var(--focus); outline-offset: 2px`) on keyboard focus only (`:focus-visible`). Never remove focus without a replacement.
- Error: ring and 12px message below in the danger color, message states the fix ("Use a work email"). Success: a 12px success-color line or inline check beside the control, never a toast for a single field.
- Icons: 14px inline with 12-13px text, 16px with 14px text and in buttons, 20px in small cells, 24px max. Stroke 1.5px. One set per product.
