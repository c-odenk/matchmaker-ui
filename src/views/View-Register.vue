<template>
  <div class="register-view">
    
    <main class="register-content">
      <Register />
    </main>
  </div>
</template>

<script>
import Register from '@/components/login/Register-Form.vue'

export default {
  name: 'ViewRegister',
  components: {
    Register,
  }
}
</script>

<style scoped>
.register-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.register-content {
  flex: 1;
}
</style>
