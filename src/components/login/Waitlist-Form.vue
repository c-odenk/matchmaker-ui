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
          <pattern id="waitlist-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" stroke-width="0.6"/>
          </pattern>
          <radialGradient id="waitlist-fade" cx="50%" cy="50%" r="55%" fx="50%" fy="50%">
            <stop offset="20%" stop-color="white" stop-opacity="1"/>
            <stop offset="100%" stop-color="white" stop-opacity="0"/>
          </radialGradient>
          <mask id="waitlist-mask">
            <rect width="100%" height="100%" fill="url(#waitlist-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#waitlist-grid)" mask="url(#waitlist-mask)" opacity="0.25" />
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

    <!-- Waitlist Card -->
    <div class="waitlist-card relative z-10 w-full max-w-md">
      <div class="rounded-2xl bg-white" style="box-shadow: 0 32px 80px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2);">

        <!-- Success State -->
        <div v-if="submitted" class="px-6 sm:px-8 py-12 flex flex-col items-center text-center gap-5">
          <div class="w-16 h-16 rounded-2xl bg-blue flex items-center justify-center shadow-sm">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="1.75" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h2 class="text-h3-sm md:text-h3-md text-black mb-2">Sie stehen auf der Liste!</h2>
            <p class="text-p-small-sm md:text-p-small-md text-gray-500">
              Vielen Dank, <strong class="text-black">{{ form.firstName }}</strong>. Wir melden uns, sobald Ihr Zugang bereit ist.
            </p>
          </div>
          <router-link to="/" class="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-p-small-sm font-medium text-white bg-blue back-btn transition-all duration-200">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
            </svg>
            Zurück zur Startseite
          </router-link>
        </div>

        <!-- Form State -->
        <div v-else class="px-6 sm:px-8 pt-8 pb-8">

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
            <h1 class="text-h3-sm md:text-h3-md text-black mb-2">Jetzt vormerken lassen</h1>
            <p class="text-p-small-sm md:text-p-small-md text-gray-500">
              Sichern Sie sich frühzeitigen Zugang zu matchmaker.hr und seien Sie unter den Ersten.
            </p>
          </div>

          <!-- Error -->
          <div v-if="errorMessage" class="mb-5 rounded-xl px-4 py-3 flex items-center gap-3" style="background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.25);">
            <svg class="w-4 h-4 shrink-0 text-red-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/>
            </svg>
            <p class="text-p-small-sm text-red-500">{{ errorMessage }}</p>
          </div>

          <!-- Form -->
          <div class="flex flex-col gap-4">

            <!-- Vor- & Nachname -->
            <div class="grid grid-cols-2 gap-3">
              <div class="flex flex-col gap-1.5">
                <label for="firstName" class="text-p-small-sm font-medium text-gray-700">Vorname</label>
                <input
                  id="firstName" v-model="form.firstName" type="text" placeholder="Max"
                  @focus="focusedField = 'firstName'" @blur="focusedField = null"
                  class="waitlist-input w-full rounded-xl px-3 py-2.5 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                  :class="focusedField === 'firstName' ? 'waitlist-input--focused' : ''"
                />
              </div>
              <div class="flex flex-col gap-1.5">
                <label for="lastName" class="text-p-small-sm font-medium text-gray-700">Nachname</label>
                <input
                  id="lastName" v-model="form.lastName" type="text" placeholder="Mustermann"
                  @focus="focusedField = 'lastName'" @blur="focusedField = null"
                  class="waitlist-input w-full rounded-xl px-3 py-2.5 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                  :class="focusedField === 'lastName' ? 'waitlist-input--focused' : ''"
                />
              </div>
            </div>

            <!-- Unternehmen -->
            <div class="flex flex-col gap-1.5">
              <label for="company" class="text-p-small-sm font-medium text-gray-700">Unternehmen</label>
              <input
                id="company" v-model="form.company" type="text" placeholder="Muster GmbH"
                @focus="focusedField = 'company'" @blur="focusedField = null"
                class="waitlist-input w-full rounded-xl px-3 py-2.5 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                :class="focusedField === 'company' ? 'waitlist-input--focused' : ''"
              />
            </div>

            <!-- E-Mail -->
            <div class="flex flex-col gap-1.5">
              <label for="email" class="text-p-small-sm font-medium text-gray-700">E-Mail-Adresse</label>
              <input
                id="email" v-model="form.email" type="email" placeholder="name@unternehmen.de" autocomplete="email"
                @keyup.enter="handleSubmit"
                @focus="focusedField = 'email'" @blur="focusedField = null"
                class="waitlist-input w-full rounded-xl px-3 py-2.5 text-p-small-sm text-black outline-none transition-all duration-200 bg-gray-50 border border-gray-200"
                :class="focusedField === 'email' ? 'waitlist-input--focused' : ''"
              />
            </div>

            <!-- Submit -->
            <button
              type="button"
              @click="handleSubmit"
              :disabled="isLoading"
              class="waitlist-btn w-full flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-p-sm text-white bg-blue transition-all duration-200 mt-1"
            >
              <svg v-if="isLoading" class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
              </svg>
              {{ isLoading ? 'Wird eingetragen...' : 'Auf Warteliste eintragen' }}
            </button>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaitlistForm',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        company: '',
        email: ''
      },
      focusedField: null,
      isLoading: false,
      errorMessage: '',
      submitted: false
    }
  },
  methods: {
    async handleSubmit() {
      this.errorMessage = ''
      if (!this.form.firstName || !this.form.lastName || !this.form.company || !this.form.email) {
        this.errorMessage = 'Bitte füllen Sie alle Felder aus.'
        return
      }
      this.isLoading = true
      try {
        // Hier API-Call einbauen, z.B.:
        // await waitlistService.join(this.form)
        await new Promise(resolve => setTimeout(resolve, 1200))
        this.submitted = true
      } catch (error) {
        this.errorMessage = 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.waitlist-card { animation: waitlistFadeUp 0.5s ease both; }
@keyframes waitlistFadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.waitlist-input::placeholder { color: #9ca3af; }
.waitlist-input--focused {
  border-color: #2976d6 !important;
  background-color: #eff6ff !important;
  box-shadow: 0 0 0 3px rgba(41, 118, 214, 0.12);
}
.waitlist-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(23,43,77,0.35); }
.waitlist-btn:active:not(:disabled) { transform: translateY(0); }
.waitlist-btn:disabled { opacity: 0.7; cursor: not-allowed; }
.back-btn:hover { opacity: 0.9; transform: translateY(-1px); }
.back-link:hover { color: rgba(255,255,255,0.85) !important; }
</style>