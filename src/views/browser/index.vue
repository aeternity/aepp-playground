<template>
  <aepp-views class="aepp-browser">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="globe"/>
        aepp.dronegraffiti.com
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <aepp-window />
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components-3/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'
import AeppWindow from '../../sections/aepp-window'

export default {
  name: 'browser',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews,
    AeppWindow
  }
}
</script>
<style lang="scss" scoped>
.aepp-browser {}
</style>
