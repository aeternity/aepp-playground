import * as monaco from "monaco-editor"

const sophiaKeyWords = [
    'require',
    'abort',
    'payable',
    'contract',
    'function',
    'entrypoint',
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
    'Call',
    'value',
    'Chain',
    'Oracle',
    'oracle',
    'oracle_query',
    'Crypto',
    'AENS',
    'resolve',
    'preclaim',
    'claim',
    'transfer',
    'revoke',
    'Contract'
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