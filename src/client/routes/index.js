import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AuthedApp from '../apps/authedApp'
import UnauthedApp from '../apps/unauthedApp'

import Hello from '../components'

const routes = (
  <Route>
    <Route path='/' component={UnauthedApp}>
      <IndexRoute component={Hello} />
    </Route>
    <Route path='/dashboard' component={AuthedApp}>
      <IndexRoute component={Hello} />
    </Route>
  </Route>
)

export default routes
