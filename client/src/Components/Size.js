import React from 'react'
import TruckS from '../images/truck_s.svg'
import TruckM from '../images/truck_m.svg'
import TruckL from '../images/truck_l.svg'

function Size(props) {

    function backStep() {
      props.setFormStep(0);
    }
  
    async function nextStep() {
      props.setFormStep(2);
    }

    return (
        <div className="card">
        <div className="authBox">
            <h1>Tank refill size</h1>
            <div className="servicesBox">
                <button className="btn-primary" type="submit" value="5k Litres" onClick={nextStep}><p>5k Litres</p><img alt="small truck" src={TruckS} /></button> <br/>
                <button className="btn-primary" type="submit" value="10k Litres" onClick={nextStep}><p>10k Litres</p><img alt="medium truck" src={TruckM} /></button><br/>
                <button className="btn-primary" type="submit" value="14k Litres" onClick={nextStep}><p>14k Litres</p><img alt="large truck" src={TruckL} /></button><br/><hr />
            </div>
          <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>

          </div>
        </div>
    )
}

export default Size
