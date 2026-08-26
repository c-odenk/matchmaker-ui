<template>
  <div class="font-sans text-ink antialiased leading-[1.6] bg-white">
    <TheHeaderDraft />
    <main>
      <ContactHeadSection />
    </main>
    <TheFooter />
  </div>
</template>

<script>
// Kontaktseite. Sie ersetzt das frühere Demo-Modal:
// alle „Demo vereinbaren"-Buttons führen hierher.
import TheHeaderDraft from '@/components/landing-draft/sections/TheHeaderDraft.vue'
import TheFooter from '@/components/landing/sections/TheFooter.vue'
import ContactHeadSection from '@/components/landing-draft/contact/ContactHeadSection.vue'

import { setupScrollReveal } from '@/composables/useScrollRevealDraft'

export default {
  name: 'ContactPageDraft',
  components: { TheHeaderDraft, TheFooter, ContactHeadSection },
  mounted() {
    this._cleanupReveal = setupScrollReveal(this.$el)
  },
  beforeUnmount() {
    if (this._cleanupReveal) this._cleanupReveal()
  }
}
</script>
