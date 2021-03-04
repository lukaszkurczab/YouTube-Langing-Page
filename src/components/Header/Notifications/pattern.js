import React from 'react'

const Pattern = () => {
  return(
    <li>
      <button className="notification__wrapper">
        <div className="notification__avatarWrapper">
          <img src="./images/profil1.jpg" alt="Profile name" className="notification__avatar profilAvatar"/>
        </div>

        <div className="notification__textWrapper">
          <h3 className="notification__text">The channel has uploaded a video Lorem ipsum dolor</h3>
          <span className="notification__time">1 day ago</span>
        </div>

        <div className="notification__filmShortWrapper">
          <img src="./images/videoPlaceholder.png" alt="Lorem ipsum" className="notification__filmShort"/>
        </div>
      </button>
    </li>
  )
}

export default Pattern