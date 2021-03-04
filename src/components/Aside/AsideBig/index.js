import React from 'react'
import Button from '../../Button'

import './style.css'

const AsideBig = () => {
  return (
    <aside className="aside">
      <div className="bigAside ownScrollBar">
        <div className="listSection">
          <Button text="Home" desc="Home" icon="./images/home.svg" link="#" additionalClasses="active" />
          <Button text="Trending" desc="Trending" icon="./images/fire.svg" link="#" />
          <Button text="Subscriptions" desc="Subscriptions" icon="./images/subscriptions.svg" link="#" />
        </div>
        <div className="listSection">
          <Button text="Library" desc="Library" icon="./images/library.svg" link="#" />
          <Button text="History" desc="History" icon="./images/history.svg" link="#" />
          <Button text="Your videos" desc="Your videos" icon="./images/play.svg" link="#" />
          <Button text="Watch later" desc="Watch later" icon="./images/clock.svg" link="#" />
          <Button text="Liked videos" desc="Liked videos" icon="./images/like.svg" link="#" />
        </div>
        <div className="listSection">
          <h2 className="aside__title">Subscriptions</h2>
          <Button text="Lorem ipsum" desc="Profile" icon="./images/profil1.jpg" link="#" additionalClasses="color profileAvatar"/>
          <Button text="Lorem ipsum" desc="Profile" icon="./images/profil2.jpg" link="#" additionalClasses="color profileAvatar"/>
          <Button text="Lorem ipsum" desc="Profile" icon="./images/profil3.jpg" link="#" additionalClasses="color profileAvatar"/>
        </div>
        <div className="listSection">
          <h2 className="aside__title">More from YouTube</h2>
          <Button text="YouTube Premium" desc="YouTube Premium" icon="./images/youtubeOnlyIcon.svg" link="#" />
          <Button text="Films" desc="Films" icon="./images/film.svg" link="#" />
          <Button text="Gaming" desc="Gaming" icon="./images/game.svg" link="#"/>
          <Button text="Live" desc="Live" icon="./images/live.svg" link="#" />
          <Button text="Sport" desc="Sport" icon="./images/sport.svg" link="#" />
        </div>
        <div className="listSection">
          <Button text="Settings" desc="Settings" icon="./images/cog.svg" link="#" />
          <Button text="Report history" desc="Report history" icon="./images/flag.svg" link="#" />
          <Button text="Help" desc="Help" icon="./images/help.svg" link="#" />
          <Button text="Send feedback" desc="Send feedback" icon="./images/error.svg" link="#" />
        </div>
        <div className="listSection">
          <div className="aside__linksWrapper">
            <a href="#" className="aside__link">About</a>
            <a href="#" className="aside__link">Press</a>
            <a href="#" className="aside__link">Copyright</a>
            <a href="#" className="aside__link">Contact us</a>
            <a href="#" className="aside__link">Creator</a>
            <a href="#" className="aside__link">Advertise</a>
            <a href="#" className="aside__link">Developers</a>
          </div>
          <div className="aside__linksWrapper">
            <a href="#" className="aside__link">Terms</a>
            <a href="#" className="aside__link">Privacy</a>
            <a href="#" className="aside__link">Policy & Safety</a>
            <a href="#" className="aside__link">How YouTube works</a>
            <a href="#" className="aside__link">Test new features</a>
          </div>
          <p className="licence">© 2021 Google LLC</p>
        </div>
      </div>
    </aside>
  )
}

export default AsideBig