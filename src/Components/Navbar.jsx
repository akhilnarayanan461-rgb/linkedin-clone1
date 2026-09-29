import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className='navbr'>

        <h1 id='logo'>Linkedin</h1>

        <div className='menu'>
          <Link to="/home">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/notification">Notification</Link>
          <Link to="/profilepage">Profile</Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar