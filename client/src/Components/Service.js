import React from 'react'
import '../Pages/styles.css'
import '../App.css'
import fill from '../images/fill.png'
import clean from '../images/cleaning.png'

const Service =(props) => {

    function handleClick(e) {
        e.preventDefault()
        if (e.target.value === "Book Delivery") {
            props.setService('Water tank fill')
            props.setFormStep(1)
        } 
        if (e.target.value === "Book Clean") {
            window.location = '/contact'
        }
    }

    return (
    <>
        <div className="card" id="services">
            <div className="authBox">
                <h2>Welcome, {props.user ? props.user.name : 'Guest'}</h2><hr />
                <div className="servicesBox">
                    <div className="tabs">
                        <div className="tab">
                            <h1>Tank Fill</h1>
                            <img className="logo" alt="maraetai blue logo" src={fill}/>
                            <div className="tab-content">
                                <div className="servicesBtnWrapper">
                                    <input className="btn-primary landing" type="submit" value="Book Delivery" onClick={handleClick}/>
                                    <a className="btn-secondary landing" type="submit" href="/services">Learn more</a>
                                </div>
                            </div>
                        </div>
                        <div className="vr"></div>
                        <hr />
                        <div className="tab">
                            <h1>Tank Clean</h1>
                            <img className="logo" alt="maraetai blue logo" src={clean}/>
                            <div className="tab-content">
                                <div className="servicesBtnWrapper">
                                    <input className="btn-primary landing" type="submit" value="Book Clean" onClick={handleClick}/>
                                    <a className="btn-secondary landing" type="submit" href="/services">Learn more</a>
                                </div>
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