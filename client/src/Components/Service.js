import React from 'react'
import '../Pages/styles.css'
import '../App.css'
import fill from '../images/fill.png'
import clean from '../images/cleaning.png'

const Service =(props) => {

    function bookDelivery() {
        props.setService('Water tank fill')
        props.setFormStep(1)
    }

    return (
    <>
                <h3>Select a service</h3><br />
                <div className="servicesBox">
                    <div className="tabs">
                        <div className="tab">
                            <h2>Water Delivery</h2>
                            <img className="logo" alt="maraetai blue logo" src={fill}/>
                            <div className="tab-content">
                                <div className="servicesBtnWrapper">
                                    <button className="btn-primary" onClick={bookDelivery}><p>Book Delivery</p></button>
                                    <button className="btn-secondary"><a href="/services">Learn more</a></button>
                                </div>
                            </div>
                        </div>
                        <div className="vr"></div>
                        <div className="tab">
                            <h2>Tank Clean</h2>
                            <img className="logo" alt="maraetai blue logo" src={clean}/>
                            <div className="tab-content">
                                <div className="servicesBtnWrapper">
                                <div className="servicesBtnWrapper">
                                <a href="/contact"><button className="btn-primary">Book Clean</button></a>
                                    <a href="/services"><button className="btn-secondary">Learn more</button></a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
    )
}

export default Service