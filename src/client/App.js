import React, { Fragment } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import history from './history'
import store from './store'

import Welcome from '@/containers/welcome'
import Auth from '@/containers/auth'
import Forum from '@/containers/forum'
import Post from '@/containers/post'

import Header from '@/components/header'

import './App.css?raw'

function App () {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/login' component={Auth} />
        <Route path='/signup' component={Auth} />
        <Route path='/main' component={Forum} />
        <Route path='/post' component={Post} />
      </Switch>
    </Fragment>
  )
}

function BrowserApp () {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  )
}

export default BrowserApp
export { App, BrowserApp}
