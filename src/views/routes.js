/**
 * The view/component that this route
 * is suppose to render.
 */
import index from './index.vue'

/**
 * List of nested views/routes
 */
import browser from './browser/routes'
import configs from './configs/routes'
import editor from './editor/routes'
import executor from './executor/routes'
import explorer from './explorer/routes'
import cryptoHamster from './cryptoHamster/routes'
import inspector from './inspector/routes'

/**
 * Exporting Routes Object
 */
export default [{
  /*
   * Route name
   */
  name: 'views',

  /*
   * Route path
   */
  path: '/',

  /*
   * Route component
   */
  component: index,

  /*
   * Route redirect
   */
  redirect: {
    name: 'views/editor'
  },

  /*
   * Route children
   */
  children: [
    browser,
    configs,
    editor,
    executor,
    explorer,
    cryptoHamster,
    inspector
  ]
}]
