<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <article>
        <header class="sec bg-white !pt-[72px] !pb-0 max-[880px]:!pt-[48px]">
          <div class="wrap">
            <div class="max-w-[760px]">
              <nav aria-label="Brotkrumen" class="text-[.82rem] text-muted mb-5">
                <router-link to="/" class="hover:text-ink">Startseite</router-link>
                <span class="mx-[7px]" aria-hidden="true">/</span>
                <router-link to="/ratgeber" class="hover:text-ink">Ratgeber</router-link>
                <span class="mx-[7px]" aria-hidden="true">/</span>
                <span class="text-body">{{ page.name }}</span>
              </nav>
              <EyebrowBadge>{{ page.section === 'glossar' ? 'Glossar' : 'Ratgeber' }}</EyebrowBadge>
              <h1 class="text-hero text-ink mt-[8px] mb-[16px] break-words">{{ heading }}</h1>
              <p class="text-lead text-body max-w-[680px]">{{ lead }}</p>
              <p class="text-[.82rem] text-muted mt-5 pb-7 border-b border-line">
                {{ author }} · Stand {{ stand }} · {{ page.minutes }} Min. Lesezeit
              </p>
            </div>
          </div>
        </header>

        <section class="sec bg-white !pt-9">
          <div class="wrap">
            <div class="prose max-w-[760px]">
              <slot />

              <p v-if="rechtshinweis" class="hinweis-recht">
                Dieser Beitrag gibt einen allgemeinen Überblick zum Stand {{ stand }} und ersetzt keine
                Rechtsberatung im Einzelfall. Gesetze und ihre Auslegung ändern sich – prüfen Sie
                Fristen und Einzelheiten vor einer Entscheidung an der jeweiligen Quelle.
              </p>
            </div>

            <nav v-if="relatedPages.length" aria-label="Weiterlesen" class="max-w-[760px] mt-12">
              <div class="text-[.64rem] font-bold tracking-[0.07em] uppercase text-muted mb-3">Weiterlesen</div>
              <ul class="list-none border border-line rounded-[11px] overflow-hidden bg-white">
                <li v-for="r in relatedPages" :key="r.path" class="border-b border-line last:border-b-0">
                  <router-link :to="r.path" class="flex items-center justify-between gap-4 px-6 py-[15px] transition-colors duration-150 hover:bg-surface max-[560px]:px-[18px]">
                    <span class="min-w-0">
                      <span class="block text-[.96rem] font-semibold text-ink">{{ r.name }}</span>
                      <span class="block text-[.86rem] text-body leading-[1.55] mt-[2px]">{{ r.teaser || r.description }}</span>
                    </span>
                    <span class="text-blue shrink-0" aria-hidden="true">→</span>
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </article>

      <CtaBandDraft :title="ctaTitle" :text="ctaText" :secondary-to="ctaTo" :secondary-label="ctaLabel" />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Rahmen für Ratgeber- und Glossarseiten: Brotkrumen, Kopf mit Autor und
// Stand, Fließtext im Slot, „Weiterlesen“ und das Abschluss-Band.
// Name, Datum und Lesezeit kommen aus src/config/pages.js – dieselbe Quelle
// wie Title, Sitemap und das Article-Schema.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import CtaBandDraft from '@/components/landing-draft/ui/CtaBandDraft.vue'
import { byPath } from '@/config/pages'
import { legalInfo } from '@/config/legalInfo'

const MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']

