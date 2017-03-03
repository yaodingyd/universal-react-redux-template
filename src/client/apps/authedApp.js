import React from 'react'

function AuthedApp ({children}) {
  return (
    <div>
      <h1> Authed App </h1>
      {children}
    </div>
  )
}

export default AuthedApp
