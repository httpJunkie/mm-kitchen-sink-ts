import { useState, 
  // useEffect, 
  createContext, useContext } from 'react'
import { ViewContext } from './ViewContext'
// import { useMediaPredicate } from 'react-media-hook'

const AppContext = createContext()
const AppProvider = props => {

  // const preferredTheme = useMediaPredicate('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  // const getLocalStorageBykey = () => {
  //   if (typeof window !== 'undefined') {
  //     const item = localStorage.getItem('key')
  //   }
  // }

  const { bigNumberify } = useContext(ViewContext)
  const ethGa = '0.01'
  const ethVip = '0.02'
  const ethGaHex = bigNumberify(ethGa)._hex
  const ethVipHex = bigNumberify(ethVip)._hex
  const tickets = [
    {
      type: "ga",
      event: "ConsenSys 2022",
      description: "General Admission Ticket",
      price: ethGa,
      priceHexValue: ethGaHex // '0x2386f26fc10000' *eserialize.com
    },{
      type: "vip",
      event: "ConsenSys 2022",
      description: "VIP Ticket",
      price: ethVip,
      priceHexValue: ethVipHex // '0x470de4df820000' *eserialize.com
    }
  ]

  const [appData, setApp] = useState({
    navOpen: false,
    toggleSidenav: value => setApp(data => (
      { ...data, navOpen: value }
    )),
    breakpoint: "default",
    changeBreakpoint: value => setApp(data => (
      { ...data, breakpoint: value }
    )),
    themeMode: 'dark',
    // themeMode: getLocalStorageBykey('space-x_theme') || preferredTheme,
    changeTheme: mode => setApp(data => (
      { ...data, themeMode: mode }
    )),
    tickets: tickets
  })

  // useEffect(() => {
  //     localStorage.setItem('space-x_theme', appData.themeMode)
  //   }, [appData.themeMode]
  // )

  return <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
}

export { AppContext, AppProvider }