import React, { useState, useEffect } from 'react'
import './styles.css'
import '../App.css'
import Footer from '../Components/Footer'
import logo from '../images/MB_Logo_alt.svg'

function Bookings() {
    const [appointments, setAppointments] = useState([])
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
      fetch(`${process.env.APIURL}/api/bookings`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            token: localStorage.getItem('token')
          })
        })
      .then(data => data.json())
      .then(data => setAppointments(data))
      }, [])
      
      

    return (
        <div>
          <div className="bookingsCard">
            <div className="bookingsWrapper">
            <h1>Upcoming Appointments</h1>
                  <div className="appointmentsWrapper">
                {appointments.length >= 1 ? appointments.map((appointment, i) => (
                <>
                  <div className="headerBanner">
                    <h2>{appointment.service}<br /></h2>
                    <img alt="maraetai blue logo" src={logo}/>
                    <h5>{appointment.date}</h5>
                  </div>
                  <div className="appointmentWrapper">
                      <div className="confirmationSection" style={{textAlign: 'Left'}}>
                        <p><b>Name:</b></p><p>{appointment.userName}</p>
                        <p><b>Phone:</b></p><p>{appointment.userPhone}</p>
                        <p><b>Address:</b></p><p>{appointment.userAddress}</p>
                        {appointment.userNotes ? <><p><b>Notes:</b></p><p>{appointment.userNotes}</p></> : <></> }
                      </div>
                      </div>
                    <br />
                  </>
                )
                  ) : 
                  <h3>You have no upcoming appointments.</h3>  
                }
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bookings
