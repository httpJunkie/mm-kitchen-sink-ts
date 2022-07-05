import { useContext } from 'react'
import Head from 'next/head'
import { ViewContext } from '../../context/ViewContext'
import { AppContext } from '../../context/AppContext'
// import { useMediaPredicate } from 'react-media-hook'

import Logo from './Logo'
import Sidenav from './Sidenav'
import Topnav from './Topnav'
import Foot from './Foot'

const Layout = ({ children }: any) => {
  const { user } = useContext(ViewContext)
  // const { address } = user
  const context = useContext(AppContext)

  return (
    <>
      <Head>
        <title>MetaMask Kitchen Sink Dapp</title>
        <meta name="description" content="MetaMask API Methods in Real World React Components" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
    </>
  )
}

export default Layout
