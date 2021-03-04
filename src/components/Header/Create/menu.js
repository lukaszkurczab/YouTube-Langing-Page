import React from 'react'
import Button from '../../Button'

const Menu = ()=>{
  return(
    <div className="header__listWrapper">
    <div className="listSection">
      <Button text="Upload video" desc="Upload video" icon="./images/colorNew.png" link="#" additionalClasses="color"/>
      <Button text="Go live" desc="Go live" icon="./images/colorLive.png" link="#" additionalClasses="color"/>
    </div>
  </div>
  )
}

export default Menu