import { bundle } from '@remotion/bundler';
import {
  openBrowser,
  renderMedia,
  renderStill,
  selectComposition,
} from '@remotion/renderer';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const review = path.join(root, 'work/remotion-review');
await mkdir(review, { recursive: true });
const serveUrl = await bundle({
  entryPoint: path.join(root, 'motion/ArmatexLight.tsx'),
  publicDir: path.join(root, 'public'),
});
const browserExecutable =
  process.env.REMOTION_BROWSER_EXECUTABLE ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const browser = await openBrowser('chrome', { browserExecutable });
try {
  const composition = await selectComposition({
    serveUrl,
    id: 'ArmatexLight',
    puppeteerInstance: browser,
  });
  for (const frame of [0, 170, 270, 380, 539])
    await renderStill({
      composition,
      serveUrl,
      puppeteerInstance: browser,
      output: path.join(review, `frame-${frame}.jpg`),
      frame,
      imageFormat: 'jpeg',
      jpegQuality: 90,
    });
  console.log('Review frames ready.');
  let last = -1;
  await renderMedia({
    composition,
    serveUrl,
    puppeteerInstance: browser,
    codec: 'h264',
    muted: true,
    pixelFormat: 'yuv420p',
    crf: 21,
    concurrency: 3,
    outputLocation: path.join(root, 'public/videos/armatex-light-remotion.mp4'),
    onProgress: ({ progress }) => {
      const mark = Math.floor(progress * 10);
      if (mark !== last) {
        last = mark;
        console.log(`Render ${mark * 10}%`);
      }
    },
  });
  console.log('Rendered public/videos/armatex-light-remotion.mp4');
} finally {
  await browser.close({ silent: true });
}
