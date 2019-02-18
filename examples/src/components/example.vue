<template>
  <div></div>
</template>
<script>
import Aepp from '@aeternity/aepp-sdk/es/ae/aepp'

export default {
  name: 'example',
  mounted() {
    Aepp().then(client => {
      client.height().then(height => {
        console.log('Current Block', height)
      })
    })
  }
}
</script>
<style scoped></style>
