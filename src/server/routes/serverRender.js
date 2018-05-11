const renderToString = require('react-dom/server').renderToString
const React = require('react')
const StaticRouter = require('react-router').StaticRouter
const Provider = require('react-redux').Provider
const createStore = require('redux').createStore
const reducer = require('client/reducers').default
const router = require('express').Router()
const App = require('client/App').App

router.get('*', (req, res) => {
  const store = createStore(reducer)
  const context = {}
  
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  )
  const preloadedState = store.getState()

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end()
  } else {
    res.send(renderFullPage(html, preloadedState))
  }
})

function renderFullPage (html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
          <title>Universal React</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.css" />  
      </head>
      <body>
        <div id="root">${html}</div>
        <div id="modal-root"></div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="http://localhost:8080/bundle.js"></script>
      </body>
    </html>
    `
}

module.exports = router
