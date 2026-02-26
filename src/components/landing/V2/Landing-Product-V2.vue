<template>
  <section class="py-20 md:py-28 lg:py-20 bg-white overflow-hidden">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Left: Text -->
        <div class="lg:w-1/2 flex flex-col gap-6">
          <div class="overflow-hidden min-h-[280px] lg:min-h-[320px]">
            <div :key="currentIndex" class="flex flex-col gap-5">

              <!-- Title with inline icon -->
              <div class="flex items-center gap-3">
                <div class="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-blue text-white transition-colors duration-300">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="currentFeature.icon"/>
                  </svg>
                </div>
                <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black leading-snug">
                  {{ currentFeature.title }}
                </h3>
              </div>

              <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">
                {{ currentFeature.description }}
              </p>

              <ul class="flex flex-col gap-2.5 mt-1">
                <li
                  v-for="point in currentFeature.points"
                  :key="point"
                  class="flex items-center gap-3 text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-black"
                >
                  <div class="flex-shrink-0 w-5 h-5 rounded-full bg-blue flex items-center justify-center">
                    <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Dots -->
          <div class="flex items-center gap-2">
            <button
              v-for="(feature, index) in features"
              :key="index"
              @click="goTo(index)"
              class="transition-all duration-500 rounded-full"
              :class="currentIndex === index
                ? 'w-8 h-2.5 bg-blue'
                : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'"
            />
          </div>
        </div>

        <!-- Right: Screenshot -->
        <div class="lg:w-1/2 w-full">
          <div class="relative">

            <!-- Decorative background block -->
            <div
              class="absolute rounded-2xl bg-blue z-0"
              style="top: -32px; right: -32px; bottom: 32px; left: 32px;"
            ></div>

            <!-- White card frame -->
            <transition name="fade-right" mode="out-in">
              <div
                :key="currentIndex"
                class="relative z-10 rounded-2xl overflow-hidden"
                style="background: #ffffff; padding: 4px; box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06); border: 1px solid #d1d5db;"
              >
                <!-- Screenshot -->
                <div
                  v-if="currentImage"
                  class="relative group cursor-zoom-in overflow-hidden rounded-[12px]"
                  style="aspect-ratio: 1512/795;"
                  @click="openLightbox(currentImage, currentFeature.title)"
                >
                  <img
                    :src="currentImage"
                    :alt="currentFeature.title"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div class="absolute inset-0 bg-blue/0 group-hover:bg-blue/10 transition-colors duration-300 flex items-center justify-center">
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
                      <svg class="w-4 h-4 text-deep-blue" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0zM10.5 7.5v6m3-3h-6"/>
                      </svg>
                      <span class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl font-medium text-deep-blue">Vergrößern</span>
                    </div>
                  </div>
                </div>

                <div
                  v-else
                  class="flex flex-col items-center justify-center gap-3 rounded-[12px]"
                  style="aspect-ratio: 1512/795; background: #f5f5f7;"
                >
                  <div class="w-14 h-14 rounded-2xl bg-blue/10 flex items-center justify-center">
                    <svg class="w-7 h-7 text-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" :d="currentFeature.icon"/>
                    </svg>
                  </div>
                  <p class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl font-medium text-gray-400">Screenshot folgt</p>
                </div>

              </div>
            </transition>
          </div>
        </div>

      </div>
    </div>

    <!-- Lightbox -->
    <transition name="lightbox">
      <div
        v-if="lightbox.open"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        @click.self="closeLightbox"
      >
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="closeLightbox"></div>
        <div class="relative z-10 max-w-6xl w-full max-h-[90vh] flex flex-col gap-3">
          <div class="flex items-center justify-between px-1">
            <span class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-white/60">{{ lightbox.title }}</span>
            <button
              @click="closeLightbox"
              class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200"
            >
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Image -->
          <div class="overflow-hidden rounded-2xl shadow-2xl bg-white border border-black">
            <img
              :src="lightbox.src"
              :alt="lightbox.title"
              class="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>

        </div>
      </div>
    </transition>

  </section>
</template>

<script>
import imgSuchkriterien from '@/assets/Suchkriterien-Mockup.png'
import imgNachrichten from '@/assets/Nachrichten-Mockup.png'

