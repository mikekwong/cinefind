import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/popular'>Popular Movies</Link>
      <Link to='/toprated'>Top Rated Movies</Link>
      <Link to='/upcoming'>Upcoming Movies</Link>
    </div>
  )
}

export default Navbar
