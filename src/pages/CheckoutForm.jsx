import React, { useState, useEffect, useContext } from 'react'
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useSession from '../hooks/useSession';
import { AuthContext } from '../provider/AuthProvider';

export default function CheckoutForm({loadedSessionDetails}) {
const {registrationFee} = loadedSessionDetails
const stripe = useStripe();
const elements = useElements();
const [error,setError]=useState('');
const [transactionId,setTransactionId]=useState('');
const [clientSecret,setClientSecret]=useState('');
const axiosSecure = useAxiosSecure();
const {user}=useContext(AuthContext);

useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{registrationFee: registrationFee})
    .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
    })
},[axiosSecure,registrationFee])

const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
        return;
    }  
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    });
    if(error){
    console.log('payment error',error)
    setError(error.message)
    }
    else{
    console.log('payment method',paymentMethod)
    setError('');
    }

    const {paymentIntent,error: confirmError} = await stripe.confirmCardPayment(clientSecret,{
        payment_method: {
            card: card,
            billing_details: {
                email: user?.email || 'anonymous',
                name: user?.displayName || 'anonymous'
            }
        }
    })
    if(confirmError){
        console.log('Confirm Error')
    }
    else{
        console.log('payment intent',paymentIntent)
        if(paymentIntent.status === 'succeeded'){
            console.log('transaction id',paymentIntent.id)
            setTransactionId(paymentIntent.id)

            
        }
    }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button classname='btn btn-sm bg-purple-500 text-white my-4' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-600 '>{error}</p>
      {
        transactionId && <p className='text-green-600'>Your Transaction Id {transactionId}</p>
      }
        </form>
    </div>
  )
}
