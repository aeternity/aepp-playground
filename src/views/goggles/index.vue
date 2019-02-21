<template>
  <aepp-views class="aepp-goggles">
    <aepp-toolbar>
      <aepp-toolbar-tab to="asdfasdfas">
        <ae-icon name="aeternity" />
        Goggles
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <h1>Goggles</h1>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'goggles',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  }
}
</script>
<style lang="scss" scoped>
.aepp-goggles {}
</style>
