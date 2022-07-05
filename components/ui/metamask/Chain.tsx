import { useState, useContext } from "react"
import { ViewContext } from '../../../context/ViewContext'

import Button from '../Button'

const Chain = () => {
  const { user, provider, chain }: any = useContext(ViewContext)
  const { address } = user
  const [chainId, setChainId] = useState<string>("")
  const [error, setError] = useState<string>("")

  const getChainId = async () => {
    if (provider) {
      try {
        const chain = await provider.send('eth_chainId')
        setChainId(chain)
      } catch (err: any) {
        setError(err.message)
      }
    }
  }

  return (
    <div className="chain">
      { !address
          ? <div>Not Connected to Ethereum</div>
          : <Button handleClick={getChainId}>
              <div className="text">Get Chain</div>
            </Button>
      }
      <div className="result">
        <div>
          <strong>ChainId Number:</strong> {chainId && chainId}
        </div>
        <div>
          <strong>ChainId Hex:</strong> {chainId && parseInt(chainId)}
        </div>
      </div>
      
    </div>
  )
}

export default Chain