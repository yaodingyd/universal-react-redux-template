import React from 'react'

function UnauthedApp () {
  return (
    <div>
      <h1> !!!unAuthed App!!! </h1>
      {this.props.children}
    </div>
  )
}

export default UnauthedApp
