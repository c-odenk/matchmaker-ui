<template>
  <!-- Abschluss: was am Ende der Kette tatsächlich vorliegt -->
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>Ergebnis</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Was morgens <span class="text-blue">auf dem Tisch liegt.</span></h2>
        <p class="text-lead text-body">Kein Zwischenstand, keine Liste zum Nacharbeiten – sondern Vorschläge, die nur noch geprüft und freigegeben werden wollen.</p>
      </div>

      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(4,1fr)] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="r in results" :key="r.title" class="ben bg-surface border border-line rounded-2xl p-6">
          <div class="w-[42px] h-[42px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="r.icon"/></svg>
          </div>
          <div class="flex items-center gap-2 flex-wrap mb-2">
            <h3 class="text-[1.02rem] font-bold tracking-[-0.01em]">{{ r.title }}</h3>
            <span v-if="r.status" class="inline-flex items-center text-[.64rem] font-bold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-full bg-blue-soft text-blue">{{ r.status }}</span>
          </div>
          <p class="text-[.88rem] text-body">{{ r.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'AgentsResultSection',
  components: { EyebrowBadge },
  data() {
    return {
      results: [
        {
          title: 'Anonymer Talentpool',
          text: 'Freigegebene Profile erscheinen anonym auf Ihrer eigenen Homepage.',
          icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a8.949 8.949 0 004.951-1.488A3.987 3.987 0 0013 16h-2a3.987 3.987 0 00-3.951 3.512A8.949 8.949 0 0012 21zM3 12h18'
        },
        {
          title: 'Bewertete Vakanzen',
          text: 'Je Kandidat die gefundenen Stellen mit Score und Begründung, priorisiert.',
          icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
        },
        {
          title: 'Anschreiben an die Firma',
          text: 'Individuell formuliert, mit anonymem Exposé – versandfertig als Entwurf.',
          icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        },
        {
          title: 'Aktualisierte Akte',
          text: 'Bewertung, Gesprächsauswertung und Kontaktstatus fließen zurück ins ATS.',
          icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z'
        }
      ]
    }
  }
}
</script>
