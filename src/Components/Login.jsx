import React from 'react'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'


function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()



  function emailHandler(e) {
    setEmail(e.target.value)

  }
  function passwordHandler(e) {
    setPassword(e.target.value)
  }
  function loginHandler() {
    if (email === "" || password === "") {
      alert("Please enter email and Password")
    } else {
      alert("Login succesfully")
      navigate("/home")
    }

  }
  return (
    <div className='logincontiner'>
      <div className='loginform'>

      <h1>LinkedIn</h1>
      <input className='logininput' type='text' placeholder='Email or User name'
        value={email}
        onChange={emailHandler}
      />
      <input className='logininput'   type={showPassword ? "text" : "password"} placeholder='password'
        value={password}
        onChange={passwordHandler} />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide password" : "Show password"}
      </button>
      <button className='loginbtn' onClick={loginHandler}>Login</button>
      <Link to="/fpassword">Forgot password?</Link>

      <Link to="/register">Don't have an account?   Register</Link>
      </div>

    </div>
  )
}

export default Login
