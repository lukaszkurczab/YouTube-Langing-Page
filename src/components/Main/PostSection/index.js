import React from 'react'
import Post from '../PostPattern'

const Posts = () => {
  return(
    <div className="innerSection">
      <h3 className="innerSection__title">New posts on YouTube</h3>
      <div className="innerSection__postsWrapper">
        <Post id={1}/>
        <Post id={2}/>
        <Post id={3}/>
      </div>
    </div>
  )
}

export default Posts