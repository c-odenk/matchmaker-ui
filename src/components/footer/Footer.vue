<template>
  <footer class="bg-blue text-gray-100 py-12 md:py-16 mt-auto">
    <div class="mx-auto max-w-container-lg 2xl:max-w-container px-container-h">
      <!-- Footer Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <!-- Brand Section -->
        <div>
          <h3 class="text-h3-sm md:text-h3-md lg:text-h3-lg 2xl:text-h3-2xl text-white mb-4">matchmaker.hr</h3>
          <p class="text-gray-300 leading-relaxed">Ihr Partner für effizientes Talentpool management.</p>
        </div>
        
        <!-- Navigation -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Navigation</h4>
          <nav class="flex flex-col gap-2">
            <router-link to="/" class="text-gray-300 hover:text-white transition-colors duration-150">Start</router-link>
            <router-link to="/services" class="text-gray-300 hover:text-white transition-colors duration-150">Produkt</router-link>
            <router-link to="/services" class="text-gray-300 hover:text-white transition-colors duration-150">Preise</router-link>
            <router-link to="/contact" class="text-gray-300 hover:text-white transition-colors duration-150">Kontakt</router-link>
          </nav>
        </div>
        
        <!-- Legal -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Rechtliches</h4>
          <nav class="flex flex-col gap-2">
            <router-link to="/privacy" class="text-gray-300 hover:text-white transition-colors duration-150">Datenschutz</router-link>
            <router-link to="/imprint" class="text-gray-300 hover:text-white transition-colors duration-150">Impressum</router-link>
            <router-link to="/terms" class="text-gray-300 hover:text-white transition-colors duration-150">AGB</router-link>
          </nav>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Kontakt</h4>
          <div class="flex flex-col gap-2 text-gray-300">
            <p>Email: <a href="mailto:info@matchmaker.hr" class="hover:text-white transition-colors duration-150">info@matchmaker.hr</a></p>
          </div>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 pt-8 text-center">
        <p class="paragraph-sm text-gray-400">&copy; 2026 matchmaker.hr. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>