<template>
  <aepp-views class="aepp-configs">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="aeternity" />
        configs.yml
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <h1>Configs</h1>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'configs',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  }
}
</script>
<style lang="scss" scoped>
.aepp-configs {}
</style>
