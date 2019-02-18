<template>
  <div id="aepp" class="aepp-container">
    <aepp-sidebar>
      <aepp-header />
      <aepp-sidebar-tools>
        <aepp-nav>
          <aepp-nav-list>
            <li>
              <button type="button">
                <aepp-emoji index=500 />
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
                <span>Add</span>
              </button>
            </li>
          </aepp-nav-list>
          <aepp-nav-list>
            <li>
              <button class="aepp-nav-list-add" type="button">
                <ae-icon name="diagram" />
                <span>Share</span>
              </button>
            </li>
            <li>
              <button class="aepp-nav-list-add" type="button">
                <ae-icon name="save" />
                <span>Save</span>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;

  > span,
  > .ae-icon {
    color: #929CA6;
  }

  > span {
    display: block;
    font-family: $font-sans;
    font-size: rem(10px);
    margin: 4px 0 0 0;
  }

  > .ae-icon {
    font-size: rem(24px);
  }
}
</style>
