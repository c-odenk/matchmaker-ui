<template>
  <!-- ENTWURF: Navigation auf die neue Positionierung umgestellt.
       matchmaker = Adapter auf vorhandene Systeme → „Plattform" bündelt
       Integration, Daten, Multi-Agentensystem und Automatisierungen. -->
  <div class="bg-navy text-white/85 text-[.72rem] text-center py-[6px] px-4">
    Textfassung 2.0 – Entwurf zum Gegenlesen. Nicht indexiert, die veröffentlichte Seite ist unverändert.
  </div>
  <header class="sticky top-0 z-50 bg-white" @keydown.esc="closeAll">
    <div class="wrap">
      <div class="flex items-center justify-between gap-[18px] h-[74px] max-[880px]:h-16">
        <!-- Marke -->
        <router-link to="/entwurf-v2" @click="goHome" class="flex items-center gap-[10px] font-bold text-[1.08rem] tracking-[-0.02em] text-ink cursor-pointer shrink-0">
          <span class="w-[30px] h-[30px] rounded-lg bg-navy flex items-center justify-center text-white">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.8 15.9L9 18.75l-.81-2.85a4.5 4.5 0 00-3.09-3.09L2.25 12l2.85-.81a4.5 4.5 0 003.09-3.09L9 5.25l.81 2.85a4.5 4.5 0 003.09 3.09L15.75 12l-2.85.81a4.5 4.5 0 00-3.09 3.09z"/></svg>
          </span>
          <span>matchmaker<span class="text-navy">.</span>hr</span>
        </router-link>

        <!-- Desktop-Navigation -->
        <nav class="flex items-center gap-[30px] text-[1.02rem] font-medium text-navy max-[880px]:hidden">
          <a href="/entwurf-v2" @click.prevent="goHome" class="inline-flex items-center gap-[7px] cursor-pointer hover:text-blue">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="icons.home"/></svg>Home
          </a>

          <!-- Plattform mit Dropdown -->
          <div class="relative" @mouseenter="openMenu" @mouseleave="closeMenu" @focusout="onFocusOut">
            <button
              type="button"
              class="inline-flex items-center gap-[7px] font-sans text-[1.02rem] font-medium bg-transparent border-0 p-0 cursor-pointer transition-colors duration-150"
              :class="platformOpen ? 'text-blue' : 'text-navy hover:text-blue'"
              aria-haspopup="true"
              :aria-expanded="platformOpen ? 'true' : 'false'"
              @click="openMenu"
              @focus="openMenu"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="icons.platform"/></svg>
              Plattform
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-200" :class="{ 'rotate-180': platformOpen }"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
            </button>

            <!-- Panel: bewusst schlank – feine Border, weiches Licht, kein Farbblock -->
            <div class="absolute left-0 top-full pt-[14px]" :class="platformOpen ? 'block' : 'hidden'">
              <div class="w-[330px] bg-white border border-line rounded-2xl shadow-mobile-nav p-[10px]">
                <component
                  :is="p.to ? 'router-link' : 'a'"
                  v-for="p in platform" :key="p.label"
                  v-bind="p.to ? { to: p.to } : { href: '/#' + p.id }"
                  @click="p.to ? closeAll() : goAnchor($event, p.id)"
                  class="flex items-start gap-[13px] px-[13px] py-[11px] rounded-xl cursor-pointer transition-colors duration-150 hover:bg-surface group"
                >
                  <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] bg-navy/[0.06] text-navy flex items-center justify-center transition-colors duration-150 group-hover:bg-navy group-hover:text-white">
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="p.icon"/></svg>
                  </span>
                  <span class="min-w-0">
                    <span class="flex items-center gap-[7px]">
                      <span class="text-[.92rem] font-semibold text-ink leading-tight">{{ p.label }}</span>
                      <span v-if="p.badge" class="inline-flex items-center text-[.64rem] font-bold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-full bg-blue-soft text-blue shrink-0">{{ p.badge }}</span>
                    </span>
                    <span class="block text-[.78rem] text-muted leading-[1.45] mt-[3px]">{{ p.hint }}</span>
                  </span>
                </component>
              </div>
            </div>
          </div>

          <router-link to="/entwurf-v2/preise" @click="closeAll" class="inline-flex items-center gap-[7px] cursor-pointer hover:text-blue" :class="{ 'text-blue': $route.path === '/preise' }">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="icons.price"/></svg>Preise
          </router-link>
        </nav>

        <div class="flex items-center gap-[14px] max-[880px]:hidden">
          <router-link to="/entwurf-v2/kontakt" @click="closeAll" class="inline-flex items-center gap-[7px] text-[.95rem] font-medium text-body cursor-pointer hover:text-blue max-[959px]:hidden">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>Demo vereinbaren
          </router-link>
          <BaseButtonDraft variant="primary" :href="loginUrl" class="!h-[40px] !px-[28px] !text-[.92rem] !rounded-[10px]">Zum Login</BaseButtonDraft>
        </div>

        <!-- Mobile-Toggle -->
        <button class="hidden max-[880px]:inline-flex w-[42px] h-[42px] items-center justify-center border border-line rounded-[10px] bg-white cursor-pointer shrink-0" :aria-expanded="menuOpen ? 'true' : 'false'" aria-label="Menü" @click="toggleMobile">
          <span class="nav-burger" :class="{ x: menuOpen }"><i></i><i></i><i></i></span>
        </button>
      </div>
    </div>

    <!-- Mobiles Menü -->
    <div class="mnav-wrap hidden max-[880px]:grid" :class="{ open: menuOpen }">
      <div class="min-h-0 overflow-hidden">
        <nav class="mnav-panel flex flex-col bg-white border-t border-line pt-3 px-6 pb-5">
          <a href="/entwurf-v2" @click.prevent="goHome" class="py-[13px] px-2 text-[1.05rem] font-medium text-navy rounded-[9px] cursor-pointer">Home</a>

          <!-- Plattform: klappt die vier Unterpunkte auf -->
          <button
            type="button"
            class="flex items-center justify-between gap-2 py-[13px] px-2 font-sans text-[1.05rem] font-medium text-navy bg-transparent border-0 rounded-[9px] cursor-pointer text-left"
            :aria-expanded="mobilePlatformOpen ? 'true' : 'false'"
            @click="mobilePlatformOpen = !mobilePlatformOpen"
          >
            Plattform
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-200 text-muted" :class="{ 'rotate-180': mobilePlatformOpen }"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
          </button>
          <div class="msub-wrap grid" :class="{ open: mobilePlatformOpen }">
            <div class="min-h-0 overflow-hidden">
              <div class="ml-2 pl-[14px] border-l border-line flex flex-col">
                <component
                  :is="p.to ? 'router-link' : 'a'"
                  v-for="p in platform" :key="p.label"
                  v-bind="p.to ? { to: p.to } : { href: '/#' + p.id }"
                  @click="p.to ? closeAll() : goAnchor($event, p.id)"
                  class="flex items-center gap-[11px] py-[11px] px-2 rounded-[9px] cursor-pointer"
                >
                  <span class="w-[30px] h-[30px] shrink-0 rounded-[9px] bg-navy/[0.06] text-navy flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="p.icon"/></svg>
                  </span>
                  <span class="flex items-center gap-[7px] min-w-0">
                    <span class="text-[.96rem] font-medium text-navy">{{ p.label }}</span>
                    <span v-if="p.badge" class="inline-flex items-center text-[.64rem] font-bold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-full bg-blue-soft text-blue shrink-0">{{ p.badge }}</span>
                  </span>
                </component>
              </div>
            </div>
          </div>

          <router-link to="/entwurf-v2/preise" @click="closeAll" class="py-[13px] px-2 text-[1.05rem] font-medium text-navy rounded-[9px] cursor-pointer">Preise</router-link>

          <div class="flex flex-col gap-[10px] mt-[10px] pt-[14px] border-t border-line">
            <BaseButtonDraft variant="ghost" to="/entwurf-v2/kontakt" class="w-full !h-12" @click="closeAll">Demo vereinbaren</BaseButtonDraft>
            <BaseButtonDraft variant="primary" :href="loginUrl" class="w-full !h-12">Zum Login</BaseButtonDraft>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import BaseButtonDraft from '@/components/landing-draft-v2/ui/BaseButtonDraft.vue'

