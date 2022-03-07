import React from 'react'
import '../Pages/styles.css'
import '../App.css'
import Payment from './Payment'

require('dotenv').config();

const Confirmation = (props) => {
  
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    async function bookAppointment() {

        try {
          const response = await fetch(`${process.env.REACT_APP_APIURL}/api/book`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              date: props.selectedDay,
              service: props.service,
              location: props.location,
              size: props.size,
              userName: props.user.name,
              userEmail: props.user.email,
              userPhone: props.userPhone,
              userAddress: props.userAddress,
              userNotes: props.userNotes,
            })
          })
          const data = await response.json();
          processAppointment(data)
        } catch(err) {
          console.log(err)
        }
    }

    function processAppointment(data) {
      console.log('process appointment')
      props.setFormStep(6);
    }

    return (
      <div className="card">
        <div className='confirmationWrapper'>
            <h1>Your order</h1>
            <div>
              <h4>Order Details</h4>
                <div className="confirmationSection">
                  <p><b>Date:</b></p><p>{props.selectedDay.toLocaleDateString('en-GB', options)}</p>
                  <p><b>Service:</b></p><p>{props.service}</p>
                  <p><b>Size:</b></p><p>{props.size}</p>
                  <p><b>Area:</b></p><p>{props.location}</p>
                </div>
              <h4>Your Details</h4>
                <div className="confirmationSection">
                  <p><b>Name:</b></p><p>{props.user.name}</p>
                  <p><b>Phone:</b></p><p>{props.userPhone}</p>
                  <p><b>Address:</b></p><p>{props.userAddress}</p>
                  {props.userNotes ? <><p><b>Notes:</b></p><p>{props.userNotes}</p></> : <></> }<p></p><p></p>
                  <p><b>Total:</b></p><p><b>$100</b></p>
                </div>
                <Payment setFormStep={props.setFormStep} bookAppointment={bookAppointment}/>
                {/* <div className="apptButtons">
                  <input className="btn-primary" type="submit" value="Confirm" onClick={bookAppointment}/>
                  <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>
                </div> */}
            </div>

          </div>
      </div>
    )
}

export default Confirmation