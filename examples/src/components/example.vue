<template>
  <div>
    <h1>Example State Channel App</h1>
    BlockHeight: {{ blockHeight }}
    Balance: {{ balance }}
  </div>
</template>
<script>
import Aepp from '@aeternity/aepp-sdk/es/ae/aepp'

export default {
  name: 'example',
  data: function () {
    return { blockHeight: 0, balance: 0 }
  },
  created() {
    Aepp().then(client => {
      console.log('client: ', client)
      client.height().then(height => {
        this.blockHeight = height
      })
      client.balance().then((balance) => {
        this.balance = balance
      })
    })
  }
}
</script>
<style scoped></style>
