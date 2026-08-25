<template>
  <!-- ENTWURF: ersetzt die AgentsSection. Gleiches Karten-Layout (.steps .step),
       aber das Nacht-/Morgen-Narrativ aus Systementwurf S. 4. Die vier Agenten
       bleiben als Label je Schritt erhalten. -->
  <section class="sec bg-white" id="agenten">
    <div class="wrap">
      <SectionHeading eyebrow="Der Tagesbetrieb">
        Sechs Schritte laufen <span class="text-blue">nachts von allein.</span>
        <template #lead>Für jeden aktiven Kandidaten, jede Nacht neu. Morgens bleibt das, wofür es Erfahrung braucht – prüfen, anpassen, freigeben.</template>
      </SectionHeading>

      <div class="steps grid gap-[18px] [grid-template-columns:repeat(3,1fr)] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="s in steps" :key="s.no" class="step relative bg-white border border-line rounded-2xl p-6">
          <div class="flex items-center gap-3 mb-[15px]">
            <div class="w-9 h-9 rounded-[10px] bg-navy text-white flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="s.icon"/></svg>
            </div>
            <span class="text-[1.05rem] font-extrabold tracking-[-0.02em] text-[#cbd5e1]">{{ s.no }}</span>
          </div>
          <div class="text-[.72rem] font-bold tracking-[0.04em] uppercase text-blue mb-[5px]">{{ s.agent }}</div>
          <h3 class="text-[1.02rem] font-bold tracking-[-0.01em] mb-2">{{ s.title }}</h3>
          <p class="text-[.88rem] text-body">{{ s.text }}</p>
        </div>
      </div>

      <p class="text-[.84rem] text-muted mt-4 max-w-[760px]">
        Jede Vorstufe filtert, bevor die KI rechnet – Dubletten, Region, Seniorität und bereits Abgelehntes fallen ohne KI-Kosten heraus. So bleiben die Kosten pro Nacht kalkulierbar.
      </p>

      <!-- Der Morgen: das konkreteste Bild aus dem Systementwurf -->
      <div class="hil mt-[18px] bg-navy text-white rounded-2xl px-6 py-6">
        <div class="flex items-center gap-[14px] flex-wrap max-[560px]:flex-col max-[560px]:text-center max-[560px]:gap-3">
          <div class="w-[42px] h-[42px] rounded-xl bg-blue/20 border border-blue/[0.35] flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7db8f0" stroke-width="1.9"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>
          </div>
          <div class="text-[.92rem] text-white/[0.78] flex-1 min-w-[240px] max-[560px]:min-w-0">
            <b class="font-bold text-white">Am Morgen: sieben Treffer, vier fertige Anschreiben – prüfen und freigeben.</b>
            Versendet wird nichts ohne Freigabe. Der Entwurf entsteht automatisch, die Entscheidung trifft der Berater, der Versand läuft über Ihr eigenes Postfach.
          </div>
          <span class="inline-flex items-center gap-[6px] text-[.72rem] font-semibold px-[10px] py-1 rounded-full bg-green/[0.18] text-[#7ee2a8]">Human-in-the-Loop</span>
        </div>
        <p class="text-[.78rem] text-white/45 mt-4 pt-4 border-t border-white/[0.12]">
          So könnte ein Morgen aussehen. Wie viele Treffer eine Nacht bringt, schwankt mit Markt und Bestand – nicht jeder Lauf liefert Ergebnisse.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeading from '@/components/ui/SectionHeading.vue'

export default {
  name: 'NightShiftSection',
  components: { SectionHeading },
  data() {
    return {
      steps: [
        { no: '01', agent: 'Profiling Agent', title: 'Kandidaten übernehmen', text: 'Neue und geänderte Profile aus der Bewerbersoftware – nur was sich bewegt hat, nicht der ganze Bestand.', icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z' },
        { no: '02', agent: 'Market Agent', title: 'Markt durchsuchen', text: 'Jobportale plus die Karriereseiten der Zielfirmen – kontinuierlich, ohne manuelles Screening.', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z' },
        { no: '03', agent: 'Market Agent', title: 'Unpassendes aussortieren', text: 'Dubletten, Region, Seniorität und bereits Abgelehntes fallen heraus, bevor bewertet wird.', icon: 'M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z' },
        { no: '04', agent: 'Outreach Agent', title: 'Firma recherchieren', text: 'Handelsregister und Website – und der richtige Ansprechpartner, nach Rolle sortiert.', icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
        { no: '05', agent: 'Matching Agent', title: 'Passung bewerten', text: 'Semantisches Scoring mit nachvollziehbarer Begründung – nicht nur eine Zahl.', icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z' },
        { no: '06', agent: 'Outreach Agent', title: 'Anschreiben entwerfen', text: 'Individueller Text an die suchende Firma, anonymes Exposé dabei – versandfertig als Entwurf.', icon: 'M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.77 59.77 0 013.27 20.875L5.999 12zm0 0h7.5' }
      ]
    }
  }
}
</script>
