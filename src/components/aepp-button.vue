<template>
  <button class="aepp-button" :class="[{ extend }]">
    <slot/>
  </button>
</template>
<script>
export default {
  name: 'aepp-button',
  props: {
    /**
     * Extend the button to full width
     */
    extend: Boolean
  }
}
</script>
<style lang="scss" scoped>
.aepp-button {
  @apply rounded;
  @apply pl-4;
  @apply pr-4;

  height: 55px;
  background: #191A21;
  color: #D3DCE6;
  transition: all 0.2s;

  &:hover,
  &:focus {
    background: #282A36;
  }
}

.aepp-button.extend {
  @apply flex-grow;
  @apply flex-shrink;
  @apply flex-auto;

  width: 100%;
}
</style>
