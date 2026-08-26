<template>
  <!-- Einstieg in die vier Plattform-Seiten – dort liegen die Details -->
  <section class="sec bg-surface">
    <div class="wrap">
      <SectionHeadingDraft eyebrow="Die Plattform">
        Vier Bausteine, <span class="text-blue">ein System.</span>
        <template #lead>Was angebunden wird, wo die Daten liegen, wer die Arbeit macht und was davon automatisch läuft.</template>
      </SectionHeadingDraft>

      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(4,1fr)] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <router-link
          v-for="c in cards" :key="c.title" :to="c.to"
          class="ben group bg-white border border-line rounded-2xl p-6 flex flex-col transition-all duration-[180ms] hover:border-[#cdd9ea] hover:-translate-y-[3px] hover:shadow-card-hover"
        >
          <div class="w-[42px] h-[42px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="c.icon"/></svg>
          </div>
          <h3 class="text-[1.02rem] font-bold tracking-[-0.01em] mb-2 text-ink">{{ c.title }}</h3>
          <p class="text-[.88rem] text-body flex-1">{{ c.text }}</p>
          <span class="inline-flex items-center gap-[6px] mt-4 text-[.85rem] font-semibold text-blue">
            Ansehen
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-150 group-hover:translate-x-[3px]"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
          </span>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeadingDraft from '@/components/landing-draft/ui/SectionHeadingDraft.vue'

export default {
  name: 'HomePlatformSection',
  components: { SectionHeadingDraft },
  data() {
    return {
      cards: [
        {
          title: 'Integration', to: '/entwurf/integration',
          text: 'Bewerbersoftware, Postfach, Telefonie und Termine – angebunden statt ersetzt.',
          icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
        },
        {
          title: 'Daten', to: '/entwurf/daten',
          text: 'Wo sie liegen, was nur durchläuft und was vorher entfernt wird.',
          icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75'
        },
        {
          title: 'Multi-Agentensystem', to: '/entwurf/agenten',
          text: 'Vier Agenten bereiten jeden Schritt vor – die Freigabe bleibt bei Ihnen.',
          icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z'
        },
        {
          title: 'Automatisierungen', to: '/entwurf/automatisierungen',
          text: 'Was ohne Zutun läuft und was ein Klick aus dem Vorgang auslöst.',
          icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
        }
      ]
    }
  }
}
</script>
