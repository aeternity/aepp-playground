<template>
  <aepp-views class="aepp-editor">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="grid" />
        identity.aes
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <div class="aepp-editor-monaco" ref="monaco"></div>
    <aepp-collapse>
      <template slot="bar">
        Console
      </template>
      <h1>Hello world</h1>
      <h1>Hello world</h1>
    </aepp-collapse>
    <div class="aepp-editor-settings">
      <aepp-button extend="">Compile Contract</aepp-button>
    </div>
  </aepp-views>
</template>
<script>
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired
import * as monaco from 'monaco-editor'

import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppButton from '../../components/aepp-button'
import AeppCollapse from '../../components/aepp-collapse'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'editor',
  components: {
    AeIcon,
    AeppButton,
    AeppCollapse,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  },
  mounted() {
    monaco.editor.defineTheme('aeternity-dark', {
      inherit: true,
      base: 'vs-dark',
      rules: [{ background: '#343746' }],
      colors: {
        'editor.foreground': '#282A36',
        'editor.background': '#282A36',
        'editor.lineHighlightBackground': '#343746',
        'editorLineNumber.foreground': '#343746',
      }
    });

    return monaco.editor.create(this.$refs.monaco, {
      value: require('!raw-loader!./identity.aes'),
      language: 'javascript',
      theme: "aeternity-dark",
    });
  }
}
</script>
<style lang="scss" scoped>
.aepp-editor {}

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
  @apply flex-no-shrink;
  @apply flex-no-grow;
  @apply p-3;

  background: #343746;
  height: 71px;
}
</style>
