<template>
  <section class="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Desktop + Tablet: 2-Spalten Layout -->
      <div class="hidden sm:flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">

        <!-- Linke Spalte: Dunkelblaue Fläche -->
        <div class="lg:w-1/2 rounded-2xl min-h-[340px] lg:min-h-[480px]"
          style="background: #172b4d;"
        ></div>

        <!-- Rechte Spalte: Testimonial Slideshow -->
        <div class="lg:w-1/2 flex flex-col justify-center gap-4">

          <!-- Überschrift + Text -->
          <div class="flex flex-col gap-3">
            <h2 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black">
              Was unsere Kunden sagen
            </h2>
            <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">
              Recruitingteams berichten, wie matchmaker.hr ihre Prozesse verändert hat.
            </p>
          </div>

          <!-- Slide Content -->
          <div class="relative mt-4">
            <transition name="slide-fade" mode="out-in">
              <div
                :key="currentIndex"
                class="flex flex-col rounded-xl p-6 w-4/5 bg-gray-50 border border-gray-100 min-h-[220px]"
              >
                <!-- Stars -->
                <div class="flex gap-0.5 mb-4">
                  <span v-for="n in 5" :key="n" class="text-amber-400 text-base">★</span>
                </div>

                <!-- Quote -->
                <div class="flex-1 mb-4">
                  <p class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-gray-700 text-center m-0">
                    {{ testimonials[currentIndex].quote }}
                  </p>
                </div>

                <!-- Author -->
                <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold tracking-wider bg-deep-blue text-white">
                    {{ testimonials[currentIndex].initials }}
                  </div>
                  <div class="flex flex-col gap-0.5">
                    <span class="text-p-small-sm md:text-p-small-md font-semibold text-gray-900">{{ testimonials[currentIndex].name }}</span>
                    <span class="text-p-small-sm text-gray-500">{{ testimonials[currentIndex].role }}</span>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!-- Dots Navigation -->
          <div class="flex items-center gap-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="goTo(index)"
              class="transition-all duration-500 rounded-full"
              :class="currentIndex === index
                ? 'w-8 h-2.5 bg-blue'
                : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'"
            />
          </div>

        </div>
      </div>

      <!-- Mobile: Horizontal Scroll -->
      <div class="sm:hidden">
        <div
          ref="scrollContainer"
          class="testimonials-scroll flex flex-row overflow-x-auto snap-x snap-mandatory"
          @scroll="onScroll"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :ref="el => { if (el) cardRefs[index] = el }"
            class="shrink-0 w-screen snap-start px-container-h pb-3"
          >
            <div
              class="flex flex-col rounded-xl p-6 h-full bg-gray-50 border border-gray-100"
            >
              <!-- Stars -->
              <div class="flex gap-0.5 mb-4">
                <span v-for="n in 5" :key="n" class="text-amber-400 text-base">★</span>
              </div>

              <!-- Quote -->
              <div class="flex-1">
                <p class="text-p-small-sm text-gray-700 text-center m-0">
                  {{ testimonial.quote }}
                </p>
              </div>

              <!-- Author -->
              <div class="flex items-center gap-3 pt-4 mt-4 border-t border-gray-100">
                <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold tracking-wider bg-deep-blue text-white">
                  {{ testimonial.initials }}
                </div>
                <div class="flex flex-col gap-0.5">
                  <span class="text-p-small-sm font-semibold text-gray-900">{{ testimonial.name }}</span>
                  <span class="text-p-small-sm text-gray-500">{{ testimonial.role }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll Dots -->
        <div class="px-container-h mt-4">
          <div class="flex items-center gap-2">
            <button
              v-for="(_, index) in testimonials"
              :key="index"
              @click="scrollToCard(index)"
              class="transition-all duration-500 rounded-full"
              :class="activeCardIndex === index ? 'w-8 h-2.5 bg-blue' : 'w-2.5 h-2.5 bg-gray-200'"
            />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingTestimonials',
  data() {
    return {
      currentIndex: 0,
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
        },
        {
          quote: 'Volle Automatisierung wäre im Executive Search undenkbar. Mit matchmaker.hr behalten wir die Kontrolle – ohne auf Effizienz zu verzichten.',
          name: 'Christina Vogt',
          role: 'Partner, Vogt & Associates',
          initials: 'CV'
        }
      ]
    }
  },
  mounted() {
    this.cardRefs = []
  },
  methods: {
    goTo(index) {
      this.currentIndex = index
    },
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
    }
  }
}
</script>

<style scoped>
.testimonials-scroll {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.testimonials-scroll::-webkit-scrollbar { display: none; }

.slide-fade-enter-active {
  transition: opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.slide-fade-leave-active {
  transition: opacity 0.25s cubic-bezier(0.55, 0, 1, 0.45),
              transform 0.25s cubic-bezier(0.55, 0, 1, 0.45);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>