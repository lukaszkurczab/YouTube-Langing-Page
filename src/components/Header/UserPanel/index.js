import React, { useState } from 'react'
import Menu from './menu'

import './style.css'

const UserPanel = () => {
  const [userPanel, toggleUserPanel] = useState(false)

  window.addEventListener('click', (e) => {
    if(!e.target.classList.contains("header__profilePictureWrapper") &&
    !e.target.classList.contains("header__profilePicture")) {
      toggleUserPanel(false)
    }
  })

  return(
    <div className="header__profilePictureWrapper" onClick={()=>toggleUserPanel(!userPanel)}>
      <img src="./images/avatar.jpg" alt="Lorem" className="header__profilePicture"/>
      {userPanel ? <Menu/> : null}
    </div>
  )
}

export default UserPanel