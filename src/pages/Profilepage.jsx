import React from 'react'
import Profile from '../Components/Profile'
import Navbar from '../Components/Navbar'
import './Profilepage.css'

function Profilepage() {
    return (
        <div>
            <Navbar />

    <div className="profilepage">

   <h1 className="profiletitle">My Profile</h1>

   <div className="profilecontent">
  <Profile
       name="Akhil"
       job="Web Developer"
       connection={50}
                    />
      </div>

            </div>
        </div>
    )
}

export default Profilepage