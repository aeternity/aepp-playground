<template>
  <label class="aepp-textarea" :for="id">
    <span class="aepp-textarea-label">
      {{ label }}
    </span>
    <textarea
      type="text"
      class="aepp-textarea-element"
      @input="propagateEventValue"
      :value="value"
      :id="id"
      v-bind="$attrs"
    ></textarea>
  </label>
</template>
<script>
import { mixins } from '@aeternity/aepp-components'

export default {
  name: 'aepp-textarea',
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
.aepp-textarea {
  @apply flex;
  @apply flex-col;
  @apply flex-auto;
  @apply flex-shrink;
  @apply flex-grow;
  @apply w-full;
  @apply rounded;
  @apply p-2;

  min-height: 120px;
  height: auto;
  background: #282A36;
}

.aepp-textarea-label {
  @aplpy font-sans;
  @apply leading-tight;
  @apply tracking-wide;
  @apply mb-1;

  font-size: rem(11px);
  color: rgba($color-white, 0.4);
}

.aepp-textarea-element {
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
}
</style>
