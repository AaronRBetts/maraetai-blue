import React, { useState, useEffect } from 'react'
import './styles.css'
import '../App.css'

function Bookings() {
    let today = new Date();
    console.log(today)
    const [appointments, setAppointments] = useState([])
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
      fetch(`${process.env.REACT_APP_APIURL}/api/bookings`, {
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
            <h1>Your Appointments</h1>
            <div className="appointmentsWrapper">
              {appointments/*.filter(a => a.date >= today)*/ ? appointments/*.filter(a => a.date >= today)*/.map((appointment, i) => (
              <div key={i}>
                <div className="headerBanner">
                  <h2>{appointment.service}<br /></h2>
                  <h5>{new Date(appointment.date).toLocaleDateString('en-GB', options)}</h5>
                </div>
                <div className="appointmentWrapper">
                  <div className="confirmationSection" style={{textAlign: 'Left'}}>
                    <p><b>Size:</b></p><p>{appointment.size}</p>
                    <p><b>Location:</b></p><p>{appointment.location}</p>
                    <p><b>Name:</b></p><p>{appointment.userName}</p>
                    <p><b>Phone:</b></p><p>{appointment.userPhone}</p>
                    <p><b>Address:</b></p><p>{appointment.userAddress}</p>
                    {appointment.userNotes ? <><p><b>Notes:</b></p><p>{appointment.userNotes}</p></> : <></> }
                  </div>
                <a className="btn-primary" href="/#services">Re-order</a>
                </div>
              <br />
              </div>
              )
              ) : 
                <h3>You have no upcoming appointments.</h3>  
              }
            </div>
            {/* <h1>Past Appointments</h1>
            <div className="appointmentsWrapper">
            {appointments.filter(a => a.date.getTime <= today) ? appointments.filter(a => a.date.getTime <= today).map((appointment, i) => (
              <div key={i}>
                <div className="headerBanner">
                  <h2>{appointment.service}<br /></h2>
                  <img alt="maraetai blue logo" src={logo}/>
                  <h5>{new Date(appointment.date).toLocaleDateString('en-GB', options)}</h5>
                </div>
                <div className="appointmentWrapper">
                  <div className="confirmationSection" style={{textAlign: 'Left'}}>
                    <p><b>Name:</b></p><p>{appointment.userName}</p>
                    <p><b>Phone:</b></p><p>{appointment.userPhone}</p>
                    <p><b>Address:</b></p><p>{appointment.userAddress}</p>
                    {appointment.userNotes ? <><p><b>Notes:</b></p><p>{appointment.userNotes}</p></> : <></> }
                  </div>
                <a className="btn-primary" href="/#services">Re-order</a>
                </div>
              <br />
              </div>
              )
              ) : 
                <h3>You have no past appointments.</h3>  
              }
            </div> */}
          </div>
        </div>
      </div>
    )
}

export default Bookings
