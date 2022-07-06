import { useState, useContext } from 'react'
import { ViewContext } from '../../../context/ViewContext'

import Button from '../Button'

const GetAccount = () => {
  const { user, provider }: any = useContext(ViewContext)
  const { address } = user
  const [account, setAccount] = useState()

  const getAccounts = async() => {
    if (provider) {
      try {
        await window.ethereum.request({ method: 'eth_accounts', params: [] })
        .then((res: any) => {
          setAccount(res)
          console.log(res)
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="chain">
      { !address
          ? <div>Not Connected to Ethereum</div>
          : <>
              <Button handleClick={getAccounts}>
                <div className="text">Get Account</div>
              </Button>
              {account}
            </>
      }
    </div>
  )
}

export default GetAccount
