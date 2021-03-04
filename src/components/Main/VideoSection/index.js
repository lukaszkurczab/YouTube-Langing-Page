import React, { useState } from 'react'
import Video from '../VideoPattern'
import Posts from '../PostSection'

const list = [
  {
    id: "1",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "2",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "3",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "4",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "5",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "6",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "7",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "8",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "9",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "10",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "11",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "12",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "13",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "14",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "15",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "16",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "17",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "18",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "19",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "20",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "21",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "22",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "23",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  },
  {
    id: "24",
    title: "Lorem ipsum",
    channel: "Lorem ipsum"
  }
]

const VideoSection = () => {
  const [rowElements, setRowElements] = useState(window.innerWidth)

  const resize = new ResizeObserver(function(entries){
    let width = window.innerWidth

    setRowElements(()=>{
      if(width>=1280){
        return 4
      } else if (width >= 1040){
        return 3
      } else if (width >= 765){
        return 2
      } else{
        return 1
      }
    })
  })

  resize.observe(document.querySelector('body'))

  return(
    <div className="mainWrapper">
      <div className="main__filmsWrapper">
        {list.slice(0, (rowElements * 2)).map((video)=>(
          <Video key={video.id} id={video.id} title={video.title} channel={video.channel} />
        ))}
      </div>
      <Posts/>
      <div className="main__filmsWrapper">
        {list.slice((rowElements * 2)).map((video)=>(
          <Video key={video.id} id={video.id} title={video.title} channel={video.channel} />
        ))}
      </div>
    </div>
  )
}

export default VideoSection