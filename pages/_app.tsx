import 'normalize.css'
import '../styles/globals.scss'
import '../styles/Topnav.scss'
import '../styles/Sidenav.scss'
import '../styles/Hamburger.scss'
import '../styles/Switcher.scss'
import '../styles/Button.scss'
import '../styles/Link.scss'
import '../styles/Logo.scss'

import type { AppProps } from 'next/app'
import { ViewProvider } from './context/ViewContext'
import { AppProvider } from './context/AppContext'

import Layout from './layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ViewProvider>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </ViewProvider>
  )
}

export default MyApp
