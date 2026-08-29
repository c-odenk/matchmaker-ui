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

    <div class="relative z-10 w-full max-w-md flex flex-col items-center">
      
      <div class="w-full mb-4">
        <router-link to="/" class="back-link inline-flex items-center gap-2 text-p-small-sm md:text-p-small-md transition-colors duration-200 text-white/80 hover:text-white">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Zurück zur Startseite
        </router-link>
      </div>

      <div class="waitlist-card w-full">
        <div class="rounded-2xl bg-white overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)]">

          <div v-if="submitted" key="success-view" class="px-6 sm:px-10 py-16 flex flex-col items-center text-center gap-6">
            <div class="w-16 h-16 rounded-2xl bg-dark-blue flex items-center justify-center shadow-lg shadow-dark-blue/20 text-white">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-h3-sm md:text-h3-md text-black mb-3 font-bold">Sie stehen auf der Liste!</h2>
              <p class="text-p-small-sm md:text-p-small-md text-gray-500 leading-relaxed">
                Vielen Dank, <strong class="text-black">{{ form.firstName }}</strong>. Wir haben Ihre Anmeldung erhalten und melden uns in Kürze.
              </p>
            </div>
            <router-link to="/" class="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-p-small-sm font-semibold text-white bg-dark-blue hover:shadow-lg transition-all duration-200">
              Zurück zur Startseite
            </router-link>
          </div>

          <div v-else key="form-view" class="px-6 sm:px-8 py-10">
            <div class="flex justify-center mb-8">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-dark-blue flex items-center justify-center shadow-md text-white">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <span class="text-black font-bold tracking-tight text-xl">matchmaker<span class="text-dark-blue">.</span>hr</span>
              </div>
            </div>

            <div class="mb-8 text-center">
              <h1 class="text-h3-sm md:text-h3-md text-black mb-2 font-bold">Jetzt vormerken lassen</h1>
              <p class="text-p-small-sm md:text-p-small-md text-gray-500">Sichern Sie sich frühzeitigen Zugang.</p>
            </div>

            <div v-if="errorMessage" class="mb-5 rounded-xl px-4 py-3 bg-red-50 border border-red-100">
              <p class="text-p-small-sm text-red-600 font-medium text-center">{{ errorMessage }}</p>
            </div>

            <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
              <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col gap-1.5">
                  <label class="text-[11px] text-gray-400 uppercase tracking-wider ml-1">Vorname</label>
                  <input v-model="form.firstName" type="text" placeholder="Max" class="waitlist-input" required />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="text-[11px] text-gray-400 uppercase tracking-wider ml-1">Nachname</label>
                  <input v-model="form.lastName" type="text" placeholder="Mustermann" class="waitlist-input" required />
                </div>
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="text-[11px] text-gray-400 uppercase tracking-wider ml-1">Unternehmen</label>
                <input v-model="form.company" type="text" placeholder="Muster GmbH" class="waitlist-input" required />
              </div>
              <div class="flex flex-col gap-1.5">
                <label class="text-[11px] text-gray-400 uppercase tracking-wider ml-1">E-Mail</label>
                <input v-model="form.email" type="email" placeholder="name@unternehmen.de" class="waitlist-input" required />
              </div>
              <button
                type="submit"
                :disabled="isLoading"
                class="waitlist-btn w-full flex items-center justify-center gap-3 rounded-xl px-6 py-3.5 text-p-sm text-white bg-dark-blue transition-all duration-200 mt-2"
              >
                <span>{{ isLoading ? 'Verarbeitung...' : 'Auf Warteliste eintragen' }}</span>
                <svg v-if="!isLoading" class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                </svg>
              </button>
            </form>
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
      form: { firstName: '', lastName: '', company: '', email: '' },
      isLoading: false,
      submitted: false,
      errorMessage: ''
    }
  },
  methods: {
    async handleSubmit() {
      this.errorMessage = ''

      if (!this.form.firstName || !this.form.lastName || !this.form.company || !this.form.email) {
        this.errorMessage = 'Bitte alle Felder ausfüllen.'
        return
      }

      this.isLoading = true

      try {
        const response = await fetch(`${process.env.VUE_APP_API_BASE_URL}/waitlist`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            vorname: this.form.firstName,
            nachname: this.form.lastName,
            unternehmen: this.form.company,
            email: this.form.email,
          }),
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Ein Fehler ist aufgetreten.')
        }

        this.submitted = true

      } catch (e) {
        this.errorMessage = e.message || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.'
      } finally {
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
.waitlist-card { animation: waitlistFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
@keyframes waitlistFadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
.waitlist-input { width: 100%; border-radius: 8px; padding: 10px 14px; font-size: 14px; color: #000; background-color: #f9fafb; border: 1px solid #e5e7eb; outline: none; transition: all 0.2s ease; }
.waitlist-input:focus { border-color: #0047FF; background-color: #fff; box-shadow: 0 0 0 4px rgba(0, 71, 255, 0.1); }
.waitlist-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(0, 71, 255, 0.25); filter: brightness(1.05); }
.waitlist-btn:active:not(:disabled) { transform: translateY(0); }
</style>