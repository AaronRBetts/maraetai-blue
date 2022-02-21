import React from 'react'
import '../Pages/styles.css'
import '../App.css'
import Scheduler from './Scheduler'

function Appointment(props) {

    return (
        <>
              <h1>Choose a date</h1>
              <Scheduler 
              user={props.user}
              setFormStep={props.setFormStep} 
              selectedDay={props.selectedDay} 
              setSelectedDay={props.setSelectedDay} />
        </>
    )
}

export default Appointment
