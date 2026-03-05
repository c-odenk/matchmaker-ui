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
          <pattern id="login-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.6"/>
          </pattern>
          <radialGradient id="login-fade" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
            <stop offset="20%" stop-color="white" stop-opacity="1"/>
            <stop offset="100%" stop-color="white" stop-opacity="0"/>
          </radialGradient>
          <mask id="login-mask">
            <rect width="100%" height="100%" fill="url(#login-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#login-grid)" mask="url(#login-mask)" opacity="0.25" />
      </svg>
    </div>

    <!-- Zurück zur Startseite -->
    <div class="relative z-10 w-full max-w-md mb-4">
      <router-link to="/" class="back-link inline-flex items-center gap-2 text-p-small-sm md:text-p-small-md transition-colors duration-200 text-white">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
        </svg>
        Zurück zur Startseite
      </router-link>
    </div>

    <!-- Login Card -->
    <div class="login-card relative z-10 w-full max-w-md">
      <div class="rounded-2xl bg-white" style="box-shadow: 0 32px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2);">

        <div class="px-6 sm:px-8 pt-8 pb-8">

          <!-- Logo -->
          <div class="flex justify-center mb-8">
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
          <div class="mb-8 text-center">
            <h1 class="text-h3-sm md:text-h3-md text-black mb-2">Willkommen zurück</h1>
            <p class="text-p-small-sm md:text-p-small-md text-gray-500">Melden Sie sich mit Ihren Zugangsdaten an.</p>
          </div>

          <!-- Error -->
          <div v-if="errorMessage" class="mb-6 rounded-xl px-4 py-3 flex items-center gap-3" style="background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.25);">
            <svg class="w-4 h-4 shrink-0 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
            </svg>
            <p class="text-p-small-sm text-red-500">{{ errorMessage }}</p>
          </div>

          <div class="flex flex-col gap-5">

            <!-- E-Mail -->
            <div class="flex flex-col gap-2">
              <label for="email" class="text-p-small-sm md:text-p-small-md font-medium text-gray-700">E-Mail-Adresse</label>
              <input
                id="email" v-model="form.email" type="email" placeholder="name@unternehmen.de" autocomplete="email"
                @keyup.enter="handleLogin" @focus="focusedField = 'email'" @blur="focusedField = null"
                class="login-input w-full rounded-xl px-4 py-3 text-p-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                :class="focusedField === 'email' ? 'login-input--focused' : ''"
              />
            </div>

            <!-- Passwort -->
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <label for="password" class="text-p-small-sm md:text-p-small-md font-medium text-gray-700">Passwort</label>
                <a href="#" class="text-p-small-sm text-light-blue link-hover">Passwort vergessen?</a>
              </div>
              <div class="relative">
                <input
                  id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••" autocomplete="current-password"
                  @keyup.enter="handleLogin" @focus="focusedField = 'password'" @blur="focusedField = null"
                  class="login-input w-full rounded-xl px-4 py-3 pr-12 text-p-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                  :class="focusedField === 'password' ? 'login-input--focused' : ''"
                />
                <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200">
                  <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Submit -->
            <button type="button" @click="handleLogin" :disabled="isLoading" class="login-btn w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-p-sm text-white bg-blue transition-all duration-200 mt-1">
              <svg v-if="isLoading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"/>
              </svg>
              {{ isLoading ? 'Anmelden...' : 'Jetzt anmelden' }}
            </button>

          </div>
        </div>

        <!-- Footer -->
        <div class="px-6 sm:px-8 py-5 rounded-b-2xl border-t border-gray-100 bg-gray-50">
          <p class="text-center text-p-small-sm text-gray-400">
            Noch kein Konto?
            <router-link to="/register" class="ml-1 text-blue font-medium footer-link">Jetzt registrieren</router-link>
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      form: { email: '', password: '' },
      focusedField: null,
      showPassword: false,
      isLoading: false,
      errorMessage: ''
    }
  },
  methods: {
    async handleLogin() {
      this.errorMessage = ''
      if (!this.form.email || !this.form.password) {
        this.errorMessage = 'Bitte füllen Sie alle Felder aus.'
        return
      }
      this.isLoading = true
      try {
        await new Promise(resolve => setTimeout(resolve, 1200))
        this.$router.push('/dashboard')
      } catch (error) {
        this.errorMessage = 'E-Mail oder Passwort ist nicht korrekt.'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.login-card { animation: loginFadeUp 0.5s ease both; }
@keyframes loginFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.login-input::placeholder { color: #9ca3af; }
.login-input--focused {
  border-color: #2976d6 !important;
  background-color: #eff6ff !important;
  box-shadow: 0 0 0 3px rgba(41, 118, 214, 0.12);
}
.login-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(23,43,77,0.35); }
.login-btn:active:not(:disabled) { transform: translateY(0); }
.login-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.link-hover:hover { opacity: 0.75; }
.footer-link:hover { opacity: 0.7; }
.back-link:hover { color: rgba(255,255,255,0.85) !important; }
</style>