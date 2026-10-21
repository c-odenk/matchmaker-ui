const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer')
const { SITE_URL, pages, notFound } = require('./src/config/pages')

// Ausgabedatei je Route. Flache Dateien (agenten.html statt
// agenten/index.html): Netlify liefert /agenten dann direkt mit 200 aus.
// Bei Ordnern leitet es /agenten erst per 301 auf /agenten/ um – und das
// widerspricht Canonical, Sitemap und allen internen Links.
function outputPathFor(route) {
  if (route === '/') return 'index.html'
  return route.slice(1) + '.html'
}

// Sitemap aus derselben Seitenliste wie Router und Prerendering, damit keine
// Seite in einer der drei Listen fehlt.
class SitemapPlugin {
  apply(compiler) {
    const { RawSource } = compiler.webpack.sources
    compiler.hooks.thisCompilation.tap('SitemapPlugin', (compilation) => {
      compilation.hooks.processAssets.tap(
        { name: 'SitemapPlugin', stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL },
        () => {
          const urls = pages.map(p => [
            '  <url>',
            `    <loc>${SITE_URL}${p.path}</loc>`,
            `    <lastmod>${p.lastmod}</lastmod>`,
            `    <changefreq>${p.changefreq}</changefreq>`,
            `    <priority>${p.priority}</priority>`,
            '  </url>'
          ].join('\n'))
          const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
            urls.join('\n') + '\n</urlset>\n'
          compilation.emitAsset('sitemap.xml', new RawSource(xml))
        }
      )
    })
  }
}

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    // Prerendering nur im Produktions-Build: erzeugt statisches HTML pro Route,
    // damit Crawler/Social-Bots Inhalte ohne JS sehen.
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new SitemapPlugin())
      config.plugins.push(
        new PrerendererWebpackPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [...pages.map(p => p.path), notFound.path],
          postProcess(renderedRoute) {
            renderedRoute.outputPath = outputPathFor(renderedRoute.route)
          },
          renderer: new PuppeteerRenderer({
            renderAfterDocumentEvent: 'render-event',
            headless: true,
            maxConcurrentRoutes: 1,
            launchOptions: {
              args: ['--no-sandbox', '--disable-setuid-sandbox']
            }
          })
        })
      )
    }
  }
})
