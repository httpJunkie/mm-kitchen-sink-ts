import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

import Toggle from '../ui-components/toggle/Toggle'

const Foot = () => {
  const context = useContext(AppContext)
  const isLight = context.themeMode === 'light'

  const handleSwitch = () => {
    context.changeTheme(isLight ? 'dark' : 'light')
  }
  
  return (
    <>
      <div className="left">
        🦊 Be Foxy
      </div>
      <div className="right">
        <Toggle onChange={handleSwitch} />
      </div>
    </>
  )
}

export default Foot