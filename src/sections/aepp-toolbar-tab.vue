<template>
  <router-link :to="to" class="aepp-toolbar-tab">
    <slot />
  </router-link>
</template>
<script>
export default {
  name: 'aepp-toolbar-tab',
  props: {
    to: {
      type: [String, Object],
      default: '/'
    }
  }
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

  &:hover,
  &:focus {
    @apply text-white;
    @apply no-underline;
  }

  &:visited {
    color: #76818C;
  }
}
</style>
