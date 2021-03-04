import React, { useState } from 'react';
import Aside from '../components/Aside'
import Header from '../components/Header'
import Main from '../components/Main'

import '../styles/style.css'
import { SizeContext, SiteSize } from '../context'

function Homepage() {
  const [defaultSize, setDefaultSize] = useState(SiteSize.defaultSize)

  const setSize = () => setDefaultSize(prevValue => !prevValue)

  let windowWidth = window.innerWidth

  window.addEventListener('resize', ()=>{
    let newWidth = window.innerWidth

    if(newWidth < 1000 && windowWidth >= 1000){
      setDefaultSize(true)
      windowWidth = newWidth
    } else if (newWidth >= 1000 && windowWidth < 1000){
      setDefaultSize(false)
      windowWidth = newWidth
    }
  })

  window.onload = () => {
    if (window < 1000) {
      setDefaultSize(true)
    }
  }

  return (
    <>
    <SizeContext.Provider value={{defaultSize, setSize}}>
      <Header />
      <Aside />
      <Main />
    </SizeContext.Provider>
    </>
  )
}

export default Homepage