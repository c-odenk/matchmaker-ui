<template>
  <!-- ENTWURF: Zeilen auf die Argumente des Systementwurfs umgestellt
       (viele Fenster → eine Oberfläche, Nachtlauf, Systemwechsel). -->
  <section class="sec bg-white" id="vergleich">
    <div class="wrap">
      <SectionHeading eyebrow="Manuell vs. matchmaker.hr">
        Ihre Zeit gehört der <span class="text-blue">Beratung.</span>
        <template #lead>Nicht dem Fensterwechsel. Zwischen Bewerbersoftware, Jobportalen, Handelsregister und Postfach geht der Tag verloren – Zeit, die für Mandate fehlt.</template>
      </SectionHeading>

      <div class="compare max-w-[840px] mx-auto border border-line rounded-[11px] overflow-hidden grid grid-cols-2 max-[560px]:grid-cols-1">
        <div class="col a px-[30px] py-8 max-[560px]:px-[22px]">
          <div class="text-[.78rem] font-bold tracking-[0.05em] uppercase mb-5 text-muted">Ohne matchmaker.hr</div>
          <ul class="list-none flex flex-col gap-[15px]">
            <li v-for="t in without" :key="t" class="flex gap-[11px] text-[.95rem] text-muted">
              <span class="text-[#cbd5e1] shrink-0">✕</span>{{ t }}
            </li>
          </ul>
        </div>
        <div class="col b px-[30px] py-8 border-l border-line bg-blue/[0.035] max-[560px]:border-l-0 max-[560px]:border-t max-[560px]:px-[22px]">
          <div class="text-[.78rem] font-bold tracking-[0.05em] uppercase mb-5 text-blue">Mit matchmaker.hr</div>
          <ul class="list-none flex flex-col gap-[15px]">
            <li v-for="t in withMm" :key="t" class="flex gap-[11px] text-[.95rem] text-ink">
              <span class="text-green shrink-0">✓</span>{{ t }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'CompareSectionDraft',
  components: { SectionHeading },
  data() {
    return {
      without: [
        'Bewerbersoftware, Jobportale, Telefon und Postfach – vier Fenster nebeneinander',
        'Jobboards werden manuell durchgesehen, Tag für Tag',
        'Ansprechpartner einzeln über Handelsregister und Impressum gesucht',
        'Ein Wechsel der Bewerbersoftware wirft die ganze Arbeitsweise um'
      ],
      withMm: [
        'Eine Oberfläche – die Bewerbersoftware bleibt die führende Datenquelle',
        'Sechs Schritte laufen nachts, morgens liegt das Ergebnis auf dem Tisch',
        'Firma und Ansprechpartner recherchiert, das Anschreiben steht als Entwurf',
        'Ein Systemwechsel kostet nur eine neue Anbindung – sonst nichts'
      ]
    }
  }
}
</script>
