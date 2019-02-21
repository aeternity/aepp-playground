<template>
  <router-link class="aepp-link" v-bind="$attrs">
    <slot />
  </router-link>
</template>
<script>
/**
 * TODO: Complete aepp-link with link styles
 */
export default {
  name: 'aepp-link',
  inheritAttrs: false
}
</script>
<style lang="scss" scoped>
.aepp-link {}
</style>
