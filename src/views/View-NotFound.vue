<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <section class="sec bg-white !pt-[88px] !pb-[88px] max-[1000px]:!pt-[58px] max-[1000px]:!pb-[58px]">
        <div class="wrap">
          <div class="sec-head mx-auto max-w-[660px] text-center">
            <EyebrowBadge>Fehler 404</EyebrowBadge>
            <h1 class="text-section !text-[clamp(1.25rem,0.98rem+0.9vw,1.5625rem)] text-ink mt-[5px]">Diese Seite <span class="text-blue">gibt es nicht.</span></h1>
            <p class="text-[1.05rem] font-normal leading-[1.5] text-muted mt-[10px]">
              Die Adresse ist falsch geschrieben oder die Seite wurde verschoben.
              Von hier aus geht es weiter:
            </p>
          </div>

          <ul class="list-none mx-auto max-w-[660px] mt-9 border border-line rounded-[11px] overflow-hidden bg-white">
            <li v-for="l in links" :key="l.to" class="border-b border-line last:border-b-0">
              <router-link :to="l.to" class="flex items-center justify-between gap-4 px-6 py-[16px] transition-colors duration-150 hover:bg-surface max-[560px]:px-[18px]">
                <span class="min-w-0">
                  <span class="block text-[.98rem] font-semibold text-ink">{{ l.label }}</span>
                  <span class="block text-[.9rem] text-body leading-[1.55] mt-[2px]">{{ l.text }}</span>
                </span>
                <span class="text-blue shrink-0" aria-hidden="true">→</span>
              </router-link>
            </li>
          </ul>
        </div>
      </section>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'

export default {
  name: 'ViewNotFound',
  components: { TheHeaderDraft, TheFooter, EyebrowBadge },
  data() {
    return {
      links: [
        { to: '/', label: 'Startseite', text: 'Was matchmaker für Personalberater automatisiert.' },
        { to: '/agenten', label: 'Multi-Agentensystem', text: 'Vier Agenten bereiten jeden Schritt vor.' },
        { to: '/preise', label: 'Preise', text: 'Ein Preis, alle Anbindungen und Agenten enthalten.' },
        { to: '/kontakt', label: 'Demo buchen', text: '15 Minuten per Video-Call.' }
      ]
    }
  }
}
</script>
