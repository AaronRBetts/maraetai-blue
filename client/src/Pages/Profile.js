import React, {  useEffect, useState } from 'react'
import './styles.css'
import '../App.css'

const Profile = () => {
    const [user, setUser] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userName, setUserName] = useState('')
    const [userAddress, setUserAddress] = useState('')

    useEffect(() => {
      fetch(`${process.env.REACT_APP_APIURL}/api/home`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: localStorage.getItem('token')
          })
        })
       .then(data => data.json())
       .then(data => data.error ? console.log('error logging in') : login(data))
    }, [])

    function login(user) {
      setUser(user)
      setUserName(user.name)
      setUserPhone(user.phone)
      setUserAddress(user.address)
    }

    async function updateUser(event) {
      event.preventDefault()
      const response = await fetch(`${process.env.REACT_APP_APIURL}/api/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: userName, 
          email: user.email, 
          phone: userPhone, 
          address: userAddress, 
        })
      })
  
      const data = await response.json();
      console.log('updated')
  
      data.success ? logout() : console.log(data.error)
    }

    function logout() {
      localStorage.removeItem('token')
      window.location = "/login";
  }

    return (
      <div className="card servicesCard">
        <div className="authBox">
            <h1>Customer Information</h1>
            <p>We use this information to speed up your ordering process.</p>
            <hr />
            <form className="infoBox" onSubmit={updateUser}>
              <ul className="profileForm">
                <li>
                  <label for="username">Name</label>
                  <input id="username" value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Name' />
                </li>
                <li>
                  <label for="userphone">Phone</label>
                  <input id="userphone" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} type="text" placeholder='Phone' />
                </li>
                <li>
                  <label for="useraddress">Address</label>
                  <input id="useraddress" value={userAddress} onChange={(e) => setUserAddress(e.target.value)} type="text" placeholder="Address" />
                </li>
              </ul>
                <br />
              <button className="btn-primary" type="submit">Update Information</button>
            </form>
          </div>
      </div>
    )
}

export default Profile
