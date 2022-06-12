import MyButton from '../atoms/MyButton'
import { useState } from 'react'

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
      <MyButton handleClick={getAccounts}>
        <p>Get Account</p>
      </MyButton>
      <span>{account}</span>
    </>
  )
}

export default GetAccount
