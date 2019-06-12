import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Search</Link>
      <Link to="/popular">Popular</Link>
      <Link to="/upcoming">Upcoming</Link>
      <Link to="/toprated">Top Rated</Link>
    </div>
  )
}

export default Navbar
