import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'
import { Column, Row } from 'simple-flexbox'

import SignMessage from '../components/ui/metamask/SignMessage'
import VerifyMessage from '../components/ui/metamask/VerifyMessage'

const Sign: NextPage = () => {
  const { user } = useContext(ViewContext)
  const { address } = user

  return (
    <>
      <div>
        {!address
          ? <div>Not Connected to Ethereum</div> 
          : <Row horizontal='spaced'>
              <Column flexGrow={1} style={{width:'45%', padding: 5}}>
                <SignMessage />
              </Column>
              <Column flexGrow={1} style={{width:'55%', padding: 5}}>
                <VerifyMessage  />
              </Column>
            </Row>
        }
      </div>
    </>
  )
}

export default Sign