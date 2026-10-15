import puppeteer from "puppeteer-core";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../..");
const outEx = path.join(root, "examples/messy-landing");
const outAssets = path.join(root, "assets");
fs.mkdirSync(outAssets, { recursive: true });

const chrome =
  process.env.CHROME_PATH ||
  "/usr/bin/google-chrome";

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--hide-scrollbars"],
});

async function shot(file, out, { width = 1440, height = 900, dark = false, fullPage = true, scale = 2 } = {}) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: dark ? "dark" : "light" },
  ]);
  await page.setViewport({ width, height, deviceScaleFactor: scale });
  const url = pathToFileURL(file).href;
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60000 });
  // wait for fonts
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: out, fullPage, type: "png" });
  await page.close();
  console.log("wrote", out);
}

// Example before/after at GitHub-ish width * 2x
await shot(path.join(outEx, "before.html"), path.join(outEx, "before.png"), {
  width: 880, height: 1100, scale: 2, fullPage: true,
});
await shot(path.join(outEx, "after.html"), path.join(outEx, "after-light.png"), {
  width: 880, height: 1100, scale: 2, fullPage: true, dark: false,
});
await shot(path.join(outEx, "after.html"), path.join(outEx, "after-dark.png"), {
  width: 880, height: 1100, scale: 2, fullPage: true, dark: true,
});

// Cropped hero strip (above the fold) for README
await shot(path.join(outEx, "after.html"), path.join(outAssets, "hero-light.png"), {
  width: 880, height: 520, scale: 2, fullPage: false, dark: false,
});
await shot(path.join(outEx, "after.html"), path.join(outAssets, "hero-dark.png"), {
  width: 880, height: 520, scale: 2, fullPage: false, dark: true,
});

// Before hero for comparison strip
await shot(path.join(outEx, "before.html"), path.join(outAssets, "before-hero.png"), {
  width: 880, height: 520, scale: 2, fullPage: false,
});

await browser.close();
