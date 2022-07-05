import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'

import SignMessage from '../components/ui/metamask/SignMessage'
import VerifyMessage from '../components/ui/metamask/VerifyMessage'

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
                <SignMessage />
              </div>
              <div>
                <VerifyMessage />
              </div>
            </div>
        }
      </div>
    </>
  )
}

export default Signing