import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='/popular'>Popular</Link>
      <Link to='/toprated'>Top Rated</Link>
      <Link to='/upcoming'>Upcoming</Link>
    </div>
  )
}

export default Navbar
