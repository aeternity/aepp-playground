<template>
  <div id="aepp" class="aepp-container">
    <div class="aepp-sidebar">
      <aepp-header />
      <div class="aepp-sidebar-tools">
        <aepp-nav />
        <aepp-log />
      </div>
    </div>
    <div class="aepp-views">
      <aepp-instance />
    </div>
  </div>
</template>
<script>
import AeppHeader from '../sections/aepp-header'
import AeppNav from '../sections/aepp-nav'
import AeppLog from '../sections/aepp-log'
import AeppInstance from '../sections/aepp-instance'

export default {
  name: 'aepp-playground',
  components: {
    AeppHeader,
    AeppNav,
    AeppLog,
    AeppInstance
  }
}
</script>
<style lang="scss" scoped>
.aepp-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.aepp-sidebar {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 440px;
}

.aepp-sidebar-tools {
  display: flex;
  height: 100%;
}

.aepp-views {
  display: flex;
}
</style>
