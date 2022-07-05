import { useContext } from 'react'
import { ViewContext } from '../../../../pages/context/ViewContext'

const DisplayAccount = () => {
  const { user } = useContext(ViewContext)
  const { address } = user

  const formatAddress = (addr) => {
    return `${addr.substr(0, 6)}...${addr.substr(-4)}`
  }

  return (
    <div className="display">
      <a 
        className="text_link tooltip-right" 
        href={`https://etherscan.io/address/${address}`} target="_blank"
        data-tooltip="Open in Etherscan"
      >
        {formatAddress(address)}
      </a>
    </div>
  )
}

export default DisplayAccount
