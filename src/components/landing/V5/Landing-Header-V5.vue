<template>
  <header>
    <div class="wrap">
      <div class="navpill">
        <div class="brand">
          <span class="mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.8 15.9L9 18.75l-.81-2.85a4.5 4.5 0 00-3.09-3.09L2.25 12l2.85-.81a4.5 4.5 0 003.09-3.09L9 5.25l.81 2.85a4.5 4.5 0 003.09 3.09L15.75 12l-2.85.81a4.5 4.5 0 00-3.09 3.09z"/></svg></span>
          <span>matchmaker<span style="color:var(--navy)">.</span>hr</span>
        </div>
        <nav class="nav-links">
          <a @click="go('hero')"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>Home</a>
          <a @click="go('agenten')"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>Produkt</a>
          <a @click="go('preise')"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/></svg>Preise</a>
        </nav>
        <div class="nav-right">
          <a href="#" class="nav-demo" @click.prevent="openDemo"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>Demo vereinbaren</a>
          <a class="btn btn-primary" :href="loginUrl">Anmelden →</a>
        </div>
        <button class="nav-toggle" :aria-expanded="menuOpen ? 'true' : 'false'" aria-label="Menü" @click="menuOpen = !menuOpen">
          <span class="nav-burger" :class="{ x: menuOpen }"><i></i><i></i><i></i></span>
        </button>
      </div>
    </div>

    <!-- Mobiles Menü -->
    <transition name="mnav">
      <nav class="mobile-nav" v-show="menuOpen">
        <a @click="go('hero')">Home</a>
        <a @click="go('agenten')">Produkt</a>
        <a @click="go('preise')">Preise</a>
        <div class="mobile-nav-actions">
          <a href="#" class="btn btn-ghost" @click.prevent="openDemo">Demo vereinbaren</a>
          <a class="btn btn-primary" :href="loginUrl">Anmelden →</a>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script>
import { openDemoModal } from '@/components/landing/V5/demo-modal-store'

export default {
  name: 'LandingHeaderV5',
  data() {
    return { loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#', menuOpen: false }
  },
  methods: {
    go(id) {
      this.menuOpen = false
      // Auf der Landingpage direkt scrollen; von einer Unterseite zurück zur
      // Startseite navigieren (der Router scrollt per scrollBehavior zum Anker).
      if (this.$route.path === '/') {
        const el = document.getElementById(id)
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
      }
      this.$router.push({ path: '/', hash: '#' + id })
    },
    openDemo() {
      this.menuOpen = false
      openDemoModal()
    }
  }
}
</script>
