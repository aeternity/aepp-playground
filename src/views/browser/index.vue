<template>
  <aepp-views class="aepp-browser">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="globe"/>
        aepp.dronegraffiti.com
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <aepp-window/>
  </aepp-views>
</template>
<script>
import { mapGetters } from 'vuex'
import MemoryAccount from '@aeternity/aepp-sdk/es/account/memory'
import { Universal } from '@aeternity/aepp-sdk'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'
import AeppWindow from '../../sections/aepp-window'

export default {
  name: 'browser',
  data: function () {
    return { client: null }
  },
  components: {
    AeIcon,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews,
    AeppWindow
  },
  computed: {
    ...mapGetters([
      'getAccountAddress',
      'getAccountKeyPair',
      'getNodeUrl',
      'getNodeInternalUrl'
    ]),
  },
  mounted() {
    console.log('mounted')
    const keypair = {
      secretKey: this.getAccountKeyPair.privateKey,
      publicKey: this.getAccountKeyPair.publicKey
    };
    this.client = Universal({
      url: this.getNodeUrl,
      internalUrl: this.getNodeInternalUrl,
      accounts: [MemoryAccount({ keypair })],
      address: this.getAccountAddress,
      onChain: (method, params, {id}) => {
        console.log('onChain', method, params, {id})
        return Promise.resolve(window.confirm(`User ${id} wants to run ${method} ${params}`))
      },
      onTx: (method, params, {id}) => {
        console.log('onTx', method, params, {id})
        return Promise.resolve(window.confirm(`User ${id} wants to run ${method} ${params}`))
      },
      onAccount: (method, params, {id}) => {
        console.log('onAccount', method, params, {id})
        return Promise.resolve(window.confirm(`User ${id} wants to run ${method} ${params}`))
      },
      onContract: (method, params, {id}) => {
        console.log('onContract', method, params, {id})
        return Promise.resolve(window.confirm(`User ${id} wants to run ${method} ${params}`))
      }
    });
  },
  beforeRouteLeave (to, from, next) {
    this.client = null;
    return next();
  }
}
</script>
<style lang="scss" scoped>
.aepp-browser {}
</style>
