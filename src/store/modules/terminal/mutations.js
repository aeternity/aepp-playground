/**
 * Exporting Mutations
 */
export default {
  /**
   * Changes the `terminal.visible` state property
   * in vuex.
   *
   * If there is nop argument input for the function
   * it will automatically revert the state.
   *
   * @param {Object} state
   * @param {Boolean} visible
   */
  toggleVisible(state, visible = !state.visible) {
    state.visible = visible
  },

  /**
   * Records a single message
   * line into an array
   *
   * @param {Object} state
   * @param {*} line
   */
  createLine(state, line) {
    state.lines.push(`~ ${line} \n`)
  }
}