import React from 'react'
import AuthedHeader from '../components/header/AuthedHeader'

function AuthedApp ({children}) {
  return (
    <div>
      <AuthedHeader />
      {children}
    </div>
  )
}

export default AuthedApp
