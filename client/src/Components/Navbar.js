import React, { Component } from 'react'
import logo from '../images/MB_Logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../App.css'

export default class Navbar extends Component {
    state={
        isOpen: false
    }

    handleToggleNav = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }

    render() {

        function logout() {
            localStorage.removeItem('token')
            window.location.reload(false);
        }

        return (
            <nav className="navbar">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="Maraetai Blue" className="nav-logo"/>
                    </Link>
                        {/* <h4 className="nav-logo-text">Maraetai Blue Limited</h4> */}
                    <button type="button" className="nav-btn" onClick={this.handleToggleNav}>
                        <FaAlignRight className="nav-icon" />
                    </button>
                </div>
                <div className="nav-center">
                    <ul className={this.state.isOpen? "nav-links show-nav": "nav-links"} onClick={this.handleToggleNav}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {localStorage.getItem('token') &&
                        <>
                            <div className="vr"></div>
                            <li>
                                <Link to="/bookings">My bookings</Link>
                            </li>
                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                            <div className="vr"></div>
                        </>
                        }
                        <li>
                            <Link to="/services">Services</Link>
                        </li>
                        <li>
                            <Link to="/about">About us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact us</Link>
                        </li>
                        {localStorage.getItem('token') ? 
                        <>
                            <li>
                                <Link to="/home" onClick={logout}>Logout</Link>
                            </li>        
                        </> 
                        :
                        <>
                            <div className="vr"></div>
                            <li>
                                <Link to="/Login">Login</Link>
                            </li>
                            <li>
                                <Link to="/Register">Register</Link>
                            </li>                        
                        </>
                        }
                    </ul>
                </div>
            </nav>
        )
    }
}
