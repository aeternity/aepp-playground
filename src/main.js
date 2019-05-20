/**
 * Import TailwindCSS Utility first css library.
 *
 * @link https://tailwindcss.com/docs/what-is-tailwind/
 */
import './assets/styles/tailwind.css'

/**
 * Import aepp-components styles and components
 */
import '@aeternity/aepp-components-3/dist/aepp.fonts.css'
import '@aeternity/aepp-components-3/dist/ae-icon/ae-icon.css'

/**
 * Import Vue Library
 */
import Vue from 'vue'
import VueBar from 'vuebar'

/**
 * Import local configuration for vue.
 */
import Aepp from './aepp.vue'
import store from './store'
import router from './router'
import wait from './wait'

import * as editor from './plugins/editor'

/**
 * Install plugins in Vue
 */
Vue.use(VueBar)
Vue.use(editor)

/**
 * Export Aepp-Playground Instance
 */
export default new Vue({
  store,
  router,
  wait,
  render: h => h(Aepp)
}).$mount('#aepp')
