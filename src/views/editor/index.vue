<template>
  <aepp-views class="aepp-editor">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="grid"/>
        identity.aes
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <aepp-editor :value="require('!raw-loader!./identity.aes')"/>
    <aepp-collapse>
      <template slot="bar">
        Console
      </template>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
    </aepp-collapse>
    <div class="aepp-editor-settings">
      <aepp-select class="w-5/6 mr-2" label="Compiler Version">
        <option value="1.0.2">Roma v1.0.2</option>
        <option value="1.0.1">Roma v1.0.1</option>
        <option value="1.0.0">Roma v1.0.0</option>
      </aepp-select>
      <aepp-button class="w-1/6">
        Compile Contract
      </aepp-button>
    </div>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppButton from '../../components/aepp-button'
import AeppCollapse from '../../components/aepp-collapse'
import AeppEditor from '../../components/aepp-editor'
import AeppSelect from '../../components/aepp-select'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'editor',
  components: {
    AeIcon,
    AeppButton,
    AeppCollapse,
    AeppEditor,
    AeppSelect,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  }
}
</script>
<style lang="scss" scoped>
.aepp-editor {
}

.aepp-editor-monaco {
  @apply flex-auto;
  @apply flex-no-grow;
  @apply flex-shrink;
  @apply w-full;
  @apply h-full;
  @apply overflow-hidden;
}

.aepp-editor-settings {
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
