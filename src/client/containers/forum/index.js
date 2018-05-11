import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { logoutUser, postCreate } from '@/actions'

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
  }

  render () {
    const { open } = this.state
    const { handleLogout, username } = this.props

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
                <PostEntry />
                <PostEntry />
                <PostEntry />
                <PostEntry />
                <PostEntry />
                <PostEntry />
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
  username: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logoutUser())
  },
  handleCreatePost: (post) => {
    dispatch(postCreate(post))
  }
})

const mapStateToProps = (state) => ({
  username: state.auth.name
})

export default connect(mapStateToProps, mapDispatchToProps)(Forum)