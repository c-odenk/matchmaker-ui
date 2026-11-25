<template>
  <!-- KAPITEL 2 · VORHER · NACHHER
       Vier Phasen statt sieben Zeilen – dieselben vier, die der Durchlauf
       darunter im Detail zeigt (Profil, Stellen, Ansprache, Entscheidung).
       Jede Karte trägt oben „heute" (gedämpft, durchgestrichen), unten
       „mit matchmaker" (kräftig). Die vierte Karte ist Navy: Sie ist die
       einzige, die beim Berater bleibt – und die einzige, die gewinnt.
       Jede Karte ist ein Subgrid über fünf gemeinsame Zeilen: Pfeil, „Mit
       matchmaker" und Fußzeile stehen in einer Reihe immer auf gleicher Höhe,
       egal wie die Texte umbrechen. -->
  <section class="sec bg-surface" id="ansatz">
    <div class="wrap">
      <SectionHeadingDraft eyebrow="Vorher · Nachher">
        Die Vorarbeit macht matchmaker. <span class="text-blue whitespace-nowrap">Das Urteil Sie.</span>
        <template #lead>Nachts, auf Ihren bestehenden Systemen. Morgens prüfen Sie und geben frei.</template>
      </SectionHeadingDraft>

      <ol class="ben-grid list-none grid grid-cols-4 gap-[14px] max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
        <li v-for="(p, i) in phasen" :key="p.titel"
            class="ben relative rounded-[10px] border overflow-hidden grid grid-rows-subgrid row-span-5 gap-y-0"
            :class="p.urteil ? 'bg-navy border-navy text-white' : 'bg-white border-line'">
          <div v-if="p.urteil" class="absolute top-[-40%] right-[-30%] w-[90%] h-[90%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.45),transparent_65%)] blur-[30px] pointer-events-none"></div>

          <!-- Kopf: Nummer und Phase -->
          <div class="relative flex items-center justify-between gap-3 px-6 pt-6">
            <span class="text-[1.05rem] font-bold tracking-[-0.01em]" :class="p.urteil ? 'text-white' : 'text-ink'">{{ p.titel }}</span>
            <span class="text-[.72rem] font-semibold tabular-nums" :class="p.urteil ? 'text-[#7db8f0]' : 'text-[#b6c2d3]'">{{ String(i + 1).padStart(2, '0') }}</span>
          </div>

          <!-- Heute -->
          <div class="relative px-6 pt-[18px]">
            <div class="text-[.64rem] font-bold tracking-[0.08em] uppercase mb-[6px]" :class="p.urteil ? 'text-white/50' : 'text-muted'">Heute</div>
            <p class="text-[.88rem] leading-[1.5]"
               :class="p.urteil ? 'text-white/60' : 'text-muted line-through decoration-[#dc2626]/50'">{{ p.heute }}</p>
          </div>

          <!-- Übergang -->
          <div class="relative flex items-center gap-3 px-6 my-[16px]" aria-hidden="true">
            <span class="flex-1 border-t" :class="p.urteil ? 'border-white/[0.14]' : 'border-line'"></span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" :class="p.urteil ? 'text-[#7db8f0]' : 'text-blue'"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"/></svg>
            <span class="flex-1 border-t" :class="p.urteil ? 'border-white/[0.14]' : 'border-line'"></span>
          </div>

          <!-- Mit matchmaker -->
          <div class="relative px-6">
            <div class="text-[.64rem] font-bold tracking-[0.08em] uppercase mb-[6px]" :class="p.urteil ? 'text-[#7db8f0]' : 'text-blue'">Mit matchmaker</div>
            <p class="text-[.96rem] font-semibold leading-[1.4]" :class="p.urteil ? 'text-white' : 'text-ink'">{{ p.mit }}</p>
          </div>

          <!-- Fuß: wer es tut -->
          <div class="relative mx-6 mt-[20px] py-[14px] border-t flex items-center gap-[8px] text-[.76rem] font-semibold"
               :class="p.urteil ? 'border-white/[0.14] text-white/80' : 'border-line text-body'">
            <span class="w-[6px] h-[6px] rounded-full shrink-0" :class="p.urteil ? 'bg-green' : 'bg-blue'"></span>
            {{ p.wer }}
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import SectionHeadingDraft from '@/components/landing-draft/ui/SectionHeadingDraft.vue'

export default {
  name: 'V3ShiftSection',
  components: { SectionHeadingDraft },
  data() {
    return {
      // Dieselben vier Phasen wie die Stationen im Durchlauf (1 · 2–4 · 5–6 · 7).
      phasen: [
        {
          titel: 'Profil',
          heute: 'Aus Lebenslauf, Notizen und Bewerbersoftware zusammensuchen',
          mit: 'Strukturiertes Profil mit Suchkriterien',
          wer: 'Profiling Agent'
        },
        {
          titel: 'Stellen',
          heute: 'Portale durchsuchen, Anzeigen lesen, Passung schätzen',
          mit: 'Passende Treffer mit Score und Begründung',
          wer: 'Market & Matching Agent'
        },
        {
          titel: 'Ansprache',
          heute: 'Entscheider suchen, Anschreiben von Grund auf tippen',
          mit: 'Ansprechpartner recherchiert, Anschreiben entworfen',
          wer: 'Outreach Agent'
        },
        {
          titel: 'Entscheidung',
          urteil: true,
          heute: 'Bekommt die Zeit, die vom Tag übrig bleibt',
          mit: 'Bekommt Ihre volle Aufmerksamkeit',
          wer: 'Sie – Human-in-the-Loop'
        }
      ]
    }
  }
}
</script>
