import React from 'react'
import './style.css'

function Button({ text, desc, icon, link, additionalClasses }) {
  return (
    <a href={link} className="navButton buttonWrapper">
      <img src={icon} alt={desc} className={`navButton__icon ${additionalClasses}`} />
      <p className="navButton__text">{text}</p>
    </a>
  )
}

export default Button