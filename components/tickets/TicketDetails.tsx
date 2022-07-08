import { useContext, useState } from 'react'
import { ViewContext } from '../../context/ViewContext'

interface Ticket {
  type: string;
  event: string;
  description: string;
  priceHexValue: string;
  price: string;
  name: string;
  exampleImage: string;
}
interface TicketProps {
  ticket: Ticket;
}

const TicketDetails = ({ ticket }: TicketProps) => {
  const [isMinting, setIsMinting] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const { user, nfTickets, chainId } = useContext(ViewContext)
  const { address } = user

  const mintTicket = async () => {
    console.log("minting start")
    setIsMinting(true)

    nfTickets.mintItem({
      from: address,
      value: ticket.priceHexValue
    })
    .then(async(tx: any) => {
      await tx.wait()
      console.log(`Minting complete, mined: ${tx}`)
      setIsMinting(false)
    })
    .catch((error: any) => {
      console.error(error)
      setError(true)
      setErrorMessage(error?.message)
      setIsMinting(false)
    })
  }

  return (
    <div className="ticketDetails">
      <div className="nftCard">
        <img width="300" height="300" src={ticket.exampleImage} alt={ticket.description} />
        <div className="nftCollName"><strong>nfTickets {ticket.type.toUpperCase()}</strong> ({ticket.price} ETH)</div>
        <div className="innerCont">
          <div className="nftName">{ticket.name}</div>
          { address && (chainId === 4 || chainId === 1337 || chainId === 31337)
            ? <button disabled={isMinting} onClick={mintTicket}>{isMinting ? 'Minting...' : 'Mint'}</button>
            : !address
              ? <div>Not Connected to MetaMask</div> 
              : chainId && chainId !== 4 
                ? <div>Not Connected to Rinkeby</div>
                : null 
          }
        </div>
      </div>
      { 
        error && (
          <div className="styledAlert">
            <div className="alertMessage"><strong>Error:</strong> {errorMessage}</div>
            <button onClick={() => setError(false)}>dismiss</button>
          </div>
        )
      }
    </div>
  )
}

export default TicketDetails