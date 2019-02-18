/**
 * Importing Global Libraries
 */
import express from 'express'
import cors from 'cors'

/**
 * Aeternity SDK
 */
import { Universal } from '@aeternity/aepp-sdk'
import { isAddressValid } from '@aeternity/aepp-sdk/es/utils/crypto'
import { importAccount } from './utils'

/**
 * Express instance
 * @type {app}
 */
const app = express()

/**
 * Install CORS Plugin
 */
app.use(cors())

/**
 * Get Address
 */
app.post('/account/:address', async function (req, res) {
  let keyPair     = null
  let transaction = null

  if (!isAddressValid(req.params.address)) {
    res.writeHead(400)
    return res.end('Invalid address')
  }

  try {
    keyPair = await importAccount()
  } catch (e) {
    res.writeHead(e.response.status)
    res.end(JSON.stringify(e.response.statusText))
  }

  const Ae = await Universal({
    url: 'http://localhost:3001',
    internalUrl: 'http://localhost:3001',
    keypair: keyPair,
    networkId: 'ae_docker'
  })

  try {
    transaction = await Ae.spend(10, req.params.address)
  } catch (e) {
    res.writeHead(e.response.status)
    res.end(JSON.stringify(e.response.statusText))
  }

  return res.send(JSON.stringify(transaction))
}).listen(9090, () => {
  console.log(`Server running at http://localhost:${9090}/`)
})
