import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'

import App from './components/App'

const Test = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Route exact path='/' component={App} />
      </main>
    </div>
  </BrowserRouter>
)

export default Test
