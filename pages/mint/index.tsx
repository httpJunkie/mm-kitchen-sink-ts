import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from '../../context/ViewContext'
import { AppContext } from '../../context/AppContext'
import { Column, Row } from 'simple-flexbox'

import MintLayout from '../../components/layout/mint'
import Tickets from '../../components/tickets/Tickets'

const Mint: NextPage = () => {
  const { user } = useContext(ViewContext)
  const { tickets } = useContext(AppContext)
  const { address } = user

  return (
    <MintLayout>
      {!address
        ? <div>Not Connected to Ethereum</div> 
        : <Row horizontal='spaced'>
            <Column flexGrow={1} style={{width:'45%', padding: 5}}>
              <Tickets tickets={tickets} />
            </Column>
            <Column flexGrow={1} style={{width:'55%', padding: 5}}>
              <span>right</span>
            </Column>
          </Row>
      }
    </MintLayout>
  )
}

export default Mint