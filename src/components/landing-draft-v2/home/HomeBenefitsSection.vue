<template>
  <!-- Vorteile zuerst: was der Berater davon hat, bevor es um Technik geht -->
  <section class="sec bg-white">
    <div class="wrap">
      <SectionHeadingDraft eyebrow="Warum matchmaker">
        Ein System für alles. <span class="text-blue">Die Entscheidung bleibt bei Ihnen.</span>
        <template #lead>Was sich ändert, ist die Arbeit zwischen Kandidatenprofil und Erstkontakt.</template>
      </SectionHeadingDraft>

      <div class="ben-grid grid gap-[18px] [grid-template-columns:repeat(4,1fr)] max-[880px]:grid-cols-2 max-[560px]:grid-cols-1">
        <div v-for="b in benefits" :key="b.title" class="ben bg-surface border border-line rounded-2xl p-6">
          <div class="w-[42px] h-[42px] rounded-xl bg-navy text-white flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="b.icon"/></svg>
          </div>
          <h3 class="text-[1.02rem] font-bold tracking-[-0.01em] mb-2">{{ b.title }}</h3>
          <p class="text-[.88rem] text-body">{{ b.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionHeadingDraft from '@/components/landing-draft-v2/ui/SectionHeadingDraft.vue'

export default {
  name: 'HomeBenefitsSection',
  components: { SectionHeadingDraft },
  data() {
    return {
      benefits: [
        {
          title: 'Eine Oberfläche',
          text: 'Bewerbersoftware, Postfach, Telefonie und Termine an einem Ort.',
          icon: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25'
        },
        {
          title: 'Kein Lock-in',
          text: 'Jedes angebundene System bleibt einzeln austauschbar.',
          icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
        },
        {
          title: 'Vorbereitete Vorschläge',
          text: 'Treffer, Recherche und Anschreiben liegen am Morgen vor.',
          icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          title: 'Freigabe durch den Berater',
          text: 'Nichts wird versendet, bevor Sie es geprüft und freigegeben haben.',
          icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
        }
      ]
    }
  }
}
</script>
