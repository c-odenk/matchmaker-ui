<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="fixed inset-0 z-[200] flex items-center justify-center p-4">
      
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        @click="$emit('close')"
      />

      <!-- Modal -->
      <div class="relative z-10 w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl bg-white">

        <!-- ERFOLGS-ANSICHT -->
        <transition name="content-fade" mode="out-in">
          <div v-if="submitted" key="success" class="flex flex-col rounded-2xl overflow-hidden">

            <!-- Header -->
            <div class="px-8 pt-8 pb-7 rounded-t-2xl" style="background: linear-gradient(135deg, #172b4d 0%, #1e3a5f 100%);">
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-3">
                  <span class="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-[0.7rem] tracking-widest uppercase bg-white/10 text-white border border-white/10">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Produkt-Demo
                  </span>
                  <h2 class="text-h2-sm md:text-h2-md font-bold text-white leading-tight">
                    Demo vereinbaren.
                  </h2>
                  <p class="text-p-small-sm md:text-p-small-md text-white leading-relaxed max-w-md">
                    Lassen Sie sich matchmaker.hr in 15 Minuten zeigen.
                  </p>
                </div>
                <button 
                  @click="handleClose"
                  class="flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Erfolgs-Body -->
            <div class="px-8 py-7 flex flex-col gap-5">
              <div class="flex flex-col items-center text-center gap-6 py-6">
                <!-- Checkmark Animation -->
                <div class="w-16 h-16 rounded-full flex items-center justify-center success-circle">
                  <svg class="w-8 h-8 text-white success-check" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>

                <div class="flex flex-col gap-2">
                  <h3 class="text-h3-sm md:text-h3-md font-bold text-black">Vielen Dank!</h3>
                  <p class="text-p-small-sm md:text-p-small-md text-black leading-relaxed max-w-xs">
                    Ihre Anfrage ist bei uns eingegangen. Wir bestätigen den Termin in Kürze per E-Mail.
                  </p>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex items-center justify-between pt-2">
                <div></div>
                <button
                  @click="handleClose"
                  class="px-7 py-3 bg-dark-blue hover:bg-[#1e3a5f] text-white text-p-small-sm md:text-p-small-md font-semibold rounded-xl transition-all shadow-sm hover:shadow-md"
                >
                  Schließen
                </button>
              </div>

              <!-- Disclaimer -->
              <p class="text-center text-[0.72rem] text-black -mt-1">
                Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
              </p>
            </div>

          </div>

          <!-- FORMULAR-ANSICHT -->
          <div v-else key="form" class="rounded-2xl overflow-hidden">

            <!-- Header -->
            <div class="px-8 pt-8 pb-7 rounded-t-2xl" style="background: linear-gradient(135deg, #172b4d 0%, #1e3a5f 100%);">
              <div class="flex items-start justify-between">
                <div class="flex flex-col gap-3">
                  <span class="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-[0.7rem] tracking-widest uppercase bg-white/10 text-white border border-white/10">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    Produkt-Demo
                  </span>
                  <h2 class="text-h2-sm md:text-h2-md font-bold text-white leading-tight">
                    Demo vereinbaren.
                  </h2>
                  <p class="text-p-small-sm md:text-p-small-md text-white leading-relaxed max-w-md">
                    Lassen Sie sich matchmaker.hr in 15 Minuten zeigen.
                  </p>
                </div>
                <button 
                  @click="$emit('close')"
                  class="flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Form Body -->
            <div class="px-8 py-7 flex flex-col gap-5">

              <!-- Vorname + Name -->
              <div class="grid grid-cols-2 gap-4">
                <div class="flex flex-col gap-1.5">
                  <label class="text-[0.7rem] tracking-widest uppercase text-black font-semibold">Vorname</label>
                  <input
                    v-model="form.firstName"
                    type="text"
                    placeholder="Maria"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-black text-p-small-sm md:text-p-small-md placeholder-gray-300 focus:outline-none focus:border-dark-blue focus:bg-white transition-all"
                  />
                </div>
                <div class="flex flex-col gap-1.5">
                  <label class="text-[0.7rem] tracking-widest uppercase text-black font-semibold">Name</label>
                  <input
                    v-model="form.lastName"
                    type="text"
                    placeholder="Schmidt"
                    class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-black text-p-small-sm md:text-p-small-md placeholder-gray-300 focus:outline-none focus:border-dark-blue focus:bg-white transition-all"
                  />
                </div>
              </div>

              <!-- Firma -->
              <div class="flex flex-col gap-1.5">
                <label class="text-[0.7rem] tracking-widest uppercase text-black font-semibold">Firma</label>
                <input
                  v-model="form.company"
                  type="text"
                  placeholder="Muster Personalberatung GmbH"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-black text-p-small-sm md:text-p-small-md placeholder-gray-300 focus:outline-none focus:border-dark-blue focus:bg-white transition-all"
                />
              </div>

              <!-- E-Mail -->
              <div class="flex flex-col gap-1.5">
                <label class="text-[0.7rem] tracking-widest uppercase text-black font-semibold">E-Mail</label>
                <input
                  v-model="form.email"
                  type="email"
                  placeholder="maria.schmidt@firma.de"
                  class="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-black text-p-small-sm md:text-p-small-md placeholder-gray-300 focus:outline-none focus:border-dark-blue focus:bg-white transition-all"
                />
              </div>

              <!-- Actions -->
              <div class="flex items-center justify-between pt-2">
                <button
                  @click="$emit('close')"
                  class="px-6 py-3 text-p-small-sm md:text-p-small-md font-medium text-black hover:text-dark-blue transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  @click="handleSubmit"
                  class="px-7 py-3 bg-dark-blue hover:bg-[#1e3a5f] text-white text-p-small-sm md:text-p-small-md font-semibold rounded-xl transition-all shadow-sm hover:shadow-md"
                >
                  Anfrage senden
                </button>
              </div>

              <!-- Disclaimer -->
              <p class="text-center text-[0.72rem] text-black -mt-1">
                Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
              </p>

            </div>
          </div>
        </transition>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalDemo',
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
  watch: {
    isOpen(val) {
      document.body.style.overflow = val ? 'hidden' : ''
      if (!val) {
        setTimeout(() => { this.submitted = false }, 300)
      }
    }
  },
  methods: {
    handleSubmit() {
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
  background: #172b4d;
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