import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import './styles.css'
import '../App.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(event) {
    event.preventDefault()
    const response = await fetch('https://maraetaiblue-concept.herokuapp.com/api/login', {
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
    console.log(data)
  }

  return (
    <div className="card auth">
      <div className="authBox" id="login">
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <br />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <br />
          <input className="btn-primary" type="submit" value="Login"/>
          <br /><hr />
          <p>Don't have an account? <Link to="/Register">Register</Link></p>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;