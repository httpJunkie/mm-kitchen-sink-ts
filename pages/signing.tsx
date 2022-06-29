import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from './context/ViewContext'

import SignMessage from './ui-components/metamask/SignMessage'

const Signing: NextPage = () => {
  const { user, provider } = useContext(ViewContext)
  const { address } = user
  const message = "I agree to the terms and services at:\nhttps://metamask.com/tos"

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
          : <SignMessage {...signMessageProps} />
        }
      </div>
    </>
  )
}

export default Signing