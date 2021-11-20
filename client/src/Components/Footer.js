import React from 'react'
import '../Pages/styles.css'
import '../App.css'
import { FaPhone, FaFacebook, FaTwitter } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../Pages/styles.css'
import logo from '../images/MB_Logo_alt.svg'

const Footer = () => {
    return (
        <footer className="footer-clean">
                <div className="container">
                    <div className="row">
                        <div className="item">
                            <h3>Contact</h3>
                            <ul>
                                <p><b>Tank Refill</b></p>
                                <li><FaPhone /> 027 536 6437 <br /> Colleen &amp; Warren</li><br />
                                <p><b>Tank Clean</b></p>
                                <li><FaPhone /> 021 0298 4170 <br /> Jacob</li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3>Services</h3>
                            <ul>
                                <li><Link to="/services">Water Tank Filling</Link></li>
                                <li><Link to="/services">Water Tank Cleaning</Link></li>
                            </ul>
                        </div>
                        <div className="item">
                            <h3>About</h3>
                            <ul>
                                <li><Link to="/">FAQ</Link></li>
                                <li><Link to="/">Maraetai Blue</Link></li>
                            </ul>
                        </div>
                        <div className="item social">
                            <Link to="#https://www.facebook.com/maraetaiblue"><FaFacebook /></Link>
                            <Link to="https://twitter.com/maraetaiblue?lang=fi"><FaTwitter /></Link>
                            <p className="copyright">Maraetai Blue © 2021</p>
                            <img alt="maraetai blue logo" src={logo}/>
                            <p className="copyright">Website from <a href="https://funnelweb.nz/">Funnel Web</a> &amp; <a href="https://AaronRBetts.github.io/">Aaron Betts</a></p>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
