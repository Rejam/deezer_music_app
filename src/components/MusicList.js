import React from 'react'
import { connect } from 'react-redux'
import Track from '../components/Track'

const MusicList = ({ music, loading }) => (
  <>
    { loading && <div>Loading ...</div> }
    { !music.length
      ? <p>Could not fetch music</p>
      : music.map(item => (
          <Track
            key={item.id}
            artist={item.artist.name}
            title={item.title}
            preview={item.preview}
            cover={item.album.cover_small}
            link={item.link}
          />
          ))
    }
  </>
)

const mapStateToProps = (state) => ({
  music: state.musicReducer.music,
  loading: state.musicReducer.loading
})

export default connect(mapStateToProps)(MusicList)
