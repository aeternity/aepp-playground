<template>
  <div class="aepp-window">
    <div class="aepp-window-container">
      <aepp-iframe/>
    </div>
  </div>
</template>
<script>
import AeppIframe from '../components/aepp-iframe'

export default {
  name: 'aepp-window',
  components: {
    AeppIframe
  }
}
</script>
<style lang="scss" scoped>
.aepp-window {
  @apply flex;
  @apply flex-col;
  @apply self-stretch;
  @apply flex-grow;
  @apply flex-shrink;
  @apply flex-auto;
  @apply w-full;
  @apply h-full;

  background: #282A36;
}

.aepp-window-container {
  @apply flex;
  @apply flex-auto;
  @apply flex-no-grow;
  @apply flex-shrink;
  @apply justify-center;
  @apply items-center;
  @apply w-full;
  @apply h-full;
}
</style>
