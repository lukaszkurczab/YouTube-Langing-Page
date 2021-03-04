import React from 'react'
import Pattern from './pattern'

const Menu = () => {
  return(
    <div className="notificationBox header__listWrapper">
    <div className="header__listTitleWrapper">
      <h2 className="header__listTitle">Notifications</h2>
      <div className="notifications__imgWrapper">
        <img src="./images/settings.svg" alt="Setting" className="notifications__img"/>
      </div>
    </div>
    <ul className="header__list ownScrollBar" id="notificationsWrapper">
      <Pattern/>
    </ul>
  </div>
  )
}

export default Menu