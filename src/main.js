import { createApp, nextTick } from 'vue'
import App from './App.vue'
import router from './router'
// Inter liegt selbst gehostet im Build (/fonts/…) – kein Abruf bei Google,
// also keine IP-Übermittlung ohne Einwilligung (LG München I, 3 O 17493/20).
// Nur der lateinische Zeichensatz: deckt Deutsch samt „“, – und € ab.
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css'
import '@fontsource/inter/latin-800.css'
import './main.css'
import './styles/landing.css'

const app = createApp(App).use(router)

// Erst mounten, wenn der Router bereit ist (lädt die async Route-Komponente),
// danach 'render-event' auslösen – das Signal für den Prerenderer.
router.isReady().then(() => {
  app.mount('#app')
  nextTick(() => document.dispatchEvent(new Event('render-event')))
})
