import React from 'react'
import TruckS from '../images/truck_s.svg'
import TruckM from '../images/truck_m.svg'
import TruckL from '../images/truck_l.svg'

function Size(props) {

  function handleClick(e) {
    e.preventDefault()
    if (e.target.value === "5k Litres") {
        props.setLocation('5k Litres')
    } 
    if (e.target.value === "10k Litres") {
      props.setLocation('10k Litres')
    }
    if (e.target.value === "14k Litres") {
      props.setLocation('14k Litres')
    }
    props.setFormStep(3);
}

  function backStep() {
    props.setFormStep(0);
  }

    return (<>
            <h1>Tank refill size</h1>
            <div className="servicesBox">
                <button className="btn-primary" type="submit" value="5k Litres" onClick={handleClick}><p>5k Litres</p><img alt="small truck" src={TruckS} /></button>
                <button className="btn-primary" type="submit" value="10k Litres" onClick={handleClick}><p>10k Litres</p><img alt="medium truck" src={TruckM} /></button>
                <button className="btn-primary" type="submit" value="14k Litres" onClick={handleClick}><p>14k Litres</p><img alt="large truck" src={TruckL} /></button><hr />
            </div>
          <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>
</>
    )
}

export default Size
