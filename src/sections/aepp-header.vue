<template>
  <div class="aepp-header">
    <img class="aepp-header-logo" :src="require('../assets/logo.svg')" alt="Aepp Playground">
    <h1 class="aepp-header-name">
      Playground
    </h1>
  </div>
</template>
<script>
export default {
  name: 'aepp-header'
}
</script>
<style lang="scss" scoped>
.aepp-header {
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 14px;
  background: #191A21;
}

.aepp-header-logo {
  width: 48px;
  margin-right: 14px;
}

.aepp-header-name {
  font-size: rem(24px);
  font-family: $font-sans;
  color: #4E5A66;
}
</style>
