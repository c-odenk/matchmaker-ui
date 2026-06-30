<template>
  <section class="sec bg-white" id="profiling">
    <div class="wrap two grid [grid-template-columns:1fr_1.1fr] gap-[52px] items-center max-[880px]:grid-cols-1 max-[880px]:gap-[30px]">
      <!-- Text -->
      <div class="min-w-0">
        <EyebrowBadge>Ihre Talente</EyebrowBadge>
        <h2 class="text-section text-ink mt-[18px] mb-[14px]">Aus jedem Lebenslauf wird ein <span class="text-blue">strukturiertes Profil.</span></h2>
        <p class="text-lead text-body">Lebenslauf hochladen – der Profiling Agent liest die Daten automatisch aus und erstellt daraus ein präzises, anonymisiertes Qualifikationsprofil.</p>
        <FeatureList :items="features" />
      </div>

      <!-- Animiertes Browserfenster: der Profiling-Workflow Schritt für Schritt -->
      <div class="relative min-w-0">
        <div class="relative rounded-[14px] overflow-hidden shadow-browser border border-line max-[880px]:max-w-[540px] max-[880px]:mx-auto">
          <div class="flex items-center gap-[7px] px-4 py-[11px] bg-navy-2">
            <i class="w-[11px] h-[11px] rounded-full bg-[#ff5f57]"></i>
            <i class="w-[11px] h-[11px] rounded-full bg-[#febc2e]"></i>
            <i class="w-[11px] h-[11px] rounded-full bg-[#28c840]"></i>
            <span class="ml-3 text-[.72rem] text-white/40 bg-white/[0.06] px-3 py-1 rounded-[6px] min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">{{ url }}</span>
          </div>
          <div class="pf-stage bg-white text-ink px-[22px] py-5" :class="{ 'pf-no-clip': reduce }" ref="stage">
            <transition name="pf" mode="out-in" @after-enter="onStepShown">
              <!-- 0 · Leere Kandidatenliste -->
              <div class="pf-screen" key="s0" v-if="step === 0">
                <div class="pf-head">
                  <div>
                    <div class="pf-title">Kandidaten</div>
                    <div class="pf-sub">0 Profile im Pool</div>
                  </div>
                  <div class="pf-addbtn pulse">+ Kandidat hinzufügen</div>
                </div>
                <div class="pf-empty">
                  <div class="pf-empty-ic">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>
                  </div>
                  <div class="pf-empty-t">Keine Kandidaten gefunden</div>
                  <div class="pf-empty-d">Laden Sie einen Lebenslauf hoch, um den ersten Kandidaten anzulegen.</div>
                </div>
              </div>

              <!-- 1 · Upload-Dialog -->
              <div class="pf-screen" key="s1" v-else-if="step === 1">
                <div class="pf-modal">
                  <div class="pf-modal-head"><span class="pf-modal-t">+ Kandidat hinzufügen</span><span class="pf-x">×</span></div>
                  <div class="pf-modal-d">Laden Sie einen Lebenslauf hoch — das KI-Agentensystem liest die Daten automatisch aus.</div>
                  <div class="pf-drop">
                    <div class="pf-drop-ic">
                      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/></svg>
                    </div>
                    <div class="pf-drop-t">Lebenslauf hierher ziehen</div>
                    <div class="pf-drop-d">oder klicken zum Auswählen</div>
                    <div class="pf-tags"><span>PDF</span><span>DOC</span><span>DOCX</span></div>
                  </div>
                </div>
              </div>

              <!-- 2 · KI analysiert -->
              <div class="pf-screen" key="s2" v-else-if="step === 2">
                <div class="pf-modal">
                  <div class="pf-modal-head"><span class="pf-modal-t">+ Kandidat hinzufügen</span><span class="pf-x">×</span></div>
                  <div class="pf-analyze">
                    <div class="pf-spinner"></div>
                    <div class="pf-analyze-t">KI analysiert den Lebenslauf…</div>
                    <div class="pf-analyze-d">Daten werden extrahiert und das Profil wird erstellt</div>
                  </div>
                </div>
              </div>

              <!-- 3 · Vollständiges Profil (scrollt automatisch durch) -->
              <div class="pf-screen" key="s3" v-else>
                <div class="pf-scrollview">
                  <div class="pf-scroll" ref="profileScroll">
                    <div class="pf-pro-top">
                      <div class="pf-av">MM</div>
                      <div>
                        <div class="pf-pro-name">Max Mustermann <span class="pf-badge">Aktiv</span></div>
                        <div class="pf-pro-role">Senior IT Projektleiter · Hamburg · aufgenommen 23.06.2026</div>
                      </div>
                    </div>
                    <div class="pf-chips">
                      <span>IT-Management</span><span>Cloud Infrastructure</span><span>SaaS</span><span>Agile Führung</span><span>Scrum</span><span>Jira</span>
                    </div>

                    <div class="pf-sec-h">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.96 11.96 0 013.6 6 12 12 0 003 9.75c0 5.59 3.82 10.29 9 11.62 5.18-1.33 9-6.03 9-11.62 0-1.31-.21-2.57-.6-3.75h-.15c-3.2 0-6.1-1.25-8.25-3.29z"/></svg>
                      Anonymisiertes Profil
                    </div>

                    <div class="pf-cols">
                      <div>
                        <div class="pf-lbl">Erfahrung</div>
                        <ul class="pf-list">
                          <li>12+ Jahre in der Leitung komplexer IT-Infrastrukturprojekte.</li>
                          <li>5 Jahre Führungsverantwortung für interdisziplinäre Teams.</li>
                          <li>Skalierung einer Cloud-Infrastruktur von 10 auf 200 Knoten, Budget 1,5 Mio. € p.a.</li>
                          <li>Zuvor IT-Consultant mit Fokus auf SaaS &amp; CRM-Integrationen.</li>
                        </ul>
                      </div>
                      <div>
                        <div class="pf-lbl">Ausbildung</div>
                        <ul class="pf-list">
                          <li>M.Sc. Informatik, TU München (2009–2012)</li>
                          <li>B.Sc. Wirtschaftsinformatik, Uni Hamburg (2006–2009)</li>
                        </ul>
                        <div class="pf-lbl" style="margin-top:13px">Sprachen</div>
                        <div class="pf-val">Deutsch (Muttersprache), Englisch (C1)</div>
                      </div>
                    </div>

                    <div class="pf-stats">
                      <div class="pf-stat"><div class="pf-stat-l">Gesamterfahrung</div><div class="pf-stat-v">12+ Jahre</div></div>
                      <div class="pf-stat"><div class="pf-stat-l">Leadership</div><div class="pf-stat-v">5 Jahre</div></div>
                      <div class="pf-stat"><div class="pf-stat-l">Teamgröße</div><div class="pf-stat-v">15 FTE</div></div>
                      <div class="pf-stat"><div class="pf-stat-l">Verfügbarkeit</div><div class="pf-stat-v">3 Monate</div></div>
                    </div>

                    <div class="pf-cols">
                      <div>
                        <div class="pf-lbl">Branchen</div>
                        <div class="pf-chips sm"><span>IT-Services</span><span>Software</span><span>Telekommunikation</span></div>
                      </div>
                      <div>
                        <div class="pf-lbl">Zertifizierungen</div>
                        <div class="pf-chips sm"><span>PMP</span><span>Certified Scrum Master</span></div>
                      </div>
                    </div>

                    <div class="pf-cols">
                      <div>
                        <div class="pf-lbl">Gehaltsrahmen</div>
                        <div class="pf-val">110.000 € – 130.000 € p.a.</div>
                      </div>
                      <div>
                        <div class="pf-lbl">Mobilität</div>
                        <div class="pf-val">Hamburg, Berlin, Remote (80 %)</div>
                      </div>
                    </div>

                    <div class="pf-lbl" style="margin-top:14px">Highlights</div>
                    <ul class="pf-list pf-list-orange">
                      <li>Leitung eines interdisziplinären Teams von 15 FTE</li>
                      <li>Skalierung der Cloud-Infrastruktur von 10 auf 200 Knoten</li>
                      <li>Budgetverantwortung von 1,5 Mio. € jährlich</li>
                      <li>Spezialisierung auf SaaS-Lösungen und CRM-Integrationen</li>
                    </ul>

                    <div class="pf-criteria"><span>Erweiterte Suchkriterien</span><span class="pf-crit-badge">Beeinflusst KI-Agent</span></div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Fortschritt -->
        <div class="pf-progress">
          <span v-for="(l, i) in labels" :key="i" :class="['pf-dot', { on: i === step, done: i < step }]"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EyebrowBadge from '@/components/ui/EyebrowBadge.vue'
