<template>
  <!-- 4 · Betroffenenrechte: was ein Kandidat verlangen kann und wie schnell
       die Beratung es erfüllt. Liste statt Karten – die Regulatorik-Karten
       stehen direkt darüber. -->
  <section class="sec bg-white">
    <div class="wrap">
      <SectionHeadingDraft eyebrow="Auskunft und Löschung">
        Was ein Kandidat verlangen kann – <span class="text-blue">mit einem Klick erledigt.</span>
        <template #lead>Fragt ein Kandidat nach seinen Daten oder will sie gelöscht haben, beginnt keine Suche durch fünf Systeme.</template>
      </SectionHeadingDraft>

      <ul class="list-none mx-auto max-w-[860px] border border-line rounded-[11px] overflow-hidden bg-white">
        <li v-for="r in rechte" :key="r.title" class="flex items-start gap-[15px] px-6 py-5 border-b border-line last:border-b-0 max-[560px]:px-[18px]">
          <span class="w-[34px] h-[34px] shrink-0 rounded-[7px] bg-navy/[0.07] text-navy flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="r.icon"/></svg>
          </span>
          <span class="min-w-0">
            <span class="flex items-center gap-[10px] flex-wrap">
              <span class="text-[.98rem] font-bold text-ink leading-tight">{{ r.title }}</span>
              <span class="text-[.72rem] font-bold tracking-[0.06em] uppercase text-muted">{{ r.ref }}</span>
            </span>
            <span class="block text-[.9rem] text-body leading-[1.6] mt-[5px]">{{ r.text }}</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import SectionHeadingDraft from '@/components/landing-draft/ui/SectionHeadingDraft.vue'

export default {
  name: 'DataRightsSection',
  components: { SectionHeadingDraft },
  data() {
    return {
      rechte: [
        {
          title: 'Auskunft',
          ref: 'Art. 15 DSGVO',
          text: 'Zu jedem Kandidatenprofil erzeugt matchmaker eine vollständige Auskunft über alle dort gespeicherten Daten – als Download, bereit zur Weitergabe.',
          icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
        },
        {
          title: 'Löschung',
          ref: 'Art. 17 DSGVO',
          text: 'Ein Profil lässt sich vollständig löschen – samt Bewertungen, Nachrichten, Gesprächsnotizen und Protokollen. Zurück bleibt ein Löschnachweis ohne Namen. Wird ein Kandidat in der Bewerbersoftware gelöscht, folgt matchmaker beim nächsten Abgleich.',
          icon: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
        },
        {
          title: 'Bericht zu jeder Bewertung',
          ref: 'Nachvollziehbarkeit',
          text: 'Ein Bericht zeigt die Urteile je Kriterium mit ihren Belegen – in einer internen Fassung für Sie und in einer Fassung, die Sie einem Kandidaten mit der Auskunft geben können.',
          icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
        },
        {
          title: 'Schutz vor Verzerrung',
          ref: 'AGG · AI Act',
          text: 'Geschützte Merkmale wie Alter, Familienstand oder Staatsangehörigkeit werden vor der Bewertung entfernt. Eigene Tests prüfen, dass gleiche Qualifikation unabhängig vom Namen gleich bewertet wird.',
          icon: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z'
        }
      ]
    }
  }
}
</script>
