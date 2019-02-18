<template>
  <div>
    <label for="address">address</label>
    <input id="address" type="text" v-model="address">
    <button @click="createAccount(address)">Add Account</button>
    <ul>
      <li v-for="(account, index) in accounts" :key="index">
        {{ account }}
        <button @click="topUpAccount(account.address)">Top Up</button>
        <button @click="deleteAccount(account.address)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import MemoryAccount from '@aeternity/aepp-sdk/es/account/memory'

export default {
  name: 'aepp-accounts',
  data: () => ({ address: '' }),
  computed: mapState(['accounts']),
  methods: {
    async topUpAccount(address) {
      const response = await this.$store.dispatch('postFaucet', address)
      console.log(response)
    },
    createAccount(address) {
      this.$store.commit('createAccount', {
        address: address,
        keypair: {},
        endpoint: 'https://edgenet.aeternity.com',
      })
    },
    deleteAccount(address) {
      this.$store.commit('deleteAccount', address)
    }
  },
  mounted() {
    this.accounts.forEach((account) => {
      this.$wallet().create(account.address, {
        networkId: account.networkId,
        url: account.url,
        accounts: [MemoryAccount({ keypair: account.keypair })]
      })
    })
  }
}
</script>
<style lang="scss" scoped></style>
