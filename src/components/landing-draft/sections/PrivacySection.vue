<template>
  <!-- NEU im Entwurf: ersetzt die pauschalen Siegel („DSGVO-konform / 100 % EU-Hosting")
       durch die fünf technisch gelösten Punkte aus Systementwurf S. 5 –
       plus eine ehrliche Einordnung dessen, was noch offen ist. -->
  <section class="sec bg-white" id="daten">
    <div class="wrap">
      <SectionHeading eyebrow="Datenschutz">
        Was <span class="text-blue">im System gelöst</span> ist – und was offen bleibt.
        <template #lead>Personalberatung arbeitet mit besonders sensiblen Daten. Deshalb hier keine Siegel, sondern die konkreten Punkte – auch die, an denen noch gearbeitet wird.</template>
      </SectionHeading>

      <div class="ben-grid max-w-[900px] mx-auto grid gap-[18px] [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] max-[560px]:grid-cols-1">
        <div v-for="p in solved" :key="p.title" class="ben bg-surface border border-line rounded-2xl p-6">
          <div class="flex items-center gap-[10px] mb-3">
            <span class="w-[26px] h-[26px] shrink-0 rounded-full bg-[#e7f8ee] text-[#15803d] flex items-center justify-center text-[13px]">✓</span>
            <span class="text-[.72rem] font-bold tracking-[0.06em] uppercase text-muted">{{ p.ref }}</span>
          </div>
          <h3 class="text-[1rem] font-bold tracking-[-0.01em] mb-2">{{ p.title }}</h3>
          <p class="text-[.88rem] text-body">{{ p.text }}</p>
        </div>
      </div>

      <!-- Ehrliche Einordnung statt „Daten bleiben in der EU" -->
      <div class="max-w-[900px] mx-auto mt-[18px] border border-line rounded-2xl bg-surface px-6 py-5 flex items-start gap-[14px] max-[560px]:flex-col">
        <div class="w-9 h-9 shrink-0 rounded-[10px] bg-navy/[0.06] text-navy flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/></svg>
        </div>
        <div>
          <div class="text-[.95rem] font-bold text-ink mb-1">Wo die Daten heute liegen</div>
          <p class="text-[.88rem] text-body leading-[1.6]">
            Stammdaten und Originaldokumente bleiben in Ihrer Bewerbersoftware. Für die matchmaker-Datenbank ist der <b class="font-semibold text-ink">Serverstandort wählbar</b>.
            Die KI-Verarbeitung läuft derzeit über einen Dienst, der <b class="font-semibold text-ink">außerhalb der EU rechnet</b> – ausschließlich ohne Klarnamen und nur für die Dauer des Aufrufs.
            Ein lokales Modell im eigenen Haus ist vorgesehen; damit verlassen Kandidatendaten das Haus nicht mehr.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'PrivacySection',
  components: { SectionHeading },
  data() {
    return {
      solved: [
        { ref: 'Art. 22 DSGVO', title: 'Keine automatische Entscheidung', text: 'Versand, Profiländerung und Statuswechsel gibt immer ein Mensch frei.' },
        { ref: 'Art. 5 DSGVO', title: 'Bewertung ohne Klarnamen', text: 'Name, Kontakt und Arbeitgeber werden vor dem KI-Aufruf entfernt.' },
        { ref: 'Rechenschaft', title: 'Jeder Schritt protokolliert', text: 'Bewertung, Begründung und Zeitpunkt bleiben dauerhaft nachvollziehbar.' },
        { ref: '§ 201 StGB', title: 'Keine Gesprächsaufzeichnung', text: 'Telefonate laufen ohne Mitschnitt – technisch gar nicht vorgesehen.' },
        { ref: 'Vertraglich', title: 'Keine Nutzung zum Training', text: 'Übermittelte Daten fließen nicht in fremde Modelle ein.' }
      ]
    }
  }
}
</script>
