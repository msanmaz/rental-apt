import '../styles/globals.css'
import {Elements} from '@stripe/react-stripe-js'
import {stripePromise} from '/lib/stripe.utils'


function MyApp({ Component, pageProps }) {
  const appearance = {
    theme: 'stripe',
    labels: 'floating',
  };
  const options = {
    appearance,
  };

  return <Elements options={options} stripe={stripePromise}><Component {...pageProps} /></Elements>
}

export default MyApp
