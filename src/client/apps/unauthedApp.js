import React from 'react'

function UnauthedApp ({children}) {
  return (
    <div>
      <h1> !!!unAuthed App!!! </h1>
      {children}
    </div>
  )
}

export default UnauthedApp
