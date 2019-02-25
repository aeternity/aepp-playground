<template>
  <aepp-views class="aepp-configs">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="aeternity" />
        configs.yml
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <aepp-editor
      :options="{ language: 'json' }"
      :value="configs"
      @init="(e) => this.editor = e"
    />
    <div class="aepp-configs-settings">
      <aepp-button @click.native="saveConfiguration" extend>
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
  data: function () {
    return { editor: null }
  },
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
     *
     * @return {String}
     */
    configs() {
      return JSON.stringify(this.$store.state.configs, null, 2);
    }
  },
  methods: {
    /**
     * Update the configuration store
     */
    saveConfiguration() {
      try {
        this.$store.commit('updateConfigs', JSON.parse(
          this.editor.getValue())
        )
      } catch (e) {
        return this.$store.commit('createNotification', {
          time: Date.now(),
          type: 'error',
          text: e.message
        })
      }
      return this.$store.commit('createNotification', {
        time: Date.now(),
        type: 'success',
        text: 'Configuration saved!'
      })
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
