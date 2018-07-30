import React from 'react'
import { connect } from 'react-redux'
import Track from '../components/track'

class MusicList extends React.Component {
  render() {
    const Music = ({ music }) => {
      if(music.length < 1) { 
        return "No results."
      }
      return music.map(item =>
        <Track
          key={ item.id }
          artist={ item.artist.name }
          title={ item.title }
          preview={ item.preview }
          cover={ item.album.cover_small }
        />
      )
    }
    return (
      <div>
        <Music music={ this.props.music } />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  music: state.music,
  loading: state.loading
})

export default connect(mapStateToProps)(MusicList)