import React, {useContext} from 'react'
import {SizeContext} from '../../../context'

import './style.css'

const Logo = () => {
  const {setSize} = useContext(SizeContext)

  return(
    <div className="logo__wrapper">
    <button className="logo__sideNavToggler button" onClick={setSize}>
      <img src="./images/bars.svg" alt="Toggle side navigation" />
    </button>

    <div className="logo__homeButtonWrapper">
      <button className="logo__homeButtonImg">
        <img src="./images/youtube.svg" alt="YouTube" />
      </button>
    </div>
  </div>
  )
}

export default Logo