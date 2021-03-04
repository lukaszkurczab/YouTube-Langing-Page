import React from 'react'
import styled from 'styled-components'

const Button = ({ text, desc, icon, link }) => {
  return (
    <a href={link} className="main__listItem buttonWrapper">
      <img src={icon} alt={desc} className="main__listImg" />
      <p className="main__listText">{text}</p>
    </a>
  )
}

const Menu = (props) => {
  const posX = window.innerWidth - props.posX > 282 ? 'left: 0' : 'right: 0'
  const posY = window.innerHeight - props.posY > 136 ? '' : 'top: -136px'

  const Wrapper = styled.div`
  ${posX};
  ${posY};
  position: absolute;
  z-index: 100
  `
  return (
    <Wrapper>
      <div className="main__listWrapper">
        <div className="main__list">
          <Button text="Report" desc="Report" icon="./images/flag.svg" link="#" />
          <Button text="Not interested" desc="Not interested" icon="./images/notInterested.svg" link="#" />
          <Button text="Don't recommend channel" desc="Don't recommend" icon="./images/dontRecommend.svg" link="#" />
        </div>
      </div>
    </Wrapper>
  )
}

export default Menu