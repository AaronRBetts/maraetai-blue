import React from 'react'


function Location(props) {

  function handleClick(e) {
      e.preventDefault()
      if (e.target.value === "Maraetai") {
          props.setLocation('Maraetai')
      } 
      if (e.target.value === "Beachlands") {
        props.setLocation('Beachlands')
      }
      props.setFormStep(2);
  }

    function backStep() {
      props.setFormStep(0);
    }

    return (
        <div className="card">
        <div className="authBox">
            <h1>Location</h1>
            <div className="servicesBox">
                <button className="btn-primary" type="submit" value="Maraetai" onClick={handleClick}><p>Maraetai</p></button>
                <button className="btn-primary" type="submit" value="Beachlands" onClick={handleClick}><p>Beachlands</p></button>
            </div>
          <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>

          </div>
        </div>
    )
}

export default Location
