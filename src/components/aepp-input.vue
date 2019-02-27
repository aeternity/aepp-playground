<template>
  <label class="aepp-input" :for="id">
    <span class="aepp-input-label">
      {{ label }}
    </span>
    <input
      type="text"
      class="aepp-input-element"
      @input="propagateEventValue"
      :value="value"
      :id="id"
      v-bind="$attrs"
    />
  </label>
</template>
<script>
import { mixins } from '@aeternity/aepp-components'

export default {
  name: 'aepp-input',
  inheritAttrs: false,
  mixins: [mixins.events],
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
.aepp-input {
  @apply flex;
  @apply flex-col;
  @apply flex-auto;
  @apply flex-shrink;
  @apply flex-grow;
  @apply w-full;
  @apply rounded;
  @apply p-2;

  height: 55px;
  background: #282A36;
}

.aepp-input-label {
  @apply font-sans;
  @apply leading-tight;
  @apply tracking-wide;
  @apply mb-1;
  @apply cursor-pointer;

  font-size: rem(11px);
  color: rgba($color-white, 0.4);
}

.aepp-input-element {
  @apply flex;
  @apply flex-auto;
  @apply flex-shrink;
  @apply flex-grow;
  @apply font-sans;
  @apply font-normal;
  @apply bg-transparent;
  @apply w-full;

  font-size: rem(15px);
  color: #D3DCE6;

  &[readonly] {
    cursor: not-allowed;
  }
}
</style>
