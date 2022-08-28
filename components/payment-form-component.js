import React ,{useState,useEffect, useMemo}from 'react'
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js'
import Spinner from './common/Spinner'
import { useRouter } from 'next/router'

const PaymentForm = ({total,from,to}) => {
    const stripe = useStripe()
    const elements = useElements()
    const router = useRouter()

    const [clientSecret, setClientSecret] = useState('');
    const [paymentIntent, setPaymentIntent] = useState('');
    const [error,setError] = useState('')
    const [success,setSuccess] = useState('')
    const [loading,setLoading] = useState(false)



    useEffect(() => {
        if(total > 0) {
            fetch('api/payment-intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  paid:false,
                  amount: total,
                  from,
                  to,
                  payment_intent_id: '',
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data,'first call to create intent')
                  setClientSecret(data.client_secret), setPaymentIntent(data.id);
                });
        }

    }, [total]);

    const paymentHandler = async (e) => {
        e.preventDefault()

        if(!stripe || !elements){
            return;
        }
        setLoading(true)
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {

            payment_method:{
                card:elements.getElement(CardElement),
                billing_details:{
                    name:'Mert Osanmaz'
                },
            }
        
        })
        console.log(paymentResult,'result')
        setLoading(false)
        if(paymentResult.error) {
            setError(paymentResult.error.message)
        } else {
            if(paymentResult.paymentIntent.status === 'succeeded'){
            
                setSuccess('Payment Successful')
                fetch('api/payment-intent', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                      paid:true,
                      amount: total,
                      from,
                      to,
                      payment_intent_id: paymentResult.paymentIntent.id,
                    }),
                  })
                router.push(`/${paymentResult.paymentIntent.id}`)
                
            }
        }
    }


    return (
        <>
        <form onSubmit={paymentHandler}>
        <div className='flex  flex-col items-center justify-center'>
       
       { success.length > 1 &&
             <div className='font-bold text-base'>{success}</div> 

       } 
       { error.length >1 &&
             <div className='font-bold text-base'>{success}{error}</div> 

       } 
                <div className='w-1/4  bg-white rounded-lg'>
                <CardElement />
                </div>
                <button type={'submit'} disabled={total === 0}  className='w-1/4 uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 text-black bg-gray-300 rounded-lg border-gray-900 hover:bg-gray-700 hover:text-white disabled:hover:bg-gray-900 disabled:hover:text-white'>{loading ? <Spinner/> : `Pay ${total} Now`}</button>
            </div>

        </form>

        </>
    )
}

export default PaymentForm