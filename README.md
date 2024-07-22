## Building a Web3 application with NextJS 14, using Typescript and WalletConnect SDK

Install NextJS using default options:
```shell
npx create-next-app@latest
```

Then followin instructions from WalletConnect at:
https://docs.walletconnect.com/appkit/next/core/installation

Make sure to define the environment variable by using:
> From Command line:
```shell
export NEXT_PUBLIC_PROJECT_ID=YOUR_PROJECT_ID_FROM_WALLETCONNECT
```

> Running Frontend:
```shell
npm run dev
```

## Integrating NextJs project with WalletConnect SDK:
https://docs.walletconnect.com/web3modal/nextjs/about

## Checking some existing NextJS web3 projects:
### 2024-07-22
https://www.youtube.com/watch?v=Bn6lhw27pzU good template using wagmi and NEXTJS

### 2024-07-19
https://www.youtube.com/watch?v=VEm5hzGSvVg - GREAT video !!! <<<<>>>>
https://github.com/WalletConnect/web-examples/tree/main/dapps/web3modal/next - THIS ONE!!
Check WalletConnect Discord: https://discord.com/channels/492410046307631105/1105316298390511626
https://github.com/Pedrojok01/Next-Web3-Boilerplate/tree/main
https://docs.walletconnect.com/web3modal/nextjs/about#smart-contract-interaction
### 2024-07-18
https://github.com/erhant/nextjs-web3-starter >>> Not usefull - nextjs v12 different
https://github.com/zkPeep/Nextjs14-ConnectKit/tree/main - Useful but nothing on reading contract
https://github.com/abhik-99/NextJs13-Web3 - Not useful nextjs13




#
#

## Investigation:
WalletConnect with reactjs - vue - wagmi  - typescript sadly
walletconnect - works with viem... not js but typescript conflitcting with react
	testing again...
	2024-06-04
	check documentation to interact with contracts
**** CONTINUE HERE!!!







https://create-react-app.dev/docs/getting-started/

npm init react-app tokalty-react




Trying others:
TATUM.io - Complejo de implementar
	copy code in app.js and app.css
	npm i @tatumio/tatum
	API key: 
		Mainnet: t-665d8ec77cac4f001b244c99-8ee78d1cda7b4804812e07e4
		Testnet: t-665d8ec77cac4f001b244c99-ee281d049dd04de98df048d1

trying again with 
npx create-react-app my-app

issue:

issue resolved here:
https://www.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5

issues with webpack5 will check if anyother way but using create-react-app


looking for web3 javascript react boilerplate
	https://github.com/Pedrojok01/Web3-Boilerplate - tsx
	https://www.useweb3.xyz/starter-kits
	scaffold.eth - npx create-eth@latest - throwing errors - reboot and retry - Muy avanzado dificil para integrar!!!
		failing to install with yarn, fixed with "npm install -g corepack" and "corepack enable"
	https://createweb3dapp.alchemy.com/ - promising
	https://www.youtube.com/watch?v=Bb5Pc--kyAY&ab_channel=Moralis with Nextjs... Moralis

* Checking Tenderly (2024-06-06)- to complex to use - probably revisit in the future



