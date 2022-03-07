import React from 'react'

const Size = (props) => {

  function handleClick(e) {
    e.preventDefault()
    props.setSize(e.target.value)
    props.setFormStep(3);
}

  function backStep() {
    props.setFormStep(1);
  }

    return (<>
            <h1>Tank refill size</h1>
            <div className="servicesBox apptButtons">
                <input className="btn-primary" type="submit" value="5k Litres" onClick={handleClick}/>
                <input className="btn-primary" type="submit" value="10k Litres" onClick={handleClick}/>
                <input className="btn-primary" type="submit" value="14k Litres" onClick={handleClick}/><br />
          <input className="btn-secondary" type="submit" value="Back" onClick={backStep}/>
            </div>
</>
    )
}

export default Size
