import React, { useState } from 'react'
import Menu from './menu'

import './style.css'

const Button = ({ text, desc, icon}) =>{
  return(
    <button className="labelToggler">
      <img src={icon} alt={desc} className="main__listImg"/>
      <div className="label">
        <p>{text}</p>
      </div>
    </button>
  )
}

const Post = ({ id }) => {
  const [active, setActive] = useState(false)
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

  window.addEventListener('click', e => {
    if(e.target.parentNode.id !== `postButton${id}`){
      setActive(false)
    }
  })

  return(
    <div id={"post" + id} className={active ? "active innerSection__postWrapper" : "innerSection__postWrapper"}>
      <div className="innerSection__postHeader">
        <img src="./images/profil1.jpg" alt="Lorem ipsum" className="profilAvatar innerSection__channelLogo"/>
        <p className="main__text">Lorem ipsum</p>
        <p className="main__text">2 hours ago</p>
      </div>
      <div className="innerSection__postMain">
        <div className="innerSection__postMainText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quia exercitationem dolor, odit itaque accusamus quae quidem voluptates obcaecati necessitatibus expedita totam! Rem sint autem asperiores quisquam molestiae ratione inventore.
        </div>
        <img src="./images/videoPlaceholder.png" alt="Lorem ipsum" className="innerSection__postMainImg"/>
      </div>
      <div className="innerSection__postFooter">
        <div className="innerSection__votesWrapper">
          <Button text="Like" desc="Like" icon="./images/like.svg"/>
          <span className="innerSection__voteCount innerSection__text">256</span>
          <Button text="Dislike" desc="Dislike" icon="./images/dislike.svg"/>
        </div>
        <div className="innerSection__commentsWrapper">
          <Button text="Add a comment" desc="Comments" icon="./images/comment.svg"/>
          <span className="innerSection__commentNumber innerSection__text">23</span>
          <div className="main__buttonWrapper">
            <button className="main__more" id={"postButton" + id} onClick={e => {setActive(!active); setPosX(e.clientX); setPosY(e.clientY)}}>
              <img src="./images/dots.svg" alt="More"/>
            </button>
            {active && <Menu posX={posX} posY={posY}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post