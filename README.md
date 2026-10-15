<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/quiet-hero-dark.png" />
    <img src="assets/quiet-hero-light.png" alt="Quiet — Make it quieter." width="880" />
  </picture>
</p>

<p align="center">
  <em>An installable agent skill for interfaces that look decided.</em>
</p>

<br />

Quiet teaches coding agents Chloe Valesquez’s taste: the interaction-detail craft of Rauno Freiberg, Paco Coursey, Emil Kowalski, Jakub Krehel, and Linear — dead simple, near-monochrome, perfect type and spacing, motion that earns its place.

It is a UI generalist. Landing pages and product UI. Chat, sidebars, settings, dashboards. Gallery-lottery skills stop at marketing sites; Quiet does not.

---

## Install

```bash
npx skills add https://github.com/ChloeVPin/quiet --skill quiet
```

Or copy `skills/quiet/` into your agent’s skills directory.

---

## Before / after

Same product. Different judgment.

<p align="center">
  <img src="assets/before-hero.png" alt="NovaBoard before — purple gradient slop" width="880" />
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-dark.png" />
    <img src="assets/hero-light.png" alt="NovaBoard after Quiet" width="880" />
  </picture>
</p>

Full pages live in [`examples/messy-landing/`](examples/messy-landing/).

---

## Principles

Quiet is not a look you layer on. It is a set of refusals.

**Near-monochrome.** One ground, one ink, one accent. Gradients are out.

**Type that holds.** A refined pairing — Inter or a Söhne-class grotesk with a serif like Newsreader when display needs warmth. Headlines about three to four times the body. Measure near 65 characters. Balance the titles; pretty the paragraphs; tabular numbers where figures align.

**Space with a reason.** A strict 4px scale. Concentric radii — outer equals inner plus padding. Optical nudges only when named in a comment.

**Motion with a purpose.** In product UI: under 300ms, ease-out, interruptible, none on high-frequency or keyboard actions. Richer moments earn their keep on marketing alone. Reduced motion is respected, not patched later.

**Detail when it applies.** Press scale to 0.97. Origin-aware popovers. Never scale from zero. Instant subsequent tooltips. Freeze exits. Morph icons instead of crossfading.

**Copy that behaves.** Buttons name the action. No eyebrow pills. No stock phrases.

**Restraint as strategy.** Every feature and every animation must earn its place — the Linear question, asked every pass.

Success looks like this: a stranger still recognizes the product; every slop tell is gone; the result could sit next to [rauno.me](https://rauno.me) without embarrassment.

---

## How the agent works

1. Inventory what is real.
2. Write a short plan — then **wait for OK**.
3. One surface per pass.
4. Before/after self-check against the Quiet rubric.
5. Report what changed, and what it refused to invent.

Hard rules live in `skills/quiet/SKILL.md`. Craft detail lives in `skills/quiet/references/`.

Optional static lint:

```bash
node skills/quiet/scripts/lint.mjs path/to/ui
```

---

## What’s inside

```
skills/quiet/
  SKILL.md
  references/     type, space, color, motion, details, layout,
                  copy, bans, redesign, product-ui, critique-rubric, sources
  scripts/lint.mjs
examples/messy-landing/
assets/           README heroes (light + dark, 2×)
```

Compatible with agents that load [Agent Skills](https://agentskills.io/specification) (`SKILL.md` frontmatter: `name` + `description`).

---

## Credits

Quiet stands on public craft writing. Primary north star: [Rauno Freiberg](https://rauno.me), [Devouring Details](https://devouringdetails.com), [Paco Coursey’s craft](https://paco.me/craft). Also Emil Kowalski, Jakub Krehel, and Linear’s Method and Quality. Full link list: [`skills/quiet/references/sources.md`](skills/quiet/references/sources.md). Not affiliated — grateful.

---

## License

MIT © Chloe Valesquez
