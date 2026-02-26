<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Header -->
      <SectionHeader
        title="Wähle deinen Plan"
        description="Einfache Preise mit allen Tools, die du für effektives Lernen brauchst."
      />

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8" style="grid-auto-rows: 1fr;">

        <!-- Starter -->
        <div class="bg-gray-50 rounded-2xl p-8 flex flex-col border border-gray-100 h-full">
          <div class="mb-6">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-gray-900 mb-2">Starter</h3>
            <p class="paragraph-sm">Ideal für Studierende, die gerade anfangen smarter zu lernen.</p>
          </div>
          <div class="mb-6">
            <span class="text-5xl font-bold text-gray-900">Kostenlos</span>
          </div>
          <ul class="flex flex-col gap-3 flex-1">
            <li v-for="feature in starterFeatures" :key="feature" class="flex items-center gap-2.5 paragraph-sm text-gray-700">
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>

        <!-- Pro (Featured) -->
        <div class="bg-deep-blue rounded-2xl p-8 flex flex-col shadow-xl h-full">
          <div class="mb-6">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-white mb-2">Pro</h3>
            <p class="paragraph-sm text-white/60">Für Studierende, die das Maximum aus ihrer Lernzeit herausholen wollen.</p>
          </div>
          <div class="mb-6 flex items-end gap-1">
            <span class="text-5xl font-bold text-white">9,99€</span>
            <span class="text-white/50 text-sm mb-2">/Monat</span>
          </div>
          <ul class="flex flex-col gap-3 mb-8 flex-1">
            <li v-for="feature in proFeatures" :key="feature" class="flex items-center gap-2.5 text-sm text-white/90">
              <svg class="w-4 h-4 text-light-blue flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              {{ feature }}
            </li>
          </ul>
          <button class="w-full py-3 rounded-xl bg-light-blue hover:bg-light-blue/90 text-white text-sm font-semibold transition-colors duration-200">
            Auf Pro upgraden
          </button>
        </div>

        <!-- University -->
        <div class="bg-gray-50 rounded-2xl p-8 flex flex-col border border-gray-100 h-full">
          <div class="mb-6">
            <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-gray-900 mb-2">Universität</h3>
            <p class="paragraph-sm">Für Hochschulen und Bildungseinrichtungen mit individuellen Anforderungen.</p>
          </div>
          <div class="mb-6">
            <span class="text-5xl font-bold text-gray-900">Individuell</span>
            <span class="text-deep-blue text-sm font-medium ml-1">/Anfrage</span>
          </div>
          <ul class="flex flex-col gap-3 flex-1">
            <li v-for="feature in universityFeatures" :key="feature" class="flex items-center gap-2.5 paragraph-sm text-gray-700">
              <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import SectionHeader from '@/components/common/SectionHeader.vue'

export default {
  name: 'LandingPricing',
  components: {
    SectionHeader
  },
  data() {
    return {
      starterFeatures: [
        'KI-Zusammenfassungen (3 Dokumente/Monat)',
        'Automatische Lernkarten',
        'Basis KI-Chat',
        'PDF & DOCX Upload',
      ],
      proFeatures: [
        'Unbegrenzte KI-Zusammenfassungen',
        'Unbegrenzte Lernkarten',
        'Erweiterter KI-Tutor-Chat',
        'Prüfungsmodus mit Feedback',
        'Spaced Repetition System',
        'Prioritäts-Support',
      ],
      universityFeatures: [
        'Alles aus Pro für alle Studierenden',
        'Admin-Dashboard & Nutzerverwaltung',
        'LMS-Integration (Moodle etc.)',
        'Dedizierter Account Manager',
        'Individuelles Onboarding',
      ]
    }
  }
}
</script>