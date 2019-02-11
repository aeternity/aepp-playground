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
     * aeternity node endpoint
     * @param {String}
     */
    url: String,

    /**
     * Public key of account to preselect
     */
    address: String,

    /**
     * Public private key of the account
     */
    keypair: {}
  }]
};
