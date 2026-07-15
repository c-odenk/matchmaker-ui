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
              <div class="dm-field dm-date-field" ref="dateField">
                <label id="dm-dt-label">Wunschtermin <span class="dm-opt">nur Mo &amp; Fr</span></label>
                <button
                  type="button" class="dm-input dm-date-trigger" :class="{ 'dm-date-placeholder': !form.date }"
                  aria-haspopup="true" :aria-expanded="pickerOpen ? 'true' : 'false'" aria-labelledby="dm-dt-label"
                  @click="togglePicker"
                >
                  {{ formattedDate || 'Datum wählen' }}
                  <svg class="dm-date-ic" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
                </button>

                <div v-if="pickerOpen" class="dm-datepicker">
                  <div class="dm-dp-head">
                    <button type="button" class="dm-dp-nav" :disabled="isPrevMonthDisabled" aria-label="Vorheriger Monat" @click="prevMonth">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
                    </button>
                    <span class="dm-dp-month">{{ pickerMonthLabel }}</span>
                    <button type="button" class="dm-dp-nav" aria-label="Nächster Monat" @click="nextMonth">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </button>
                  </div>
                  <div class="dm-dp-weekdays">
                    <span v-for="wd in weekdayLabels" :key="wd">{{ wd }}</span>
                  </div>
                  <div class="dm-dp-grid">
                    <button
                      v-for="day in pickerDays" :key="day.iso" type="button" class="dm-dp-day"
                      :class="{ 'dm-dp-day-muted': !day.isCurrentMonth, 'dm-dp-day-unavailable': day.isCurrentMonth && day.disabled, 'dm-dp-day-selected': day.iso === form.date, 'dm-dp-day-today': day.isToday }"
                      :disabled="day.disabled" :aria-label="day.iso"
                      @click="selectDay(day)"
                    >{{ day.label }}</button>
                  </div>
                  <p class="dm-dp-legend">Verfügbar: montags &amp; freitags</p>
                </div>
              </div>
              <div class="dm-field">
                <label for="dm-sl">Bevorzugte Zeit</label>
                <div class="dm-select-wrap">
                  <select id="dm-sl" v-model="form.slot" class="dm-select">
                    <option value="Vormittag (10–12 Uhr)">Vormittag (10–12 Uhr)</option>
                    <option value="Nachmittag (14–17 Uhr)">Nachmittag (14–17 Uhr)</option>
                  </select>
                  <svg class="dm-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
                </div>
              </div>
            </div>

            <div class="dm-field">
              <label for="dm-msg">Nachricht <span class="dm-opt">optional</span></label>
              <textarea id="dm-msg" v-model.trim="form.message" class="dm-textarea" rows="2" placeholder="Worauf sollen wir besonders eingehen?"></textarea>
            </div>

            <p v-if="error" class="dm-error" role="alert">
              Ihre Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es
              erneut oder schreiben Sie uns direkt an
              <a href="mailto:christopher.odenkirchen@googlemail.com">christopher.odenkirchen@googlemail.com</a>.
            </p>

            <div class="dm-actions">
              <button type="button" class="dm-cancel" @click="close">Abbrechen</button>
              <button type="submit" class="dm-submit" :disabled="!formValid || sending">
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
            <button class="dm-submit dm-submit-success" @click="close">Schließen</button>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import { demoModal, closeDemoModal } from '@/composables/demoModal'

const API_BASE = process.env.VUE_APP_API_URL || 'https://matchmaker-api-l835.onrender.com'

const emptyForm = () => ({
  firstName: '', lastName: '', company: '', email: '',
  phone: '', date: '', slot: 'Vormittag (10–12 Uhr)', message: ''
})

const WEEKDAY_LABELS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

