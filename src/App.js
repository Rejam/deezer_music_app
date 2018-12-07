import React from 'react'
import { connect } from 'react-redux'
import { getMusic } from './actions'
import Home from './Screens/Home'

const App = ({ getMusic }) => {
  getMusic()
  return <Home />
}

export default connect(null, { getMusic })(App)
