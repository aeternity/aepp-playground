/**
 * Importing Global Libraries
 */
import * as monaco from 'monaco-editor'

/**
 * A Vue.js plugin should expose an install method.
 * The method will be called with the Vue constructor
 * as the first argument, along with possible options:
 * @param Vue {Object|Vue}
 * @link https://vuejs.org/v2/guide/plugins.html
 */
export const install = function (Vue) {
  /**
   * Setting up a theme
   */
  monaco.editor.defineTheme('aeternity-dark', {
    base: 'vs-dark',
    inherit: true,
    rules: [{
      background: '#343746'
    }],
    colors: {
      'editor.foreground': '#282A36',
      'editor.background': '#282A36',
      'editor.lineHighlightBackground': '#343746',
      'editorLineNumber.foreground': '#343746'
    }
  })

  /**
   * References Monaco Editor Interface.
   * @type {editor|monaco}
   */
  Vue.prototype.$editor = monaco.editor
}
