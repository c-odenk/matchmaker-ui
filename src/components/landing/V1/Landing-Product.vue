<template>
  <section class="py-12 md:py-16 bg-white overflow-hidden">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Header -->
       <!--
      <SectionHeader
        title="Alles was du zum Lernen brauchst"
        description="Von der Zusammenfassung bis zum Prüfungsmodus – StudyAI begleitet dich durch jeden Schritt deines Studiums."
        margin-bottom="mb-16"
        align="left"
      />
      -->
      <!-- Carousel -->
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Left: Text -->
        <div class="lg:w-1/2 flex flex-col gap-5">

          <div class="overflow-hidden min-h-[280px] lg:min-h-[320px]">
            <transition name="slide-up" mode="out-in">
              <div :key="currentIndex" class="flex flex-col gap-5">
                <div class="flex flex-col gap-2">
                  <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-gray-900 leading-snug">
                    {{ currentFeature.title }}
                  </h3>
                  <div class="w-24 h-1 bg-deep-blue"></div>
                </div>
                <p class="paragraph-lg">
                  {{ currentFeature.description }}
                </p>
                <ul class="flex flex-col gap-3 mt-1">
                  <li
                    v-for="point in currentFeature.points"
                    :key="point"
                    class="flex items-center gap-3 paragraph-base"
                  >
                    <div class="flex-shrink-0 w-5 h-5 rounded-full bg-deep-blue flex items-center justify-center">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    {{ point }}
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>

        <!-- Right: Screenshot -->
        <div class="lg:w-1/2 w-full">
          <transition name="slide-left" mode="out-in">
            <div
              :key="currentIndex"
              class="relative w-full h-[340px] lg:h-[400px]"
            >
              <div class="absolute inset-0 overflow-hidden rounded-2xl border border-gray-200 py-2 px-4 shadow-lg shadow-zinc-950/15 bg-white">
                <img
                  v-if="currentFeature.image"
                  :src="currentFeature.image"
                  :alt="currentFeature.title"
                  class="w-full h-full object-contain object-center rounded-2xl"
                />
                <div v-else class="w-full h-full flex flex-col items-center justify-center gap-3">
                  <div class="w-12 h-12 rounded-xl bg-deep-blue/10 flex items-center justify-center">
                    <svg class="w-6 h-6 text-deep-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" :d="currentFeature.icon"/>
                    </svg>
                  </div>
                  <p class="text-xs font-medium text-gray-400">Screenshot folgt</p>
                </div>
              </div>
            </div>
          </transition>
        </div>

      </div>

      <!-- Dots – below the entire carousel row -->
      <div class="flex items-center justify-start gap-3 mt-12">
        <button
          v-for="(feature, index) in features"
          :key="index"
          @click="goTo(index)"
          class="transition-all duration-300 rounded-full"
          :class="currentIndex === index
            ? 'w-8 h-3 bg-deep-blue'
            : 'w-3 h-3 bg-gray-200 hover:bg-gray-300'"
        />
      </div>

    </div>
  </section>
</template>

<script>
// import SectionHeader from '@/components/common/SectionHeader.vue'
import imgSuchkriterien from '@/assets/Suchkriterien-Mockup.png'
import imgNachrichten from '@/assets/Nachrichten-Mockup.png'

export default {
  name: 'LandingProduct',
  // components: { SectionHeader },
  data() {
    return {
      currentIndex: 0,
      features: [
        {
          title: 'KI-Zusammenfassungen in Sekunden',
          description: 'Der Market Intelligence Agent scannt in festgelegten Intervallen das Web nach exakt passenden Vakanzen für Ihren Kandidatenpool.',
          points: [
            'Unterstützt PDF, DOCX und TXT',
            'Kernthemen automatisch extrahiert',
            'Übersichtlich gegliederte Ausgabe',
          ],
          icon: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V19.5a2.25 2.25 0 002.25 2.25h.75'
        },
        {
          title: 'Intelligente Lernkarten',
          description: 'Der Matching Agent liefert ein semantisches Scoring basierend auf der „Kandidaten-DNA" und liefert die KI-Begründung sofort mit.',
          points: [
            'Automatisch aus deinen Unterlagen generiert',
            'Spaced Repetition für nachhaltiges Lernen',
            'Lernfortschritt jederzeit im Blick',
          ],
          icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
          image: imgSuchkriterien,
          aspectRatio: '2940/1912'
        },
        {
          title: 'KI-Tutor Chat',
          description: 'Der Outreach Agent erstellt versandfertige, hochgradig personalisierte Anschreiben.',
          points: [
            'Immer verfügbar, sofort antwortend',
            'Kontext aus deinen eigenen Dokumenten',
            'Erklärt komplexe Themen verständlich',
          ],
          icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z'
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Sie behalten die volle Kontrolle: unsere Agenten bereiten alles vor - doch die finale Freigabe des Versands erfolgt per Klick durch den Berater.',
          points: [
            'Realistische Prüfungssimulation',
            'Detailliertes Feedback pro Antwort',
            'Wissenslücken gezielt schließen',
          ],
          icon: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5',
          image: imgNachrichten,
          aspectRatio: '2887/1538'
        }
      ]
    }
  },
  computed: {
    currentFeature() {
      return this.features[this.currentIndex]
    }
  },
  methods: {
    goTo(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
/* Simple fade for both */
.slide-up-enter-active,
.slide-up-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.25s ease;
}
.slide-up-enter-from,
.slide-up-leave-to,
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
}
</style>