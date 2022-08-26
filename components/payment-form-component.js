import React ,{useState,useEffect}from 'react'
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js'


const PaymentForm = ({total}) => {
    const stripe = useStripe()
    const elements = useElements()

    const [clientSecret, setClientSecret] = useState('');
    const [paymentIntent, setPaymentIntent] = useState('');
    useEffect(() => {
        if(total > 0) {
            fetch('api/payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  amount: total,
                  payment_intent_id: '',
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                  setClientSecret(data.client_secret), setPaymentIntent(data.id);
                });
        }

    }, [total]);

    const paymentHandler = async (e) => {
        e.preventDefault()

        if(!stripe || !elements){
            return;
        }

        const response = await fetch('/api/payment-intent', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                amount: total,
                payment_intent_id: paymentIntent,
              })
        }).then(res => res.json())
        console.log(response)
        
    }


    return (
        <>
        <form onSubmit={paymentHandler}>
        <div className='flex  flex-col items-center justify-center'>
                <div className='w-1/4  bg-white rounded-lg'>
                <CardElement />

                </div>
                <button type={'submit'}  className='w-1/4 uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-black bg-gray-300 rounded-lg border-gray-900 hover:bg-gray-700 hover:text-white disabled:hover:bg-gray-900 disabled:hover:text-white'>{total > 0 ? `Pay ${total+'$'} Now` : 'Pay Now'}</button>
            </div>

        </form>

        </>
    )
}

export default PaymentForm