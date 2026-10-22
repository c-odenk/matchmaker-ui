<template>
  <!-- 5 · EU AI Act: Einordnung ohne Zusicherung. Was die Verordnung
       verlangt, was davon schon angelegt ist – und der Verweis auf den
       ausführlichen Ratgeber. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-start max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="two-text">
        <EyebrowBadge>EU AI Act</EyebrowBadge>
        <h2 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px] mb-[14px]">Recruiting gilt als Hochrisiko-Bereich. <span class="text-blue">Die Grundlagen sind angelegt.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Die europäische KI-Verordnung stuft KI-Systeme, die bei der Auswahl von Bewerbern oder der Bewertung
          von Kandidaten helfen, als Hochrisiko ein (Anhang III Nr. 4). Verlangt werden unter anderem menschliche
          Aufsicht, Protokollierung, Transparenz und der Umgang mit Verzerrungen. Nach aktuellem Stand gelten diese
          Pflichten ab dem 2. Dezember 2027.
        </p>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px] mt-4">
          Was matchmaker heute schon tut, ersetzt keine Konformitätsbewertung. Aber Sie fangen nicht bei null an –
          und können Kunden und Kandidaten schon jetzt zeigen, wie eine Bewertung zustande kommt.
        </p>
        <p class="text-[.92rem] mt-5">
          <router-link to="/ratgeber/eu-ai-act-recruiting" class="font-semibold text-blue hover:text-blue-hover">Was der EU AI Act für Personalberatungen bedeutet →</router-link>
        </p>
      </div>

      <div class="rounded-[11px] border border-line bg-surface p-7 max-[560px]:p-5">
        <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mb-4">Heute schon in matchmaker</div>
        <ul class="list-none flex flex-col gap-[10px]">
          <li v-for="p in punkte" :key="p.title" class="rounded-[8px] border border-line bg-white px-5 py-4">
            <span class="flex items-center gap-[10px]">
              <span class="w-[22px] h-[22px] shrink-0 rounded-full bg-[#e7f8ee] text-[#15803d] flex items-center justify-center text-[.72rem]">✓</span>
              <span class="text-[.94rem] font-bold text-ink leading-tight">{{ p.title }}</span>
            </span>
            <span class="block text-[.85rem] text-body leading-[1.55] mt-[6px] pl-8">{{ p.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'DataAiActSection',
  components: { EyebrowBadge },
  data() {
    return {
      punkte: [
        { title: 'Menschliche Aufsicht', text: 'Versand, Profiländerung und Statuswechsel gibt immer ein Berater frei.' },
        { title: 'Protokollierung', text: 'Bewertung, Begründung, Zeitpunkt sowie Modell- und Prompt-Version werden festgehalten.' },
        { title: 'Transparenz', text: 'Zu jeder Bewertung gibt es eine Begründung und einen Bericht je Kriterium.' },
        { title: 'Umgang mit Verzerrungen', text: 'Bewertet wird ohne Klarnamen und ohne geschützte Merkmale, eigene Tests prüfen das.' }
      ]
    }
  }
}
</script>
