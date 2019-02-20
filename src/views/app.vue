<template>
  <div id="aepp" class="aepp-container">
    <aepp-sidebar>
      <aepp-header />
      <aepp-nav>
        <aepp-nav-list>
          <li>
            <router-link to="/">
              <ae-icon name="paste" />
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <ae-icon name="device" />
            </router-link>
          </li>
        </aepp-nav-list>
        <aepp-nav-list>
          <li>
            <router-link to="/">
              <ae-icon name="settings" />
            </router-link>
          </li>
        </aepp-nav-list>
      </aepp-nav>
    </aepp-sidebar>
    <aepp-views>
      <aepp-window />
    </aepp-views>
  </div>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppHeader from '../sections/aepp-header'
import AeppNav from '../sections/aepp-nav'
import AeppNavList from '../sections/aepp-nav-list'
import AeppSidebar from '../sections/aepp-sidebar'
import AeppViews from '../sections/aepp-views'
import AeppWindow from '../sections/aepp-window'

export default {
  name: 'aepp-playground',
  components: {
    AeIcon,
    AeppHeader,
    AeppNav,
    AeppNavList,
    AeppSidebar,
    AeppViews,
    AeppWindow
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
