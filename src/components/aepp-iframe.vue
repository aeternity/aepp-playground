<template>
  <div class="aepp-iframe">
    <div class="aepp-iframe-header">
      <div class="aepp-iframe-input">
        <input v-model="url" type="text" placeholder="https://aepps.com" />
        <button class="aepp-iframe-button">
          <ae-icon name="reload" />
        </button>
      </div>
      <button class="aepp-iframe-button">
        <ae-icon name="settings" />
      </button>
    </div>
    <div class="aepp-iframe-container">
      <iframe :src="url"></iframe>
    </div>
  </div>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

export default {
  name: 'aepp-iframe',
  components: {
    AeIcon
  },
  data: function () {
    return { url: 'https://aepps.com' };
  }
}
</script>
<style lang="scss" scoped>
.aepp-iframe {
  display: flex;
  flex-direction: column;
  background: #EDF3F7;
  border-radius: 5px;
  width: 376px;
  height: 660px;
  overflow: hidden;
}

.aepp-iframe-header {
  display: flex;
  flex: 0 0 52px;
  padding: 10px;
}

.aepp-iframe-input {
  display: flex;
  flex: 1 1 100%;
  justify-content: space-between;
  background: $color-white;
  border-radius: 16px;
  overflow: hidden;
}

.aepp-iframe-input > input {
  font-family: $font-sans;
  font-size: rem(16px);
  color: #4E5A66;
  width: 100%;
  background: none;
  border: none;
  height: 32px;
  padding-left: 10px;

  &::placeholder {
    color: #929CA6;
  }
}

.aepp-iframe-button {
  transition: 0.2s all;
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0 10px;

  &:hover, &:focus {
    opacity: 0.8;
  }
}

.aepp-iframe-container {
  flex: 0 1 100%;
}

.aepp-iframe-container > iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
