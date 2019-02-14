<template>
  <div id="aepp" class="aepp-container">
    <aepp-sidebar>
      <aepp-header />
      <aepp-sidebar-tools>
        <aepp-nav>
          <aepp-nav-list>
            <li>
              <button type="button">
                <aepp-emoji index=2 />
              </button>
            </li>
            <li>
              <button type="button">
                <aepp-emoji index=3 />
              </button>
            </li>
            <li>
              <button class="aepp-nav-list-add" type="button">
                <ae-icon name="plus" />
              </button>
            </li>
          </aepp-nav-list>
          <aepp-nav-list>
            <li>
              <button type="button">
                <aepp-emoji index=4 />
              </button>
            </li>
            <li>
              <button type="button">
                <aepp-emoji index=5 />
              </button>
            </li>
          </aepp-nav-list>
        </aepp-nav>
        <aepp-log />
      </aepp-sidebar-tools>
    </aepp-sidebar>
    <aepp-views>
      <aepp-window />
      <aepp-window />
    </aepp-views>
  </div>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppEmoji from '../components/aepp-emoji'

import AeppHeader from '../sections/aepp-header'
import AeppLog from '../sections/aepp-log'
import AeppNav from '../sections/aepp-nav'
import AeppNavList from '../sections/aepp-nav-list'
import AeppSidebar from '../sections/aepp-sidebar'
import AeppSidebarTools from '../sections/aepp-sidebar-tools'
import AeppTerminal from '../sections/aepp-terminal'
import AeppViews from '../sections/aepp-views'
import AeppWindow from '../sections/aepp-window'

export default {
  name: 'aepp-playground',
  components: {
    AeIcon,
    AeppEmoji,
    AeppHeader,
    AeppLog,
    AeppNav,
    AeppNavList,
    AeppSidebar,
    AeppSidebarTools,
    AeppTerminal,
    AeppViews,
    AeppWindow
  }
}
</script>
<style lang="scss" scoped>
.aepp-container {
  display: flex;
  width: 100%;
  min-width: 1180px;
  height: 100%;
}

.aepp-nav-list-add {
  font-size: rem(45px);
}
</style>
