import React from 'react'
import MusicSearch from '../components/MusicSearch'
import MusicList from '../components/MusicList'

const Home = () => (
  <div className="App section">
    <div className="container">
      <h1 className="title">Find Music On Deezer</h1>
      <MusicSearch />
      <MusicList />
    </div>
  </div>
)

export default Home