/**
 * This is the Router main file. In here
 * we instantiate and configure the vue-router.
 */
import Vue from 'vue';
import Router from 'vue-router';

/**
 * The list of routes pulled from the pages
 */
import routes from './views/routes';

/**
 * Install plugins in Vue
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
