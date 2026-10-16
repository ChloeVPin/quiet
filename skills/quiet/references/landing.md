# Landing pages: measured defaults

Use these numbers unless the product has a reason to differ. They describe a calm, product-first marketing page in light or dark.

## Grid and space
- Rails: 1px vertical lines at the edges of a 1104px centered box (so at 1440px they sit at x=168 and x=1272). Content width is 1008px (1104 minus 48px gutters each side). The product shot is 1024px wide, centered, breaking 8px past the content edge toward the rails; it never touches or crosses them. Mobile: rails at the viewport edge, 20px gutter, product shot full width minus 12px each side.
- Structural rails: 1px lines on the container edges for the full page height, and a full-bleed 1px rule between major sections. Cells inside a section split with the same 1px line. On the marketing layer nothing else draws a line: no decorative rules, ticks, or lines that align to nothing. Inside app UI, tables, panels and form groups, functional separators are allowed at the soft line alpha (6%), rows and headers only.
- Section padding 96px top and bottom. Hero 96 to 120px top, 64 to 72px bottom. Cells 40px by 48px.
- Nav 64px tall, three columns: brand left, links centered (14px, gap 32px, secondary color), actions right. A 1px rule under it.

## Type
- One grotesk. Weights 400, 500, 600.
- H1 60/60, 600, tracking -0.025em, max two lines, balanced. Mobile 40/44.
- H2 40/44 (36 to 48 range), 600, tracking -0.025em.
- Cell title 16/24 or 20/28, 500 to 600.
- Lead 18/28 secondary color, about 520px wide. Body 16/24. Small 14/20. Meta 12/16.
- Two-tone headline: the second clause in the tertiary color. Statement copy in cells: first sentence primary at 500, the rest secondary.
- Tabular numerals for prices, dates, ids, and metrics.

## Color
- Light: background #ffffff, raised #fafafa, text #09090b / #52525c / #9f9fa9, lines rgb(9 9 11 / 0.10), soft lines 0.06.
- Dark: background #09090b, raised #0e0e11, card #111113, text #fafafa / #a1a1aa / #71717b, lines rgb(255 255 255 / 0.10).
- Accent only as status data (green done, amber in progress, blue info), shown as a 6px dot plus text.

## Controls
- Buttons 36px tall (32px in the nav), 14px/500 (13px in the nav), radius 8px (6px small), padding 14px.
- Primary: filled with the text color, 1px ring of the same color, 1px shadow. Secondary: page or 6% tint fill, 1px ring at 12% alpha.
- Inputs match the height of the button beside them. Primary form actions such as a waitlist may go to 40px for both.
- A row of buttons shares one height. Full-width buttons in pricing cards.

## Product shot
- Bezel: 4px padding, raised background, 1px line, outer radius 14px, inner radius 10px, shadow 0 1px 2px and 0 10px 15px -3px at 5 to 6 percent (dark: 0 20px 40px -12px at 60 percent).
- Starts above the fold, about 400 to 480px from the top at 1440 by 900.
- The UI inside is dense and real: 13px text, 40px rows, ids, owners, tabular dates, status dots.

## Section order
For a landing brief these sections count as requested (not "unrequested features"): nav, hero, product shot, wordmarks, section header, two feature cells, three small cells, pricing (when the brief mentions price), final CTA, footer. Testimonial and FAQ are optional; add them only if the brief has real content for them. Default order:
Nav, hero, product shot, customer wordmarks (one row of six), section header (H2 left, lead right, aligned to the bottom), two feature cells with a small live UI fragment each, three small cells (icon, title, two lines), one testimonial with real photo and three metrics, final CTA repeating the hero buttons, four-column footer, legal row.

## Pricing
Monthly and yearly segmented control centered over a three-column cell grid. Price 36/40 600 with a 14px unit. Recommended plan uses a raised background and the only filled button; the word Recommended sits beside the plan name in tertiary text. Button labels say what is bought: Start 14-day Team trial, Buy Business. Then a comparison table and a two-column FAQ.

