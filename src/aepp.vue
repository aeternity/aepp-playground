<template>
  <div id="aepp" class="aepp-container">
    <!-- Sidebar Container -->
    <aepp-sidebar>
      <!-- Aeternity logo -->
      <aepp-header />

      <!-- Navigation menu -->
      <aepp-nav>
        <aepp-nav-list>
          <li>
            <router-link :to="{ name: 'views/editor' }">
              <ae-icon name="grid" />
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'views/browser' }">
              <ae-icon name="globe" />
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'views/goggles' }">
              <ae-icon name="search" />
            </router-link>
          </li>
        </aepp-nav-list>
        <aepp-nav-list>
          <li>
            <router-link :to="{ name: 'views/configs' }">
              <ae-icon name="filter" />
              <span>Configs</span>
            </router-link>
          </li>
        </aepp-nav-list>
      </aepp-nav>
    </aepp-sidebar>

    <!-- Render Main Views -->
    <router-view />
  </div>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppHeader from './sections/aepp-header'
import AeppNav from './sections/aepp-nav'
import AeppNavList from './sections/aepp-nav-list'
import AeppSidebar from './sections/aepp-sidebar'

export default {
  name: 'aepp',
  components: {
    AeIcon,
    AeppHeader,
    AeppNav,
    AeppNavList,
    AeppSidebar
  }
}
</script>
<style lang="scss" scoped>
.aepp-container {
  @apply flex;
  @apply w-full;
  @apply h-full;
}
</style>
