import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Comments from '@/components/comments'
import Nav from '@/components/nav'

import './style.css'

const Article = ({title, author, body}) => {
  return (
    <div className="card article" styleName="article">
        <div className="card-content">
            <div className="media">
                <div className="media-content has-text-centered">
                    <p className="title article-title">{title}</p>
                    <p className="subtitle is-6 article-subtitle">{author}</p>
                </div>
            </div>
            <div className="content article-body">{body}</div>
        </div>
    </div>
  )
}

class Post extends Component {
  render () {
    const { post } = this.props
    return (
      <Fragment>
        <Nav />
        <div className="container" styleName="container">
          <Article title={post.title} author={post.author} body={post.body}/>
          <Comments />
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  post: state.posts.post
})

export default connect(mapStateToProps, null)(Post)