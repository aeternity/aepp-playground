<template>
  <aepp-views class="aepp-identity">
    <aepp-toolbar>
      <aepp-toolbar-tab to="identity">
        <ae-icon name="search"/>
        Identity
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <h1>Identity</h1>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components-3/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'identity',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  }
}
</script>
<style lang="scss" scoped>
.aepp-identity {}
</style>
