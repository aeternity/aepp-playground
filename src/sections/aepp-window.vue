<template>
  <div class="aepp-window">
    <div class="aepp-window-header">
      <div class="aepp-window-header-account">
        <h3>ak_G2···P1e</h3>
      </div>
      <ul class="aepp-window-header-options">
        <li class="vertical-collapse">
          <div class="aepp-window-header-status on-chain">
            <span>On-chain</span>
            489.99AE
          </div>
          <div class="aepp-window-header-status off-chain">
            <span>On-channel</span>
            10.00AE
          </div>
        </li>
        <li>
          <button type="button" class="aepp-window-header-action">
            <ae-icon name="receive" />
            <span>Deposit</span>
          </button>
        </li>
        <li>
          <div class="aepp-window-header-action">
            <ae-icon name="share" />
            <span>Withdraw</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="aepp-window-container">
      <aepp-iframe />
    </div>
  </div>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppIframe from '../components/aepp-iframe'

export default {
  name: 'aepp-window',
  components: {
    AeIcon,
    AeppIframe
  }
}
</script>
<style lang="scss" scoped>
.aepp-window {
  @apply flex;
  @apply flex-col;
  @apply self-stretch;
  @apply flex-grow;
  @apply flex-shrink;
  @apply flex-auto;
  @apply w-full;
  @apply h-full;

  background: #282A36;
}

.aepp-window-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 0 0 auto;
  height: 72px;
  border-bottom: 1px solid #191A21;
}

.aepp-window-header-account {
  display: flex;
  padding: 0 16px;

  > h3 {
    align-self: center;
    padding: 0;
    margin: 0 0 0 16px;
    font-family: $font-mono;
    font-size: rem(14px);
    color: #929CA6;
  }
}

.aepp-window-header-action {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  margin: 0;
  padding: 0;
  border: 0;
  cursor: pointer;

  > span,
  > .ae-icon {
    color: #929CA6;
  }

  > span {
    display: block;
    font-family: $font-sans;
    font-size: rem(10px);
    margin: 4px 0 0 0;
  }

  > .ae-icon {
    font-size: rem(24px);
  }
}

.aepp-window-container {
  display: flex;
  flex: 0 1 100%;
  justify-content: center;
  align-items: center;
}

.aepp-window-header-options {
  display: flex;
  align-items: stretch;
  padding: 0;
  margin: 0;
  height: 100%;

  > li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    border-left: 1px solid #191A21;
  }

  > li.vertical-collapse {
    display: flex;
    flex-direction: column;
  }
}

.aepp-window-header-status {
  display: inline-flex;
  justify-content: space-between;
  font-size: rem(12px);
  font-family: $font-mono;
  color: $color-white;
  min-width: 140px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  &.on-chain > span,
  &.off-chain > span {
    font-size: rem(10px);
    font-family: $font-sans;
    font-weight: 600;
  }

  &.on-chain > span {
    color: $color-primary;
  }
  &.off-chain > span{
    color: $color-alternative;
  }
}
</style>
