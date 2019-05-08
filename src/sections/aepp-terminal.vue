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
import { mapState } from 'vuex'

/**
 * Import Modules
 */
import * as fit from 'xterm/lib/addons/fit/fit'

/**
 * Setting up the Addon
 */
Terminal.applyAddon(fit)

/**
 * Exporting Terminal Component
 */
export default {
  name: 'aepp-terminal',
  data: function () {
    return {
      terminal: null,
      defaultOptions: {
        cursorBlink: true,
        disableStdin: true,
        fontSize: 13,
        theme: {
          background: '#191A21'
        }
      }
    }
  },
  computed: {
    ...mapState('terminal', [
      'lines',
      'visible'
    ])
  },
  watch: {
    visible(isVisible) {
      if (isVisible) {
        this.terminal.open(this.$el)

        Object.keys(this.defaultOptions)
              .forEach((key) => this
              .terminal
              .setOption(key, this.defaultOptions[key]))

        this.terminal.fit()
        this.terminal.refresh(0, this.terminal.rows - 1)
        this.terminal.focus()
      } else {
        this.terminal.destroy()
      }
    },
    lines(lines) {
      console.log(lines)
      this.terminal.writeln(lines[lines.length - 1])
      this.terminal.scrollToBottom()
    }
  },
  mounted() {
    /**
     * Spin up a new Instance of the terminal
     * @type {module:xterm.Terminal}
     */
    if (!this.terminal) this.terminal = new Terminal({
      ...this.defaultOptions,
      rows: 10,
      cols: 10
    })

    /**
     * On mounted, open the terminal
     */
    if (this.visible) this.terminal.open(this.$el)

    /**
     * Iterate over all the messages and write a line
     */
    this.lines.forEach((line) => this.terminal.writeln(line))

    // TODO: Holding off writing on console for now.
    //this.terminal.on('key', (key) => {
    //  if (key.charCodeAt(0) === 13)
    //    this.terminal.write('\n')
    //
    //  if (key.charCodeAt(0) === 127)
    //    this.terminal.write('\b \b')
    //
    //  this.terminal.write(key)
    //})
  },
  beforeDestroy() {
    this.terminal.destroy()
  }
}
</script>
<style lang="scss" scoped>
.aepp-terminal {
  @apply m-2;

  height: 369px;
}
</style>