export default {
  name: 'TheHeaderDraft',
  components: { BaseButtonDraft },
  data() {
    return {
      loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#',
      menuOpen: false,
      platformOpen: false,
      mobilePlatformOpen: false,
      icons: {
        home: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25',
        platform: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
        price: 'M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z'
      },
      // Die vier Bausteine der Plattform – in der Reihenfolge des Adapter-Gedankens:
      // erst anbinden, dann Daten, dann die Agenten, dann das, was daraus läuft.
      platform: [
        { to: '/entwurf-v2/integration', label: 'Integration', hint: 'Aufgesetzt auf Ihre bestehenden Systeme – nichts wird ersetzt.', icon: 'M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' },
        { to: '/entwurf-v2/daten', label: 'Daten', hint: 'Wo sie liegen, was verarbeitet wird, was protokolliert bleibt.', icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75' },
        { to: '/entwurf-v2/agenten', label: 'Multi-Agentensystem', hint: 'Spezialisierte KI-Agenten, die jeden Schritt vorbereiten.', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 7.5l1.035-.259a3.375 3.375 0 002.456-2.455l.259-1.036.259 1.035a3.375 3.375 0 002.455 2.456L21.75 7.5l-1.035.259a3.375 3.375 0 00-2.456 2.455z' },
        { to: '/entwurf-v2/automatisierungen', label: 'Automatisierungen', hint: 'Was von allein läuft – und was auf Klick passiert.', icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z' },
        { to: '/entwurf-v2/ki-assistent', label: 'KI-Assistent', badge: 'Beta', hint: 'Der Pool als Karte, dazu Fragen und Aufträge im Satz.', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z' },
      ]
    }
  },
  mounted() {
    document.addEventListener('click', this.onDocClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.onDocClick)
  },
  methods: {
    onDocClick(e) {
      if (this.platformOpen && !this.$el.contains(e.target)) this.platformOpen = false
    },
    // Hover öffnet und schließt; ein Klick (bzw. Tastaturfokus) öffnet nur –
    // sonst würde der Klick das per Hover bereits offene Menü sofort wieder zuklappen.
    openMenu() { this.platformOpen = true },
    closeMenu() { this.platformOpen = false },
    onFocusOut(e) {
      if (!e.currentTarget.contains(e.relatedTarget)) this.platformOpen = false
    },
    closeAll() {
      this.platformOpen = false
      this.menuOpen = false
      this.mobilePlatformOpen = false
    },
    toggleMobile() {
      this.menuOpen = !this.menuOpen
      if (!this.menuOpen) this.mobilePlatformOpen = false
    },
    goHome() {
      this.closeAll()
      if (this.$route.path === '/entwurf-v2') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        this.$router.push('/entwurf-v2')
      }
    },
    goAnchor(e, id) {
      e.preventDefault()
      this.go(id)
    },
    go(id) {
      this.closeAll()
      if (this.$route.path === '/entwurf-v2') {
        const el = document.getElementById(id)
        if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
      }
      this.$router.push({ path: '/entwurf-v2', hash: '#' + id })
    },
  }
}
</script>

<style scoped>
/* Burger-Icon mit X-Animation */
.nav-burger { position: relative; width: 18px; height: 14px; }
.nav-burger i { position: absolute; left: 0; width: 100%; height: 2px; border-radius: 2px; background: #172b4d; transition: 0.25s ease; }
.nav-burger i:nth-child(1) { top: 0; }
.nav-burger i:nth-child(2) { top: 6px; }
.nav-burger i:nth-child(3) { top: 12px; }
.nav-burger.x i:nth-child(1) { top: 6px; transform: rotate(45deg); }
.nav-burger.x i:nth-child(2) { opacity: 0; }
.nav-burger.x i:nth-child(3) { top: 6px; transform: rotate(-45deg); }

/* Mobiles Menü: animierte Grid-Zeile (0fr → 1fr), schiebt den Inhalt nach unten */
.mnav-wrap {
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.22s cubic-bezier(0.33, 1, 0.68, 1);
}
.mnav-wrap.open { grid-template-rows: 1fr; }
.mnav-panel {
  opacity: 0;
  transform: translateY(-6px);
  transition: opacity 0.16s ease, transform 0.22s cubic-bezier(0.33, 1, 0.68, 1);
}
.mnav-wrap.open .mnav-panel { opacity: 1; transform: none; }

/* Untermenü „Plattform" im mobilen Menü – gleiche Mechanik, kürzere Dauer */
.msub-wrap {
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s cubic-bezier(0.33, 1, 0.68, 1);
}
.msub-wrap.open { grid-template-rows: 1fr; }
</style>