import FeatureList from '@/components/ui/FeatureList.vue'

export default {
  name: 'ProfilingSection',
  components: { EyebrowBadge, FeatureList },
  data() {
    return {
      step: 0,
      timer: null,
      io: null,
      reduce: false,
      durations: [2600, 2400, 2600, 6800],
      features: [
        'Automatische Extraktion aus PDF, DOC oder DOCX',
        'Strukturiertes, anonymisiertes Kandidatenprofil in Sekunden',
        'Qualifikationsprofil & Suchkriterien für Market- und Matching-Agent'
      ],
      labels: ['Kandidat hinzufügen', 'Lebenslauf auswählen', 'KI extrahiert die Daten', 'Profil erstellt']
    }
  },
  computed: {
    url() {
      return this.step === this.labels.length - 1
        ? 'app-matchmaker-hr.netlify.app/kandidaten/max-mustermann'
        : 'app-matchmaker-hr.netlify.app/kandidaten'
    }
  },
  mounted() {
    this.reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    if (this.reduce || typeof IntersectionObserver === 'undefined') {
      this.step = this.labels.length - 1
      return
    }
    this.io = new IntersectionObserver((entries) => {
      entries.forEach(e => (e.isIntersecting ? this.play() : this.pause()))
    }, { threshold: 0.4 })
    this.io.observe(this.$refs.stage)
  },
  beforeUnmount() {
    this.pause()
    if (this.io) this.io.disconnect()
  },
  methods: {
    play() {
      if (this.timer) return
      const tick = () => {
        this.timer = setTimeout(() => {
          this.step = (this.step + 1) % this.labels.length
          tick()
        }, this.durations[this.step])
      }
      tick()
    },
    pause() {
      if (this.timer) { clearTimeout(this.timer); this.timer = null }
    },
    onStepShown() {
      if (this.step === this.labels.length - 1) this.scrollProfile()
    },
    scrollProfile() {
      const el = this.$refs.profileScroll
      if (!el || this.reduce) return
      const view = el.parentElement
      const distance = el.scrollHeight - view.clientHeight
      el.style.transition = 'none'
      el.style.transform = 'translateY(0)'
      void el.offsetHeight
      if (distance > 4) {
        el.style.transition = 'transform 4.8s ease-in-out 0.6s'
        el.style.transform = 'translateY(-' + distance + 'px)'
      }
    }
  }
}
</script>

