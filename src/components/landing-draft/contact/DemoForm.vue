<template>
  <div class="rounded-[11px] border border-line bg-white p-7 shadow-[0_18px_44px_-22px_rgba(15,23,42,.25)] max-[560px]:p-5">
    <form v-if="!submitted" @submit.prevent="handleSubmit">
      <div class="grid grid-cols-2 gap-[14px] max-[560px]:grid-cols-1">
        <div class="df-field">
          <label for="df-fn">Vorname</label>
          <input id="df-fn" v-model.trim="form.firstName" class="df-input" type="text" autocomplete="given-name" placeholder="Maria" />
        </div>
        <div class="df-field">
          <label for="df-ln">Nachname</label>
          <input id="df-ln" v-model.trim="form.lastName" class="df-input" type="text" autocomplete="family-name" placeholder="Schmidt" />
        </div>
      </div>

      <div class="df-field mt-[14px]">
        <label for="df-co">Firma</label>
        <input id="df-co" v-model.trim="form.company" class="df-input" type="text" autocomplete="organization" placeholder="Muster Personalberatung GmbH" />
      </div>

      <div class="grid grid-cols-2 gap-[14px] mt-[14px] max-[560px]:grid-cols-1">
        <div class="df-field">
          <label for="df-em">Geschäftliche E-Mail</label>
          <input id="df-em" v-model.trim="form.email" class="df-input" type="email" autocomplete="email" placeholder="maria.schmidt@firma.de" />
        </div>
        <div class="df-field">
          <label for="df-ph">Telefon <span class="df-opt">optional</span></label>
          <input id="df-ph" v-model.trim="form.phone" class="df-input" type="tel" autocomplete="tel" placeholder="+49 …" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-[14px] mt-[14px] max-[560px]:grid-cols-1">
        <!-- Termine gibt es nur montags und freitags – der Kalender lässt
             deshalb nichts anderes zu. -->
        <div ref="dateField" class="df-field relative">
          <label id="df-dt-label">Wunschtermin <span class="df-opt">nur Mo &amp; Fr</span></label>
          <button
            type="button" class="df-input df-date-trigger" :class="{ 'df-date-placeholder': !form.date }"
            aria-haspopup="true" :aria-expanded="pickerOpen ? 'true' : 'false'" aria-labelledby="df-dt-label"
            @click="togglePicker"
          >
            {{ formattedDate || 'Datum wählen' }}
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" class="shrink-0 text-muted"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/></svg>
          </button>

          <div v-if="pickerOpen" class="df-datepicker">
            <div class="df-dp-head">
              <button type="button" class="df-dp-nav" :disabled="isPrevMonthDisabled" aria-label="Vorheriger Monat" @click="prevMonth">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
              </button>
              <span class="df-dp-month">{{ pickerMonthLabel }}</span>
              <button type="button" class="df-dp-nav" aria-label="Nächster Monat" @click="nextMonth">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
            <div class="df-dp-weekdays">
              <span v-for="wd in weekdayLabels" :key="wd">{{ wd }}</span>
            </div>
            <div class="df-dp-grid">
              <button
                v-for="day in pickerDays" :key="day.iso" type="button" class="df-dp-day"
                :class="{ 'df-dp-day-muted': !day.isCurrentMonth, 'df-dp-day-unavailable': day.isCurrentMonth && day.disabled, 'df-dp-day-selected': day.iso === form.date, 'df-dp-day-today': day.isToday }"
                :disabled="day.disabled" :aria-label="day.iso"
                @click="selectDay(day)"
              >{{ day.label }}</button>
            </div>
            <p class="df-dp-legend">Verfügbar: montags &amp; freitags</p>
          </div>
        </div>

        <div class="df-field">
          <label for="df-sl">Bevorzugte Zeit</label>
          <div class="relative">
            <select id="df-sl" v-model="form.slot" class="df-input df-select">
              <option value="Vormittag (10–12 Uhr)">Vormittag (10–12 Uhr)</option>
              <option value="Nachmittag (14–17 Uhr)">Nachmittag (14–17 Uhr)</option>
            </select>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" class="absolute right-[13px] top-1/2 -translate-y-1/2 pointer-events-none text-muted"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
          </div>
        </div>
      </div>

      <div class="df-field mt-[14px]">
        <label for="df-msg">Nachricht <span class="df-opt">optional</span></label>
        <textarea id="df-msg" v-model.trim="form.message" class="df-input df-textarea" rows="3" placeholder="Worauf sollen wir besonders eingehen?"></textarea>
      </div>

      <p v-if="error" class="mt-[14px] text-[.82rem] text-[#dc2626] leading-[1.5]" role="alert">
        Ihre Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es erneut oder
        schreiben Sie uns direkt an
        <a class="underline" href="mailto:christopher.odenkirchen@googlemail.com">christopher.odenkirchen@googlemail.com</a>.
      </p>

      <button type="submit" class="df-submit mt-5" :disabled="!formValid || sending">
        <span v-if="sending" class="df-spin" aria-hidden="true"></span>
        <span v-else>Termin anfragen →</span>
      </button>

      <p class="mt-3 text-[.78rem] text-muted leading-[1.5]">
        Mit dem Absenden stimmen Sie unserer
        <router-link to="/privacy" class="text-blue hover:text-blue-hover">Datenschutzerklärung</router-link> zu.
      </p>
    </form>

    <div v-else class="text-center py-6">
      <span class="w-[54px] h-[54px] mx-auto rounded-full bg-green/[0.12] text-green flex items-center justify-center">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
      </span>
      <h2 class="text-[1.18rem] font-bold text-ink mt-4">Vielen Dank{{ form.firstName ? ', ' + form.firstName : '' }}!</h2>
      <p class="text-[.92rem] text-body mt-2 max-w-[380px] mx-auto leading-[1.6]">
        Ihre Anfrage ist eingegangen. Wir bestätigen Ihren Termin in Kürze per E-Mail.
      </p>
      <router-link to="/" class="inline-flex items-center gap-[7px] mt-6 text-[.92rem] font-semibold text-blue hover:text-blue-hover max-[880px]:py-[9px]">
        Zurück zur Startseite
      </router-link>
    </div>
  </div>
