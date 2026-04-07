<template>
  <div
    class="min-h-[100dvh] grid place-items-center px-container-h py-8 md:py-12 overflow-x-hidden relative"
    style="background: linear-gradient(135deg, #0f1e35 0%, #172b4d 50%, #1a3560 100%);"
  >
    <div class="pointer-events-none absolute rounded-full" style="width: 55%; height: 70%; top: -20%; left: -15%; background: radial-gradient(ellipse, rgba(41,118,214,0.3) 0%, transparent 70%); filter: blur(60px);"></div>
    <div class="pointer-events-none absolute rounded-full" style="width: 45%; height: 55%; bottom: -20%; right: -10%; background: radial-gradient(ellipse, rgba(41,118,214,0.2) 0%, transparent 70%); filter: blur(60px);"></div>
    
    <div class="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
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

    <div class="relative z-10 w-full max-w-md flex flex-col items-center">
      
      <div class="w-full mb-4">
        <router-link to="/" class="back-link inline-flex items-center gap-2 text-p-small-sm md:text-p-small-md transition-colors duration-200 text-white/80 hover:text-white">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Zurück zur Startseite
        </router-link>
      </div>

      <div class="login-card w-full" key="login-card">
        <div class="rounded-2xl bg-white overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)]">

          <div class="px-6 sm:px-8 py-10">

            <div class="flex justify-center mb-8">
              <router-link to="/" class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-dark-blue flex items-center justify-center shadow-md text-white">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <span class="text-black font-bold tracking-tight text-xl">matchmaker<span class="text-dark-blue">.</span>hr</span>
              </router-link>
            </div>

            <div class="mb-8 text-center">
              <h1 class="text-h3-sm md:text-h3-md text-black mb-2 font-bold">Willkommen zurück</h1>
              <p class="text-p-small-sm md:text-p-small-md text-gray-500">Melden Sie sich mit Ihren Zugangsdaten an.</p>
            </div>

            <div v-if="errorMessage" class="mb-6 rounded-xl px-4 py-3 bg-red-50 border border-red-100 flex items-center gap-3">
              <p class="text-p-small-sm text-red-600 font-medium text-center w-full">{{ errorMessage }}</p>
            </div>

            <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
              <div class="flex flex-col gap-1.5">
                <label for="email" class="text-[11px] text-gray-400 uppercase tracking-wider ml-1">E-Mail-Adresse</label>
                <input
                  id="email" v-model="form.email" type="email" placeholder="name@unternehmen.de" required
                  class="login-input"
                />
              </div>

              <div class="flex flex-col gap-1.5">
                <div class="flex items-center justify-between px-1">
                  <label for="password" class="text-[11px] text-gray-400 uppercase tracking-wider">Passwort</label>
                  <a href="#" class="text-[11px] text-dark-blue uppercase tracking-wider hover:opacity-70 transition-opacity">Vergessen?</a>
                </div>
                <div class="relative">
                  <input
                    id="password" v-model="form.password" :type="showPassword ? 'text' : 'password'" placeholder="••••••••" required
                    class="login-input pr-12"
                  />
                  <button type="button" @click="showPassword = !showPassword" class="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg v-if="!showPassword" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"/>
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"/>
                    </svg>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                :disabled="isLoading"
                
                class="login-btn w-full flex items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-p-sm text-white bg-dark-blue transition-all duration-200 mt-2"
              >
                <span>{{ isLoading ? 'Anmelden...' : 'Jetzt anmelden' }}</span>
                <svg v-if="!isLoading" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </button>
            </form>
          </div>

          <div class="px-6 sm:px-8 py-5 rounded-b-2xl border-t border-gray-100 bg-gray-50/50">
            <p class="text-center text-p-small-sm text-gray-400">
              Noch kein Konto?
              <router-link to="/register" class="ml-1 text-dark-blue hover:underline font-bold">Jetzt registrieren</router-link>
            </p>
          </div>

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
        // Simulierte Authentifizierung
        await new Promise(resolve => setTimeout(resolve, 1500))
        this.$router.push('/dashboard') // Weiterleitung nach erfolgreichem Login
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
.login-card {
  animation: loginFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes loginFadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

.login-input {
  width: 100%;
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 14px;
  color: #000;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  outline: none;
  transition: all 0.2s ease;
}

.login-input:focus {
  border-color: #0047FF;
  background-color: #fff;
  box-shadow: 0 0 0 4px rgba(0, 71, 255, 0.1);
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(0, 71, 255, 0.25);
  filter: brightness(1.05);
}

.login-btn:active:not(:disabled) {
  transform: translateY(0);
}

.back-link:hover {
  transform: translateX(-2px);
}
</style>