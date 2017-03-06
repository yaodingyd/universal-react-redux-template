import React from 'react'
import UnauthedHeader from '../components/header/UnauthedHeader'

function UnauthedApp ({children}) {
  return (
    <div>
      <UnauthedHeader />
      {children}
    </div>
  )
}

export default UnauthedApp
