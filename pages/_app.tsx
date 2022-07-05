import 'normalize.css'
import '../styles/Button.scss'
import '../styles/Chain.scss'
import '../styles/DisplayAccount.scss'
import '../styles/ErrorMessage.scss'
import '../styles/globals.scss'
import '../styles/Hamburger.scss'
import '../styles/Link.scss'
import '../styles/Logo.scss'
import '../styles/Sidenav.scss'
import '../styles/SuccessMessage.scss'
import '../styles/Toggle.scss'
import '../styles/Topnav.scss'

import type { AppProps } from 'next/app'
import { ViewProvider } from '../context/ViewContext'
import { AppProvider } from '../context/AppContext'

import Layout from '../components/layout/Layout'

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
