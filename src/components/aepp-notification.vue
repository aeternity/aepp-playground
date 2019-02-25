<template>
  <div class="aepp-notification" :class="[{ visible }, { [type]: Boolean(type) }]">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'aepp-notification',
  props: {
    /**
     * Type of notification
     *
     * @enum {String} success|error
     */
    type: String,

    /**
     * Display the notification
     * component on the view
     */
    visible: Boolean
  }
}
</script>
<style lang="scss" scoped>
.aepp-notification {
  @apply absolute;
  @apply pin-t pin-r pin-t;
  @apply flex;
  @apply items-center;
  @apply justify-between;
  @apply font-sans;
  @apply text-white;
  @apply p-3;
  @apply z-10;
  @apply invisible;

  font-size: rem(18px);
  width: 100%;
  height: 71px;
  transition: all 0.2s;
}

.aepp-notification.visible {
  @apply visible;
}

.aepp-notification.success {
  background-color: #14CCB7;
}

.aepp-notification.error {
  @apply bg-red;
}
</style>
