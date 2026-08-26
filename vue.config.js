const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')
const PuppeteerRenderer = require('@prerenderer/renderer-puppeteer')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: (config) => {
    // Prerendering nur im Produktions-Build: erzeugt statisches HTML pro Route,
    // damit Crawler/Social-Bots Inhalte ohne JS sehen.
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new PrerendererWebpackPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/', '/integration', '/daten', '/agenten', '/automatisierungen',
            '/ki-assistent', '/preise', '/kontakt',
            '/imprint', '/privacy', '/terms'
          ],
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
