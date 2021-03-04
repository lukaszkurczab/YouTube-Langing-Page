import React from 'react'
import Button from '../../Button'

const Menu = () =>{
  return(
    <div className="header__listWrapper">
      <div className="listSection">
        <Button text="YouTube TV" desc="YouTube TV" icon="./images/colorYouTubeTV.svg" link="#" additionalClasses="color"/>
        <Button text="YouTube Music" desc="YouTube Music" icon="./images/colorYouTubeMusic.svg" link="#" additionalClasses="color"/>
        <Button text="YouTube Kids" desc="YouTube Kids" icon="./images/colorYouTubeKids.svg" link="#" additionalClasses="color"/>
      </div>
      <div className="listSection">
        <Button text="Creator Academy" desc="Creator Academy" icon="./images/colorYouTube.svg" link="#" additionalClasses="color"/>
        <Button text="YouTube for Artists" desc="YouTube for Artists" icon="./images/colorYouTube.svg" link="#" additionalClasses="color"/>
      </div>
    </div>
  )
}

export default Menu