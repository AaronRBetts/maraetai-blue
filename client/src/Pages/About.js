import React from 'react'
import './styles.css'
import '../images/animations.css'
import '../App.css'
import logo from '../images/MB_Logo.svg'

export default function About() {
    return (
        <div>
            <div className="pageWrapper">
                <div className="pageText">
                    <h1>About us</h1>
                </div>
                <div className="pageBanner">
                </div>
            </div>
            <div className="servicesCard" id="fill">
                <div className="servicesWrapper">
                    <h2>Maraetai Blue Ltd</h2>
                    <div className="servicesBox">
                        <h3>
                            Maraetai Blue supplies clean water to East Auckland households.<br />
                        </h3><hr />
                            <p>Jacob Patchett, a friendly local man born and raised in Maraetai, started Maraetai Blue Tank Cleaning 8 years ago. His business is a sister business to the Maraetai Blue water delivery company.
                            <br /><br />
                            Jacob believes in personal service and going the extra mile for his customers. His attention to detail and quality workmanship are second to none. 
                            <br/><br/>
                            The water we provide is high standard, Ministry of Health approved, pristine drinking water. Sourced from Ministry of Heath Approved suppliers and delivered in stainless steel tanks that are all individually tested and meet national food grade hygiene standards. Whether you are commercial or residential our water will live up to all expectations . <br /><br />
                            <b>Clean and pure, Maraetai Blue water.</b>
                        </p><img alt="maraetai blue logo" src={logo} style={{transform: 'translateY(0.5em)'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}