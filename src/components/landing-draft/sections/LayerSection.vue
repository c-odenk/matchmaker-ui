<template>
  <!-- NEU im Entwurf: die zentrale These des Systementwurfs (S. 1–3) –
       matchmaker als steuernde Schicht über der bestehenden Bewerbersoftware.
       Bewusst schlank gehalten: zentriertes Panel + feine Trennlinien. -->
  <section class="sec bg-white" id="integration">
    <div class="wrap">
      <SectionHeading eyebrow="Der Aufbau">
        matchmaker ersetzt Ihre Bewerbersoftware nicht. Es <span class="text-blue">setzt darauf auf.</span>
        <template #lead>Zwei Systeme, klar getrennte Aufgaben. Die Bewerbersoftware verwaltet zuverlässig, was hereinkommt, und hält die Personalakte rechtssicher. matchmaker geht nach draußen – und bringt Aufträge herein.</template>
      </SectionHeading>

      <div class="compare max-w-[840px] mx-auto border border-line rounded-[11px] overflow-hidden grid grid-cols-2 max-[560px]:grid-cols-1">
        <div class="col a px-[30px] py-8 max-[560px]:px-[22px]">
          <div class="text-[.78rem] font-bold tracking-[0.05em] uppercase text-muted">Ihre Bewerbersoftware</div>
          <div class="text-[.95rem] font-bold text-ink mt-1 mb-5">Die führende Datenquelle</div>
          <ul class="list-none flex flex-col gap-[15px]">
            <li v-for="t in ats" :key="t.title" class="flex gap-[11px] text-[.92rem] text-muted">
              <span class="text-[#cbd5e1] shrink-0 mt-[2px]">·</span>
              <span><b class="font-semibold text-body">{{ t.title }}</b><br><span class="text-[.82rem]">{{ t.sub }}</span></span>
            </li>
          </ul>
        </div>
        <div class="col b px-[30px] py-8 border-l border-line bg-blue/[0.035] max-[560px]:border-l-0 max-[560px]:border-t max-[560px]:px-[22px]">
          <div class="text-[.78rem] font-bold tracking-[0.05em] uppercase text-blue">matchmaker</div>
          <div class="text-[.95rem] font-bold text-ink mt-1 mb-5">Der Arbeitsplatz</div>
          <ul class="list-none flex flex-col gap-[15px]">
            <li v-for="t in mm" :key="t.title" class="flex gap-[11px] text-[.92rem] text-ink">
              <span class="text-green shrink-0 mt-[2px]">✓</span>
              <span><b class="font-semibold">{{ t.title }}</b><br><span class="text-[.82rem] text-body">{{ t.sub }}</span></span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Die zwei Übergaben – als schmales Band unter dem Panel -->
      <div class="max-w-[840px] mx-auto mt-[18px] border border-line rounded-[11px] grid grid-cols-3 divide-x divide-line max-[560px]:grid-cols-1 max-[560px]:divide-x-0 max-[560px]:divide-y">
        <div v-for="h in handovers" :key="h.when" class="px-6 py-5">
          <div class="text-[.72rem] font-bold tracking-[0.07em] uppercase text-blue mb-[6px]">{{ h.when }}</div>
          <div class="text-[.9rem] font-semibold text-ink leading-snug">{{ h.title }}</div>
          <div class="text-[.82rem] text-body mt-1 leading-[1.5]">{{ h.sub }}</div>
        </div>
      </div>

      <p class="max-w-[840px] mx-auto mt-4 text-center text-[.88rem] text-muted max-[560px]:text-left">
        Die Trennlinie ist eine einzige Frage: <b class="font-semibold text-body">Wer geht nach draußen?</b>
        Das ATS arbeitet nach innen und verwaltet, was vorliegt. matchmaker arbeitet nach außen und bringt Neues herein.
      </p>

      <!-- Anti-Lock-in: das stärkste Argument des Systementwurfs -->
      <div class="hil max-w-[840px] mx-auto mt-6 flex items-center gap-[14px] bg-navy text-white rounded-2xl px-6 py-5 flex-wrap max-[560px]:flex-col max-[560px]:text-center max-[560px]:gap-3">
        <div class="w-[42px] h-[42px] rounded-xl bg-blue/20 border border-blue/[0.35] flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7db8f0" stroke-width="1.9"><path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"/></svg>
        </div>
        <div class="text-[.92rem] text-white/[0.78] flex-1 min-w-[240px] max-[560px]:min-w-0"><b class="font-bold text-white">Die Bewerbersoftware bleibt austauschbar.</b> Ein Wechsel kostet künftig nur eine neue Anbindung – keine Veränderung der Arbeitsweise, keine neu aufgebauten Automatisierungen.</div>
        <span class="inline-flex items-center gap-[6px] text-[.72rem] font-semibold px-[10px] py-1 rounded-full bg-green/[0.18] text-[#7ee2a8]">Kein Lock-in</span>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'LayerSection',
  components: { SectionHeading },
  data() {
    return {
      ats: [
        { title: 'Stammdaten und Originaldokumente', sub: 'die Personalakte, rechtlich führend' },
        { title: 'Eingehende Bewerbungen', sub: 'Karriereseite und Lebenslauf auslesen' },
        { title: 'Eingangsbestätigung und Absage', sub: 'personalisiert, zeitversetzt' },
        { title: 'Löschfristen nach DSGVO und AGG', sub: 'systemseitig überwacht' },
        { title: 'Stellenanzeigen verteilen', sub: 'auf hunderte Jobbörsen gleichzeitig' }
      ],
      mm: [
        { title: 'Stellen im Markt suchen', sub: 'Jobportale und Karriereseiten der Zielfirmen' },
        { title: 'Firmen und Ansprechpartner recherchieren', sub: 'Handelsregister, Impressum, nach Rolle sortiert' },
        { title: 'Passung bewerten und begründen', sub: 'nachvollziehbar, nicht nur eine Zahl' },
        { title: 'Verkaufsanschreiben erzeugen', sub: 'an die suchende Firma, mit anonymem Exposé' },
        { title: 'Telefonieren und Gespräche auswerten', sub: 'aus dem Profil heraus, Transkript wird zum Vorschlag' }
      ],
      handovers: [
        { when: 'Nachts', title: 'Kandidaten kommen herüber', sub: 'Neue und geänderte Profile werden übernommen – nur was sich bewegt hat.' },
        { when: 'Tagsüber', title: 'Die Arbeit nach außen läuft', sub: 'Suchen, recherchieren, bewerten, anschreiben, telefonieren – an einer Oberfläche.' },
        { when: 'Danach', title: 'Ergebnisse fließen in die Akte', sub: 'Bewertung, Gesprächsauswertung und Kontaktstatus zurück ins ATS.' }
      ]
    }
  }
}
</script>
