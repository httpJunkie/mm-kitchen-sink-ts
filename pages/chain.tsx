import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'

import GetChain from '../components/ui/metamask/GetChain'

const Signing: NextPage = () => {
  const { user, provider } = useContext(ViewContext)
  const { address } = user
  const message = 'I agree to the terms and services at:\nhttps://metamask.com/tos'

  return (
    <>
      <div>
        {!address
          ? <div>Not Connected to Ethereum</div> 
          : <div>
              <div>
                <GetChain />
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default Signing