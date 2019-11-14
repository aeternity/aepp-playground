import * as monaco from "monaco-editor"

const sophiaKeyWords = [
    'require',
    'assert',
    'revert',
    'abort',
    'contract',
    'library',
    'using',
    'struct',
    'function',
    'entrypoint',
    'modifier',
    'constructor',
    'address',
    'string',
    'bool',
    'Int',
    'Uint',
    'Byte',
    'Fixed',
    'Ufixed',
    //All int
    'int',
    //All uint
    'uint',
    //All Byte
    'byte',
    'bytes',
    'fixed',
    'ufixed',
    'Bits',
    'event',
    'enum',
    'let',
    'mod',
    'rec',
    'stateful',
    'namespace',
    'map',
    'Map',
    'hash',
    'Chain',
    'String',
    'public',
    'private',
    'external',
    'inherited',
    'payable',
    'true',
    'false',
    'var',
    'import',
    'include',
    'constant',
    'internal',
    'switch',
    'if',
    'elif',
    'else',
    'for',
    'while',
    'do',
    'break',
    'continue',
    'throw',
    'returns',
    'return',
    'suicide',
    'new',
    'delete',
    'emit',
    'is',
    'this',
    'and',
    'type',
    'record',
    'datatype',
    'put',
    'state',
    'list',
    'tuple',
    'signature',
    'Call',
    'super'
]

function getReservedWordsFromContract(contractContent) {
    let contractKeyWords = ['entrypoint', 'function', 'contract']
    let reserved = []

    for (const key in contractKeyWords) {
        let contractKeywordString = `(?:\\b${contractKeyWords[key]}\\s+(\\w+\\'*))`
        let regex = new RegExp(contractKeywordString, "gim")

        let result

        while ((result = regex.exec(contractContent)) !== null) {
            reserved.push(result[1])
        }
    }

    return reserved
}

function getCombinedKeyWords(contractKeyWordsArr) {
    let sophiaKW = sophiaKeyWords.slice(0)
    let map = new Map()
    let combinedKeyWords = []

    for (let kw of sophiaKW) {
        map.set(kw, true)
        combinedKeyWords.push({
            label: kw,
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: kw
        })
    }

    for (let extractedWord of contractKeyWordsArr) {
        if (!map.has(extractedWord)) {
            map.set(extractedWord, true)
            combinedKeyWords.push({
                label: extractedWord,
                kind: monaco.languages.CompletionItemKind.Keyword,
                insertText: extractedWord
            })
        }
    }

    return combinedKeyWords
}

export function createDependencyProposals(contractContent) {
    let contractKeyWordsArr = getReservedWordsFromContract(contractContent)
    let combinedKeyWords = getCombinedKeyWords(contractKeyWordsArr)
    
    return combinedKeyWords
}