<template>
  <!-- Vorteile zuerst: was der Berater davon hat, bevor es um Technik geht.
       Bildsprache wie die Kanalübersicht auf /automatisierungen: die Gruppe
       steht in einer grauen Fläche, die Karten darin sind weiß. Bewusst ohne
       Navy-Kopf und Zuleitungen – die zeigt der Hero direkt darüber schon.
       Die Icon-Kachel ist hier voll in Navy gesetzt: Der Abschnitt hat sonst
       keine Farbfläche, das Navy trägt den Akzent. -->
  <section class="sec bg-white">
    <div class="wrap">
      <SectionHeadingDraft eyebrow="Warum matchmaker">
        Ein Ort für alles. <span class="text-blue">Die Entscheidung bleibt bei Ihnen.</span>
        <template #lead>Was sich ändert, ist die Arbeit dazwischen.</template>
      </SectionHeadingDraft>

      <div class="scope rounded-[11px] border border-line bg-surface p-8 max-[560px]:p-5">
        <!-- auto-rows-fr: im 2x2-Raster wären die beiden Zeilen sonst
             unterschiedlich hoch, weil die Fließtexte verschieden umbrechen. -->
        <div class="grid grid-cols-4 auto-rows-fr gap-[14px] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div v-for="b in benefits" :key="b.title" class="rounded-[8px] border border-line bg-white px-5 py-5 flex flex-col">
            <span class="w-[34px] h-[34px] shrink-0 rounded-[7px] bg-navy text-white flex items-center justify-center mb-3">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="b.icon"/></svg>
            </span>
            <div class="text-[.96rem] font-bold leading-tight text-ink">{{ b.title }}</div>
            <div class="text-[.82rem] text-body mt-[6px] leading-[1.5] flex-1">{{ b.text }}</div>
            <div class="mt-[14px] pt-[12px] border-t border-line">
              <span class="text-[.72rem] text-muted">{{ b.fuss }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeadingDraft from '@/components/landing-draft/ui/SectionHeadingDraft.vue'

export default {
  name: 'HomeBenefitsSection',
  components: { SectionHeadingDraft },
  data() {
    return {
      // Fußzeile trägt jeweils das Konkrete, das im Fließtext nur behauptet ist.
      benefits: [
        {
          title: 'Eine Oberfläche',
          text: 'Alles läuft dort, wo der Kandidat steht.',
          fuss: 'Kein Programmwechsel',
          icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
        },
        {
          title: 'Kein Lock-in',
          text: 'Jedes angebundene System bleibt einzeln ersetzbar.',
          fuss: 'Auch Ihr ATS',
          icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
        },
        {
          title: 'Fertig vorbereitet',
          text: 'Treffer, Recherche und Anschreiben liegen morgens vor.',
          fuss: 'Ohne Anstoß, jede Nacht',
          icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Ihre Freigabe',
          text: 'Nichts geht hinaus, bevor Sie es geprüft haben.',
          fuss: 'Human-in-the-Loop',
          icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
        }
      ]
    }
  }
}
</script>
