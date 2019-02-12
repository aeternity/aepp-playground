<template>
  <span class="aepp-emojis">
    {{ emoji }}
  </span>
</template>
<script>
import emojis from 'emojis-list';

export default {
  name: 'aepp-emoji',
  props: {
    index: Number
  },
  computed: {
    emoji() {
      return emojis[this.index || 0]
    }
  }
}
</script>
<style lang="scss" scoped>
.aepp-emojis {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #191A21;
  font-size: 25px;
}
</style>
