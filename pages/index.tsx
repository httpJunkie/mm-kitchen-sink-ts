import type { NextPage } from 'next'
import { useContext, useEffect } from 'react'
import { useMediaPredicate } from 'react-media-hook'
import { AppContext } from './context/AppContext'

import { SiEthereum } from 'react-icons/si';

const Home: NextPage = () => {
  const context = useContext(AppContext)
  const isMedium = useMediaPredicate('(min-width: 600px)')
  const breakpoint = isMedium ? 'medium' : 'small'

  useEffect(() => {
    context.changeBreakpoint(breakpoint)
  }, [breakpoint])

  return (
    <div className="home">
      <SiEthereum />
    </div>
  )
}

export default Home
