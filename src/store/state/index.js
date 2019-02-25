/**
 * Exporting Vuex State
 *
 * The Vuex state is the central information
 * repository of the application, when adding
 * more options to the state, you need to
 * adhere to the following guidelines.
 *
 * Generally if you want to reference a multitude
 * of a specific data, then name the keys of the object
 * in a plural format, in case its a singular item
 * then use singular.
 *
 * Global elements of the application stay at the rootState
 * in case the rootState becomes too crowded with data then
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
   * List of aeternity accounts
   * @param {Array}
   */
  accounts: [{
    /**
     * Aeternity node Network ID
     */
    networkId: String,

    /**
     * aeternity node endpoint
     * @param {String}
     */
    url: String,

    /**
     * Address of the account
     */
    address: String,

    /**
     * Public & private key of the account
     */
    keypair: {
      pubKey: "ak_6A2vcm1Sz6aqJezkLCssUXcyZTX7X8D5UwbuS2fRJr9KkYpRU",
      privKey: "a7a695f999b1872acb13d5b63a830a8ee060ba688a478a08c6e65dfad8a01cd70bb4ed7927f97b51e1bcb5e1340d12335b2a2b12c8bc5221d63c4bcb39d41e61"
    }
  }],

  /**
   * Global Playground Configuration Object
   *
   * Here are the default config values, of the
   * aepp-playground.
   *
   * @param configs {Object}
   * @param configs.host
   * @param configs.accounts
   * @param configs.accounts.privateKey
   * @param configs.accounts.publicKey
   */
  configs: {
    host: "",
    accounts: [{
      privateKey: '',
      publicKey: ''
    }]
  },

  /**
   * List of notifications
   * thrown by the application
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
  guards: []
};
