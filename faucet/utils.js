import fs from "fs"
import path from "path"

import {
  recover,
  getAddressFromPriv
} from '@aeternity/aepp-sdk/es/utils/keystore'

export const importAccount = async function (password = '') {
  try {
    const privKey = await recover(password, JSON.parse(
      fs.readFileSync(path.resolve(process.cwd(), 'faucet.json'), null)
    ))
    return { secretKey: privKey, publicKey: getAddressFromPriv(privKey) }
  } catch (e) {
    throw new Error('GET WALLET ERROR: ' + e.message)
  }
}
