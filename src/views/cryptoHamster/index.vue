<template>
  <aepp-views class="aepp-crypto-hamster">
    <aepp-toolbar>
      <aepp-toolbar-tab to="cryoto-hamster">
        <ae-icon name="search"/>
        Crypto Hamster
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <h1>Crypto Hamster</h1>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components-3/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'cryptoHamster',
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  }
}
</script>
<style lang="scss" scoped>
.aepp-crypto-hamster {}
</style>
