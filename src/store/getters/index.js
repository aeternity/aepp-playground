/**
 * Exporting Vuex Getters
 */
export default {
  /**
   * Returns the address from
   * the configs store object.
   *
   * @param state {Object}
   * @return {String|Null}
   */
  getAccountAddress(state) {
    return state.configs.account.address
  },

  /**
   * Returns the Private Key from
   * the configs store object.
   *
   * @param state {Object}
   * @return {String|Null}
   */
  getAccountSecretKey(state) {
    return state.configs.account.keypair.secretKey
  },

  /**
   * Returns the Public Key from
   * the configs store object.
   *
   * @param state {Object}
   * @return {String|Null}
   */
  getAccountPublicKey(state) {
    return state.configs.account.keypair.publicKey
  },

  /**
   * Returns the keypair from
   * the configs store object.
   *
   * @param state {Object}
   * @return {Object}
   */
  getAccountKeyPair(state) {
    return state.configs.account.keypair
  },

  /**
   * Returns the config Node URL
   *
   * @param state {Object}
   * @return {String}
   */
  getNodeUrl(state) {
    return state.configs.node.url
  },

  /**
   * Returns the config Node Internal URL
   *
   * @param state {Object}
   * @return {String}
   */
  getNodeInternalUrl(state) {
    return state.configs.node.internalUrl
  },

  /**
   * Returns the config Node Network ID
   *
   * @param state {Object}
   * @return {String}
   */
  getNodeNetworkId(state) {
    return state.configs.node.networkId
  },
}
