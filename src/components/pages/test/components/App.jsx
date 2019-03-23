import React, { Component } from 'react'
import '../styles/testpage.css'
export default class App extends Component {
  constructor () {
    super()
    this.state = {
      movies: [],
      info: ''
    }
  }

  render () {
    return (
      <div className='container'>
        <p className='text'>hello world</p>
      </div>
    )
  }
}
