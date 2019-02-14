<template>
  <nav class="aepp-nav">
    <ul class="aepp-nav-list">
      <li>
        <button>
          <aepp-emoji index="100" />
        </button>
      </li>
      <li>
        <button>
          <aepp-emoji index="110" />
        </button>
      </li>
      <li>
        <button>
          <aepp-emoji index="120" />
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
import AeppEmoji from '../components/aepp-emoji'

export default {
  name: 'aepp-nav',
  components: {
    AeppEmoji
  }
}
</script>
<style lang="scss" scoped>
.aepp-nav {
  background: #282A36;
  border-right: 1px solid #191A21;
  width: 72px;
}

.aepp-nav-list {
  padding: 0;
  margin: 0;

  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    height: 86px;
    border-bottom: 1px solid #191A21;
  }
}
</style>
