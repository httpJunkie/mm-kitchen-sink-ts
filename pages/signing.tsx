import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from './context/ViewContext'

import SignMessage from './ui-components/metamask/SignMessage'
import VerifyMessage from './ui-components/metamask/VerifyMessage'

const Signing: NextPage = () => {
  const { user, provider } = useContext(ViewContext)
  const { address } = user
  const message = 'I agree to the terms and services at:\nhttps://metamask.com/tos'

  const signMessageProps = {
    message: message,
    address: address.toString(),
    provider: provider
  }

  return (
    <>
      <div>
        {!address
          ? <div>Not Connected to Ethereum</div> 
          : <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <SignMessage />
          </div>
          <div className="w-full lg:w-1/2">
            <VerifyMessage />
          </div>
        </div>
        }
      </div>
    </>
  )
}

export default Signing