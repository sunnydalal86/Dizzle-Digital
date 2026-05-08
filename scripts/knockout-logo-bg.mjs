/**
 * Removes solid outer black plate from public/dizzle-digital-logo.png via edge flood-fill.
 * Safe to re-run (already-transparent edge pixels are ignored).
 * Optionally trims empty margins — update Navbar/Footer width/height if dimensions change.
 *
 * Run: npm run knockout:logo
 */
import sharp from 'sharp';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const LOGO = path.join(root, 'public/dizzle-digital-logo.png');

/** Max luminance for pixels considered “background black” while flooding from edges. */
const FLOOD_LUMA_MAX = 20;

function knockoutOuterBlackPlate(data, width, height, floodLumMax) {
  const n = width * height;
  const visited = new Uint8Array(n);
  const queue = [];

  const lumAt = (ii) => {
    const i = ii * 4;
    return 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
  };

  const canTraverse = (ii) => {
    const i = ii * 4;
    if (data[i + 3] < 8) return false;
    return lumAt(ii) <= floodLumMax;
  };

  const push = (ii) => {
    if (visited[ii] || !canTraverse(ii)) return;
    visited[ii] = 1;
    queue.push(ii);
  };

  for (let x = 0; x < width; x++) {
    push(x);
    push((height - 1) * width + x);
  }
  for (let y = 0; y < height; y++) {
    push(y * width);
    push(y * width + (width - 1));
  }

  while (queue.length) {
    const ii = queue.shift();
    const x = ii % width;
    const y = (ii / width) | 0;
    const neighbors = [ii + 1, ii - 1, ii + width, ii - width];
    for (const nj of neighbors) {
      if (nj < 0 || nj >= n || visited[nj]) continue;
      if (!canTraverse(nj)) continue;
      visited[nj] = 1;
      queue.push(nj);
    }
  }

  let opaque = 0;
  for (let ii = 0; ii < n; ii++) {
    const i = ii * 4;
    if (visited[ii]) {
      data[i + 3] = 0;
    } else if (data[i + 3] > 0) {
      opaque++;
    }
  }
  return opaque;
}

async function main() {
  if (!existsSync(LOGO)) {
    console.error('Missing', LOGO);
    process.exit(1);
  }

  const { data, info } = await sharp(LOGO).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  if (info.channels !== 4) throw new Error('Expected RGBA');

  const copy = Buffer.from(data);
  const opaque = knockoutOuterBlackPlate(copy, info.width, info.height, FLOOD_LUMA_MAX);

  let pipeline = sharp(copy, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png({ compressionLevel: 9 });

  pipeline = pipeline.trim({ threshold: 0 });

  const outBuf = await pipeline.toBuffer();
  const meta = await sharp(outBuf).metadata();

  await sharp(outBuf).toFile(LOGO);

  console.log(`Wrote ${LOGO} — opaque pixels before trim: ${opaque}, trimmed size: ${meta.width}×${meta.height}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
