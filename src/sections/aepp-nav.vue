<template>
  <nav class="aepp-nav">
    <slot />
  </nav>
</template>
<script>
export default {
  name: 'aepp-nav',
}
</script>
<style lang="scss" scoped>
.aepp-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #343746;
  border-right: 1px solid #191A21;
  width: 73px;
}
</style>
