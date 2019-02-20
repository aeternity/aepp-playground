<template>
  <div id="aepp" class="aepp-container">
    <aepp-sidebar>
      <aepp-header />
      <aepp-nav>
        <aepp-nav-list>
          <li>
            <router-link :to="{ name: 'views/contracts' }">
              <ae-icon name="paste" />
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'views/channels' }">
              <ae-icon name="device" />
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
            <router-link :to="{ name: 'views/settings' }">
              <ae-icon name="settings" />
            </router-link>
          </li>
        </aepp-nav-list>
      </aepp-nav>
    </aepp-sidebar>
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