<style scoped>
.pf-stage { position: relative; height: 354px; overflow: hidden; display: flex; flex-direction: column; }
.pf-stage.pf-no-clip { height: auto; overflow: visible; }
.pf-screen { flex: 1; display: flex; flex-direction: column; min-height: 0; }
.pf-enter-active, .pf-leave-active { transition: opacity .4s ease, transform .4s ease; }
.pf-enter-from { opacity: 0; transform: translateY(10px) scale(.99); }
.pf-leave-to { opacity: 0; transform: translateY(-8px) scale(.99); }

.pf-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
.pf-title { font-weight: 800; font-size: 1.05rem; letter-spacing: -.01em; }
.pf-sub { font-size: .72rem; color: #7c8aa0; margin-top: 2px; }
.pf-addbtn { flex-shrink: 0; background: #172b4d; color: #fff; font-size: .72rem; font-weight: 600; padding: 9px 13px; border-radius: 8px; }
.pf-empty { flex: 1; margin-top: 16px; border: 1px solid #e7ebf1; border-radius: 12px; padding: 30px 18px; text-align: center; background: #f6f8fc; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.pf-empty-ic { width: 46px; height: 46px; border-radius: 50%; background: #e9eef6; color: #172b4d; display: flex; align-items: center; justify-content: center; }
.pf-empty-t { font-weight: 700; font-size: .9rem; margin-top: 12px; }
.pf-empty-d { font-size: .74rem; color: #7c8aa0; margin-top: 5px; max-width: 280px; }

.pf-modal { border: 1px solid #e7ebf1; border-radius: 14px; padding: 18px; background: #fff; box-shadow: 0 12px 32px rgba(23, 43, 77, .08); }
.pf-modal-head { display: flex; align-items: center; justify-content: space-between; }
.pf-modal-t { font-weight: 800; font-size: .92rem; }
.pf-x { color: #7c8aa0; font-size: 1.05rem; line-height: 1; }
.pf-modal-d { font-size: .74rem; color: #7c8aa0; margin-top: 8px; line-height: 1.5; }
.pf-drop { margin-top: 14px; border: 2px dashed #c4d0e0; border-radius: 12px; padding: 26px 16px; text-align: center; background: #f6f8fc; }
.pf-drop-ic { width: 48px; height: 48px; border-radius: 50%; background: #e9eef6; color: #172b4d; display: flex; align-items: center; justify-content: center; margin: 0 auto; }
.pf-drop-t { font-weight: 700; font-size: .88rem; margin-top: 10px; }
.pf-drop-d { font-size: .72rem; color: #7c8aa0; margin-top: 3px; }
.pf-tags { display: flex; gap: 8px; justify-content: center; margin-top: 13px; }
.pf-tags span { font-size: .64rem; font-weight: 700; color: #56657c; background: #eef2f7; border: 1px solid #e7ebf1; border-radius: 6px; padding: 3px 9px; }
.pf-analyze { margin-top: 16px; border: 1px solid #e7ebf1; border-radius: 12px; padding: 38px 18px; text-align: center; background: #f6f8fc; }
.pf-spinner { width: 44px; height: 44px; border-radius: 50%; border: 3px solid #dbe3ef; border-top-color: #2976d6; margin: 0 auto; animation: pf-spin .8s linear infinite; }
@keyframes pf-spin { to { transform: rotate(360deg); } }
.pf-analyze-t { font-weight: 700; font-size: .9rem; margin-top: 18px; }
.pf-analyze-d { font-size: .74rem; color: #7c8aa0; margin-top: 5px; }

.pf-scrollview { flex: 1; min-height: 0; overflow: hidden; position: relative; }
.pf-no-clip .pf-scrollview { overflow: visible; }
.pf-scroll { will-change: transform; }
.pf-pro-top { display: flex; align-items: center; gap: 12px; }
.pf-av { width: 44px; height: 44px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #172b4d; color: #fff; font-weight: 700; font-size: .82rem; letter-spacing: .03em; }
.pf-pro-name { font-weight: 800; font-size: .98rem; display: flex; align-items: center; gap: 9px; }
.pf-badge { font-size: .62rem; font-weight: 700; color: #15803d; background: #e7f8ee; border: 1px solid #bfe6cd; border-radius: 999px; padding: 2px 9px; }
.pf-pro-role { font-size: .74rem; color: #7c8aa0; margin-top: 3px; }
.pf-chips { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 14px; }
.pf-chips span { font-size: .7rem; font-weight: 600; color: #172b4d; background: #f6f8fc; border: 1px solid #e7ebf1; border-radius: 7px; padding: 4px 10px; }
.pf-chips.sm span { font-size: .66rem; padding: 3px 8px; }
.pf-sec-h { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: .84rem; color: #172b4d; margin-top: 16px; padding-top: 14px; border-top: 1px solid #e7ebf1; }
.pf-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 18px; margin-top: 14px; }
.pf-lbl { font-size: .64rem; font-weight: 600; color: #7c8aa0; margin-bottom: 5px; }
.pf-val { font-size: .76rem; color: #0f172a; font-weight: 500; }
.pf-list { list-style: none; display: flex; flex-direction: column; gap: 6px; }
.pf-list li { position: relative; padding-left: 13px; font-size: .74rem; color: #475569; line-height: 1.42; }
.pf-list li::before { content: ""; position: absolute; left: 0; top: 7px; width: 4px; height: 4px; border-radius: 50%; background: #2976d6; }
.pf-list-orange li::before { background: #ea580c; }
.pf-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px; margin-top: 14px; }
.pf-stat { border: 1px solid #e7ebf1; border-radius: 10px; padding: 10px 12px; }
.pf-stat-l { font-size: .62rem; color: #7c8aa0; }
.pf-stat-v { font-size: .86rem; font-weight: 800; margin-top: 3px; }
.pf-criteria { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-top: 16px; padding: 12px 14px; border: 1px solid #e7ebf1; border-radius: 10px; background: #f6f8fc; font-weight: 700; font-size: .8rem; color: #172b4d; }
.pf-crit-badge { flex-shrink: 0; font-size: .6rem; font-weight: 700; color: #2976d6; background: #eaf2fc; border-radius: 999px; padding: 3px 10px; }

.pf-progress { display: flex; justify-content: center; gap: 7px; margin-top: 18px; }
.pf-dot { width: 7px; height: 7px; border-radius: 50%; background: #cdd9ea; transition: .3s; }
.pf-dot.done { background: #9db8dd; }
.pf-dot.on { background: #2976d6; width: 22px; border-radius: 4px; }
@media (prefers-reduced-motion: no-preference) {
  .pf-addbtn.pulse { animation: pf-pulse 1.7s ease-in-out infinite; }
}
@keyframes pf-pulse { 0%, 100% { box-shadow: 0 0 0 0 rgba(41, 118, 214, .45); } 50% { box-shadow: 0 0 0 7px rgba(41, 118, 214, 0); } }
</style>
