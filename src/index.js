import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const placeholder = '👻'

ReactDOM.render(
  <App placeholder={placeholder} />,
  document.getElementById('app')
)

module.hot.accept()
