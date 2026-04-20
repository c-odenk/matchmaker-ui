<template>
  <div class="landing-view">
    <Header />
    
    <main class="landing-content">
      <LandingHero />
      <LandingBenefits />
      <LandingProduct />
      <!-- <LandingWorkflow /> -->
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
import LandingHero from '@/components/landing/V5/Landing-Hero-V5.vue'
import LandingBenefits from '@/components/landing/V5/Landing-Benefits-V5.vue'
import LandingProduct from '@/components/landing/V5/Landing-Product-V5.vue'
// import LandingWorkflow from '@/components/landing/Landing-Workflow.vue'
import LandingTestimonials from '@/components/landing/V5/Landing-Testimonials-V5.vue'
import LandingCta from '@/components/landing/V4/Landing-CTA-V4.vue'
import LandingPricing from '@/components/landing/V5/Landing-Pricing-V5.vue'
import LandingFaq from '@/components/landing/V5/Landing-FAQ-V5.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'ViewLanding',
  components: {
    Header,
    LandingHero,
    LandingBenefits,
    LandingProduct,
    // LandingWorkflow,
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
