import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import './Register.css'

function Register() {
    const [fullName, setFullName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [tearms, setTearms] = useState(false)
    const navigate = useNavigate()

    function registerHandler() {
        if (
            fullName === "" ||
            username === "" ||
            email === "" ||
            phone === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill all fields")
        } else if (password !== confirmPassword) {
            alert("Passwords do not match")
        } else if (tearms === false) {
            alert("Please accept Tearms & Conditions ")
        } else {
            alert("Registration Successfully")
            navigate("/")
        }
    }

    return (
        <div className='register-container'>

            <div className='register-form'>

                <h2 className='register-title'>Register</h2>

                <Link className='login-link' to="/">Login</Link>

                <input className='register-input' type="text" placeholder="Full Name" value={fullName}
                    onChange={(e) => setFullName(e.target.value)} />

                <input className='register-input' type='text' placeholder='User name' value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <input className='register-input' type='email' placeholder='email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input className='register-input' type='text' placeholder='Phone Number' value={phone}
                    onChange={(e) => setPhone(e.target.value)} />

                <input className='register-input' type='password' placeholder='Password' value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <input className='register-input' type='password' placeholder='Confirm Password' value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />

                <div className='terms'>
                    <input className='terms-checkbox' type='checkbox' checked={tearms}
                        onChange={(e) => setTearms(e.target.checked)} />

                    <label className='terms-label'>I agree to Terms & Conditions</label>
                </div>

                <button className='register-button' onClick={registerHandler}>click</button>

            </div>

        </div>
    )
}

export default Register