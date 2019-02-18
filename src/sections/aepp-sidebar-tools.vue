<template>
  <div class="aepp-sidebar-tools">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'aepp-sidebar-tools',
}
</script>
<style lang="scss" scoped>
.aepp-sidebar-tools {
  display: flex;
  flex-shrink: 1;
  align-items: stretch;
  height: 100%;
}
</style>
