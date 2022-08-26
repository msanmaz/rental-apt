import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export default async function handler(req, res){
  const { amount, payment_intent_id } = req.body
  console.log(req.body)
  if(req.method === 'POST')
  {
    console.log(amount)
    if (payment_intent_id) {
      try {
        // If a payment_intent_id is passed, retrieve the paymentIntent
        const current_intent = await stripe.paymentIntents.retrieve(
          payment_intent_id
        );
        // If a paymentIntent is retrieved update its amount
        if (current_intent) {
          const updated_intent = await stripe.paymentIntents.update(
            payment_intent_id,
            {
              amount: amount,
            }
          );
          res.status(200).json(updated_intent);
          return;
        }
      } catch (e) {
        //Catch any error and return a status 500
        if (e.code !== 'resource_missing') {
          const errorMessage =
            e instanceof Error ? e.message : 'Internal server error';
          res.status(500).json({ statusCode: 500, message: errorMessage });
          return;
        }
      }
    }
    try {
      // Create PaymentIntent
      const params = {
        amount: amount,
        currency: 'eur',
        description: 'Payment description',
        automatic_payment_methods: {
          enabled: true,
        },
      };
      const payment_intent = await stripe.paymentIntents.create(params);
      //Return the payment_intent object
      res.status(200).json(payment_intent);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error';
      res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  }


  res.end()
 
};
