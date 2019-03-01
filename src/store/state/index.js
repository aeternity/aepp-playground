/**
 * The Vuex state is the central information
 * repository of the application, when adding
 * more options to the state, you need to
 * adhere to the following guidelines.
 *
 * Generally if you want to reference a multitude
 * of a specific data, then name the keys of the object
 * should be in a plural format, etc.
 *
 * Global elements of the application stay at the _rootState_
 * in case the _rootState_ becomes too crowded with data then
 * group similar states and move them into a module.
 */
export default {
  /**
   * Name of the application
   */
  name: 'aepp-playground',

  /**
   * Endpoint of the faucet.
   *
   * - http://localhost:9090
   * - https://testnet.faucet.aepps.com
   * - https://edge-faucet.aepps.com
   *
   * @param faucet {String}
   */
  faucet: 'http://localhost:9090',

  /**
   * The default account being used to interact with
   * the blockchain
   * @param account {Object}
   * @param account.address {String}
   * @param account.keypair {Object}
   * @param account.keypair.privateKey {String}
   * @param account.keypair.publicKey {String}
   */
  account: {
    /**
     * Address of the account
     */
    address: String,

    /**
     * Public & private key of the account
     */
    keypair: {
      privateKey: String,
      publicKey: String
    }
  },

  /**
   * List of aeternity accounts
   * @param {Array}
   */
  accounts: [{
    /**
     * Address of the account
     */
    address: String,

    /**
     * Public & private key of the account
     */
    keypair: {
      pubKey: String,
      privKey: String
    }
  }],

  /**
   * List of notifications thrown by the application
   *
   * @param notifications [Object]
   * @param notifications.time {Date}
   * @param notifications.type {success|error}
   * @param notifications.text {String}
   */
  notifications: [],

  /**
   * List of Guard Actions:
   * - onTx
   * - onChain
   * - onAccount
   * - onContract
   */
  guards: [],

  /**
   * List of raw outputs:
   * - API Errors
   * - API Response
   *
   * @param console {Array}
   * @param console[index].time {String}
   * @param console[index].type {String}
   * @param console[index].text {String}
   */
  console: [],

  /**
   * Global Playground Configuration Object
   *
   * Here are the default config values, of the
   * aepp-playground.
   *
   * @param configs {Object}
   *
   * @param configs.account {Object}
   * @param configs.account.address {String}
   * @param configs.account.keypair {Object}
   * @param configs.account.keypair.privateKey {String}
   * @param configs.account.keypair.publicKey {String}
   *
   * @param configs.node {Object}
   * @param configs.node.internalUrl {String}
   * @param configs.node.url {String}
   * @param configs.node.networkId {String}
   */
  configs: {
    /**
     * This is the Aeternity Account that is
     * set up globally in the entire aepp.
     */
    account: {
      address: process.env.VUE_APP_ACCOUNT_PUBLIC_KEY,
      keypair: {
        privateKey: process.env.VUE_APP_ACCOUNT_PRIVATE_KEY,
        publicKey: process.env.VUE_APP_ACCOUNT_PUBLIC_KEY
      }
    },

    /**
     * Aeternity node configuration
     * this data goes directly to the SDK
     * instance.
     */
    node: {
      internalUrl: process.env.VUE_APP_NODE_INTERNAL_URL,
      url: process.env.VUE_APP_NODE_URL,
      networkId: process.env.VUE_APP_NODE_NETWORK_ID
    }
  }
}
