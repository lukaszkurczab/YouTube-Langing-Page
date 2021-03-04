import React, { useState } from 'react'
import Button from '../Button'
import Menu from './menu'

const Applications = () => {
  const [showAppMenu, toggleShowAppMenu] = useState(false)

  window.addEventListener('click', (e) => {
    if (e.target.id !== "appToggler" &&
      e.target.id !== "appTogglerWrapper") {
      toggleShowAppMenu(false)
    }
  })

  return (
    <div className="header__iconWrapper button appToggler" onClick={() => toggleShowAppMenu(!showAppMenu)}>
      <Button text="App" icon="./images/options.svg" desc="Add video" id="appToggler" />
      {showAppMenu ? <Menu /> : null}
    </div>
  )
}

export default Applications