</template>

<script>
// ENTWURFSFASSUNG: dasselbe Formular wie im bisherigen Demo-Modal, nur als
// Seiteninhalt statt als Overlay. Felder, Mo/Fr-Regel und Endpunkt sind
// unverändert – die geteilte DemoModal.vue bleibt für die Live-Seite bestehen.
const API_BASE = process.env.VUE_APP_API_URL || 'https://matchmaker-api-l835.onrender.com'

const emptyForm = () => ({
  firstName: '', lastName: '', company: '', email: '',
  phone: '', date: '', slot: 'Vormittag (10–12 Uhr)', message: ''
})

const WEEKDAY_LABELS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So']

export default {
  name: 'DemoForm',
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
  beforeUnmount() {
    document.removeEventListener('click', this.onDocClick, true)
  },
  methods: {
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
        this.$nextTick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))
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
.df-field label { display: block; font-size: .82rem; font-weight: 600; color: #0f172a; margin-bottom: 6px; }
.df-opt { font-weight: 500; color: #7c8aa0; }
.df-input {
  width: 100%; height: 44px; padding: 0 13px; border: 1px solid #e7ebf1; border-radius: 7px;
  background: #fff; font: inherit; font-size: .92rem; color: #0f172a; transition: border-color .15s, box-shadow .15s;
}
.df-input::placeholder { color: #a3aec0; }
.df-input:focus { outline: none; border-color: #2976d6; box-shadow: 0 0 0 3px rgba(41, 118, 214, .13); }
.df-select { appearance: none; padding-right: 36px; cursor: pointer; }
.df-textarea { height: auto; padding: 11px 13px; line-height: 1.55; resize: vertical; }
.df-date-trigger { display: flex; align-items: center; justify-content: space-between; gap: 8px; text-align: left; cursor: pointer; }
.df-date-placeholder { color: #a3aec0; }

/* Kalender */
.df-datepicker {
  position: absolute; z-index: 20; top: calc(100% + 6px); left: 0; width: 288px; max-width: 100%;
  background: #fff; border: 1px solid #e7ebf1; border-radius: 9px; padding: 12px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, .16);
}
.df-dp-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 9px; }
.df-dp-month { font-size: .88rem; font-weight: 700; color: #0f172a; }
.df-dp-nav {
  width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;
  border: 1px solid #e7ebf1; border-radius: 5px; background: #fff; color: #475569; cursor: pointer;
}
.df-dp-nav:disabled { opacity: .4; cursor: not-allowed; }
.df-dp-weekdays, .df-dp-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
.df-dp-weekdays span { text-align: center; font-size: .64rem; font-weight: 700; color: #7c8aa0; padding-bottom: 4px; }
.df-dp-day {
  height: 32px; border: none; border-radius: 5px; background: transparent;
  font: inherit; font-size: .8rem; color: #0f172a; cursor: pointer;
}
.df-dp-day:hover:not(:disabled) { background: #eaf2fc; }
.df-dp-day-muted { color: transparent; pointer-events: none; }
.df-dp-day-unavailable { color: #cbd5e1; cursor: not-allowed; }
.df-dp-day-today { box-shadow: inset 0 0 0 1px #cbd5e1; }
.df-dp-day-selected { background: #2976d6; color: #fff; }
.df-dp-day-selected:hover { background: #2065bd; }
.df-dp-legend { margin-top: 8px; font-size: .72rem; color: #7c8aa0; text-align: center; }

/* Absenden */
.df-submit {
  width: 100%; height: 48px; display: inline-flex; align-items: center; justify-content: center;
  border: none; border-radius: 7px; background: #2976d6; color: #fff;
  font: inherit; font-size: .95rem; font-weight: 700; cursor: pointer; transition: background .18s;
}
.df-submit:hover:not(:disabled) { background: #2065bd; }
.df-submit:disabled { opacity: .5; cursor: not-allowed; }
.df-spin {
  width: 17px; height: 17px; border: 2px solid rgba(255, 255, 255, .35);
  border-top-color: #fff; border-radius: 50%; animation: df-rot .7s linear infinite;
}
@keyframes df-rot { to { transform: rotate(360deg); } }
</style>
