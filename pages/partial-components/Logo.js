import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'

import DisplayAccount from '../../components/ui-components/metamask/connect/DisplayAccount'
import ConnectMetaMask from '../../components/ui-components/metamask/connect/ConnectMetaMask'
import InstallMetaMask from '../../components/ui-components/metamask/connect/InstallMetaMask'
import ConnectNetwork from '../../components/ui-components/metamask/connect/ConnectNetwork'

const Logo = () => {
  const { user, chainId, actions, provider } = useContext(ViewContext)
  const { address } = user

  return (
    <div className={`logo`}>
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

export default Logo