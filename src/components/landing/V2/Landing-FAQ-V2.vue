<template>
  <section class="py-12 md:py-16 lg:py-24 2xl:py-36 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">

        <!-- Col 1: Header -->
        <div class="lg:w-1/2 flex flex-col lg:sticky lg:top-28 lg:self-start">
          
          <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-black mb-4">
            Häufig gestellte Fragen
          </h2>

          <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black max-w-lg">
            Antworten auf die wichtigsten Fragen rund um matchmaker.hr und den Einsatz im Recruiting-Alltag.
          </p>

        </div>

        <!-- Col 2: FAQ Items -->
        <div class="lg:w-1/2 flex flex-col">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="border-t border-gray-200 py-5 cursor-pointer group"
            :class="{ 'border-b': index === faqs.length - 1 }"
            @click="toggleFAQ(index)"
          >
            <!-- Question -->
            <div class="flex items-center justify-between gap-6">
              
              <h3
                class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl font-medium text-black m-0 transition-colors duration-150"
              >
                {{ faq.question }}
              </h3>

              <span
                class="text-xl font-light flex-shrink-0 transition-colors duration-150 text-black"
              >
                {{ activeIndex === index ? '−' : '+' }}
              </span>

            </div>

            <!-- Answer -->
            <div v-show="activeIndex === index" class="mt-4">
              <p class="text-p-sm md:text-p-md lg:text-p-lg 2xl:text-p-2xl text-black m-0">
                {{ faq.answer }}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingFaq',
  data() {
    return {
      activeIndex: null,
      faqs: [
        {
          question: 'Für wen ist matchmaker.hr geeignet?',
          answer: 'matchmaker.hr richtet sich an Personalberatungen, Recruiter und Executive-Search-Firmen, die wiederkehrende Prozesse automatisieren und ihre Beratungskapazität skalieren möchten.'
        },
        {
          question: 'Wie funktioniert das KI-gestützte Kandidaten-Matching?',
          answer: 'Der Matching Agent analysiert Kandidatenprofile semantisch – nicht nur auf Basis von Keywords, sondern unter Berücksichtigung von Karriereverlauf, Qualifikationen und implizitem Kontext. Jede Empfehlung wird mit einer nachvollziehbaren KI-Begründung ausgegeben.'
        },
        {
          question: 'Werden Nachrichten automatisch versendet?',
          answer: 'Nein. matchmaker.hr folgt dem Human-in-the-Loop-Prinzip: Alle Aktionen – insbesondere der Outreach – durchlaufen einen menschlichen Freigabe-Schritt. Die KI bereitet vor, der Berater entscheidet.'
        },
        {
          question: 'Welche Datenquellen werden für die Marktanalyse genutzt?',
          answer: 'Der Market Intelligence Agent scannt kontinuierlich öffentlich zugängliche Quellen wie Jobboards, Unternehmenswebsites und Karrierenetzwerke. Die genauen Quellen können konfiguriert werden.'
        },
        {
          question: 'Wie wird die Qualität der generierten Anschreiben sichergestellt?',
          answer: 'Der Outreach Agent erstellt Anschreiben auf Basis des jeweiligen Kandidatenprofils und der Zielposition. Vor dem Versand erfolgt zwingend eine manuelle Prüfung durch den Berater – Anpassungen sind jederzeit möglich.'
        },
        {
          question: 'Ist matchmaker.hr DSGVO-konform?',
          answer: 'Ja. Die Plattform wurde unter Berücksichtigung der DSGVO-Anforderungen entwickelt. Alle Daten werden auf europäischen Servern verarbeitet und gespeichert.'
        }
      ]
    }
  },
  methods: {
    toggleFAQ(index) {
      this.activeIndex = this.activeIndex === index ? null : index
    }
  }
}
</script>
