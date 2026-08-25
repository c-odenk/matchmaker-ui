<template>
  <!-- ENTWURF: ersetzt die SourcesBar. Zeigt alle sieben angebundenen Systeme
       aus dem Systementwurf statt nur der drei Scan-Quellen. -->
  <section class="border-y border-line bg-white">
    <div class="wrap sources-row flex items-center justify-center gap-x-[26px] gap-y-3 flex-wrap py-6 max-[560px]:gap-x-4 max-[560px]:gap-y-[10px] max-[560px]:py-5">
      <span class="text-p font-semibold text-muted w-full text-center mb-1 max-[560px]:mb-0">matchmaker automatisiert, was Sie bisher manuell bedienen</span>

      <span v-for="s in systems" :key="s.label"
            class="inline-flex items-center gap-2 text-[.98rem] font-semibold text-[#5d6b80] tracking-[-0.01em] max-[560px]:text-[.86rem]">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7">
          <path stroke-linecap="round" stroke-linejoin="round" :d="s.icon"/>
        </svg>{{ s.label }}
      </span>
    </div>
  </section>
</template>

<script>
// Angebundene Systeme laut Systementwurf S. 3 („Angebundene Systeme").
export default {
  name: 'IntegrationsBar',
  data() {
    return {
      systems: [
        { label: 'Ihre Bewerbersoftware', icon: 'M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776' },
        { label: 'Microsoft Teams', icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5' },
        { label: 'Telefonie', icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z' },
        { label: 'Ihr Mailkonto', icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' },
        { label: 'Jobportale', icon: 'M20.25 14.15v4.073a2.25 2.25 0 01-1.632 2.163l-1.32.377a9.75 9.75 0 01-5.36 0l-1.32-.377a2.25 2.25 0 01-1.633-2.163V14.15M3.75 9.75l7.108-3.554a2.25 2.25 0 012.284 0L20.25 9.75l-7.108 3.554a2.25 2.25 0 01-2.284 0L3.75 9.75z' },
        { label: 'Handelsregister', icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21' },
        { label: 'Ihre Homepage', icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a8.949 8.949 0 004.951-1.488A3.987 3.987 0 0013 16h-2a3.987 3.987 0 00-3.951 3.512A8.949 8.949 0 0012 21zM3 12h18' }
      ]
    }
  }
}
</script>
