import React, { useState, useEffect } from 'react';
import '../Pages/styles.css'
import '../App.css'

const Info = (props) => {
  const [err, setErr] = useState({})
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setDisabled(formValidation())
    
  }, [, props.userPhone, props.userAddress, props.userNotes])
  
  const formValidation = () => {
    let regPhone = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
    let regAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    let newErrors = {};
    let err = false;

    if (!regPhone.test(props.userPhone)) {
      newErrors.phone = <><hr/><p>Enter a valid phone number</p></>
      err = true
    }
    if (!regAddress.test(props.userAddress)) {
      newErrors.address = <><hr/><p>Enter a valid address</p></>
      err = true
    }
    setErr(newErrors)
    return err;
  }

    function backStep() {
      props.setFormStep(3);
    }

    function nextStep() {
      props.setFormStep(5);
    }

    return (
          <div>
              <h1>Info</h1>
              <div className="infoBox">
                  <br />
                  <input value={props.userPhone} onChange={(e) => props.setUserPhone(e.target.value)} type="text" placeholder='Phone' />
                  <input value={props.userAddress} onChange={(e) => props.setUserAddress(e.target.value)} type="text" placeholder="Address" />
                  <textarea rows="5" value={props.userNotes} onChange={(e) => props.setUserNotes(e.target.value)} type="text" placeholder="Leave us a message" ></textarea>
                  <div className="apptButtons">
               
                  <input className="btn-primary" type="submit" value="Continue" onClick={nextStep}/><br />
                  <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>
                    {/* <button disabled={disable} className='btn-primary' onClick={nextStep}>Continue</button><hr />
                    <button className='btn-secondary' onClick={backStep}>back</button> */}
                  </div>
              </div>
            <div style={{color: 'red', maxWidth: 'fit-content', margin: 'auto'}}>
              {err.phone && err.phone}
              {err.address && err.address}
            </div>

            </div>
    )
}

export default Info