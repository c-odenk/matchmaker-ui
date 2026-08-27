<template>
  <!-- Einstieg in die vier Plattform-Seiten – dort liegen die Details -->
  <section class="sec bg-surface">
    <div class="wrap">
      <SectionHeadingDraft eyebrow="Die Plattform">
        Die Plattform <span class="text-blue">im Überblick.</span>
        <template #lead>Was angebunden wird, wo die Daten liegen, wer die Arbeit übernimmt, was automatisch läuft – und was Sie jederzeit selbst anstoßen können.</template>
      </SectionHeadingDraft>

      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(5,1fr)] max-[1100px]:grid-cols-3 max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <router-link
          v-for="c in cards" :key="c.title" :to="c.to"
          class="ben group bg-white border border-line rounded-2xl p-6 flex flex-col transition-all duration-[180ms] hover:border-[#cdd9ea] hover:-translate-y-[3px] hover:shadow-card-hover"
        >
          <div class="w-[42px] h-[42px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="c.icon"/></svg>
          </div>
          <h3 class="text-[1.02rem] font-bold tracking-[-0.01em] mb-2 text-ink flex items-center gap-2 flex-wrap">
            {{ c.title }}
            <span v-if="c.badge" class="text-[.6rem] font-bold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-full bg-blue-soft text-blue">{{ c.badge }}</span>
          </h3>
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
import SectionHeadingDraft from '@/components/landing-draft-v2/ui/SectionHeadingDraft.vue'

export default {
  name: 'HomePlatformSection',
  components: { SectionHeadingDraft },
  data() {
    return {
      cards: [
        {
          title: 'Integration', to: '/entwurf-v2/integration',
          text: 'Bewerbersoftware, Postfach, Telefonie und Termine – angebunden statt ersetzt.',
          icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9'
        },
        {
          title: 'Daten', to: '/entwurf-v2/daten',
          text: 'Wo sie liegen, was nur durchläuft und was vorher entfernt wird.',
          icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75'
        },
        {
          title: 'Multi-Agentensystem', to: '/entwurf-v2/agenten',
          text: 'Vier Agenten bereiten jeden Schritt vor – die Freigabe bleibt bei Ihnen.',
          icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z'
        },
        {
          title: 'Automatisierungen', to: '/entwurf-v2/automatisierungen',
          text: 'Was ohne manuellen Anstoß läuft und was ein Klick auslöst.',
          icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
        },
        {
          title: 'KI-Assistent', to: '/entwurf-v2/ki-assistent', badge: 'Beta',
          text: 'Der Pool als Karte, dazu Fragen und Aufträge im Satz.',
          icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
        }
      ]
    }
  }
}
</script>
