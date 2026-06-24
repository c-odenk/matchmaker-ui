<template>
  <div>
    <section class="hero" id="hero">
      <div class="glow g1"></div>
      <div class="glow g2"></div>
      <div class="wrap hero-grid">
        <div class="hero-left">
          <span class="eyebrow on-dark"><span class="dot"></span>KI-gestütztes Talentpool-Management</span>
          <div class="rating" style="margin-left:5px;margin-top:14px"><span class="stars">★★★★★</span><span class="rt">Aus der Beratungspraxis empfohlen</span></div>
          <h1>Recruiting-Automatisierung, die <br> <span style="color:#5fa0ea">Ihrem Urteil</span> vertraut.</h1>
          <p class="lead">KI übernimmt die zeitintensiven Schritte – Marktanalyse, Matching und Anschreiben. Sie entscheiden - immer!</p>
          <div class="hero-cta">
            <a class="btn btn-blue" :href="loginUrl">Jetzt anmelden →</a>
            <a class="btn btn-ghost-dark" href="#" @click.prevent="openDemo">Demo vereinbaren</a>
          </div>
          <div class="hero-trust">
            <span><span class="ck"></span>DSGVO-konform</span>
            <span><span class="ck"></span>EU-Hosting</span>
            <span><span class="ck"></span>Human-in-the-Loop</span>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-photo">
            <div class="ph">
              <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.4"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
              <span>Platzhalter-Bild</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sources">
      <div class="wrap sources-row">
        <span class="lbl">Der Market Agent scannt kontinuierlich</span>
        <span class="src"><span class="srcmono">S</span>StepStone</span>
        <span class="src"><img src="https://cdn.simpleicons.org/indeed" alt="" width="17" height="17" @error="imgErr" />Indeed</span>
        <span class="src"><img src="https://api.iconify.design/simple-icons/linkedin.svg?color=%230A66C2" alt="" width="17" height="17" @error="imgErr" />LinkedIn</span>
        <span class="src"><img src="https://cdn.simpleicons.org/xing" alt="" width="17" height="17" @error="imgErr" />Xing</span>
        <span class="src"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"/></svg>Unternehmenswebsites</span>
      </div>
    </section>
  </div>
</template>

<script>
import { openDemoModal } from '@/components/landing/V5/demo-modal-store'

export default {
  name: 'LandingHeroV5',
  data() {
    return { loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#' }
  },
  methods: {
    imgErr(e) { e.target.style.display = 'none' },
    openDemo() { openDemoModal() }
  }
}
</script>
