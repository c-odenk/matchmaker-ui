<template>
  <div class="waitlist-view">
    
    <main class="waitlist-content">
      <Waitlist />
    </main>
  </div>
</template>

<script>
import Waitlist from '@/components/login/Waitlist-Form.vue'

export default {
  name: 'ViewWaitlist',
  components: {
    Waitlist,
  }
}
</script>

<style scoped>
.waitlist-view {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.waitlist-content {
  flex: 1;
}
</style>
