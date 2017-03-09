import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { reloginUser } from '../../actions'
import Spinner from '../../components/spinner'

class Welcome extends Component {
  componentDidMount () {
    if (window.localStorage.getItem('token')) {
      const token = window.localStorage.getItem('token')
      this.props.handleLogin(token)
    }
  }

  handleLogin () {
    browserHistory.push('/login')
  }

  render () {
    const { isFetching } = this.props

    return (
      <div className='container'>
        {isFetching &&
          <Spinner />}
        <Jumbotron>
          <h1>Node Authentication and Server-side Rendering</h1>
          <p>This is a demo app for node authentication using passport.</p>
          <p><Button bsStyle='success' onClick={this.handleLogin}>Log In</Button></p>
        </Jumbotron>
      </div>
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