export default {
  name: 'DemoModal',
  data() {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return {
      submitted: false, sending: false, error: false, form: emptyForm(),
      pickerOpen: false,
      pickerMonth: new Date(today.getFullYear(), today.getMonth(), 1),
      todayMidnight: today,
      weekdayLabels: WEEKDAY_LABELS
    }
  },
  computed: {
    open() { return demoModal.open },
    isValidWeekday() {
      if (!this.form.date) return true
      const day = new Date(`${this.form.date}T00:00:00`).getDay()
      return day === 1 || day === 5
    },
    formValid() {
      const f = this.form
      return !!(f.firstName && f.lastName && f.company &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) && f.date && this.isValidWeekday)
    },
    formattedDate() {
      if (!this.form.date) return ''
      const [y, m, d] = this.form.date.split('-').map(Number)
      return new Date(y, m - 1, d).toLocaleDateString('de-DE', { weekday: 'short', day: '2-digit', month: '2-digit', year: 'numeric' })
    },
    pickerMonthLabel() {
      return this.pickerMonth.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })
    },
    isPrevMonthDisabled() {
      return this.pickerMonth.getFullYear() === this.todayMidnight.getFullYear() &&
        this.pickerMonth.getMonth() === this.todayMidnight.getMonth()
    },
    pickerDays() {
      const year = this.pickerMonth.getFullYear()
      const month = this.pickerMonth.getMonth()
      const offset = (new Date(year, month, 1).getDay() + 6) % 7 // Montag = 0
      const days = []
      for (let i = 0; i < 42; i++) {
        const d = new Date(year, month, 1 - offset + i)
        const dow = d.getDay()
        const isCurrentMonth = d.getMonth() === month
        days.push({
          iso: this.toISO(d),
          label: d.getDate(),
          isCurrentMonth,
          isToday: this.isSameDate(d, this.todayMidnight),
          disabled: !isCurrentMonth || d < this.todayMidnight || !(dow === 1 || dow === 5)
        })
      }
      return days
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
        this.closePicker()
        setTimeout(() => { this.submitted = false; this.sending = false; this.error = false; this.form = emptyForm() }, 300)
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', this.onKey)
    document.removeEventListener('click', this.onDocClick, true)
  },
  methods: {
    onKey(e) {
      if (e.key !== 'Escape') return
      if (this.pickerOpen) { this.closePicker(); return }
      this.close()
    },
    close() { closeDemoModal() },
    toISO(d) {
      const pad = n => String(n).padStart(2, '0')
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
    },
    isSameDate(a, b) {
      return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
    },
    togglePicker() { this.pickerOpen ? this.closePicker() : this.openPicker() },
    openPicker() {
      const base = this.form.date ? new Date(`${this.form.date}T00:00:00`) : this.todayMidnight
      this.pickerMonth = new Date(base.getFullYear(), base.getMonth(), 1)
      this.pickerOpen = true
      this.$nextTick(() => document.addEventListener('click', this.onDocClick, true))
    },
    closePicker() {
      this.pickerOpen = false
      document.removeEventListener('click', this.onDocClick, true)
    },
    onDocClick(e) {
      if (this.$refs.dateField && !this.$refs.dateField.contains(e.target)) this.closePicker()
    },
    prevMonth() {
      if (this.isPrevMonthDisabled) return
      this.pickerMonth = new Date(this.pickerMonth.getFullYear(), this.pickerMonth.getMonth() - 1, 1)
    },
    nextMonth() {
      this.pickerMonth = new Date(this.pickerMonth.getFullYear(), this.pickerMonth.getMonth() + 1, 1)
    },
    selectDay(day) {
      if (day.disabled) return
      this.form.date = day.iso
      this.closePicker()
    },
    async handleSubmit() {
      if (!this.formValid || this.sending) return
      this.sending = true
      this.error = false
      try {
        const f = this.form
        const res = await fetch(`${API_BASE}/api/demo-requests`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            vorname: f.firstName,
            nachname: f.lastName,
            firma: f.company,
            email: f.email,
            ...(f.phone && { telefon: f.phone }),
            ...(f.date && { wunschtermin: f.date }),
            ...(f.slot && { bevorzugteZeit: f.slot }),
            ...(f.message && { nachricht: f.message })
          })
        })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        this.submitted = true
      } catch {
        this.error = true
      } finally {
        this.sending = false
      }
    }
  }
}
</script>

