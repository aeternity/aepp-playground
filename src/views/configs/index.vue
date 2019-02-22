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
  computed: {
    /**
     * Making `Configs` Vuex state property
     * changeable with computed properties
     */
    configs: {
      get: function () {
        return this.$store.state.configs;
      },
      set: function (configs) {
        this.$store.commit('updateConfigs', configs)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.aepp-configs {}
</style>
