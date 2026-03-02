<template>
  <section class="py-4 md:py-6 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      <!-- Header -->
      <SectionHeader
        title="Was unsere Nutzer sagen"
        description="Mehr Verständnis, bessere Prüfungsvorbereitung und effektiveres Lernen – mit KI-gestützten Tools zum Erfolg."
        align="center"
      />

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="flex flex-col gap-4 bg-gray-50 border border-gray-100 rounded-xl p-6"
        >
          <!-- Stars -->
          <div class="flex gap-0.5">
            <span v-for="n in 5" :key="n" class="text-amber-400 text-base">★</span>
          </div>

          <!-- Quote -->
          <p class="paragraph-sm text-gray-700 flex-1 m-0 text-center">
            {{ testimonial.quote }}
          </p>

          <!-- Author -->
          <div class="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
            <div class="w-9 h-9 rounded-full bg-deep-blue text-white flex items-center justify-center flex-shrink-0 text-xs font-bold tracking-wider">
              {{ testimonial.initials }}
            </div>
            <div class="flex flex-col gap-0.5">
              <span class="text-p-small-sm md:text-p-small-md font-semibold text-gray-900">{{ testimonial.name }}</span>
              <span class="text-p-small-sm text-gray-500">{{ testimonial.role }}</span>
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
  components: {
    SectionHeader
  },
  data() {
    return {
      testimonials: [
        {
          quote: '"Die KI-gestützte Zusammenfassung hilft mir, Skripte schnell zu erfassen. Besonders die Lernkarten sind ideal, um Wissen langfristig zu behalten und gezielt zu wiederholen."',
          name: 'Anna Müller',
          role: 'Skripte schneller verstehen',
          initials: 'AM'
        },
        {
          quote: '"Die KI extrahiert die wichtigsten Themen aus meinen Unterlagen, wodurch ich mich perfekt auf Prüfungen konzentrieren kann. Die Übungsfragen mit Feedback sind dabei besonders hilfreich."',
          name: 'Thomas Schmidt',
          role: 'Gezielte Prüfungsvorbereitung',
          initials: 'TS'
        },
        {
          quote: '"Der KI-Tutor ist eine riesige Hilfe! Ich kann jederzeit Fragen stellen und bekomme sofort präzise Antworten. So erkenne ich meine Wissenslücken schneller und gezielter."',
          name: 'Laura Meier',
          role: 'Schnelle Antworten auf alle Fragen',
          initials: 'LM'
        },
        {
          quote: '"Seit ich die Plattform nutze, lerne ich viel strukturierter. Die klaren Zusammenfassungen und interaktiven Aufgaben motivieren mich und geben mir Sicherheit für jede Prüfung."',
          name: 'David Weber',
          role: 'Effizient und motivierend',
          initials: 'DW'
        }
      ]
    }
  }
}
</script>