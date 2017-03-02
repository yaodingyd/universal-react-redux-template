import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Hello from './src/client/demo'

function render (Component) {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Hello)

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./src/client/demo', () => {
    render(Hello)
  })
}
