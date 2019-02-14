<template>
  <div id="aepp" class="aepp-container">
    <aepp-sidebar>
      <aepp-header />
      <aepp-sidebar-tools>
        <aepp-nav />
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
</style>
