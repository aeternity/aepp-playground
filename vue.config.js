const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `
          @import "~@aeternity/aepp-components-3/src/styles/globals/mixins";
          @import "~@aeternity/aepp-components-3/src/styles/globals/functions";
          @import "~@aeternity/aepp-components-3/src/styles/placeholders/typography";
          @import "~@aeternity/aepp-components-3/src/styles/variables/animations";
          @import "~@aeternity/aepp-components-3/src/styles/variables/colors";
          @import "~@aeternity/aepp-components-3/src/styles/variables/paths";
          @import "~@aeternity/aepp-components-3/src/styles/variables/typography";
        `
      }
    }
  },
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        /**
         * languages (string[]) - include only a subset of the languages supported.
         *
         * default value: [
         *  'apex', 'azcli', 'bat', 'clojure', 'coffee', 'cpp',
         *  'csharp', 'csp', 'css', 'dockerfile', 'fsharp', 'go',
         *  'handlebars', 'html', 'ini', 'java', 'javascript',
         *  'json', 'less', 'lua', 'markdown', 'msdax', 'mysql',
         *  'objective', 'perl', 'pgsql', 'php', 'postiats',
         *  'powerquery', 'powershell', 'pug', 'python', 'r', 'razor',
         *  'redis', 'redshift', 'ruby', 'rust', 'sb', 'scheme', 'scss',
         *  'shell', 'solidity', 'sql', 'st', 'swift', 'typescript', 'vb',
         *  'xml', 'yaml'].
         *
         * Some languages share the same web worker. If one of the
         * following languages is included, you must also include the
         * language responsible for instantiating their shared worker:
         *
         * Language Instantiator
         * javascript > typescript
         * handlebars > html
         * scss, less > css
         */
        languages: ['typescript', 'json'],

        /**
         * features (string[]) - include only a subset of the editor features.
         *
         * default value: ['accessibilityHelp', 'bracketMatching', 'caretOperations',
         * 'clipboard', 'codeAction', 'codelens', 'colorDetector', 'comment',
         * 'contextmenu', 'coreCommands', 'cursorUndo', 'dnd', 'find', 'folding', 'fontZoom',
         * 'format', 'goToDefinitionCommands', 'goToDefinitionMouse', 'gotoError',
         * 'gotoLine', 'hover', 'inPlaceReplace', 'inspectTokens', 'iPadShowKeyboard',
         * 'linesOperations', 'links', 'multicursor', 'parameterHints', 'quickCommand',
         * 'quickOutline', 'referenceSearch', 'rename', 'smartSelect', 'snippets',
         * 'suggest', 'toggleHighContrast', 'toggleTabFocusMode', 'transpose', 'wordHighlighter',
         * 'wordOperations', 'wordPartOperations'].
         *
         * excluded features: It is also possible to exclude certain default features prefixing them
         * with an exclamation mark '!'.
         */
        features: ['coreCommands']
      })
    ]
  }
}
