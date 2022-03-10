import React, {  useEffect, useState } from 'react'
import './styles.css'
import '../App.css'
import Appointment from '../Components/Appointment'
import Service from '../Components/Service'
import Info from '../Components/Info'
import Confirmation from '../Components/Confirmation'
import Size from '../Components/Size'
import Location from '../Components/Location'
import Landing from '../Components/Landing'
import Post from '../Components/Post'
import HomeContent from '../Components/HomeContent'
import Banner from '../Components/Banner'

function Home() {
    const [formStep, setFormStep] = useState(0)
    const [user, setUser] = useState('')
    const [service, setService] = useState('')
    const [location, setLocation] = useState('')
    const [size, setSize] = useState('')
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
       .then(data => data.error ? console.log('error logging in') : login(data))
    }, [])

    function login(user) {
      setUser(user)
      setUserPhone(user.phone)
      setUserAddress(user.address)
    }

    function renderForm() {
      switch (formStep) {
        case 0:
          return <Service 
          user={user}
          setService={setService} 
          setFormStep={setFormStep}/>
        case 1:
          return <Location setFormStep={setFormStep} 
          setLocation={setLocation}
          user={user}
          />
        case 2:
          return <Size setFormStep={setFormStep} 
          user={user}
          setSize={setSize}
          />
        case 3:
          return <Appointment 
          setFormStep={setFormStep} 
          user={user}
          setSelectedDay={setSelectedDay}
          selectedDay={selectedDay}
          />
        case 4:
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
        case 5:
          return <Confirmation 
          setFormStep={setFormStep} 
          user={user} 
          service={service}
          size={size}
          location={location}
          selectedDay={selectedDay}
          userPhone={userPhone}
          userAddress={userAddress}
          userNotes={userNotes}
          />
        case 6:
          return <Post 
          user={user} 
          service={service}
          size={size}
          location={location}
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
          <a id="services" className="anchor"></a>
          <div className='home'>
            <div className='servicesForm'>
              {renderForm()}
              <br />
              <br />
              {user ? 
                    <p style={{color: 'grey', marginTop: '1em'}}>Logged in as {user.name}</p> : 
                    <p><a href="/login">Log in</a> or <a href="/register">Register</a></p>
                    }
            </div>
          </div>
          <Banner />
          <HomeContent />
          <Banner />
        </div>
    )
}

export default Home
