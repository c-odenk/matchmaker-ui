<template>
  <section id="product" class="py-10 md:py-28 lg:py-20 bg-white overflow-hidden">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      
      <div class="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-12 lg:gap-16">

        <div class="lg:w-1/2 flex flex-col w-full">
          
          <div v-if="currentFeature" class="order-1 mb-6 lg:mb-8">
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <div class="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-dark-blue text-white shadow-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" :d="currentFeature.icon"/>
                  </svg>
                </div>
                
                <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black leading-snug font-bold">
                  <span class="lg:hidden">{{ mobileTitle }}</span>
                  <span class="hidden lg:inline">{{ currentFeature.title }}</span>
                </h3>
              </div>
              <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black leading-relaxed">
                {{ currentFeature.description }}
              </p>
            </div>
          </div>

          <div class="order-2 lg:hidden w-full mb-8">
            <div class="relative w-full aspect-[16/9]">
              <transition name="image-fade" mode="out-in">
                <div v-if="currentFeature" :key="'img-mob-' + currentIndex" class="browser-mockup">
                  <div class="browser-header">
                    <div class="flex gap-1.5">
                      <div class="w-2 h-2 rounded-full bg-[#ff5f57]"></div>
                      <div class="w-2 h-2 rounded-full bg-[#febc2e]"></div>
                      <div class="w-2 h-2 rounded-full bg-[#28c840]"></div>
                    </div>
                  </div>
                  <div class="flex-1 relative bg-gray-50 overflow-hidden" @click="currentImage && openLightbox(currentImage, currentFeature.title)">
                    <img v-if="currentImage" :src="currentImage" class="w-full h-full object-cover object-top" />
                    <div v-else class="placeholder-box">
                       <span class="opacity-30 text-[10px] font-bold uppercase tracking-widest">Screenshot folgt</span>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>

          <div class="order-3 flex flex-col gap-6 lg:gap-10">
            
            <div v-if="currentFeature" class="mt-4 lg:mt-2">
              <ul class="flex flex-col gap-3 lg:gap-4">
                <li v-for="(point, pIdx) in currentFeature.points" :key="'p-' + currentIndex + '-' + pIdx"
                  class="flex items-center gap-3 text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">
                  
                  <div class="flex-shrink-0">
                    <svg class="w-5 h-5 text-dark-blue" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span class="flex-1 leading-snug">{{ point }}</span>
                </li>
              </ul>
            </div>

            <div class="flex items-center gap-2.5">
              <button v-for="(feature, index) in features" :key="'dot-' + index" @click="goTo(index)"
                class="transition-all duration-300 rounded-full h-2.5"
                :class="currentIndex === index ? 'w-8 bg-dark-blue shadow-sm' : 'w-2.5 bg-gray-200 hover:bg-gray-300'" />
            </div>
          </div>
        </div>

        <div class="hidden lg:block lg:w-1/2 w-full">
          <div class="relative w-full aspect-[16/9]">
            <transition name="image-fade" mode="out-in">
              <div v-if="currentFeature" :key="'img-desk-' + currentIndex" class="browser-mockup h-full">
                <div class="browser-header">
                  <div class="flex gap-1.5">
                    <div class="w-2 h-2 rounded-full bg-[#ff5f57]"></div>
                    <div class="w-2 h-2 rounded-full bg-[#febc2e]"></div>
                    <div class="w-2 h-2 rounded-full bg-[#28c840]"></div>
                  </div>
                </div>
                <div class="flex-1 relative overflow-hidden bg-gray-50 group cursor-zoom-in" @click="currentImage && openLightbox(currentImage, currentFeature.title)">
                  <img v-if="currentImage" :src="currentImage" class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
                  <div v-else class="placeholder-box">
                    <p class="opacity-20 text-[10px] font-bold uppercase tracking-widest">Screenshot folgt</p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

      </div>
    </div>

    <transition name="fade">
      <div v-if="lightbox.open" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-black/90 backdrop-blur-xl cursor-pointer" @click="closeLightbox"></div>
        <div class="relative z-10 w-full max-w-6xl flex flex-col gap-4 items-center pointer-events-none">
          <img :src="lightbox.src" class="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-auto border border-white/10" />
          <button @click="closeLightbox" class="pointer-events-auto px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all text-sm font-medium">Schließen</button>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import ProfilingAgentMockup from '@/assets/Profiling-Agent-Mockup.png'
