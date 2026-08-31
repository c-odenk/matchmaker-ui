<template>
  <!-- 2 · Der Chat: Mockup links, Text rechts. Das Mockup spielt einen
       kurzen Dialog nach – Frage tippen, kurz denken, Antwort. -->
  <section class="sec bg-white">
    <div class="wrap two grid [grid-template-columns:1.1fr_1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <div class="max-[880px]:order-2">
        <BrowserFrame url="app-matchmaker-hr.netlify.app/ki-assistent">
          <div ref="chat" class="min-h-[352px] flex flex-col max-[560px]:min-h-[456px]">
            <div class="flex items-center gap-[10px]">
              <span class="w-[30px] h-[30px] shrink-0 rounded-lg bg-navy text-white flex items-center justify-center text-[.64rem] font-bold">KI</span>
              <span class="min-w-0 flex-1">
                <span class="block text-[.85rem] font-bold text-ink leading-tight">Assistent</span>
                <span class="block text-[.72rem] text-muted">128 Profile · 6 Mandate</span>
              </span>
              <span class="inline-flex items-center text-[.64rem] font-bold tracking-[0.06em] uppercase px-[8px] py-[3px] rounded-full bg-blue-soft text-blue shrink-0">Beta</span>
            </div>

            <p class="text-[.78rem] text-body leading-[1.5] mt-[11px]">
              Ich kenne alle Profile in Ihrem Pool und Ihre Mandate. Fragen Sie mich danach.
            </p>

            <!-- Vorschläge, solange nichts gefragt wurde -->
            <div v-if="phase === 'ruhe' || phase === 'tippen'" class="flex flex-col gap-[7px] mt-[11px]">
              <span v-for="q in questions" :key="q"
                    class="border border-line rounded-[6px] px-[11px] py-[8px] text-[.76rem] text-ink leading-[1.35]">{{ q }}</span>
            </div>

            <!-- Die gestellte Frage -->
            <div v-if="phase !== 'ruhe' && phase !== 'tippen'" class="flex justify-end mt-[11px]">
              <span class="max-w-[85%] rounded-[7px] rounded-br-[3px] bg-blue text-white px-[11px] py-[8px] text-[.76rem] leading-[1.35]">{{ frage }}</span>
            </div>

            <!-- Denkpause -->
            <div v-if="phase === 'denken'" class="flex items-center gap-[7px] mt-[11px]">
              <span class="w-[24px] h-[24px] shrink-0 rounded-lg bg-navy text-white flex items-center justify-center text-[.64rem] font-bold">KI</span>
              <span class="inline-flex items-center gap-[4px] border border-line rounded-[6px] px-[11px] py-[9px]">
                <i v-for="n in 3" :key="n" class="denkpunkt" :style="{ animationDelay: (n - 1) * 160 + 'ms' }"></i>
              </span>
            </div>

            <!-- Antwort -->
            <div v-if="phase === 'antwort'" class="mt-[11px] rounded-[7px] border border-line bg-surface px-[12px] py-[11px]">
              <div class="text-[.72rem] font-bold tracking-[0.06em] uppercase text-muted mb-[8px]">Antwort</div>
              <div v-for="(t, i) in treffer" :key="t.name"
                   v-show="i < sichtbareTreffer"
                   class="treffer flex items-center gap-[10px] py-[5px] border-t border-line first:border-t-0 max-[560px]:flex-wrap">
                <span class="w-[24px] h-[24px] shrink-0 rounded-full bg-navy text-white flex items-center justify-center text-[.64rem] font-bold">{{ t.kurz }}</span>
                <span class="text-[.8rem] text-ink flex-1 min-w-0">{{ t.name }}</span>
                <span class="text-[.72rem] text-muted whitespace-nowrap max-[560px]:basis-[calc(100%_-_34px)] max-[560px]:ml-[34px]">{{ t.grund }}</span>
              </div>
            </div>

            <!-- Eingabezeile: tippt die Frage -->
            <div class="mt-auto pt-[12px] border border-line rounded-[7px] bg-surface px-[11px] py-[9px] flex items-center gap-2 !border-t !mt-[12px]">
              <span class="text-[.76rem] flex-1 min-w-0 truncate" :class="getippt ? 'text-ink' : 'text-muted'">
                {{ getippt || 'Fragen Sie etwas oder hängen Sie eine Stellenbeschreibung an…'
                }}<i v-if="phase === 'tippen'" class="cursor"></i>
              </span>
              <span class="w-[26px] h-[26px] shrink-0 rounded-full text-white flex items-center justify-center transition-colors duration-200"
                    :class="getippt ? 'bg-blue' : 'bg-blue/40'">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
              </span>
            </div>
          </div>
        </BrowserFrame>
      </div>

      <div class="two-text max-[880px]:order-1">
        <EyebrowBadge>Der Chat</EyebrowBadge>
        <h2 class="text-section text-ink mt-[7px] mb-[14px]">Fragen Sie in <span class="text-blue">eigenen Worten.</span></h2>
        <p class="text-[.95rem] text-body leading-[1.65] max-w-[620px]">
          Wer passt zu diesem Mandat, wer kommt aus der Region, für wen fehlt noch eine
          Stelle – gefragt wird im Satz, nicht in Filtermasken.
        </p>
        <FeatureList :items="features" />
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'
import BrowserFrame from '@/components/ui/BrowserFrame.vue'

