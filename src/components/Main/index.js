import React, {useContext} from 'react'
import VideoSection from './VideoSection'
import { SizeContext} from '../../context'

import './style.css'

const Main = () => {
  const { defaultSize } = useContext(SizeContext)

  return (
    <main className={defaultSize ? "main bigMain" : "main"}>
      <div className="main__filmsWrapper">
        <VideoSection/>
      </div>
    </main>
  )
}

export default Main