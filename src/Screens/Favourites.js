import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MusicList from '../components/MusicList'

const Favourites = ({ music }) => (
  <>
    <Link to='/' >View search sesults</Link>
    <h2 className="heading">Favourites</h2>
    <MusicList music={music}/>
  </>
)


const mapStateToProps = (state) => ({
  music: state.musicReducer.faves
})
export default connect(mapStateToProps)(Favourites)