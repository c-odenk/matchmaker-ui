<template>
  <!-- Produktblick auf das Anruffenster, wie es während eines Gesprächs über
       dem Profil steht. Alle Angaben sind Platzhalter. -->
  <div
    class="w-full max-w-[560px] rounded-[16px] border border-line bg-white overflow-hidden shadow-[0_20px_44px_-18px_rgba(15,23,42,.28)] max-[880px]:mx-auto"
    :class="align === 'left' ? 'mr-auto' : 'ml-auto'"
  >
    <!-- Gesprächsstatus -->
    <div class="flex items-center justify-between gap-3 px-5 py-[13px] border-b border-line">
      <span class="inline-flex items-center gap-[9px] text-[.82rem] font-semibold text-ink">
        <span class="w-[7px] h-[7px] rounded-full bg-green shrink-0"></span>Verbunden
      </span>
      <span class="inline-flex items-center gap-[14px]">
        <span class="text-[.82rem] text-muted tabular-nums">00:26</span>
        <span class="w-[13px] h-[2px] rounded-full bg-[#cbd5e1]"></span>
      </span>
    </div>

    <!-- Wer am Apparat ist -->
    <div class="px-5 pt-[15px] pb-[14px]">
      <div class="text-[1.08rem] font-bold tracking-[-0.01em] text-ink leading-tight">Max Mustermann</div>
      <div class="text-[.82rem] text-body mt-[4px]">Senior IT Projektleiter</div>
      <div class="text-[.82rem] text-muted mt-[2px] tabular-nums">+49 170 ••• ••42</div>
    </div>

    <!-- Eckdaten aus dem Profil, damit nichts nachgeschlagen werden muss -->
    <div class="px-5 pb-[15px] flex flex-col gap-[8px]">
      <div v-for="f in facts" :key="f.k" class="flex items-baseline justify-between gap-5">
        <span class="text-[.82rem] text-muted shrink-0">{{ f.k }}</span>
        <span class="text-[.82rem] font-semibold text-ink text-right">{{ f.v }}</span>
      </div>
    </div>

    <div class="px-5 py-[14px] border-t border-line flex flex-col gap-[7px]">
      <div v-for="h in highlights" :key="h" class="relative pl-[14px] text-[.82rem] text-body leading-[1.45]">
        <span class="absolute left-0 top-[8px] w-[4px] h-[4px] rounded-full bg-blue"></span>{{ h }}
      </div>
    </div>

    <!-- Was im Gespräch noch zu klären ist -->
    <div class="mx-5 mb-[15px] rounded-[10px] border border-[#fed7aa] bg-[#fff7ed] px-[14px] py-[12px]">
      <div class="text-[.64rem] font-bold tracking-[0.08em] uppercase text-[#ea580c] mb-[8px]">Offene Punkte</div>
      <div class="flex flex-col gap-[6px]">
        <div v-for="o in open" :key="o" class="relative pl-[14px] text-[.82rem] text-body leading-[1.45]">
          <span class="absolute left-0 top-[8px] w-[4px] h-[4px] rounded-full bg-[#ea580c]"></span>{{ o }}
        </div>
      </div>
    </div>

    <div class="px-5 py-[12px] border-t border-line text-[.78rem] text-muted">
      Letzter Kontakt: Erstgespräch am 27.08.2026
    </div>

    <!-- Notiz läuft direkt in den Vorgang -->
    <div class="px-5 py-[14px] border-t border-line">
      <div class="text-[.64rem] font-bold tracking-[0.08em] uppercase text-muted mb-[9px]">Notiz</div>
      <div class="rounded-[10px] border border-line bg-surface px-[13px] py-[12px] text-[.82rem] text-muted">
        Notiz während des Gesprächs …
      </div>
    </div>

    <div class="flex items-center justify-between gap-3 px-5 py-[13px] border-t border-line bg-surface">
      <span class="inline-flex items-center gap-[8px] rounded-[9px] border border-line bg-white px-[13px] py-[7px] text-[.82rem] font-semibold text-body">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"/></svg>
        Stumm
      </span>
      <span class="inline-flex items-center gap-[8px] rounded-[9px] bg-[#dc2626] px-[15px] py-[7px] text-[.82rem] font-semibold text-white">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.9"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 3.75l4.5 4.5m0-4.5l-4.5 4.5M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
        Auflegen
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneCallMockup',
  // In der Zweispalte steht das Fenster mal rechts, mal links neben dem Text.
  // Voreinstellung bleibt rechtsbündig – so, wie es Startseite und
  // Integrationsseite bereits einsetzen.
  props: {
    align: { type: String, default: 'right' } // right | left
  },
  data() {
    return {
      facts: [
        { k: 'Verfügbarkeit', v: 'ab 01.11.' },
        { k: 'Gehaltsrahmen', v: '95–110 k€' },
        { k: 'Erfahrung', v: '12 Jahre, davon 6 Führung' },
        { k: 'Teamgröße', v: '12 FTE' }
      ],
      highlights: [
        'Cloud-Infrastruktur von 10 auf 200 Knoten skaliert',
        'Budgetverantwortung 1,5 Mio. € p.a.',
        'PMP und Certified Scrum Master'
      ],
      open: [
        'Reisebereitschaft ungeklärt',
        'Kündigungsfrist noch offen'
      ]
    }
  }
}
</script>
