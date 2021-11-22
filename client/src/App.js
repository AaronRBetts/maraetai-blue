import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Bookings from './Pages/Bookings'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Navbar from './Components/Navbar'
import Confirmation from './Components/Confirmation'

const App = () => {
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/bookings" exact element={<Bookings />}/>
                <Route path="/services" exact element={<Services />}/>
                <Route path="/about" exact element={<About />}/>
                <Route path="/contact" exact element={<Contact />}/>
                <Route path="/login" exact element={<Login />}/>
                <Route path="/register" exact  element={<Register />} />
                <Route path="/home" exact  element={<Home />} />
                <Route path="/confirm" exact  element={<Confirmation />} />
            </Routes>
        </Router>
    )
}

export default App