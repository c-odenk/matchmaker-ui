// Erzeugt die Vorschaubilder für Link-Vorschauen (public/og/<name>.png,
// 1200 × 630) und das Logo für das Organization-Schema (public/logo.png,
// 512 × 512). Die Bilder liegen im Repo; dieses Skript nur neu ausführen,
// wenn sich eine Überschrift in src/config/pages.js ändert:
//
//   node scripts/og-images.js

const fs = require('fs')
const path = require('path')
const puppeteer = require('puppeteer')
const { pages } = require('../src/config/pages')

const PUBLIC = path.join(__dirname, '..', 'public')
const NAVY = '#172b4d'
const BLUE = '#2976d6'

const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const FONT = '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&display=block" rel="stylesheet">'

function ogHtml(headline) {
  return `<!doctype html><html><head><meta charset="utf-8">${FONT}<style>
    * { margin: 0; box-sizing: border-box; }
    body { width: 1200px; height: 630px; background: ${NAVY}; color: #fff;
      font-family: Inter, sans-serif; position: relative; overflow: hidden; }
    .glow { position: absolute; top: -60%; right: -12%; width: 70%; height: 220%;
      background: radial-gradient(ellipse at center, rgba(41,118,214,.45), transparent 65%);
      filter: blur(60px); }
    .inner { position: relative; height: 100%; padding: 76px 84px;
      display: flex; flex-direction: column; justify-content: space-between; }
    .brand { display: flex; align-items: center; gap: 16px; font-weight: 700;
      font-size: 34px; letter-spacing: -0.02em; }
    .mark { width: 54px; height: 54px; border-radius: 12px; background: #fff; color: ${NAVY};
      display: flex; align-items: center; justify-content: center; font-size: 38px;
      letter-spacing: -0.04em; }
    .mark span { margin-top: -3px; }
    .tld { color: rgba(255,255,255,.55); }
    h1 { font-size: 62px; line-height: 1.1; letter-spacing: -0.025em; font-weight: 800;
      max-width: 960px; }
    .foot { display: flex; justify-content: space-between; align-items: center;
      font-size: 24px; font-weight: 500; color: rgba(255,255,255,.66); }
    .foot b { color: #fff; font-weight: 500; }
    .rule { width: 64px; height: 4px; background: ${BLUE}; border-radius: 2px; margin-bottom: 28px; }
  </style></head><body><div class="glow"></div><div class="inner">
    <div class="brand"><div class="mark"><span>m</span></div><div>matchmaker<span class="tld">.hr</span></div></div>
    <div><div class="rule"></div><h1>${escape(headline)}</h1></div>
    <div class="foot"><span>Recruiting-Automatisierung für Personalberater</span><b>matchmaker-hr.de</b></div>
  </div></body></html>`
}

const logoHtml = `<!doctype html><html><head><meta charset="utf-8">${FONT}<style>
  * { margin: 0; }
  body { width: 512px; height: 512px; background: ${NAVY}; color: #fff; font-family: Inter, sans-serif;
    display: flex; align-items: center; justify-content: center; }
  span { font-size: 360px; font-weight: 700; letter-spacing: -0.04em; margin-top: -40px; }
</style></head><body><span>m</span></body></html>`

async function shoot(browser, html, width, height, file) {
  const page = await browser.newPage()
  await page.setViewport({ width, height, deviceScaleFactor: 1 })
  await page.setContent(html, { waitUntil: 'networkidle0' })
  await page.evaluate(() => document.fonts.ready)
  await page.screenshot({ path: file, type: 'png' })
  await page.close()
  console.log('geschrieben:', path.relative(process.cwd(), file))
}

;(async () => {
  fs.mkdirSync(path.join(PUBLIC, 'og'), { recursive: true })
  const browser = await puppeteer.launch({ headless: true })
  try {
    for (const p of pages.filter(p => p.ogImage)) {
      await shoot(browser, ogHtml(p.ogHeadline), 1200, 630, path.join(PUBLIC, 'og', `${p.ogImage}.png`))
    }
    await shoot(browser, logoHtml, 512, 512, path.join(PUBLIC, 'logo.png'))
  } finally {
    await browser.close()
  }
})()
