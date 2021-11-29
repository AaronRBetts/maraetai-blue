import React, {  useEffect, useState } from 'react'
import './styles.css'
import '../App.css'
import Appointment from '../Components/Appointment'
import Service from '../Components/Service'
import Info from '../Components/Info'
import Confirmation from '../Components/Confirmation'
import Size from '../Components/Size'
import Landing from '../Components/Landing'
import Post from '../Components/Post'

function Home() {
    const [formStep, setFormStep] = useState(0)
    const [user, setUser] = useState('')
    const [service, setService] = useState('')
    const [selectedDay, setSelectedDay] = useState('')
    const [userPhone, setUserPhone] = useState('')
    const [userAddress, setUserAddress] = useState('')
    const [userNotes, setUserNotes] = useState('')

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
       .then(data => data.error ? console.log('error logging in') : setUser(data))
       .then(console.log(user))
       .then(setUserPhone(user.phone))
       .then(setUserAddress(user.address))
      }, [])

    function renderForm() {
      switch (formStep) {
        case 0:
          return <Service 
          user={user}
          setService={setService} 
          setFormStep={setFormStep}/>
        case 1:
          return <Size setFormStep={setFormStep} 
          user={user}
          />
        case 2:
          return <Appointment 
          setFormStep={setFormStep} 
          user={user}
          setSelectedDay={setSelectedDay}
          selectedDay={selectedDay}
          />
        case 3:
          return <Info 
          user={user}
          setFormStep={setFormStep} 
          userPhone={userPhone}
          setUserPhone={setUserPhone}
          userAddress={userAddress}
          setUserAddress={setUserAddress}
          userNotes={userNotes}
          setUserNotes={setUserNotes}
          />
        case 4:
          return <Confirmation 
          setFormStep={setFormStep} 
          user={user} 
          service={service}
          selectedDay={selectedDay}
          userPhone={userPhone}
          userAddress={userAddress}
          userNotes={userNotes}
          />
        case 5:
          return <Post 
          user={user} 
          service={service}
          selectedDay={selectedDay}
          userPhone={userPhone}
          userAddress={userAddress}
          userNotes={userNotes}
          />
        default:
          break;
      }
    }

    return (
        <div>
          <Landing />
          {renderForm()}
        </div>
    )
}

export default Home
