<template>
  <div>
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
.aepp-log {}
</style>
