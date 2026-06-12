<template>
  <section ref="testimonialsSection" id="testimonials" class="py-12 md:py-16 bg-white overflow-x-hidden">
    <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Header -->
      <SectionHeader
        title="Was unsere Kunden sagen"
        description="Recruitingteams berichten, wie matchmaker.hr ihre Prozesse verändert."
        align="left"
      />

    </div>

    <!-- Mobile: Horizontal Scroll -->
    <div class="sm:hidden mt-6">
      <div class="mx-auto max-w-container-sm px-container-h">
        <div
          ref="scrollContainer"
          class="testimonials-scroll flex flex-row overflow-x-auto snap-x snap-mandatory"
          @scroll="onScroll"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :ref="el => { if (el) cardRefs[index] = el }"
            class="shrink-0 w-full snap-start pb-3"
          >
            <div
              class="bg-gray-50 border border-gray-200 flex flex-col rounded-2xl p-5 relative overflow-hidden h-full testimonials-animate-card"
              :style="{ 'animation-delay': `${0 + index * 0.25}s` }"
            >
              <!-- Stars + quote mark -->
              <div class="relative z-10 flex items-center justify-between mb-4">
                <div class="flex gap-0.5">
                  <span v-for="n in 5" :key="n" class="text-amber-400 text-base">★</span>
                </div>
                <span class="text-3xl font-serif leading-none select-none text-dark-blue">"</span>
              </div>

              <!-- Quote -->
              <div class="relative z-10 flex-1">
                <p class="text-p-small-sm text-gray-700 text-left m-0">
                  {{ testimonial.quote }}
                </p>
              </div>

              <!-- Author -->
              <div class="relative z-10 flex items-center gap-3 pt-1.5 mt-1.5 border-t border-gray-200">
                <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold tracking-wider bg-dark-blue text-white">
                  {{ testimonial.initials }}
                </div>
                <div class="flex flex-col gap-0.5">
                  <span class="text-sm font-semibold text-gray-900">{{ testimonial.name }}</span>
                  <span class="text-xs text-gray-500">{{ testimonial.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Dots -->
        <div class="flex items-center gap-2 mt-4">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click="scrollToCard(index)"
            class="transition-all duration-500 rounded-full"
            :class="activeCardIndex === index
              ? 'w-8 h-2.5 bg-dark-blue'
              : 'w-2.5 h-2.5 bg-gray-200'"
          />
        </div>
      </div>
    </div>

    <!-- Tablet + Desktop: Grid -->
    <div class="hidden sm:block mx-auto max-w-container-sm md:max-w-container-md lg:max-w-container-lg 2xl:max-w-container px-container-h mt-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-gray-50 border border-gray-200 flex flex-col rounded-2xl p-6 relative overflow-hidden testimonials-animate-card"
          :style="{ 'animation-delay': `${0 + index * 0.25}s` }"
        >
          <!-- Stars + quote mark -->
          <div class="relative z-10 flex items-center justify-between mb-4">
            <div class="flex gap-0.5">
              <span v-for="n in 5" :key="n" class="text-amber-400 text-base">★</span>
            </div>
            <span class="text-3xl font-serif leading-none select-none text-dark-blue">"</span>
          </div>

          <!-- Quote -->
          <div class="relative z-10 flex-1 min-h-[96px] mb-0">
            <p class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-gray-700 text-left m-0">
              {{ testimonial.quote }}
            </p>
          </div>

          <!-- Author -->
          <div class="relative z-10 flex items-center gap-3 pt-1.5 mt-1.5 border-t border-gray-200">
            <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold tracking-wider bg-dark-blue text-white">
              {{ testimonial.initials }}
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm font-semibold text-gray-900">{{ testimonial.name }}</span>
              <span class="text-xs text-gray-500">{{ testimonial.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import SectionHeader from '@/components/common/SectionHeader.vue'

export default {
  name: 'LandingTestimonials',
  components: { SectionHeader },
  data() {
    return {
      activeCardIndex: 0,
      cardRefs: [],
      testimonials: [
        {
          quote: 'Der Market Intelligence Agent liefert täglich qualifizierte Vakanzen – ohne manuelles Jobboard-Screening. Unser Sourcing-Aufwand hat sich halbiert.',
          name: 'Markus Brandt',
          role: 'Senior Consultant, Brandt & Partner',
          initials: 'MB'
        },
        {
          quote: 'Wir erhalten nicht mehr die meisten Treffer, sondern die richtigen – mit einer Begründung, die wir Kunden direkt präsentieren können.',
          name: 'Sabine Richter',
          role: 'Head of Recruiting, TalentBridge',
          initials: 'SR'
        },
        {
          quote: 'Die Anschreiben sind individuell, professionell und versandfertig. Wir geben nur noch frei – das spart täglich mehrere Stunden.',
          name: 'Jonas Hartmann',
          role: 'MD, Neo Executive Search',
          initials: 'JH'
        }
      ]
    }
  },
  mounted() {
    this.cardRefs = []
    this.setupIntersectionObserver()
  },
  methods: {
    onScroll() {
      const container = this.$refs.scrollContainer
      if (!container) return
      this.activeCardIndex = Math.round(container.scrollLeft / container.offsetWidth)
    },
    scrollToCard(index) {
      const container = this.$refs.scrollContainer
      if (!container) return
      container.scrollTo({
        left: index * container.offsetWidth,
        behavior: 'smooth'
      })
    },
    setupIntersectionObserver() {
      if (!this.$refs.testimonialsSection) return
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('testimonials-animated')
            observer.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.3
      })
      
      observer.observe(this.$refs.testimonialsSection)
    }
  }
}
</script>

<style scoped>
.testimonials-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.testimonials-scroll::-webkit-scrollbar {
  display: none;
}

.testimonials-animate-card {
  opacity: 0;
  transform: translateY(20px);
}

.testimonials-animated .testimonials-animate-card {
  animation: testimonialsFadeUp 0.6s ease forwards;
}

@keyframes testimonialsFadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>