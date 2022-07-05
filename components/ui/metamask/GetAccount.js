import { useState } from 'react'
import Button from '../Button'

const GetAccount = () => {
  const [account, setAccount] = useState()

  const getAccounts = async () => {
    try {
      await window.ethereum.request({
        method: 'eth_accounts'
      })
      .then((res) => {
        setAccount(res)
        console.log(res)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button handleClick={getAccounts}>
        Get Account
      </Button>
      <span>{account}</span>
    </>
  )
}

export default GetAccount