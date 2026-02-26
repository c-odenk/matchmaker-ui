<template>
  <section class="py-12 md:py-16 bg-white">
    <div class="mx-auto max-w-container px-container-h">

      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-gray-900 leading-tight mb-4">
          So funktioniert smarter lernen
        </h2>
        <p class="paragraph-lead text-gray-500 max-w-2xl mx-auto">
          StudyAI bringt Struktur und Effizienz in dein Studium – damit du dich auf das Wesentliche konzentrieren kannst.
        </p>
      </div>

      <!-- Content: Text left, Visual right -->
      <div class="flex flex-col lg:flex-row items-center gap-16">

        <!-- Left: Features -->
        <div class="lg:w-1/2 flex flex-col gap-2">
          <p class="paragraph-base font-bold text-gray-900 mb-4">Kein Chaos. Nur effektives Lernen.</p>

          <ul class="flex flex-col gap-6">
            <li v-for="item in workflowItems" :key="item.text" class="flex items-start gap-4">
              <div class="flex-shrink-0 w-6 h-6 rounded-full bg-deep-blue flex items-center justify-center mt-0.5">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <p class="paragraph-base m-0">{{ item.text }}</p>
            </li>
          </ul>
        </div>

        <!-- Right: Decorative visual placeholder -->
        <div class="lg:w-1/2 flex items-center justify-center">
          <div class="relative w-full max-w-md aspect-[4/3]">
            <!-- Background rectangle (teal, offset) -->
            <div class="absolute bottom-0 right-0 w-4/5 h-4/5 bg-deep-blue rounded-2xl"></div>
            <!-- Foreground placeholder card -->
            <div class="absolute top-0 left-0 w-4/5 h-4/5 bg-gray-100 rounded-2xl flex flex-col items-center justify-center gap-4 shadow-md">
              <div class="w-16 h-16 rounded-full bg-deep-blue/10 flex items-center justify-center">
                <svg class="w-8 h-8 text-deep-blue" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
                </svg>
              </div>
              <p class="text-sm font-medium text-gray-400">Bild folgt</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LandingWorkflow',
  data() {
    return {
      workflowItems: [
        { text: 'Lade deine Skripte und Unterlagen einfach als PDF oder DOCX hoch.' },
        { text: 'Die KI analysiert deine Dokumente und erstellt präzise Zusammenfassungen.' },
        { text: 'Lerne mit automatisch generierten Lernkarten und dem Spaced-Repetition-System.' },
        { text: 'Stelle Fragen direkt an den KI-Tutor und schließe Wissenslücken gezielt.' },
      ]
    }
  }
}
</script>