<template>
  <div class="aepp-header">
    <img class="aepp-header-logo" :src="require('../assets/logo.svg')" alt="Aepp Playground">
  </div>
</template>
<script>
export default {
  name: 'aepp-header'
}
</script>
<style lang="scss" scoped>
.aepp-header {
  @apply flex;
  @apply justify-center;
  @apply items-center;
  @apply flex-auto;
  @apply flex-no-grow;
  @apply flex-no-shrink;
  @apply w-full;

  height: 72px;
  background: #191A21;

  > img {
    width: 48px;
  }
}
</style>
