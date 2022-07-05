import { useState, useContext } from 'react'
import { ViewContext } from '../../../context/ViewContext'

import Button from '../Button'

const GetPermissions = () => {
  const { user, provider }: any = useContext(ViewContext)
  const { address } = user
  const [permissions, setPermissions] = useState({})
  const [permissionRequested, setPermissionRequested] = useState(false)

  const requestPermissions = async () => {
    await provider.request(
      'wallet_requestPermissions',
      [
        {
          "eth_accounts": {}
        }
      ]
    )
      .then(() => setPermissionRequested(true))
  }

  const getPermissions = async () => {
    await provider.request('wallet_getPermissions', [])
      .then((res: any) => setPermissions(res[0]))
  }

  return (
    <div className="accounts">
      {!address
        ? <div>Not Connected to Ethereum</div>
        : <div>
            <Button handleClick={requestPermissions}>
              <div className="text">Request Permissions</div>
            </Button>
            <Button marginTop={true} handleClick={getPermissions}>
              <div className="text">Get Accounts</div>
            </Button>
            <div>caveats.value:
              {permissions && permissionRequested ?
                permissions.caveats[0].value.map(
                  (account: string) => {
                    return (
                      <div key={account}>{account}</div>
                    )
                  }
                )
                : null
              }
            </div>
            <div>date: {permissions.date}</div>
            <div>id: {permissions.id}</div>
            <div>invoker: {permissions.invoker}</div>
            <div>parentCapability: {permissions.parentCapability}</div>
          </div>
      }
    </div>
  )
}

export default GetPermissions
