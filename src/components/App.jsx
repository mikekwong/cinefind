import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './navigation/Navbar'

import Home from './Home'
import Popular from './category/Popular'
import TopRated from './category/TopRated'
import Upcoming from './category/Upcoming'
// import MovieDetail from './main/MovieDetail'

const Test = () => {
  return (
    <Router>
      <div>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/popular' component={Popular} />
          <Route exact path='/toprated' component={TopRated} />
          <Route exact path='/upcoming' component={Upcoming} />
          {/* <Route exact path='/movie/:id' component={MovieDetail} /> */}
        </main>
      </div>
    </Router>
  )
}

export default Test
