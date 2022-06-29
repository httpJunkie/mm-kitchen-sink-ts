import { useState } from 'react'
import { ethers } from 'ethers'
import Button from '../Button'

import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}

const SignMessage = ({ message, address, provider }: any) => {
  const [isSignError, setIsSignError] = useState(false)
  const [signError, setSignError] = useState("")
  const [isSignSuccess, setIsSignSuccess] = useState(false)
  const [signedSuccess, setSignedSuccess] = useState("")
  const [verifyMessage, setVerifyMessage] = useState("")
  const [verifyErrorMessage, setVerifyErrorMessage] = useState("")

  const handleVerifyMessage = async ({ message, address }: any) => {
    try {
      const signerAddress = await ethers.utils.verifyMessage(message, signedSuccess)

      if (signerAddress !== address) {
        return false;
      }
  
      return true;
    } catch (e) {
      if (e instanceof TypeError) {
        console.error(`instance of TypeError exception`)
      } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
        console.error(`instance of RangeError exception`)
      } else if (e instanceof EvalError) {
        console.error(`instance of EvalError exception`)
      } else {
        console.error(e)
      }
    }
  }

  const signMessage = async () => {
      // await signer.signMessage("I agree to the terms and services at:\nhttps://metamask.com/tos")
      await provider.send('personal_sign', [message, address])
      .then((res: any) => {
        setIsSignError(false)
        setIsSignSuccess(true)
        setSignedSuccess(res)
      })
      .catch((err: any) => {
        setIsSignSuccess(false)
        setIsSignError(true)
        setSignError(err.message)
      })
  }

  const handleVerification = async () => {
    const isValid = await handleVerifyMessage({ message, address })

    if (isValid) {
      console.log(isValid)
      setVerifyMessage("Signature is valid!")
    } else {
      console.log(isValid)
      setVerifyErrorMessage("Invalid signature")
    }
  }

  return (
    <>
      <Button handleClick={signMessage}>
        Sign Message
      </Button>
      { isSignError && {signError} }
      { isSignSuccess && <span>Successful Sign</span>}
      { isSignSuccess && 
        <Button marginTop={true} handleClick={handleVerification}>
          Verify Message
        </Button>
      }
      { verifyMessage !== "" ? verifyMessage : verifyErrorMessage  }
    </>
  )
}

export default SignMessage