/**
 * Import TailwindCSS Utility first
 * css library.
 *
 * @link https://tailwindcss.com/docs/what-is-tailwind/
 */
import './assets/styles/tailwind.css'

/**
 * Import aepp-components styles and components
 */
import '@aeternity/aepp-components/dist/aepp.fonts.css'
import '@aeternity/aepp-components/dist/ae-icon/ae-icon.css'

/**
 * Import Vue Library
 */
import Vue from 'vue'
import Aepp from './aepp.vue'

/**
 * Import local configuration
 * for vue.
 */
import router from './router'
import store from './store'
import * as Wallet from './plugins/wallet'

/**
 * Install plugins in Vue
 */
Vue.use(Wallet)

/**
 * Export Aepp-Playground Instance
 */
export default new Vue({
  router,
  store,
  render: h => h(Aepp),
}).$mount('#aepp')
