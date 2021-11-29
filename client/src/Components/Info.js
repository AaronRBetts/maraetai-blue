import React, { useState, useEffect, useRef } from 'react';
import '../Pages/styles.css'
import '../App.css'

const Info = (props) => {
  const [err, setErr] = useState({})
  const [disable, setDisabled] = useState(true)

  const firstRender = useRef(true)

  useEffect(() => {
  
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    setDisabled(formValidation())
    
  }, [props.userPhone, props.userAddress])
  
  const formValidation = () => {
    let regPhone = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
    let regAddress = /^[a-zA-Z0-9\s,.'-]{3,}$/;
    let newErrors = {}
    let err = false

    if (!regPhone.test(props.userPhone)) {
      newErrors.phone = <><hr/>Enter a valid phone number</>
      err = true
    }
    if (!regAddress.test(props.userAddress)) {
      newErrors.address = <><hr/>Enter a valid address</>
      err = true
    }
    setErr(newErrors)
    return err;
  }

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
                <input value={props.userPhone} onChange={(e) => props.setUserPhone(e.target.value)} type="text" placeholder='Phone' />
                <br />
                <input value={props.userAddress} onChange={(e) => props.setUserAddress(e.target.value)} type="text" placeholder="Address" />
                <br />
                <textarea rows="5" value={props.userNotes} onChange={(e) => props.setUserNotes(e.target.value)} type="text" placeholder="Leave us a message" ></textarea>
                <br />
                <div className="apptButtons">
                <input disabled={disable} className="btn-primary" type="submit" value="Continue" onClick={nextStep}/>
                <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>
                </div>
            </div>
          <div style={{color: 'red', maxWidth: 'fit-content', margin: 'auto'}}>
            {err.phone && <p>{err.phone}</p>}
            {err.address && <p>{err.address}</p>}
          </div>

            </div>
        </div>
    )
}

export default Info