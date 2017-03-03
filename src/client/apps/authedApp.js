import React from 'react'

function AuthedApp () {
  return (
    <div>
      <h1> Authed App </h1>
      {this.props.children}
    </div>
  )
}

export default AuthedApp
