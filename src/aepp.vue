<template>
  <div id="aepp" class="aepp-container">
    <!-- Notifications -->
    <aepp-notification :type="n.type" visible v-for="(n, i) in notifications" :key="i">
      {{ n.text }}
      <button type="button" class="text-white" @click="deleteNotification(i)">
        <ae-icon name="close"/>
      </button>
    </aepp-notification>

    <!-- Sidebar Container -->
    <aepp-sidebar>
      <!-- Aeternity logo -->
      <aepp-header/>

      <!-- Navigation menu -->
      <aepp-nav>
        <aepp-nav-list>
          <li>
            <router-link :to="{ name: 'views/editor' }">
              <ae-icon name="edit"/>
              <span>Editor</span>
            </router-link>
          </li>
          <!-- TODO: Executor Functionality -->
          <li v-if="false">
            <router-link :to="{ name: 'views/executor' }">
              <ae-icon name="active"/>
              <span>Executor</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'views/browser' }">
              <ae-icon name="globe"/>
              <span>Browser</span>
            </router-link>
          </li>

          <!-- TODO: Inspector Functionality -->
          <li v-if="false">
            <router-link :to="{ name: 'views/inspector' }">
              <ae-icon name="search"/>
              <span>Inspector</span>
            </router-link>
          </li>
          <!-- TODO: Explorer Functionality -->
          <li v-if="false">
            <router-link :to="{ name: 'views/explorer' }">
              <ae-icon name="grid"/>
              <span>Explorer</span>
            </router-link>
          </li>
        </aepp-nav-list>
        <aepp-nav-list>
          <li>
            <router-link :to="{ name: 'views/configs' }">
              <ae-icon name="filter"/>
              <span>Configs</span>
            </router-link>
          </li>
        </aepp-nav-list>
      </aepp-nav>
    </aepp-sidebar>

    <!-- Render Main Views -->
    <router-view/>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

import AeIcon from '@aeternity/aepp-components-3/dist/ae-icon'

import AeppNotification from './components/aepp-notification'

import AeppHeader from './sections/aepp-header'
import AeppNav from './sections/aepp-nav'
import AeppNavList from './sections/aepp-nav-list'
import AeppSidebar from './sections/aepp-sidebar'

export default {
  name: 'aepp',
  components: {
    AeIcon,
    AeppNotification,
    AeppHeader,
    AeppNav,
    AeppNavList,
    AeppSidebar
  },
  computed: {
    ...mapState(['notifications'])
  },
  methods: {
    ...mapMutations(['deleteNotification'])
  }
}
</script>
<style lang="scss" scoped>
.aepp-container {
  @apply flex;
  @apply w-full;
  @apply h-full;

  min-width: 1024px;
}
</style>
