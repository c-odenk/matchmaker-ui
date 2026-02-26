<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">

      <!-- Header -->
      <SectionHeader
        title="Was unsere Kunden sagen"
        description="Recruitingteams berichten, wie matchmaker.hr ihre Prozesse verändert hat."
        align="center"
      />

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="flex flex-col bg-gray-50 border border-gray-200 rounded-2xl p-6">

          <!-- Stars + quote mark -->
          <div class="flex items-center justify-between mb-4">
            <div class="flex gap-0.5">
              <span v-for="n in 5" :key="n" class="text-amber-400 text-base">★</span>
            </div>
            <span class="text-3xl font-serif text-deep-blue/20 leading-none select-none">"</span>
          </div>

          <!-- Quote -->
          <div class="flex-1 min-h-[96px]">
            <p class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-black text-center m-0">
              {{ testimonial.quote }}
            </p>
          </div>

          <!-- Author -->
          <div class="flex items-center gap-3 pt-4 mt-4 border-t border-gray-200">

            <!-- Initials -->
            <div class="w-9 h-9 rounded-full bg-blue text-white flex items-center justify-center flex-shrink-0 text-xs font-bold tracking-wider">
              {{ testimonial.initials }}
            </div>

            <div class="flex flex-col gap-0.5">

              <!-- Name -->
              <span class="text-sm font-semibold text-black">
                {{ testimonial.name }}
              </span>

              <!-- Role -->
              <span class="text-xs text-gray-600">
                {{ testimonial.role }}
              </span>

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
  }
}
</script>
