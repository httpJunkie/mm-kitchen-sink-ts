import Link from 'next/link'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { SiGithub } from 'react-icons/si'

import Hamburger from '../ui/hamburger/Hamburger'

interface AppRoute {
  name: string;
  href: string;
}
interface RouterLinksProps {
  routes: AppRoute[];
}

const RouterLinks = ({ routes }: RouterLinksProps) => {
  return <>
    {routes.map(
      (route, idx) =>
        <li className="link" key={`${route.name}-${idx}`}>
          <Link href={route.href}>
            <a className='text_link'>{route.name}</a>
          </Link>
        </li>
    )}
  </>
}

const Menu = () => {
  const context = useContext(AppContext)
  const handleClick = () => {
    context.toggleSidenav(!context.navOpen)
  }

  const myAppRoutes: AppRoute[] = [
    { name: "home", href: "/" },
    { name: "accounts", href: "/accounts" },
    { name: "chain", href: "/chain" },
    { name: "mint", href: "/mint" },
    { name: "sign", href: "/sign" }
  ]

  return (
    <ul style={{ userSelect: 'none' }}>
      <RouterLinks routes={myAppRoutes} />
      <li className='link'>
        <a className='text_link' tabIndex={4} href='https://github.com/httpJunkie/mm-kitchen-sink-ts'>
          <SiGithub />
        </a>
      </li>
      <li className='menu'>
        <Hamburger onClick={handleClick} />
      </li>
    </ul>
  )
}

export default Menu