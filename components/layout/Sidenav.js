import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

import Menu from './Menu'

const Sidenav = () => {
  const context = useContext(AppContext)
  return (
    <div className={`sidenav ${context.navOpen ? 'show' : 'hide'}`}>
      <Menu />
    </div>
  )
}

export default Sidenav