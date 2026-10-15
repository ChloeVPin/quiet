# North star notes (from live screenshots, Oct 15 2026)

Captured at 1280×900 @2x: rauno.me, rauno.me/craft, devouringdetails.com, paco.me, paco.me/craft, emilkowal.ski.
PNGs + computed style JSON in `docs/north-star/`.

## Shared DNA

### Type
- **Single grotesk**, almost always. Paco: Söhne + Inter. Emil: custom Sans ~14px body. Rauno craft / DD: system-ish grotesk. **No big Newsreader hero.**
- Body **13–16px**. Emil paragraphs measure ~14px / 23px line-height. Pacohome prose ~16/28. Section titles are often **the same size as body**, distinguished by weight (500/600), not scale.
- Hierarchy = weight + color, not 3–4× display. Huge type appears only as *composition* (Rauno home carousel card), never as SaaS marketing template.
- Left aligned. Narrow measure. No centered heroes.

### Color
- White / near-white grounds: `#fff`, `#fdfdfc`, `#fcfcfc`, Rauno home `#ededed`.
- Ink near black. Secondary text **low-contrast gray** (~`#3a3a3a` / `#666` / muted).
- One accent at most, used as a *detail* (Rauno yellow circle, DD orange ruler/dot), not a CTA gradient.

### Layout
- **Narrow single column**, left aligned, huge empty side margins (Emil mainWidth ~644px on 1280).
- Vertical lists: name + gray one-liner. Occasional 2–3 column *link grids* (Paco home, Paco craft) with no cards.
- **Little/no cards.** No stat cards. No hairline “feature row” tables. No eyebrow pills.
- Craft pages (Rauno craft, Paco craft): the **page is demos / real UI fragments**, not marketing copy.

### What makes them distinctive
1. Interactive craft as the product (components, cursors, demos), not slogans.
2. Tiny precise details (custom cursor +, keyboard hints, optical alignment).
3. Restraint that reads as confidence: empty space, small type, almost nothing “designed.”
4. Personal voice in short sentences. No stock SaaS rhythm.

## Anti-patterns (what our v1 Quiet wrongly shipped)
- Big serif on beige “editorial” hero
- Corner labels (`UI skill · v1`)
- Em dashes and tagline pairs under a hairline divider
- Stat cards (“Active boards · 128”)
- Serif section heads + hairline two-column row tables
- Generic SaaS two-button hero stack

## Quiet redesign implications
- README hero = small name + a **real crisp UI vignette** (board/list fragment), not a poster.
- after.html = Emil/Paco document: narrow column, ~14px grotesk, product fragment as the visual, link lists, no cards/tables/serif heads.
- Default type rule: **one grotesk, small**. Serif only if the surface truly needs it (rare).
- Ban the anti-patterns above explicitly.
