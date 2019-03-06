<template>
  <aepp-views class="aepp-inspector">
    <aepp-toolbar>
      <aepp-toolbar-tab to="inspector">
        <ae-icon name="search"/>
        Inspector
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <h1>Inspector</h1>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'inspector',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  }
}
</script>
<style lang="scss" scoped>
.aepp-inspector {}
</style>
