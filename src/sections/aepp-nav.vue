<template>
  <nav>
    <ul>
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
  width: 72px;
  background: #343746;
}
</style>
