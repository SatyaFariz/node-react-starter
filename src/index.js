import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import App from './App'
import createRelay from './createRelay'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  <App history={createHistory()} createRelay={createRelay} />,
  document.getElementById('root'),
)
registerServiceWorker()