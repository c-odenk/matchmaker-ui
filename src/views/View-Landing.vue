<template>
  <div class="landing-view">
    <Header />
    
    <main class="landing-content">
      <LandingHero />
      <LandingBenefits />
      <LandingProduct />
      <LandingStats />
      <LandingTestimonials />
      <LandingPricing />
      <LandingCta />
      <LandingFaq />
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
// Hero: neue Version (V5). Zum Zurückwechseln zur alten Version diese Zeile auskommentieren
// und stattdessen die V4-Zeile darunter aktivieren.
import LandingHero from '@/components/landing/V4/Landing-Hero-V5.vue'
// import LandingHero from '@/components/landing/V4/Landing-Hero-V4.vue'
import LandingBenefits from '@/components/landing/V4/Landing-Benefits-V4.vue'
import LandingProduct from '@/components/landing/V4/Landing-Product-V4.vue'
import LandingStats from '@/components/landing/V4/Landing-Stats-V4.vue'
import LandingTestimonials from '@/components/landing/V4/Landing-Testimonials-V4.vue'
import LandingCta from '@/components/landing/V4/Landing-CTA-V4.vue'
import LandingPricing from '@/components/landing/V4/Landing-Pricing-V4.vue'
import LandingFaq from '@/components/landing/V1/Landing-FAQ-V1.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'ViewLanding',
  components: {
    Header,
    LandingHero,
    LandingBenefits,
    LandingProduct,
    LandingStats,
    LandingTestimonials,
    LandingCta,
    LandingPricing,
    LandingFaq,
    Footer
  }
}
</script>

<style scoped>
.landing-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.landing-content {
  flex: 1;
}
</style>
