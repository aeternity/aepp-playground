<template>
  <aepp-views class="aepp-explorer">
    <aepp-toolbar>
      <aepp-toolbar-tab to="explorer">
        <ae-icon name="search"/>
        Explorer
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <h1>Explorer</h1>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'explorer',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  }
}
</script>
<style lang="scss" scoped>
.aepp-explorer {}
</style>
