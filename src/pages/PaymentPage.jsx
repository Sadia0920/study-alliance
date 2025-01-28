import React from 'react'
import { Helmet } from 'react-helmet-async';
import {loadStripe} from '@stripe/stripe-js';
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('import.meta.env.Vite_Payment_Gateway_PK');
import { useLoaderData } from 'react-router-dom';

export default function PaymentPage() {
  const loadedSessionDetails = useLoaderData()
  console.log(loadedSessionDetails)
  return (
     <div className='w-10/12 mx-auto mt-36 py-7'>
        <Helmet>
          <title>Study Alliance | Payment</title>
        </Helmet>
        <div className=' bg-base-200 rounded-xl p-10'>
        <h2 className='text-center text-4xl font-bold text-[#374151]'>Payment</h2>
      <Elements  stripe={stripePromise}>
      <CheckoutForm loadedSessionDetails={loadedSessionDetails}></CheckoutForm>
    </Elements>
    </div>
    </div>
  )
}
