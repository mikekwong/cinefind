import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  constructor () {
    super()
    this.state = {
      movies: [],
      info: ''
    }
    // this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }
  render () {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='/popular'>Popular Movies</Link>
        <Link to='/toprated'>Top Rated Movies</Link>
        <Link to='/upcoming'>Upcoming Movies</Link>
      </div>
    )
  }
}
