import React from 'react'

const Size = (props) => {

  function handleClick(e) {
    e.preventDefault()
    props.setSize(e.target.value)
    props.setFormStep(3);
    switch (e.target.value) {
      case "5k Litres":
      props.setTotal(170)
        break;
      case "10k Litres":
        props.setTotal(260)
        
        break;
      case "14k Litres":
        props.setTotal(300)
        break;
    
      default:
        break;
    }
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
