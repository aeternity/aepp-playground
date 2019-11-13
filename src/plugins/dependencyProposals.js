import * as monaco from "monaco-editor"
const sophiaKeyWords = [
    {
        label: 'entrypoint',
        kind: monaco.languages.CompletionItemKind.Keyword,
        documentation: "Formerly known as public function. As the name implies this is an entry callee of a contract",
        insertText: 'entrypoint'
    },
    {
        label: 'require',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'require()'
    },
    {
        label: 'revert',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'revert'
    },
    {
        label: 'abort',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'abort'
    },
    {
        label: 'contract',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'contract'
    },
    {
        label: 'library',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'library'
    },
    {
        label: 'using',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'using'
    },
    {
        label: 'struct',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'struct'
    },
    {
        label: 'modifier',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'modifier'
    },
    {
        label: 'constructor',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'constructor'
    },
    {
        label: 'address',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'address'
    },
    {
        label: 'string',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'string'
    },
    {
        label: 'bool',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'bool'
    },
    {
        label: 'Int',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'Int'
    },
    {
        label: 'Uint',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'Uint'
    },
    {
        label: 'Byte',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'Byte'
    },
    {
        label: 'Fixed',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'Fixed'
    },
    {
        label: 'Ufixed',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'Ufixed'
    },
    {
        label: 'int',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'int'
    },
    {
        label: 'uint',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'uint'
    },
    {
        label: 'byte',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'byte'
    },
    {
        label: 'fixed',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'fixed'
    },
    {
        label: 'ufixed',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'ufixed'
    },
    {
        label: 'Bits',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'Bits'
    },
    {
        label: 'event',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'event'
    },
    {
        label: 'enum',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'enum'
    },
    {
        label: 'let',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'let'
    },
    {
        label: 'mod',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'mod'
    },
    {
        label: 'stateful',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'stateful'
    },
    {
        label: 'namespace',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'namespace'
    },
    {
        label: 'map',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'map'
    },
    {
        label: 'Map',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'Map'
    },
    {
        label: 'hash',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'hash'
    },
    {
        label: 'Chain',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'Chain'
    },
    {
        label: 'String',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'String'
    },
    {
        label: 'public',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'public'
    },
    {
        label: 'private',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'private'
    },
    {
        label: 'external',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'external'
    },
    {
        label: 'inherited',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'inherited'
    },
    {
        label: 'payable',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'payable'
    },
    {
        label: 'true',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'true'
    },
    {
        label: 'false',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'false'
    },
    {
        label: 'var',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'var'
    },
    {
        label: 'import',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'import'
    },
    {
        label: 'include',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'include'
    },
    {
        label: 'constant',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'constant'
    },
    {
        label: 'internal',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'internal'
    },
    {
        label: 'switch',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'switch'
    },
    {
        label: 'if',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'if()'
    },
    {
        label: 'elif',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'elif()'
    },
    {
        label: 'else',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'else'
    },
    {
        label: 'for',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'for'
    },
    {
        label: 'while',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'while'
    },
    {
        label: 'do',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'do'
    },
    {
        label: 'break',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'break'
    },
    {
        label: 'continue',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'continue'
    },
    {
        label: 'throw',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'throw'
    },
    {
        label: 'returns',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'returns'
    },
    {
        label: 'return',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'return'
    },
    {
        label: 'suicide',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'suicide'
    },
    {
        label: 'new',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'new'
    },
    {
        label: 'delete',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'delete'
    },
    {
        label: 'emit',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'emit'
    },
    {
        label: 'is',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'is'
    },
    {
        label: 'this',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'this'
    },
    {
        label: 'and',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'and'
    },
    {
        label: 'type',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'type'
    },
    {
        label: 'record',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'record'
    },
    {
        label: 'datatype',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'datatype'
    },
    {
        label: 'put',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'put'
    },
    {
        label: 'state',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'state'
    },
    {
        label: 'list',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'list'
    },
    {
        label: 'tuple',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'tuple'
    },
    {
        label: 'signature',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'signature'
    },
    {
        label: 'Call',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'Call'
    },
    {
        label: 'super',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'super'
    },
    {
        label: 'function',
        kind: monaco.languages.CompletionItemKind.Keyword,
        insertText: 'function'
    }
]

function getReservedWords(contractContent) {
    let keyWords = ['entrypoint', 'function', 'contract']
    let reserved = []

    for (const key in keyWords) {
        let keywordString = `(?:\\b${keyWords[key]}\\s+(\\w+\\'*))`
        let regex = new RegExp(keywordString, "gim")

        let result

        while ((result = regex.exec(contractContent)) !== null) {
            reserved.push({
                label: result[1],
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: result[1]
            })
        }
    }

    return reserved
}

function createUniqueKeyWordsArr(arr) {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[i].label === arr[j].label)
                arr.splice(j--, 1)
        }
    }

    return arr
}

export function createDependencyProposals(contractContent) {
    let wordsFromContract = getReservedWords(contractContent)
    let combinedKeyWords = createUniqueKeyWordsArr(sophiaKeyWords.concat(wordsFromContract))

    return combinedKeyWords
}