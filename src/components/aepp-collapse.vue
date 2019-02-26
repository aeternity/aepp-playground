<template>
  <div class="aepp-collapse" :class="[{ opened }]">
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
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'aepp-collapse',
  data: function () {
    return { opened: false }
  },
  components: {
    AeIcon
  },
  methods: {
    toggle () {
      this.opened = !this.opened
    }
  }
}
</script>
<style lang="scss" scoped>
.aepp-collapse {
  @apply flex;
  @apply flex-col;
}

.aepp-collapse.opened > .aepp-collapse-container {
  @apply flex;
  @apply visible;
}

.aepp-collapse-bar {
  @apply flex;
  @apply items-center;
  @apply w-full;
  @apply font-sans;
  @apply pl-3;
  @apply pr-3;
  @apply cursor-pointer;
  @apply uppercase;

  color: #EDF3F7;
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