# Aepp Playground
Aepp Playground will be comprised of single purpose application modules, in the image below, you'll see
the high level overview of aepp-playground. 

In the image below you'll notice that the structure follows a tree, as the root its `aepp-playground` and as its
leafs are its modules, and the leafs of the modules are the specifications and functionality of that specific module.

_I've termed the parts of the app as `modules` instead of `components` to not confuse it with Vue Components._

---
__Some things here don't work yet. This is a work in progress. Hit up the 'Issues' if you wanna discuss
something, or wanna know more.__
---

![Overview](https://i.imgur.com/6ZA6pvo.png)

#### Identity Provider
The identity provider is an internal business logic within aepp-playground that lets the user:

- Create an Aeternity account
- Import an Aeternity account
- Export an Aeternity account

This module of the application will be connected with other modules of the application to make sure that user can:

- View Balances
- Sign transactions
- Deploy contracts

##### Create Account
With this functionality the user will be able to generate accounts from within the application.

##### Import Account
The user will have the ability to import his Aeternity account from multiple sources:

- QR Code Scan
  - AirGap Vault
- Chrome Ext
- Base App
- Import keystore.json file
- Ledger Connection

##### Export Account
Ability to export the accounts as:

- keystore.json file
- QR Code

##### Manage Account
Give the ability to the user of the application to view some information related to the accounts:

- Topup account with Faucet
- View balance
- View sub accounts

#### Contract Editor
The contracts Editor, manages contracts internally and externally within the application.

With the contract editor, the developer can write Aeternity Smart Contracts, save them locally within the browser, 
compile them, and deploy the contract.

The contract editor emphasis is on:

- Sophia syntax highlighting
- Sophia code auto-completion
- File Browser
- File Versioning
- File Sync
- Create contract code
- Save contract code
- Delete Contract code
- Compile Contracts
- Deploy Contracts

The contract editor can also sync with local files, we can create a local http server that syncs `forgae` `contracts/` 
folder with `aepp-playground` contracts browser.

#### Contract Debugger
The contract debugger, helps manage and debug Aeternity Smart Contracts.

With the contract debugger, every contract you ever compile and deploy is going to be saved locally within the app.

With this ability, the contract debugger, you can:

- Add Contract address
- List All Deployed contracts
- View contract details:
  - IF there is a local file attached, show contract code
  - Byte code
  - Static Functions
  - Functions
- Call Functions & Static Functions
- Output of the function results will be printed on a terminal, or output log placeholder.

#### DApp Browser
App Browser is an iframe instance that communicates with the Aepp iframe provider/protocol.

#### Inspector
Collection of tools to inspect transactions, hashes, and everything that needs encoding / decoding.

#### State Channel Debugger
Work in progress.

#### Shareable Configs
A global configuration object that applies global changes to the entire application.

#### Console
A REPL console that injects AE-JS-SDK, AECLI and other CLI tools that help communicate with the blockchain.

#### Explorer
A tiny blockchain explorer to see what's happening with Aeternity.

#### Standalone Sophia Compiler
A micro service with Sophia compiler, that if a message is sent, replies with the byte code of the contract. 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
