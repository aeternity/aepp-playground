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
        <aepp-collapse @init="onTerminalOpen" @toggle="onTerminalOpen" name="terminal">
          <template slot="bar">
            Terminal
          </template>
          <aepp-terminal/>
        </aepp-collapse>
        <div class="aepp-editor-settings">
          <!-- TODO: Compiler Selection is hidden, work on fixing it later -->
          <aepp-select class="w-5/6 mr-2" label="Compiler Version" v-if="false">
            <option value="1.0.2">Roma v1.0.2</option>
            <option value="1.0.1">Roma v1.0.1</option>
            <option value="1.0.0">Roma v1.0.0</option>
          </aepp-select>
          <aepp-button
            class="w-full"
            :disabled="$wait.is(['contract', 'compile'])"
            @click.native="compile(editor.getValue())"
          >
            <template v-if="$wait.is(['contract', 'compile'])">
              Compiling...
            </template>
            <template v-else>
              Compile Contract
            </template>
          </aepp-button>
        </div>
      </aepp-views>
      <aepp-sidebar>
        <aepp-scrollbar>
          <aepp-collapse name="configs">
            <template slot="bar">
              Configs Details
            </template>
            <form class="pl-2 pr-2 pb-2">
              <aepp-input class="mb-2" label="Private Key" :value="getAccountSecretKey" readonly/>
              <aepp-input class="mb-2" label="Public Key" :value="getAccountPublicKey" readonly/>
              <aepp-input class="mb-2" label="Internal URL" :value="getNodeInternalUrl" readonly/>
              <aepp-input class="mb-2" label="Compiler URL" :value="getCompilerUrl" readonly/>
              <aepp-input class="mb-2" label="URL" :value="getNodeUrl" readonly/>
              <aepp-input class="mb-2" label="Network ID" :value="getNodeNetworkId" readonly/>
            </form>
          </aepp-collapse>
          <aepp-collapse name="deploy-contract" :open="Boolean(instance.compiled)">
            <template slot="bar">
              Deploy Contract
            </template>
            <form @submit.prevent="deploy" class="pl-2 pr-2 pb-2">
              <aepp-textarea
                class="mb-2"
                label="Byte Code"
                :value="instance.compiled"
                readonly
              />
              <aepp-input
                label="Function Name"
                class="mb-2"
                placeholder="init"
                v-model="deployInit.name"
                readonly
              />
              <aepp-input
                label="Arguments"
                class="mb-2"
                placeholder="Comma separated values"
                v-model="deployInit.args"
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
              <aepp-button type="submit" :disabled="$wait.is('deploy')" extend>
                <template v-if="$wait.is('deploy')">
                  Deploying...
                </template>
                <template v-else>
                  Deploy
                </template>
              </aepp-button>
            </form>
          </aepp-collapse>
          <aepp-collapse name="call-static" :open="contractAddress">
            <template slot="bar">
              Call Static Function
            </template>
            <form @submit.prevent="() => onCallStaticFn(callStaticFn)" class="pl-2 pr-2 pb-2">
              <aepp-input
                label="Function Name"
                class="mb-2"
                placeholder="main"
                v-model="callStaticFn.functionName"
                required
              />
              <aepp-input
                label="Arguments"
                class="mb-2"
                placeholder="Comma separated values"
                v-model="callStaticFn.functionArgs"
              />
              <aepp-input
                label="Return Type"
                class="mb-2"
                placeholder="Sophia Type"
                v-model="callStaticFn.fnReturnType"
                required
              />
              <aepp-button type="submit" :disabled="$wait.is('callStaticFn')" extend>
                <template v-if="$wait.is('callStaticFn')">
                  Calling...
                </template>
                <template v-else>
                  Call Static
                </template>
              </aepp-button>
            </form>
          </aepp-collapse>
          <aepp-collapse name="call-function" :open="contractAddress">
            <template slot="bar">
              Call Function
            </template>
            <form @submit.prevent="() => onCallFunction(callFunction)" class="pl-2 pr-2 pb-2">
              <aepp-input
                label="Function Name"
                class="mb-2"
                placeholder="main"
                v-model="callFunction.functionName"
                required
              />
              <aepp-input
                label="Arguments"
                class="mb-2"
                placeholder="Comma separated values"
                v-model="callFunction.functionArgs"
              />
              <aepp-input
                label="Return Type"
                class="mb-2"
                placeholder="Sophia Type"
                v-model="callFunction.fnReturnType"
                required
              />
              <aepp-input
                label="Deposit"
                class="mb-2"
                type="number"
                min="0"
                placeholder="deposit"
                v-model.number="callFunction.callFnConfig.deposit"
              />
              <aepp-input
                label="Gas Price"
                class="mb-2"
                type="number"
                min="1000000"
                placeholder="gas price"
                v-model.number="callFunction.callFnConfig.gasPrice"
              />
              <aepp-input
                label="Amount"
                class="mb-2"
                type="number"
                min="0"
                placeholder="amount"
                v-model.number="callFunction.callFnConfig.amount"
              />
              <aepp-input
                label="Fee"
                class="mb-2"
                type="number"
                placeholder="auto"
                v-model.number="callFunction.callFnConfig.fee"
              />
              <aepp-input
                label="Gas Limit"
                class="mb-2"
                type="number"
                min="0"
                placeholder="gas"
                v-model.number="callFunction.callFnConfig.gas"
              />

              <!-- Hidden input -->
              <input v-model="callFunction.callFnConfig.callData" type="hidden" value="callData">

              <!-- Submit Button -->
              <aepp-button type="submit" :disabled="$wait.is('callFunction')" extend>
                <template v-if="$wait.is('callFunction')">
                  Calling...
                </template>
                <template v-else>
                  Call Function
                </template>
              </aepp-button>
            </form>
          </aepp-collapse>
        </aepp-scrollbar>
      </aepp-sidebar>
    </div>
  </aepp-views>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import MemoryAccount from '@aeternity/aepp-sdk/es/account/memory'
