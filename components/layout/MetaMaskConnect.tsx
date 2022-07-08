import { useContext } from 'react'
import { ViewContext } from '../../context/ViewContext'

import DisplayAccount from '../ui/metamask/connect/DisplayAccount'
import ConnectMetaMask from '../ui/metamask/connect/ConnectMetaMask'
import InstallMetaMask from '../ui/metamask/connect/InstallMetaMask'
import ConnectNetwork from '../ui/metamask/connect/ConnectNetwork'

const MetaMaskConnect = () => {
  const { user, chainId, actions, provider } = useContext(ViewContext)
  const { address } = user

  return (
    <div className={`metaMaskConnect`}>
      {address && chainId && chainId === 4
        ? <DisplayAccount />
        : address && chainId && chainId !== 4
          ? <ConnectNetwork />
          : provider
            ? <ConnectMetaMask connect={actions.connect} />
            : <InstallMetaMask />
      }
    </div>
  )
}

export default MetaMaskConnect