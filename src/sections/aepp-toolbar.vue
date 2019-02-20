<template>
  <div class="aepp-toolbar">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'aepp-toolbar'
}
</script>
<style lang="scss" scoped>
.aepp-toolbar {
  @apply flex;
  @apply flex-no-shrink;

  height: 72px;
  background: #191A21;
}
</style>
