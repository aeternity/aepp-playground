<template>
  <div class="aepp-terminal"></div>
</template>
<script>
/**
 * Import Styles
 */
import 'xterm/src/xterm.css'

/**
 * Import Library
 *
 * @link https://github.com/xtermjs/xterm.js
 */
import { Terminal } from 'xterm'

/**
 * Import Modules
 */
import * as fit from 'xterm/lib/addons/fit/fit'

/**
 * Local Files
 */
import defaultProps from './props'

/**
 * Apply Terminal Addon
 */
Terminal.applyAddon(fit)

/**
 * Export Component
 */
export default {
  name: 'aepp-terminal',
  props: defaultProps,
  data: function() {
    return { $terminal: null, options: {} }
  },
  methods: {
    blur() {
      this.$terminal.blur()
    },
    focus() {
      this.$terminal.focus()
    },
    fit() {
      this.$terminal.fit()
    }
  },
  watch: {
    options: {
      deep: true,
      handler(options) {
        return Object.keys(options).forEach(key => {
          if(this[key] !== options[key])
            this.$emit('update:' + key, options[key])
        })
      }
    },
    cols(columns) {
      this.$terminal.resize(columns, this.rows)
    },
    rows(rows) {
      this.$terminal.resize(this.cols, rows)
    }
  },
  mounted() {
    /**
     * Apply all default props to $data.options
     */
    Object
    .keys(defaultProps)
    .forEach(
      (key) => this.$set(this.options, key, this[key])
    )

    /**
     * Instantiate Terminal
     */
    this.$terminal = new Terminal(this.options)

    /**
     * Open Terminal
     */
    this.$terminal.open(this.$el)

    /**
     * Fit
     */
    this.fit()

    /**
     * Handle Writing
     */
    this.$terminal.write('Hello world!')

    /**
     * Handle Events
     */
    this.$terminal.on('resize', size => {
      if(size.cols !== this.cols) this.$emit('update:cols', size.cols)
      if(size.rows !== this.rows) this.$emit('update:rows', size.rows)
    })
    this.$terminal.on('focus', () => this.$emit('focus'))
    this.$terminal.on('blur', () => this.$emit('blur'))

    /**
     * Watch keys for changes
     */
    Object
    .keys(defaultProps)
    .forEach(
      (key) => this.$watch(key, val => this.options[key] = val)
    )
  },
  beforeDestroy () {
    this.$terminal.selectAll()
    this.$emit('update:buffer', this.$terminal.getSelection().trim())
    this.$terminal.destroy()
  }
}
</script>
<style lang="scss" scoped>
.aepp-terminal {
  @apply flex;
  @apply flex-col;
  @apply flex-1;
  @apply w-full;
  @apply h-full;

  min-height: 400px;
}
</style>
