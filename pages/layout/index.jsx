import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'
import { AppContext } from '../context/AppContext'
import { useMediaPredicate } from 'react-media-hook'
import useSWR from 'swr'

import Logo from '../partial-components/Logo'
import Sidenav from '../partial-components/Sidenav'
import Topnav from '../partial-components/Topnav'
import Foot from '../partial-components/Foot'

const Layout = ({ children }) => {
  const { user } = useContext(ViewContext)
  const { address } = user
  const context = useContext(AppContext)

  return (
    <div className={`app-container ${context.breakpoint} ${context.themeMode}`}>
      <main>
        <header>
          <Logo />
          <Topnav />
        </header>
        <section>
          {children}
        </section>
        <footer>
          <Foot />
        </footer>
      </main>
      <Sidenav />
    </div>
  )
}

export default Layout
