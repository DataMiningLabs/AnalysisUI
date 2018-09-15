import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'store'
import App from 'routes/index'
import 'styles/global-styles'
import registerServiceWorker from 'utils/registerServiceWorker'

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
