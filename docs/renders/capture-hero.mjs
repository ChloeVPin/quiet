import puppeteer from "puppeteer-core";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const chrome = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--hide-scrollbars"],
});

async function shot(file, out, dark, { w = 880, h = 480 } = {}) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: dark ? "dark" : "light" },
  ]);
  await page.setViewport({ width: w, height: h, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(file).href, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: out, fullPage: false, type: "png" });
  await page.close();
  console.log(out);
}

const hero = path.join(root, "docs/renders/hero.html");
await shot(hero, path.join(root, "assets/quiet-hero-light.png"), false);
await shot(hero, path.join(root, "assets/quiet-hero-dark.png"), true);
await browser.close();
