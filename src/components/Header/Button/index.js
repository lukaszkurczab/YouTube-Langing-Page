import React from 'react'

import './style.css'

const Button = ({text, desc, icon, onClick, id}) => {
  return(
    <div className="headerButton__wrapper button labelToggler" onClick={onClick} id={id? `${id}Wrapper`:''}>
      <button className="headerButton__icon">
        <img src={icon} alt={desc} id={id}/>
      </button>

      <div className="label">
        <p>{text}</p>
      </div>
  </div>
  )
}

export default Button