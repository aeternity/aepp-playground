/**
 * Import Vue Library
 */
import Vue from 'vue'
import Vuex from 'vuex'

/**
 * Vuex Plugins
 */
import createPersistedState from 'vuex-persistedstate'

/**
 * Vuex
 */
import state from './state'
import modules from './modules'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

/**
 * Installing Vue Plugins
 */
Vue.use(Vuex)

/**
 * Exporting Vuex.Store Instance
 */
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: process.env.NODE_ENV === 'production' ? [createPersistedState({
    storage: window.sessionStorage
  })] : [],
  state,
  mutations,
  actions,
  getters,
  modules
})
