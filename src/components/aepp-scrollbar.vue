<template>
  <div class="aepp-scrollbar" v-bar="options">
    <div>
      <!-- Your scrollable content -->
      <slot />
    </div>
    <!-- Dragger will be automatically added here -->
  </div>
</template>
<script>
export default {
  name: 'aepp-scrollbar',
  props: {
    /**
     * List of options to configure
     * vue-bar directive
     */
    options: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.aepp-scrollbar {}
</style>
