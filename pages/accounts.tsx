import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'

import GetPermissions from '../components/ui/metamask/GetPermissions'
import GetAccount from '../components/ui/metamask/GetAccount'

const Accounts: NextPage = () => {
  const { user } = useContext(ViewContext)
  const { address } = user

  return (
    <div className="accounts">
      {!address
        ? <div>Not Connected to Ethereum</div> 
        : <div>
            <h1>Account</h1>
            <GetAccount />
            <h1>Permissions</h1>
            <GetPermissions />
          </div>
      }
    </div>
  )
}

export default Accounts