import React from 'react'
import './styles.css'
import '../images/animations.css'
import '../App.css'
import logo from '../images/MB_Logo.svg'

export default function Services() {
    return (
        <div>
            <div className="pageWrapper">
                <div className="pageText">
                    <h1>Services</h1>
                </div>
                <div className="pageBanner">
                </div>
            </div>
            <div className="servicesCard">
                <div className="servicesWrapper">
                <a className="anchor" id="fill"></a>
                    <h2>Water tank refill service</h2>
                    <div className="servicesBox">
                        <h3>
                            Maraetai Blue supplies clean water to Pohutukawa coast households.<br />
                        </h3><hr />
                            <p>We deliver water from our tankers to your home water tank ensuring you have drinking water, pool water and spa water all year round. <br /><br />Maraetai Blue Ltd offers three load sizes - the <b>5,000 litre</b> tank (for a smaller tank, or for when rain is forecast) a big <b>10,000 litre</b> tank and a huge <b>14,000 litre</b> tank. 
                        <br/><br/>
                            The water we provide is high standard, Ministry of Health approved, pristine drinking water. Sourced from Ministry of Heath Approved suppliers and delivered in stainless steel tanks that are all individually tested and meet national food grade hygiene standards. Whether you are commercial or residential our water will live up to all expectations . <br /><br />
                            <b>Clean and pure, Maraetai Blue water.</b>
                        </p>
                        <img alt="maraetai blue logo" src={logo} style={{transform: 'translateY(0.5em)'}}/>
                    </div>
                </div>
                <a className="anchor" id="clean"></a>
                <div className="servicesWrapper">
                    <h2>Water tank cleaning service</h2>
                    <div className="servicesBox">
                        <h3>
                            Maraetai Blue provides a full tank clean and inspection service for Pohutukawa coast households.<br />
                        </h3><hr />
                        <p> This means we get inside your water tank to <b>remove all contaminated water, scrub the walls</b> and suck up and <b>remove any sludge, sediment</b> or <b>dead animals. <br />We then rinse the tank</b> and remove the excess water. We can also inspect the inside condition of your tank, taking photos and providing details of any findings.
                        <br /><br />Our tank cleaning service comes with a <b>refill of your tank</b> with our sister business, Maraetai Blue Water Delivery. This ensures you with <b>priority delivery to minimise wait times, even in times of high water demand.</b>
                        <br /><br />Our prices range from $250 to $350 depending on the number of tanks, size and location.  Each situation is different so call Jacob for a quote on 021 0298 4170.
                        <br /><br /><b>Let Maraetai Blue take care of your water tank, stress free!</b>
                        </p><img alt="maraetai blue logo" src={logo} style={{transform: 'translateY(0.5em)'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}