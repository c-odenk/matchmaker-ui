<template>
  <section class="sec" id="profiling" style="background:#fff">
    <div class="wrap two">
      <!-- Text -->
      <div>
        <span class="eyebrow"><span class="dot"></span>Ihre Talente</span>
        <h2 style="margin:18px 0 14px">Aus jedem Lebenslauf wird ein <span class="accent">strukturiertes Profil.</span></h2>
        <p class="lead">Lebenslauf hochladen – der Profiling Agent liest die Daten automatisch aus und erstellt daraus ein präzises, anonymisiertes Qualifikationsprofil.</p>
        <ul class="feat-list">
          <li><span class="ck">✓</span>Automatische Extraktion aus PDF, DOC oder DOCX</li>
          <li><span class="ck">✓</span>Strukturiertes, anonymisiertes Kandidatenprofil in Sekunden</li>
          <li><span class="ck">✓</span>Qualifikationsprofil &amp; Suchkriterien für Market- und Matching-Agent</li>
        </ul>
      </div>

      <!-- Animiertes Browserfenster: der Profiling-Workflow Schritt für Schritt -->
      <div style="position:relative">
        <div class="browser">
          <div class="browser-bar">
            <i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i>
            <span class="browser-url">{{ url }}</span>
          </div>
          <div class="dash pf-stage" :class="{ 'pf-no-clip': reduce }" ref="stage">
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
export default {
  name: 'LandingProfilingV5',
  data() {
    return {
      step: 0,
      timer: null,
      io: null,
      reduce: false,
      // Verweildauer je Schritt in ms – das fertige Profil bleibt am längsten (Scroll-Durchlauf).
      durations: [2600, 2400, 2600, 6800],
      labels: [
        'Kandidat hinzufügen',
        'Lebenslauf auswählen',
        'KI extrahiert die Daten',
        'Profil erstellt'
      ]
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
    // Bei reduzierter Bewegung / fehlendem Observer: direkt das vollständige Profil zeigen.
    if (this.reduce || typeof IntersectionObserver === 'undefined') {
      this.step = this.labels.length - 1
      return
    }
    // Der Ablauf startet, sobald das Fenster sichtbar ist, und pausiert beim Wegscrollen.
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
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    // Wird nach jedem Schritt-Übergang ausgelöst; startet beim Profil den Auto-Scroll.
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
      void el.offsetHeight // Reflow erzwingen, damit der Reset greift
      if (distance > 4) {
        el.style.transition = 'transform 4.8s ease-in-out 0.6s'
        el.style.transform = 'translateY(-' + distance + 'px)'
      }
    }
  }
}
</script>
