import React from 'react'
import '../Pages/styles.css'
import '../images/animations.css'
import Truck from '../images/truck1.jsx'

export default function Landing() {
    return (
        <div className="landingWrapper">
            <div className="landingText">
                <h1>Maraetai Blue</h1>
                <h3>Pohutukawa coast water tank delivery and cleaning service.</h3> <hr />
                <a className="btn-primary landing" href='#services'>Water Delivery</a>
                <a className="btn-secondary landing" href='/contact'>Tank Clean</a>
            </div>
            <div className="landingBanner">
            </div>
            <Truck />
        </div>
    )
}