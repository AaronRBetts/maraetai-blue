import React from 'react'
import '../Pages/styles.css'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from './CheckoutForm'

// const stripeTestPromise = loadStripe(`${process.env.STRIPE_SECRET}`);

const PUBLIC_KEY = "pk_test_51KR145JQqPwcINkruyDydpLonRLYikOayw8v2yyP9k6DcSOIIbzyA42j8KZM3bf6kQKyD2gTZzlvleWcm0ObvMf900y4amclNC"
const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Payment = (props) => {
  return (
      <>
        <Elements stripe={stripeTestPromise}>
            <CheckoutForm setFormStep={props.setFormStep} bookAppointment={props.bookAppointment} total={props.total}/>
        </Elements>
      </>
  )
}

export default Payment