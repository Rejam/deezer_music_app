import React from 'react'
import { connect } from 'react-redux'
import { search } from '../actions/search'

class MusicSearch extends React.Component {

  handleFormSubmit = e => {
    e.preventDefault()
    const { value } = e.target.elements.query
    this.props.search(value)
    e.target.reset()
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              name="query"/>
          </div>
          <div className="control">
            <input 
              className="button is-primary"
              type="submit"
              value="Search"/>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(null, { search })(MusicSearch)
