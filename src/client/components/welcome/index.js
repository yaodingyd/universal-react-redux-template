import React, { Component } from 'react'
import { Jumbotron, Button } from 'react-bootstrap'
import { browserHistory } from 'react-router'

class Welcome extends Component {
  handleLogin () {
    browserHistory.push('/login')
  }

  render () {
    return (
      <Jumbotron>
        <h1>Node Authentication and Server-side Rendering</h1>
        <p>This is a demo app for node authentication using passport.</p>
        <p><Button bsStyle='success' onClick={this.handleLogin}>Log In</Button></p>
      </Jumbotron>
    )
  }
}

export default Welcome
