import React, { useState } from 'react'
import Menu from './menu'

import './style.css'

const Video = ({title, channel, id}) => {
  const [active, setActive] = useState(false)
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

  window.addEventListener('click', e => {
    if(e.target.parentNode.id !== `videoButton${id}`){
      setActive(false)
    }
  })
  
  return(
    <div id={"video" + id} className="main__filmWrapper">
      <div className="main__filmShortWrapper">
        <img src="./images/videoPlaceholder.png" alt="Cannot find video" className="main__filmShort"/>
        <div className="main__videoButtonWrapper">
          <div className="main__videoButtonIconWrapper">
            <img src="./images/clock.svg" alt="Watch later" className="main__videoButtonIcon"/>
          </div>
          <div className="main__videoTextWrapper">
            <p className="main__videoText">Watch later</p>
          </div>
        </div>
        <div className="main__videoButtonWrapper">
          <div className="main__videoButtonIconWrapper">
            <img src="./images/queue.svg" alt="Watch later" className="main__videoButtonIcon"/>
          </div>
          <div className="main__videoTextWrapper">
            <p className="main__videoText">Add to Queue</p>
          </div>
        </div>
        <div className="main__filmTimeWrapper">
          <p className="main__filmTime">14:58</p>
        </div>
      </div>
      <div className={active ? "active main__descWrapper" : "main__descWrapper"}>
        <div className="main__authorAvatarWrapper">
          <img src="./images/profil1.jpg" alt="Lorem ipsum" className="main__authorAvatar profileAvatar"/>
        </div>
        <div className="main__textWrapper">
          <div className="main__titleWrapper">
            <h2 className="main__title">
              {title}
            </h2>
          </div>
          <div className="main__channelWrapper">
            <p className="main__text">{channel}</p>
          </div>
          <p className="main__text main__views">50K views</p>
          <p className="main__text">2 years ago</p>
        </div>
        <div className="main__optionsWrapper">
          <button id={"videoButton" + id} className="main__more" onClick={e=>{setActive(!active); setPosX(e.clientX); setPosY(e.clientY)}}>
            <img src="./images/dots.svg" alt="More" className="main__optionsImg"/>
          </button>
          {active && <Menu posX={posX} posY={posY}/>}
        </div>
      </div>
    </div>
  )
}

export default Video