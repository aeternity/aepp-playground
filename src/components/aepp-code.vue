<template>
  <div class="aepp-code">
    <slot />
    <pre><code>
      {
        "hello world"
      }
    </code></pre>
  </div>
</template>
<script>
export default {
  name: 'aepp-code',
}
</script>
<style lang="scss" scoped>
.aepp-code {}
</style>
