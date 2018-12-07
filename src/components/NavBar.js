import React from 'react'
import { connect } from 'react-redux'
import { getMusic } from '../actions'

const MusicSearch = ({ loading, getMusic, history }) => {
  const handleSubmit = e => {
    e.preventDefault()
    const { query } = e.target.elements
    getMusic(query.value)
    history.push('/')
  }

  return (
    <form onSubmit={ handleSubmit }>
      <div className="field has-addons">
        <div className="control">
          <input
            placeholder="Search..."
            className="input"
            type="text"
            name="query"
          />
        </div>
        <div className="control">
          <button
            className={`button is-primary ${loading && "is-loading"}`}
            type="submit"
          >Search</button>
        </div>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => ({
  loading: state.musicReducer.loading
})

export default connect(mapStateToProps, { getMusic })(MusicSearch)
