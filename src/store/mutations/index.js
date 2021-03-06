/**
 * Mutations directly modify the Vuex state.
 * The API/Interface for the functions need to follow
 * the current guidelines when adding more functionality.
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
   * Updates the name of the aepp-playground
   * @param state {Object}
   * @param name {String}
   */
  updateName(state, name) {
    state.name = name
  },

  /**
   * Updates the config values
   * @param state {Object}
   * @param configs {Object}
   */
  updateConfigs(state, configs) {
    state.configs = Object.assign(state.configs, configs)
  },

  /**
   * Creates a notification and puts
   * it into the store object
   * @param state {Object}
   * @param notification {Object}
   * @param notification.time {Date}
   * @param notification.type {success|error}
   * @param notification.text {String}
   */
  createNotification(state, notification) {
    state.notifications.push(notification)
  },

  /**
   * Removes a notification from the
   * notifications store object
   * @param state {Object}
   * @param index {Number}
   */
  deleteNotification(state, index) {
    state.notifications.splice(index, 1)
  }
}
