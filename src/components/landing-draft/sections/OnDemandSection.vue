<template>
  <!-- NEU im Entwurf: „Auf Klick, jederzeit" aus Systementwurf S. 4.
       Bewusst als feines Raster mit Trennlinien statt als Karten-Wand. -->
  <section class="sec bg-surface" id="automatisierungen">
    <div class="wrap">
      <SectionHeading eyebrow="Auf Klick, jederzeit">
        Was Sie zwischendurch brauchen – <span class="text-blue">im selben Fenster.</span>
        <template #lead>Telefonie, Termine, Gesprächsauswertung und Exposés laufen aus dem Kandidatenprofil heraus. Kein Wechsel zwischen Bewerbersoftware, Telefonanlage und Postfach.</template>
      </SectionHeading>

      <div class="ben-grid max-w-[900px] mx-auto bg-white border border-line rounded-[18px] overflow-hidden grid grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="(a, i) in actions" :key="a.title"
             class="ben flex items-start gap-[14px] px-6 py-5 border-line"
             :class="[
               i % 2 === 0 && i !== actions.length - 1 ? 'border-r max-[560px]:border-r-0' : '',
               i < actions.length - 2 ? 'border-b' : (i < actions.length - 1 ? 'max-[560px]:border-b' : '')
             ]">
          <div class="w-9 h-9 shrink-0 rounded-[10px] flex items-center justify-center"
               :class="a.status ? 'bg-navy/[0.06] text-navy' : 'bg-navy text-white'">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="a.icon"/></svg>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <h3 class="text-[.98rem] font-bold tracking-[-0.01em]">{{ a.title }}</h3>
              <span v-if="a.status" class="inline-flex items-center text-[.64rem] font-bold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-full bg-blue-soft text-blue">{{ a.status }}</span>
            </div>
            <p class="text-[.86rem] text-body mt-[3px] leading-[1.5]">{{ a.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'OnDemandSection',
  components: { SectionHeading },
  data() {
    return {
      actions: [
        { title: 'Anrufen', text: 'Direkt aus dem Profil, über den Rechner – ohne Nummernsuche.', icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' },
        { title: 'Teams-Termin anlegen', text: 'Mit Kandidat oder Entscheider – aus dem Vorgang heraus.', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
        { title: 'Gespräch auswerten', text: 'Das Transkript wird zu Profilvorschlägen – Sie übernehmen, was stimmt.', icon: 'M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z' },
        { title: 'Mandat abgleichen', text: 'Ein Auftrag gegen den ganzen Bestand – in einem Durchlauf.', icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z' },
        { title: 'Exposé erzeugen', text: 'Anonymisiert, als fertiges PDF – direkt an die suchende Firma.', icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
        { title: 'Talentpool freigeben', status: 'Geplant', text: 'Ein Häkchen, dann steht das anonyme Profil auf Ihrer eigenen Homepage.', icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a8.949 8.949 0 004.951-1.488A3.987 3.987 0 0013 16h-2a3.987 3.987 0 00-3.951 3.512A8.949 8.949 0 0012 21zM3 12h18' },
        { title: 'Longliste exportieren', status: 'Geplant', text: 'Zielfirmen und Kandidaten zum Mandat, als Excel.', icon: 'M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M12 12v6m0 0l-2.25-2.25M12 18l2.25-2.25' },
        { title: 'KI-Assistent', status: 'In Arbeit', text: 'Den Bestand im Gespräch eingrenzen und Aktionen auslösen.', icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z' }
      ]
    }
  }
}
</script>
