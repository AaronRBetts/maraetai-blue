import React, {useState} from 'react'
import '../Pages/styles.css'
import {FaSpinner} from 'react-icons/fa'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#0e748d",
      color: "#000",
      fontWeight: 500,
      fontFamily: "Verdana, Open Sans, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":=webkit-autofill": {color: "#fce883"},
      "::placeholder": {color: "##87bbfd"},
      lineHeight: '2em',
      border: 'none',
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    }
  }
}

function CheckoutForm(props) {
    // const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    function backStep() {
      props.setFormStep(4);
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });
  
      if (!error) {
        setLoading(true);
        try {
          const {id} = paymentMethod
          const response = await fetch(`${process.env.REACT_APP_APIURL}/api/payment`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              amount: 10000,
              id
            })
          })
          const data = await response.json();

          if(data.success) {
            try {
              props.bookAppointment();
            } catch (err) {
              console.log("Error: ", err.message)
            }
          }
        } catch (err) {
          console.log("Error: ", err.message)

        }
      } else {
        console.log(error.message);
      }
    };
  
    return (
      <>
      {!loading ?
      <>
        <form onSubmit={handleSubmit}>
          <hr />
          <br />
          <h3>Confirm Payment</h3>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <div className='apptButtons'>
            <input className='btn-primary' value="pay" type="submit"/><br />
          <input className='btn-secondary' onClick={backStep} value="back"/>
          </div> 
        </form> 
      </>
      :
      <div>
        <p>Processing payment</p>
        <br />
        <FaSpinner className='spinner'/>
      </div>
      }
      </>

    );
}

export default CheckoutForm