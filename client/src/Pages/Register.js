import './styles.css'
import '../App.css'
import React, { useState, useEffect, useRef } from 'react';
import Footer from '../Components/Footer'
import {Link} from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [err, setErr] = useState('')
  const [disable, setDisabled] = useState(true)
  const [nameError, setNameError] = useState(null)

  const firstRender = useRef(true)

  useEffect(() => {
  
    // we want to skip validation on first render
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    // here we can disable/enable the save button by wrapping the setState function
    // in a call to the validation function which returns true/false
    setDisabled(formValidation())
    
  }, [name]) // any state variable(s) included in here will trigger the effect to run
  
  // here we run any validation, returning true/false
  const formValidation = () => {
    if (name === "") {
      setNameError('Name cant be blank!')
      return true
    } else {
      setNameError(null)
      return false
    }
  }

  async function registerUser(event) {
    event.preventDefault()
      const response = await fetch(`${process.env.REACT_APP_APIURL}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name, 
          email, 
          password,
          password2
        })
      })
  
      const data = await response.json();
      console.log('registered')
  
      data.success ? window.location = data.redirect : setErr(data.error)
  }

  return (
    <div className="card auth">
      <div className="authBox" id="register">
        <h1>Register</h1>
        <form onSubmit={registerUser}>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
          {nameError && <p>{nameError}</p>}
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <br />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <br />
          <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Confirm Password" />
          <br />
          <input disable={disable} className="btn-primary" type="submit" value="Register"/>
        </form><hr />
          <p>Already have an account? <Link to="/Login">Login</Link></p>
          <br />
          <p style={{color: 'red'}}>{err}</p>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
