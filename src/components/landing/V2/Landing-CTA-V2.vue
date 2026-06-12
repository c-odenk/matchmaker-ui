<template>
  <section ref="ctaSection" id="cta" class="py-12 md:py-16 lg:py-20 2xl:py-16">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <div
        class="relative overflow-hidden rounded-3xl flex flex-col lg:flex-row items-center gap-10 lg:gap-0 px-8 md:px-12 lg:px-16 py-12 lg:py-16 2xl:py-20 bg-dark-blue"
      >

        <!-- Glow-Effekt im Hintergrund -->
        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
          <div
            class="absolute"
            style="
              top: -30%;
              right: -10%;
              width: 60%;
              height: 100%;
              background: radial-gradient(ellipse at center, rgba(41, 118, 214, 0.4) 0%, transparent 70%);
              filter: blur(50px);
            "
          ></div>
        </div>

        <!-- Text links -->
        <div class="lg:w-1/2 flex flex-col gap-5 z-10 cta-animate-text" style="animation-delay: 0s">
          <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-white leading-tight">
            {{ heading }}
          </h2>
          <p class="text-p-lead-sm md:text-p-lead-md lg:text-p-lead-lg 2xl:text-p-lead-2xl text-white max-w-md">
            {{ subtext }}
          </p>
          <div class="self-start">
            <ButtonSecondary :icon="CalendarDays" @click="showDemoModal = true">
              Jetzt Demo vereinbaren
            </ButtonSecondary>
          </div>
        </div>

        <!-- Mockup rechts -->
        <div class="lg:w-1/2 relative h-[240px] md:h-[300px] lg:h-[300px] w-full flex items-center justify-end lg:overflow-visible cta-animate-image" style="animation-delay: 0.2s">
          <div
            class="absolute rounded-2xl overflow-hidden flex flex-col bg-browser-frame"
            style="
              width: 95%;
              aspect-ratio: 16/9;
              top: 50%;
              right: 0%;
              transform: translateY(-50%);
              box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3);
              border: 1px solid rgba(255,255,255,0.08);
            "
          >
            <!-- Browser Bar -->
            <div class="flex items-center gap-1.5 px-3 py-1.5 flex-shrink-0 bg-browser-frame-bar" style="border-bottom: 1px solid rgba(255,255,255,0.07);">
              <div class="w-2 h-2 rounded-full" style="background: #ff5f57;"></div>
              <div class="w-2 h-2 rounded-full" style="background: #febc2e;"></div>
              <div class="w-2 h-2 rounded-full" style="background: #28c840;"></div>
              <div class="ml-2 rounded px-2 py-0.5" style="background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.3); font-size: 0.6rem;">
                matchmaker.hr
              </div>
            </div>
            <!-- Screenshot -->
            <div class="flex-1 relative overflow-hidden">
              <img :src="workflowMockup" alt="Workflow-Ansicht in matchmaker.hr mit Agenten-Pipeline und Freigabe-Schritten" class="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- Demo Modal -->
    <ModalDemo :isOpen="showDemoModal" @close="showDemoModal = false" />
  </section>
</template>

<script>
import { CalendarDays } from 'lucide-vue-next'
import ButtonSecondary from '@/components/common/ButtonSecondary.vue'
import ModalDemo from '@/components/modals/ModalDemo.vue'
import workflowMockup from '@/assets/Workflow-Mockup.png'

export default {
  name: 'LandingCta',
  components: { ButtonSecondary, ModalDemo },
  data() {
    return {
      CalendarDays,
      workflowMockup,
      showDemoModal: false,
      heading: 'Recruiting-Prozesse automatisieren. Beratungsqualität steigern.',
      subtext: 'matchmaker.hr verbindet KI-gestützte Automatisierung mit menschlichem Urteilsvermögen.'
    }
  },
  mounted() {
    this.setupIntersectionObserver()
  },
  methods: {
    setupIntersectionObserver() {
      if (!this.$refs.ctaSection) return
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cta-animated')
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: 0.3 })
      observer.observe(this.$refs.ctaSection)
    }
  }
}
</script>

<style scoped>
.cta-animate-text {
  opacity: 0;
  transform: translateX(-30px);
}

.cta-animate-image {
  opacity: 0;
  transform: scale(0.95) translateX(30px);
}

.cta-animated .cta-animate-text {
  animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.cta-animated .cta-animate-image {
  animation: slideInFromRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes slideInFromLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  to {
    opacity: 1;
    transform: scale(1) translateX(0);
  }
}
</style>