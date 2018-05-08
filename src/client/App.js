import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'
import store from './store'

import Welcome from './containers/welcome'
import Auth from './containers/auth'

import './App.css?raw'

function App () {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/login' component={Auth} />
          <Route path='/signup' component={Auth} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
