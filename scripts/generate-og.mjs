/**
 * Builds public/og-image.png (1200×630).
 *
 * If public/og-assets/og-master.jpg exists, it is scaled with cover + bottom anchor
 * (keeps footer/logo zones when cropping to OG aspect). Otherwise builds hero + keyed logo.
 *
 * Run: npm run generate:og
 */
import sharp from 'sharp';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const MASTER_OG = path.join(root, 'public/og-assets/og-master.jpg');
const HERO = path.join(root, 'public/og-assets/hero-source.jpg');
const LOGO = path.join(root, 'public/og-assets/logo-source.jpg');
const OUT = path.join(root, 'public/og-image.png');

const OG_W = 1200;
const OG_H = 630;

/** Smooth alpha for near-black pixels (keeps brush edges clean). */
function keyBlackToAlpha(data, width, height, thLo = 28, thHi = 72) {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      let a = 255;
      if (lum <= thLo) a = 0;
      else if (lum < thHi) a = Math.round((255 * (lum - thLo)) / (thHi - thLo));
      data[i + 3] = Math.min(data[i + 3], a);
    }
  }
}

async function buildFromMaster() {
  await sharp(MASTER_OG)
    .resize(OG_W, OG_H, { fit: 'cover', position: 'south' })
    .png({ compressionLevel: 9 })
    .toFile(OUT);
  console.log(`Wrote ${OUT} (${OG_W}×${OG_H}) from og-master.jpg (cover, south)`);
}

async function buildComposite() {
  if (!existsSync(HERO) || !existsSync(LOGO)) {
    console.error('Missing inputs:', HERO, LOGO);
    process.exit(1);
  }

  const heroBuf = await sharp(HERO)
    .resize(OG_W, OG_H, { fit: 'cover', position: 'northwest' })
    .png()
    .toBuffer();

  const logoMeta = await sharp(LOGO).metadata();
  const { data, info } = await sharp(LOGO).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  if (info.channels !== 4) {
    throw new Error(`Expected RGBA, got ${info.channels} channels`);
  }

  if (!logoMeta.hasAlpha) {
    keyBlackToAlpha(data, info.width, info.height);
  }

  /** Logo box; tuck into hero top-left (minimal inset so strokes aren’t clipped). */
  const maxLogoW = Math.round(OG_W * 0.96);
  const maxLogoH = Math.round(OG_H * 0.88);
  const insetXPx = 10;
  const insetYPx = 10;

  const logoPng = await sharp(Buffer.from(data), {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .resize(maxLogoW, maxLogoH, { fit: 'inside', withoutEnlargement: false })
    .png()
    .toBuffer();

  const { width: lw, height: lh } = await sharp(logoPng).metadata();
  const left = insetXPx;
  const top = insetYPx;

  await sharp(heroBuf)
    .composite([{ input: logoPng, left, top }])
    .png({ compressionLevel: 9 })
    .toFile(OUT);

  console.log(`Wrote ${OUT} (${OG_W}×${OG_H}), logo overlay ${lw}×${lh} @ (${left}, ${top})`);
}

async function main() {
  if (existsSync(MASTER_OG)) {
    await buildFromMaster();
    return;
  }
  await buildComposite();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
