<template>
  <div class="lp5">
    <LandingHeader />
    <main>
      <!-- Titel-Band (Navy + Glow, wie Hero/CTA) -->
      <section class="legal-head">
        <span class="legal-head-glow" aria-hidden="true"></span>
        <div class="wrap">
          <router-link to="/" class="legal-back">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
            Zurück zur Startseite
          </router-link>
          <h1>{{ title }}</h1>
        </div>
      </section>

      <!-- Inhalt -->
      <section class="sec">
        <div class="wrap">
          <div class="legal-content">
            <slot />
          </div>
        </div>
      </section>
    </main>
    <LandingFooter />
    <LandingDemoModal />
  </div>
</template>

<script>
import LandingHeader from '@/components/landing/V5/Landing-Header-V5.vue'
import LandingFooter from '@/components/landing/V5/Landing-Footer-V5.vue'
import LandingDemoModal from '@/components/landing/V5/Landing-DemoModal-V5.vue'

export default {
  name: 'LegalPage',
  components: { LandingHeader, LandingFooter, LandingDemoModal },
  props: {
    title: { type: String, required: true }
  }
}
</script>

<!-- Stellt sicher, dass das V5-Stylesheet auch beim Direktaufruf einer
     Rechtsseite (Deep-Link) geladen ist – nicht nur über die Landingpage. -->
<style src="../landing/V5/landing-v5.css"></style>
