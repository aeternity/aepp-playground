/**
 * Exporting Vuex Mutations
 *
 * Mutations directly modify the Vuex state.
 * The API/Interface for the functions need to follow
 * the following guidelines when adding more
 * functionality.
 *
 * Each function has one of the following prefixes:
 * - create // When you're adding/creating new data
 * - update // When you're updating data in the state
 * - delete // Whe you're deleting data from the state
 * - select // When you need to pick something
 * - toggle // When you need to switch between different states
 *
 * Followed by the state property that you're trying
 * to modify in camelCase format, ex:
 * - IF { name: '' } THEN updateName() {}
 * - IF { accounts: '' } THEN createAccount() {}
 *
 * Overall your mutation functions should look like:
 * @example updateName() {} // Will update the `name`
 * @example createAccount() {} // Will add an entry to the account array
 *
 * Note: the name of the functions can be either plural
 * or singular, depending on the context which they
 * will be used (ex: in case you're selecting one account
 * then it makes sense to create a function like:
 * @example selectAccount() {}
 */
export default {
  /**
   * Updates the name of the
   * aepp-playground
   * @param state {Object}
   * @param name {String}
   */
  updateName(state, name) {
    state.name = name
  },

  /**
   * Creates / Inserts an account
   * into the accounts array
   * @param state {Object}
   * @param account {Object}
   */
  createAccount(state, account) {
    state.accounts.push(account)
  },

  /**
   * Updates account based on the address
   * @param state {Object}
   * @param updatedAccount {Object}
   */
  updateAccount(state, updatedAccount) {
    state.accounts = state.accounts.map(
      (account) => updatedAccount.address === account.address ? updatedAccount : account
    )
  },

  /**
   * Deletes an account from
   * the accounts array list
   * @param state {Object}
   * @param address {String}
   */
  deleteAccount(state, address) {
    state.accounts = state.accounts.filter(
      (account) => account.address !== address
    )
  }
};
