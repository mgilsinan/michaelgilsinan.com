import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Social previews for /portfolio and each case study, built from the same
// project images the pages use. Run with `npm run og:portfolio`.

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ASSETS = join(ROOT, "src", "assets", "portfolio");
const OUT = join(ROOT, "public", "og");

const W = 1200;
const H = 630;
const SANS = "-apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const MONO = "-apple-system, BlinkMacSystemFont, 'SF Mono', Menlo, monospace";

const studies = [
  {
    slug: "suptown-music-arts",
    number: "01",
    title: "SUPtown Music & Arts",
    label: "Creative Environments · Live Experiences",
    image: "suptown/gallery-wall.jpg",
    position: "center",
  },
  {
    slug: "fort-lee-school-of-music",
    number: "02",
    title: "Fort Lee School of Music",
    label: "Brand Experience · Visual Identity",
    image: "flsm/reception.jpg",
    position: "center",
  },
  {
    slug: "stack",
    number: "03",
    title: "ST∆CK",
    label: "Consumer Product · UI & UX · AI",
    image: "stack/hero.jpg",
    position: "top",
  },
  {
    slug: "praxis-stack",
    number: "04",
    title: "Praxis Stack",
    label: "Music Technology · Applied AI",
    image: "praxis/demo-calendar-attended.png",
    position: "top",
  },
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const brand = (x, y) => `
  <g transform="translate(${x}, ${y})">
    <rect width="40" height="40" rx="10" fill="#f3f3f5"/>
    <text x="20" y="26.5" font-family="${MONO}" font-size="13" font-weight="700" fill="#0b0b0d" text-anchor="middle">MG</text>
    <text x="56" y="27" font-family="${SANS}" font-size="21" font-weight="600" fill="#f3f3f5" letter-spacing="-0.3">Michael Gilsinan</text>
  </g>`;

async function cover(file, width, height, position = "center") {
  return sharp(join(ASSETS, file)).resize(width, height, { fit: "cover", position }).toBuffer();
}

async function rounded(buffer, width, height, radius) {
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${radius}" fill="#fff"/></svg>`,
  );
  return sharp(buffer).composite([{ input: mask, blend: "dest-in" }]).png().toBuffer();
}

async function indexCard() {
  // Two-by-two mosaic of the four projects on the right, title on the left.
  const tile = { w: 262, h: 262, gap: 14, radius: 14 };
  const x0 = W - 56 - tile.w * 2 - tile.gap;
  const y0 = (H - tile.h * 2 - tile.gap) / 2;
  const tiles = await Promise.all(
    studies.map(async (s, i) => ({
      input: await rounded(await cover(s.image, tile.w, tile.h, s.position), tile.w, tile.h, tile.radius),
      left: Math.round(x0 + (i % 2) * (tile.w + tile.gap)),
      top: Math.round(y0 + Math.floor(i / 2) * (tile.h + tile.gap)),
    })),
  );

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <radialGradient id="glow" cx="18%" cy="8%" r="70%">
        <stop offset="0%" stop-color="#ff7a45" stop-opacity="0.22"/>
        <stop offset="60%" stop-color="#ff7a45" stop-opacity="0.03"/>
        <stop offset="100%" stop-color="#ff7a45" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="#0b0b0d"/>
    <rect width="${W}" height="${H}" fill="url(#glow)"/>
    ${brand(64, 64)}
    <g transform="translate(64, 214)">
      <rect x="0" y="-6" width="24" height="1.5" fill="#ff7a45"/>
      <text x="36" y="0" font-family="${MONO}" font-size="15" font-weight="500" letter-spacing="1.4" fill="#c8c8d0">CREATIVE PORTFOLIO</text>
    </g>
    <g font-family="${SANS}" font-size="74" font-weight="600" fill="#f3f3f5" letter-spacing="-3.2">
      <text x="60" y="314">Music<tspan fill="#ff7a45">.</tspan></text>
      <text x="60" y="390">Experience<tspan fill="#ff7a45">.</tspan></text>
      <text x="60" y="466">Technology<tspan fill="#ff7a45">.</tspan></text>
    </g>
    <text x="64" y="566" font-family="${MONO}" font-size="15" font-weight="500" fill="#9797a4" letter-spacing="0.4">michaelgilsinan.com/portfolio</text>
  </svg>`;

  return sharp(Buffer.from(svg), { density: 144 }).resize(W, H).composite(tiles).jpeg({ quality: 88, mozjpeg: true }).toBuffer();
}

async function studyCard(s) {
  const photo = await cover(s.image, W, H, s.position);
  const titleSize = s.title.length > 20 ? 66 : 84;
  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0b0b0d" stop-opacity="0.55"/>
        <stop offset="38%" stop-color="#0b0b0d" stop-opacity="0.12"/>
        <stop offset="58%" stop-color="#0b0b0d" stop-opacity="0.62"/>
        <stop offset="100%" stop-color="#0b0b0d" stop-opacity="0.94"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#shade)"/>
    ${brand(56, 52)}
    <text x="${W - 56}" y="79" text-anchor="end" font-family="${MONO}" font-size="15" font-weight="500" letter-spacing="1.4" fill="#e4e4ea">CASE STUDY ${s.number} / 04</text>
    <g transform="translate(56, 488)">
      <rect x="0" y="-6" width="24" height="1.5" fill="#ff7a45"/>
      <text x="36" y="0" font-family="${MONO}" font-size="15" font-weight="500" letter-spacing="1.3" fill="#d6d6de">${esc(s.label.toUpperCase())}</text>
    </g>
    <text x="52" y="${488 + 22 + titleSize * 0.86}" font-family="${SANS}" font-size="${titleSize}" font-weight="600" fill="#f7f7f9" letter-spacing="${-titleSize * 0.04}">${esc(s.title)}</text>
  </svg>`;

  return sharp(photo)
    .composite([{ input: await sharp(Buffer.from(overlay), { density: 144 }).resize(W, H).png().toBuffer() }])
    .jpeg({ quality: 86, mozjpeg: true })
    .toBuffer();
}

await mkdir(OUT, { recursive: true });

const index = await indexCard();
await writeFile(join(OUT, "portfolio.jpg"), index);
console.log(`✓ og/portfolio.jpg (${index.length} bytes)`);

for (const s of studies) {
  const jpg = await studyCard(s);
  await writeFile(join(OUT, `portfolio-${s.slug}.jpg`), jpg);
  console.log(`✓ og/portfolio-${s.slug}.jpg (${jpg.length} bytes)`);
}
