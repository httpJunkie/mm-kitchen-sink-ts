import '../styles/globals.css'
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
