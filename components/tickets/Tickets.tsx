import Link from 'next/link'

interface Ticket {
  type: string;
  event: string;
  description: string;
  priceHexValue: string;
  price: string;
  name: string;
  exampleImage: string;
}
interface TicketsProps {
  tickets: Ticket[];
}

const Tickets = ({ tickets }: TicketsProps) => {
console.log(tickets)
  let nftGrid = tickets.map((ticket, i) =>
    <div className="nft-card" key={`ticket${i}`}>
      <a href={`/mint/${ticket.type}`}>
        <div>{ticket.event}</div>
        <div>{ticket.description}</div>
        <br />
      </a>
    </div>
  )

  return (
    <>
      <h1>Tickets Available</h1>
      <div className="nft-grid">
        {nftGrid}
      </div>
    </>
  )
}

export default Tickets