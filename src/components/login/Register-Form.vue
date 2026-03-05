<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center px-container-h py-12"
    style="background: linear-gradient(135deg, #0f1e35 0%, #172b4d 50%, #1a3560 100%);"
  >
    <div class="pointer-events-none fixed rounded-full" style="width: 55%; height: 70%; top: -20%; left: -15%; background: radial-gradient(ellipse, rgba(41,118,214,0.3) 0%, transparent 70%); filter: blur(60px);"></div>
    <div class="pointer-events-none fixed rounded-full" style="width: 45%; height: 55%; bottom: -20%; right: -10%; background: radial-gradient(ellipse, rgba(41,118,214,0.2) 0%, transparent 70%); filter: blur(60px);"></div>
    <div class="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="register-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.6"/>
          </pattern>
          <radialGradient id="register-fade" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
            <stop offset="20%" stop-color="white" stop-opacity="1"/>
            <stop offset="100%" stop-color="white" stop-opacity="0"/>
          </radialGradient>
          <mask id="register-mask">
            <rect width="100%" height="100%" fill="url(#register-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#register-grid)" mask="url(#register-mask)" opacity="0.25" />
      </svg>
    </div>

    <!-- Zurück zur Startseite -->
    <div class="relative z-10 w-full max-w-lg mb-4">
      <router-link to="/" class="back-link inline-flex items-center gap-2 text-p-small-sm md:text-p-small-md transition-colors duration-200 text-white">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
        </svg>
        Zurück zur Startseite
      </router-link>
    </div>

    <!-- Register Card: max-w-lg für mehr Breite im 2-Spalten-Layout -->
    <div class="register-card relative z-10 w-full max-w-lg">
      <div class="rounded-2xl bg-white" style="box-shadow: 0 32px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2);">

        <div class="px-6 sm:px-8 pt-8 pb-8">

          <!-- Logo -->
          <div class="flex justify-center mb-6">
            <router-link to="/" class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-blue flex items-center justify-center shadow-sm">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"/>
                </svg>
              </div>
              <span class="text-black font-semibold tracking-tight text-xl">matchmaker<span class="text-light-blue">.</span>hr</span>
            </router-link>
          </div>

          <!-- Heading -->
          <div class="mb-6 text-center">
            <h1 class="text-h3-sm md:text-h3-md text-black mb-2">Konto erstellen</h1>
            <p class="text-p-small-sm md:text-p-small-md text-gray-500">Registrieren Sie sich und starten Sie noch heute.</p>
          </div>

          <!-- Error -->
          <div v-if="errorMessage" class="mb-5 rounded-xl px-4 py-3 flex items-center gap-3" style="background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.25);">
            <svg class="w-4 h-4 shrink-0 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
            </svg>
            <p class="text-p-small-sm text-red-500">{{ errorMessage }}</p>
          </div>

          <!-- Success -->
          <div v-if="successMessage" class="mb-5 rounded-xl px-4 py-3 flex items-center gap-3" style="background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.25);">
            <svg class="w-4 h-4 shrink-0 text-green-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-p-small-sm text-green-600">{{ successMessage }}</p>
          </div>

          <!-- Form: 2-Spalten-Grid -->
          <div class="grid grid-cols-2 gap-4">

            <!-- Vorname -->
            <div class="flex flex-col gap-1.5">
              <label for="firstName" class="text-p-small-sm font-medium text-gray-700">Vorname</label>
              <input
                id="firstName" v-model="form.firstName" type="text" placeholder="Max"
                @focus="focusedField = 'firstName'" @blur="focusedField = null"
                class="register-input w-full rounded-xl px-3 py-2.5 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                :class="focusedField === 'firstName' ? 'register-input--focused' : ''"
              />
            </div>

            <!-- Nachname -->
            <div class="flex flex-col gap-1.5">
              <label for="lastName" class="text-p-small-sm font-medium text-gray-700">Nachname</label>
              <input
                id="lastName" v-model="form.lastName" type="text" placeholder="Mustermann"
                @focus="focusedField = 'lastName'" @blur="focusedField = null"
                class="register-input w-full rounded-xl px-3 py-2.5 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                :class="focusedField === 'lastName' ? 'register-input--focused' : ''"
              />
            </div>

            <!-- Firmenname -->
            <div class="flex flex-col gap-1.5">
              <label for="company" class="text-p-small-sm font-medium text-gray-700">Firmenname</label>
              <input
                id="company" v-model="form.company" type="text" placeholder="Muster GmbH"
                @focus="focusedField = 'company'" @blur="focusedField = null"
                class="register-input w-full rounded-xl px-3 py-2.5 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                :class="focusedField === 'company' ? 'register-input--focused' : ''"
              />
            </div>

            <!-- Telefonnummer -->
            <div class="flex flex-col gap-1.5">
              <label for="phone" class="text-p-small-sm font-medium text-gray-700">Telefonnummer</label>
              <input
                id="phone" v-model="form.phone" type="tel" placeholder="+49 151 00000000"
                @focus="focusedField = 'phone'" @blur="focusedField = null"
                class="register-input w-full rounded-xl px-3 py-2.5 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                :class="focusedField === 'phone' ? 'register-input--focused' : ''"
              />
            </div>

            <!-- E-Mail (volle Breite) -->
            <div class="col-span-2 flex flex-col gap-1.5">
              <label for="email" class="text-p-small-sm font-medium text-gray-700">E-Mail-Adresse</label>
              <input
                id="email" v-model="form.email" type="email" placeholder="name@unternehmen.de" autocomplete="email"
                @focus="focusedField = 'email'" @blur="focusedField = null"
                class="register-input w-full rounded-xl px-3 py-2.5 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                :class="focusedField === 'email' ? 'register-input--focused' : ''"
              />
            </div>

            <!-- Passwort (volle Breite) -->
            <div class="col-span-2 flex flex-col gap-1.5">
              <label for="password" class="text-p-small-sm font-medium text-gray-700">Passwort</label>
              <div class="relative">
                <input
                  id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="Min. 8 Zeichen" autocomplete="new-password"
                  @focus="focusedField = 'password'" @blur="focusedField = null"
                  class="register-input w-full rounded-xl px-3 py-2.5 pr-10 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                  :class="focusedField === 'password' ? 'register-input--focused' : ''"
                />
                <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                  </svg>
                </button>
              </div>
              <!-- Passwort Stärke -->
              <div v-if="form.password" class="flex items-center gap-2 mt-0.5">
                <div class="flex gap-1 flex-1">
                  <div
                    v-for="i in 4" :key="i"
                    class="h-1 flex-1 rounded-full transition-all duration-300"
                    :class="i <= passwordStrength ? strengthColor : 'bg-gray-200'"
                  ></div>
                </div>
                <p class="text-p-small-sm shrink-0" :class="strengthTextColor">{{ strengthLabel }}</p>
              </div>
            </div>

            <!-- Submit (volle Breite) -->
            <div class="col-span-2 mt-1">
              <button type="button" @click="handleRegister" :disabled="isLoading" class="register-btn w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-p-sm text-white bg-blue transition-all duration-200">
                <svg v-if="isLoading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"/>
                </svg>
                {{ isLoading ? 'Konto wird erstellt...' : 'Konto erstellen' }}
              </button>
            </div>

          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 sm:px-8 py-5 rounded-b-2xl border-t border-gray-100 bg-gray-50">
          <p class="text-center text-p-small-sm text-gray-400">
            Bereits registriert?
            <router-link to="/login" class="ml-1 text-blue font-medium footer-link">Jetzt anmelden</router-link>
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        email: '',
        password: ''
      },
      focusedField: null,
      showPassword: false,
      isLoading: false,
      errorMessage: '',
      successMessage: ''
    }
  },
  computed: {
    passwordStrength() {
      const p = this.form.password
      if (!p) return 0
      let score = 0
      if (p.length >= 8) score++
      if (/[A-Z]/.test(p)) score++
      if (/[0-9]/.test(p)) score++
      if (/[^A-Za-z0-9]/.test(p)) score++
      return score
    },
    strengthColor() {
      const colors = ['bg-red-400', 'bg-orange-400', 'bg-yellow-400', 'bg-green-500']
      return colors[this.passwordStrength - 1] || 'bg-gray-200'
    },
    strengthTextColor() {
      const colors = ['text-red-500', 'text-orange-500', 'text-yellow-600', 'text-green-600']
      return colors[this.passwordStrength - 1] || 'text-gray-400'
    },
    strengthLabel() {
      const labels = ['Sehr schwach', 'Schwach', 'Mittel', 'Stark']
      return labels[this.passwordStrength - 1] || ''
    }
  },
  methods: {
    async handleRegister() {
      this.errorMessage = ''
      this.successMessage = ''
      if (!this.form.firstName || !this.form.lastName || !this.form.company || !this.form.phone || !this.form.email || !this.form.password) {
        this.errorMessage = 'Bitte füllen Sie alle Felder aus.'
        return
      }
      if (this.form.password.length < 8) {
        this.errorMessage = 'Das Passwort muss mindestens 8 Zeichen lang sein.'
        return
      }
      this.isLoading = true
      try {
        // Hier API-Call einbauen, z.B.:
        // await authService.register(this.form)
        await new Promise(resolve => setTimeout(resolve, 1200))
        this.successMessage = 'Konto erfolgreich erstellt! Sie werden weitergeleitet...'
        setTimeout(() => this.$router.push('/login'), 2000)
      } catch (error) {
        this.errorMessage = 'Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.register-card { animation: registerFadeUp 0.5s ease both; }
@keyframes registerFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.register-input::placeholder { color: #9ca3af; }
.register-input--focused {
  border-color: #2976d6 !important;
  background-color: #eff6ff !important;
  box-shadow: 0 0 0 3px rgba(41, 118, 214, 0.12);
}
.register-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(23,43,77,0.35); }
.register-btn:active:not(:disabled) { transform: translateY(0); }
.register-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.footer-link:hover { opacity: 0.7; }
.back-link:hover { color: rgba(255,255,255,0.85) !important; }
</style>