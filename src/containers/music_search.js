import React from 'react'
import { connect } from 'react-redux'
import { search } from '../actions/search'

class MusicSearch extends React.Component {
  state = {
    isFetching: false
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { value } = e.target.elements.query
    this.props.search(value).then(this.fetched)
    this.setState({ isFetching: true })
  }

  fetched = () => this.setState({ isFetching: false })

  render() {
    const { isFetching } = this.state
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
            <button
              className={`button is-primary ${isFetching && "is-loading"}`}
              type="submit"
            >Search</button>
          </div>
        </div>
      </form>
    )
  }
}

export default connect(null, { search })(MusicSearch)
