import React from 'react'
import PropTypes from 'prop-types'

const App = ({ placeholder }) => {
  return (
    <div>{placeholder}</div>
  )
}

export default App

App.propTypes = {
  placeholder: PropTypes.string
}
