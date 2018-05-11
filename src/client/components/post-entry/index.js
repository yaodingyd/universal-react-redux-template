import React from 'react'
import './style.css'

const PostEntry = ({title, author, body, comments}) => {
  return (
    <article className="post" styleName="post">
      <h4>{title}</h4>
      <div className="media">
          <div className="media-left">
              <p className="content">{author}</p>
          </div>
          <div className="media-content">
              <div className="content">
                  <p>
                      <span className="tag">Question</span>
                  </p>
              </div>
          </div>
          <div className="media-right">
              <span className="has-text-grey-light"><i className="fa fa-comments"></i> 0</span>
          </div>
      </div>
  </article>
  )
}

export default PostEntry