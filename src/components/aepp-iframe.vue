<template>
  <div class="aepp-iframe">
    <div class="aepp-iframe-header">
      <div class="aepp-iframe-input">
        <input v-model="url" type="text" placeholder="https://aepps.com"/>
        <button class="aepp-iframe-button">
          <ae-icon name="reload"/>
        </button>
      </div>
      <button class="aepp-iframe-button">
        <ae-icon name="settings"/>
      </button>
    </div>
    <div class="aepp-iframe-container">
      <iframe :src="url" :sandbox="sandbox.join(' ')"></iframe>
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
    return {
      url: 'http://aepp.dronegraffiti.com',
      sandbox: [
        'allow-forms',
        'allow-same-origin',
        'allow-scripts'
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.aepp-iframe {
  @apply flex;
  @apply flex-col;
  @apply bg-neutral-positive-2;
  @apply rounded;
  @apply overflow-hidden;

  height: 85%;
  width: 85%;
}

.aepp-iframe-header {
  @apply flex;
  @apply flex-auto;
  @apply flex-no-shrink;
  @apply flex-no-grow;
  @apply p-3;
}

.aepp-iframe-input {
  @apply flex;
  @apply flex-shrink;
  @apply flex-grow;
  @apply flex-auto;
  @apply justify-between;
  @apply bg-white;
  @apply overflow-hidden;

  border-radius: 16px;
  height: 32px;
}

.aepp-iframe-input > input {
  @apply font-sans;
  @apply text-base;
  @apply w-full;
  @apply text-neutral-negative-2;

  background: none;
  border: none;
  padding-left: 10px;

  &::placeholder {
    @apply text-neutral;
  }
}

.aepp-iframe-button {
  @apply cursor-pointer;

  background: none;
  padding: 0 10px;
  border: 0;
  transition: 0.2s all;

  &:hover, &:focus {
    opacity: 0.8;
  }
}

.aepp-iframe-container {
  @apply flex-no-grow;
  @apply flex-no-shrink;
  @apply flex-auto;
}

.aepp-iframe-container > iframe {
  @apply w-full;
  @apply h-full;
  @apply bg-white;

  border: 0;
}
</style>
