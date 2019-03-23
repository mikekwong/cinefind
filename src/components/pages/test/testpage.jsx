import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'

import App from './components/App'
import MovieDetail from './components/main/MovieDetail'

const Test = () => (
  <Router>
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Route exact path='/' component={App} />
        <Route exact path='/:id' component={MovieDetail} />
      </main>
    </div>
  </Router>
)

export default Test
