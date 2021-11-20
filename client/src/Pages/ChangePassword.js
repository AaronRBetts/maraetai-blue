import './styles.css'
import '../App.css'
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

function ChangePassword() {
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  async function ChangePass(event) {
    event.preventDefault()
    if (password = password2) {
      const response = await fetch(`${process.env.REACT_APP_APIURL}/api/change-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          newpassword: password,
          token: localStorage.getItem('token')
        })
      })
  
      const data = await response.json();
  
      if (data) window.location = data.redirect;
    }
    else setErr('Passwords do not match.')
  }

  return (
    <div className="page">
      <div className="authBox" id="change-password">
        <h1>Change your password</h1>
        <form onSubmit={ChangePass}>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <br />
          <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Confirm Password" />
          <br />
          <input className="btn-primary" type="submit" value="Confirm"/>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
