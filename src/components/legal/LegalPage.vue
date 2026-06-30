<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeader />
    <main>
      <!-- Titel-Band (Navy + Glow, wie Hero/CTA) -->
      <section class="relative overflow-hidden bg-navy text-white pt-[46px] pb-10 max-[560px]:pt-[34px] max-[560px]:pb-7">
        <span class="absolute top-[-70%] right-[-6%] w-[46%] h-[240%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.4),transparent_65%)] blur-[55px] pointer-events-none" aria-hidden="true"></span>
        <div class="wrap relative z-[1]">
          <router-link to="/" class="inline-flex items-center gap-[7px] text-[.85rem] font-medium text-white/[0.66] mb-5 transition-colors hover:text-white">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
            Zurück zur Startseite
          </router-link>
          <h1 class="text-legal-h1">{{ title }}</h1>
        </div>
      </section>

      <!-- Inhalt -->
      <section class="sec">
        <div class="wrap">
          <div class="legal-content max-w-[760px]">
            <slot />
          </div>
        </div>
      </section>
    </main>
    <TheFooter />
    <DemoModal />
  </div>
</template>

<script>
import TheHeader from '@/components/landing/sections/TheHeader.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'
import DemoModal from '@/components/landing/sections/DemoModal.vue'

export default {
  name: 'LegalPage',
  components: { TheHeader, TheFooter, DemoModal },
  props: {
    title: { type: String, required: true }
  }
}
</script>

<style scoped>
/* Typografie des über den Slot eingefügten Rechtstextes (:deep, da Slot-Inhalt
   den Scope der jeweiligen View trägt). */
.legal-content :deep(> :first-child) { margin-top: 0; }
.legal-content :deep(h2) { font-size: 1.16rem; font-weight: 700; color: #172b4d; margin: 32px 0 10px; letter-spacing: -.01em; }
.legal-content :deep(h3) { font-size: 1rem; font-weight: 700; color: #0f172a; margin: 22px 0 8px; }
.legal-content :deep(p) { font-size: .95rem; color: #475569; line-height: 1.7; margin: 0 0 14px; }
.legal-content :deep(address) { font-style: normal; font-size: .95rem; color: #475569; line-height: 1.7; margin: 0 0 14px; }
.legal-content :deep(a) { color: #2976d6; text-decoration: underline; text-underline-offset: 2px; word-break: break-word; }
.legal-content :deep(a:hover) { color: #2065bd; }
.legal-content :deep(ul), .legal-content :deep(ol) { margin: 0 0 14px; padding-left: 20px; display: flex; flex-direction: column; gap: 7px; }
.legal-content :deep(li) { font-size: .95rem; color: #475569; line-height: 1.6; }
.legal-content :deep(strong), .legal-content :deep(b) { color: #0f172a; font-weight: 700; }
@media (max-width: 560px) {
  .legal-content :deep(h2) { font-size: 1.08rem; }
}
</style>
