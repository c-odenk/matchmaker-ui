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
import LandingHero from '@/components/landing/V2/Landing-Hero-V2.vue'
import LandingBenefits from '@/components/landing/V2/Landing-Benefits-V2.vue'
import LandingProduct from '@/components/landing/V2//Landing-Product-V2.vue'
// import LandingWorkflow from '@/components/landing/Landing-Workflow.vue'
import LandingTestimonials from '@/components/landing/V2/Landing-Testimonials-V2.vue'
import LandingCta from '@/components/landing/V2/Landing-CTA-V2.vue'
import LandingPricing from '@/components/landing/V2/Landing-Pricing-V2.vue'
import LandingFaq from '@/components/landing/V2/Landing-FAQ-V2.vue'
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
