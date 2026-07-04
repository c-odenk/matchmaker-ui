<template>
  <section class="sec bg-white pt-2">
    <div class="wrap">
      <div class="cta-band relative overflow-hidden bg-navy text-white rounded-3xl p-[54px] max-[880px]:px-8 max-[880px]:py-10 max-[560px]:px-[22px] max-[560px]:py-8">
        <div class="absolute top-[-60%] right-[-8%] w-1/2 h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.38),transparent_65%)] blur-[55px] pointer-events-none"></div>
        <!-- ≤880px: zentriert und volle Breite, analog zur Hero -->
        <div class="relative z-[2] flex items-center justify-between gap-10 flex-wrap max-[880px]:flex-col max-[880px]:items-center max-[880px]:gap-[22px] max-[880px]:text-center">
          <div>
            <h2 class="text-section text-white max-w-[560px] max-[880px]:max-w-none !text-[clamp(1.25rem,1rem+0.9vw,1.55rem)]">Wie viele Stunden kostet Sie manuelles Sourcing – Woche für Woche?</h2>
            <p class="text-white/[0.78] mt-3 max-w-[520px] text-[.95rem] max-[880px]:max-w-none">matchmaker.hr automatisiert die wiederkehrende Recherche bis zum fertigen Anschreiben. Lassen Sie es sich in 15 Minuten zeigen – oder starten Sie direkt.</p>
          </div>
          <div class="flex gap-3 flex-wrap max-[880px]:justify-center max-[560px]:flex-col max-[560px]:w-full">
            <BaseButton variant="blue" :href="loginUrl" class="max-[560px]:w-full">Jetzt anmelden →</BaseButton>
            <BaseButton variant="ghost-dark" class="max-[560px]:w-full" @click="openDemo">Demo vereinbaren</BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import { openDemoModal } from '@/composables/demoModal'

export default {
  name: 'CtaSection',
  components: { BaseButton },
  data() {
    return { loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#' }
  },
  methods: {
    openDemo() { openDemoModal() }
  }
}
</script>