import Wallet from '@aeternity/aepp-sdk/es/ae/wallet'
import AeIcon from '@aeternity/aepp-components-3/dist/ae-icon'

import AeppButton from '../../components/aepp-button'
import AeppCollapse from '../../components/aepp-collapse'
import AeppEditor from '../../components/aepp-editor'
import AeppInput from '../../components/aepp-input'
import AeppSelect from '../../components/aepp-select'
import AeppScrollbar from '../../components/aepp-scrollbar'
import AeppTextarea from '../../components/aepp-textarea'

import AeppSidebar from '../../sections/aepp-sidebar'
import AeppTerminal from '../../sections/aepp-terminal'
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
       * Contract Instance
       */
      instance: {},

      /**
       * Deploy `init` construct function
       * configuration details
       */
      deployInit: {
        name: 'init',
        args: null
      },

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
       * Data State/store for callStaticFn
       */
      callStaticFn: {
        functionName: null,
        functionArgs: null,
        fnReturnType: null,
        staticResult: {}
      },

      /**
       * Data State/store for function calls
       */
      callFunction: {
        functionName: null,
        functionArgs: null,
        fnReturnType: null,
        callFnConfig: {
          deposit: 0,
          gasPrice: 1000000000,
          amount: 0,
          fee: null, // sdk will automatically select this
          gas: 1000000,
          callData: '',
          verify: true
        },
        callFnResult: {}
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
    AeppScrollbar,
    AeppTextarea,
    AeppSidebar,
    AeppTerminal,
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
      'getCompilerUrl',
      'getNodeNetworkId'
    ]),
    contractAddress() {
      return Boolean((this.instance
        && this.instance.deployInfo)
        && this.instance.deployInfo.address
      )
    }
  },
  methods: {
    /**
     * Then the collapse component opens,
     * execute and run the Terminal
     *
     * @param {Object} event
     */
    onTerminalOpen(event) {
      this.$store.commit('terminal/toggleVisible', event.visible)
    },

    /**
     * A function to create an instance
     * for the smartContract/source code
     *
     * @return {*}
     */
    async contract(code) {
      this.$wait.start('contract')

      try {
        Object.assign(
          this.instance,
          await this
          .client
          .getContractInstance(code)
        )

        this.$wait.end('contract')
      } catch (e) {
        this.$wait.end('contract')

        return this
        .$store
        .commit('terminal/createLine', e.message)
      }
    },

    /**
     * Function to compile Contract code
     * and appends the contract data to $data.compiled
     *
     * @param code {String}
     * @return {*}
     */
    async compile(code) {
      await this.setClient()
      this.$wait.start('compile')

      try {
        await this.contract(code)

        let bytecode = await this.instance.compile()
        this.instance.compiled = bytecode
        
        this.$wait.end('compile')

        this.$store.commit('createNotification', {
          time: Date.now(),
          type: 'success',
          text: 'Contract compiled successfully!'
        })

        return this
        .$store
        .commit(
          'terminal/createLine',
          'Contract compiled successfully'
        )
      } catch (e) {
        this.$wait.end('compile')

        return this
        .$store
        .commit('terminal/createLine', e.message)
      }
    },

    /**
     * Deploys smart contract to the blockchain.
     *
     * @return {Promise<*>}
     */
    async deploy() {
      await this.setClient()
      if (typeof this.instance.deploy !== 'function') {
        return this
        .$store
        .commit(
          'terminal/createLine',
          'You dont seem to have compiled the contract, please try again...'
        )
      }

      this.$wait.start('deploy')

      return this
      .instance
      .deploy(this.deployInit.args ? this.deployInit.args.split(',') : [], Object
      .assign(this.deployConfig, {
        owner: this.getAccountAddress
      })).then((deployed) => {
        Object.assign(this.instance, deployed)

        Object.assign(this.deployConfig, {
          deposit: 0,
          gasPrice: 1000000000,
          amount: 0,
          fee: null,
          gas: 1000000,
          callData: '',
          verify: true
        })
        Object.assign(this.callStaticFn, {
          functionName: null,
          functionArgs: null,
          fnReturnType: null,
          staticResult: {}
        })
        Object.assign(this.callFunction, {
          functionName: null,
          functionArgs: null,
          fnReturnType: null,
          callFnConfig: {
            deposit: 0,
            gasPrice: 1000000000,
            amount: 0,
            fee: null,
            gas: 1000000,
            callData: ''
          },
          callFnResult: {}
        })

        this.$wait.end('deploy')
        this
        .$store
        .commit('terminal/createLine', `Deployment info:  ${JSON.stringify({
          created: deployed.createdAt,
          publicKey: deployed.owner,
          txHash: deployed.transaction,
          status: deployed.result.returnType,
          gasPrice: deployed.result.gasPrice,
          gasUsed: deployed.result.gasUsed,
          result: deployed.address
        })}`)
      }).catch((e) => {
        this.$wait.end('deploy')

        return this
        .$store
        .commit('terminal/createLine', e.message)
      })
    },

    /**
     * Call a contract static function given:
     *
     * @param args.functionName {String}
     * @param args.functionArgs {String}
     * @param args.fnReturnType {String}
     *
     * @return {Object}
     */
    async onCallStaticFn(args) {
      let response
      await this.setClient()

      this.$wait.start('callStaticFn')

      try {
        response = await this.instance.call(
          /**
           * Function to call
           */
          args.functionName,

          /**
           * Pass Static Function arguments
           */
          args.functionArgs ? args.functionArgs.split(',') : [],

          /**
           * Pass CallStatic Options
           */
          { callStatic: true }
        )

        this.$wait.end('callStaticFn')
        this
        .$store
        .commit('terminal/createLine', `Result from call static: ${JSON.stringify(response.result)}`)
      } catch (e) {
        this.$wait.end('callStaticFn')

        return this
        .$store
        .commit('terminal/createLine', e.message)
      }

      /**
       * Results of the Static call
       *
       * @return {Object}.decode
       * @return {Object}.result
       */
      try {
        this.$set(this.callStaticFn, 'staticResult', {
          decode: await response.decode(args.fnReturnType),
          result: response.result
        })

       return this
        .$store
        .commit('terminal/createLine', `Decoded return value from call static: ${this.callStaticFn.staticResult.decode}`)

      } catch (e) {
        return this
        .$store
        .commit('terminal/createLine', e.message)
      }
    },

    /**
     * Return the result of the function
     * call to the smart contract
     */
    async onCallFunction(args) {
      let response
      await this.setClient()

      this.$wait.start('callFunction')

      try {
        response = await this.instance.call(
          /**
           * Function to call
           */
          args.functionName,

          /**
           * Pass Static Function arguments
           */
          args.functionArgs ? args.functionArgs.split(',') : [],

          /**
           * Pass CallFunction Options
           */
          Object.assign(args.callFnConfig, {
            skipArgsConvert: true
          })
        )

        this.$wait.end('callFunction')
        this
        .$store
        .commit('terminal/createLine', `Result from call: ${JSON.stringify(response.result)}`)
      } catch (e) {
        this.$wait.end('callFunction')

        return this
        .$store
        .commit('terminal/createLine', e.message)
      }

      /**
       * Results of the call
       *
       * @return {Object}.decode
       * @return {Object}.result
       */
      try {
        this.$set(this.callFunction, 'callFnResult', {
          decode: await response.decode(args.fnReturnType),
          result: response.result
        })

        return this
        .$store
        .commit('terminal/createLine', `Decoded return value from call: ${this.callFunction.callFnResult.decode} \n `)

      } catch (e) {
        return this
        .$store
        .commit('terminal/createLine', e.message)
      }
    },
    /**
     * Function used to create and updatea client properties
     */
    async setClient() {
      try {
        this.client = await Wallet({
          url: this.getNodeUrl,
          internalUrl: this.getNodeInternalUrl,
          compilerUrl: this.getCompilerUrl,
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
        return this
        .$store
        .commit('terminal/createLine', e.message)
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
   await this.setClient()
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
