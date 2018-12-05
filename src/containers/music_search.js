import React from 'react'
import { connect } from 'react-redux'
import { getTracks, getChart } from '../actions/search'

class MusicSearch extends React.Component {
  state = {
    isFetching: false
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getChart().then(this.fetched)
    this.setState({ isFetching: true })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    const { value } = e.target.elements.query
    this.props.getTracks(value).then(this.fetched)
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
            placeholder="Search..."
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

export default connect(null, { getChart, getTracks })(MusicSearch)
