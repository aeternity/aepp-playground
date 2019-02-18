<template>
  <div class="aepp-code">
    <slot />
    <pre><code v-html="output"></code></pre>
  </div>
</template>
<script>
import jsonFormatHighlight from 'json-format-highlight'

export default {
  name: 'aepp-code',
  props: {
    input: {
      type: String,
      required: true
    },
  },
  computed: {
    output: function () {
      return jsonFormatHighlight(this.input);
    }
  }
}
</script>
<style lang="scss" scoped>
.aepp-code {}
</style>
