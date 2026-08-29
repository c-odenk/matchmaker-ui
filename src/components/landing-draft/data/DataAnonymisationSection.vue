<template>
  <!-- 2 · Anonymisierung: gespiegelt – Baustein links, Text rechts -->
  <section class="sec bg-white">
    <div class="wrap two rev grid [grid-template-columns:1.1fr_1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div>
        <div class="rounded-[11px] border border-line bg-surface p-7 max-[560px]:p-5">
          <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mb-4">Vor dem KI-Aufruf</div>

          <div class="rounded-[8px] border border-line bg-white px-5 py-4">
            <div class="text-[.88rem] font-bold text-ink mb-[13px]">Kandidatenprofil</div>
            <div class="flex flex-col gap-[10px]">
              <div v-for="f in fields" :key="f.label" class="flex items-center gap-[11px]">
                <span class="w-[18px] h-[18px] shrink-0 rounded-full flex items-center justify-center text-[.64rem]"
                      :class="f.strip ? 'bg-[#eef2f7] text-muted' : 'bg-[#e7f8ee] text-[#15803d]'">{{ f.strip ? '✕' : '✓' }}</span>
                <span class="text-[.82rem] w-[124px] shrink-0 max-[560px]:w-[96px]" :class="f.strip ? 'text-muted' : 'text-body'">{{ f.label }}</span>
                <span class="text-[.82rem] font-semibold min-w-0 truncate"
                      :class="f.strip ? 'text-muted line-through decoration-[#cbd5e1]' : 'text-ink'">{{ f.value }}</span>
              </div>
            </div>
          </div>

          <div class="relative flex justify-center py-[18px]">
            <span class="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] rounded-full bg-gradient-to-b from-line to-blue"></span>
            <span class="absolute left-1/2 -translate-x-1/2 bottom-[-5px] text-blue">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
            </span>
            <span class="relative z-[2] bg-white border border-line rounded-[7px] px-[11px] py-[6px] text-[.76rem] text-body text-center leading-[1.3]">Ohne Klarnamen</span>
          </div>

          <div class="rounded-[8px] bg-navy text-white px-5 py-4">
            <div class="flex items-center gap-3">
              <span class="w-[30px] h-[30px] shrink-0 rounded-lg bg-blue/25 border border-blue/[0.4] flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
              </span>
              <span class="min-w-0">
                <span class="block text-[.92rem] font-bold leading-tight">KI-Dienst</span>
                <span class="block text-[.72rem] text-white/60">Bewertet die Qualifikation, nicht die Person</span>
              </span>
            </div>
          </div>

          <p class="text-[.76rem] text-muted mt-[14px]">Der Klarname bleibt in matchmaker – zugeordnet wird das Ergebnis erst wieder bei Ihnen.</p>
        </div>
      </div>

      <div class="two-text">
        <EyebrowBadge>Anonymisierung</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Bewertet wird die <span class="text-blue">Qualifikation, nicht die Person.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Name, Kontaktdaten und Arbeitgeber werden entfernt, bevor ein Profil verarbeitet wird. Wer dahintersteht, weiß nur matchmaker.
        </p>
        <FeatureList :items="features" />
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'

export default {
  name: 'DataAnonymisationSection',
  components: { EyebrowBadge, FeatureList },
  data() {
    return {
      features: [
        'Name, Kontakt und Arbeitgeber werden vor dem KI-Aufruf entfernt',
        'Das Exposé an die suchende Firma geht ebenfalls anonym hinaus',
        'Die Zuordnung zum Klarnamen passiert nur in matchmaker'
      ],
      fields: [
        { label: 'Name', value: 'Max Mustermann', strip: true },
        { label: 'Kontakt', value: 'm.mustermann@…', strip: true },
        { label: 'Arbeitgeber', value: 'Triolux AG', strip: true },
        { label: 'Qualifikation', value: 'Senior IT Projektleiter' },
        { label: 'Erfahrung', value: '12 Jahre, davon 5 leitend' },
        { label: 'Region', value: 'Raum Hamburg' }
      ]
    }
  }
}
</script>
