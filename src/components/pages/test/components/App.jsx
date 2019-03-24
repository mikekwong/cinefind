import React, { Component } from 'react'
import '../styles/testpage.css'

export default class App extends Component {
  render () {
    return (
      <div id='home'>
        <div>
          <h1 className='home-text'>Welcome!</h1>
          <p className='home-text'>Find all your favorite movies here!</p>
          <p className='home-text'>
            Find the current popular movies, top rated movies and upcoming
            movies.
          </p>
          <p className='home-text'>
            Browse through the movie titles, release dates, images, and
            descriptions.
          </p>
          <p className='home-text'>Enjoy!</p>
        </div>
      </div>
    )
  }
}
