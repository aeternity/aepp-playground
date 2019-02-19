<template>
  <div class="aepp-log">
    <aepp-code v-for="guard in guards" :input="guard" />
  </div>
</template>
<script>
import { mapState } from 'vuex'

import AeppCode from '../components/aepp-code'

export default {
  name: 'aepp-log',
  components: {
    AeppCode
  },
  computed: mapState(['guards'])
}
</script>
<style lang="scss" scoped>
.aepp-log {
  width: 100%;
  padding: 0 10px;
  overflow: auto;
}
</style>
