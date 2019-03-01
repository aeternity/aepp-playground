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
          :value="require('!raw-loader!./identity.aes')"
        />
        <aepp-collapse :opened="deployInfo">
          <template slot="bar">
            Console
          </template>
          <div class="aepp-editor-console">
            <label class="text-xs block mb-1 mr-2 text-red">Logs:</label>
            <textarea
              class="w-full border border-solid border-black bg-neutral-negative-3 font-mono text-red text-sm"
              :value="JSON.stringify({
                deployInfo,
                deployedDataObj,
                deployError,
                callStaticRes,
                callStaticError,
                callRes,
                callError
              }, null, 2)"
            ></textarea>
          </div>
        </aepp-collapse>
        <div class="aepp-editor-settings">
          <aepp-select class="w-5/6 mr-2" label="Compiler Version">
            <option value="1.0.2">Roma v1.0.2</option>
            <option value="1.0.1">Roma v1.0.1</option>
            <option value="1.0.0">Roma v1.0.0</option>
          </aepp-select>
          <aepp-button @click.native="onCompile" class="w-1/6" :disabled="!client">
            Compile Contract
          </aepp-button>
        </div>
      </aepp-views>
      <aepp-sidebar>
        <aepp-collapse>
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
        <aepp-collapse v-if="byteCode" opened>
          <template slot="bar">
            Deploy Contract
          </template>
          <form @submit.prevent="onDeploy" class="pl-2 pr-2 pb-2">
            <aepp-textarea class="mb-2" label="Byte Code" :value="byteCode" readonly/>
            <aepp-input class="mb-2" label="Function" value="init" disabled v-model="deployFunc"/>
            <aepp-input class="mb-2" label="Arguments" placeholder="()" v-model="deployArgs"/>
            <aepp-input class="mb-2" label="Deposit" type="number" min="0" placeholder="Deposit" v-model.number="deployOpts.deposit"/>
            <aepp-input class="mb-2" label="Gas Price" type="number" min="1000000" placeholder="Gas Price" v-model.number="deployOpts.gasPrice"/>
            <aepp-input class="mb-2" label="Amount" type="number" min="0" placeholder="Amount" v-model.number="deployOpts.amount"/>
            <aepp-input class="mb-2" label="Fee" type="number" placeholder="Auto" v-model.number="deployOpts.fee"/>
            <aepp-input class="mb-2" label="Gas Limit" type="number" min="0" placeholder="Gas" v-model.number="deployOpts.gas"/>
            <!-- Hidden Input Field -->
            <input type="hidden" value="callData" v-model="deployOpts.callData"/>
            <!-- Call Deploy -->
            <aepp-button type="submit" :disabled="miningStatus" extend>
              <template v-if="!miningStatus">
                Deploy
              </template>
              <template v-else>
                Deploying...
              </template>
            </aepp-button>
          </form>
        </aepp-collapse>
        <aepp-collapse v-if="contractAddress">
          <template slot="bar">
            Call Static Function
          </template>
          <form @submit.prevent="onCallStatic" class="pl-2 pr-2 pb-2">
            <aepp-input class="mb-2" label="Function" placeholder="function" v-model="staticFunc"/>
            <aepp-input class="mb-2" label="Arguments" v-model="staticArgs" placeholder="()"/>
            <aepp-input class="mb-2" label="Return Type" v-model="staticSophiaType" placeholder="Sophia Type" value="int"/>
            <aepp-button type="submit" extend>Call Static</aepp-button>
          </form>
        </aepp-collapse>
        <aepp-collapse v-if="deployedDataObj && byteCode">
          <template slot="bar">
            Call Function
          </template>
          <form class="pl-2 pr-2 pb-2">
            <aepp-input class="mb-2" label="Function" placeholder="function" v-model="nonStaticFunc"/>
            <aepp-input class="mb-2" label="Arguments" placeholder="()" v-model="nonStaticArgs"/>
            <aepp-input class="mb-2" label="Return Type" placeholder="Sophia Type" v-model="sophiaType"/>
            <aepp-input class="mb-2" label="Deposit" type="number" min="0" placeholder="deposit" v-model.number="callOpts.deposit"/>
            <aepp-input class="mb-2" label="Gas Price" type="number" min="1000000" placeholder="gas price" v-model.number="callOpts.gasPrice"/>
            <aepp-input class="mb-2" label="Amount" type="number" min="0" placeholder="amount" v-model.number="callOpts.amount"/>
            <aepp-input class="mb-2" label="Fee" type="number" placeholder="auto" v-model.number="callOpts.fee"/>
            <aepp-input class="mb-2" label="Gas Limit" type="number" min="0" placeholder="gas" v-model.number="callOpts.gas"/>

            <!-- Hidden input -->
            <input v-model="callOpts.callData" type="hidden" value="callData">

            <!-- Submit Button -->
            <aepp-button type="submit" extend>Call Function</aepp-button>
          </form>
        </aepp-collapse>
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
       * New
       */
      // client: null,
      editor: null,
      result: {
        bytecode: null
      },

      /**
       * Old
       */
      balance: 0,
      balanceInterval: null,
      byteCode: '',
      client: false,
      deployedDataObj: false,
      deployInfo: '',
      minedData: false,
      miningStatus: '',
      wallet: false,
      deployFunc: 'init',
      deployArgs: '',
      staticFunc: 'main',
      staticArgs: '',
      staticSophiaType: 'int',
      nonStaticFunc: '',
      nonStaticArgs: '',
      contractAddress: '',
      deployOpts: {
        deposit: 0,
        gasPrice: 1000000000,
        amount: 0,
        fee: null, // sdk will automatically select this
        gas: 1000000,
        callData: ''
      },
      callOpts: {
        deposit: 0,
        gasPrice: 1000000000,
        amount: 0,
        fee: null, // sdk will automatically select this
        gas: 1000000,
        callData: ''
      },
      clientError: false,
      callRes: '',
      callError: '',
      deployError: '',
      compileError: '',
      callStaticRes: '',
      callStaticError: '',
      waitingCall: false,
      sophiaType: 'int',
      sophiaTypes: [
        'uint',
        'int',
        'address',
        'bool',
        'string',
        'list',
        'tuple',
        'record',
        'map',
        'option(\'a)',
        'state',
        'transactions',
        'events',
        'oracle(\'a, \'b)',
        'oracle_query(\'a, \'b)'
      ]
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
     * Contract Compilation Function
     */
    async compile(code) {
      try {
        return await this.client.contractCompile(code)
      } catch (e) {
        return this.$store.commit('createNotification', {
          time: Date.now(),
          type: 'error',
          text: e.message
        })
      }
    },

    /**
     * Deploy Contract
     */
    async deploy(initState, options = {}) {
      initState = initState ? `(${initState})` : '()'
      try {
        return this
        .client
        .contractDeploy(this.byteCode, 'sophia', {initState, options})
      } catch (err) {
        console.log(err)
        throw err
      }
    },

    /**
     * On Compile
     */
    onCompile () {
      this.resetData()
      this.compile(this.editor.getValue())
      .then(byteCodeObj => {
        this.contractAddress = undefined
        this.byteCode        = byteCodeObj.bytecode
      })
    },

    /**
     * On Deploy
     */
    onDeploy() {
      this.deployInfo = 'Deploying and checking for mining status...'
      this.miningStatus = true
      const extraOpts = {
        'owner': this.getAccountAddress,
        'code': this.editor.getValue(),
        //'vmVersion': 1,
        //'nonce': 0,
        //'ttl': 9999999
      }
      const opts = Object.assign(extraOpts, this.deployOpts)

      console.log('deploying...', opts)

      this
      .deploy(this.deployArgs, opts) // this waits until the TX is mined
      .then((data) => {
        console.log('deployed', data)
        this.contractAddress = data.address
        this.deployInfo      = `Deployed, and mined at this address: ${data.address}`
        this.miningStatus    = false
        this.deployedDataObj = data
      }).catch((e) => {
        console.log('not deployed', e)
        this.deployInfo = ''
        this.miningStatus = false
        this.$store.commit('createNotification', {
          time: Date.now(),
          type: 'error',
          text: e
        })
      })
    },


    /**
     * Call Static Function
     */
    async callStatic (func, args) {
      args = args ? `(${args})` : '()'
      const res = await this.client.contractCallStatic(this.contractAddress, 'sophia-address', func, { args })
      return { decoded: await res.decode(this.staticSophiaType), result: res.result }
    },

    /**
     * callContract
     */
    async callContract (func, args, address, options) {
      args = args ? `(${args})` : '()'
      try {
        return this.client.contractCall(this.byteCode, 'sophia', address, func, {args, options})
      } catch (err) {
        throw err
      }
    },

    /**
     * Assign Balance
     */
    async assignBalance(accountPub) {
      return this.client.balance(accountPub).then(balance => balance)
    },

    /**
     * Get Wallet and Contract Client
     */
    async getClient() {

      if (this.getAccountKeyPair.privateKey && this.getAccountKeyPair.publicKey && this.getNodeUrl) {

        const keypair = {
          secretKey: this.getAccountKeyPair.privateKey,
          publicKey: this.getAccountKeyPair.publicKey
        };

        try {
          Wallet.compose(Contract)({
            url: this.getNodeUrl,
            internalUrl: this.getNodeInternalUrl,
            accounts: [MemoryAccount({ keypair })],
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
          }).then((ae) => {
            this.client = ae

            this
            .assignBalance(this.getAccountAddress)
            .then(
              (balance) => this.balance = balance
            )

            this.balanceInterval = setInterval(
              () => this
              .assignBalance(this.getAccountAddress)
              .then(
                (balance) => this.balance = balance
              ),
              10000
            )
          })
        } catch (e) {
          return this.$store.commit('createNotification', {
            time: Date.now(),
            type: 'error',
            text: `${e} (wrong private/public key)`
          })
        }
      }
    },

    /**
     * Reset Data
     */
    resetData () {
      this.callError = ''
      this.callRes = ''
      this.deployError = ''
      this.callStaticError = ''
      this.deployedDataObj = false
      this.deployInfo = ''
      this.minedData = false
      this.miningStatus = false
      this.byteCode = false
    },

    // TODO: on hold
    onCallStatic () {
      if (this.staticFunc) {
        this.callStatic(this.staticFunc, this.staticArgs)
            .then(data => {
              this.callStaticRes = `Result: ` + JSON.stringify(data.decoded.value)
              this.callStaticError = ''
            })
            .catch(err => {
              err = err.response ? err.response.data.reason : 'Unknown error'
              this.callStaticError = `${err}`
            })
      } else {
        this.callStaticError = 'Please enter a Function and 1 or more Arguments.'
      }
    },
    onCallDataAndFunction () {
      const extraOpts = {
        'owner': this.getAccountAddress,
        'code': this.editor.getValue(),
        // 'vmVersion': 1
        // 'nonce': 0,
        // 'ttl': 9999999
      }
      const opts = Object.assign(extraOpts, this.callOpts)

      if (this.nonStaticFunc) {
        this.waitingCall = true
        this
        .callContract(this.nonStaticFunc, this.nonStaticArgs, this.contractAddress, opts)
        .then(dataRes => {
          this.callRes = dataRes.result
          this.client.contractDecodeData(this.sophiaType, dataRes.result.returnValue).then(data => {
            this.callRes = `Gas Used: ${dataRes.result.gasUsed} <br><br>---<br><br> Result: <br><br> ${data.value}`
          }).catch(err => {
            this.callError   = `${err}`
            this.waitingCall = false
            this.callRes     = ''
          })
          this.callError   = ''
          this.waitingCall = false
        })
        .catch(err => {
          this.callError   = `${err}`
          this.waitingCall = false
        })
      } else {
        return this.$store.commit('createNotification', {
          time: Date.now(),
          type: 'error',
          text: 'Please enter a Function and 1 or more Arguments.'
        })
      }
    },
  },
  async mounted() {
    this.resetData()
    this.getClient()
  },
  async beforeDestroy() {
    this.client = false
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
  @apply bg-neutral-negative-3;
  @apply whitespace-pre-wrap;
  @apply break-words;
  @apply p-3;
  @apply w-full;
  @apply h-64;
  @apply overflow-auto;

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
