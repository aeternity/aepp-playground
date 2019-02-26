<template>
  <router-link class="aepp-toolbar-tab" v-bind="$attrs">
    <slot/>
  </router-link>
</template>
<script>
export default {
  name: 'aepp-toolbar-tab',
  inheritAttrs: false
}
</script>
<style lang="scss" scoped>
.aepp-toolbar-tab {
  @apply flex;
  @apply items-center;
  @apply content-center;
  @apply h-full;
  @apply p-5;
  @apply no-underline;

  background: #282A36;
  border-bottom: 2px solid #21222C;
  color: #76818C;
  transition: all 0.2s;

  &:hover,
  &:focus {
    @apply text-white;
    @apply no-underline;
  }

  &:visited {
    color: #76818C;
  }

  /deep/ > .ae-icon {
    @apply mr-2;
  }
}
</style>
