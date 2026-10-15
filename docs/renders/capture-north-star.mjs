import puppeteer from "puppeteer-core";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(__dirname, "../north-star");
fs.mkdirSync(out, { recursive: true });
const chrome = process.env.CHROME_PATH || "/usr/bin/google-chrome";

const sites = [
  { id: "rauno-home", url: "https://rauno.me", w: 1280, h: 900 },
  { id: "rauno-craft", url: "https://rauno.me/craft", w: 1280, h: 900 },
  { id: "devouring", url: "https://devouringdetails.com", w: 1280, h: 900 },
  { id: "paco-home", url: "https://paco.me", w: 1280, h: 900 },
  { id: "paco-craft", url: "https://paco.me/craft", w: 1280, h: 900 },
  { id: "emil-home", url: "https://emilkowal.ski", w: 1280, h: 900 },
];

const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--hide-scrollbars"],
});

for (const s of sites) {
  const page = await browser.newPage();
  await page.setViewport({ width: s.w, height: s.h, deviceScaleFactor: 2 });
  try {
    await page.goto(s.url, { waitUntil: "networkidle2", timeout: 90000 });
    await new Promise((r) => setTimeout(r, 1500));
    // measure some typography
    const metrics = await page.evaluate(() => {
      const body = getComputedStyle(document.body);
      const p = document.querySelector("p, article p, main p, .prose p");
      const h1 = document.querySelector("h1");
      const a = document.querySelector("a");
      const pick = (el) => {
        if (!el) return null;
        const cs = getComputedStyle(el);
        return {
          tag: el.tagName,
          fontFamily: cs.fontFamily.slice(0, 80),
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          color: cs.color,
          letterSpacing: cs.letterSpacing,
        };
      };
      return {
        bg: body.backgroundColor,
        bodyFont: body.fontFamily.slice(0, 100),
        bodySize: body.fontSize,
        bodyColor: body.color,
        p: pick(p),
        h1: pick(h1),
        a: pick(a),
        width: document.documentElement.clientWidth,
        mainWidth: document.querySelector("main, article, [class*='content']")?.getBoundingClientRect?.()?.width,
      };
    });
    fs.writeFileSync(path.join(out, `${s.id}.json`), JSON.stringify(metrics, null, 2));
    await page.screenshot({ path: path.join(out, `${s.id}.png`), fullPage: false, type: "png" });
    await page.screenshot({ path: path.join(out, `${s.id}-full.png`), fullPage: true, type: "png" });
    console.log("ok", s.id, metrics.bodySize, metrics.bg);
  } catch (e) {
    console.error("fail", s.id, e.message);
  }
  await page.close();
}
await browser.close();
