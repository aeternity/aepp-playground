<template>
  <aepp-views class="aepp-executor">
    <aepp-toolbar>
      <aepp-toolbar-tab to="executor">
        <ae-icon name="search"/>
        Executor
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <h1>Executor</h1>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components-3/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'executor',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  }
}
</script>
<style lang="scss" scoped>
.aepp-executor {}
</style>
