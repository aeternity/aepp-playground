/**
 * The view/component that this route
 * is suppose to render.
 */
import index from './index.vue'

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
  name: 'views/executor',

  /*
   * Route path
   */
  path: 'executor',

  /*
   * Route component
   */
  component: index,

  /*
   * Route children
   */
  children: []
}
