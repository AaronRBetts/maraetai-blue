import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

export default function Scheduler(props) {

  const today = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


  function handleDayClick(day, { selected }) {
    props.setSelectedDay(selected ? undefined : day)
  }

  function backStep() {
    props.setFormStep(1);
  }

  async function nextStep() {
    props.user ? props.setFormStep(3) : window.location = '/register'

  }

    return (
      <div className="calendar">
        <DayPicker 
          showOutsideDays
          selectedDays={props.selectedDay}
          onDayClick={handleDayClick}
          disabledDays={{ before: today }}
        />
        <h3>
          {props.selectedDay
            ? props.selectedDay.toLocaleDateString('en-GB', options)
            : 'Choose a date on the calendar'}
        </h3>
        <div className="apptButtons">
          <input className="btn-primary" type="submit" value="Continue" onClick={nextStep}/>
          <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>
        </div>
      </div>
    );
}