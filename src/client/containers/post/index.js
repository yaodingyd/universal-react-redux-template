import React, { Component, Fragment } from 'react'

import Comments from '@/components/comments'
import Nav from '@/components/nav'

import './style.css'

function Article () {
  return (
    <div className="card article" styleName="article">
        <div className="card-content">
            <div className="media">
                <div className="media-content has-text-centered">
                    <p className="title article-title">Introducing a new feature for paid subscribers</p>
                    <p className="subtitle is-6 article-subtitle">
                        <a href="#">@daria</a> on February 24, 2018
                    </p>
                </div>
            </div>
            <div className="content article-body">
                <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                <p>Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Accumsan lacus vel facilisis volutpat. Non sodales neque sodales ut etiam.
                Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                <h3 className="has-text-centered">Feugiat sed lectus vestibulum mattis.</h3>
                <p> Molestie ac feugiat sed lectus vestibulum. Feugiat sed lectus vestibulum mattis. Volutpat diam ut venenatis tellus in metus vulputate. Feugiat in fermentum posuere urna nec. Pharetra convallis posuere morbi leo urna molestie
                    at. Accumsan lacus vel facilisis volutpat est velit egestas. Fermentum leo vel orci porta. Faucibus interdum posuere lorem ipsum.
                </p>
            </div>
        </div>
    </div>
  )
}

class Post extends Component {
  render () {
    return (
      <Fragment>
        <Nav />
        <div className="container" styleName="container">
          <Article />
          <Comments />
        </div>
      </Fragment>
    )
  }
}

export default Post