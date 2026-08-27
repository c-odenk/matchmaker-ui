<template>
  <!-- 5 · Quellen, die nicht bedient, sondern ausgelesen werden -->
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>Quellen</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Recherche, die <span class="text-blue">bereits erledigt ist.</span></h2>
        <p class="text-lead text-body">Angebunden liefern diese Quellen ihre Daten direkt in den Vorgang – Sie sehen das Ergebnis, nicht den Suchweg.</p>
      </div>

      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(4,1fr)] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="s in sources" :key="s.title" class="ben bg-surface border border-line rounded-2xl p-6">
          <div class="w-[42px] h-[42px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="s.icon"/></svg>
          </div>
          <div class="flex items-center gap-2 flex-wrap mb-2">
            <h3 class="text-[1.02rem] font-bold tracking-[-0.01em]">{{ s.title }}</h3>
            <span v-if="s.status" class="inline-flex items-center text-[.64rem] font-bold tracking-[0.06em] uppercase px-[7px] py-[2px] rounded-full bg-blue-soft text-blue">{{ s.status }}</span>
          </div>
          <p class="text-[.88rem] text-body">{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'IntegrationSourcesSection',
  components: { EyebrowBadge },
  data() {
    return {
      sources: [
        {
          title: 'Jobportale',
          icon: 'M20.25 14.15v4.073a2.25 2.25 0 01-1.632 2.163l-1.32.377a9.75 9.75 0 01-5.36 0l-1.32-.377a2.25 2.25 0 01-1.633-2.163V14.15M3.75 9.75l7.108-3.554a2.25 2.25 0 012.284 0L20.25 9.75l-7.108 3.554a2.25 2.25 0 01-2.284 0L3.75 9.75z',
          text: 'Ausgeschriebene Stellen aus den gängigen Portalen – laufend statt stichprobenartig.'
        },
        {
          title: 'Karriereseiten',
          icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z',
          text: 'Die Karriereseiten Ihrer Zielfirmen – dort stehen offene Stellen oft früher als in den Portalen.'
        },
        {
          title: 'Handelsregister',
          icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
          text: 'Firmendaten und Geschäftsführung – der zuständige Entscheider statt einer Sammeladresse.'
        },
        {
          title: 'Ihre Homepage',
          status: 'Geplant',
          icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a8.949 8.949 0 004.951-1.488A3.987 3.987 0 0013 16h-2a3.987 3.987 0 00-3.951 3.512A8.949 8.949 0 0012 21zM3 12h18',
          text: 'Karriereseite als Eingang für Lebensläufe und anonymer Talentpool nach außen.'
        }
      ]
    }
  }
}
</script>
