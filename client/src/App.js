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

const App = () => {
    return(
        <div>
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
                </Routes>
            </Router>
        </div>
    )
}

export default App