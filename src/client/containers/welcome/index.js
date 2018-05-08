import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { reloginUser } from '../../actions'
import Spinner from '../../components/spinner'
import history from '../../history'
import './style.css'

class Welcome extends Component {
  componentDidMount () {
    if (window.localStorage.getItem('token')) {
      const token = window.localStorage.getItem('token')
      this.props.handleLogin(token)
    }
  }

  render () {
    const { isFetching } = this.props

    return (
      <section className="hero is-fullheight" styleName="my-hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <h1 className="title">
                Universal React App
              </h1>
              <h2 className="subtitle" styleName="subtitle">
                With Authentication and Server-side Rendering
              </h2>
              <div>
                <Link to="/login" className="button is-primary is-large">Log In</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (token) => {
    dispatch(reloginUser(token))
  }
})

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
