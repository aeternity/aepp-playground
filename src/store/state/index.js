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
   * List of notifications thrown by the application
   *
   * @param notifications [Object]
   * @param notifications.time {Date}
   * @param notifications.type {success|error}
   * @param notifications.text {String}
   */
  notifications: [],

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
        secretKey: process.env.VUE_APP_ACCOUNT_SECRET_KEY,
        publicKey: process.env.VUE_APP_ACCOUNT_PUBLIC_KEY
      }
    },

    /**
     * Aeternity node configuration
     * this data goes directly to the SDK
     * instance.
     */
    node: {
      url: process.env.VUE_APP_NODE_URL,
      internalUrl: process.env.VUE_APP_NODE_INTERNAL_URL,
      compilerUrl: process.env.VUE_APP_COMPILER_URL,
      networkId: process.env.VUE_APP_NODE_NETWORK_ID
    }
  }
}
