<template>
  <nav class="aepp-nav">
    <slot/>
  </nav>
</template>
<script>
export default {
  name: 'aepp-nav'
}
</script>
<style lang="scss" scoped>
.aepp-nav {
  @apply flex;
  @apply flex-col;
  @apply justify-between;
  @apply flex-no-grow;
  @apply flex-shrink;

  flex: 100%;
  background: #343746;
  border-right: 1px solid #191A21;
  width: 73px;
}
</style>