<style scoped>
.dm-overlay { position: fixed; inset: 0; z-index: 200; display: flex; align-items: center; justify-content: center; padding: 16px; background: rgba(8, 15, 30, .62); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); }
.dm-card { position: relative; width: 100%; max-width: 640px; max-height: calc(100vh - 32px); max-height: calc(100dvh - 32px); display: flex; flex-direction: column; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 40px 90px rgba(8, 15, 30, .45); }
.dm-head { position: relative; overflow: hidden; background: #172b4d; color: #fff; padding: 24px 30px 20px; flex-shrink: 0; }
.dm-glow { position: absolute; top: -80%; right: -10%; width: 60%; height: 240%; background: radial-gradient(ellipse at center, rgba(41, 118, 214, .4), transparent 65%); filter: blur(42px); pointer-events: none; }
.dm-x { position: absolute; top: 15px; right: 15px; z-index: 2; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: rgba(255, 255, 255, .1); color: rgba(255, 255, 255, .75); border: none; cursor: pointer; transition: .18s; }
.dm-x:hover { background: rgba(255, 255, 255, .2); color: #fff; }
.dm-head-row { position: relative; z-index: 1; display: flex; align-items: flex-start; gap: 14px; padding-right: 38px; }
.dm-head-ic { width: 42px; height: 42px; flex-shrink: 0; border-radius: 11px; background: rgba(255, 255, 255, .1); border: 1px solid rgba(255, 255, 255, .14); display: flex; align-items: center; justify-content: center; }
.dm-title { font-size: 1.2rem; font-weight: 800; letter-spacing: -.01em; line-height: 1.2; }
.dm-sub { font-size: .84rem; color: rgba(255, 255, 255, .72); margin-top: 4px; line-height: 1.4; }
.dm-trust { position: relative; z-index: 1; display: flex; flex-wrap: wrap; gap: 8px 18px; margin-top: 10px; margin-left: 56px; font-size: .76rem; color: rgba(255, 255, 255, .7); }
.dm-trust span { display: inline-flex; align-items: center; gap: 6px; }
.dm-trust svg { color: #7db8f0; flex-shrink: 0; }
.dm-body { padding: 24px 30px 26px; overflow-y: auto; display: flex; flex-direction: column; gap: 14px; }
.dm-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.dm-field { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.dm-field label { font-size: .7rem; font-weight: 600; letter-spacing: .02em; color: #7c8aa0; text-transform: uppercase; display: flex; align-items: center; gap: 6px; }
.dm-opt { text-transform: none; letter-spacing: 0; font-weight: 500; color: #aab4c4; font-size: .68rem; }
.dm-input, .dm-select, .dm-textarea { width: 100%; padding: 11px 13px; border: 1px solid #e7ebf1; background: #f6f8fc; border-radius: 10px; font-size: .9rem; font-family: inherit; color: #0f172a; transition: .16s; }
.dm-input::placeholder, .dm-textarea::placeholder { color: #9aa7b8; }
.dm-input:focus, .dm-select:focus, .dm-textarea:focus { outline: none; border-color: #2976d6; background: #fff; box-shadow: 0 0 0 3px rgba(41, 118, 214, .12); }
.dm-textarea { resize: vertical; min-height: 54px; line-height: 1.5; }
.dm-select-wrap { position: relative; }
.dm-select { appearance: none; -webkit-appearance: none; cursor: pointer; height: 47px; padding-top: 0; padding-bottom: 0; padding-right: 38px; line-height: 45px; }
.dm-chev { position: absolute; right: 13px; top: 50%; transform: translateY(-50%); pointer-events: none; color: #7c8aa0; }
.dm-actions { display: flex; align-items: center; justify-content: space-between; gap: 14px; margin-top: 6px; }
.dm-cancel { background: none; border: none; font: inherit; font-size: .9rem; font-weight: 600; color: #7c8aa0; cursor: pointer; padding: 8px 4px; transition: .16s; }
.dm-cancel:hover { color: #0f172a; }
.dm-submit { display: inline-flex; align-items: center; justify-content: center; gap: 8px; height: 46px; padding: 0 22px; border-radius: 9px; font-size: .97rem; font-weight: 600; font-family: inherit; cursor: pointer; border: none; transition: .18s; background: #2976d6; color: #fff; min-width: 166px; }
.dm-submit:hover { background: #2065bd; }
.dm-submit:disabled { opacity: .5; cursor: not-allowed; }
.dm-submit-success { margin-top: 22px; min-width: 150px; }
.dm-date-field { position: relative; }
.dm-date-trigger { display: flex; align-items: center; justify-content: space-between; gap: 8px; text-align: left; cursor: pointer; }
.dm-date-placeholder { color: #9aa7b8; }
.dm-date-ic { color: #7c8aa0; flex-shrink: 0; }
.dm-datepicker { position: absolute; top: calc(100% + 6px); left: 0; z-index: 20; width: 268px; background: #fff; border: 1px solid #e7ebf1; border-radius: 12px; box-shadow: 0 16px 40px rgba(8, 15, 30, .16); padding: 14px; }
.dm-dp-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
.dm-dp-month { font-size: .84rem; font-weight: 700; color: #0f172a; text-transform: capitalize; }
.dm-dp-nav { width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; border-radius: 8px; border: none; background: none; color: #56657c; cursor: pointer; transition: .16s; }
.dm-dp-nav:hover:not(:disabled) { background: #f0f3f8; color: #0f172a; }
.dm-dp-nav:disabled { opacity: .3; cursor: not-allowed; }
.dm-dp-weekdays { display: grid; grid-template-columns: repeat(7, 1fr); margin-bottom: 2px; }
.dm-dp-weekdays span { font-size: .64rem; font-weight: 700; text-transform: uppercase; color: #9aa7b8; text-align: center; }
.dm-dp-grid { display: grid; grid-template-columns: repeat(7, 1fr); row-gap: 2px; }
.dm-dp-day { aspect-ratio: 1; display: flex; align-items: center; justify-content: center; font-size: .78rem; font-weight: 600; color: #0f172a; background: none; border: none; border-radius: 8px; cursor: pointer; transition: .14s; }
.dm-dp-day:hover:not(:disabled) { background: #eaf2fc; color: #2976d6; }
.dm-dp-day-muted { color: #d8dee7; }
.dm-dp-day-unavailable { color: #d99a96; cursor: not-allowed; }
.dm-dp-day-today { box-shadow: inset 0 0 0 1.5px #cbd5e1; }
.dm-dp-day-selected, .dm-dp-day-selected:hover { background: #2976d6; color: #fff; }
.dm-dp-legend { margin-top: 10px; padding-top: 10px; border-top: 1px solid #f0f3f8; font-size: .7rem; color: #7c8aa0; text-align: center; }
.dm-error { font-size: .82rem; line-height: 1.5; color: #b42318; background: #fef3f2; border: 1px solid #fecdca; border-radius: 10px; padding: 10px 13px; }
.dm-error a { color: #b42318; font-weight: 600; }
.dm-disclaimer { font-size: .72rem; color: #7c8aa0; text-align: center; margin-top: 2px; }
.dm-disclaimer a { color: #2976d6; text-decoration: underline; }
.dm-spin { width: 18px; height: 18px; border-radius: 50%; border: 2px solid rgba(255, 255, 255, .4); border-top-color: #fff; animation: dm-spin .7s linear infinite; }
.dm-success { align-items: center; text-align: center; padding: 36px 26px 32px; }
.dm-success-ic { width: 62px; height: 62px; border-radius: 50%; background: #22c55e; display: flex; align-items: center; justify-content: center; color: #fff; animation: dm-pop .45s cubic-bezier(.17, .89, .32, 1.28) both; }
.dm-success-t { font-size: 1.2rem; font-weight: 800; margin-top: 18px; }
.dm-success-d { font-size: .88rem; color: #475569; line-height: 1.55; max-width: 330px; margin-top: 8px; }
@keyframes dm-spin { to { transform: rotate(360deg); } }
@keyframes dm-pop { from { transform: scale(0); opacity: 0; } to { transform: scale(1); opacity: 1; } }
.dm-enter-active, .dm-leave-active { transition: opacity .25s ease; }
.dm-enter-active .dm-card, .dm-leave-active .dm-card { transition: transform .28s cubic-bezier(.22, .61, .36, 1), opacity .28s ease; }
.dm-enter-from, .dm-leave-to { opacity: 0; }
.dm-enter-from .dm-card, .dm-leave-to .dm-card { transform: translateY(16px) scale(.97); opacity: 0; }
.dm-swap-enter-active, .dm-swap-leave-active { transition: opacity .25s ease, transform .25s ease; }
.dm-swap-enter-from { opacity: 0; transform: translateY(8px); }
.dm-swap-leave-to { opacity: 0; transform: translateY(-8px); }
@media (max-width: 560px) {
  .dm-row { grid-template-columns: 1fr; }
  .dm-head { padding: 20px 20px 16px; }
  .dm-body { padding: 20px 20px 22px; }
  .dm-actions { flex-direction: column-reverse; align-items: stretch; gap: 8px; }
  .dm-submit { width: 100%; }
  .dm-cancel { width: 100%; text-align: center; }
}
</style>
