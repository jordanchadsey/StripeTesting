import React from 'react'
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from './constants/stripe';
import PAYMENT_SERVER_URL from './constants/server';

const CURRENCY = 'USD';



const successPayment = data => {
  alert('Payment Successful');
};

const errorPayment = data => {
  alert('Payment Error');
};

const onToken = (amount, description) => token =>
  axios.post(PAYMENT_SERVER_URL,
    {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount,
      email: token.email
    })
    .then(successPayment)
    .catch(errorPayment);

const Checkout = ({ name, description, amount}) =>
  (<StripeCheckout
    name={name}
    description={description}
    image="https://i.imgur.com/tnJJirF.png"
    amount={amount}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}

  >
  <button className="btn btn-primary">
    HI THERE
  </button>
</StripeCheckout>);

export default Checkout;
