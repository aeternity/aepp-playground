<template>
  <div class="aepp-sidebar">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'aepp-sidebar'
}
</script>
<style lang="scss" scoped>
.aepp-sidebar {
  @apply flex;
  @apply flex-col;
  @apply flex-auto;
  @apply flex-no-grow;
  @apply flex-no-shrink;
  @apply h-full;
  @apply overflow-auto;

  background: #282A36;
}
</style>
