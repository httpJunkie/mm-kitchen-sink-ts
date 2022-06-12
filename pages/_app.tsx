import 'normalize.css'
import '../styles/globals.scss'
import '../styles/Topnav.scss'
import '../styles/Sidenav.scss'
import '../styles/Hamburger.scss'
import '../styles/Switcher.scss'

import type { AppProps } from 'next/app'
import { ViewProvider } from './context/ViewContext'
import { AppProvider } from './context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ViewProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ViewProvider>
  )
}

export default MyApp
