<template>
  <ul class="aepp-nav-list">
    <slot />
  </ul>
</template>
<script>
export default {
  name: 'aepp-nav-list'
}
</script>
<style lang="scss" scoped>
.aepp-nav-list {
  padding: 0;
  margin: 0;

  > li {
    list-style: none;
  }

  &:last-child > li:first-child {
    border-top: 1px solid #191A21;
  }
  &:last-child > li:last-child {
    border-bottom: none;
  }
}

.aepp-nav-list > li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 81px;
  border-bottom: 1px solid #191A21;
  color: #929CA6;
}

.aepp-nav-list > li > a,
.aepp-nav-list > li > button {
  transition: all 0.2s;
  color: inherit;
  border: 0;
  background: none;
  padding: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover,
  &:focus,
  &.active {
    background: #282A36;
    box-shadow: inset 3px 0 0 #FF0D6A;
  }
}

.aepp-nav-list > li > a {
  text-decoration: none;

  &:hover,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
}
</style>
