import { useContext } from 'react'
import { ViewContext } from '../context/ViewContext'
import { AppContext } from '../context/AppContext'
import { useMediaPredicate } from 'react-media-hook'

import Logo from '../partial-components/Logo'
import Sidenav from '../partial-components/Sidenav'
import Topnav from '../partial-components/Topnav'
import Foot from '../partial-components/Foot'

const Layout = ({ children }) => {
  const { user } = useContext(ViewContext)
  const { address } = user
  const context = useContext(AppContext)
  const isMedium = useMediaPredicate('(min-width: 600px)')
  const breakpoint = isMedium ? 'medium' : 'small'

  // const { data, error } = useSWR('/api/navigation', fetcher)
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>

  return (
    <div className={`app-container ${breakpoint} ${context.themeMode}`}>
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
