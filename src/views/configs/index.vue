<template>
  <aepp-views class="aepp-configs">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="aeternity" />
        configs.yml
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <aepp-editor :options="{ value: JSON.stringify(configs) }" />
  </aepp-views>
</template>
<script>
import { mapState } from 'vuex'

import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppEditor from '../../components/aepp-editor'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'configs',
  components: {
    AeIcon,
    AeppEditor,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  },
  computed: mapState(['configs'])
}
</script>
<style lang="scss" scoped>
.aepp-configs {}
</style>
