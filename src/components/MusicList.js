import React from 'react'
import { connect } from 'react-redux'
import Track from './Track'
import { toggleFave } from '../actions'

const MusicList = ({ music, loading, toggleFave, faves }) => (
  <>
    { loading 
      ? <div>Loading ...</div>
      : !music.length
        ? <p>No music</p>
        : music.map(item => (
            <Track
              key={item.id}
              artist={item.artist.name}
              title={item.title}
              preview={item.preview}
              cover={item.album.cover_small}
              link={item.link}
              fave={() => toggleFave(item)}
              saved={faves.includes(item)}
            />
          ))
    }
  </>
)

const mapStateToProps = (state) => ({
  loading: state.musicReducer.loading,
  faves: state.musicReducer.faves,
})

export default connect(mapStateToProps, { toggleFave })(MusicList)
