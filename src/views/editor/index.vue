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
        <aepp-editor :value="require('!raw-loader!./identity.aes')"/>
        <aepp-collapse>
          <template slot="bar">
            Console
          </template>
          <div class="p-3">
            <h1>Hello world</h1>
            <h1>Hello world</h1>
          </div>
        </aepp-collapse>
        <div class="aepp-editor-settings">
          <aepp-select class="w-5/6 mr-2" label="Compiler Version">
            <option value="1.0.2">Roma v1.0.2</option>
            <option value="1.0.1">Roma v1.0.1</option>
            <option value="1.0.0">Roma v1.0.0</option>
          </aepp-select>
          <aepp-button class="w-1/6">
            Compile Contract
          </aepp-button>
        </div>
      </aepp-views>
      <aepp-sidebar>
        <aepp-collapse opened>
          <template slot="bar">
            Contract Info
          </template>
          <div class="pl-2 pr-2 pb-2">
            <aepp-input class="mb-2" label="Host" placeholder="//sdk-testnet.aepps.com/"/>
            <aepp-input class="mb-2" label="Private Key" placeholder="a7a695f999b1872acb13d5b63a830a8ee060ba688a478a08c6e" />
            <aepp-input class="mb-2" label="Public Key" placeholder="ak_6A2vcm1Sz6aqJezkLCssUXcyZTX7X8D5UwbuS2fRJr9KkYpRU" />
            <aepp-button extend>Save Changes</aepp-button>
          </div>
        </aepp-collapse>
        <aepp-collapse>
          <template slot="bar">
            Deploy Contract
          </template>
          <div class="pl-2 pr-2 pb-2">
            <aepp-textarea class="mb-2" label="Byte Code" readonly/>
            <aepp-input class="mb-2" label="Function" />
            <aepp-input class="mb-2" label="Arguments" />
            <aepp-input class="mb-2" label="Deposit" />
            <aepp-input class="mb-2" label="Gas Price" />
            <aepp-input class="mb-2" label="Amount" />
            <aepp-input class="mb-2" label="Fee" />
            <aepp-input class="mb-2" label="Gas Limit" />
            <aepp-button extend>Deploy</aepp-button>
          </div>
        </aepp-collapse>
        <aepp-collapse>
          <template slot="bar">
            Call Static Function
          </template>
          <div class="pl-2 pr-2 pb-2">
            <aepp-input class="mb-2" label="Function" />
            <aepp-input class="mb-2" label="Arguments" />
            <aepp-input class="mb-2" label="Return Type" />
            <aepp-button extend>Call Static</aepp-button>
          </div>
        </aepp-collapse>
        <aepp-collapse>
          <template slot="bar">
            Call Function
          </template>
          <div class="pl-2 pr-2 pb-2">
            <aepp-input class="mb-2" label="Function" />
            <aepp-input class="mb-2" label="Arguments" />
            <aepp-input class="mb-2" label="Return Type" />
            <aepp-input class="mb-2" label="Deposit" />
            <aepp-input class="mb-2" label="Gas Price" />
            <aepp-input class="mb-2" label="Amount" />
            <aepp-input class="mb-2" label="Fee" />
            <aepp-input class="mb-2" label="Gas Limit" />
            <aepp-button extend>Call Function</aepp-button>
          </div>
        </aepp-collapse>
      </aepp-sidebar>
    </div>
  </aepp-views>
</template>
<script>
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'

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
      account: {
        internalUrl: null,
        url: null,
        keypair: {
          privateKey: null,
          publicKey: null
        }
      }
    }
  },
  components: {
    AeIcon,
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
  methods: {
    /**
     * Function to compile Contract code
     * returns byteCode from contract
     * @param code {String}
     * @return {String}
     */
    async compile(code) {
      try {
        return await this.client.contractCompile(code)
      } catch (e) {
        return this
        .$store
        .dispatch('createNotification', {
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
        return this.$store.dispatch('createNotification', {
          time: Date.now(),
          type: 'error',
          text: e.message
        })
      }
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
