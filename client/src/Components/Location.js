import React from 'react'


const Location = (props) => {

  function handleClick(e) {
      e.preventDefault()
        props.setLocation(e.target.value)
      props.setFormStep(2);
  }

    function backStep() {
      props.setFormStep(0);
    }

    return (
      <>
      <h1>Location</h1>
        <div className="servicesBox">
            <input className="btn-primary" type="submit" value="Maraetai" onClick={handleClick}/>
            <input className="btn-primary" type="submit" value="Beachlands" onClick={handleClick}/>
            <input className="btn-primary" type="submit" value="Whitford" onClick={handleClick}/>
        </div><br />
      <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>

      </>
    )
}

export default Location
