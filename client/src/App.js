import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Bookings from './Pages/Bookings'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Profile from './Pages/Profile'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Confirmation from './Components/Confirmation'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {
    return(
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />}/>
                <Route path="/bookings" element={<Bookings />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register"  element={<Register />} />
                <Route path="/home"  element={<Home />} />
                <Route path="/confirm"  element={<Confirmation />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default App