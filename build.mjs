// Builds a static site from Figma-exported section components (get_design_context output).
// 1. downloads Figma asset URLs to .cache/, publishes them to docs/assets (PNG -> WebP)
// 2. maps Figma font classes to real font stacks (site.config.mjs > fonts)
// 3. renders every section to static HTML with React (build time only, no React in the site)
// 4. compiles the Tailwind classes into one plain CSS file
// Output: docs/ (what GitHub Pages serves).
import fs from 'node:fs/promises';
import path from 'node:path';
import { existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import * as esbuild from 'esbuild';
import sharp from 'sharp';
import config from './site.config.mjs';
import { sections as allSections } from './src/sections.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(ROOT, 'src/sections');
const TMP = path.join(ROOT, '.tmp');
const OUT = path.join(ROOT, 'docs');
const CACHE = path.join(ROOT, '.cache/assets'); // original Figma downloads (not published)
const ASSETS = path.join(OUT, 'assets');
// Sections not written yet are skipped, so the site can be built (and checked) incrementally.
const sections = allSections.filter(s => existsSync(path.join(SRC, `${s.file}.jsx`)));

const fontClass = fam => `ff-${fam.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
const STYLE_MAP = {
  Thin: 'font-thin', ExtraLight: 'font-extralight', Light: 'font-light', Regular: 'font-normal',
  Medium: 'font-medium', SemiBold: 'font-semibold', Semi_Bold: 'font-semibold', Bold: 'font-bold',
  ExtraBold: 'font-extrabold', Extra_Bold: 'font-extrabold', Black: 'font-black',
};

// font-['Alegreya_Sans:Medium_Italic'] -> "ff-alegreya-sans font-medium italic"
function fixFonts(code, file) {
  return code.replace(/font-\['([^':]+):([^']+)'\]/g, (_, fam, style) => {
    if (!config.fonts[fam]) throw new Error(`${file}: font "${fam}" missing in site.config.mjs > fonts`);
    const italic = /italic/i.test(style);
    const weight = style.replace(/_?Italic/i, '') || 'Regular';
    if (!STYLE_MAP[weight]) throw new Error(`${file}: unknown font style "${style}"`);
    return `${fontClass(fam)} ${STYLE_MAP[weight]}${italic ? ' italic' : ''}`;
  });
}

async function localizeAssets(code) {
  const urls = [...new Set(code.match(/https:\/\/www\.figma\.com\/api\/mcp\/asset\/[\w-]+\.\w+/g) || [])];
  for (const url of urls) {
    const file = path.basename(url);
    const dest = path.join(CACHE, file);
    if (!existsSync(dest)) {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Asset download failed (${res.status}) — Figma URLs expire after 7 days: ${url}`);
      await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
    }
    code = code.replaceAll(url, `assets/${await publishAsset(file)}`);
  }
  return code;
}

// Raster images become WebP (max 2560px): sharp on retina, ~95% lighter than Figma's PNGs.
async function publishAsset(file) {
  const src = path.join(CACHE, file);
  if (!/\.(png|jpe?g)$/i.test(file)) {
    await fs.copyFile(src, path.join(ASSETS, file));
    return file;
  }
  const out = file.replace(/\.\w+$/, '.webp');
  const dest = path.join(ASSETS, out);
  if (!existsSync(dest)) {
    await sharp(src).resize({ width: 2560, height: 2560, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, alphaQuality: 90 }).toFile(dest);
  }
  return out;
}

const GLASS = `background: linear-gradient(135deg, rgba(255,255,255,0.32), rgba(255,255,255,0.08));
  -webkit-backdrop-filter: blur(4px) saturate(1.4); backdrop-filter: blur(4px) saturate(1.4);
  box-shadow: 0 4px 4px rgba(0,0,0,0.25), inset 1.5px 1.5px 1px rgba(255,255,255,0.75), inset -1px -1px 1px rgba(0,0,0,0.08);
  filter: none;`;

// CSS that depends on the config: font classes, page width, glass effect.
function generatedCss() {
  const w = config.designWidth;
  const glassIds = [...config.glassNodes, ...config.floating.filter(f => f.glass).map(f => f.nodeId)];
  return [
    `html { background: ${config.pageBackground}; }`,
    `.page, .frame { width: ${w}px; }`,
    ...Object.entries(config.fonts).map(([fam, stack]) => `.${fontClass(fam)} { font-family: ${stack}; }`),
    ...config.floating.map((f, i) => `.floating-${i} { width: ${f.w}px; height: ${f.h}px; border-radius: ${f.radius || 0}px; }`),
    glassIds.length ? `/* Figma GLASS effect approximation */\n:is(${glassIds.map(id => `[data-node-id="${id}"]`).join(', ')}) {\n  ${GLASS}\n}` : '',
  ].join('\n') + '\n';
}

