const renderToString = require('react-dom/server').renderToString
const React = require('react')
const match = require('react-router').match
const RouterContext = require('react-router').RouterContext
const Provider = require('react-redux').Provider
const createStore = require('redux').createStore
const reducer = require('../../client/reducers').default
const router = require('express').Router()
const routes = require('../../client/routes').default

router.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      handleRender(req, res, renderProps)
    } else {
      res.status(404).send('Not found')
    }
  })
})

function handleRender (req, res, renderProps) {
  const store = createStore(reducer)
  const html = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps} />
    </Provider>
  )
  const preloadedState = store.getState()
  res.send(renderFullPage(html, preloadedState))
}

function renderFullPage (html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="http://localhost:8080/assets/bundle.js"></script>
      </body>
    </html>
    `
}

module.exports = router
