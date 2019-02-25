<template>
  <aepp-views class="aepp-configs">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="aeternity" />
        configs.yml
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <aepp-editor :options="{ language: 'json' }" :value="configs" />
    <div class="aepp-configs-settings">
      <aepp-button extend>
        Save Configuration
      </aepp-button>
    </div>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppButton from '../../components/aepp-button'
import AeppEditor from '../../components/aepp-editor'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'configs',
  components: {
    AeIcon,
    AeppButton,
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
        return JSON.stringify(this.$store.state.configs);
      },
      set: function (configs) {
        this.$store.commit('updateConfigs', JSON.parse(configs))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.aepp-configs {}

.aepp-configs-settings {
  @apply flex;
  @apply justify-between;
  @apply flex-no-shrink;
  @apply flex-no-grow;
  @apply p-2;

  background: #343746;
  border-top: 1px;
  border-style: solid;
  border-color: #191A21;
  height: 72px;
}
</style>
