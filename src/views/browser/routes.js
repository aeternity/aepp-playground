/**
 * The view/component that this route
 * is suppose to render.
 */
import index from './index.vue';

/**
 * List of nested views/routes
 */

/**
 * Exporting Routes Object
 */
export default {
  /*
   * Route name
   */
  name: 'views/browser',

  /*
   * Route path
   */
  path: 'browser',

  /*
   * Route component
   */
  component: index,

  /*
   * Route children
   */
  children: []
};
