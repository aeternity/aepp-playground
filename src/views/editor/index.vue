<template>
  <aepp-views class="aepp-editor">
    <aepp-toolbar>
      <aepp-toolbar-tab to="#">
        <ae-icon name="grid"/>
        identity.aes
      </aepp-toolbar-tab>
    </aepp-toolbar>
    <div class="aepp-editor-container">
      <aepp-views>
        <aepp-editor
          @init="(e) => this.editor = e"
          :value="require('!raw-loader!../../assets/templates/identity.aes')"
        />
        <aepp-collapse>
          <template slot="bar">
            Console
          </template>
          <code class="aepp-editor-console">
            {{ this.result.bytecode }}
          </code>
        </aepp-collapse>
        <div class="aepp-editor-settings">
          <aepp-select class="w-5/6 mr-2" label="Compiler Version">
            <option value="1.0.2">Roma v1.0.2</option>
            <option value="1.0.1">Roma v1.0.1</option>
            <option value="1.0.0">Roma v1.0.0</option>
          </aepp-select>
          <aepp-button @click.native="compile" class="w-1/6">
            Compile Contract
          </aepp-button>
        </div>
      </aepp-views>
      <aepp-sidebar>
        <aepp-accordion>
          <aepp-collapse opened>
            <template slot="bar">
              Configs Details
            </template>
            <form class="pl-2 pr-2 pb-2">
              <aepp-input class="mb-2" label="Private Key" :value="getAccountPrivateKey" readonly />
              <aepp-input class="mb-2" label="Public Key" :value="getAccountPublicKey" readonly />
              <aepp-input class="mb-2" label="Internal URL" :value="getNodeInternalUrl" readonly/>
              <aepp-input class="mb-2" label="URL" :value="getNodeUrl" readonly/>
              <aepp-input class="mb-2" label="Network ID" :value="getNodeNetworkId" readonly/>
            </form>
          </aepp-collapse>
          <aepp-collapse>
            <template slot="bar">
              Deploy Contract
            </template>
            <form class="pl-2 pr-2 pb-2">
              <aepp-textarea class="mb-2" label="Byte Code" :value="result.bytecode" readonly/>
              <aepp-input class="mb-2" label="Function" />
              <aepp-input class="mb-2" label="Arguments" />
              <aepp-input class="mb-2" label="Deposit" />
              <aepp-input class="mb-2" label="Gas Price" />
              <aepp-input class="mb-2" label="Amount" />
              <aepp-input class="mb-2" label="Fee" />
              <aepp-input class="mb-2" label="Gas Limit" />
              <aepp-button type="submit" extend>Deploy</aepp-button>
            </form>
          </aepp-collapse>
        </aepp-accordion>
      </aepp-sidebar>
    </div>
  </aepp-views>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import MemoryAccount from '@aeternity/aepp-sdk/es/account/memory'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

import AeppAccordion from '../../components/aepp-accordion'
import AeppButton from '../../components/aepp-button'
import AeppCollapse from '../../components/aepp-collapse'
import AeppEditor from '../../components/aepp-editor'
import AeppInput from '../../components/aepp-input'
import AeppSelect from '../../components/aepp-select'
import AeppTextarea from '../../components/aepp-textarea'

import AeppSidebar from '../../sections/aepp-sidebar'
import AeppToolbar from '../../sections/aepp-toolbar'
import AeppToolbarTab from '../../sections/aepp-toolbar-tab'
import AeppViews from '../../sections/aepp-views'

export default {
  name: 'editor',
  data: function () {
    return {
      client: null,
      editor: null,
      result: {
        bytecode: null
      }
    }
  },
  components: {
    AeIcon,
    AeppAccordion,
    AeppButton,
    AeppCollapse,
    AeppEditor,
    AeppInput,
    AeppSelect,
    AeppTextarea,
    AeppSidebar,
    AeppToolbar,
    AeppToolbarTab,
    AeppViews
  },
  computed: {
    ...mapState(['configs']),
    ...mapGetters([
      'getAccountAddress',
      'getAccountPrivateKey',
      'getAccountPublicKey',
      'getAccountKeyPair',
      'getNodeUrl',
      'getNodeInternalUrl',
      'getNodeNetworkId'
    ]),
  },
  methods: {
    /**
     * Function to compile Contract code
     * returns byteCode from contract
     * @return {String}
     */
    async compile() {
      console.log('hu')
      try {
        Object.assign(this.result, await this.client.contractCompile(this.editor.getValue()))
      } catch (e) {
        return this
        .$store
        .commit('createNotification', {
          time: Date.now(),
          type: 'error',
          text: e.message
        })
      }
    },

    /**
     * Deploys smart contract to the blockchain
     * @param initState {String}
     * @param byteCode {String}
     * @param options {Object}
     * @return {Promise<*>}
     */
    async deploy(initState, byteCode, options = {}) {
      initState = initState ? `(${initState})` : '()'
      try {
        return this.client.contractDeploy(byteCode, 'sophia', {
          initState,
          options
        })
      } catch (e) {
        return this.$store.commit('createNotification', {
          time: Date.now(),
          type: 'error',
          text: e.message
        })
      }
    }
  },
  async mounted() {
    try {
      this.client = await this.$wallet().create(this.getAccountAddress, {
        url: this.getNodeUrl,
        internalUrl: this.getNodeInternalUrl,
        address: this.getAccountAddress,
        accounts: [MemoryAccount({
          keypair: this.getAccountKeyPair
        })],
        onChain: true,
        onTx: true,
        onAccount: true
      })
    } catch (e) {
      return this.$store.commit('createNotification', {
        time: Date.now(),
        type: 'error',
        text: e.message
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.aepp-editor {}

.aepp-editor-container {
  @apply flex;
  @apply flex-auto;
  @apply flex-no-grow;
  @apply flex-shrink;
  @apply w-full;
  @apply h-full;
}

.aepp-editor-container > .aepp-views {
  border-right: 1px solid #191A21;
}

.aepp-editor-container > .aepp-sidebar {
  min-width: 20%;
  background: #343746;
}

.aepp-editor-monaco {
  @apply flex-auto;
  @apply flex-no-grow;
  @apply flex-shrink;
  @apply w-full;
  @apply h-full;
  @apply overflow-hidden;
}

.aepp-editor-console {
  // TODO: this does not work
  @apply flex;
  @apply flex-auto;
  @apply flex-shrink;
  @apply flex-grow;
  @apply text-white;
  @apply bg-black;
  @apply whitespace-pre-wrap;
  @apply break-words;
  @apply p-3;
  @apply w-full;
  @apply overflow-hidden;

  overflow-wrap: break-word;
}

.aepp-editor-settings {
  @apply flex;
  @apply justify-between;
  @apply flex-no-shrink;
  @apply flex-no-grow;
  @apply p-2;

  background: #343746;
  border-top: 1px;
  border-style: solid;
  border-color: #191A21;
  height: 72px;
}
</style>
