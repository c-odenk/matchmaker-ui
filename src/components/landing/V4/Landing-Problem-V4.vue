<template>
  <section ref="problemSection" id="problem" class="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <SectionHeader
        label="Das Problem"
        title="Ihre Zeit gehört der Beratung."
        titleAccent="Beratung"
        description="Nicht dem manuellen Sourcing. Recruiting frisst Stunden mit wiederkehrender Klickarbeit – Zeit, die für Mandate und Kandidaten fehlt."
        align="center"
        marginBottom="mb-12"
      />

      <!-- Schlankes Vergleichs-Panel: links gedämpft (heute), rechts dezent hervorgehoben (mit matchmaker.hr) -->
      <div
        class="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden problem-animate-item"
      >
        <div class="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">

          <!-- Ohne matchmaker.hr -->
          <div class="p-7 md:p-8">
            <p class="text-p-small-sm md:text-p-small-md font-semibold uppercase tracking-wider text-gray-400 mb-6">
              Ohne matchmaker.hr
            </p>
            <ul class="flex flex-col gap-4">
              <li v-for="(item, i) in painPoints" :key="i" class="flex items-start gap-3">
                <X class="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" :stroke-width="2.5" />
                <span class="flex-1 text-p-sm md:text-p-md text-gray-500 leading-snug">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Mit matchmaker.hr -->
          <div class="p-7 md:p-8 bg-light-blue/[0.04]">
            <p class="text-p-small-sm md:text-p-small-md font-semibold uppercase tracking-wider text-light-blue mb-6">
              Mit matchmaker.hr
            </p>
            <ul class="flex flex-col gap-4">
              <li v-for="(item, i) in solutions" :key="i" class="flex items-start gap-3">
                <Check class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" :stroke-width="2.5" />
                <span class="flex-1 text-p-sm md:text-p-md text-gray-900 leading-snug">{{ item }}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { X, Check } from 'lucide-vue-next'
import SectionHeader from '@/components/common/SectionHeader.vue'

export default {
  name: 'LandingProblem',
  components: { X, Check, SectionHeader },
  data() {
    return {
      // Reihenfolge gespiegelt: jede Zeile links (Problem) entspricht der Zeile rechts (Lösung).
      painPoints: [
        'Stundenlanges Sourcing per Hand über zig Jobboards',
        'Der Talentpool veraltet, kaum jemand pflegt ihn nach',
        'Anschreiben werden einzeln recherchiert und getippt',
        'Mehr Mandate gehen nur über mehr Personal',
      ],
      solutions: [
        'Der Markt-Scan läuft kontinuierlich und automatisch',
        'Der Talentpool bleibt durch laufenden Abgleich aktuell',
        'Personalisierter Outreach – versandfertig auf einen Klick',
        'Skalierung ohne Neueinstellung, der Berater entscheidet',
      ],
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  methods: {
    setupIntersectionObserver() {
      if (!this.$refs.problemSection) return
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('problem-animated')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.15 })
      observer.observe(this.$refs.problemSection)
    }
  }
}
</script>

<style scoped>
.problem-animate-item {
  opacity: 0;
  transform: translateY(20px);
}

.problem-animated .problem-animate-item {
  animation: problemFadeUp 0.6s ease forwards;
}

@keyframes problemFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
