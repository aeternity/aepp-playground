<template>
  <!-- Maybe not so good idea to rewrite the root component -->
  <div class="aepp-editor" ref="monaco"></div>
</template>
<script>
export default {
  name: 'aepp-editor',
  data: function () {
    return {
      language: 'javascript',
      theme: 'aeternity-dark'
    }
  },
  props: {
    /**
     * Options property for Monaco Editor
     */
    options: Object
  },
  mounted() {
    this.$editor.create(
      this.$refs.monaco,
      Object.assign(
        this.$data,
        this.options
      )
    )
  }
}
</script>
<style lang="scss" scoped>
.aepp-editor {
  @apply flex-auto;
  @apply flex-no-grow;
  @apply flex-shrink;
  @apply w-full;
  @apply h-full;
  @apply overflow-hidden;
}
</style>