## Hero composition (do not improvise)
- Center the hero: H1, lead, buttons (or waitlist form) all centered on the container axis. Left-aligned heroes are a fail for product, pricing and waitlist pages.
- Headline budget: two short sentences, each 2 to 6 words and at most ~24 characters, so each sentence fits on ONE line at 60px inside ~760px. If a sentence wraps, rewrite it shorter; never shrink the type. Line 1 is the promise in the text color, line 2 the payoff in the tertiary color.
- Vertical budget at 1440x900: H1 top ~180px, lead 16px below (2 to 3 lines, max 540px wide, centered), buttons 32px below the lead, product bezel top at 540 to 600px so a strong slice of the product shows in the fold.
- Waitlist nav: brand wordmark left, one quiet status string right in tertiary text (for example "Private beta · Cohort 3"). No center links, no Sign in, no second CTA; the form is the only action on the page.

## Product fragment recipe (the hero screenshot)
A flat table is not enough. A practitioner must recognize the tool within one second. Include at least five of:
- Sidebar with workspace name (text), search and compose icons, a primary group (Inbox, My items) with counts, then a labeled group of nested items with small icons.
- A header row with a breadcrumb ("Platform / Cycle 42"), a date range, and Filter / Display buttons.
- Rows GROUPED under status headers ("In progress 4", "Todo 6") with a status icon per row, not one undifferentiated list.
- Per row: muted id, title in text color, a label chip (6px colored dot + word), a 20px initials avatar, a tabular date, right-aligned.
- For document or notes apps: three panes (list, document, side panel of comments or backlinks), with one inline highlight using a translucent amber background on a real phrase.
- Realistic, specific strings (merchants, ids, people, sums). Never lorem, never grey bars.
On mobile, hide the sidebar and secondary columns; the header row must never overflow or clip a button (drop chips first).

## Feature cells recipe
- Each cell opens with a small meta line: 16px icon + one word label in the secondary color (for example "Cycles"). This is a label, not an eyebrow over a section H2.
- Then statement copy at 16/24: the first sentence in the text color at weight 500, the rest in the secondary color, same paragraph. No separate cell title plus body.
- Then a live fragment in a nested bezel: a progress list with bars and percentages, a list of items with ids and state dots, a mini chart. Key/value rows ("Category: Meals") read as a form, not a feature; avoid them.
- Section H2s: max two lines, about 480px wide, left; lead aligned to the bottom on the right.

## Customer wordmark row
Six names in the secondary color, each set as a distinct wordmark (vary case, weight 500 to 700, tracking, one italic, one uppercase spaced) so they read as logos, not as a list of words. Height 112px, centered in equal cells.

## Pricing card anatomy
Name (500), one-line audience description (secondary, 14px), price 36/40 with unit inline ("per seat / month"), then a tertiary 12px meta line under the price ("Up to 5 seats" or "$384 per seat billed yearly"), then the full-width button, then a heading line "Everything in Team, plus" (or "Includes") above checkmarked features. Under the monthly/yearly control, a 12px tertiary note ("Two months free on yearly billing"). One-tone H1 is fine on a pricing page.

## Final polish rules (from blind-test round 2)
- Lead budget: one or two sentences, 90 to 150 characters, so it sets in two or three lines with no one-word or two-word last line. Use `text-wrap: balance` on centered leads (pretty is for left-aligned paragraphs).
- Rows in any product fragment are single line: `white-space: nowrap; overflow: hidden; text-overflow: ellipsis` on the title cell, at every breakpoint. A wrapping row title is a fail.
- Each row starts with a 14px status glyph (open circle, half circle for in progress, check circle for done) colored by status, before the id.
- On mobile, a waitlist input and button stack full width and both keep 40px height (set `flex: none` on the input when the row becomes a column).

## Feature cells vs small cells
- Feature cells: two per row, 40x48px padding, meta line + statement + a live UI fragment. Use for the two capabilities that define the product.
- Small cells: three per row, same padding, 20px icon, then statement copy only (bold first sentence + secondary rest), no fragment. Use for supporting capabilities. Never mix the two patterns in one row.

## Label chips
Chips are gray (secondary text, 1px line, no fill) for categories, teams, and tags. Add a 6px colored dot only when the chip encodes status or state. Never color by category.

## Status glyph
14px, 1.5px stroke. Backlog: dashed circle, tertiary. Todo: open circle, tertiary. In progress: circle with right half filled, amber. In review: circle with three-quarters filled, blue. Done: filled green circle with a white check. Canceled: filled gray circle with a white x.

## Mobile
- H1 40/44 (H2 32/36). Each headline sentence may wrap to at most two lines; four lines total max. Over that, shorten the copy.
- The fold at 390x844 shows the H1, lead, buttons, and the top edge (at least 80px) of the product shot. If it does not, cut the lead to two lines and reduce hero top padding to 64px.
