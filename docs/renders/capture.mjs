import puppeteer from "puppeteer-core";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const outEx = path.join(root, "examples/messy-landing");
const outAssets = path.join(root, "assets");
const chrome = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--hide-scrollbars"],
});

async function shot(file, out, { width = 880, height = 900, dark = false, fullPage = true } = {}) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: dark ? "dark" : "light" },
  ]);
  await page.setViewport({ width, height, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(file).href, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: out, fullPage, type: "png" });
  await page.close();
  console.log(out);
}

await shot(path.join(outEx, "before.html"), path.join(outEx, "before.png"), { height: 1200 });
await shot(path.join(outEx, "after.html"), path.join(outEx, "after-light.png"), { dark: false, height: 1200 });
await shot(path.join(outEx, "after.html"), path.join(outEx, "after-dark.png"), { dark: true, height: 1200 });
await shot(path.join(outEx, "after.html"), path.join(outAssets, "hero-light.png"), { dark: false, height: 560, fullPage: false });
await shot(path.join(outEx, "after.html"), path.join(outAssets, "hero-dark.png"), { dark: true, height: 560, fullPage: false });
await shot(path.join(outEx, "before.html"), path.join(outAssets, "before-hero.png"), { height: 520, fullPage: false });
await browser.close();
