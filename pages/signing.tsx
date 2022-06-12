import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from './context/ViewContext'

const Frame: NextPage = () => {
  const { user } = useContext(ViewContext)
  const { address } = user

  return (
    <div className="signing">
      Signing
    </div>
  )
}

export default Frame
