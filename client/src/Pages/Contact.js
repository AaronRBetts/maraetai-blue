import React, { useState } from 'react'
import './styles.css'
import '../images/animations.css'
import '../App.css'
import { init, sendForm } from 'emailjs-com';

export default function Contact() {
    const [message, setMessage] = useState('')
    const [from, setFrom] = useState('')
    const [contact, setContact] = useState('')
    const [confirmation, setConfirmation] = useState('')

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
        try {
          sendEmail(event)
        } catch (error) {
          console.log(error)
        }

      }
    }

    const home = () => {
      window.location = "/"
    }


    const sendEmail = async (event) => {
      event.preventDefault();

      init("user_UlEkvyF6hcTIAJCk8jXLL");
      
      sendForm('service_qj7p697', 'template_botfcrk', '#contact-form')
        .then(function() {
          setConfirmation("message sent!");
        }, function(error) {
        console.log('FAILED...', error);
      });
    }

    return (
        <div>
            <div className="pageWrapper">
                <div className="pageText">
                    <h1>Contact</h1>
                </div>
                <div className="pageBanner">
                </div>
            </div>
            <div className="contactCard">

                <div className="contactWrapper">
                    <h2>Contact us</h2>
                    <p>Leave us an enquiry and we will get back to you as soon as we can.</p>
                  {
                    confirmation ? 
                      <div className='confirmation'>
                        <h3>{confirmation}</h3>
                        <button className="btn-primary" type="submit" value="home" onClick={home}><p>Home</p></button>
                      </div> 
                    :
                      <form onSubmit={sendMessage} id="contact-form">
                        <input name="from_name" value={from} onChange={(e) => setFrom(e.target.value)} type="text" placeholder="Name" />
                        <br />
                        <input name="contact" value={contact} onChange={(e) => setContact(e.target.value)} type="text" placeholder="Phone or Email address (preferred contact)" />
                        <br />
                        <textarea name="message" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Leave a message" ></textarea>
                        <br />
                        <input className="btn-primary" type="submit" value="Send Message"/>
                      </form>
                  }
                </div> 
            </div>
        </div>
    )
}