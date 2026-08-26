<template>
  <!-- ENTWURF: Umformuliert von Kosten-/Entlastungslogik auf Auftragsgewinnung
       („Wer geht nach draußen?" – Systementwurf S. 2). -->
  <section class="sec bg-white !pt-2">
    <div class="wrap">
      <div class="cta-band relative overflow-hidden bg-navy text-white rounded-3xl p-[54px] max-[880px]:px-8 max-[880px]:py-10 max-[560px]:px-[22px] max-[560px]:py-8">
        <div class="absolute top-[-60%] right-[-8%] w-1/2 h-[200%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.38),transparent_65%)] blur-[55px] pointer-events-none"></div>
        <div class="relative z-[2] flex items-center justify-between gap-10 flex-wrap max-[880px]:flex-col max-[880px]:items-center max-[880px]:gap-[22px] max-[880px]:text-center">
          <div>
            <h2 class="text-section text-white max-w-[560px] max-[880px]:max-w-none !text-[clamp(1.25rem,1rem+0.9vw,1.55rem)]">Wie viele passende Vakanzen für Ihre Kandidaten sehen Sie gerade nicht?</h2>
            <p class="text-white/[0.78] mt-3 max-w-[520px] text-[.95rem] max-[880px]:max-w-none">matchmaker durchsucht nachts den Markt, recherchiert die suchende Firma und legt Ihnen das Anschreiben fertig vor. Lassen Sie es sich in 15 Minuten zeigen – oder starten Sie direkt.</p>
          </div>
          <div class="flex gap-3 flex-wrap max-[880px]:justify-center max-[560px]:flex-col max-[560px]:w-full">
            <BaseButtonDraft variant="blue" :href="loginUrl" class="max-[560px]:w-full">Jetzt anmelden →</BaseButtonDraft>
            <BaseButtonDraft variant="ghost-dark" class="max-[560px]:w-full" to="/entwurf/kontakt">Demo vereinbaren</BaseButtonDraft>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButtonDraft from '@/components/landing-draft/ui/BaseButtonDraft.vue'

export default {
  name: 'CtaSectionDraft',
  components: { BaseButtonDraft },
  data() {
    return { loginUrl: process.env.VUE_APP_DASHBOARD_URL || '#' }
  }
}
</script>
