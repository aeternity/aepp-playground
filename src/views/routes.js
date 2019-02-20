/**
 * The view/component that this route
 * is suppose to render.
 */
import index from './index.vue';

/**
 * List of nested views/routes
 */
import channels from './channels/routes';
import contracts from './contracts/routes';
import goggles from './goggles/routes';
import settings from './settings/routes';

/**
 * Exporting Routes Object
 */
export default [
  /*
   * App route
   */
  {
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
      name: 'views/channels'
    },

    /*
     * Route children
     */
    children: [
      channels,
      contracts,
      goggles,
      settings
    ]
  }
];
