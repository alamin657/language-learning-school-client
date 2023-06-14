import React, { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
    const { id } = useParams()
    const [payments, setPayments] = useState([])
    useEffect(() => {
        fetch(`https://language-learning-school-server-alamin657.vercel.app/student/${id}`)
            .then(res => res.json())
            .then(data => setPayments(data))
    }, [id])
    return (
        <div className='mt-4 ml-4'>
            <h1 className='text-center text-xl text-purple-600'>Thanks for coming to Payment!!!</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm enrolled={payments?.enrolled} image={payments?.image} price={payments?.price} id={payments._id}></CheckoutForm>
            </Elements>
        </div>
    )
};
export default Payment;