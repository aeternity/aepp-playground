<template>
  <aepp-views class="aepp-configs">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="aeternity" />
        configs.yml
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <div class="aepp-editor-monaco" ref="monaco"></div>
  </aepp-views>
</template>
<script>
import { mapState } from 'vuex'

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
  },
  computed: {
    ...mapState(['configs'])
  },
  mounted() {
    this.$editor.create(this.$refs.monaco, {
      value: JSON.stringify(this.configs),
      language: 'javascript',
      theme: 'aeternity-dark'
    })
  }
}
</script>
<style lang="scss" scoped>
.aepp-configs {}

.aepp-editor-monaco {
  @apply flex-auto;
  @apply flex-no-grow;
  @apply flex-shrink;
  @apply w-full;
  @apply h-full;
  @apply overflow-hidden;
}
</style>
