import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'

import GetChain from '../components/ui/metamask/GetChain'

const Signing: NextPage = () => {
  const { user } = useContext(ViewContext)
  const { address } = user

  return (
    <>
      <div>
        {!address
          ? <div>Not Connected to Ethereum</div> 
          : <div>
              <GetChain />
            </div>
        }
      </div>
    </>
  )
}

export default Signing