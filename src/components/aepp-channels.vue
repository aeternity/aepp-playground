<template>
  <div>
    <button @click="initialize">Initialize</button>
  </div>
</template>
<script>
const { MemoryAccount, Channel, Crypto, Universal } = require('@aeternity/aepp-sdk')

const API_URL = 'http://localhost:3001'
const INTERNAL_API_URL = 'http://localhost:3001'
const STATE_CHANNEL_URL = 'ws://localhost:3001'
const NETWORK_ID = 'ae_docker'
const RESPONDER_HOST = 'localhost'
const RESPONDER_PORT = 3001

const initiatorAddress = 'ak_Lmp4JMbNGdfgQ68yfavm4CxBizKXn9y1aJv1E1phf1geRbncN'
const responderAddress = 'ak_MpwgJ4ZD5bctbHBmtdA6XMchpbtBKiYnMzaNwgCHvxL37mrea'

let initiatorAccount
let responderAccount

async function createAccounts () {
  initiatorAccount = await Universal({
    networkdId: NETWORK_ID,
    url: API_URL,
    internalUrl: INTERNAL_API_URL,
    keypair: {
      publicKey: initiatorAddress,
      secretKey: 'a27376905aca058c0ca08a478515f04cb13f3a56a77705ec43a206fb6aa6c7282ce568a0488ed4823f403d908421ac5eee5703680f3fd7d1c6bdc8c6205125e2'
    }
  })
  responderAccount = await Universal({
    networkdId: NETWORK_ID,
    url: API_URL,
    internalUrl: INTERNAL_API_URL,
    keypair: {
      publicKey: responderAddress,
      secretKey: '96d02824d81fdabfcb7fbcb66e2653a71ba5c4c5461dfd4fbdb0d07c4948c73d2f4a122bb84f9b1b1d65f89e4c0768ab768113a96959f664fa2288227216e71e'
    }
  })
}

async function initiatorSign (tag, tx) {
  if (tag === 'initiator_sign') {
    return initiatorAccount.signTransaction(tx)
  }

  // Deserialize binary transaction so we can inspect it
  const txData = Crypto.deserialize(Crypto.decodeTx(tx), { prettyTags: true })
  if (tag === 'shutdown_sign_ack') {
    if (
      txData.tag === 'CHANNEL_CLOSE_MUTUAL_TX' &&
      // To keep things simple we manually check that
      // balances are correct (as a result of previous transfer update)
      txData.initiatorAmount === 49990 &&
      txData.responderAmount === 50010
    ) {
      return initiatorAccount.signTransaction(tx)
    }
  }
}

async function responderSign (tag, tx) {
  if (tag === 'responder_sign') {
    return responderAccount.signTransaction(tx)
  }

  // Deserialize binary transaction so we can inspect it
  const txData = Crypto.deserialize(Crypto.decodeTx(tx), { prettyTags: true })
  // When someone wants to transfer a tokens we will receive
  // a sign request with `update_ack` tag
  if (tag === 'update_ack') {
    // Check if update contains only one offchain transaction
    // and sender is initiator
    if (
      txData.tag === 'CHANNEL_OFFCHAIN_TX' &&
      txData.updates.length === 1 &&
      txData.updates[0].from === initiatorAddress
    ) {
      return responderAccount.signTransaction(tx)
    }
  }
}

async function connectAsInitiator (params) {
  return Channel({
    ...params,
    url: STATE_CHANNEL_URL,
    role: 'initiator',
    sign: initiatorSign
  })
}

async function connectAsResponder (params) {
  return Channel({
    ...params,
    url: STATE_CHANNEL_URL,
    role: 'responder',
    sign: responderSign
  })
}

const params = {
  // Public key of initiator
  // (in this case `initiatorAddress` defined earlier)
  initiatorId: initiatorAddress,
  // Public key of responder
  // (in this case `responderAddress` defined earlier)
  responderId: responderAddress,
  // Initial deposit in favour of the responder by the initiator
  pushAmount: 0,
  // Amount of tokens initiator will deposit into state channel
  initiatorAmount: 50000,
  // Amount of tokens responder will deposit into state channel
  responderAmount: 50000,
  // Minimum amount both peers need to maintain
  channelReserve: 40000,
  // Minimum block height to include the channel_create_tx
  ttl: 1000,
  // Amount of blocks for disputing a solo close
  lockPeriod: 10,
  // Host of the responder's node
  host: RESPONDER_HOST,
  // Port of the responders node
  port: RESPONDER_PORT,
}

export default {
  name: 'aepp-channels',
  methods: {
    initialize: function () {
      createAccounts().then(() => {
        // initiator connects to state channels endpoint
        connectAsInitiator(params).then(initiatorChannel => {
          initiatorChannel.on('statusChanged', (status) => {
            if (status === 'open') {
              console.log('State channel has been opened!')
            }
          })

          initiatorChannel.on('onChainTx', (tx) => {
            console.log('channel_create_tx:', tx)
          })

          initiatorChannel.sendMessage('hello world', responderAddress)

          initiatorChannel.update(
            // Sender account
            initiatorAddress,
            // Recipient account
            responderAddress,
            // Amount
            10,
            // This function should verify offchain transaction
            // and sign it with initiator's private key
            async (tx) => initiatorAccount.signTransaction(tx)
          ).then((result) => {
            if (result.accepted) {
              console.log('Succesfully transfered 10 tokens!')
              console.log('Current state:', result.state)
            } else {
              console.log('Transfer has been rejected')
            }
          })

          initiatorChannel.on('error', err => console.log(err))
        }).catch(err => {
          console.log('Initiator failed to connect')
          console.log(err)
        })

        // responder connects to state channels endpoint
        connectAsResponder(params).then(responderChannel => {
          responderChannel.on('message', (msg) => {
            console.log('Received message from:', msg.from)
            console.log(msg.info)
          })

          // close channel after a minute
          setTimeout(() => {
            responderChannel.shutdown(
              // This function should verify shutdown transaction
              // and sign it with responder's secret key
              async (tx) => responderAccount.signTransaction(tx)
            ).then((tx) => {
              console.log('State channel has been closed')
              console.log('You can track this transaction onchain', tx)
            })
          }, 60000)

          responderChannel.on('error', err => console.log(err))
        }).catch(err => {
          console.log('Responder failed to connect')
          console.log(err)
        })
      })
    }
  }
}
</script>
<style></style>
