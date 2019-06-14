import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  onInputChange = e => {
    this.setState({
      term: e.target.value
    })
  }

  render () {
    const { sortBy, onRadioChange } = this.props
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            className='search-input'
            placeholder='Search Movies...'
            type='text'
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <fieldset className='sortby'>
            <legend>Sort By:</legend>
            <input
              id='title'
              onChange={onRadioChange}
              className='radio'
              name='sort'
              type='radio'
              value='title'
              checked={sortBy === 'title'}
            />{' '}
            <label htmlFor='title'>Title</label>
            <br className='fieldset-breaks' />
            <input
              id='date'
              onChange={onRadioChange}
              className='radio'
              name='sort'
              type='radio'
              value='date'
              checked={sortBy === 'date'}
            />{' '}
            <label htmlFor='date'>Recent / Upcoming Releases</label>
            <br className='fieldset-breaks' />
            <input
              id='vote'
              onChange={onRadioChange}
              className='radio'
              name='sort'
              type='radio'
              value='vote'
              checked={sortBy === 'vote'}
            />{' '}
            <label htmlFor='vote'>Top Voted</label>
            <br className='fieldset-breaks' />
            <input
              id='popular'
              onChange={onRadioChange}
              className='radio'
              name='sort'
              type='radio'
              value='popular'
              checked={sortBy === 'popular'}
            />{' '}
            <label htmlFor='popular'>Most Popular</label>
          </fieldset>
          <button type='submit' className='submit'>
            Submit
          </button>
        </form>
      </div>
    )
  }
}
