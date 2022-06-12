import type { NextPage } from 'next'
import { useContext } from 'react'
import { ViewContext } from './context/ViewContext'
import { AppContext } from './context/AppContext'
import { useMediaPredicate } from 'react-media-hook'

import Logo from './partial-components/Logo'
import Sidenav from './partial-components/Sidenav'
import Topnav from './partial-components/Topnav'
import Foot from './partial-components/Foot'

const Frame: NextPage = () => {
  const { user, chainId,
    // , bigNumberify 
  } = useContext(ViewContext)
  const { address } = user
  const context = useContext(AppContext)
  const isMedium = useMediaPredicate('(min-width: 600px)')
  const breakpoint = isMedium ? 'medium' : 'small'
  return (
    <div className={`app-container ${breakpoint} ${context.themeMode}`}>
      <main>
        <header>
          <Logo />
          <Topnav />
        </header>
        <section>

          <span>ROUTER AREA</span>

        </section>
        <footer>
          <Foot />
        </footer>
      </main>
      <Sidenav />
    </div>
  )
}

export default Frame
