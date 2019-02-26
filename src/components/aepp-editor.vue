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
      /**
       * Placeholder for the editor instance
       */
      instance: null,

      /**
       * Default Editor configuration
       * that can be overwritten later
       */
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
    options: Object,

    /**
     * The editor content/value
     */
    value: String
  },
  mounted () {
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
        this.options,
        { value: this.value }
      )
    )

    /**
     * Iterates over all on* functions and
     * maps them to Vue Events
     */
    Object.keys(this.instance).forEach((key) => {
      /**
       *  Check for:
       *  - Filter all non event properties or functions
       *  - Check if the returned keys are functions
       */
      if (!key.match(/^on/)) return
      if (typeof this.instance[key] !== 'function') return

      /**
       * Go over all resulted functions and instantiate
       * with a function that emits vue events
       */
      this.instance[key].call(
        this.instance,
        (e) => this.$emit(key, e || null)
      )
    })

    /**
     * Throw an emit event with the Editor
     * instance as an argument
     *
     * @event monacoInit
     */
    this.$emit('init', this.instance)
  },
  watch: {
    /**
     * Watch the property options
     * and see if there's an changes
     * update monaco options
     */
    options: {
      deep: true,
      handler () {
        if (this.instance) {
          this.instance.updateOptions(Object.assign(
            this.defaultOptions,
            this.options
          ))
        }
      }
    },

    /**
     * Watch the value property change
     */
    value (newValue) {
      if (this.instance) {
        if (newValue !== this.instance.getValue()) {
          this.instance.setValue(newValue)
        }
      }
    }
  },
  /**
   * Check if there is an instance of
   * the editor up and running, in case
   * there is destroy the session
   */
  beforeDestroy () {
    this.instance && this.instance.dispose()
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
