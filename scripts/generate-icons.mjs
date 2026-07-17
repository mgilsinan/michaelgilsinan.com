import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUB = join(__dirname, "..", "public");

const svg = await readFile(join(PUB, "favicon.svg"));

const outputs = [
  { file: "apple-touch-icon.png", size: 180 },
  { file: "icon-192.png", size: 192 },
  { file: "icon-512.png", size: 512 },
];

for (const { file, size } of outputs) {
  const out = join(PUB, file);
  const png = await sharp(svg, { density: 384 }).resize(size, size).png().toBuffer();
  await writeFile(out, png);
  console.log(`✓ ${file} (${size}×${size}, ${png.length} bytes)`);
}
