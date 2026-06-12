<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="fixed inset-0 z-[200] flex items-center justify-center p-4">

      <!-- Backdrop -->
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="handleClose"
      />

      <!-- Modal -->
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        class="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-2xl overflow-hidden"
      >
        <transition name="content-fade" mode="out-in">

          <!-- ERFOLGS-ANSICHT -->
          <div v-if="submitted" key="success">

            <!-- Header -->
            <div class="flex items-start gap-4 px-6 md:px-8 pt-6 md:pt-7 pb-5 border-b border-gray-100">
              <div class="w-9 h-9 rounded-xl bg-dark-blue text-white flex items-center justify-center flex-shrink-0">
                <CalendarDays class="w-4 h-4" :stroke-width="1.75" />
              </div>
              <div class="flex-1 min-w-0">
                <h2 id="demo-modal-title" class="text-h3 text-black leading-snug">Demo vereinbaren</h2>
              </div>
              <button
                @click="handleClose"
                aria-label="Schließen"
                class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Erfolgs-Body -->
            <div class="px-6 md:px-8 py-8 flex flex-col items-center text-center gap-6">
              <div class="w-16 h-16 rounded-full flex items-center justify-center success-circle">
                <svg class="w-8 h-8 text-white success-check" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                </svg>
              </div>

              <div class="flex flex-col gap-2">
                <h3 class="text-h3 text-black">Vielen Dank!</h3>
                <p class="text-p-small text-gray-600 leading-relaxed max-w-xs">
                  Ihre Anfrage ist bei uns eingegangen. Wir bestätigen den Termin in Kürze per E-Mail.
                </p>
              </div>

              <ButtonPrimary @click="handleClose">
                Schließen
              </ButtonPrimary>
            </div>

          </div>

          <!-- FORMULAR-ANSICHT -->
          <div v-else key="form">

            <!-- Header -->
            <div class="flex items-start gap-4 px-6 md:px-8 pt-6 md:pt-7 pb-5 border-b border-gray-100">
              <div class="w-9 h-9 rounded-xl bg-dark-blue text-white flex items-center justify-center flex-shrink-0">
                <CalendarDays class="w-4 h-4" :stroke-width="1.75" />
              </div>
              <div class="flex-1 min-w-0">
                <h2 id="demo-modal-title" class="text-h3 text-black leading-snug">Demo vereinbaren</h2>
                <p class="mt-1 text-p-small text-gray-500">
                  Lassen Sie sich matchmaker.hr in 15 Minuten persönlich zeigen.
                </p>
              </div>
              <button
                @click="handleClose"
                aria-label="Schließen"
                class="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <!-- Form Body -->
            <form class="px-6 md:px-8 py-6 flex flex-col gap-4" @submit.prevent="handleSubmit">

              <!-- Vorname + Name -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex flex-col gap-1.5">
                  <label for="demo-first-name" class="text-[11px] text-gray-400 uppercase tracking-wider ml-1">Vorname</label>
                  <input
                    id="demo-first-name"
                    ref="firstInput"
                    v-model="form.firstName"
                    type="text"
                    autocomplete="given-name"
                    placeholder="Maria"
                    class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-black text-p-small placeholder-gray-400 focus:outline-none focus:border-dark-blue focus:bg-white focus:ring-2 focus:ring-dark-blue/10 transition-all"
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label for="demo-last-name" class="text-[11px] text-gray-400 uppercase tracking-wider ml-1">Name</label>
                  <input
                    id="demo-last-name"
                    v-model="form.lastName"
                    type="text"
                    autocomplete="family-name"
                    placeholder="Schmidt"
                    class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-black text-p-small placeholder-gray-400 focus:outline-none focus:border-dark-blue focus:bg-white focus:ring-2 focus:ring-dark-blue/10 transition-all"
                  />
                </div>
              </div>

              <!-- Firma -->
              <div class="flex flex-col gap-1.5">
                <label for="demo-company" class="text-[11px] text-gray-400 uppercase tracking-wider ml-1">Firma</label>
                <input
                  id="demo-company"
                  v-model="form.company"
                  type="text"
                  autocomplete="organization"
                  placeholder="Muster Personalberatung GmbH"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-black text-p-small placeholder-gray-400 focus:outline-none focus:border-dark-blue focus:bg-white focus:ring-2 focus:ring-dark-blue/10 transition-all"
                />
              </div>

              <!-- E-Mail -->
              <div class="flex flex-col gap-1.5">
                <label for="demo-email" class="text-[11px] text-gray-400 uppercase tracking-wider ml-1">Geschäftliche E-Mail</label>
                <input
                  id="demo-email"
                  v-model="form.email"
                  type="email"
                  autocomplete="email"
                  placeholder="maria.schmidt@firma.de"
                  class="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-black text-p-small placeholder-gray-400 focus:outline-none focus:border-dark-blue focus:bg-white focus:ring-2 focus:ring-dark-blue/10 transition-all"
                />
              </div>

              <!-- Actions -->
              <div class="flex items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  @click="handleClose"
                  class="px-4 py-2 text-p-small font-medium text-gray-500 hover:text-dark-blue transition-colors"
                >
                  Abbrechen
                </button>
                <ButtonPrimary
                  type="submit"
                  :disabled="!formValid"
                  class="disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                >
                  Anfrage senden
                </ButtonPrimary>
              </div>

              <!-- Disclaimer -->
              <p class="text-center text-p-small text-gray-400">
                Mit dem Absenden stimmen Sie unserer
                <router-link to="/privacy" class="underline hover:text-dark-blue transition-colors">Datenschutzerklärung</router-link>
                zu.
              </p>

            </form>
          </div>

        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
import { CalendarDays } from 'lucide-vue-next'
import ButtonPrimary from '@/components/common/ButtonPrimary.vue'

export default {
  name: 'ModalDemo',
  components: { CalendarDays, ButtonPrimary },
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close', 'submit'],
  data() {
    return {
      submitted: false,
      form: {
        firstName: '',
        lastName: '',
        company: '',
        email: ''
      }
    }
  },
  computed: {
    formValid() {
      const { firstName, lastName, company, email } = this.form
      return (
        firstName.trim() !== '' &&
        lastName.trim() !== '' &&
        company.trim() !== '' &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
      )
    }
  },
  watch: {
    isOpen(val) {
      document.body.style.overflow = val ? 'hidden' : ''
      if (val) {
        document.addEventListener('keydown', this.onKeydown)
        this.$nextTick(() => this.$refs.firstInput?.focus())
      } else {
        document.removeEventListener('keydown', this.onKeydown)
        setTimeout(() => {
          if (this.submitted) {
            this.form = { firstName: '', lastName: '', company: '', email: '' }
          }
          this.submitted = false
        }, 300)
      }
    }
  },
  beforeUnmount() {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', this.onKeydown)
  },
  methods: {
    onKeydown(e) {
      if (e.key === 'Escape') this.handleClose()
    },
    handleSubmit() {
      if (!this.formValid) return
      this.$emit('submit', { ...this.form })
      this.submitted = true
    },
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.content-fade-enter-active,
.content-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.content-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.content-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.success-circle {
  @apply bg-dark-blue;
  animation: scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
}

.success-check {
  animation: drawCheck 0.4s ease 0.3s both;
}

@keyframes scaleIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes drawCheck {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
