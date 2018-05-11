import React from 'react'

const Comment = () => {
  return (
    <div className="media">
      <div className="media-content">
        <div className="content">
          <p>
            <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
          </p>
        </div>
      </div>
    </div>
  )
}

const Comments = () => {
  return   (
    <div className="box">
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  )
}

export default Comments