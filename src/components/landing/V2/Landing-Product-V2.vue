<template>
  <section class="relative bg-white py-6 md:py-8 lg:py-12">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Desktop + Tablet -->
      <div class="hidden sm:flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Linke Spalte: Text -->
        <div class="lg:w-1/2 flex flex-col gap-6 justify-center">

          <!-- Überschrift + Text (statisch) -->
          <div class="flex flex-col gap-4">
            <h2 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-black">
              Was unsere Kunden sagen
            </h2>
            <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black">
              Erfahren Sie, wie Recruitingteams mit matchmaker.hr ihre Prozesse effizienter gestalten und wertvolle Zeit für das Wesentliche gewinnen.
            </p>
          </div>

          <!-- Slide Content -->
          <div class="relative mt-4">

            <!-- Dekoratives Hintergrund-Rechteck (gespiegelt zu LandingProduct) -->
            <div
              class="absolute rounded-2xl bg-blue z-0"
              style="top: -32px; left: -32px; bottom: 32px; right: 32px;"
            ></div>

            <div class="overflow-hidden">
            <transition name="fade-right" mode="out-in">
              <div
                :key="currentIndex"
                class="relative z-10 flex flex-col gap-5 rounded-2xl p-6"
                style="background: #ffffff; padding: 4px; box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06); border: 1px solid #d1d5db;"
              >
                <!-- Stars -->
                <div class="flex gap-1 mb-1">
                  <span v-for="n in 5" :key="n" class="text-amber-400 text-lg">★</span>
                </div>

                <!-- Quote -->
                <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black m-0 font-normal">
                  "{{ testimonials[currentIndex].quote }}"
                </p>

                <!-- Author -->
                <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold tracking-wider bg-deep-blue text-white">
                    {{ testimonials[currentIndex].initials }}
                  </div>
                  <div class="flex flex-col gap-0.5">
                    <span class="font-semibold text-gray-900 text-p-small-sm md:text-p-small-md">{{ testimonials[currentIndex].name }}</span>
                    <span class="text-gray-500 text-p-small-sm">{{ testimonials[currentIndex].role }}</span>
                  </div>
                </div>

              </div>
            </transition>
            </div>
          </div>

          <!-- Dots -->
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

        <!-- Rechte Spalte: Person -->
        <div class="lg:w-1/2 relative flex-shrink-0 flex justify-center" style="height: 500px;">
          <img
            src="@/assets/Person_Mockup.png"
            alt="Recruiting Professional"
            class="absolute z-10"
            style="height: 100%; width: auto; bottom: 0; left: 50%; transform: translateX(-50%); object-fit: contain; object-position: bottom; max-width: 100%;"
          />
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
            <div class="flex flex-col rounded-xl p-6 h-full bg-gray-50 border border-gray-100">
              <div class="flex gap-1 mb-4">
                <span v-for="n in 5" :key="n" class="text-amber-400">★</span>
              </div>
              <p class="text-p-small-sm text-gray-700 flex-1 mb-4 m-0">"{{ testimonial.quote }}"</p>
              <div class="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold bg-deep-blue text-white">
                  {{ testimonial.initials }}
                </div>
                <div>
                  <div class="font-semibold text-gray-900 text-p-small-sm">{{ testimonial.name }}</div>
                  <div class="text-gray-500 text-p-small-sm">{{ testimonial.role }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      container.scrollTo({ left: index * container.offsetWidth, behavior: 'smooth' })
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
</style>