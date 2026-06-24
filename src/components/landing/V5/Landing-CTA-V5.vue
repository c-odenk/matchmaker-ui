<template>
  <section class="sec" style="background:#fff;padding-top:8px">
    <div class="wrap">
      <div class="cta-band">
        <div class="glow"></div>
        <div class="cta-inner">
          <div>
            <h2 style="color:#fff">Wie viele Stunden kostet Sie manuelles Sourcing – Woche für Woche?</h2>
            <p>matchmaker.hr automatisiert die wiederkehrende Recherche bis zum fertigen Anschreiben. Lassen Sie es sich in 15 Minuten zeigen – oder starten Sie direkt.</p>
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn btn-blue" :href="loginUrl">Jetzt anmelden →</a>
            <a class="btn btn-ghost-dark" href="#" @click.prevent="openDemo">Demo vereinbaren</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { openDemoModal } from '@/components/landing/V5/demo-modal-store'

export default {
  name: 'LandingCtaV5',
  data() {
    return { loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#' }
  },
  methods: {
    openDemo() { openDemoModal() }
  }
}
</script>
