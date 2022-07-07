import { useState, useRef } from "react"
import { ethers } from "ethers"
import ErrorMessage from "./ErrorMessage"
import SuccessMessage from "./SuccessMessage"
import Button from "../Button";

interface Message {
  message: string;
  address: string;
  signature: string;
}

const verifyMessage = async(message: Message) => {
  try {
    const signerAddr = await ethers.utils.verifyMessage(message.message, message.signature)
    if (signerAddr !== message.address) {
      return false
    }

    return true
  } catch (err) {
    console.log(err)
    return false
  }
}

export default function VerifyMessage() {
  const [error, setError] = useState<string>("")
  const [successMsg, setSuccessMsg] = useState<string>("")

  const handleVerification = async (event: any) => {
    event.preventDefault()
    const data = new FormData(event.target)
    setSuccessMsg("")
    setError("")
    const isValid = await verifyMessage({
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
          <Button type="submit">Verify</Button>
        </div>
        <div>
          <ErrorMessage message={error} />
          <SuccessMessage message={successMsg} />
        </div>
      </div>
    </form>
  )
}
