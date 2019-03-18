<template>
  <div
    class="aepp-terminal"
    ref="terminal"
    @click.prevent="focusOnClick"
  ></div>
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
 * Apply Modules
 */
Terminal.applyAddon(fit)

/**
 * Export Component
 */
export default {
  name: 'aepp-terminal',
  data: function() {
    return { terminal: null }
  },
  methods: {
    focusOnClick() {
      this.terminal.focus()
    }
  },
  mounted() {
    this.terminal = new Terminal()
    this.terminal.open(this.$refs.terminal)
    this.terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
  }
}
</script>
<style lang="scss" scoped>
.aepp-terminal {
  width: 100%;
  height: 100%;
  min-height: 400px;
}
</style>
