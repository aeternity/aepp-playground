<template>
  <div class="aepp-views">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'aepp-views'
}
</script>
<style lang="scss" scoped>
.aepp-views {
  @apply flex;
  @apply flex-col;
  @apply flex-shrink;
  @apply flex-grow;
  @apply flex-auto;
  @apply items-stretch;
  @apply w-full;
}
</style>
