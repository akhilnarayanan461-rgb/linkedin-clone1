import React from 'react'
import { useState } from 'react'
import './Fpassword.css'

function Fpassword() {

  const [email, setEmail] = useState("")

  function resetHandler() {
    if (email === "") {
      alert("Please enter your email")
    } else {
      alert("Reset link sent successfully")
    }
  }

  return (
    <div className='fogotcontiner'>
      <div className='fpcontiner'>

      <h1>Forgot Password</h1>

      <input className='fpasswordinput'
        type="text"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className='fpasswordbtn' onClick={resetHandler}>
        Reset Password
      </button>

      </div></div>
  )
}

export default Fpassword