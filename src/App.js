import React, { Component } from 'react';
import MusicSearch from './containers/music_search'
import MusicList from './containers/music_list'

class App extends Component {
  render() {
    return (
      <div className="App section">
        <div className="container">
          <h1 className="title">Find Music On Deezer</h1>
          <MusicSearch />
          <MusicList />
        </div>
      </div>
    );
  }
}

export default App;
