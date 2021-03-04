import React, { useState } from 'react'
import Button from '../Button'
import Menu from './menu'

const Create = () => {
  const [showCreateMenu, toggleShowCreateMenu] = useState(false)

  window.addEventListener('click', (e) => {
    if (e.target.id !== "createToggler" &&
      e.target.id !== "createTogglerWrapper") {
      toggleShowCreateMenu(false)
    }
  })

  return (
    <div className="header__iconWrapper button createToggler" onClick={() => toggleShowCreateMenu(!showCreateMenu)}>
      <Button text="Create" icon="./images/addVideo.svg" desc="Add video" id="createToggler" />
      {showCreateMenu ? <Menu /> : null}
    </div>
  )
}

export default Create