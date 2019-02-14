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
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 420px;
  height: 100%;
  background: #282A36;
}
</style>
