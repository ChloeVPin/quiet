---
name: quiet
description: >-
  Quiet is a UI generalist skill that builds and redesigns interfaces in Chloe
  Valesquez's taste: interaction-detail craft, dead simple, near-monochrome,
  perfect type and spacing, purposeful motion under 300ms. Use whenever you
  build, redesign, restyle, polish, or review any UI: landing pages, marketing
  sites, product screens, chat, sidebars, settings, dashboards, or design
  systems. Also when the user says a page looks like slop, generic, AI-made,
  over-decorated, or asks to make it quieter or sharper. Encodes one person's
  taste as hard rules, covering product UI (not just marketing), and requiring
  a plan-then-approve workflow.
license: MIT
metadata:
  author: Chloe Valesquez
  version: "1.0.0"
---

# Quiet

You do not invent a look. You apply Quiet.

Quiet is interaction detail first, ornament never: small grotesk type,
narrow columns, real components, almost no marketing costume. A stranger must
still recognize the product. Zero slop tells.

Read the reference that matches the decision. Do not skim them all up front.

| When | Read |
| --- | --- |
| Type, measure, pairing | `references/type.md` |
| Spacing, radii, optical nudges | `references/space.md` |
| Palette, tokens, contrast | `references/color.md` |
| Duration, easing, when not to animate | `references/motion.md` |
| Press, popovers, exits, morphs | `references/details.md` |
| App density vs document calm | `references/layout.md` |
| Buttons, headlines, bans on copy tells | `references/copy.md` |
| Absolute fail list | `references/bans.md` |
| Redesigning an existing surface | `references/redesign.md` |
| Chat, sidebars, settings, dashboards | `references/product-ui.md` |
| SaaS / marketing landings | `references/saas.md` |
| Landing page numbers (grid, type, buttons, product bezel, pricing) | `references/landing.md` |
| App shell, forms, states, auth, docs, 404, chat, mobile numbers | `references/app-specs.md` |
| Before/after self-check | `references/critique-rubric.md` |

Optional: `node <this-skill>/scripts/lint.mjs <paths…>` greps for common tells.

## Two questions

For how it looks and moves: is every detail deliberate? For whether it
should exist at all: does it earn its place, or does it only survive because
building is cheap?

## Hard rules (never negotiate)

1. **Near-monochrome.** One ground, one ink, one accent maximum. No gradients.
2. **Type.** One grotesk (Inter or Söhne-class), body ~13-16px. Hierarchy by
   weight and muted color, not giant display. Serif only when rare and earned,
   never a big-serif-on-beige template. Measure ~45-65ch. `text-wrap: balance`
   / `pretty`. Tabular nums. Antialiased. No em dashes in UI copy.
3. **Space.** Strict 4px scale. Concentric radii: `outer = inner + padding`.
   Optical nudges only with a one-line comment explaining why.
4. **Motion (product UI).** Purpose required. Under 300ms. Ease-out. Interruptible
   (CSS transitions, not fixed keyframe timelines). None on high-frequency or
   keyboard actions. Richer earned moments only on marketing / onboarding.
   Honor `prefers-reduced-motion`.
5. **Micro-details when relevant.** Press scale ~0.97. Origin-aware popovers.
   Never animate from `scale(0)` (start ~0.9-0.95). Instant subsequent tooltips.
   Freeze exiting content. Morph icons instead of crossfading. Skip what does
   not apply.
6. **Layout.** Product density in apps. For product marketing: a 1104px
   container on structural rails, a two-line hero, the real product in a bezel
   inside the fold, features as grid cells. Numbers and recipes (hero composition, product fragment, feature cells, wordmarks, pricing anatomy) in `references/landing.md`; follow them literally.
   No stat-card heroes, no fake feature row tables, no serif-section rhythm.
7. **Copy.** Buttons name the action (“Send invite”, not “Submit”). No stock AI
   phrases. No eyebrow / pill kickers above headlines.
8. **Bans.** See `references/bans.md`. Absolute. Includes: no AI-colliding brand names, no sidebar logo tiles, no needless dividers, Boxicons (not Lucide) where icons are conventional, fill empty app chrome, grid-aligned buttons, paid-sounding CTAs, real product photos without overlay SKUs.
9. **No unrequested features.** Restraint is the point.
10. **No duplicate components / raw hex sprawl.** Reuse primitives; colors live
    in tokens.

## The run

Do these in order. Do not skip the wait.

### 1. Inventory

List what is real: product name, audience, stack, existing brand tokens, surfaces
in scope, and the one job this UI must do. For redesigns, inventory structure and
content that must survive (see `references/redesign.md`).

### 2. Short plan, then stop

Write a plan of one screenful or less:

- surfaces in pass order (one surface per pass)
- token decisions (type, radius, color, motion)
- what stays vs what dies
- risks / contract tests / unknowns

**Wait for explicit OK before writing code.** A brief that says build, make, or ship now counts as approval: state the plan in three lines and proceed. If the user already approved a
plan in-thread, proceed. Do not silently expand scope.

### 3. One surface per pass

Implement one surface. Keep behavior and data identical on redesigns unless asked
otherwise. Prefer extraction and restyle over rewrite.

### 4. Before / after self-check

Against `references/critique-rubric.md`:

- stranger still recognizes the product
- zero items from `bans.md`
- type / space / motion rules held
- reduced-motion path works

Capture or describe before/after. Fix the top failures. Re-check once.

### 5. Report

Briefly: what changed and why (cite a Quiet rule or a named source), what you
did not touch, and what the next pass should be. Do not claim a check you skipped.

## Scope

UI generalist. Landing pages **and** product UI (chat, sidebars, settings,
dashboards, dense tools). This is the gap Quiet owns versus gallery-only skills.

## Success

A stranger still recognizes the product. Every slop tell is gone. Type and
spacing feel decided. Nothing on the page is there by default.
