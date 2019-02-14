<template>
  <router-link :to="to" class="aepp-link">
    <slot />
  </router-link>
</template>
<script>
export default {
  name: 'aepp-link',
  props: {
    to: [Object, String]
  }
}
</script>
<style lang="scss" scoped>
.aepp-link {}
</style>
