import React, { useState } from 'react'
import './styles.css'
import '../images/animations.css'
import '../App.css'
import logo from '../images/MB_Logo.svg'

export default function Contact() {
    const [message, setMessage] = useState('')
    const [from, setFrom] = useState('')
    const [contact, setContact] = useState('')

    async function sendMessage(event) {
      event.preventDefault()
      const response = await fetch(`${process.env.REACT_APP_APIURL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            contact,
            message
        })
      })
  
      const data = await response.json();
  
      if (data.success) {
        window.location = data.redirect
      }
    }

    return (
        <div>
            <div className="pageWrapper">
                <div className="pageText">
                    <h1>Contact us</h1>
                </div>
                <div className="pageBanner">
                </div>
            </div>
            <div className="contactCard">
                <div className="contactWrapper">
                    <form onSubmit={sendMessage}>
                    <input value={from} onChange={(e) => setFrom(e.target.value)} type="text" placeholder="Name" />
                    <br />
                    <input value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Preferred contact" />
                    <br />
                    <textarea rows="5" value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Leave a message" ></textarea>
                    <br />
                    <input className="btn-primary" type="submit" value="Send Message"/>
                    </form>
                </div>
            </div>
        </div>
    )
}