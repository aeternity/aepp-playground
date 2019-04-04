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
   * Returns the configs.node URL
   *
   * @param state {Object}
   * @return {String}
   */
  getNodeUrl(state) {
    return state.configs.node.url
  },

  /**
   * Returns the configs.node Internal URL
   *
   * @param state {Object}
   * @return {String}
   */
  getNodeInternalUrl(state) {
    return state.configs.node.internalUrl
  },

  /**
   * Returns the configs.node Compiler URL
   *
   * @param state {Object}
   * @return {String}
   */
  getCompilerUrl(state) {
    return state.configs.node.compilerUrl
  },

  /**
   * Returns the configs.node Network ID
   *
   * @param state {Object}
   * @return {String}
   */
  getNodeNetworkId(state) {
    return state.configs.node.networkId
  },
}
