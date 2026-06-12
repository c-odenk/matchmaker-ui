<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <main class="flex-1 bg-white">
      <section class="py-12 md:py-16 lg:py-20">
        <div class="mx-auto max-w-container-sm md:max-w-container-md lg:max-w-3xl px-container-h">

          <h1 class="text-h2-sm md:text-h2-md lg:text-h2-lg 2xl:text-h2-2xl text-black leading-tight mb-3">
            {{ title }}
          </h1>
          <p class="text-p-small-sm md:text-p-small-md lg:text-p-small-lg 2xl:text-p-small-2xl text-gray-500 mb-10 md:mb-12">
            Stand: {{ updated }}
          </p>

          <div class="legal-content">
            <slot />
          </div>

        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'LegalPage',
  components: { Header, Footer },
  props: {
    title: {
      type: String,
      required: true
    },
    updated: {
      type: String,
      default: 'Juni 2026'
    }
  }
}
</script>

<style scoped>
.legal-content :slotted(h2) {
  @apply text-h3 text-black mt-10 mb-3;
}

.legal-content :slotted(h3) {
  @apply text-p font-bold text-black mt-6 mb-2;
}

.legal-content :slotted(p) {
  @apply text-p text-black/80 mb-4 leading-relaxed;
}

.legal-content :slotted(ul) {
  @apply text-p text-black/80 mb-4 pl-5 list-disc flex flex-col gap-1.5;
}

.legal-content :slotted(a) {
  @apply text-light-blue hover:underline;
}

.legal-content :slotted(address) {
  @apply text-p text-black/80 not-italic mb-4 leading-relaxed;
}
</style>
