# App, form, docs and auth specs

Numbers to follow literally when building product surfaces. They pair with `product-ui.md` (what to build) and `landing.md` (marketing pages).

## Icons
- Use Boxicons. Default size 16px inside 32–36px controls, 14px in dense rows and badges, 12px for inline metadata, 20px only for standalone icon buttons or empty-state tiles.
- Icons sit in the muted text color and turn foreground on hover with their row. They are never colored for decoration.
- An arrow in a link or CTA nudges 2px right on hover (`translateX(2px)`, 150ms). Nothing else moves.

## States
- Hover: text goes from muted to foreground; rows and ghost buttons get a 5% foreground tint. No shadows appear on hover.
- Active nav row: a 2.5–5% foreground tint plus foreground text. No accent bar or colored pill.
- Open menus and popovers keep their trigger tinted, the same as hover.
- Focus-visible: a 2px outline at a 2px offset, or a 3px ring at 50% of the ring token. Never remove focus without replacing it.
- Disabled: 50% opacity and no pointer events. Do not use grey text on a grey fill.
- Press: scale 0.97 over 100ms.

## Controls
- Button heights: 32px (12–13px/500, 12px padding) in app chrome; 36px (14px/500, 16px padding) in forms and page actions; 40px for hero CTAs; 52px for the primary button on a mobile screen. Radius 6–8px.
- Inputs are 36px tall with a radius of 8px, 14px text and 12px left padding, plus a 1px hairline border and a very faint shadow. A textarea is 64px tall, or 128px for long text.
- Labels are 14px/500 and sit 8–10px above the field. Help and error text is 13px in the muted or danger color, 6px below the field.
- A segmented control (7d / 30d / 90d) is 32px tall. The active segment is a raised surface, not a colored fill.
- Keyboard hints use `kbd`: 20px tall, 11–12px text, hairline border.

## App shell
- Sidebar: 240px wide (220–256px). Rows are 32px with 8px padding, a 16px icon, 14px text and an 8px gap. Group labels are 12px/500 in the muted color with 16px above them; they are not uppercase. The workspace name at the top is plain text with a chevron, with no logo tile. The user block (avatar, name, plan) is pinned to the bottom.
- Top bar: 48px tall. A breadcrumb on the left, 32px icon buttons on the right. The sidebar and the top bar each have a single hairline edge.
- Panels: 12px radius, hairline border, a 44px header with a 14px/500 title and the actions on the right.
- Tables: a 36px header row in 12–13px muted text, body rows of 37–40px in 13–14px text, soft row lines, and numbers right-aligned in tabular figures. Show at least 6 realistic rows, so the table never looks staged.
- KPI cells: a 13px label, a 24–28px value in tabular figures, and the change as +/- text in the up/down color. No icon circles.
- Charts: a labeled y axis with round ticks, a dashed line for the previous period, and one tooltip whose value matches the plotted data.
- Fill the viewport. If the content runs short, add a real secondary panel (recent events, tips, activity) rather than leaving a blank lower half.

## Chat
- Thread column 720–768px. User messages are right-aligned bubbles in the tinted surface; assistant answers have no bubble. Action icons (copy, regenerate, like) are 14px muted and appear below the answer.
- Composer: a 16px-radius box with a hairline border. Attach and mention buttons on the left, a 32px round send button on the right. No divider above it. A one-line disclaimer in 12px muted text sits below it.
- The sidebar groups chats by Today / Previous 7 days / month, and has New chat with its shortcut.

## Auth
- Split layout. The form column is 320px wide and vertically centered. H1 20/28 at 600, subtitle 14/20 muted. Social buttons are 36px and full width, followed by an "or" rule, the fields, then a full-width primary button.
- Under the button: the switch link ("New here? Create a workspace"). At the bottom of the column: Privacy, Terms, Status in 13px muted text.
- The other half is a 16px-radius panel holding a real customer quote with a photo, plus the real product in a bezel. Not an illustration.

## Docs and articles
- Docs: a 56px top nav with ⌘K search, a 248px left nav, a 672–720px article and a 220–240px "On this page" list, about 96px apart.
- Article type: breadcrumb 14px; H1 36/40 or 40/44 at 600–700; lead 20/30 to 24/32; body 16/26 in the secondary text color; H2 24/32 at 600 with 48px above; list items spaced 26px.
- Images and screenshots are 16:9 or the real product in a bezel. The meta row (date, version, author with a 22px avatar) sits above or below the H1, never as a pill.
- End with previous/next cards or three related entries, not a giant CTA.

## Empty states and 404
- 404: a plain "Error 404" line, an H1 that says what happened, one sentence, a search box, two buttons (home, support), then three link cells to real destinations.
- An empty app view keeps the full shell (sidebar, tabs with counts). The center holds a 40px icon tile, a 14px/500 title, one or two lines of muted text, and two 32px buttons, with a small tips panel below.

## Footer and page end
- Marketing footer: 128px top padding, 80px bottom. Links 14/20 at 400 in muted text; column headings 14px/500.
- The final legal row includes a status line: a 6px green dot with "All systems normal".
- On short pages, the rails continue down to the viewport bottom (the body is a flex column with a filler block) so the page never ends in empty space.

## Mobile
- Design at 390pt. 16–20px side padding, 44px minimum touch targets, a fixed tab bar 84px tall including the safe area, and a 52px primary button.
- A paywall lists its plans as rows with the price per period, the saving as plain text, the trial length, and the renewal terms under the button.

## Additions
- Forgot password: H1 20/28 at 600, one 36px email field, one full-width 36px button, then "Back to sign in". Nothing else.
- Docs chrome is smaller than marketing: H1 24/32 at 500 with slight negative tracking, H2 15–18 at 500–600, body 15/24, sidebar rows 24px, article measure 624–672px. Code blocks have a filename bar and a copy button; inline code is a 4px-radius tint. The sticky "On this page" list shows the active item in foreground and the rest muted.
- Header menus: 32px triggers at radius 8, 12px chevrons with stroke 2.5, menu rows 32px, and items with a 16px icon, a 14/500 title and one muted line.
- A 404 can offer two thumbnail cards to the main sections, each with a count, in addition to the home button.
- One-time pricing says "One-time payment" under the figure. Subscription pricing says "per month, billed yearly" or similar. Never leave the period unstated.
