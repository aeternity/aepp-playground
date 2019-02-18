<template>
  <div class="aepp-log">
    <aepp-code input="{ hello: 'world', isThisTrue: true }" />
  </div>
</template>
<script>
import AeppCode from '../components/aepp-code'

export default {
  name: 'aepp-log',
  components: {
    AeppCode
  }
}
</script>
<style lang="scss" scoped>
.aepp-log {
  width: 100%;
  padding: 0 10px;
  overflow: auto;
}
</style>
