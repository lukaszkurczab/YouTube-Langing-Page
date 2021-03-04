import React from 'react'
import Logo from './Logo'
import Search from './Search'
import Create from './Create'
import Applications from './Applications'
import Notifications from './Notifications'
import UserPanel from './UserPanel'

import './style.css'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Search />
      <div className="header__userOptionsWrapper">
        <Create />
        <Applications />
        <Notifications />
        <UserPanel />
      </div>
    </div>
  )
}

export default Header