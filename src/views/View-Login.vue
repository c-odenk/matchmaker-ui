<template>
  <div class="login-view">
    
    <main class="login-content">
      <Login />
    </main>
  </div>
</template>

<script>
import Login from '@/components/login/Login-Form.vue'

export default {
  name: 'ViewLogin',
  components: {
    Login,
  }
}
</script>

<style scoped>
.login-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.login-content {
  flex: 1;
}
</style>
