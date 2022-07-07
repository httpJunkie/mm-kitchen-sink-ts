import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'

import SignMessage from '../components/ui/metamask/SignMessage'
import VerifyMessage from '../components/ui/metamask/VerifyMessage'

const Sign: NextPage = () => {
  const { user } = useContext(ViewContext)
  const { address } = user

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

export default Sign