const FRAGE = 'Welche Kandidaten kommen aus dem Raum Hamburg?'

export default {
  name: 'AssistantChatSection',
  components: { EyebrowBadge, FeatureList, BrowserFrame },
  data() {
    return {
      phase: 'ruhe',        // ruhe → tippen → denken → antwort → (von vorn)
      getippt: '',
      sichtbareTreffer: 0,
      frage: FRAGE,
      features: [
        'Fragen in eigenen Worten statt Filter und Suchmasken',
        'Jede Antwort verweist auf die Profile, aus denen sie stammt',
        'Stellenbeschreibung anhängen und direkt gegen den Bestand prüfen'
      ],
      questions: [
        'Für wen wurde noch keine passende Stelle gefunden?',
        'Wer hat einen Treffer über 80?',
        'Welche Kandidaten kommen aus dem Raum Hamburg?'
      ],
      treffer: [
        { kurz: 'MM', name: 'Max Mustermann', grund: 'Treffer 94 · Hamburg' },
        { kurz: 'AK', name: 'Aisha Khan', grund: 'Treffer 88 · Hamburg' },
        { kurz: 'TR', name: 'Tom Reeve', grund: 'Treffer 81 · Lüneburg' }
      ]
    }
  },
  mounted() {
    const ruhig = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (ruhig) {
      // Ohne Bewegung steht direkt das Ergebnis da.
      this.phase = 'antwort'
      this.getippt = ''
      this.sichtbareTreffer = this.treffer.length
      return
    }
    // Erst loslaufen, wenn das Fenster tatsächlich zu sehen ist.
    // Liegt der Ausschnitt beim Laden schon im Bild, direkt loslegen –
    // sonst erst, wenn er hereingescrollt wird.
    const imBlick = () => {
      const r = this.$refs.chat.getBoundingClientRect()
      return r.top < window.innerHeight * 0.8 && r.bottom > 0
    }
    if (typeof IntersectionObserver === 'undefined' || imBlick()) { this.starten(); return }
    this._obs = new IntersectionObserver((eintraege) => {
      if (eintraege.some(e => e.isIntersecting)) {
        this._obs.disconnect()
        this._obs = null
        this.starten()
      }
    }, { threshold: 0.35 })
    this._obs.observe(this.$refs.chat)
  },
  beforeUnmount() {
    this.stoppen()
  },
  methods: {
    stoppen() {
      if (this._t) { clearTimeout(this._t); this._t = null }
      if (this._obs) { this._obs.disconnect(); this._obs = null }
    },
    warten(ms, dann) { this._t = setTimeout(dann, ms) },
    starten() {
      this.phase = 'ruhe'
      this.getippt = ''
      this.sichtbareTreffer = 0
      this.warten(1200, this.tippen)
    },
    tippen() {
      this.phase = 'tippen'
      const schreibe = (i) => {
        if (i > FRAGE.length) { this.warten(420, this.denken); return }
        this.getippt = FRAGE.slice(0, i)
        this.warten(42, () => schreibe(i + 1))
      }
      schreibe(1)
    },
    denken() {
      this.phase = 'denken'
      this.getippt = ''
      this.warten(1150, this.antworten)
    },
    antworten() {
      this.phase = 'antwort'
      const zeige = (n) => {
        this.sichtbareTreffer = n
        if (n < this.treffer.length) { this.warten(430, () => zeige(n + 1)); return }
        this.warten(5200, this.starten)
      }
      zeige(1)
    }
  }
}
</script>

<style scoped>
/* Schreibmarke am Ende der getippten Frage */
.cursor {
  display: inline-block; width: 1px; height: 1em; margin-left: 1px;
  vertical-align: -2px; background: #2976d6; animation: blinken .9s step-end infinite;
}
@keyframes blinken { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }

/* Drei Punkte, solange der Assistent sucht */
.denkpunkt {
  width: 5px; height: 5px; border-radius: 50%; background: #a3aec0;
  animation: huepfen 1.1s ease-in-out infinite;
}
@keyframes huepfen {
  0%, 60%, 100% { transform: translateY(0); opacity: .5 }
  30%           { transform: translateY(-3px); opacity: 1 }
}

/* Jede Trefferzeile blendet einzeln ein */
.treffer { animation: einblenden .32s cubic-bezier(.22,.61,.36,1) both; }
@keyframes einblenden {
  from { opacity: 0; transform: translateY(5px) }
  to   { opacity: 1; transform: none }
}

@media (prefers-reduced-motion: reduce) {
  .cursor, .denkpunkt, .treffer { animation: none; }
}
</style>
