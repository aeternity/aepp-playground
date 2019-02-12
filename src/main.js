import '@aeternity/aepp-components/dist/aepp.global.css'
import '@aeternity/aepp-components/dist/ae-icon/ae-icon.css'
import './style/rules.scss'

import Vue from 'vue'
import App from './views/app.vue'

import router from './router'
import store from './store'
import * as wallet from './plugins/wallet'

Vue.use(wallet)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#aepp')
