<template>
  <!-- KAPITEL 4 · KONTROLLE
       Der Einwand, der nach „automatisiert" sofort kommt: Und wer passt auf?
       Einzige Navy-Fläche zwischen Hero und Abschluss – sie gibt der Seite
       ihren Rhythmus und markiert den Themenwechsel von „was es tut" zu
       „warum man es darf". Inhalte ausschließlich von /daten. -->
  <section class="sec relative bg-navy text-white overflow-hidden !py-20 max-[880px]:!py-14" id="kontrolle">
    <div class="absolute top-[-30%] right-[-10%] w-[50%] h-[120%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.38),transparent_65%)] blur-[60px] pointer-events-none"></div>
    <div class="absolute bottom-[-40%] left-[-10%] w-[40%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(41,118,214,.18),transparent_70%)] blur-[70px] pointer-events-none"></div>

    <div class="wrap relative z-[2]">
      <SectionHeadingDraft eyebrow="Datenschutz" dark>
        Datenschutz und Kontrolle <span class="text-[#5fa0ea]">als Teil der Architektur.</span>
        <template #lead>Anforderungen aus DSGVO und EU AI Act sind technisch verankert.</template>
      </SectionHeadingDraft>

      <div class="ben-grid grid grid-cols-4 gap-[14px] max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="p in punkte" :key="p.titel"
             class="ben rounded-[10px] border border-white/[0.14] bg-white/[0.06] px-5 py-[22px] grid grid-rows-subgrid row-span-4 gap-y-0">
          <span class="w-[34px] h-[34px] shrink-0 rounded-[7px] bg-white/[0.1] text-[#9cc6f2] flex items-center justify-center mb-4 self-start">
            <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="p.icon"/></svg>
          </span>
          <div class="text-[.96rem] font-bold text-white leading-tight">{{ p.titel }}</div>
          <div class="text-[.85rem] text-white/[0.68] mt-[8px] leading-[1.55]">{{ p.text }}</div>
          <div class="mt-[16px] pt-[12px] self-end border-t border-white/[0.12] text-[.64rem] font-bold tracking-[0.07em] uppercase text-[#7db8f0]">{{ p.grundlage }}</div>
        </div>
      </div>

      <div class="mt-9 flex items-center justify-between gap-x-8 gap-y-4 flex-wrap max-[880px]:justify-center max-[880px]:text-center">
        <ul class="list-none flex flex-wrap gap-x-7 gap-y-2 max-[880px]:justify-center">
          <li v-for="z in zusaetze" :key="z" class="inline-flex items-center gap-[8px] text-[.85rem] text-white/[0.78]">
            <span class="w-[6px] h-[6px] rounded-full bg-green shrink-0"></span>{{ z }}
          </li>
        </ul>
        <router-link to="/daten" class="inline-flex items-center gap-[7px] max-[880px]:py-[10px] text-[.92rem] font-semibold text-[#7db8f0] hover:text-white transition-colors">
          Datenfluss im Detail
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeadingDraft from '@/components/landing-draft/ui/SectionHeadingDraft.vue'

export default {
  name: 'V3ControlSection',
  components: { SectionHeadingDraft },
  data() {
    return {
      punkte: [
        {
          titel: 'Bewerbersoftware bleibt führend',
          text: 'Stammdaten, Dokumente und Löschfristen bleiben, wo sie sind.',
          grundlage: 'Kein Lock-in',
          icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75'
        },
        {
          titel: 'Bewertung ohne Klarnamen',
          text: 'Name, Kontakt und Arbeitgeber werden vor dem KI-Aufruf entfernt.',
          grundlage: 'Art. 5 DSGVO',
          icon: 'M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
        },
        {
          titel: 'Freigabe vor jedem Versand',
          text: 'Versand, Profiländerung und Statuswechsel gibt immer ein Mensch frei.',
          grundlage: 'Art. 22 DSGVO',
          icon: 'M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
        },
        {
          titel: 'Jeder Schritt nachvollziehbar',
          text: 'Bewertung, Begründung und Zeitpunkt werden dauerhaft protokolliert.',
          grundlage: 'EU AI Act',
          icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z'
        }
      ],
      zusaetze: [
        'matchmaker-Datenbank auf Servern in der EU',
        'Keine Gesprächsaufzeichnung',
        'Auskunft und Löschung auf Klick'
      ]
    }
  }
}
</script>
