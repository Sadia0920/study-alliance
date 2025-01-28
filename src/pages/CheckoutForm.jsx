import React, { useState, useEffect, useContext } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useSession from '../hooks/useSession';
import { AuthContext } from '../provider/AuthProvider';

export default function CheckoutForm({loadedSessionDetails}) {
  const {_id,sessionTitle,tutorName,tutorEmail,averageRating,sessionDescription,registrationStartDate,registrationEndDate,classStartDate,classEndDate,sessionDuration,registrationFee} = loadedSessionDetails
// console.log(registrationFee)
const stripe = useStripe();
const elements = useElements();
const [error,setError]=useState('');
const [transactionId,setTransactionId]=useState('');
const [clientSecret,setClientSecret]=useState('');
const axiosSecure = useAxiosSecure();
const {user}=useContext(AuthContext);
const navigate = useNavigate();

useEffect(()=>{
    axiosSecure.post('/create-payment-intent',{registrationFee: registrationFee})
    .then(res => {
        // console.log(res.data.clientSecret)
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
    // console.log('payment error',error)
    setError(error.message)
    }
    else{
    // console.log('payment method',paymentMethod)
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
        // console.log('Confirm Error')
    }
    else{
        // console.log('payment intent',paymentIntent)
        if(paymentIntent.status === 'succeeded'){
            console.log('transaction id',paymentIntent.id)
            setTransactionId(paymentIntent.id)

            if(user && user.email){
              const bookedSession = {
                studySessionID: _id,
                studentEmail: user.email,
                sessionTitle,
                tutorName,
                tutorEmail,
                sessionDescription,
                registrationStartDate,
                registrationEndDate,
                classStartDate,
                classEndDate,
                sessionDuration,
                registrationFee,
              }
          
              // send data to the server
                 try{
                     axiosSecure.post('/bookedSession', bookedSession)
                     .then(res => {
                    //  console.log(res.data)
                       if(res.data.insertedId){
                           Swal.fire({
                               title: 'Success',
                               text: 'Booked Session successfully',
                               icon: 'success',
                               confirmButtonText: 'Ok'
                             })
                       }
                       navigate('/dashboard/viewBookedSession')
                   })
                 }
                 catch (err) {
                     Swal.fire({
                         title: 'Error',
                         text: 'Booked Session error',
                         icon: 'error',
                         confirmButtonText: 'Ok'
                       })
                 }
            }
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
      <button className='btn bg-[rgb(76,48,161)] text-white my-4' type="submit" disabled={!stripe || !clientSecret}>
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
