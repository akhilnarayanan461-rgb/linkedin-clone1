import React from 'react'
import Navbar from '../Components/Navbar'
import Profile from '../Components/Profile'
import Createpost from '../Components/Createpost'
import './Home.css'
import Suggestedconnection from '../Components/Suggestedconnection'


function Home() {
  return (
    <div><Navbar />
      <h1 className="home-title">Home</h1>
       <div className='homecontent'>
        <Profile
          name="Akhil"
          job="Web Developer"
          connection={50}
        />
     
        <Createpost/>
        <Suggestedconnection/>
      </div>
    </div>
  )
}

export default Home
