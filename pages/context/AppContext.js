import { useState, useEffect, createContext } from 'react'
// import { useMediaPredicate } from 'react-media-hook'

const AppContext = createContext()
const AppProvider = props => {

  // const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  // const getLocalStorageBykey = () => {
  //   if (typeof window !== 'undefined') {
  //     const item = localStorage.getItem('key')
  //   }
  // }

  const [appData, setApp] = useState({
    navOpen: false,
    toggleSidenav: value => setApp(data => (
      { ...data, navOpen: value }
    )),
    themeMode: 'dark',
    // themeMode: getLocalStorageBykey('space-x_theme') || preferredTheme,
    changeTheme: mode => setApp(data => (
      { ...data, themeMode: mode }
    ))
  })

  // useEffect(() => {
  //     localStorage.setItem('space-x_theme', appData.themeMode)
  //   }, [appData.themeMode]
  // )

  return <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
}

export { AppContext, AppProvider }