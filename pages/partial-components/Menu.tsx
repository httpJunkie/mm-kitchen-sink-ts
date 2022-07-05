import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Link from 'next/link'

import Hamburger from '../../components/ui-components/hamburger/Hamburger'


const RouterLinks = (routes: any) =>
  <>
    {[
      { name: "Home", href: "/" },
      { name: "Signing", href: "/signing" }
    ].map((route, idx) => {
      return (
        <li className="link" key={`${route.name}-${idx}`}>
          <Link href={route.href}>
            <a className='text_link'>{route.name}</a>
          </Link>
        </li>
      )
    })}
  </>

const Menu = () => {
  const context = useContext(AppContext)
  const handleClick = () => {
    context.toggleSidenav(!context.navOpen)
  }


  return (
    <ul style={{ userSelect: 'none' }}>
      <RouterLinks />
      <li className='link'>
        <a className='text_link' tabIndex={4} href='https://github.com/httpJunkie/mm-kitchen-sink'>
          Source Code
        </a>
      </li>
      <li className='menu'>
        <Hamburger onClick={handleClick} />
      </li>
    </ul>
  )
}

export default Menu