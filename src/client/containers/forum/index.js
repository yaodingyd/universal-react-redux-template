import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import history from '@/history'

import { logoutUser, postCreate, postGetAll, postSetCurrent } from '@/actions'

import Tags from '@/components/tags'
import PostEntry from '@/components/post-entry'
import Nav from '@/components/nav'
import Modal from '@/components/modal'

import './style.css'

class Forum extends Component {
  constructor () {
    super()
    this.state = {
      open: false
    }
  }

  componentDidMount () {
    this.props.getAllPost()
  }

  openModal = () => {
    this.setState({
      open: true
    })
  }

  closeModal = () => {
    this.setState({
      open: false
    })
  }

  handleSave = (postContent) => {
    const post = Object.assign({}, postContent, {author: this.props.username})
    this.props.handleCreatePost(post)
    this.closeModal()
    this.props.getAllPost()
  }

  setPost = post => {
    this.props.postSetCurrent(post)
  }

  render () {
    const { open } = this.state
    const { handleLogout, username, posts } = this.props

    return (
      <Fragment >
        <Nav handleLogout={handleLogout} username={username} />
        <section className="container" styleName="container">
          <div className="columns">
            <div className="column is-3">
              <button className="button is-primary" type="button" onClick={this.openModal}>New Post</button>
              <Tags />
            </div>
            <div className="column is-9">
              <div className="box content">
                { posts.map(post => (
                  <Link to={`/viewpost/${post._id}`} key={post._id} onClick={this.setPost.bind(this, post)}>
                    <PostEntry title={post.title} body={post.body} author={post.author} />
                  </Link>
                )) }
              </div>
            </div>
          </div>
        </section>
        {open && <Modal onClose={this.closeModal} onSave={this.handleSave}/>}
      </Fragment>
    )
  }
}

Forum.propTypes = {
  handleCreatePost : PropTypes.func,
  handleLogout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.object)
}

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logoutUser())
  },
  handleCreatePost: (post) => {
    dispatch(postCreate(post))
  },
  getAllPost: () => {
    dispatch(postGetAll())
  },
  postSetCurrent : post => {
    dispatch(postSetCurrent(post))
  }
})

const mapStateToProps = (state) => ({
  username: state.auth.name,
  posts: state.posts.posts
})

export default connect(mapStateToProps, mapDispatchToProps)(Forum)