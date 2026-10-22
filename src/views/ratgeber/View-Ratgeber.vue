<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <section class="sec bg-white !pt-[88px] max-[880px]:!pt-[58px]">
        <div class="wrap">
          <div class="sec-head mx-auto max-w-[680px] text-center mb-12">
            <h1 class="text-hero text-ink mb-[14px]">Ratgeber für <span class="text-blue">Personalberater und Personalvermittler.</span></h1>
            <p class="text-lead text-body">
              Akquise, Recht, KI im Recruiting, Provision und Gründung – sachlich erklärt, mit Quellen und Stand.
            </p>
          </div>

          <div class="mx-auto max-w-[860px]">
            <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mb-3">Beiträge</div>
            <ul class="list-none grid grid-cols-2 gap-[14px] max-[760px]:grid-cols-1">
              <li v-for="a in artikel" :key="a.path">
                <router-link :to="a.path" class="h-full flex flex-col rounded-[11px] border border-line bg-white px-6 py-5 transition-colors duration-150 hover:bg-surface">
                  <span class="text-[1rem] font-bold text-ink leading-snug">{{ a.name }}</span>
                  <span class="text-[.88rem] text-body leading-[1.6] mt-[6px] flex-1">{{ a.teaser }}</span>
                  <span class="text-[.78rem] text-muted mt-3">{{ a.minutes }} Min. Lesezeit</span>
                </router-link>
              </li>
            </ul>

            <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mt-12 mb-3">Begriffe</div>
            <ul class="list-none border border-line rounded-[11px] overflow-hidden bg-white">
              <li v-for="g in glossar" :key="g.path" class="border-b border-line last:border-b-0">
                <router-link :to="g.path" class="flex items-center justify-between gap-4 px-6 py-[15px] transition-colors duration-150 hover:bg-surface max-[560px]:px-[18px]">
                  <span class="min-w-0">
                    <span class="block text-[.96rem] font-semibold text-ink">{{ g.name }}</span>
                    <span class="block text-[.86rem] text-body leading-[1.55] mt-[2px]">{{ g.teaser }}</span>
                  </span>
                  <span class="text-blue shrink-0" aria-hidden="true">→</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBandDraft
        title="Vom Ratgeber in die Praxis."
        text="Wie matchmaker Markt, Matching und Anschreiben für Ihre Kandidaten vorbereitet, zeigen wir in 15 Minuten."
        secondary-to="/agenten"
        secondary-label="Die Agenten ansehen →"
      />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Übersicht aller Ratgeber- und Glossarseiten. Die Liste kommt aus
// src/config/pages.js (Einträge mit `section`) – neue Beiträge erscheinen
// hier, in der Sitemap und im Prerendering, sobald sie dort stehen.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'
import CtaBandDraft from '@/components/landing-draft/ui/CtaBandDraft.vue'
import { pages } from '@/config/pages'

export default {
  name: 'ViewRatgeber',
  components: { TheHeaderDraft, TheFooter, CtaBandDraft },
  data() {
    return {
      artikel: pages.filter(p => p.section === 'ratgeber'),
      glossar: pages.filter(p => p.section === 'glossar')
    }
  }
}
</script>
