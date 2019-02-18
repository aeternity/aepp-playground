<template>
  <div class="aepp-views">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'aepp-views'
}
</script>
<style lang="scss" scoped>
.aepp-views {
  display: flex;
  flex: 1 1 auto;
  justify-content: stretch;
  align-items: stretch;
}
</style>
