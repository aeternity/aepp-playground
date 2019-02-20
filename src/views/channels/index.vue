<template>
  <aepp-views>
    <aepp-toolbar>
      <aepp-toolbar-tab>
        <ae-icon name="aeternity" />
        &nbsp;Hello world
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <aepp-window />
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'
import AeppWindow from '../../sections/aepp-window'

export default {
  name: 'channels',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews,
    AeppWindow
  }
}
</script>
<style lang="scss" scoped></style>
