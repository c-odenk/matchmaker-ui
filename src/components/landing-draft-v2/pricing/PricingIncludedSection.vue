<template>
  <!-- Bewusst flach gehalten: auf der Preisseite zählt, DASS alles enthalten ist.
       Der tatsächliche Umfang wird auf den Plattform-Seiten gezeigt. -->
  <section class="sec bg-white">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[660px] text-center mb-10">
        <EyebrowBadge>Leistungsumfang</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Alles enthalten – <span class="text-blue">auch jede Anbindung.</span></h2>
        <p class="text-lead text-body">Alle angebundenen Systeme und das gesamte Multi-Agentensystem gehören zur Lizenz. Es gibt keine Gebühr je Integration. Und wenn Sie später Ihre Bewerbersoftware wechseln, ändert das an Ihrer Lizenz nichts.</p>
      </div>

      <div class="scope border border-line rounded-[18px] overflow-hidden bg-surface grid grid-cols-3 max-[880px]:grid-cols-1">
        <div
          v-for="(c, i) in facts" :key="c.title"
          class="ben px-7 py-7 max-[560px]:px-[22px]"
          :class="i > 0 ? 'border-l border-line max-[880px]:border-l-0 max-[880px]:border-t' : ''"
        >
          <div class="flex items-center gap-[11px] mb-[10px]">
            <span class="w-9 h-9 shrink-0 rounded-[10px] bg-navy text-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="c.icon"/></svg>
            </span>
            <h3 class="text-[1.02rem] font-bold tracking-[-0.01em]">{{ c.title }}</h3>
          </div>
          <p class="text-[.88rem] text-body leading-[1.55]">{{ c.text }}</p>
        </div>
      </div>

      <!-- Klare Trennung: Lizenz vs. Rechenkosten -->
      <div class="scope mt-[18px] border border-line rounded-2xl bg-surface px-6 py-5 flex items-start gap-[14px] max-[560px]:flex-col">
        <div class="w-9 h-9 shrink-0 rounded-[10px] bg-navy/[0.06] text-navy flex items-center justify-center">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </div>
        <div>
          <div class="text-[.95rem] font-bold text-ink mb-1">Was die Lizenz abdeckt – und was nicht</div>
          <p class="text-[.88rem] text-body leading-[1.6]">
            Die Lizenz deckt Anbindungen, Agenten und Hosting ab. Nicht enthalten sind die Rechenkosten der KI: die zahlen Sie nutzungsabhängig und ohne Aufschlag direkt an Ihren eigenen KI-Anbieter.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'PricingIncludedSection',
  components: { EyebrowBadge },
  data() {
    return {
      facts: [
        {
          title: 'Alle Anbindungen',
          icon: 'M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
          text: 'Bewerbersoftware, Microsoft Teams, Telefonie, Mailkonto, Jobportale, Handelsregister und Ihre Homepage.'
        },
        {
          title: 'Alle Agenten',
          icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z',
          text: 'Das Multi-Agentensystem ist vollständig enthalten – kein Modul wird einzeln freigeschaltet oder berechnet.'
        },
        {
          title: 'Alle Mitarbeiter',
          icon: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
          text: 'Drei Lizenzen sind enthalten, jede weitere kostet 19,99 € im Monat. Monatlich kündbar, ohne Mindestlaufzeit.'
        }
      ]
    }
  }
}
</script>
