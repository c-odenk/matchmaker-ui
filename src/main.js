import { createApp, nextTick } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'

const app = createApp(App).use(router)

// Erst mounten, wenn der Router bereit ist (lädt die async Route-Komponente),
// danach 'render-event' auslösen – das Signal für den Prerenderer.
router.isReady().then(() => {
  app.mount('#app')
  nextTick(() => document.dispatchEvent(new Event('render-event')))
})
