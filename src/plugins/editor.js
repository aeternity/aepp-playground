/**
 * Importing Global Libraries
 */
import * as monaco from 'monaco-editor'
import { createDependencyProposals } from './dependencyProposals'

let languageId = 'sophia'
let configuration = {
  comments: {
    lineComment: '//',
    blockComment: ['/*', '*/'],
  },
  brackets: [['{', '}'], ['[', ']'], ['(', ')'], ['<', '>']],
  autoClosingPairs: [
    { open: '"', close: '"', notIn: ['string', 'comment'] },
    { open: '{', close: '}', notIn: ['string', 'comment'] },
    { open: '[', close: ']', notIn: ['string', 'comment'] },
    { open: '(', close: ')', notIn: ['string', 'comment'] },
    { open: `'`, close: `'`, notIn: ['string', 'comment'] }
  ]
}

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
      'editor.foreground': '#A9A9A9',
      'editor.background': '#282A36',
      'editor.lineHighlightBackground': '#343746',
      'editorLineNumber.foreground': '#A9A9A9'
    }
  })

  /**
   * Register sophia language
   */
  monaco.languages.register({ id: 'sophia' })

  monaco.languages.setLanguageConfiguration(
    languageId, configuration)

  monaco.languages.registerCompletionItemProvider('sophia', {
    provideCompletionItems: function (model, position) {
      let contractContent = model.getValueInRange({ startLineNumber: 1, startColumn: 1, endLineNumber: position.lineNumber, endColumn: position.column })
      let suggestions = createDependencyProposals(contractContent) 
      
      return {
        suggestions
      }
    }
  })

  monaco.languages.setMonarchTokensProvider('sophia', {
    defaultToken: '',
    tokenPostfix: '.aes',

  keywords: [
      // Main keywords
      'require',
      'abort',
      'payable',
      'contract',
      'function',
      'entrypoint',
      //Built-in types
      'address',
      'string',
      'bytes',
      'bool',
      'list',
      'tuple',
      'record',
      'Bits',
      'bits',
      'event',
      'enum',
      'int',
      'state',
      'signature',
      'address',
      'let',
      'mod',
      'stateful',
      'namespace',
      'map',
      'Map',
      'hash',
      'String',
      'public',
      'private',
      'payable',
      'true',
      'false',
      'include',
      'switch',
      'if',
      'elif',
      'else',
      'delete',
      'type',
      'datatype',
      'put',
      //Contract primitives
      'Call',
      'value',
      'origin',
      'caller',
      'gas_price',
      'gas_left',
      'Chain',
      'balance',
      'block_hash',
      'block_height',
      'coinbase',
      'timestamp',
      'difficulty',
      'gas_limit'
    ],

    operators: [
      '=', '>', '<', '!', '~', '?', ':',
      '==', '<=', '>=', '!=', '&&', '||', '++', '--',
      '+', '-', '*', '/', '&', '|', '^', '%', '<<',
      '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',
      '^=', '%=', '<<=', '>>=', '>>>=', '::'
    ],

    // we include these common regular expressions
    symbols: /[=><!~?:&|+\-*/^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
    floatsuffix: /[fFlL]?/,

    // The main tokenizer for our languages
    tokenizer: {
      root: [
        // identifiers and keywords
        [/[a-zA-Z_]\w*/, {
          cases: {
            '@keywords': { token: 'keyword.$0' },
            '@default': 'identifier'
          }
        }],

        // whitespace
        { include: '@whitespace' },

        // [[ attributes ]].
        [/\[\[.*\]\]/, 'annotation'],

        // Preprocessor directive
        [/^\s*#\w+/, 'keyword'],

        //DataTypes
        [/int\d*/, 'keyword'],

        // delimiters and operators
        [/[{}()[\]]/, '@brackets'],
        [/[<>](?!@symbols)/, '@brackets'],
        [/@symbols/, {
          cases: {
            '@operators': 'delimiter',
            '@default': ''
          }
        }],

        // numbers
        [/\d*\d+[eE]([-+]?\d+)?(@floatsuffix)/, 'number.float'],
        [/\d*\.\d+([eE][-+]?\d+)?(@floatsuffix)/, 'number.float'],
        [/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],
        [/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],
        [/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],
        [/\d[\d']*\d(@integersuffix)/, 'number'],
        [/\d(@integersuffix)/, 'number'],

        // delimiter: after number because of .\d floats
        [/[;,.]/, 'delimiter'],

        // strings
        [/"([^"\\]|\\.)*$/, 'string.invalid'],  // non-teminated string
        [/"/, 'string', '@string'],

        // characters
        [/'[^\\']'/, 'string'],
        [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],
        [/'/, 'string.invalid']
      ],

      whitespace: [
        [/[ \t\r\n]+/, ''],
        [/\/\*\*(?!\/)/, 'comment.doc', '@doccomment'],
        [/\/\*/, 'comment', '@comment'],
        [/\/\/.*$/, 'comment'],
      ],

      comment: [
        [/[^/*]+/, 'comment'],
        [/\*\//, 'comment', '@pop'],
        [/[/*]/, 'comment']
      ],
      //Identical copy of comment above, except for the addition of .doc
      doccomment: [
        [/[^/*]+/, 'comment.doc'],
        [/\*\//, 'comment.doc', '@pop'],
        [/[/*]/, 'comment.doc']
      ],

      string: [
        [/[^\\"]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'string.escape.invalid'],
        [/"/, 'string', '@pop']
      ],
    }
  })

  /**
   * References Monaco Editor Interface.
   * @type {editor|monaco}
   */
  Vue.prototype.$editor = monaco.editor
}
