import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import Switcher from '../ui-components/switcher/Switcher'

const Foot = () => {
  const context = useContext(AppContext)
  const isLight = context.themeMode === 'light'

  const handleSwitch = () => {
    context.changeTheme(isLight ? 'dark' : 'light')
  }
  
  return (
    <>
      <div className="left">
        🦊 Be Foxy {context.themeMode}
      </div>
      <div className="right">
        <Switcher onChange={handleSwitch} />
      </div>
    </>
  )
}

export default Foot