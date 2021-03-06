import { useState, useContext } from "react"
import { ViewContext } from '../../../context/ViewContext'

import Button from '../Button'

const GetChain = () => {
  const { user, provider }: any = useContext(ViewContext)
  const { address } = user
  const [chainId, setChainId] = useState<string>("")
  const [error, setError] = useState<string>("")

  const getChainId = async () => {
    if (provider) {
      try {
        const chain = await window.ethereum.request({method: 'eth_chainId', params: []})
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
          <strong>Returned Hex Value: </strong> {chainId && chainId}
        </div>
        <div>
          <strong>Converted to Number:</strong> {chainId && parseInt(chainId)}
        </div>
      </div>
      
    </div>
  )
}

export default GetChain