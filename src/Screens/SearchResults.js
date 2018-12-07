import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MusicList from '../components/MusicList'

const Home = ({ music }) => {
  return (
    <>
      <Link to='/favourites' >Go to favourites</Link>
      <h2 className="heading">Search Results</h2>
      <MusicList music={music}/>
    </>
  )
}

const mapStateToProps = (state) => ({
  music: state.musicReducer.music
})
export default connect(mapStateToProps)(Home)
