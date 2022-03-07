import React from 'react'

const Post = (props) => {  
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
    return (
        <div className="card">
          <div>
              <h1>Thank you for your order!</h1>
              <div>
                  <hr />
                <h4>Order Details</h4>
                  <div className="confirmationSection">
                    <p><b>Date:</b></p><p>{props.selectedDay.toLocaleDateString('en-GB', options)}</p>
                    <p><b>Service:</b></p><p>{props.service}</p>
                    <p><b>Size:</b></p><p>{props.size}</p>
                    <p><b>Area:</b></p><p>{props.location}</p>
                  </div>
                  <hr />
                <h4>Your Details</h4>
                  <div className="confirmationSection">
                    <p><b>Name:</b></p><p>{props.user.name}</p>
                    <p><b>Phone:</b></p><p>{props.userPhone}</p>
                    <p><b>Address:</b></p><p>{props.userAddress}</p>
                    {props.userNotes ? <><p><b>Notes:</b></p><p>{props.userNotes}</p></> : <></> }
                  </div>
                  <div className="apptButtons postOrder">
                    <h3>Order successful!</h3>
                    <a className="btn-primary" href="/">Home</a>
                  </div>
              </div>
  
            </div>
        </div>
    )
}

export default Post
