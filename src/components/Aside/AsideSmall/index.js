import React from 'react'
import Button from '../../Button'

import './style.css'

const AsideSmall = () => {
  return (
    <aside className="aside asideSmall">
      <div className="ownScrollBar">
          <Button text="Home" desc="Home" icon="./images/home.svg" link="#" additionalClasses="active" />
          <Button text="Trending" desc="Trending" icon="./images/fire.svg" link="#" />
          <Button text="Subscriptions" desc="Subscriptions" icon="./images/subscriptions.svg" link="#" />
          <Button text="Library" desc="Library" icon="./images/library.svg" link="#" />
      </div>
    </aside>
  )
}

export default AsideSmall