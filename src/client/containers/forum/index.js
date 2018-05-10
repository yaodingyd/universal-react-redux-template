import React, { Component, Fragment } from 'react'

import Tags from '@/components/tags'
import PostEntry from '@/components/post-entry'
import Nav from '@/components/nav'

import './style.css'

class Forum extends Component {
  render () {
    return (
      <Fragment >
        <Nav />
        <section className="container" styleName="container">
          <div className="columns">
            <div className="column is-3">
              <button className="button is-primary" type="button">New Post</button>
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
      </Fragment>
    )
  }
}

export default Forum