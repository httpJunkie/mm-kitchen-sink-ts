import { useState, useRef } from "react"
import { ethers } from "ethers"
import ErrorMessage from "./ErrorMessage"

const signMessage = async ({ setError, message }): Promise<any> => {
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.")

    await window.ethereum.send("eth_requestAccounts")
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const signature = await signer.signMessage(message)
    const address = await signer.getAddress()

    return {
      message,
      signature,
      address
    }
  } catch (err:any) {
    setError(err.message)
  }
}

export default function SignMessage() {
  const resultBox = useRef()
  const [signatures, setSignatures] = useState<any[]>([])
  const [error, setError] = useState<string>("")

  const handleSign = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const data = new FormData(event.target)
    console.log(`ERROR: ${error}`)
    setError()
    console.log(`ERROR: ${error}`)
    const sig = await signMessage({
      setError,
      message: data.get("message")
    })
    if (sig) {
      setSignatures([...signatures, sig])
    }
  }

  return (
    <form onSubmit={handleSign}>
      <div>
        <div>
          <h1>Sign messages</h1>
          <div>
            <textarea required type="text" name="message" placeholder="Message" />
          </div>
        </div>
        <div>
          <button type="submit">Sign message</button>
          <ErrorMessage message={error} />
        </div>
        {signatures.map((sig, idx) => {
          return (
            <div key={`${sig}-${idx}`}>
              <p>Message {idx + 1}: {sig.message}</p>
              <p>Signer: {sig.address}</p>
              <textarea readOnly type="text" ref={resultBox} placeholder="Generated signature"
                value={sig.signature}
              />
            </div>
          )
        })}
      </div>
    </form>
  )
}
