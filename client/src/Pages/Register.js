import './styles.css'
import '../App.css'
import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import logo from '../images/MB_Logo.svg'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [err, setErr] = useState({})
  const [disable, setDisabled] = useState(true)

  const firstRender = useRef(true)

  useEffect(() => {
  
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    setDisabled(formValidation())
    
  }, [name, email, password, password2])
  
  const formValidation = () => {
    let regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#$@!%&*?]{8,30}$/;
    let newErrors = {}
    let err = false
    
    if (name === "") {
      newErrors.name = <><hr/>Name can't be blank</>
      err = true
    }
    if (!regEmail.test(email)) {
      newErrors.email = <><hr/>Enter a valid email address</>
      err = true
    }
    if (!regPassword.test(password)) {
      newErrors.password = <><hr/>Password must contain atleast: <br/>1 upper case letter, <br/>1 lower case letter, <br/>1 number, <br/>and be atleast 8 characters</>
      err = true
    }
    if (password !== password2) {
      newErrors.password = <><hr/>Passwords do not match</>
      err = true
    }
    setErr(newErrors)
    return err;
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
          phone, 
          address, 
          password,
          password2
        })
      })
  
      const data = await response.json();
      console.log('registered')
  
      data.success ? window.location = data.redirect : setErr('')
  }

  return (
    <div className="card auth servicesCard">
      <div className="authBox" id="register">
        <h1>Register</h1>
        <p>Create an account to book your Water tank refill or clean online.</p>
        <hr /><br /><br />
        <form onSubmit={registerUser}>
          <input value={name} name="name" onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
          <br />
          <input value={email} name="email" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          <br />
          <input value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone" />
          <br />
          <input value={address} name="address" onChange={(e) => setAddress(e.target.value)} type="text" placeholder="Physical address" />
          <br />
          <input value={password} name="password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <br />
          <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Confirm Password" />
          <br />
          <button disabled={disable} className="btn-primary" type="submit">Register</button><br /><br />
        </form><hr />
          <p>Already have an account? <Link to="/Login">Login here</Link></p>
          <br />
          <div style={{color: 'red', maxWidth: 'fit-content', margin: 'auto'}}>
            {err.name && <p>{err.name}</p>}
            {err.email && <p>{err.email}</p>}
            {err.password && <p>{err.password}</p>}
          </div>
      </div>
    </div>
  );
}

export default Register;
