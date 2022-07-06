# Steps to get this NextJS Web3 Example Dapp working

Install Dependencies
```npm install```


Run Project in Dev Mode
```npm run dev```   

Browser to https://localhost:3000

## Adding Truffle to our NextJS project

After we got our NextJS project setup and running with the `MetaMaskConnect` component and few other components that deal with non-smart contract related MetaMask interactions like signing, adding/connecting a network, and requesting the network chainId. We are ready to add a smart contract that we can interact with. 

The great way to work with Truffle smart contracts locally is to install [Ganache](https://trufflesuite.com/ganache/), this is a personal Ethereum blockchain which you can use to run tests, execute commands, and inspect state while controlling how the chain operates.

Let's instal Truffle:

`truffle init`

### This will create 4 files in X directories.

- An empty `test` directory with a `.gitkeep` file
- A `contracts` directory with a `Migrations.sol` file
- A `migrations` directory with an `1_initial_migration.js` file