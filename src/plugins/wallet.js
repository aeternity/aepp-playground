/**
 * Importing Global Libraries
 */
import Wallet from '@aeternity/aepp-sdk/es/ae/wallet'

/**
 * A Vue.js plugin should expose an install method.
 * The method will be called with the Vue constructor
 * as the first argument, along with possible options:
 * @param Vue {Object|Vue}
 * @link https://vuejs.org/v2/guide/plugins.html
 */
export const install = function (Vue) {
  /**
   * List of wallet instances, used
   * to reference wallets internally.
   * @type {Object}
   */
  const wallets = {}

  /**
   * $wallet function is a wrapper
   * that returns an object to:
   * - Create a Wallet
   * - Remove a Wallet
   * - Select a Wallet
   *
   * The wallet instances are saved
   * internally in a local object.
   *
   * @param name {String}
   * @return {Object|Wallet}
   */
  Vue.prototype.$wallet = function (name = null) {
    if (name && wallets[name]) return wallets[name]
    return {
      /**
       * Creates a Wallet Instance and
       * saves it in an internal Object.
       * @param name {String}
       * @param options {Object}
       * @return {Object}
       */
      create (name, options = {}) {
        if (wallets[name])
          return wallets[name]
        return wallets[name] = new Wallet(options)
      },

      /**
       * The `update` function will update
       * the old wallet instance with a new one.
       * @param name {String}
       * @param options {Object}
       */
      update (name, options = {}) {
        return wallets[name] = new Wallet(options)
      },

      /**
       * Removes a wallet from the
       * internal wallets object.
       * @param name {String}
       */
      remove (name) {
        delete wallets[name]
      },

      /**
       * Returns / Selects a wallet
       * form the wallets list.
       * @param name {String}
       * @return {Object}
       */
      select (name) {
        if (!wallets[name])
          throw Error('Wallet not found')
        return wallets[name]
      }
    }
  }
}
