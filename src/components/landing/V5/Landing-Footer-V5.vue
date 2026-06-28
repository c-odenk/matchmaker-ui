<template>
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="brand"><span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.8 15.9L9 18.75l-.81-2.85a4.5 4.5 0 00-3.09-3.09L2.25 12l2.85-.81a4.5 4.5 0 003.09-3.09L9 5.25l.81 2.85a4.5 4.5 0 003.09 3.09L15.75 12l-2.85.81a4.5 4.5 0 00-3.09 3.09z"/></svg></span>matchmaker.hr</div>
          <p class="tag">Ihr Partner für effizientes Talentpool-Management.</p>
        </div>
        <div><h3>Navigation</h3><ul><li><a href="/#hero" @click.prevent="go('hero')">Start</a></li><li><a href="/#agenten" @click.prevent="go('agenten')">Produkt</a></li><li><a href="/#preise" @click.prevent="go('preise')">Preise</a></li><li><button type="button" class="foot-link" @click="openDemo">Kontakt</button></li></ul></div>
        <div><h3>Rechtliches</h3><ul><li><router-link to="/privacy">Datenschutz</router-link></li><li><router-link to="/imprint">Impressum</router-link></li><li><router-link to="/terms">AGB</router-link></li></ul></div>
        <div><h3>Kontakt</h3><ul><li><a href="mailto:info@matchmaker.hr">Email: info@matchmaker.hr</a></li></ul></div>
      </div>
      <div class="foot-bottom" style="justify-content:center">
        <span>© {{ year }} matchmaker.hr. Alle Rechte vorbehalten.</span>
      </div>
    </div>
  </footer>
</template>

<script>
import { openDemoModal } from '@/components/landing/V5/demo-modal-store'

export default {
  name: 'LandingFooterV5',
  data() {
    return { year: new Date().getFullYear() }
  },
  methods: {
    go(id) {
      // Auf der Landingpage direkt scrollen, sonst zur Startseite + Anker navigieren.
      if (this.$route.path === '/') {
        const el = document.getElementById(id)
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
      }
      this.$router.push({ path: '/', hash: '#' + id })
    },
    openDemo() { openDemoModal() }
  }
}
</script>
