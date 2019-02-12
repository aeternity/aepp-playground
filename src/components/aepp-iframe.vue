<template>
  <div class="aepp-iframe">
    <div>
      <input class="aepp-iframe-input" type="text" />
      <button class="aepp-iframe-button">
        <ae-icon name="gear" />
      </button>
    </div>
    <iframe src="#" frameborder="0" />
  </div>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'aepp-iframe',
  components: {
    AeIcon
  }
}
</script>
<style lang="scss" scoped>
.aepp-iframe {
  background: #EDF3F7;
  border-radius: 5px;
}

.aepp-iframe-input {

}

.aepp-iframe-button {

}
</style>
