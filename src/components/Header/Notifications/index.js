import React, { useState } from 'react'
import Button from '../Button'
import Menu from './menu'

import './style.css'

const Notifications = () => {
  const [showNotificationsMenu, toggleShowNotificationsMenu] = useState(false)

  window.addEventListener('click', (e) => {
    if (e.target.id !== "notificationsToggler" &&
      e.target.id !== "notificationsTogglerWrapper") {
      toggleShowNotificationsMenu(false)
    }
  })

  return (
    <div className="header__iconWrnotificationser button notificationsToggler" onClick={() => toggleShowNotificationsMenu(!showNotificationsMenu)}>
      <Button text="Notifications" icon="./images/notification.svg" desc="Add video" id="notificationsToggler" />
      {showNotificationsMenu ? <Menu /> : null}
    </div>
  )
}

export default Notifications