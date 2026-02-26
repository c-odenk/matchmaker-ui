<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-20">

        <!-- Col 1: Header -->
        <div class="lg:w-2/5 flex flex-col lg:sticky lg:top-28 lg:self-start">
          <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-black leading-tight mb-4">
            Häufig gestellte Fragen
          </h2>
          <p class="paragraph-lg max-w-xs">
            Hier findest du Antworten auf die häufigsten Fragen rund um unser Angebot.
          </p>
        </div>

        <!-- Col 2: FAQ Items -->
        <div class="lg:w-3/5 flex flex-col">
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
                class="text-p-sm md:text-p-md font-semibold leading-snug m-0 transition-colors duration-150"
                :class="activeIndex === index ? 'text-gray-900' : 'text-gray-700 group-hover:text-gray-900'"
              >
                {{ faq.question }}
              </h3>
              <span
                class="text-xl font-light flex-shrink-0 transition-colors duration-150"
                :class="activeIndex === index ? 'text-gray-900' : 'text-gray-400 group-hover:text-gray-700'"
              >
                {{ activeIndex === index ? '−' : '+' }}
              </span>
            </div>

            <!-- Answer -->
            <div v-show="activeIndex === index" class="mt-4">
              <p class="paragraph-base text-gray-900 m-0">
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
          question: 'Wie hilft mir die KI beim Lernen?',
          answer: 'Unsere KI analysiert deine hochgeladenen Skripte, erstellt verständliche Zusammenfassungen, generiert interaktive Lernkarten und beantwortet deine Fragen in einem intelligenten Chat. So lernst du effizienter und sparst Zeit.'
        },
        {
          question: 'Welche Dateiformate kann ich hochladen?',
          answer: 'Du kannst gängige Formate wie PDF, DOCX und TXT hochladen. Unsere KI verarbeitet deine Inhalte und erstellt daraus maßgeschneiderte Lernmaterialien.'
        },
        {
          question: 'Wie funktioniert das Wiederholen mit Lernkarten?',
          answer: 'Die KI erstellt automatisch interaktive Lernkarten aus deinen Unterlagen und nutzt die Spaced Repetition Methode, damit du dir den Stoff langfristig merkst.'
        },
        {
          question: 'Wie wird die Qualität der Zusammenfassungen und Lernkarten sichergestellt?',
          answer: 'Unsere KI nutzt fortschrittliche Algorithmen, um die Kernthemen deiner Dokumente zu extrahieren und prägnante, verständliche Zusammenfassungen sowie Lernkarten zu erstellen. Die Qualität wird kontinuierlich optimiert.'
        },
        {
          question: 'Kann ich die KI für spezifische Fachbereiche nutzen?',
          answer: 'Ja, die KI ist flexibel und kann für eine Vielzahl von Fachbereichen genutzt werden. Ob für Ingenieurwissenschaften, Medizin, Wirtschaft oder andere Disziplinen – die Plattform hilft dir, den Stoff effizient zu bearbeiten.'
        },
        {
          question: 'Bietet die Plattform Unterstützung für mehrere Sprachen?',
          answer: 'Zurzeit ist die Plattform auf die deutsche Sprache ausgerichtet. Zusätzliche Sprachunterstützung ist geplant.'
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