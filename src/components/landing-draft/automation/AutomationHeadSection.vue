<template>
  <section class="sec bg-white !pt-14 max-[880px]:!pt-10">
    <div class="wrap">
      <div class="sec-head mx-auto max-w-[680px] text-center mb-10">
        <h1 class="text-hero text-ink mb-[14px]">Die Arbeit läuft vor. <span class="text-blue">Sie greifen ein, wo es zählt.</span></h1>
        <p class="text-lead text-body">
          Wiederkehrende Schritte laufen ohne Zutun durch. Was Erfahrung braucht, bleibt bei Ihnen – der Rest ist einen Klick entfernt.
        </p>
      </div>

      <!-- Drei Phasen: vorbereiten, entscheiden, eingreifen -->
      <div class="scope rounded-[18px] border border-line bg-surface p-8 max-[560px]:p-5">
        <div class="grid items-stretch [grid-template-columns:1fr_auto_1fr_auto_1fr] gap-0 max-[880px]:grid-cols-1">
          <template v-for="(p, i) in phases" :key="p.title">
            <div class="rounded-[12px] border px-5 py-5 flex flex-col"
                 :class="p.own ? 'bg-navy border-navy text-white shadow-price-feat' : 'bg-white border-line'">
              <span class="w-[34px] h-[34px] shrink-0 rounded-[10px] flex items-center justify-center mb-3"
                    :class="p.own ? 'bg-blue/25 border border-blue/[0.4] text-white' : 'bg-navy/[0.07] text-navy'">
                <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" :d="p.icon"/></svg>
              </span>
              <div class="text-[.96rem] font-bold leading-tight" :class="p.own ? 'text-white' : 'text-ink'">{{ p.title }}</div>
              <div class="text-[.82rem] mt-[6px] leading-[1.5] flex-1" :class="p.own ? 'text-white/[0.72]' : 'text-body'">{{ p.text }}</div>
              <div class="mt-[14px] pt-[12px] border-t" :class="p.own ? 'border-white/[0.13]' : 'border-line'">
                <span class="inline-flex items-center gap-[7px] text-[.72rem] font-semibold px-[10px] py-[3px] rounded-full"
                      :class="p.own ? 'bg-blue/25 text-[#9cc6f2]' : 'bg-navy/[0.06] text-navy'">
                  <span class="w-[6px] h-[6px] rounded-full bg-green shrink-0"></span>{{ p.badge }}
                </span>
              </div>
            </div>

            <div v-if="i < phases.length - 1" class="flex items-center justify-center px-4 max-[880px]:py-3">
              <span class="w-9 h-9 rounded-full bg-white border border-line text-muted flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="max-[880px]:rotate-90"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AutomationHeadSection',
  data() {
    return {
      phases: [
        {
          title: 'Der Durchlauf bereitet vor',
          text: 'Suchen, recherchieren, bewerten, entwerfen – für jeden aktiven Kandidaten.',
          badge: 'Ohne Zutun',
          icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
        },
        {
          title: 'Sie prüfen und geben frei',
          text: 'Anpassen, verwerfen oder freigeben. Nichts geht ohne Sie hinaus.',
          badge: 'Human-in-the-Loop',
          own: true,
          icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.96 11.96 0 013.6 6 12 12 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z'
        },
        {
          title: 'Sie greifen ein, wo nötig',
          text: 'Anrufen, Termin anlegen, Gespräch auswerten – aus dem Vorgang heraus.',
          badge: 'Auf Klick',
          icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
        }
      ]
    }
  }
}
</script>