// Figma exports icons with preserveAspectRatio="none" and a non-square box; browsers then
// stretch them into the square favicon slot. Pad to a centred square viewBox instead.
async function writeFavicon(head) {
  if (!config.favicon) return head.replace('{{ICONS}}', '');
  const svg = await fs.readFile(path.join(CACHE, config.favicon.asset), 'utf8');
  const [, w, h] = svg.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/);
  const side = Math.max(+w, +h);
  const square = svg.replace(/<svg[^>]*>/, `<svg width="${side}" height="${side}" viewBox="${-(side - w) / 2} ${-(side - h) / 2} ${side} ${side}" preserveAspectRatio="xMidYMid meet" fill="none" xmlns="http://www.w3.org/2000/svg">`);
  await fs.writeFile(path.join(OUT, 'favicon.svg'), square);
  const icon = (size, pad, background) => sharp(Buffer.from(square))
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: background || { r: 0, g: 0, b: 0, alpha: 0 } })
    .flatten(background ? { background } : false).png();
  await icon(32, 1).toFile(path.join(OUT, 'favicon-32.png'));
  await icon(180, 22, config.favicon.touchBackground || '#ffffff').toFile(path.join(OUT, 'apple-touch-icon.png'));
  return head.replace('{{ICONS}}', ['<link rel="icon" href="favicon.svg" type="image/svg+xml">',
    '<link rel="icon" href="favicon-32.png" type="image/png" sizes="32x32">',
    '<link rel="apple-touch-icon" href="apple-touch-icon.png">'].join('\n'));
}

await fs.mkdir(CACHE, { recursive: true });
await fs.rm(OUT, { recursive: true, force: true });
await fs.mkdir(ASSETS, { recursive: true });
await fs.rm(TMP, { recursive: true, force: true });
await fs.mkdir(TMP, { recursive: true });

for (const file of (await fs.readdir(SRC)).filter(f => f.endsWith('.jsx'))) {
  const code = fixFonts(await localizeAssets(await fs.readFile(path.join(SRC, file), 'utf8')), file);
  await fs.writeFile(path.join(TMP, file), code);
}

const entry = path.join(TMP, 'entry.jsx');
await fs.writeFile(entry, `
import { renderToStaticMarkup } from 'react-dom/server';
${sections.map((s, i) => `import S${i} from './${s.file}.jsx';`).join('\n')}
export const html = [${sections.map((_, i) => `renderToStaticMarkup(<S${i} />)`).join(', ')}];
`);
await esbuild.build({
  entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', jsx: 'automatic',
  outfile: path.join(TMP, 'render.mjs'), packages: 'external', logLevel: 'error',
});
const { html } = await import(pathToFileURL(path.join(TMP, 'render.mjs')).href + `?t=${Date.now()}`);

const body = sections.map((s, i) =>
  `<section id="${s.id}" class="frame" style="height:${s.h}px">${html[i]}</section>`).join('\n');
const floating = config.floating.map((f, i) =>
  `<div class="floating floating-${i}" data-node-id="${f.nodeId}">${fixFonts(f.html, 'site.config floating')}</div>`).join('\n');
const site = { designWidth: config.designWidth, nav: config.nav, navFallback: config.navFallback, links: config.links,
  floating: config.floating.map(({ nodeId, x, y, navTo }) => ({ nodeId, x, y, navTo })) };
const v = Date.now().toString(36); // version stamp: browsers (Safari!) fetch fresh CSS/JS after each deploy

let page = await fs.readFile(path.join(ROOT, 'src/index.html'), 'utf8');
page = (await writeFavicon(page))
  .replace('{{LANG}}', config.lang).replace('{{TITLE}}', config.title)
  .replace('{{DESCRIPTION}}', config.description).replace('{{GOOGLE_FONTS}}', config.googleFonts)
  .replace('{{SITE_JSON}}', JSON.stringify(site))
  .replace('<!--SECTIONS-->', body).replace('<!--FLOATING-->', floating)
  .replace('href="styles.css"', `href="styles.css?v=${v}"`).replace('src="main.js"', `src="main.js?v=${v}"`);
await fs.writeFile(path.join(OUT, 'index.html'), page);
await fs.copyFile(path.join(ROOT, 'src/main.js'), path.join(OUT, 'main.js'));
await fs.writeFile(path.join(OUT, '.nojekyll'), '');
await fs.writeFile(path.join(ROOT, 'src/generated.css'), generatedCss());

execSync('npx @tailwindcss/cli -i src/styles.css -o docs/styles.css --minify', { cwd: ROOT, stdio: 'ignore' });
const leftover = (page.match(/figma\.com\/api\/mcp\/asset/g) || []).length;
console.log(`Built ${sections.length}/${allSections.length} sections${leftover ? ` — WARNING: ${leftover} Figma URLs left` : ''}`);
