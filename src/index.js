import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import placeholder from './assets/placeholder.png'

ReactDOM.render(
  <React.StrictMode>
    <App placeholder={placeholder} />
  </React.StrictMode>,
  document.getElementById('app')
)

module.hot.accept()
