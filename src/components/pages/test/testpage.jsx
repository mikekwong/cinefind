import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'

import App from './components/App'
import Popular from './components/category/Popular'
import TopRated from './components/category/TopRated'
import Upcoming from './components/category/Upcoming'
import MovieDetail from './components/main/MovieDetail'

export default class Test extends Component {
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
      <Router>
        <div>
          <nav>
            <Navbar />
          </nav>
          <main>
            <Route exact path='/' component={App} />
            <Route
              exact
              path='/popular'
              render={() => <Popular parentState={this.state} />}
            />
            <Route
              exact
              path='/toprated'
              render={() => <TopRated parentState={this.state} />}
            />
            <Route
              exact
              path='/upcoming'
              render={() => <Upcoming parentState={this.state} />}
            />
            <Route exact path='/movie/:id' component={MovieDetail} />
          </main>
        </div>
      </Router>
    )
  }
}
