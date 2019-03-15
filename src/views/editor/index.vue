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
        <!-- TODO: Work on the console -->
        <aepp-collapse v-if="false">
          <template slot="bar">
            Console
          </template>
          <code class="aepp-editor-console">
            {{ this.compiled }}
          </code>
        </aepp-collapse>
        <div class="aepp-editor-settings">
          <aepp-select class="w-5/6 mr-2" style="display: none; visibility: hidden;" label="Compiler Version">
            <option value="1.0.2">Roma v1.0.2</option>
            <option value="1.0.1">Roma v1.0.1</option>
            <option value="1.0.0">Roma v1.0.0</option>
          </aepp-select>
          <aepp-button class="w-full" @click.native="compile(editor.getValue())" :disabled="$wait.is('compiling')">
            <template v-if="$wait.is('compiling')">
              Compiling...
            </template>
            <template v-else>
              Compile Contract
            </template>
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
              <aepp-input class="mb-2" label="Private Key" :value="getAccountSecretKey" readonly/>
              <aepp-input class="mb-2" label="Public Key" :value="getAccountPublicKey" readonly/>
              <aepp-input class="mb-2" label="Internal URL" :value="getNodeInternalUrl" readonly/>
              <aepp-input class="mb-2" label="URL" :value="getNodeUrl" readonly/>
              <aepp-input class="mb-2" label="Network ID" :value="getNodeNetworkId" readonly/>
            </form>
          </aepp-collapse>
          <aepp-collapse v-if="compiled.bytecode">
            <template slot="bar">
              Deploy Contract
            </template>
            <form @submit.prevent="deploy" class="pl-2 pr-2 pb-2">
              <aepp-textarea
                class="mb-2"
                label="Byte Code"
                :value="compiled.bytecode"
                readonly
              />
              <aepp-input
                class="mb-2"
                label="Deposit"
                type="number"
                min="0"
                placeholder="Deposit"
                v-model.number="deployConfig.deposit"
              />
              <aepp-input
                class="mb-2"
                label="Gas Price"
                type="number"
                min="1000000"
                placeholder="Gas Price"
                v-model.number="deployConfig.gasPrice"
              />
              <aepp-input
                class="mb-2"
                label="Amount"
                type="number"
                min="0"
                placeholder="Amount"
                v-model.number="deployConfig.amount"
              />
              <aepp-input
                class="mb-2"
                label="Fee"
                type="number"
                placeholder="Auto"
                v-model.number="deployConfig.fee"
              />
              <aepp-input
                class="mb-2"
                label="Gas Limit"
                type="number"
                min="0"
                placeholder="Gas"
                v-model.number="deployConfig.gas"
              />

              <!-- Hidden Input Field -->
              <input
                type="hidden"
                value="callData"
                v-model="deployConfig.callData"
              />
              <aepp-button type="submit" :disabled="$wait.is('deploying')" extend>
                <template v-if="$wait.is('deploying')">
                  Deploying...
                </template>
                <template v-else>
                  Deploy
                </template>
              </aepp-button>
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
import Wallet from '@aeternity/aepp-sdk/es/ae/wallet'
import Contract from '@aeternity/aepp-sdk/es/ae/contract'
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
      /**
       * Instances of business logic
       *
       * - client: aepp-sdk-js instance
       * - editor: monaco editor instance
       */
      client: null,
      editor: null,

      /**
       * Deploy configuration
       */
      deployConfig: {
        deposit: 0,
        gasPrice: 1000000000,
        amount: 0,
        fee: null, // sdk will automatically select this
        gas: 1000000,
        callData: ''
      },

      /**
       * Compile Placeholders
       */
      compiled: {
        bytecode: null
      },

      /**
       * After deployed
       */
      deployed: {}
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
      'getAccountSecretKey',
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
     * returns byteCode from contract.
     *
     * @param code {String}
     * @return {String}
     */
    async compile(code) {
      /**
       * Start Vue Wait loading
       */
      this.$wait.start('compiling')

      try {
        Object.assign(this.compiled, await this.client.contractCompile(code))

        /**
         * End load waiting after completion
         */
        this.$wait.end('compiling')
      } catch (e) {
        this.$wait.end('compiling')
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
     * Deploys smart contract to the blockchain.
     *
     * @return {Promise<*>}
     */
    async deploy() {
      /**
       * Check if deploy function is available
       */
      if (typeof this.compiled.deploy !== 'function') {
        return this.$store.commit('createNotification', {
          time: Date.now(),
          type: 'error',
          text: 'You dont seem to have compiled the contract, please try again...'
        })
      }

      /**
       * Start Vue Wait loading
       */
      this.$wait.start('deploying')

      /**
       * Through the compiled contract code
       * add the ability to deploy the contract
       *
       * - Deploy the contract
       * - Assign its response to `$data.deployed`
       * - Reset deploy configuration
       * - Catch any errors
       */
      try {
        return this
        .compiled
        .deploy(Object.assign(this.deployConfig, {
          owner: this.getAccountAddress,
          code: this.editor.getValue()
        }))
        .then((deployed) => {
          /**
           * Return deployed contract details
           */
          Object.assign(this.deployed, deployed)

          /**
           * Reset to defaultConfigs. Reasoning behind this
           * is that, when we callFunctions/Deploy we want to
           * input different arguments etc...
           *
           * TODO: Maybe not a good idea?
           */
          Object.assign(this.deployConfig, {
            deposit: 0,
            gasPrice: 1000000000,
            amount: 0,
            fee: null,
            gas: 1000000,
            callData: ''
          })

          /**
           * Notify user contract has deployed
           */
          this.$store.commit('createNotification', {
            time: Date.now(),
            type: 'success',
            text: `Contract: ${deployed.address} has been deployed!`
          })

          /**
           * End load waiting after completion
           */
          this.$wait.end('deploying')
        })
      } catch (e) {
        this.$wait.end('deploying')
        return this.$store.commit('createNotification', {
          time: Date.now(),
          type: 'error',
          text: e.message
        })
      }
    }
  },

  /**
   * When the component is mounted
   * go and create a client instance of
   * the SDK.
   *
   * @return {Promise<void>}
   */
  async mounted() {
    try {
      this.client = await Wallet.compose(Contract)({
        url: this.getNodeUrl,
        internalUrl: this.getNodeInternalUrl,
        accounts: [MemoryAccount({ keypair: this.getAccountKeyPair })],
        address: this.getAccountAddress,
        onChain: (method, params, {id}) => {
          console.log('onChain', method, params, {id})
          return Promise.resolve(window.confirm(`User ${id} wants to run ${method} ${params}`))
        },
        onTx: (method, params, {id}) => {
          console.log('onTx', method, params, {id})
          return Promise.resolve(window.confirm(`User ${id} wants to run ${method} ${params}`))
        },
        onAccount: (method, params, {id}) => {
          console.log('onAccount', method, params, {id})
          return Promise.resolve(window.confirm(`User ${id} wants to run ${method} ${params}`))
        },
        onContract: (method, params, {id}) => {
          console.log('onContract', method, params, {id})
          return Promise.resolve(window.confirm(`User ${id} wants to run ${method} ${params}`))
        }
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
