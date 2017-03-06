import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AuthedApp from '../apps/authedApp'
import UnauthedApp from '../apps/unauthedApp'

import Hello from '../components/hello'
import Login from '../containers/login'
import Signup from '../containers/signup'

const routes = (
  <Route>
    <Route path='/' component={UnauthedApp}>
      <IndexRoute component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
    </Route>
    <Route path='/dashboard' component={AuthedApp}>
      <IndexRoute component={Hello} />
    </Route>
  </Route>
)

export default routes
