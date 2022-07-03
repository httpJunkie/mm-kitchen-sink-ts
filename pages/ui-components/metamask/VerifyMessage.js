import { useState, useRef } from "react"
import { ethers } from "ethers"
import ErrorMessage from "./ErrorMessage"
import SuccessMessage from "./SuccessMessage"

const verifyMessage = async ({ message, address, signature }) => {
  try {
    const signerAddr = await ethers.utils.verifyMessage(message, signature)
    if (signerAddr !== address) {
      return false
    }

    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export default function VerifyMessage() {
  const [error, setError] = useState()
  const [successMsg, setSuccessMsg] = useState()

  const handleVerification = async (event) => {
    event.preventDefault()
    const data = new FormData(e.target)
    setSuccessMsg()
    setError()
    const isValid = await verifyMessage({
      setError,
      message: data.get("message"),
      address: data.get("address"),
      signature: data.get("signature")
    })

    if (isValid) {
      setSuccessMsg("Signature is valid!")
    } else {
      setError("Invalid signature")
    }
  }

  return (
    <form onSubmit={handleVerification}>
      <div>
        <div>
          <h1>Verify signature</h1>
          <div>
            <div>
              <textarea required type="text" name="message" placeholder="Message" />
            </div>
            <div>
              <textarea required type="text" name="signature" placeholder="Signature" />
            </div>
            <div>
              <input required type="text" name="address" placeholder="Signer address"/>
            </div>
          </div>
        </div>
        <div>
          <button type="submit">Verify signature</button>
        </div>
        <div>
          <ErrorMessage message={error} />
          <SuccessMessage message={successMsg} />
        </div>
      </div>
    </form>
  )
}
