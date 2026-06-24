<template>
  <transition name="dm">
    <div v-if="open" class="dm-overlay" @click.self="close">
      <div class="dm-card" role="dialog" aria-modal="true" aria-labelledby="dm-title">

        <!-- Kopf (Navy + Glow, wie Hero/CTA) -->
        <div class="dm-head">
          <div class="dm-glow"></div>
          <button class="dm-x" @click="close" aria-label="Schließen">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div class="dm-head-row">
            <div class="dm-head-ic">
              <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.7"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
            </div>
            <div>
              <h2 id="dm-title" class="dm-title">Demo vereinbaren</h2>
              <p class="dm-sub">Lassen Sie sich matchmaker.hr in 15 Minuten persönlich zeigen.</p>
            </div>
          </div>
          <div class="dm-trust">
            <span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>15 Minuten</span>
            <span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h8.25a2.25 2.25 0 002.25-2.25V8.25a2.25 2.25 0 00-2.25-2.25H4.5A2.25 2.25 0 002.25 8.25v8.25a2.25 2.25 0 002.25 2.25z"/></svg>per Video-Call</span>
            <span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>unverbindlich</span>
          </div>
        </div>

        <!-- Body: Formular oder Erfolgsmeldung -->
        <transition name="dm-swap" mode="out-in">
          <form v-if="!submitted" key="form" class="dm-body" @submit.prevent="handleSubmit">
            <div class="dm-row">
              <div class="dm-field">
                <label for="dm-fn">Vorname</label>
                <input id="dm-fn" ref="firstInput" v-model.trim="form.firstName" class="dm-input" type="text" autocomplete="given-name" placeholder="Maria" />
              </div>
              <div class="dm-field">
                <label for="dm-ln">Nachname</label>
                <input id="dm-ln" v-model.trim="form.lastName" class="dm-input" type="text" autocomplete="family-name" placeholder="Schmidt" />
              </div>
            </div>

            <div class="dm-field">
              <label for="dm-co">Firma</label>
              <input id="dm-co" v-model.trim="form.company" class="dm-input" type="text" autocomplete="organization" placeholder="Muster Personalberatung GmbH" />
            </div>

            <div class="dm-row">
              <div class="dm-field">
                <label for="dm-em">Geschäftliche E-Mail</label>
                <input id="dm-em" v-model.trim="form.email" class="dm-input" type="email" autocomplete="email" placeholder="maria.schmidt@firma.de" />
              </div>
              <div class="dm-field">
                <label for="dm-ph">Telefon <span class="dm-opt">optional</span></label>
                <input id="dm-ph" v-model.trim="form.phone" class="dm-input" type="tel" autocomplete="tel" placeholder="+49 …" />
              </div>
            </div>

            <div class="dm-row">
              <div class="dm-field">
                <label for="dm-dt">Wunschtermin</label>
                <input id="dm-dt" v-model="form.date" class="dm-input" type="date" :min="todayISO" />
              </div>
              <div class="dm-field">
                <label for="dm-sl">Bevorzugte Zeit</label>
                <div class="dm-select-wrap">
                  <select id="dm-sl" v-model="form.slot" class="dm-select">
                    <option value="Vormittag (9–12 Uhr)">Vormittag (9–12 Uhr)</option>
                    <option value="Nachmittag (12–17 Uhr)">Nachmittag (12–17 Uhr)</option>
                    <option value="Flexibel">Flexibel</option>
                  </select>
                  <svg class="dm-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
                </div>
              </div>
            </div>

            <div class="dm-field">
              <label for="dm-msg">Nachricht <span class="dm-opt">optional</span></label>
              <textarea id="dm-msg" v-model.trim="form.message" class="dm-textarea" rows="2" placeholder="Worauf sollen wir besonders eingehen?"></textarea>
            </div>

            <div class="dm-actions">
              <button type="button" class="dm-cancel" @click="close">Abbrechen</button>
              <button type="submit" class="btn btn-blue" :disabled="!formValid || sending">
                <span v-if="sending" class="dm-spin" aria-hidden="true"></span>
                <span v-else>Termin anfragen →</span>
              </button>
            </div>

            <p class="dm-disclaimer">
              Mit dem Absenden stimmen Sie unserer
              <router-link to="/privacy">Datenschutzerklärung</router-link> zu.
            </p>
          </form>

          <div v-else key="success" class="dm-body dm-success">
            <div class="dm-success-ic">
              <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
            </div>
            <h3 class="dm-success-t">Vielen Dank{{ form.firstName ? ', ' + form.firstName : '' }}!</h3>
            <p class="dm-success-d">Ihre Anfrage ist eingegangen. Wir bestätigen Ihren 15-minütigen Demo-Termin in Kürze per E-Mail.</p>
            <button class="btn btn-blue" @click="close">Schließen</button>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import { demoModal, closeDemoModal } from './demo-modal-store'

const emptyForm = () => ({
  firstName: '', lastName: '', company: '', email: '',
  phone: '', date: '', slot: 'Vormittag (9–12 Uhr)', message: ''
})

export default {
  name: 'LandingDemoModalV5',
  data() {
    return { submitted: false, sending: false, form: emptyForm() }
  },
  computed: {
    open() {
      return demoModal.open
    },
    todayISO() {
      return new Date().toISOString().slice(0, 10)
    },
    formValid() {
      const f = this.form
      return !!(f.firstName && f.lastName && f.company &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) && f.date)
    }
  },
  watch: {
    open(val) {
      document.body.style.overflow = val ? 'hidden' : ''
      if (val) {
        document.addEventListener('keydown', this.onKey)
        this.$nextTick(() => this.$refs.firstInput && this.$refs.firstInput.focus())
      } else {
        document.removeEventListener('keydown', this.onKey)
        // Nach der Schließ-Animation zurücksetzen
        setTimeout(() => { this.submitted = false; this.sending = false; this.form = emptyForm() }, 300)
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', this.onKey)
  },
  methods: {
    onKey(e) {
      if (e.key === 'Escape') this.close()
    },
    close() {
      closeDemoModal()
    },
    async handleSubmit() {
      if (!this.formValid || this.sending) return
      this.sending = true
      try {
        // TODO: An Backend / E-Mail-Dienst anbinden, z. B.:
        // await fetch(`${process.env.VUE_APP_API_URL}/api/demo-request`, {
        //   method: 'POST', headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(this.form)
        // })
        await new Promise(r => setTimeout(r, 700))
        this.submitted = true
      } finally {
        this.sending = false
      }
    }
  }
}
</script>