import MarketAgentMockup from '@/assets/Scoring-Mockup.png'
import MatchingAgentMockup from '@/assets/Vacancy-Mockup.png'
import OutreachAgentMockup from '@/assets/Outreach-Agent-Mockup.png'
import HumanInTheLoopMockup from '@/assets/Human-in-the-loop-Mockup.png'

export default {
  name: 'LandingProduct',
  data() {
    return {
      currentIndex: 0,
      lightbox: { open: false, src: null, title: '' },
      features: [
        {
          title: 'Profiling Agent – Bedarfsanalyse & Profiling',
          description: 'Strukturierte Erfassung des Suchauftrags – der Agent leitet ein präzises Qualifikationsprofil und Suchkriterien für alle nachgelagerten Agenten ab.',
          points: [
            'Strukturierte Erfassung von Qualifikationen und Rahmenbedingungen',
            'Automatische Ableitung von Such- und Matching-Kriterien',
            'Einheitliche Profilbasis für alle nachgelagerten Agenten',
          ],
          icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
          screenshot: ProfilingAgentMockup,
        },
        {
          title: 'Market Agent – Vakanzidentifikation',
          description: 'Kontinuierliches Scanning des Stellenmarkts – neue Vakanzen werden automatisch erfasst, aufbereitet und mit dem Kandidatenpool abgeglichen.',
          points: [
            'Kontinuierliches Scanning von Jobboards und Unternehmenswebsites',
            'Automatischer Abgleich mit bestehenden Kandidatenprofilen',
            'Vollständige Quellenhistorie für jede identifizierte Vakanz',
          ],
          icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 0z',
          screenshot: MarketAgentMockup,
        },
        {
          title: 'Matching Agent – Intelligentes Scoring',
          description: 'Semantisches Scoring auf Basis von Qualifikation, Karriereverlauf und implizitem Kontext – mit nachvollziehbarer Begründung je Empfehlung.',
          points: [
            'Semantisches Scoring auf Basis der Kandidaten-DNA',
            'Nachvollziehbare KI-Begründung je Empfehlung',
            'Priorisierte Shortlist auf Anforderung',
          ],
          icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25a2.25 2.25 0 0113.5 18v-2.25z',
          screenshot: MatchingAgentMockup,
        },
        {
          title: 'Outreach Agent – Kontaktierung & Engagement',
          description: 'Automatische Recherche des zuständigen Ansprechpartners, individualisiertes Anschreiben und Bereitstellung zur Freigabe – in Minuten statt Stunden.',
          points: [
            'Automatische Identifikation von Entscheidern via API',
            'Hochgradig personalisierte Anschreiben je Kontakt',
            'Freigabe per Klick – kein manueller Aufwand',
          ],
          icon: 'M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5',
          screenshot: OutreachAgentMockup,
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Alle Agenten arbeiten im Hintergrund – die finale Entscheidung liegt beim Berater. Jede Aktion durchläuft einen definierten menschlichen Freigabe-Schritt.',
          points: [
            'Kein automatischer Versand ohne Beratergenehmigung',
            'Transparente Nachvollziehbarkeit jeder Entscheidung',
            'Jederzeit steuerbar, konfigurierbar und anpassbar',
          ],
          icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
          screenshot: HumanInTheLoopMockup,
        }
      ]
    }
  },
  computed: {
    currentFeature() {
      return this.features[this.currentIndex] || this.features[0]
    },
    currentImage() {
      return this.currentFeature?.screenshot || null
    },
    mobileTitle() {
      if (!this.currentFeature?.title) return ''
      const parts = this.currentFeature.title.split(' – ')
      return parts.length > 1 ? parts[1] : this.currentFeature.title
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
.browser-mockup {
  @apply w-full h-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white flex flex-col;
}
.browser-header {
  @apply flex-shrink-0 flex items-center px-4 py-1.5 bg-[#1e2d42] border-b border-white/5;
}
.placeholder-box {
  @apply h-full w-full flex flex-col items-center justify-center bg-[#1a2a3f] text-white/40;
}
.image-fade-enter-active, .image-fade-leave-active {
  transition: opacity 0.3s ease;
}
.image-fade-enter-from, .image-fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>