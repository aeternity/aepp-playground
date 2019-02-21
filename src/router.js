/**
 * Here is the Router main file. In here we
 * instantiate and configure the vue-router.
 *
 * @link https://router.vuejs.org/guide
 */
import Vue from 'vue';
import Router from 'vue-router';

/**
 * The main list of routes of the app
 */
import routes from './views/routes';

/**
 * Install Plugins
 */
Vue.use(Router)

/**
 * Instantiating Vue Router
 */
const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'exact-active',
  linkActiveClass: 'active',
  routes
});

/**
 * Exporting router Object
 */
export default router;