export default {
  name: 'ArticleLayout',
  components: { TheHeaderDraft, TheFooter, EyebrowBadge, CtaBandDraft },
  props: {
    path: { type: String, required: true },
    heading: { type: String, required: true },
    lead: { type: String, required: true },
    related: { type: Array, default: () => [] },
    rechtshinweis: { type: Boolean, default: false },
    ctaTitle: { type: String, default: 'Sehen Sie matchmaker an einem echten Kandidaten arbeiten.' },
    ctaText: { type: String, default: 'Ein Profil aus Ihrem Bestand, ein Durchlauf – in 15 Minuten per Video-Call.' },
    ctaTo: { type: String, default: '' },
    ctaLabel: { type: String, default: '' }
  },
  computed: {
    page() {
      return byPath[this.path]
    },
    author() {
      return legalInfo.inhaber
    },
    stand() {
      const [y, m, d] = this.page.lastmod.split('-').map(Number)
      return `${d}. ${MONATE[m - 1]} ${y}`
    },
    relatedPages() {
      return this.related.map(p => byPath[p]).filter(Boolean)
    }
  }
}
</script>

<style scoped>
/* Typografie des Fließtexts im Slot (:deep, da der Inhalt den Scope der
   jeweiligen Artikel-View trägt). Werte aus LegalPage, ergänzt um Tabellen,
   Hinweis- und Vorlagenkästen. */
.prose :deep(> :first-child) { margin-top: 0; }
.prose :deep(h2) { font-size: 1.32rem; font-weight: 800; color: #0f172a; margin: 40px 0 12px; letter-spacing: -.015em; line-height: 1.25; }
.prose :deep(h3) { font-size: 1.05rem; font-weight: 700; color: #172b4d; margin: 26px 0 8px; }
.prose :deep(p) { font-size: 1rem; color: #475569; line-height: 1.75; margin: 0 0 16px; }
.prose :deep(a) { color: #2976d6; text-decoration: underline; text-underline-offset: 2px; word-break: break-word; }
.prose :deep(a:hover) { color: #2065bd; }
.prose :deep(ul), .prose :deep(ol) { margin: 0 0 18px; padding-left: 22px; display: flex; flex-direction: column; gap: 8px; }
.prose :deep(ul) { list-style: disc; }
.prose :deep(ol) { list-style: decimal; }
.prose :deep(li::marker) { color: #7c8aa0; }
.prose :deep(li) { font-size: 1rem; color: #475569; line-height: 1.65; }
.prose :deep(strong), .prose :deep(b) { color: #0f172a; font-weight: 700; }
.prose :deep(table) { width: 100%; border-collapse: collapse; margin: 6px 0 22px; font-size: .92rem; }
.prose :deep(th) { text-align: left; font-weight: 700; color: #0f172a; background: #f6f8fc; }
.prose :deep(th), .prose :deep(td) { border: 1px solid #e7ebf1; padding: 10px 12px; vertical-align: top; color: #475569; line-height: 1.55; }
.prose :deep(.tabelle) { overflow-x: auto; }
.prose :deep(.kasten) { border: 1px solid #e7ebf1; background: #f6f8fc; border-radius: 11px; padding: 20px 22px; margin: 8px 0 22px; }
.prose :deep(.kasten > :last-child) { margin-bottom: 0; }
.prose :deep(.kasten-titel) { font-size: .64rem; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: #7c8aa0; margin-bottom: 10px; }
.prose :deep(.vorlage) { font-size: .92rem; line-height: 1.7; color: #0f172a; white-space: pre-wrap; font-family: inherit; margin: 0; }
.prose :deep(.merksatz) { border-left: 3px solid #2976d6; padding: 2px 0 2px 16px; margin: 4px 0 20px; color: #0f172a; font-weight: 600; }
.hinweis-recht { margin-top: 36px !important; padding-top: 18px; border-top: 1px solid #e7ebf1; font-size: .86rem !important; color: #7c8aa0 !important; line-height: 1.6 !important; }
@media (max-width: 560px) {
  .prose :deep(h2) { font-size: 1.18rem; }
  .prose :deep(.kasten) { padding: 16px; }
  .prose :deep(table) { font-size: .86rem; }
  .prose :deep(th), .prose :deep(td) { padding: 8px 9px; }
  .prose :deep(p), .prose :deep(li) { font-size: .96rem; }
}
</style>
