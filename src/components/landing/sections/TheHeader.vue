<template>
  <header class="sticky top-0 z-50 bg-white">
    <div class="wrap">
      <div class="flex items-center justify-between gap-[18px] h-[74px] max-[880px]:h-16">
        <!-- Marke -->
        <router-link to="/" @click="goHome" class="flex items-center gap-[10px] font-bold text-[1.08rem] tracking-[-0.02em] text-ink cursor-pointer">
          <span class="w-[30px] h-[30px] rounded-lg bg-navy flex items-center justify-center text-white">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9.8 15.9L9 18.75l-.81-2.85a4.5 4.5 0 00-3.09-3.09L2.25 12l2.85-.81a4.5 4.5 0 003.09-3.09L9 5.25l.81 2.85a4.5 4.5 0 003.09 3.09L15.75 12l-2.85.81a4.5 4.5 0 00-3.09 3.09z"/></svg>
          </span>
          <span>matchmaker<span class="text-navy">.</span>hr</span>
        </router-link>

        <!-- Desktop-Navigation -->
        <nav class="flex gap-[30px] text-[1.02rem] font-medium text-navy max-[880px]:hidden">
          <a v-for="l in links" :key="l.id" :href="'/#' + l.id" @click.prevent="go(l.id)" class="inline-flex items-center gap-[7px] cursor-pointer hover:text-blue">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="l.icon"/></svg>{{ l.label }}
          </a>
        </nav>

        <div class="flex items-center gap-[14px] max-[880px]:hidden">
          <button type="button" class="inline-flex items-center gap-[7px] font-sans text-[.95rem] font-medium text-[#334155] bg-transparent border-0 p-0 cursor-pointer hover:text-blue" @click="openDemo">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>Demo vereinbaren
          </button>
          <BaseButton variant="primary" :href="loginUrl" class="min-w-[178px]">Anmelden →</BaseButton>
        </div>

        <!-- Mobile-Toggle -->
        <button class="hidden max-[880px]:inline-flex w-[42px] h-[42px] items-center justify-center border border-line rounded-[10px] bg-white cursor-pointer shrink-0" :aria-expanded="menuOpen ? 'true' : 'false'" aria-label="Menü" @click="menuOpen = !menuOpen">
          <span class="nav-burger" :class="{ x: menuOpen }"><i></i><i></i><i></i></span>
        </button>
      </div>
    </div>

    <!-- Mobiles Menü: im Dokumentfluss, klappt auf und schiebt den Seiteninhalt nach unten -->
    <div class="mnav-wrap hidden max-[880px]:grid" :class="{ open: menuOpen }">
      <div class="min-h-0 overflow-hidden">
        <nav class="mnav-panel flex flex-col bg-white border-t border-line pt-3 px-6 pb-5">
          <a v-for="l in links" :key="l.id" :href="'/#' + l.id" @click.prevent="go(l.id)" class="py-[13px] px-2 text-[1.04rem] font-medium text-navy rounded-[9px] cursor-pointer">{{ l.label }}</a>
          <div class="flex flex-col gap-[10px] mt-[10px] pt-[14px] border-t border-line">
            <BaseButton variant="ghost" class="w-full !h-12" @click="openDemo">Demo vereinbaren</BaseButton>
            <BaseButton variant="primary" :href="loginUrl" class="w-full !h-12">Anmelden →</BaseButton>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import { openDemoModal } from '@/composables/demoModal'

export default {
  name: 'TheHeader',
  components: { BaseButton },
  data() {
    return {
      loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#',
      menuOpen: false,
      links: [
        { id: 'hero', label: 'Home', icon: 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25' },
        { id: 'agenten', label: 'Produkt', icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9' },
        { id: 'preise', label: 'Preise', icon: 'M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z' }
      ]
    }
  },
  methods: {
    goHome() {
      this.menuOpen = false
      if (this.$route.path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    go(id) {
      this.menuOpen = false
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

/* Aufklappen des mobilen Menüs: animierte Grid-Zeile (0fr → 1fr),
   damit der Seiteninhalt mitgeschoben wird statt überlagert.
   Kurze Dauer + Ease-Out, damit die Layout-Animation knackig wirkt;
   der Panel-Inhalt fadet synchron ein statt „scheibchenweise" aufzutauchen. */
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
</style>
