<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      <div class="relative overflow-hidden rounded-2xl bg-deep-blue p-8 md:p-12 lg:p-16">

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
        <div v-for="benefit in benefits" :key="benefit.title" class="flex flex-col items-center gap-5 text-center">
          <div class="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 text-white">
            <component :is="benefit.icon" class="w-7 h-7" :stroke-width="1.5" />
          </div>
          <div>
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-white mb-3">{{ benefit.title }}</h3>
            <p class="paragraph-base text-white/80">
              {{ benefit.solution }}
            </p>
          </div>
        </div>
      </div>

      </div>
    </div>
  </section>
</template>

<script>
import { Search, Zap, Target, ShieldCheck } from 'lucide-vue-next'

export default {
  name: 'LandingBenefits',
  components: {
    Search,
    Zap,
    Target,
    ShieldCheck
  },
  data() {
    return {
      benefits: [
        {
          title: 'Automatisierte Marktanalyse',
          solution: 'Der Market Intelligence Agent scannt im 24h-Intervall das Web nach exakt passenden Vakanzen für Ihren Kandidatenpool.',
          icon: Search
        },
        {
          title: 'Präzises Kandidaten-Scoring',
          solution: 'Der Matching Agent liefert ein semantisches Scoring basierend auf der „Kandidaten-DNA" und liefert die KI-Begründung sofort mit.',
          icon: Target
        },
        {
          title: 'Skalierbarer Outreach',
          solution: 'Der Outreach Agent identifiziert Entscheider via API und erstellt versandfertige, hochgradig personalisierte Anschreiben.',
          icon: Zap
        },
        {
          title: 'Human-in-the-Loop',
          solution: 'Sie behalten die volle Kontrolle: Die KI bereitet alles vor, doch die finale Freigabe des Versands erfolgt per Klick durch den Berater.',
          icon: ShieldCheck
        }
      ]
    }
  }
}
</script>