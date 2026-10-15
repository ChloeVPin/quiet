#!/usr/bin/env node
/**
 * Quiet lint — static grep for common slop tells.
 * Usage: node scripts/lint.mjs [files-or-dirs…]
 * Exit 1 if any FAIL findings; WARN does not fail the process.
 */
import fs from "node:fs";
import path from "node:path";

const roots = process.argv.slice(2);
if (roots.length === 0) {
  console.error("Usage: node lint.mjs <file-or-dir…>");
  process.exit(2);
}

const EXT = new Set([
  ".html", ".css", ".scss", ".tsx", ".ts", ".jsx", ".js", ".vue", ".svelte", ".mdx",
]);

const rules = [
  {
    id: "gradient",
    severity: "FAIL",
    re: /linear-gradient\s*\(|radial-gradient\s*\(|conic-gradient\s*\(|bg-gradient-/i,
    msg: "gradient fill — Quiet bans decorative gradients",
  },
  {
    id: "violet-indigo",
    severity: "FAIL",
    re: /#(?:7c3aed|8b5cf6|a78bfa|6366f1|4f46e5|818cf8|a855f7)\b|(?:violet|indigo|purple)-[0-9]{2,3}\b|(?:from|to|via|bg|text|border)-(?:violet|indigo|purple)/i,
    msg: "violet/indigo assistant palette",
  },
  {
    id: "emoji-icon",
    severity: "FAIL",
    re: /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u,
    msg: "emoji character — Quiet bans emoji-as-icon",
  },
  {
    id: "backdrop-glass",
    severity: "WARN",
    re: /backdrop-filter\s*:|backdrop-blur/i,
    msg: "backdrop blur / glass — justify or remove",
  },
  {
    id: "raw-hex",
    severity: "WARN",
    re: /#[0-9a-fA-F]{3,8}\b/,
    msg: "raw hex — prefer semantic tokens (custom properties / theme files exempt)",
  },
  {
    id: "slow-ms",
    severity: "FAIL",
    re: /(?:duration(?:-\[[^\]]+\])?|transition(?:-duration)?)\s*[:=]\s*[^;\n{]*(?:[4-9]\d{2}|[1-9]\d{3,})\s*m?s/i,
    msg: "duration over ~300ms in product UI — shorten or move to marketing-only",
  },
  {
    id: "scale-zero",
    severity: "FAIL",
    re: /scale\s*\(\s*0(?:px)?\s*\)|scale-0\b|scale\[0\]/i,
    msg: "scale(0) — enter from ~0.9–0.95 instead",
  },
  {
    id: "stock-copy",
    severity: "WARN",
    re: /supercharge|seamless experience|unlock the future|in today's fast-paced|delve into|elevate your/i,
    msg: "stock AI phrase",
  },
  {
    id: "em-dash",
    severity: "FAIL",
    re: /\u2014|\u2013|&mdash;|&ndash;/,
    msg: "em/en dash in copy. Quiet bans em dashes in UI prose",
  },
  {
    id: "corner-label",
    severity: "FAIL",
    re: /UI skill\s*·|v\d+\.\d+|local time|©\s*scroll/i,
    msg: "corner version / gallery meta label",
  },
  {
    id: "stat-card",
    severity: "WARN",
    re: /Active boards|stat-card|stat\s*card/i,
    msg: "stat-card hero language — prefer a real UI fragment",
  },
  {
    id: "index-cosplay",
    severity: "WARN",
    re: /\b0[1-9]\s*\/\s*0[1-9]\b|Step\s*0[1-9]\b/,
    msg: "01/02 index cosplay",
  },
];

function walk(p, out = []) {
  const st = fs.statSync(p);
  if (st.isDirectory()) {
    const base = path.basename(p);
    if (base === "node_modules" || base === ".git" || base === "dist") return out;
    for (const name of fs.readdirSync(p)) walk(path.join(p, name), out);
  } else if (EXT.has(path.extname(p))) {
    out.push(p);
  }
  return out;
}

function isThemePath(p) {
  return /(?:^|\/)(?:theme|tokens|palette|colors?)(?:\.|$|\/)/i.test(p) ||
    /(?:globals|variables)\.css$/i.test(p);
}

function isTokenDefinition(line) {
  // CSS custom properties are where hex belongs
  return /--[\w-]+\s*:\s*#/.test(line);
}

const files = roots.flatMap((r) => walk(path.resolve(r)));
let fails = 0;
let warns = 0;

for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    for (const rule of rules) {
      if (rule.id === "raw-hex" && (isThemePath(file) || isTokenDefinition(line))) continue;
      if (!rule.re.test(line)) continue;
      const tag = rule.severity;
      if (tag === "FAIL") fails++;
      else warns++;
      console.log(`${tag}  ${rule.id}  ${file}:${i + 1}  ${rule.msg}`);
      console.log(`      ${line.trim().slice(0, 160)}`);
    }
  }
}

console.log(`\nQuiet lint: ${fails} fail, ${warns} warn across ${files.length} files`);
process.exit(fails > 0 ? 1 : 0);
