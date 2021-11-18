import React from 'react'
import '../Pages/styles.css'
import '../App.css'

const Info = (props) => {

    function backStep() {
      props.setFormStep(2);
    }

    function nextStep() {
      props.setFormStep(4);
    }

    return (
        <div className="card">
        <div className="authBox">
            <h1>Info</h1>
            <div className="infoBox">
                <br />
                <input value={props.userPhone} onChange={(e) => props.setUserPhone(e.target.value)} type="text" placeholder="Phone" />
                <br />
                <input value={props.userAddress} onChange={(e) => props.setUserAddress(e.target.value)} type="text" placeholder="Address" />
                <br />
                <textarea rows="5" value={props.userNotes} onChange={(e) => props.setUserNotes(e.target.value)} type="text" placeholder="Leave us a message" ></textarea>
                <br />
                
                <div className="apptButtons">
                <input className="btn-primary" type="submit" value="Continue" onClick={nextStep}/>
                <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Info