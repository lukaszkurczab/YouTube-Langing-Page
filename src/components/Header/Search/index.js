import React from 'react'
import Button from '../Button'

import './style.css'

const Search = () => {
  return(
    <div className="search__wrapper">
      <form action="#" className="search__searchBoxWrapper">
        <div className="search__searchAreaWrapper">
          <input type="text" placeholder="Search" className="search__searchInput"/>
          <a href="#">
            <img src="./images/keyboard.png" alt="Screen keyboard" className="search__keyboardIcon"/>
          </a>
        </div>

        <button className="search__submitWrapper labelToggler">
          <input type="submit" value="" className="search__submitIcon"/>
          <div className="label">
            <p>Search</p>
          </div>
        </button>
      </form>

      <Button text="Search with your voice" desc="Voice search" icon="./images/microphone.svg"/>
  </div>
  )
}

export default Search