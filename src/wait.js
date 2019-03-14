/**
 * Here is the `Vue Wait` main file. In here we
 * instantiate and configure the vue-wait.
 *
 * @link https://github.com/f/vue-wait
 */
import Vue from 'vue'
import VueWait from 'vue-wait'

/**
 * Install Plugins
 */
Vue.use(VueWait)

/**
 * Export Vue Wait Object
 */
export default new VueWait({
  useVuex: true,
  vuexModuleName: 'wait',
  registerComponent: true,
  componentName: 'v-wait',
  registerDirective: true,
  directiveName: 'wait'
})
