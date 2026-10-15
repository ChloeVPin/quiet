<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/quiet-hero-dark.png" />
    <img src="assets/quiet-hero-light.png" alt="Quiet" width="880" />
  </picture>
</p>

Quiet is an agent skill for UI that feels like Rauno, Paco, and Emil: small grotesk type, narrow layouts, real components, almost no costume.

Landing pages and product UI. Chat, sidebars, settings, dashboards.

## Install

```bash
npx skills add https://github.com/ChloeVPin/quiet --skill quiet
```

Or copy `skills/quiet/` into your agent skills directory.

## Before / after

Same NovaBoard. Different judgment.

<p align="center">
  <img src="assets/before-hero.png" alt="Before" width="880" />
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hero-dark.png" />
    <img src="assets/hero-light.png" alt="After Quiet" width="880" />
  </picture>
</p>

Full pages in [`examples/messy-landing/`](examples/messy-landing/).

## Rules that matter

One grotesk, about 14px. Near-monochrome. Strict 4px spacing and concentric radii. Product motion under 300ms, ease-out, interruptible, none on keyboard paths. Buttons name the action. No gradients, glass, emoji icons, stat-card heroes, hairline feature tables, corner version labels, or em dashes.

Encode taste. Plan. Wait for OK. One surface per pass. Check the rubric.

Details live in `skills/quiet/SKILL.md` and `skills/quiet/references/`.

```bash
node skills/quiet/scripts/lint.mjs path/to/ui
```

## Credits

Primary: [rauno.me](https://rauno.me), [devouringdetails.com](https://devouringdetails.com), [paco.me/craft](https://paco.me/craft). Also Emil Kowalski, Jakub Krehel, Linear Method and Quality. Sources: [`skills/quiet/references/sources.md`](skills/quiet/references/sources.md). Not affiliated.

## License

MIT © Chloe Valesquez
