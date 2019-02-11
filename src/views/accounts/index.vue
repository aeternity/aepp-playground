<template>
  <div>
    <button @click="createAccount">Add Account</button>
    <ul>
      <li v-for="(account, index) in accounts" :key="index">
        {{ account }}
        <button @click="deleteAccount(account.address)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'aepp-index',
  computed: mapState(['accounts']),
  methods: {
    createAccount() {
      this.$store.commit('createAccount', {
        address: `address ${this.accounts.length}`,
        keypair: {},
        endpoint: 'https://edgenet.aeternity.com'
      })
    },
    deleteAccount(address) {
      this.$store.commit('deleteAccount', address)
    }
  }
}
</script>
<style lang="scss" scoped></style>
