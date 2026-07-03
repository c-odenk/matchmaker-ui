<template>
  <section class="sec bg-white" id="agenten">
    <div class="wrap">
      <SectionHeading eyebrow="So arbeitet matchmaker.hr">
        Vier spezialisierte <span class="text-blue">Agenten</span> – ein Berater, der entscheidet.
        <template #lead>Jeder wiederkehrende Schritt im Vermittlungsprozess läuft automatisch zu. Die KI bereitet vor, der Berater gibt frei.</template>
      </SectionHeading>

      <div class="steps grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(235px,1fr))] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="s in steps" :key="s.agent" class="step relative bg-white border border-line rounded-2xl p-6">
          <div class="w-9 h-9 rounded-[10px] bg-navy text-white flex items-center justify-center font-bold mb-[15px]">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="s.icon"/></svg>
          </div>
          <div class="text-[.72rem] font-bold tracking-[0.04em] uppercase text-blue mb-[5px]">{{ s.agent }}</div>
          <h3 class="text-[1.02rem] font-bold tracking-[-0.01em] mb-2">{{ s.title }}</h3>
          <p class="text-[.88rem] text-body">{{ s.text }}</p>
        </div>
      </div>

      <!-- Smartphone: vertikal & zentriert gestapelt -->
      <div class="hil mt-[18px] flex items-center gap-[14px] bg-navy text-white rounded-2xl px-6 py-5 flex-wrap max-[560px]:flex-col max-[560px]:text-center max-[560px]:gap-3">
        <div class="w-[42px] h-[42px] rounded-xl bg-blue/20 border border-blue/[0.35] flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7db8f0" stroke-width="1.9"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.96 11.96 0 013.6 6 12 12 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z"/></svg>
        </div>
        <div class="text-[.92rem] text-white/[0.78] flex-1 min-w-[240px] max-[560px]:min-w-0"><b class="font-bold text-white">Human-in-the-Loop.</b> Von der Marktanalyse bis zum fertigen Anschreiben automatisiert die KI jeden Schritt. Erst das tatsächliche Versenden gibt der Berater frei – so bleibt die Kontrolle bei Ihnen.</div>
        <span class="inline-flex items-center gap-[6px] text-[.72rem] font-semibold px-[10px] py-1 rounded-full bg-green/[0.18] text-[#7ee2a8]">Sie behalten die Kontrolle</span>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'AgentsSection',
  components: { SectionHeading },
  data() {
    return {
      steps: [
        { agent: 'Profiling Agent', title: 'Bedarfsanalyse & Profiling', text: 'Strukturierte Erfassung des Suchauftrags – daraus entsteht ein präzises Qualifikationsprofil und Suchkriterien für alle Agenten.', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
        { agent: 'Market Agent', title: 'Vakanzidentifikation', text: 'Kontinuierliches Scanning von Jobboards und Unternehmenswebsites – neue Vakanzen werden mit dem Kandidatenpool abgeglichen.', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z' },
        { agent: 'Matching Agent', title: 'Intelligentes Scoring', text: 'Semantisches Scoring auf Basis von Qualifikation und Karriereverlauf – mit nachvollziehbarer Begründung je Empfehlung.', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 7.5l1.035-.259a3.375 3.375 0 002.456-2.455l.259-1.036.259 1.035a3.375 3.375 0 002.455 2.456L21.75 7.5l-1.035.259a3.375 3.375 0 00-2.456 2.455z' },
        { agent: 'Outreach Agent', title: 'Kontaktierung', text: 'Automatische Recherche des Ansprechpartners und ein individualisiertes Anschreiben – bereitgestellt zur Freigabe per Klick.', icon: 'M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.77 59.77 0 013.27 20.875L5.999 12zm0 0h7.5' }
      ]
    }
  }
}
</script>
