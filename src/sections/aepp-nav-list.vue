<template>
  <ul class="aepp-nav-list">
    <li>Hello</li>
  </ul>
</template>
<script>
export default {
  name: 'aepp-nav-list',
}
</script>
<style lang="scss" scoped>
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
