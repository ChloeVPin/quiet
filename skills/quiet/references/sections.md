# Section recipes

Numbers for the marketing and company sections not covered in `landing.md`. Every section sits in the page container (1024–1104px) on the same rails. Each one has a single heading: H2 36/40 at 600 with -0.9px tracking, or 30/36 when it is secondary.

## Comparison table
- Plan columns are centered. The recommended column uses the same surface as the recommended pricing card above it: a raised card (card background, 1px ring, at most `0 1px 3px` shadow) running the full table height, including group rows. Group labels sit in the first column only and never spill over the raised column. Do not color the header.
- Rows are 40px. Groups have a 15/500 title and one muted line of description, with no extra lines.
- Values mix 16px muted check icons with plain text ("2 GB", "Unlimited", "3 days"). A missing feature is always a muted dash icon (`bx-minus` in the tertiary color), never an empty cell, a typed dash, or a red cross.
- The plan header (name, price, one 32px button) sticks while scrolling.

## How it works
- At most three steps. The number goes inline in the title ("1. Connect your repo"); there are no circled numbers or 01/02 labels.
- Each step is a 15/500 title, one or two 14px muted lines with the key words in foreground, and a small real UI fragment (a form, a receipt, a status card). Not an icon tile.

## Description list
- A heading column at 1/3 width next to a 2x2 grid of items. Each item has a 16px icon, a 15/500 title and two muted lines.

## Expandable features
- An accordion on the left (rows 40–56px, 14/500 titles, 16px chevrons; one open at a time) drives a single product visual on the right that changes with the open item.

## Team
- Real square photos, cover-cropped, in 4 columns on desktop (~234px each in the 1008px content width with 24px gaps) and 2 at 390. Pick a column count that divides the team (4 for 4/8/12, 3 for 3/6/9). If none divides, center the last row; never leave a hole at the end of a grid. One treatment for the whole grid: all grayscale or all color, never mixed. Grayscale suits people; never filter product photos. Name 15/500, role 14 muted. No social icon rows and no bios on the grid.
- Size the grid with `minmax(0,1fr)` so it never scrolls sideways on mobile.

## Investors and backers
- One row of monochrome wordmarks, then individual backers in 3 columns: a 40px round photo, name 14/500, and role and company in 14 muted.

## Open roles
- Group by department under a 14/500 sentence-case heading. Rows are about 48px: title, then location and type in muted text, then an arrow on the right. The whole row is a link and rows are separated by hairlines.
- Every row is a link. When a role has no detail page, link the row to an apply mailto (`mailto:jobs@…?subject=<role>`) or to an anchor on the careers page. Never leave a dead row.

## Bento
- Max width 1024, cards at radius 18 with radius 8 or smaller inside. A 15/600 title with one muted line. Every card holds a product fragment. Never a stat or an emoji.

## Feature art
- When a feature cell needs a picture, use a miniature of the real product (a date picker, invoice, activity feed or model picker) at 10–13px type on a white card over a light grey field. Do not use drawings, 3D or abstract shapes.

## Visual identity from the same skeleton
- One layout can carry different brands through three dials only: control radius (8, 12, or pill), button height (32/36/44), and heading weight (500–700) and tracking. Change those before you reach for color.

## Rhythm and collapse
- Section padding is 96 top and bottom by default, 128 for the hero and final CTA, and 64 below 1024px. Footer: 128 above, 80 below.
- Below 1024px every grid goes to one column, except logo, avatar and photo grids, which go to 2. Type sizes: see Mobile type below.
- Avatars: 20–22px inline, 28px in rows, 40px in people lists. Logo tiles are 38px at radius 10.
- Cell dividers: draw them with a 1px grid gap over a hairline-colored background, not with per-cell borders.

## Mobile type and hero padding (single source of truth)
- Below 1024px: H1 40/44, section H2 30/36, card or step titles unchanged. Docs keep their own smaller scale.
- Hero top padding is 96px on desktop and 64px on mobile for every page type. Bottom padding is 64px desktop and 48px mobile.
