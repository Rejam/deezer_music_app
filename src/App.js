import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getMusic } from './actions'
import SearchResults from './Screens/SearchResults'
import Favourites from './Screens/Favourites'
import NavBar from './components/NavBar'

class App extends React.Component {
  componentDidMount() {
    this.props.getMusic()
  }

  render() {
    return (
      <div className="App section">
        <div className="container">
          <h1 className="title">Find Music On Deezer</h1>
          <NavBar />
          <BrowserRouter>
            <Switch>
              <Route exact path="/favourites" component={Favourites} />
              <Route path="/" component={SearchResults} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default connect(null, { getMusic })(App)
