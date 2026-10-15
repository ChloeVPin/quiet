import puppeteer from "puppeteer-core";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const chrome = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const browser = await puppeteer.launch({
  executablePath: chrome, headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--hide-scrollbars"],
});
async function shot(dark, out) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([{ name: "prefers-color-scheme", value: dark ? "dark" : "light" }]);
  await page.setViewport({ width: 880, height: 520, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(path.join(__dirname, "hero-A-magnify.html")).href, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: out, type: "png" });
  await page.close();
}
const root = path.resolve(__dirname, "../..");
await shot(false, path.join(__dirname, "hero-A-magnify-light.png"));
await shot(true, path.join(__dirname, "hero-A-magnify-dark.png"));
await shot(false, path.join(root, "assets/quiet-hero-light.png"));
await shot(true, path.join(root, "assets/quiet-hero-dark.png"));
await browser.close();
console.log("A promoted");
