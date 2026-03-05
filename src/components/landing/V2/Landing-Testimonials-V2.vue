<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Header -->
      <SectionHeader
        title="Was unsere Kunden sagen"
        description="Recruitingteams berichten, wie matchmaker.hr ihre Prozesse verändert hat."
        align="center"
      />

    </div>

    <!-- Mobile: Horizontal Scroll -->
    <div class="sm:hidden mt-6">
      <div
        ref="scrollContainer"
        class="testimonials-scroll flex flex-row gap-3 overflow-x-auto pb-3 snap-x snap-mandatory"
        style="padding-left: 1.5rem; scroll-padding-left: 1.5rem;"
        @scroll="onScroll"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :ref="el => { if (el) cardRefs[index] = el }"
          class="flex flex-col rounded-2xl p-5 relative overflow-hidden snap-start shrink-0 w-[calc(100vw-3rem)]"
          style="background: linear-gradient(135deg, #0f1e35 0%, #172b4d 50%, #1a3560 100%); border: 1px solid rgba(255,255,255,0.08);"
        >
          <!-- Blauer Glow -->
          <div
            class="pointer-events-none absolute rounded-full"
            style="width: 80%; height: 60%; top: -30%; left: -10%; background: radial-gradient(ellipse, rgba(41,118,214,0.2) 0%, transparent 70%); filter: blur(30px);"
          ></div>

          <!-- Stars + quote mark -->
          <div class="relative z-10 flex items-center justify-between mb-4">
            <div class="flex gap-0.5">
              <span v-for="n in 5" :key="n" class="text-amber-400 text-base">★</span>
            </div>
            <span class="text-3xl font-serif leading-none select-none" style="color: rgba(255,255,255,0.15);">"</span>
          </div>

          <!-- Quote -->
          <div class="relative z-10 flex-1">
            <p class="text-p-small-sm text-white text-center m-0">
              {{ testimonial.quote }}
            </p>
          </div>

          <!-- Author -->
          <div class="relative z-10 flex items-center gap-3 pt-4 mt-4" style="border-top: 1px solid rgba(255,255,255,0.1);">
            <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold tracking-wider" style="background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.9);">
              {{ testimonial.initials }}
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm font-semibold text-white">{{ testimonial.name }}</span>
              <span class="text-xs" style="color: rgba(255,255,255,0.5);">{{ testimonial.role }}</span>
            </div>
          </div>
        </div>

        <!-- Spacer rechts -->
        <div class="shrink-0 w-6" aria-hidden="true" />
      </div>

      <!-- Scroll Dots -->
      <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h mt-4">
        <div class="flex items-center gap-2">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click="scrollToCard(index)"
            class="transition-all duration-500 rounded-full"
            :class="activeCardIndex === index
              ? 'w-8 h-2.5 bg-blue'
              : 'w-2.5 h-2.5 bg-gray-200'"
          />
        </div>
      </div>
    </div>

    <!-- Tablet + Desktop: Grid -->
    <div class="hidden sm:block mx-auto max-w-container-lg 2xl:max-w-container px-container-h mt-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="flex flex-col rounded-2xl p-6 relative overflow-hidden"
          style="background: linear-gradient(135deg, #0f1e35 0%, #172b4d 50%, #1a3560 100%); border: 1px solid rgba(255,255,255,0.08);"
        >
          <!-- Blauer Glow -->
          <div
            class="pointer-events-none absolute rounded-full"
            style="width: 80%; height: 60%; top: -30%; left: -10%; background: radial-gradient(ellipse, rgba(41,118,214,0.2) 0%, transparent 70%); filter: blur(30px);"
          ></div>

          <!-- Stars + quote mark -->
          <div class="relative z-10 flex items-center justify-between mb-4">
            <div class="flex gap-0.5">
              <span v-for="n in 5" :key="n" class="text-amber-400 text-base">★</span>
            </div>
            <span class="text-3xl font-serif leading-none select-none" style="color: rgba(255,255,255,0.15);">"</span>
          </div>

          <!-- Quote -->
          <div class="relative z-10 flex-1 min-h-[96px]">
            <p class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-white text-center m-0">
              {{ testimonial.quote }}
            </p>
          </div>

          <!-- Author -->
          <div class="relative z-10 flex items-center gap-3 pt-4 mt-4" style="border-top: 1px solid rgba(255,255,255,0.1);">
            <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold tracking-wider" style="background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.9);">
              {{ testimonial.initials }}
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-sm font-semibold text-white">{{ testimonial.name }}</span>
              <span class="text-xs" style="color: rgba(255,255,255,0.5);">{{ testimonial.role }}</span>
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
    onScroll() {
      const container = this.$refs.scrollContainer
      if (!container) return
      const containerLeft = container.getBoundingClientRect().left
      let closest = 0
      let minDistance = Infinity
      this.cardRefs.forEach((card, index) => {
        if (!card) return
        const cardLeft = card.getBoundingClientRect().left - containerLeft
        const distance = Math.abs(cardLeft)
        if (distance < minDistance) {
          minDistance = distance
          closest = index
        }
      })
      this.activeCardIndex = closest
    },
    scrollToCard(index) {
      const card = this.cardRefs[index]
      const container = this.$refs.scrollContainer
      if (!card || !container) return
      const containerPadding = parseInt(getComputedStyle(container).paddingLeft)
      container.scrollTo({
        left: card.offsetLeft - containerPadding,
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
.testimonials-scroll::-webkit-scrollbar {
  display: none;
}
</style>