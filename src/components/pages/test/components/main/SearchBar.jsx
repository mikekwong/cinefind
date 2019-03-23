import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor () {
    super()
    this.state = {
      term: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onFormSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    })
  }

  render () {
    return (
      <div className='searchbar'>
        <form onSubmit={this.onFormSubmit} className='form'>
          <div className='field'>
            <input
              placeholder='Search Movies...'
              type='text'
              value={this.state.term}
              onChange={this.onChange}
            />
            <button type='submit' className='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}
