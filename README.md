<p align="center">
  <img src="assets/quiet-tour.webp" alt="A tour of six screens designed with Quiet" width="880" />
</p>

<p align="center">A design skill for coding agents. Calm, product-first interfaces from landing page to app.</p>

## Install

```bash
npx skills add https://github.com/ChloeVPin/quiet --skill quiet
```

Or copy `skills/quiet/` into your agent skills directory.

## What it does

Quiet gives an agent a fixed taste and the numbers to hold it: one grotesk type scale, near-monochrome tokens, a 1104px grid on visible rails, real product UI in the fold, 32 and 36px controls, 40px table rows, and motion under 300ms. It bans the usual tells: gradients, glass, emoji icons, pill labels, stat-card heroes, serif headlines and placeholder copy.

The agent plans first, waits for approval, builds one surface per pass and checks itself against a rubric. Rules live in [`skills/quiet/SKILL.md`](skills/quiet/SKILL.md) and [`skills/quiet/references/`](skills/quiet/references/).

```bash
node skills/quiet/scripts/lint.mjs path/to/ui
```

## Examples

Every screen below was built by an agent following the skill. Each folder has the HTML and 2x screenshots.

<table>
  <tr>
    <td width="50%" valign="top">
      <picture><source media="(prefers-color-scheme: dark)" srcset="examples/saas/result-dark-fold.png" /><img src="examples/saas/result-light-fold.png" alt="SaaS landing" width="420" /></picture><br/>
      <a href="examples/saas/">SaaS landing</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/analytics/result-fold.png" alt="Analytics" width="420" /><br/>
      <a href="examples/analytics/">Analytics</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/chat/result-fold.png" alt="Chat" width="420" /><br/>
      <a href="examples/chat/">Chat</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/settings/result-fold.png" alt="Settings" width="420" /><br/>
      <a href="examples/settings/">Settings</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/docs/result-fold.png" alt="Docs" width="420" /><br/>
      <a href="examples/docs/">Docs</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/pricing/result-fold.png" alt="Pricing" width="420" /><br/>
      <a href="examples/pricing/">Pricing</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/signin/result-fold.png" alt="Sign in" width="420" /><br/>
      <a href="examples/signin/">Sign in</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/changelog/result-fold.png" alt="Changelog" width="420" /><br/>
      <a href="examples/changelog/">Changelog</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/devtool/result-fold.png" alt="API landing" width="420" /><br/>
      <a href="examples/devtool/">API landing</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/ecommerce/result-fold.png" alt="Product page" width="420" /><br/>
      <a href="examples/ecommerce/">Product page</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/waitlist/result-fold.png" alt="Waitlist" width="420" /><br/>
      <a href="examples/waitlist/">Waitlist</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/agency/result-fold.png" alt="Studio" width="420" /><br/>
      <a href="examples/agency/">Studio</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/empty/result-fold.png" alt="404 and empty state" width="420" /><br/>
      <a href="examples/empty/">404 and empty state</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/messy-landing/result-fold.png" alt="Board landing" width="420" /><br/>
      <a href="examples/messy-landing/">Board landing</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/mobile/result.png" alt="Mobile home" width="140" />&nbsp;&nbsp;<img src="examples/mobile-onboard/result.png" alt="Mobile paywall" width="140" /><br/>
      <a href="examples/mobile/">Mobile home</a> and <a href="examples/mobile-onboard/">paywall</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/company/result-fold.png" alt="Company page" width="420" /><br/>
      <a href="examples/company/">Company page</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/pricing-compare/result-s1.png" alt="Pricing comparison" width="420" /><br/>
      <a href="examples/pricing-compare/">Pricing comparison</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/features/result-fold.png" alt="How it works" width="420" /><br/>
      <a href="examples/features/">How it works</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/docs-reference/result-fold.png" alt="API reference" width="420" /><br/>
      <a href="examples/docs-reference/">API reference</a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <img src="examples/forgot-password/result-fold.png" alt="Forgot password" width="420" /><br/>
      <a href="examples/forgot-password/">Forgot password</a>
    </td>
    <td width="50%" valign="top">
      <img src="examples/brand-variants/result-fold.png" alt="Three brand styles" width="420" /><br/>
      <a href="examples/brand-variants/">Three brand styles</a>
    </td>
  </tr>
</table>

## License

MIT © Chloe Valesquez