const screenshots = {
  'Suchkriterien-Mockup.png': imgSuchkriterien,
  'Nachrichten-Mockup.png': imgNachrichten,
}

export default {
  name: 'LandingProduct',
  data() {
    return {
      currentIndex: 0,
      lightbox: {
        open: false,
        src: null,
        title: ''
      },
      features: [
        {
          title: 'Profiling Agent – Bedarfsanalyse & Profiling',
          description: 'Strukturierte Erfassung des Suchauftrags – der Agent leitet präzise Anforderungsprofile und Suchkriterien für alle nachgelagerten Agenten ab.',
          points: [
            'Strukturierte Erfassung von Anforderungen und Rahmenbedingungen',
            'Automatische Ableitung von Such- und Matching-Kriterien',
            'Einheitliche Profilbasis für alle nachgelagerten Agenten',
          ],
          color: '#172b4d',
          icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
          screenshot: null,
        },
        {
          title: 'Market Agent – Vakanzidentifikation',
          description: 'Kontinuierliches Scanning des Stellenmarkts – neue Vakanzen werden automatisch erfasst, aufbereitet und mit dem Kandidatenpool abgeglichen.',
          points: [
            'Kontinuierliches Scanning von Jobboards und Unternehmenswebsites',
            'Automatischer Abgleich mit bestehenden Kandidatenprofilen',
            'Vollständige Quellenhistorie für jede identifizierte Vakanz',
          ],
          color: '#172b4d',
          icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z',
          screenshot: null,
        },
        {
          title: 'Matching Agent – Intelligentes Scoring',
          description: 'Semantisches Scoring auf Basis von Qualifikation, Karriereverlauf und implizitem Kontext – mit nachvollziehbarer Begründung je Empfehlung.',
          points: [
            'Semantisches Scoring auf Basis der Kandidaten-DNA',
            'Nachvollziehbare KI-Begründung je Empfehlung',
            'Priorisierte Shortlist auf Anforderung',
          ],
          color: '#172b4d',
          icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
          screenshot: 'Suchkriterien-Mockup.png',
        },
        {
          title: 'Outreach Agent – Kontaktierung & Engagement',
          description: 'Automatische Recherche des zuständigen Ansprechpartners, individualisiertes Anschreiben und Bereitstellung zur Freigabe – in Minuten statt Stunden.',
          points: [
            'Automatische Identifikation von Entscheidern via API',
            'Hochgradig personalisierte Anschreiben je Kontakt',
            'Freigabe per Klick – kein manueller Aufwand',
          ],
          color: '#172b4d',
          icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5',
          screenshot: 'Nachrichten-Mockup.png',
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Alle Agenten arbeiten im Hintergrund – die finale Entscheidung liegt beim Berater. Jede Aktion durchläuft einen definierten menschlichen Freigabe-Schritt.',
          points: [
            'Kein automatischer Versand ohne Beratergenehmigung',
            'Transparente Nachvollziehbarkeit jeder Entscheidung',
            'Jederzeit steuerbar, konfigurierbar und anpassbar',
          ],
          color: '#10b981',
          icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
          screenshot: null,
        }
      ]
    }
  },
  computed: {
    currentFeature() {
      return this.features[this.currentIndex]
    },
    currentImage() {
      const name = this.features[this.currentIndex].screenshot
      return name ? screenshots[name] : null
    }
  },
  methods: {
    goTo(index) {
      this.currentIndex = index
    },
    openLightbox(src, title) {
      this.lightbox = { open: true, src, title }
      document.body.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.lightbox.open = false
      document.body.style.overflow = ''
    }
  }
}
</script>

<style scoped>
.fade-right-enter-active {
  transition: opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fade-right-leave-active {
  transition: opacity 0.3s cubic-bezier(0.55, 0, 1, 0.45),
              transform 0.3s cubic-bezier(0.55, 0, 1, 0.45);
}
.fade-right-enter-from {
  opacity: 0;
  transform: translateX(48px);
}
.fade-right-leave-to {
  opacity: 0;
  transform: translateX(-32px);
}

.lightbox-enter-active {
  transition: opacity 0.25s ease;
}
.lightbox-leave-active {
  transition: opacity 0.2s ease;
}
.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}
</style>