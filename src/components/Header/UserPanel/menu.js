import React from 'react'
import Button from '../../Button'

const Menu = () => {
  return (
    <div className="header__listWrapper userPanel ownScrollBar">
      <div className="listSection">
        <div className="header__listItemWrapper">
          <div className="header__accountWrapper">
            <div className="header__accountImgWrapper">
              <img src="./images/avatar.jpg" alt="Lorem Ipsum" className="header__accountImg profilAvatar" />
            </div>

            <div className="header__accountTextWrapper">
              <p className="header__accountName">Lorem Ipsum</p>
              <p className="header__accountMail">loremipsum@example.com</p>
              <a href="#" className="header__accountManage">Manage your Google Account</a>
            </div>
          </div>
        </div>
      </div>
      <div className="listSection">
        <Button text="Your channel" desc="Your channel" icon="./images/channel.svg" link="#" />
        <Button text="Purchases and memberships" desc="Purchases and memberships" icon="./images/cash.svg" link="#" />
        <Button text="YouTube Studio" desc="YouTube Studio" icon="./images/youTubeCog.svg" link="#" />
        <Button text="Switch account" desc="Switch account" icon="./images/channelSwap.svg" link="#" />
        <Button text="Sign out" desc="Sign out" icon="./images/logout.svg" link="#" />
      </div>
      <div className="listSection">
        <Button text="Appearance: Device theme" desc="Appearance: Device theme" icon="./images/mode.svg" link="#" />
        <Button text="Language: British English" desc="Language: British English" icon="./images/language.svg" link="#" />
        <Button text="Location: Poland" desc="Location: Poland" icon="./images/localization.svg" link="#" />
        <Button text="Settings" desc="Settings" icon="./images/cog.svg" link="#" />
        <Button text="Your data in YouTube" desc="Your data in YouTube" icon="./images/security.svg" link="#" />
        <Button text="Help" desc="Help" icon="./images/help.svg" link="#" />
        <Button text="Send feedback" desc="Send feedback" icon="./images/error.svg" link="#" />
        <Button text="Keyboard shortcuts" desc="Keyboard shortcuts" icon="./images/keyboard.svg" link="#" />
      </div>
    </div>
  )
}

export default Menu