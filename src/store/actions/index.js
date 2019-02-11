/**
 * Exporting Vuex Actions
 *
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
 * The system for singular/plural still is valid in this case.
 */
export default {
  async postFaucet() {},
  async getAccount() {},
  async getAccountBalance() {},
  async getTransaction() {},
  async postTransaction() {},
};
