<template>
  <ul class="aepp-nav-list">
    <slot/>
  </ul>
</template>
<script>
export default {
  name: 'aepp-nav-list'
}
</script>
<style lang="scss" scoped>
.aepp-nav-list {
  @apply list-reset;

  &:last-child > li:first-child {
    border-top: 1px solid #191A21;
  }

  &:last-child > li:last-child {
    border-bottom: none;
  }
}

.aepp-nav-list > li {
  @apply flex;
  @apply justify-center;
  @apply items-center;

  height: 72px;
  border-bottom: 1px solid #191A21;
  color: #76818C;
}

.aepp-nav-list > li /deep/ > a,
.aepp-nav-list > li /deep/ > button {
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply items-center;
  @apply cursor-pointer;
  @apply p-0;
  @apply w-full;
  @apply h-full;
  @apply border-0;

  background: none;
  color: #76818C;
  transition: all 0.2s;

  &.active,
  &:hover,
  &:focus {
    @apply text-white;

    background: #282A36;
    box-shadow: inset 3px 0 0 #FF0D6A;
  }

  > span {
    @apply font-sans;
    @apply leading-loose;

    font-size: rem(10px);
    color: inherit;
  }

  > .ae-icon {
    @apply text-2xl;

    color: inherit;
  }

}

.aepp-nav-list > li /deep/ > a {
  @apply no-underline;

  &:hover,
  &:focus {
    @apply no-underline;
  }

  &:visited {
    color: #76818C;
  }
}
</style>
