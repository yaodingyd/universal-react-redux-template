import React from 'react'
import './style.css'

const PostEntry = () => {
  return (
    <article className="post" styleName="post">
      <h4>How can I make a bulma button go full width?</h4>
      <div className="media">
          <div className="media-left">
              <p className="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png" />
              </p>
          </div>
          <div className="media-content">
              <div className="content">
                  <p>
                      <a href="#">@red</a> replied 40 minutes ago &nbsp;
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