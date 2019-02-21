<template>
  <aepp-views class="aepp-contracts">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="aeternity" />
        Contracts
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <h1>Contracts</h1>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'contracts',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  }
}
</script>
<style lang="scss" scoped>
.aepp-contracts {}
</style>
