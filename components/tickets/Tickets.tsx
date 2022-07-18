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
      <Link href={`/mint/${ticket.type}`}>
        <a className='text_link'>{ticket.event}</a>
      </Link>
      <div>{ticket.description}</div>
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