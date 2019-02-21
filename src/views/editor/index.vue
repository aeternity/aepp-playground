<template>
  <aepp-views class="aepp-editor">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="aeternity" />
        Contracts Editor
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <div class="aepp-editor-monaco" ref="monaco"></div>
  </aepp-views>
</template>
<script>
// or import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
// if shipping only a subset of the features & languages is desired
import * as monaco from 'monaco-editor'

import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'editor',
  components: {
    AeIcon,
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
</style>
