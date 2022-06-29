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
        🦊 <a className="text_link" href="https://twitter.com/httpJunkie/status/1479322790654189569" target="_blank">Stay Foxy</a>
      </div>
      <div className="right">
        <Toggle onChange={handleSwitch} />
      </div>
    </>
  )
}

export default Foot