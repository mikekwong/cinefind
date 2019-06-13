import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
    }
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  onInputChange = e => {
    this.setState({
      term: e.target.value,
    })
  }

  render() {
    const { sortBy, onRadioChange } = this.props
    return (
      <div className="searchbar">
        <form onSubmit={this.onFormSubmit} className="form">
          <input
            className="search-input"
            placeholder="Search Movies..."
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <fieldset className="sortby">
            <p className="sortby-title">Sort By:</p>
            <br />
            <div>
              <input
                onChange={onRadioChange}
                className="radio"
                name="sort"
                type="radio"
                value="title"
                checked={sortBy === 'title'}
              />{' '}
              <label htmlFor="title">Title</label>
            </div>

            <div>
              <input
                onChange={onRadioChange}
                className="radio"
                name="sort"
                type="radio"
                value="date"
                checked={sortBy === 'date'}
              />{' '}
              <label htmlFor="date">Recent/Upcoming Releases</label>
            </div>
            <div>
              <input
                onChange={onRadioChange}
                className="radio"
                name="sort"
                type="radio"
                value="vote"
                checked={sortBy === 'vote'}
              />{' '}
              <label htmlFor="vote">Top Voted</label>
            </div>
            <div>
              <input
                onChange={onRadioChange}
                className="radio"
                name="sort"
                type="radio"
                value="popular"
                checked={sortBy === 'popular'}
              />{' '}
              <label htmlFor="popular">Most Popular</label>
            </div>
          </fieldset>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }
}
