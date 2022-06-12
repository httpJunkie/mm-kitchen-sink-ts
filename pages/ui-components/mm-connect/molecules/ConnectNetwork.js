import { useContext } from 'react'
import { ViewContext } from '../../../context/ViewProvider'
import MyButton from '../atoms/MyButton'

const ConnectNetwork = () => {
  const { provider } = useContext(ViewContext)

  const addSwitchNetwork = async () => {
    if (provider) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x4' }],
        })
      } catch (error) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x313337', // '0x3830303031'
                blockExplorerUrls: ['https://polygonscan.com/'], // ['https://mumbai.polygonscan.com']
                chainName: 'Polygon Mainnet', // 'Mumbai Testnet'
                nativeCurrency: {
                  decimals: 18,
                  name: 'Polygon',
                  symbol: 'MATIC'
                },
                rpcUrls: ['https://polygon-rpc.com'] // ['https://matic-mumbai.chainstacklabs.com']
              },
            ],
          })
        } catch (error) {
          // user rejects the request to "add chain" or param values are wrong, maybe you didn't use hex above for `chainId`?
          console.log(`wallet_addEthereumChain Error: ${error.message}`)
        }
        // handle other "switch" errors
      }
    }
  }

  return (
    <MyButton handleClick={addSwitchNetwork}>
      <p>Connect Rinkeby</p>
    </MyButton>
  )
}

export default ConnectNetwork
