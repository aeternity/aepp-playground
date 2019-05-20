<template>
  <div :id="id" class="aepp-collapse" :class="[{ visible }]">
    <div class="aepp-collapse-bar" @click="toggle">
      <ae-icon name="left-more"/>
      <slot name="bar"/>
    </div>
    <div class="aepp-collapse-container">
      <slot/>
    </div>
  </div>
</template>
<script>
import AeIcon from '@aeternity/aepp-components-3/dist/ae-icon'

export default {
  name: 'aepp-collapse',
  components: {
    AeIcon
  },
  data: function () {
    return { visible: false }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    id() {
      return this
      .name
      .replace(/\s+/g, '-')
      .toLowerCase()
    }
  },
  methods: {
    toggle() {
      const toggleVisibility = !this.visible
      this.visible = toggleVisibility
      this.$emit('toggle', {
        name: this.name,
        visible: toggleVisibility
      })
    }
  },
  watch: {
    open() {
      this.visible = this.open
    }
  },
  mounted() {
    this.$emit('init', {
      name: this.name,
      visible: this.visible
    })
  }
}
</script>
<style lang="scss" scoped>
.aepp-collapse {
  @apply flex;
  @apply flex-col;

  &.visible > .aepp-collapse-container {
    @apply flex;
    @apply visible;
  }
  &.visible .aepp-collapse-bar > .ae-icon {
    transform: rotate(90deg);
  }
}

.aepp-collapse-bar {
  @apply flex;
  @apply flex-no-grow;
  @apply flex-no-shrink;
  @apply items-center;
  @apply w-full;
  @apply font-sans;
  @apply text-neutral-positive-2;
  @apply pl-3;
  @apply pr-3;
  @apply cursor-pointer;
  @apply uppercase;
  @apply select-none;

  font-size: rem(10px);
  height: 42px;
  background: #343746;
  border-top: 1px;
  border-style: solid;
  border-color: #191A21;

  > .ae-icon {
    @apply mr-1;
  }
}

.aepp-collapse-container {
  @apply hidden;
  @apply invisible;

  @apply flex-col;
  @apply flex-auto;
  @apply flex-shrink;
  @apply flex-grow;
  @apply w-full;
  @apply overflow-x-hidden;
  @apply overflow-y-auto;
}
</style>
