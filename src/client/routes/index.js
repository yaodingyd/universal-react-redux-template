import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AuthedApp from '../apps/authedApp'
import UnauthedApp from '../apps/unauthedApp'

const routes = (
  <Route>
    <Route path='/' component={UnauthedApp}>
      <IndexRoute />
    </Route>
    <Route path='/dashboard' component={AuthedApp}>
      <IndexRoute />
    </Route>
  </Route>
)

export default routes
