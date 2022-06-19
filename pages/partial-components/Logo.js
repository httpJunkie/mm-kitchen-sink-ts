import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'

import DisplayAddress from '../ui-components/metamask//connect/DisplayAddress'
import ConnectMetaMask from '../ui-components/metamask//connect/ConnectMetaMask'
import InstallMetaMask from '../ui-components/metamask//connect/InstallMetaMask'
import ConnectNetwork from '../ui-components/metamask//connect/ConnectNetwork'

const Logo = () => {
  const { user, chainId, actions, provider } = useContext(ViewContext)
  const { address } = user

  return (
    <div className={`logo`}>
      {address && chainId && chainId === 4
        ? <DisplayAddress />
        : address && chainId && chainId !== 4
          ? <ConnectNetwork />
          : provider
            ? <ConnectMetaMask connect={actions.connect} />
            : <InstallMetaMask />
      }
    </div>
  )
}

export default Logo