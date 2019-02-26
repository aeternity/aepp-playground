<template>
  <label class="aepp-select" :for="id">
    <span class="aepp-select-label">{{ label }}</span>
    <select class="aepp-select-element" :id="id">
      <slot/>
    </select>
  </label>
</template>
<script>
/**
 * TODO: Finish up feature where v-model works for select item
 */
export default {
  name: 'aepp-select',
  props: {
    /**
     * Component Label
     */
    label: {
      type: String,
      required: true
    },

    /**
     * Component Value
     */
    value: null
  },
  computed: {
    /**
     * Converts the 'label' property
     * to kebab-case to be used as an
     * id for select
     * @return {string}
     */
    id: function () {
      return this
      .label
      .replace(/\s+/g, '-')
      .toLowerCase()
    }
  }
}
</script>
<style lang="scss" scoped>
.aepp-select {
  @apply flex;
  @apply flex-col;
  @apply flex-auto;
  @apply flex-shrink;
  @apply flex-grow;
  @apply w-full;
  @apply rounded;
  @apply p-2;

  height: 55px;
  background-repeat: no-repeat;
  background-color: #282A36;
  background-image: url('../assets/icons/select.svg');
  background-size: 32px;
  background-position: right 23px center;

}

.aepp-select-label {
  @aplpy font-sans;
  @apply leading-tight;
  @apply tracking-wide;
  @apply mb-1;

  font-size: rem(11px);
  color: rgba($color-white, 0.4);
}

.aepp-select-element {
  @apply flex;
  @apply flex-auto;
  @apply flex-shrink;
  @apply flex-grow;
  @apply font-sans;
  @apply font-normal;
  @apply bg-transparent;
  @apply cursor-pointer;
  @apply appearance-none;
  @apply w-full;

  font-size: rem(15px);
  color: #D3DCE6;
}
</style>
