import sharp from "sharp";
import { writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "og.png");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="82%" cy="14%" r="72%">
      <stop offset="0%" stop-color="#ff7a45" stop-opacity="0.24"/>
      <stop offset="55%" stop-color="#ff7a45" stop-opacity="0.05"/>
      <stop offset="100%" stop-color="#ff7a45" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#0b0b0d"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <g transform="translate(80, 80)">
    <rect width="42" height="42" rx="10" fill="#f3f3f5"/>
    <text x="21" y="28" font-family="-apple-system, BlinkMacSystemFont, 'SF Mono', Menlo, monospace" font-size="14" font-weight="700" fill="#0b0b0d" text-anchor="middle">MG</text>
    <text x="58" y="29" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" font-size="22" font-weight="600" fill="#f3f3f5" letter-spacing="-0.3">Michael Gilsinan</text>
  </g>

  <g transform="translate(80, 270)">
    <rect x="0" y="10" width="28" height="1.5" fill="#ff7a45"/>
    <text x="42" y="16" font-family="-apple-system, BlinkMacSystemFont, 'SF Mono', Menlo, monospace" font-size="16" font-weight="500" letter-spacing="1.4" fill="#c8c8d0">DIRECTOR, STRATEGIC PROJECTS · SITEMETRIC</text>
  </g>

  <text x="80" y="395" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" font-size="108" font-weight="600" fill="#f3f3f5" letter-spacing="-4">Michael Gilsinan</text>

  <text x="80" y="480" font-family="-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif" font-size="32" font-weight="400" fill="#c8c8d0" letter-spacing="-0.6">1M+ workers · 16,000+ contractors · 40 states</text>

  <g transform="translate(80, 550)">
    <text font-family="-apple-system, BlinkMacSystemFont, 'SF Mono', Menlo, monospace" font-size="16" font-weight="500" fill="#9797a4" letter-spacing="0.4">michaelgilsinan.com</text>
  </g>

  <g transform="translate(1120, 550)">
    <text text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'SF Mono', Menlo, monospace" font-size="16" font-weight="500" fill="#9797a4" letter-spacing="0.4">Sitemetric · Fort Lee School of Music · Stack</text>
  </g>
</svg>`;

const png = await sharp(Buffer.from(svg), { density: 144 })
  .resize(1200, 630)
  .png()
  .toBuffer();

await writeFile(OUT, png);
console.log(`✓ wrote ${OUT} (${png.length} bytes)`);
