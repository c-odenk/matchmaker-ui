<template>
  <!-- Ersetzt die Telefonie-Sektion, die auf /integration wortgleich noch einmal
       stand. Die Startseite trug bis hierhin kein einziges Vertrauenssignal. -->
  <section class="sec bg-white">
    <div class="wrap">
      <SectionHeadingDraft eyebrow="Vertrauen &amp; Kontrolle">
        Kontrolle ist kein Zusatz – <span class="text-blue">sie ist im System verankert.</span>
        <template #lead>Vier Zusagen, die keine Sektion dieser Seite unterläuft.</template>
      </SectionHeadingDraft>

      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(4,1fr)] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="t in trust" :key="t.title" class="ben bg-surface border border-line rounded-2xl p-6">
          <div class="w-[42px] h-[42px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="t.icon"/></svg>
          </div>
          <h3 class="text-[1.02rem] font-bold tracking-[-0.01em] mb-2">{{ t.title }}</h3>
          <p class="text-[.88rem] text-body">{{ t.text }}</p>
        </div>
      </div>

      <div class="text-center mt-[26px]">
        <router-link to="/entwurf-v2/daten" class="inline-flex items-center gap-[7px] text-[.92rem] font-semibold text-blue hover:text-blue-hover cursor-pointer max-[880px]:py-[9px]">
          Alle Details zum Datenschutz
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeadingDraft from '@/components/landing-draft-v2/ui/SectionHeadingDraft.vue'

export default {
  name: 'HomeTrustSection',
  components: { SectionHeadingDraft },
  data() {
    return {
      // Nur Punkte, die die Unterseiten bereits belegen. Mandantentrennung ist
      // vor einem Livegang gegen die tatsaechliche Architektur zu pruefen.
      trust: [
        {
          title: 'Kein automatischer Versand',
          text: 'Jeder Nachrichtenentwurf braucht die ausdrückliche Freigabe eines Beraters.',
          icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Bewertung ohne Klarnamen',
          text: 'Name, Kontaktdaten und Arbeitgeber werden vor dem KI-Aufruf entfernt.',
          icon: 'M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
        },
        {
          title: 'Strikte Mandantentrennung',
          text: 'Jede Kundenumgebung ist vollständig isoliert; zwischen Unternehmen fließen keine Daten.',
          icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
        },
        {
          title: 'Eigener KI-Zugang',
          text: 'Auf Wunsch läuft die Verarbeitung über Ihren eigenen API-Zugang, mit voller Kostentransparenz.',
          icon: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z'
        }
      ]
    }
  }
}
</script>
