<template>
  <router-link class="aepp-button-link" :class="[{ extend }]" v-bind="$attrs">
    <slot/>
  </router-link>
</template>
<script>
export default {
  name: 'aepp-button',
  inheritAttrs: false,
  props: {
    /**
     * Extend the button link to full width
     */
    extend: Boolean
  }
}
</script>
<style lang="scss" scoped>
.aepp-button-link {
  @apply inline-flex;
  @apply items-center;
  @apply justify-center;
  @apply rounded;
  @apply pl-4;
  @apply pr-4;
  @apply no-underline;

  height: 55px;
  background: #191A21;
  color: #D3DCE6;
  transition: all 0.2s;

  &:hover,
  &:focus {
    @apply no-underline;

    background: #282A36;
  }

  &:visited {
    color: #D3DCE6;
  }
}

.aepp-button-link.extend {
  @apply flex-grow;
  @apply flex-shrink;
  @apply flex-auto;
}
</style>
