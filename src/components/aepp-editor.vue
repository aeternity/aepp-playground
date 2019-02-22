<template>
  <div class="aepp-editor">
    <div class="aepp-editor-instance" ref="monaco"></div>
  </div>
</template>
<script>
export default {
  name: 'aepp-editor',
  data: function () {
    return {
      instance: null,
      defaultOptions: {
        language: 'javascript',
        theme: 'aeternity-dark',
        automaticLayout: true
      }
    }
  },
  props: {
    /**
     * Options property for Monaco Editor
     */
    options: Object
  },
  mounted() {
    /**
     * Pass the instance to a $data Property
     * so we can make use of it later on.
     */
    this.instance = this.$editor.create(
      /**
       * HTMLReference to the
       * `div` element to bootstrap
       * monaco editor
       */
      this.$refs.monaco,

      /**
       * Overwrite the defaultOptions from
       * the property passed down to the component
       */
      Object.assign(
        this.defaultOptions,
        this.options
      )
    )
  }
}
</script>
<style lang="scss" scoped>
.aepp-editor {
  @apply flex;
  @apply flex-auto;
  @apply flex-grow;
  @apply flex-shrink;
  @apply w-full;
  @apply h-full;
  @apply overflow-hidden;
}

.aepp-editor-instance {
  @apply self-stretch;
  @apply w-full;
  @apply h-full;
}
</style>
