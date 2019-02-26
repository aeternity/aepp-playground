/**
 * Importing Global Libraries
 */
import axios from 'axios'
import Wallet from '@aeternity/aepp-sdk/es/ae/wallet'

/**
 * Actions are asynchronous methods/functions that interact
 * with API endpoints that commit mutations
 * to the state. The API/Interface of each method/function
 * should adhere to the following guidelines.
 *
 * Each function must have a prefix referencing RESTFul
 * methods. See more on https://restfulapi.net/
 * Each function has one of the following prefixes:
 * - get // Use GET requests to retrieve resource representation/information only
 * - post // Use POST APIs to create new subordinate resources
 * - put // Use PUT APIs primarily to update existing resource
 * - delete // DELETE APIs are used to delete resources
 * - patch // HTTP PATCH requests are to make partial update on a resource
 *
 * Followed by the Action that you're trying to achieve:
 * - Faucet
 * - Account
 * - AccountBalance
 *
 * @example postFaucet(address) {} // Will top-up an address with AE
 * @example getAccount(address) {} // Will fetch account details given an address
 *
 * Note: the name of the functions can be either plural
 * or singular, depending on the context which they
 * will be used (ex: in case you're creating multiple
 * transactions then it makes sense to create a function like:
 * @example postTransactions() {}
 */
export default {
  /**
   * Top-up an account with AE.
   * @param context {Object}
   * @param address {String}
   * @return {Promise<void>}
   */
  async postFaucet ({ state }, address) {
    return await axios.post(`${state.faucet}/account/${address}`)
  },
  async getAccount ({ commit }, address) {},
  async getAccountBalance () {},
  async getTransaction () {},
  async getTransactions () {},
  async postTransaction () {},
  async postTransactions () {}
}
