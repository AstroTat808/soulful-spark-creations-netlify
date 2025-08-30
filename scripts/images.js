/**
 * Simple image generator: makes -480 and -960 variants for JPG/PNG in /public/images
 * Usage: node scripts/images.js
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const base = path.join(process.cwd(), 'public', 'images');

async function work() {
  if (!fs.existsSync(base)) {
    console.log('No images dir', base);
    return;
  }
  const files = fs.readdirSync(base).filter(f => /\.(jpe?g|png)$/i.test(f) && !/-\d+\.jpg$/.test(f));
  for (const file of files) {
    const src = path.join(base, file);
    const stem = file.replace(/\.(jpe?g|png)$/i, '');
    for (const w of [480, 960]) {
      const out = path.join(base, `${stem}-${w}.jpg`);
      try {
        await sharp(src).resize({ width: w }).jpeg({ quality: 82 }).toFile(out);
        console.log('✓', path.basename(out));
      } catch (e) {
        console.log('x', file, e.message);
      }
    }
  }
}
work();
