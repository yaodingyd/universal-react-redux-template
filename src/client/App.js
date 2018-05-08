import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'
import store from './store'

import Welcome from './containers/welcome'
import Login from './containers/login'
import Signup from './containers/signup'

import './App.css?raw'

function App () {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Route path='/' exact component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
