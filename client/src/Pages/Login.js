import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'
import '../App.css'
import logo from '../images/MB_Logo.svg'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch(`${process.env.REACT_APP_APIURL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, 
        password,
      })
    })

    const data = await response.json();

    if (data.user) {
      localStorage.setItem('token', data.user)
      window.location = data.redirect
    } else {
      alert('Your username and password combination is incorrect')
    }
    console.log('logged in')
  }

  return (
    <div className="card auth servicesCard">
      <div className="authBox" id="login">
        <h1>Login</h1>
        <p>Log in to your account to book your Water tank refill or clean online.</p>
        <hr /><br /><br />
        <form onSubmit={loginUser}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <br />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <br />
          <input className="btn-primary" type="submit" value="Login"/>
          <br /><br />          
          <p>
          <a href="/">Forgot password</a>
          </p><hr />
          <p>Don't have an account yet? <Link to="/Register">Register here</Link> to schedule your water delivery.</p>
        </form>
      </div>
    </div>
  );
}

export default Login;