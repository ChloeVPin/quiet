import puppeteer from "puppeteer-core";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const chrome = process.env.CHROME_PATH || "/usr/bin/google-chrome";
const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox", "--hide-scrollbars"],
});

const files = [
  "hero-A-magnify.html",
  "hero-B-press.html",
  "hero-C-craft-card.html",
];

async function shot(file, out, dark) {
  const page = await browser.newPage();
  await page.emulateMediaFeatures([
    { name: "prefers-color-scheme", value: dark ? "dark" : "light" },
  ]);
  await page.setViewport({ width: 880, height: 520, deviceScaleFactor: 2 });
  await page.goto(pathToFileURL(path.join(__dirname, file)).href, { waitUntil: "networkidle0" });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 300));
  await page.screenshot({ path: out, type: "png" });
  await page.close();
  console.log(out);
}

for (const f of files) {
  const base = f.replace(".html", "");
  await shot(f, path.join(__dirname, `${base}-light.png`), false);
  await shot(f, path.join(__dirname, `${base}-dark.png`), true);
}

// Direction D: animated press on craft stage — capture frames then ffmpeg webp
const animHtml = path.join(__dirname, "hero-D-anim.html");
fs.writeFileSync(animHtml, `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600&display=swap" rel="stylesheet"/>
<style>
  :root { --stage:#121212; --card:#1a1a1a; --fg:#ededed; --muted:#8a8a8a; --line:#2a2a2a; --btn:#ededed; --btnText:#111; --accent:#ff5a1f; }
  *{box-sizing:border-box;margin:0}
  body{width:880px;height:520px;background:var(--stage);font-family:Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased;color:var(--fg);display:flex;align-items:center;justify-content:center}
  .card{width:760px;height:420px;background:var(--card);border-radius:16px;position:relative}
  .mark{position:absolute;top:22px;left:24px;font-size:12px;font-weight:500}
  .meta{position:absolute;top:22px;right:24px;font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums}
  .center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:36px}
  .btn{background:var(--btn);color:var(--btnText);border:none;border-radius:7px;padding:10px 16px;font:500 13px/1 Inter,system-ui,sans-serif;letter-spacing:-0.01em;transform:scale(var(--s,1));transition:none}
  .readout{font-size:11px;color:var(--muted);font-variant-numeric:tabular-nums}
  .readout b{color:var(--accent);font-weight:500}
  .rule{position:absolute;left:0;right:0;top:68%;height:1px;background:color-mix(in srgb,var(--accent) 45%, transparent)}
  .dot{position:absolute;left:24px;top:calc(68% - 3px);width:7px;height:7px;border-radius:50%;background:var(--accent)}
  .note{position:absolute;left:38px;top:calc(68% + 10px);font-size:10px;color:var(--muted)}
</style></head>
<body>
<div class="card">
  <div class="mark">Quiet</div>
  <div class="meta" id="meta">t=0ms</div>
  <div class="center">
    <button class="btn" id="btn">Start free board</button>
    <div class="readout">scale <b id="sc">1.00</b></div>
  </div>
  <div class="rule"></div><div class="dot"></div>
  <div class="note">press feedback · ease-out · interruptible</div>
</div>
</body></html>`);

const page = await browser.newPage();
await page.setViewport({ width: 880, height: 520, deviceScaleFactor: 2 });
await page.goto(pathToFileURL(animHtml).href, { waitUntil: "networkidle0" });
await page.evaluate(() => document.fonts.ready);

const framesDir = path.join(__dirname, "frames");
fs.mkdirSync(framesDir, { recursive: true });
// 20 frames over ~800ms loop: idle, press in, hold, release
const keyframes = [];
for (let i = 0; i < 8; i++) keyframes.push({ t: 0, s: 1 }); // idle
for (let i = 0; i <= 10; i++) {
  const p = i / 10;
  // ease-out approx
  const e = 1 - Math.pow(1 - p, 3);
  keyframes.push({ t: Math.round(p * 120), s: 1 - 0.03 * e });
}
for (let i = 0; i < 6; i++) keyframes.push({ t: 120, s: 0.97 }); // hold
for (let i = 0; i <= 8; i++) {
  const p = i / 8;
  const e = 1 - Math.pow(1 - p, 3);
  keyframes.push({ t: 120 + Math.round(p * 100), s: 0.97 + 0.03 * e });
}

for (let i = 0; i < keyframes.length; i++) {
  const { t, s } = keyframes[i];
  await page.evaluate((t, s) => {
    document.getElementById("btn").style.setProperty("--s", String(s));
    document.getElementById("sc").textContent = s.toFixed(3);
    document.getElementById("meta").textContent = `t=${t}ms`;
  }, t, s);
  const name = path.join(framesDir, `f${String(i).padStart(3, "0")}.png`);
  await page.screenshot({ path: name, type: "png" });
}
await page.close();
await browser.close();
console.log("frames", keyframes.length);
