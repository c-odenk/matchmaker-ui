<template>
  <LandingV5 />
</template>

<script>
// Aktive Landingpage: V5 (originalgetreuer Redesign-Entwurf).
// Die früheren Versionen (V1–V4) bleiben unter src/components/landing/ erhalten
// und können bei Bedarf wieder eingebunden werden.
import LandingV5 from '@/components/landing/V5/Landing-V5.vue'

export default {
  name: 'ViewLanding',
  components: { LandingV5 }
}
</script>
