<template>
  <div class="aepp-window">
    <div class="aepp-window-header">
      <span>Hello</span>
    </div>
    <div class="aepp-window-container">
      <aepp-iframe />
    </div>
  </div>
</template>
<script>
import AeppIframe from '../components/aepp-iframe'

export default {
  name: 'aepp-window',
  components: {
    AeppIframe
  }
}
</script>
<style lang="scss" scoped>
.aepp-window {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #282A36;
  border-left: 1px solid #191A21;
}

.aepp-window-header {
  flex: 0 0 auto;
  height: 72px;
  border-bottom: 1px solid #191A21;
}

.aepp-window-container {
  display: flex;
  flex: 0 1 100%;
  justify-content: center;
  align-items: center;
}
</style>
