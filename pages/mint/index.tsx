import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from '../../context/ViewContext'
import { Column, Row } from 'simple-flexbox'

const Mint: NextPage = () => {
  const { user } = useContext(ViewContext)
  const { address } = user

  return (
    <div className="mint">
      {!address
        ? <div>Not Connected to Ethereum</div> 
        : <Row horizontal='spaced'>
            <Column flexGrow={1} style={{width:'45%', padding: 5}}>
              <span>left</span>
            </Column>
            <Column flexGrow={1} style={{width:'55%', padding: 5}}>
              <span>right</span>
            </Column>
          </Row>
      }
    </div>
  )
}

export default Mint